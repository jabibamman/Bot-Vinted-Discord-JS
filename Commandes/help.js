const Discord = require('discord.js');
const config = require('./config.json');
module.exports.run = async(client, message, args) => {
message.delete()

const cmdEmbed = new Discord.MessageEmbed()
	.setColor('#00BDFF')
	.setTitle('📑・Liste des commandes.')
	.setURL('https://www.youtube.com/c/')
	.setAuthor(config.Speudo, config.Image, 'https://www.youtube.com/c/')
	.setThumbnail(config.Image)
	.addFields(
    { name: '📃!help', value: '(Affiche les fonctionalité du bot.)' },
    { name: '🔗!liens', value: '(Pour voir les liens me concernant.)' },
    { name: '📸️!pdp', value: '(Afficher sa photo de profil.)' },
    { name: '📈!crea', value: '(Voir la date de création de son compte discord.)' },
    { name: '⛅️!meteo', value: '(Pour afficher la météo.)' },
    { name: '🤖!ibot', value: '(Information concernant le bot.)' }, 
    { name: '🔧!modo', value: '(Liste des commandes de modération.)' },
	{ name: '📦!vinted', value: '(Pour avoir les offres vinted)' },
	{ name: '📋!ibot', value: '(Pour avoir les infos du bot)' },
	{ name: '🎧!bruit', value: '(Pour envoyer un bruit.)' }
	)
	
	.setTimestamp()
	.setFooter(config.Speudo, config.Image);

  message.channel.send({embeds: [cmdEmbed]});
}
module.exports.help = {
  name:"help"
}