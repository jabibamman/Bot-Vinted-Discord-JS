const { MessageEmbed } = require('discord.js');

const vinted = require('vinted-api');

module.exports.run = async(client, message, args) => {
    message.delete()

    // const creaEmbed = new MessageEmbed()
    //     .setColor('#0099ff')
    //     .setTitle('Vinted Moniteur')
    //     .setURL('https://discord.gg/J8A2bptp')
    //     .setAuthor({ name: 'vMoniteur v1.0.0', iconURL: 'https://i.imgur.com/AfFp7pu.png', url: 'https://discord.js.org' })
    //     .setDescription("Bot Vinted vous permettant d\'avoir des produits intéressants avant tout le monde pour pas cher")
    //     .setThumbnail('https://i.imgur.com/AfFp7pu.png')
    //     .addFields(
    //         { name: 'Prix du Bot', value: '50 €' },
    //         { name: '\u200B', value: '\u200B' },
    //         { name: 'Lorem ipsum', value: ' 25 €', inline: true },
    //         { name: 'Dolor', value: '10 €', inline: true },
    //     )
    //     .addField('Pantalon Celio', '45 €', true)
    //     .setImage('https://i.imgur.com/AfFp7pu.png')
    //     .setTimestamp()
    //     .setFooter({ text: 'By Jamessss', iconURL: 'https://i.imgur.com/AfFp7pu.png' });
    //
    // message.channel.send({embeds: [creaEmbed] });


    vinted.search('https://www.vinted.fr/vetements?brand_id[]=32').then((posts) => {
        
        console.log (posts.items[3].title)
    });




}

module.exports.help = {
    name:"vinted"
}


// vinted.search('https://www.vinted.fr/vetements?brand_id[]=53').then((posts) => {
//     const creaEmbed = new Discord.MessageEmbed()
//         .setAuthor(message.author.username)
//         .setColor("#00BDFF")
//         .setDescription(posts)
//
//     message.channel.send(creaEmbed);
//
// });