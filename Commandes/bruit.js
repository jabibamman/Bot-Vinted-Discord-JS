const {MessageAttachment} = require('discord.js');

module.exports.run = async(client, message, args) => {
message.delete()
const attachment = new MessageAttachment('./sound/bruit.mp3')
message.channel.send({files: [attachment]})

}


module.exports.help = {
    name:"bruit"
}