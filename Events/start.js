const Discord = require('discord.js')
const config = require('../config.json')


module.exports = async (client, message) => {
    console.log("bhr")
    channelPerso = await message.guild.channels.cache.find(channel => channel.name === 'etat-bot');

    // Delete old channel
    channelPerso.delete()

    // Clone channel
    const channelEtat = await channelPerso.clone()
    channelEtat.send('✅ Le BOT est `ON` !')

};