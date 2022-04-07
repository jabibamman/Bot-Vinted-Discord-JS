const {MessageEmbed} = require("discord.js");
const config = require("../config.json");

function wait(ms){
    var start = new Date().getTime()
    var end = start
    while(end < start + ms) {end = new Date().getTime();}
}

module.exports.run = async (client, message, args) => {
    message.delete()
    var user = message.mentions.users.first();
    var reason = args.join(" ").slice(22);
    const guild = message.guild;

    if (!message.member.roles.cache.some(r => r.name === "A")) {return message.channel.send("Vous n'avez pas la permission de faire cette commande !"); }
    if(!user) {const fail = await message.channel.send("Vous n'avez pas mentionner la personne a kick"); wait(3000); fail.delete(); return}
    if(!reason) {const fail = await message.channel.send("Vous n'avez pas fait la raison"); wait(3000); fail.delete(); return}

    const kickchannel = new MessageEmbed()
    .setTitle(user.username +' a été kick', 'https://cdn.discordapp.com/attachments/721621182285348884/722839199690129458/Tryade_Termine_BD.png')
    .setColor(config.embedColor)
    .addField('Raison', `${reason}`, true)
    .setFooter({ text : `Kick de ${message.author.tag}`, iconURL: message.author.displayAvatarURL()});

    message.channel.send({embeds: [kickchannel]})
    await guild.members.kick (user, reason)
};

module.exports.help = {
    name: 'kick'
};