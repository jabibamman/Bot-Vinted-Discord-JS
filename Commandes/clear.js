const Discord = require("discord.js");
const config = require("../config.json");
var prefix = config.prefix;

module.exports.run = (client, message, args) => {
    message.delete()
    if (!message.member.roles.cache.some(r => r.name === "A")) { return message.channel.send('Vous n\'avez pas les permissions !'); }
    if (!args[0]) { return message.channel.send('Vous devez spécifier un nombre de messages à supprimer !'); }
    else if (isNaN(args[0])) { return message.channel.send('Veuillez spécifier un nombre !'); }
                                                                              
        message.channel.bulkDelete(args[0])
            .then((messages) => {
                message.channel.send(`**🗑 | **${messages.size}** messages ont été supprimés !**`);
              });
};

module.exports.help = {
    name: 'clear'
};