const {MessageEmbed} = require('discord.js');
const config = require('./config.json');

module.exports.run = async(client, message, args) => {
message.delete()
const botinfoEmbed = new MessageEmbed()
      .setColor('#00BDFF')
      .setTitle('📈・Information concernant le bot !')
      .setURL('https://abib-james.fr/')
      .setAuthor(config.Speudo, config.Image, 'https://abib-james.fr/')
      .setThumbnail(config.Image)
      .addFields(
          { name: '\u200B', value: '\u200B' },
          { name: '✨ | Création :', value: '13/03/2022', inline: true },
          { name: '⌨ | Développeur :', value: 'Jamessss#7426', inline: true },
          { name: '💻 | Site :', value: 'abib-james.fr', inline: true}
      )
      .addField('Présence :', `${client.guilds.cache.size} serveurs`,  true)
      .setTimestamp()
      .setFooter(config.Speudo, config.Image);
  
  message.channel.send({embeds: [botinfoEmbed]});

}

module.exports.help = {
    name:"ibot"
}