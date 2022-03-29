const { MessageEmbed } = require('discord.js');

plpk

module.exports.run = async(client, message, args) => {
    message.delete()
    // TODO récupérer la conditions des articles...

    var lien = 'https://www.vinted.fr/vetements?search_text=Court%20purple&search_id=4874024641&brand_id[]=53&size_id[]=784&order=newest_first&currency=EUR';
    vinted.search(lien).then((posts) => {
        posts.items.forEach(product => {


            // const creaEmbed = new MessageEmbed()
            //     .setColor('#0099ff')
            //     .setTitle(product.title)
            //     .setURL(product.url)
            //     .setAuthor({ name: product.brand_title, iconURL: 'https://i.imgur.com/AfFp7pu.png', url: product.url })
            //     .addFields(
            //         { name: 'Taille', value: product.size_title + '.', inline: true },
            //               { name: 'Marque', value: product.brand_title, inline: true },
            //               { name: 'Prix', value: product.price.substring(0, product.price.length-2)+" €", inline: true },
            //              { name: '\u200B', value: '\u200B' },
            //            { name: 'Condition', value: product.brand_title, inline: true },
            //         { name: 'Vendeur', value: product.user.login+"/" }
            //     )
            //
            //     .setThumbnail('https://i.imgur.com/AfFp7pu.png')
            //
            //     .setImage(product.photo.url)
            //     .setTimestamp()
            //     .setFooter({ text: 'By Jamessss', iconURL: 'https://i.imgur.com/AfFp7pu.png' });
            //
            // message.channel.send({embeds: [creaEmbed] });

            // vinted
            console.log (product);




            });


        });




}

module.exports.help = {
    name:"vinted"
}