const Discord = require('discord.js')
const messageReactionAdd = require('../events/messageReactionAdd');
const guildModel = require('../models/guild');
const ticket = require('../models/ticket')

module.exports = async (guild, user, guildDoc, ticketModel) => {
    guildDoc.ticketCount ++
    await guildDoc.save()
    console.log(`Ticket open from ${user}`)
    const role = guild.roles.cache.get('787353100830769182')
    const ticketChannel = await guild.channels.create(`ticket-${guildDoc.ticketCount}`, {
        type: 'text',
        parent: '812781628862103573',
        permissionOverwrites: [
            {
                allow: ['VIEW_CHANNEL', 'SEND_MESSAGES'],
                id: user.id,
            },
            {
                deny: ['VIEW_CHANNEL', 'SEND_MESSAGES'],
                id: guild.id,
            },
            {
                allow: ['VIEW_CHANNEL', 'SEND_MESSAGES'],
                id: role.id,
            }
        ],
    })
    const msg = await ticketChannel.send(
        `<@&813003239695712276> ${user}`,
        new Discord.MessageEmbed()
        .setDescription(`ciao ${user} un nostro moderatore(<@&787353100830769182>) arriverà a breve a risolvere il tuo problema.\nPer chiudere questo ticket clicca 🔒`)
        .setColor('#ff0000')
        .setImage('https://cdn.discordapp.com/attachments/702755387933458452/712367610158907432/ALLORA.gif')
        .setFooter("markoerre_bot", "https://static-cdn.jtvnw.net/jtv_user_pictures/96b954b0-d993-48e7-bc1f-45e7e567e0b3-profile_image-300x300.png")
    )
    msg.react('🔒')
        await msg.react('📝')


    const ticketDoc = new ticketModel({
        guildID: guild.id,
        userID: user.id,
        channelID: ticketChannel.id,
        msgID: msg.id,
        ticket: guildDoc.ticketCount
    })

    await ticketDoc.save()
}
