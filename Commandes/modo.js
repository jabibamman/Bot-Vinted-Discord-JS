const { MessageEmbed } = require('discord.js');
const config = require('./config.json');

module.exports.run = async(client, message, args) => {
	message.delete();

	// Si l'utilisateur n'as pas le role A


	console.log (client.user.id + " " + client.user.avatar);
const modoEmbed = new MessageEmbed()
	.setColor('#00BDFF')
	.setTitle('⚒ ・Liste des commandes de modération.')
	.setURL('https://www.youtube.com/c/SOUKii')
	.setAuthor({"name": config.Speudo, "iconURL": config.Image, "url": 'https://www.youtube.com/c/'})
	.setThumbnail(config.Image)
	.addFields(
    { name: '🗑-clear', value: '(Pour supprimer des messages.)' },
    { name: '⚠️!kick', value: '(Pour kick.)' },
    { name: '❌!ban', value: '(Pour ban.)' },
	{ name: '🔴!stop', value: '(Pour stopper le bot.)' },
    )
	.setImage(config.Image)
	.setTimestamp()
	.setFooter({ "text": 'By Jamessss#7426', "iconURL": `https://cdn.discordapp.com/avatars/${client.user.id}/${client.user.avatar}.png?size=256` });
    message.channel.send({ embeds : [modoEmbed] })
}

module.exports.help = {
    name:"modo"
}