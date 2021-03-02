const commandadmin = require('../../functions/command')
module.exports = (client) => {
    //status
    commandadmin(client, 'status', (message) => {
        message.delete()
        if (message.member.roles.cache.find(role => role.id == "735268905005875320")) {
            const content = message.content.replace('/status ', '')
        client.user.setPresence({
            activity: {
            name: content,
            type: 0,
            },
        })
        }else{
        message.member.send("Scusa ma sembra che non hai i permessi 🤨")
        }
    })
    
}

