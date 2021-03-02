const firstMessage = require('./first-message')
module.exports = (client, channelId, userId, emojis, text) => {
  //const channelId = '797917324056723476'
  //const userId = '733952493574422578'

  const getEmoji = (emojiName) =>
    client.emojis.cache.get((emoji) => emoji.name === emojiName)

  //const emojis = {
 //   '👍': 'Fan',
 // }

  const reactions = []

  for (const key in emojis) {
    const emoji = key
    reactions.push(emoji)

    const role = emojis[key]
  }

    firstMessage(client, channelId, text, reactions)
  

  const handleReaction = (reaction, user, add) => {
    if (user.id === userId) {
      return
    }

    const emoji = reaction._emoji.name

    const { guild } = reaction.message

    const roleName = emojis[emoji]
    if (!roleName) {
      return
    }

    const role = guild.roles.cache.find((role) => role.name === roleName)
    const member = guild.members.cache.find((member) => member.id === user.id)

    if (add) {
      member.roles.add(role)
    } else {
      member.roles.remove(role)
    }
  }

  client.on('messageReactionAdd', (reaction, user) => {
    if (reaction.message.channel.id === channelId) {
      handleReaction(reaction, user, true)
    }
  })

  client.on('messageReactionRemove', (reaction, user) => {
    if (reaction.message.channel.id === channelId) {
      handleReaction(reaction, user, false)
    }
  })
}