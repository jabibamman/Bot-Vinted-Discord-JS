const { MessageEmbed } = require('discord.js');

const vinted = require('vinted-api');

module.exports.run = async(client, message, args) => {
    message.delete()
    // TODO récupérer la conditions des articles...
    let brand_id, size_id;

    let brand = [
        {
            id: '53',
            name: 'nike'
        },
        {
            id: '14',
            name: 'adidas'
        },
        {
            id: '304',
            name: 'lacoste'
        },
        {
            id: '88',
            name: 'ralph lauren'
        },
        {
            id: '94',
            name: 'tommy hilfiger'
        },
        {
            id: '10',
            name: 'levis'
        },

    ]

    let size = [
        {
            id: '206',
            name: 'XS'
        },
        {
            id: '207',
            name: 'S'
        },
        {
            id: '208',
            name: 'M'
        },
        {
            id: '209',
            name: 'L'
        },
        {
            id: '210',
            name: 'XL'
        },
        {
            id: '211',
            name: 'XXL'
        }
        ]



    switch (args[0].toUpperCase()) {
        case 'NIKE': brand_id = brand[0].id; break;
        case 'ADIDAS': brand_id = brand[1].id; break;
        case 'LACOSTE': brand_id = brand[2].id; break;
        case 'RALPH LAUREN': brand_id = brand[3].id; break;
        case 'TOMMY HILFIGER': brand_id = brand[4].id; break;
        case 'LEVIS': brand_id = brand[5].id; break;
    }

    switch (args[1].toUpperCase()) {
        case 'XS': size_id = size[0].id; break;
        case 'S': size_id = size[1].id; break;
        case 'M': size_id = size[2].id; break;
        case 'L': size_id = size[3].id; break;
        case 'XL': size_id = size[4].id; break;
        case 'XXL': size_id = size[5].id; break;
    }

    let lien = `https://www.vinted.fr/vetements?brand_id[]=${brand_id}&order=newest_first&price_from=0&currency=EUR&price_to=10&size_id[]=${size_id}`;
    vinted.search(lien).then((posts) => {
        posts.items.forEach(product => {


            const creaEmbed = new MessageEmbed()
                .setColor('#0099ff')
                .setTitle(product.title)
                .setURL(product.url)
                .setAuthor({ name: product.brand_title, iconURL: `https://cdn.discordapp.com/avatars/${message.author.id}/${message.author.avatar}.png?size=256`, url: product.url })
                .addFields(
                    { name: 'Taille', value: product.size_title + '\u200b', inline: true },
                          { name: 'Marque', value: product.brand_title, inline: true },
                          { name: 'Prix', value: product.price.substring(0, product.price.length-2)+" €", inline: true },
                         { name: '\u200B', value: '\u200B' },
                       { name: 'Condition', value: product.brand_title, inline: true },
                    { name: 'Vendeur', value: product.user.login+"\u200b" }
                )

                .setThumbnail(`https://cdn.discordapp.com/avatars/${message.author.id}/${message.author.avatar}.png?size=256`)

                .setImage(product.photo.url)
                .setTimestamp()
                .setFooter({ text: 'By Jamessss', iconURL: `https://cdn.discordapp.com/avatars/${message.author.id}/${message.author.avatar}.png?size=256` });

            const channel = client.channels.cache.find(ch => ch.name === 'free-moniteur');
            channel.send({embeds: [creaEmbed] });

            // vinted
            console.log (product);



            });


        });




}

module.exports.help = {
    name:"vinted"
}