const { MessageEmbed } = require('discord.js');

module.exports.run = async(client, message, args) => {
        message.delete()
        let member = message.mentions.users.first() || message.author;
        const pdpEmbed = new MessageEmbed()
            .setAuthor({"name": "Photo demandé par :"})
            .setColor("#00BDFF")
            .setDescription(message.author.tag)
            .setImage(member.avatarURL())


    message.channel.send({ embeds: [pdpEmbed] });

}


module.exports.help = {
    name: "pdp"
}