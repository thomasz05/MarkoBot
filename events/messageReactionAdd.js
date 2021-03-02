const guildModel = require('../models/guild')
const createTicket = require('../functions/createTicket')
const ticketModel = require('../models/ticket')
const ticket = require('../models/ticket')
const fetchAll = require('discord-fetch-all')
const fs = require('fs')
const { MessageAttachment, MessageFlags } = require ('discord.js')
const { error } = require('console')


module.exports = async (client, reaction, user) =>{
    if(reaction.message.partial) await reaction.message.fetch()
    if(reaction.partial) await reaction.fetch()
    if(user.bot) return

    const guild = reaction.message.guild

    var guildDoc = await guildModel.findOne({ guildID: guild.id })

    if(!guildDoc) {
        guildDoc = new guildModel({
            guildID: guild.id,
            ticketCount: 0
        })

        await guildDoc.save()
    }


    if(reaction.message.channel.id === '798294861081739264'){
        if(reaction.emoji.name === '📩') {
            const ticketDoc = await ticketModel.findOne({ guildID: guild.id, userID: user.id })
            //const ticket = await ticketModel.findOne({ ticket: ticket1})

            reaction.users.remove(user.id)
            if(ticketDoc) {
               const channel = guild.channels.cache.get(ticketDoc.channelID)
                if(channel) {
                    console.log(channel)
                    user.send('hai già creato un ticket')
                } else {
                    await ticketDoc.deleteOne()
                    createTicket(guild, user, guildDoc, ticketModel)
                    
                }
            } else {
                createTicket(guild, user, guildDoc, ticketModel)
            }
        }
    } else {
        const ticketDoc1 = await ticketModel.findOne({ guildID: guild.id, channelID: reaction.message.channel.id })
        if(ticketDoc1.channelID == reaction.message.channel.id && ticketDoc1.msgID == reaction.message.id) {
            if(reaction.emoji.name == '🔒') {
                reaction.message.channel.delete()
                const UserID = client.users.cache.get(ticketDoc1.userID);
                await ticketDoc1.deleteOne()
                UserID.send(`il ticket ${ticketDoc1.ticket} è stato chiuso`)

            } else if(reaction.emoji.name == '📝') {
                reaction.users.remove(user.id)
                const msgs = await fetchAll.messages(reaction.message.channel, {
                    reverseArray: true
                })

                const content = msgs.map(m => `${m.author.tag} - ${m.content}`)

                fs.writeFileSync('transcript.txt', content.join('\n'), error => {
                    if (error) throw error
                })

                reaction.message.channel.send(new MessageAttachment('transcript.txt', 'transcript.txt'))
            }
        }
        
    }
}