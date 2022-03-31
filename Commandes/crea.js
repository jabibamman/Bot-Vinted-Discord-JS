const {MessageEmbed} = require('discord.js');

module.exports.run = async(client, message, args) => {
message.delete()
const creaEmbed = new MessageEmbed()
    .setAuthor(message.author.username)
    .setColor("#00BDFF")
    .setDescription("Voici la date de création de ton compte discord !")
    .addField("⬇️⬇️", message.author.createdAt);

message.channel.send({embeds: [creaEmbed]});
}

module.exports.help = {
    name:"crea"
}