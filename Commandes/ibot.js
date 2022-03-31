﻿const {MessageEmbed} = require('discord.js');
const config = require('./config.json');

module.exports.run = async(client, message, args) => {
message.delete()
const botinfoEmbed = new MessageEmbed()
      .setColor('#00BDFF')
      .setTitle('📈・Information concernant le bot !')
      .setURL('https://www.youtube.com/')
      .setAuthor(config.Speudo, config.Image, 'https://www.youtube.com/')
      .setThumbnail(config.Image)
      .addFields(
          { name: '\u200B', value: '\u200B' },
          { name: '✨ | Création :', value: '13/04/2021', inline: true },
          { name: '⌨ | Développeur :', value: '!lorem.#1313', inline: true },
      )
      .addField('Présence :', `${client.guilds.cache.size} serveurs`,  true)
      .setTimestamp()
      .setFooter(config.Speudo, config.Image);
  
  message.channel.send({embeds: [botinfoEmbed]});

}

module.exports.help = {
    name:"ibot"
}