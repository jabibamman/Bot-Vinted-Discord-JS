const { MessageEmbed } = require('discord.js');
const config = require('./config.json');

module.exports.run = async(client, message, args) => {
	message.delete();

	// Si l'utilisateur n'as pas le role A
	if (!message.member.roles.cache.has(config.role_admin)) {
		return message.channel.send(`Vous n'avez pas les permissions pour utiliser cette commande.`);
	}

	if(message.channel.id !== config.modo_id) {
		return message.channel.reply("Vous devez être dans le channel #vinted pour utiliser cette commande.")
	}

const modoEmbed = new MessageEmbed()
	.setColor('#00BDFF')
	.setTitle('⚒ ・Liste des commandes de modération.')
	.setURL('https://www.youtube.com/c/SOUKii')
	.setAuthor(config.Speudo, config.Image, 'https://www.youtube.com/c/SOUKii')
	.setThumbnail(config.Image)
	.addFields(
    { name: '🗑-clear', value: '(Pour supprimer des messages.)' },
    { name: '⚠️!kick', value: '(Pour kick.)' },
    { name: '❌!ban', value: '(Pour ban.)' },
	{ name: '🔴!stop', value: '(Pour stopper le bot.)' },
    )
	.setTimestamp()
    .setFooter(config.Speudo, config.Image);
    message.channel.send({ embeds : [modoEmbed] })
}

module.exports.help = {
    name:"modo"
}