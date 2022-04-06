const Discord = require('discord.js');

module.exports.run = async(client, message, args) => {
    message.delete();

    message.channel.send('Arrêt du bot...');
    // SI L'user n'est pas un admin
    if (!message.member.roles.cache.some(r => r.name === "A")) {return message.channel.send("Vous n'avez pas la permission de faire cette commande !"); }

    // TODO: Arrêter le bot, la fonction de déconnexion du bot ne fonctionne pas
    // let channelPerso = message.guild.channels.cache.find(channel => channel.name === 'etat-bot"');
    // // Setname channel
    // message.channel.send('🚫 Le BOT est `arrêté`');
    //
    // console.log ("on est dans le stop");
    //
    // process.exit(0);





}
module.exports.help = {
    name: 'stop',
    description: 'Stop le bot'
};