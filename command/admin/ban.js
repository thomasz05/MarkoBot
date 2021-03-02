const commandadmin = require('../../functions/command')
module.exports = (client) => {
    
    commandadmin(client, 'ban', async (message) => {
        const { member, mentions } = message
        
        const tag = `<@${member.id}>`
        
        if (
            message.member.roles.cache.find(role => role.id == "735268905005875320") ||
            member.hasPermission('ADMINISTRATOR') ||
            member.hasPermission('BAN_MEMBERS')
        ) {
            const target = mentions.users.first()
            const split = content.trim().split(' ')
            console.log(`command ${split}`)
            if (target) {
                
            const reason = content.split(" ").slice(2).join(' ');
        
            if(!reason){
                message.channel.send(`Inserisci la motivazione`)
                return
            }
            const targetMember = message.guild.members.cache.get(target.id)
            if(targetMember.kickable == false) {
                message.channel.send("Questo utente non può essere espulso!");
                return;
            }
            targetMember.send(`Sei stato bannato dal discord di Marko_erre per ${reason} `)
            await message.channel.send(`l'utente ${targetMember} è stato bannato per ${reason}`)
            targetMember.ban(reason)
            } else {
                message.channel.send(`${tag} Specifica qualcuno da bannare..`)
            }
            } else {
                message.member.send("Scusa ma sembra che non hai i permessi 🤨")
            }
    })
}