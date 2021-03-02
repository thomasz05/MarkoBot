  
const Discord = require('discord.js')
const fs = require('fs')
const client = new Discord.Client()

const config = require('./config.json')
const firstMessage = require('./functions/first-message')
const roleClaim = require('./functions/role-start')
const commandadmin = require ('./command/admin/command-admin')
const commandUser = require('./command/user/command-user')
const Ticket = require('./events/messageReactionAdd')
const commandmute = require('./command/admin/mute')
const commandkick = require('./command/admin/kick')
const commandban = require('./command/admin/ban')

//database
fs.readdir(`./events`, (error, files) => {
  if(error) throw error
  files.forEach(file => {
    const event = require(`./events/${file}`)
    const eventName = file.split('.')[0]
    client.on(eventName, event.bind(null, client))
    delete require.cache[require.resolve(`./events/${file}`)]
  })
})

client.on('ready', async () => {
  console.log('Bot on!')
  client.user.setPresence({
    activity: {
    name: 'Bot in costruzione',
    type: 0,
    },
})


  //command
  commandadmin(client)
  commandUser(client)
  commandmute(client)
  commandkick(client)
  commandban(client)
  //Autenticazione
  roleClaim(client, '797917324056723476', '733952493574422578', {'👍': 'Membro'}, 
  new Discord.MessageEmbed()
      .setTitle('ECCO LE REGOLE DEL DISCORD DI MARKO_ERRE!')
      .setDescription("Regolamento Server Discord Di Marko_Erre\n1. Non copiare delle parti del server, ruoli ecc… (ban)\n2. Non spammare cioè non ripetere i messaggi ripetutamente (warn)\n3. Non utilizzate un linguaggio scurrile e/o aggressivo (warn)\n4. Usate il canale giusto per l’argomento di cui dovete parlare (warn)\n5. Rispettare Moderatori/Amministratori (warn/ban)\n6. Non inviare messaggi con qualsiasi tipo di link (warn/ban)\n7. E’ severamente vietato sponsorizzare qualsiasi attività altrui (warn/ban)\n8. Siate cordiali con i nuovi membri del server\n9. Nelle chat vocali non sovrapponete la vostra voce a quella degli altri, attendete che un utente concluda l'espressione di un concetto prima di intervenire (warn)\n10. Non siate razzisti/volgari (warn)\n11. Non creare ticket a caso (warn/ban)")
      .setThumbnail('https://static-cdn.jtvnw.net/jtv_user_pictures/96b954b0-d993-48e7-bc1f-45e7e567e0b3-profile_image-300x300.png')
      .setFooter("Se hai domande scrivi sul nostro c'entro di assistenza!\nSe vedi un utente che infrange queste regole contatta:Marko_erre#1111 / thomasz_2005#0401")
      .setColor('#ff0000')
      .setImage('https://cdn.discordapp.com/attachments/702755387933458452/712367610158907432/ALLORA.gif')
      .addFields(
     {
      name: 'mettere like al messaggio per sbloccare il discord!',
      value :'👍',
     }
   ) 
  )
  //-------------------------------------------------------------------------------------------------------------------------------------------------
  //Ticket
  firstMessage(client, '798294861081739264',   
  new Discord.MessageEmbed()
  .setTitle('Help Reports')
  .setDescription("Se hai bisogno di supporto clica qua 📩 ")
  .setColor('#ff0000')
  .setImage('https://cdn.discordapp.com/attachments/702755387933458452/712367610158907432/ALLORA.gif')
  .setFooter("markoerre_bot", "https://static-cdn.jtvnw.net/jtv_user_pictures/96b954b0-d993-48e7-bc1f-45e7e567e0b3-profile_image-300x300.png")
  , ['📩'])

  roleClaim(client, '812777815589126168', '733952493574422578', {'👍': 'Membro', '🟥':'Red color'},
  
  new Discord.MessageEmbed()
      .setTitle('ECCO LE REGOLE DEL DISCORD DI MARKO_ERRE!')
      .setDescription("Regolamento Server Discord Di Marko_Erre\n1. Non copiare delle parti del server, ruoli ecc… (ban)\n2. Non spammare cioè non ripetere i messaggi ripetutamente (warn)\n3. Non utilizzate un linguaggio scurrile e/o aggressivo (warn)\n4. Usate il canale giusto per l’argomento di cui dovete parlare (warn)\n5. Rispettare Moderatori/Amministratori (warn/ban)\n6. Non inviare messaggi con qualsiasi tipo di link (warn/ban)\n7. E’ severamente vietato sponsorizzare qualsiasi attività altrui (warn/ban)\n8. Siate cordiali con i nuovi membri del server\n9. Nelle chat vocali non sovrapponete la vostra voce a quella degli altri, attendete che un utente concluda l'espressione di un concetto prima di intervenire (warn)\n10. Non siate razzisti/volgari (warn)\n11. Non creare ticket a caso (warn/ban)")
      .setThumbnail('https://static-cdn.jtvnw.net/jtv_user_pictures/96b954b0-d993-48e7-bc1f-45e7e567e0b3-profile_image-300x300.png')
      .setFooter("Se hai domande scrivi sul nostro c'entro di assistenza!\nSe vedi un utente che infrange queste regole contatta:Marko_erre#1111 / thomasz_2005#0401")
      .setColor('#ff0000')
      .setImage('https://cdn.discordapp.com/attachments/702755387933458452/712367610158907432/ALLORA.gif')
      .addFields(
     {
      name: 'mettere like al messaggio per sbloccare il discord!',
      value :'👍',
     }
   ) 
  )








 
})



client.login(config.token)