const redis = require('../../redis')
const command =require('../../functions/command')
const { messages } = require('discord-fetch-all')
const guild = require('../../models/guild')

module.exports = (client) => {
    const redisKeyPrefix = 'muted-'

    redis.expire((message) => {
         if (message.startsWith(redisKeyPrefix)) {
            const split = message.split('-')

            const memberId = split[1]
            const guildId = split[2]

            const guild = client.guilds.cache.get(guildId)
            const member = guild.members.cache.get(memberId)

            const role = getRole(guild)
            member.roles.remove(role)
            console.log('unmute', + member.id)
            member.send(`sei stato smutato`)
        }
    })

    const getRole = (guild) => {
        return guild.roles.cache.find((role) => role.name === 'Mutato')
      }

    const giveRole = member => {
        const role = getRole(member.guild)
        if(role){
            member.roles.add(role)
            console.log('Muted ' + member.id)
        }
    }
    const onJoin = async (member) => {
        const { id, guild } = member
    
        const redisClient = await redis()
        try {
            redisClient.get(`${redisKeyPrefix}${id}-${guild.id}`, (err, result) => {
              if (err) {
                console.error('Redis GET error:', err)
              } else if (result) {
                giveRole(member)
              } else {
                console.log('The user is not muted')
              }
            })
          } finally {
            redisClient.quit()
        }
    }
        
    command(client,'unmute',(message) =>{
        
    })


    command(client,'simjoin',(message) =>{
        onJoin(message.member)
    })

    client.on('guildMemberAdd', member => {
        onJoin(member)
    })

    command(client, 'mute', async message => {
        message.delete()
        const syntax = 'ciao'

        const {member, channel, content, mentions, guild } = message

        if (!message.member.roles.cache.find(role => role.id == "735268905005875320")) {
            message.member.send("Scusa ma sembra che non hai i permessi 🤨")
            return
        }
        const split = content.trim().split(' ')
        console.log(`mute command ${split}`)

        if (split.length !== 4) {
            message.member.send("Scusa stai usando una sitesi sbagliata")
            return
        }

        const duration = split[2]
        const durationtype = split[3]

        if(isNaN(duration)) {
            channel.send('Scusa inserisci la durata')
            return
        }

        const durations = {
            s: 1,
            m: 60,
            h: 60 * 60,
            d: 60 * 60 * 24,
            life: -1,
        }
        if(!durations[durationtype]){
            channel.send('Scusa inserisci il tipo di durata')
            return
        }
        const seconds = duration * durations[durationtype]

        const target = mentions.users.first()

        if(!target){
            channel.send("Scusa inserisci l'uttente da mutare")
            return
        }

        const { id } = target
        const targetMember = guild.members.cache.find((member) => member.id === target.id)
        giveRole(targetMember)
        targetMember.send(`sei stato mutato ${duration}${durationtype}`)
        channel.send(`${targetMember} è stato mutato per ${duration}${durationtype} `)
        const redisClient = await redis()
        try {
            const rediskey = `${redisKeyPrefix}${id}-${guild.id}`
            if(seconds > 0){
                redisClient.set(rediskey, 'true', 'EX', seconds)
            } else{
                redisClient.set(rediskey, 'true')
            }
            
        } finally {
            redisClient.quit()
        }
    })
}