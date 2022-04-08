const Discord = require('discord.js')
const config = require('../config.json')
var prefix = config.prefix;
var speudo = config.speudo;

module.exports = async (client, message) => {
    console.log(`${client.user.username} est en ligne !`);

    setInterval(function() {
        let statusstyle = [
            '🟢 Le BOT est ON !',
            `${prefix}help`,
            `${prefix}vinted`
        ]
        
        let status = statusstyle[Math.floor(Math.random() * statusstyle.length)];
        client.user.setPresence({
                activities: [
                        {
                            name: status,
                            type: 'PLAYING'
                        }]
            })
    }, 10000)
};