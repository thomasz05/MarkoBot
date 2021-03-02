const commandadmin = require('../../functions/command')
module.exports = (client) => {
  commandadmin(client, 'kick', async (message) => {
    message.delete()
    const { member, mentions, content } = message
    const tag = `<@${member.id}>`
    if (
      message.member.roles.cache.find(role => role.id == "735268905005875320") ||
      member.hasPermission('ADMINISTRATOR') ||
      member.hasPermission('KICK_MEMBERS')
    ) {
      const target = mentions.users.first()
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
        targetMember.send(`Sei stato kickato dal discord di Marko_erre. Motivo: ${reason}`)
        await message.channel.send(`l'utente ${targetMember} è stato cacciato. Motivo: ${reason}`)
        targetMember.kick(reason)
      } else {
        message.channel.send(`${tag} Per favore specifica qualcuno da kickare.`)
      }
    } else {
        message.member.send("Scusa ma sembra che non hai i permessi 🤨")
    }
  })        
}