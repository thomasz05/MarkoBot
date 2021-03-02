const commanduser = require('../../functions/command')
const Discord = require('discord.js')
const client = new Discord.Client()
module.exports = (client) => {
    console.log('Run user')
    //collegamnto
    commanduser(client, 'collegamento', (message) => {
    const logo =
      'https://assets.stickpng.com/images/580b57fcd9996e24bc43c540.png'
      const img =
      'https://cdn.discordapp.com/attachments/702755387933458452/712367610158907432/ALLORA.gif'
    const embed = new Discord.MessageEmbed()
      .setTitle("COME COLEGARE DISCORD A TWITCH")
      .setDescription("DA COMPUTER \n𝟭) 𝗔𝗰𝗰𝗲𝗱𝗶 𝗮𝗹 𝘁𝘂𝗼 𝗮𝗰𝗰𝗼𝘂𝗻𝘁 𝗗𝗶𝘀𝗰𝗼𝗿𝗱\n𝟮) 𝗖𝗹𝗶𝗰𝗰𝗮 𝘀𝘂𝗹 𝘀𝗶𝗺𝗯𝗼𝗹𝗼 𝗱𝗲𝗹𝗹𝗲 𝗶𝗺𝗽𝗼𝘀𝘁𝗮𝘇𝗶𝗼𝗻𝗶 (𝗶𝗻 𝗯𝗮𝘀𝘀𝗼 𝗮 𝘀𝗶𝗻𝗶𝘀𝘁𝗿𝗮)\n𝟯) 𝗖𝗹𝗶𝗰𝗰𝗮 𝘀𝘂 \"𝗖𝗼𝗹𝗹𝗲𝗴𝗮𝗺𝗲𝗻𝘁𝗶\"\n𝟰) 𝗢𝗿𝗮 𝗰𝗹𝗶𝗰𝗰𝗮 𝘀𝘂𝗹𝗹'𝗶𝗰𝗼𝗻𝗮 𝗱𝗶 𝗧𝘄𝗶𝘁𝗰𝗵\n𝟱) 𝗔𝗰𝗰𝗲𝗱𝗶 𝗮𝗹 𝘁𝘂𝗼 𝗮𝗰𝗰𝗼𝘂𝗻𝘁 𝗧𝘄𝗶𝘁𝗰𝗵 𝗰𝗼𝗻 𝗰𝘂𝗶 𝗵𝗮𝗶 𝗳𝗮𝘁𝘁𝗼 𝗹𝗮 𝘀𝘂𝗯 𝗮𝗹 𝗰𝗮𝗻𝗮𝗹𝗲 𝗱𝗶 MARKO_ERRE\n𝟲) 𝗔𝘁𝘁𝗲𝗻𝗱𝗶 𝗰𝗵𝗲 𝘁𝗶 𝘃𝗲𝗻𝗴𝗮 𝗮𝘀𝘀𝗲𝗴𝗻𝗮𝘁𝗼 𝗶𝗹 𝗿𝘂𝗼𝗹𝗼, 𝘀𝗼𝗹𝗶𝘁𝗮𝗺𝗲𝗻𝘁𝗲 𝗲𝗻𝘁𝗿𝗼 𝗽𝗼𝗰𝗵𝗶 𝗺𝗶𝗻𝘂𝘁𝗶.\n\nDA TELEFONO\n𝟭) 𝗔𝗰𝗰𝗲𝗱𝗶 𝗮𝗹 𝘁𝘂𝗼 𝗮𝗰𝗰𝗼𝘂𝗻𝘁 𝗗𝗶𝘀𝗰𝗼𝗿𝗱\n𝟮) 𝗜𝗻 𝗯𝗮𝘀𝘀𝗼 𝗮 𝗱𝗲𝘀𝘁𝗿𝗮 𝗱𝗼𝘃𝗿𝗲𝘀𝘁𝗶 𝘃𝗲𝗱𝗲𝗿𝗲 𝗶𝗹 𝘁𝘂𝗼 𝗮𝘃𝗮𝘁𝗮𝗿 𝗱𝗶 𝗗𝗶𝘀𝗰𝗼𝗿𝗱, 𝗾𝘂𝗶𝗻𝗱𝗶 𝗰𝗹𝗶𝗰𝗰𝗮𝗰𝗶.\n𝟯) 𝗖𝗹𝗶𝗰𝗰𝗮 𝘀𝘂 \"𝗖𝗼𝗹𝗹𝗲𝗴𝗮𝗺𝗲𝗻𝘁𝗶\"\n𝟰) 𝗜𝗻 𝗮𝗹𝘁𝗼 𝗮 𝗱𝗲𝘀𝘁𝗿𝗮, 𝗰𝗹𝗶𝗰𝗰𝗮 𝘀𝘂 \"𝗔𝗚𝗚𝗜𝗨𝗡𝗚𝗜\"\n𝟱) 𝗢𝗿𝗮 𝘁𝗿𝗼𝘃𝗮 𝗶𝗹 𝗯𝗼𝘁𝘁𝗼𝗻𝗲 𝗰𝗼𝗻 𝗹'𝗶𝗰𝗼𝗻𝗮 𝗱𝗶 𝗧𝘄𝗶𝘁𝗰𝗵, 𝗮 𝗱𝗲𝘀𝘁𝗿𝗮 𝗱𝗲𝗹𝗹'𝗶𝗰𝗼𝗻𝗮 𝗰'è 𝘀𝗰𝗿𝗶𝘁𝘁𝗼 \"𝗧𝘄𝗶𝘁𝗰𝗵\" \n𝟲) 𝗔𝗰𝗰𝗲𝗱𝗶 𝗮𝗹 𝘁𝘂𝗼 𝗮𝗰𝗰𝗼𝘂𝗻𝘁 𝗧𝘄𝗶𝘁𝗰𝗵 𝗰𝗼𝗻 𝗰𝘂𝗶 𝗵𝗮𝗶 𝗳𝗮𝘁𝘁𝗼 𝗹𝗮 𝘀𝘂𝗯 𝗮𝗹 𝗰𝗮𝗻𝗮𝗹𝗲 𝗱𝗶 MARKO_ERRE\n𝟳) 𝗔𝘁𝘁𝗲𝗻𝗱𝗶 𝗰𝗵𝗲 𝘁𝗶 𝘃𝗲𝗻𝗴𝗮 𝗮𝘀𝘀𝗲𝗴𝗻𝗮𝘁𝗼 𝗶𝗹 𝗿𝘂𝗼𝗹𝗼, 𝘀𝗼𝗹𝗶𝘁𝗮𝗺𝗲𝗻𝘁𝗲 𝗲𝗻𝘁𝗿𝗼 𝗽𝗼𝗰𝗵𝗶 𝗺𝗶𝗻𝘂𝘁𝗶.")
      .setThumbnail(logo)
      .setColor('#ff00ff')
      .setImage(img)
    
    message.channel.send(embed)
    message.delete()
  })

    //lol
    commanduser(client, 'lol', (message) =>{
      message.channel.send('hahha')
    })
    //ciao
    commanduser(client, 'ciao', (message) =>{
      message.channel.send('ciao a te')
      message.delete()
    })
    //server
    commanduser(client, 'server', (message) => {
      client.guilds.cache.forEach((guild) => {
        message.channel.send(
          `${guild.name} ha un totale di ${guild.memberCount} membri`
        )
        message.delete()
      })
    })



    commanduser(client, 'rules', (message) => {
      const logo =
        'https://static-cdn.jtvnw.net/jtv_user_pictures/96b954b0-d993-48e7-bc1f-45e7e567e0b3-profile_image-300x300.png'
        const img =
        'https://cdn.discordapp.com/attachments/702755387933458452/712367610158907432/ALLORA.gif'
      const embed = new Discord.MessageEmbed()
        .setTitle('ECCO LE REGOLE DEL DISCORD DI MARKO_ERRE!')
        .setDescription("Regolamento Server Discord Di Marko_Erre\n1. Non copiare delle parti del server, ruoli ecc… (ban)\n2. Non spammare cioè non ripetere i messaggi ripetutamente (warn)\n3. Non utilizzate un linguaggio scurrile e/o aggressivo (warn)\n4. Usate il canale giusto per l’argomento di cui dovete parlare (warn)\n5. Rispettare Moderatori/Amministratori (warn/ban)\n6. Non inviare messaggi con qualsiasi tipo di link (warn/ban)\n7. E’ severamente vietato sponsorizzare qualsiasi attività altrui (warn/ban)\n8. Siate cordiali con i nuovi membri del server\n9. Nelle chat vocali non sovrapponete la vostra voce a quella degli altri, attendete che un utente concluda l'espressione di un concetto prima di intervenire (warn)\n10. Non siate razzisti/volgari (warn)\n11. Non creare ticket a caso (warn/ban)")
        .setThumbnail(logo)
        .setFooter("Se hai domande scrivi sul nostro c'entro di assistenza!\nSe vedi un utente che infrange queste regole contatta:Marko_erre#1111 / thomasz_2005#0401")
        .setColor('#ff0000')
        .setImage(img)
      
        message.author.send(embed)
        message.delete()
    })
  
  
    //-------------------------------------------------------------------------------------------------------------------------------------------------
  
    // serverinfo
    commanduser(client, 'serverinfo', (message) => {
      const { guild } = message
  
      const { name, region, id, memberCount, owner, afkTimeout } = guild
      const icon = 
      "https://static-cdn.jtvnw.net/jtv_user_pictures/96b954b0-d993-48e7-bc1f-45e7e567e0b3-profile_image-300x300.png"
  
      const embed = new Discord.MessageEmbed()
        .setTitle('Server info')
        .setThumbnail(icon)
        .setColor('#00FF00')
        .addFields(
          {
            name: 'Nome server:',
            value: name,
          },
          {
            name: 'ID server:',
            value: id,
          },
          {
            name: 'Membri totali:',
            value: memberCount,
          },
          {
            name: 'Owner',
            value: "Marko_Erre",
          },
          {
            name: 'AFK ',
            value: guild.afkChannelID,
          }
        )
  
      message.channel.send(embed)
      message.delete()
    })
  
  
    //-------------------------------------------------------------------------------------------------------------------------------------------------
    //help-discord
    commanduser(client, 'helpp', (message) => {
      const embed = new Discord.MessageEmbed()
        .setTitle('Aiuto Discord')
        .setThumbnail('https://static-cdn.jtvnw.net/jtv_user_pictures/96b954b0-d993-48e7-bc1f-45e7e567e0b3-profile_image-300x300.png')
        .setColor('#00FF00')
        .setImage('https://cdn.discordapp.com/attachments/702755387933458452/712367610158907432/ALLORA.gif')
        .setFooter("Se hai domande scrivi sul nostro c'entro di assistenza!\nSe vedi un utente che infrange queste regole contatta:Marko_erre#1111 / thomasz_2005#0401")
        .addFields(
          {
            name: "1) /help-canali = da una lista di tutti i canali e la funzionalità  di essi",
            value: '-------------------------------------------------',
          },
          {
            name: "2)/help-level = mostra tutto quello che c'è da sapere su ranking del server",
            value: '-------------------------------------------------',
          },
          {
            name: "3)/help-ruoli  = da una lista di tutti i ruoli e le loro funzionalità.",
            value: '-------------------------------------------------',
          },
          {
            name: "4)/help-comandi  = da una lista di tutti i comandi e le funzionalità di essi",
            value: '-------------------------------------------------'
          } 
        )
      message.channel.send(embed)
      message.delete()
    })
  
    //help-comandi
    commanduser(client, 'help-comandi', (message) => {
      const embed = new Discord.MessageEmbed()
        .setTitle('Elenco comandi')
        .setThumbnail('https://static-cdn.jtvnw.net/jtv_user_pictures/96b954b0-d993-48e7-bc1f-45e7e567e0b3-profile_image-300x300.png')
        .setColor('00FF00')
        .setImage('https://cdn.discordapp.com/attachments/702755387933458452/712367610158907432/ALLORA.gif')
        .setFooter("Se hai domande scrivi sul nostro c'entro di assistenza!\nSe vedi un utente che infrange queste regole contatta:Marko_erre#1111 / thomasz_2005#0401")
        .addFields(
          {
            name: '1) I comandi di @VoiceMaster#9351 ',
            value: 'Voice master è un bot che vi crea le stanze vocali personali\n\nI Comandi sono:\ns/voice lock = serve bloccare la stanza\ns/voice unlock = per sbloccare la stanza\ns/voice name <name> = cambiare nome della stanza\ns/voice limit <number> = mettere un numero di persone limitate\ns/voice permit <@user> = permettere a una persona di entrare (in caso che la stanza è bloccata)\n',
          },
          {
            name: '2) I comandi di @Rythm#3722',
            value: "Rythm è un bot che vi fa ascoltare della musica quella che volete\n\nI Comandi sono:\n!p/!play {nome della canzone} = serve per far partire la canzone che vuoi tu\n!fs/!skip = serve per far skippare la canzone\n!loop = serve per creare un loop alla canzone\n",
          },
          {
            name: '3) I comandi di Rythm 2#2000',
            value: "Rythm 2 è un bot che vi fa ascoltare della musica quella che volete\n\nI Comandi sono:\n>p/>play {nome della canzone} = serve per far partire la canzone che vuoi tu\n>fs/!skip = serve per far skippare la canzone\n>loop = serve per creare un loop alla canzone\n",
          },
          {
            name: '4) I comandi di @Plasma ',
            value: "Plasma è un bot che vi fa vedere le classifica\n\nI Comandi sono:\n.leaderboard messages= vi fa vedere la classifica dei messaggi scritti \n.leaderboard invites= vi fa vedere la classifica degli inviti fatti da voi",
          },
          {
            name: '5) I comandi di @ProBot ✨#5803',
            value: "ProBot è un bot che vi fa vedere le informazioni personali o degli altri \n\nI Comandi sono:\n/rank= Visualizza la tua o la server rank card di qualcun' altro\n/profile= Visualizza la tua o il carta del profilo globale di qualcun' altro.\n/roles= Ottieni un elenco di tutti i ruoli del server e i membri che ne fanno parte",
          },
          {
            name: 'Se Vuoi info su canali e ruoli fai\n /help-discord',
            value: ":)"
          }
        )
  
      message.channel.send(embed)
      message.delete()
    })
  
    //help-canali
    commanduser(client, 'help-canali', (message) => {
      const embed = new Discord.MessageEmbed()
        .setTitle('Elenco Canali')
        .setThumbnail('https://static-cdn.jtvnw.net/jtv_user_pictures/96b954b0-d993-48e7-bc1f-45e7e567e0b3-profile_image-300x300.png')
        .setColor('00FF00')
        .setImage('https://media.discordapp.net/attachments/788133589471985694/792331324308455424/CANALI.png')
        .setFooter("Se hai domande scrivi sul nostro c'entro di assistenza!\nSe vedi un utente che infrange queste regole contatta:Marko_erre#1111 / thomasz_2005#0401")
        .addFields(
          {
            name: '▬▬▬▬benvenuti▬▬▬▬ ',
            value: '#💈benvenuto💈 = Ci sono gli utenti che entrano in tempo reale nel Server\n#📄regolamento📄= il regolamento del server\n#📘help-discord = spiegazione delle varie stanze del mio server discord',
          },
          {
            name: '▬▬▬▬annunci▬▬▬▬',
            value: "#🔴annunci🔴= vi arriva la notifica di Tutte le LIVE e VIDEO di Marko_erre\n#💥flexdojo💥= annunci Eventi, Changelogs, News - Stay Tuned\n#🔫annunci-giochi🔫= annunci dei giochi che escono gratis",
          },
          {
            name: '▬▬▬▬salotto▬▬▬▬',
            value: "#🌐chat-generale= Chat generale dove tutti gli utenti possono scrivere, no slowmode\n#🎮proposte-giochi= in questo canale potete suggerire delle proposte dei videogiochi da portare.\n#🛃help-reports= se trovate un bug nel server potete mandare un messaggio in questa sezione\nVocal Chilling=  il canale vocale dove si chiacchiera insieme\nVocal Generator= entrate in questo canale vocale per generare un canale vocale privato per voi",
          },
          {
            name: '▬▬▬▬bot only▬▬▬▬',
            value: "#🛑help-comandi= semplice spiegazione su come funzionano i comandi dei Bot\n#🌈comandi= Chat comandi dove tutti gli utenti possono scrivere i comandi, no slowmode.\n#🔝level-up= il vostro livellamento di chat\n#🔇no-mic= chat dedicata a chi non ha un microfono ed può utilizzare un bot per parlare con i membri con slowmode",
          },
          {
            name: ' ▬▬▬▬ABBONATI▬▬▬▬',
            value: "#🌟abbonati🌟= Chat riservata a solo SUB del canale\n#Marko_erre= Stanza vocale riservata a Marko_erre",
          },
          {
            name: 'Se Vuoi info su canali e ruoli fai\n /help-discord',
            value: ":)"
          }
        )
  
      message.channel.send(embed)
      message.delete()
    })
  
    //help-level
    commanduser(client, 'help-level', (message) => {
      const logo =
        'https://static-cdn.jtvnw.net/jtv_user_pictures/96b954b0-d993-48e7-bc1f-45e7e567e0b3-profile_image-300x300.png'
        const img =
        'https://cdn.discordapp.com/attachments/788133589471985694/792331468339806248/LEVEL-UP.png'
      const embed = new Discord.MessageEmbed()
        .setTitle('Ecoo il level-up')
        .setDescription("Nel server c'è un bel sistema di ranking per sbloccare delle stanze segrete\na cosa serve?: serve per fare una classifica degli utenti che scrivono come dei pazzi nelle chat\n\nqua sotto c'è una classifica dei vari ruoli che vengono dati in automatico:\n\nRuolo che si ottiene al Livello 5: @5 Panini \n\nRuolo che si ottiene al Livello 10: @10 Frittolle \n\nRuolo che si ottiene al Livello 15: @15 cioccolatini \n\nRuolo che si ottiene al Livello 20: @20 Salami \n\nRuolo che si ottiene al Livello 25: @25 banane \n\nRuolo che si ottiene al Livello 30: @30 pere \n\nRuolo che si ottiene al Livello 35: @35 carciofi \n\nRuolo che si ottiene al Livello 40: @40 Broccoli \n\nRuolo che si ottiene al Livello 45: @45 carote \n\nRuolo che si ottiene al Livello 50: @50 limoni \n\nRuolo che si ottiene al Livello 55: @55 mele \n\nRuolo che si ottiene al Livello 60: @60 noci \n\nRuolo che si ottiene al Livello 64: @64 kinder")
        .setThumbnail(logo)
        .setFooter("Se hai domande scrivi sul nostro c'entro di assistenza!\nSe vedi un utente che infrange queste regole contatta:Marko_erre#1111 / thomasz_2005#0401")
        .setColor('00FF00')
        .setImage(img)
      
        message.channel.send(embed)
        message.delete()
    })
  
    //help-ruoli
    commanduser(client, 'help-ruoli', (message) => {
      const logo =
        'https://static-cdn.jtvnw.net/jtv_user_pictures/96b954b0-d993-48e7-bc1f-45e7e567e0b3-profile_image-300x300.png'
        const img =
        'https://cdn.discordapp.com/attachments/788133589471985694/792331841029931038/RUOLI.png'
      const embed = new Discord.MessageEmbed()
        .setTitle('Ecoo i Ruoli del server')
        .setDescription("@Marko_erre : Capo Assoluto di questo server Discord\n@Editor discord:aiutanti di alcuni progetti e maestri del settaggio \n@Mod: Moderatori sia di discord e twitch \n@Mod in prova: sono i moderatori che stanno per passare ad un livello successivo se si comportano bene\n@staff: tutto lo staff di questo discord\n@abbonato: colui che ha fatto la sub su Twitch\n@Server Booster: colui che ha boostato il server discord\n@Sponsor minecraft: coloro che hanno minecraft e mi ospitano per fare le live\n@Membri Onorati: sono le persone che hanno un vip plus\n@vip twitch: sono le persone che hanno riscattato il vip su Twitch\n@Partner : coloro che hanno fatto il tasto segui in #annunci e inserito nel proprio discord che devono avere di più di 20 membri \n@Builder: sono i builder che mi aiutano a costruire su minecraft\n@FLEXDOJO: staff del server di FlexDojo\n@TTS: colui che utilizza il bot vocale\n@Fan: che sono tutti che sono followers nel canale twitch")
        .setThumbnail(logo)
        .setFooter("Se hai domande scrivi sul nostro c'entro di assistenza!\nSe vedi un utente che infrange queste regole contatta:Marko_erre#1111 / thomasz_2005#0401")
        .setColor('00FF00')
        .setImage(img)
      
        message.channel.send(embed)
        message.delete()
    })
}