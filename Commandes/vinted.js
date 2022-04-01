const { MessageEmbed } = require('discord.js');

const vinted = require('vinted-api');

const config = require('./config.json');
module.exports.run = async(client, message, args) => {
    let brand_id, size_id, price_from, price_to;
    price_from = args[3]
    price_to = args[4]

    message.delete()

    switch (args[0].toUpperCase()) {
        case 'NIKE': brand_id = config.brand[0].id; break;
        case 'ADIDAS': brand_id = config.brand[1].id; break;
        case 'LACOSTE': brand_id = config.brand[2].id; break;
        case 'RALPH LAUREN': brand_id = config.brand[3].id; break;
        case 'TOMMY HILFIGER': brand_id = config.brand[4].id; break;
        case 'LEVIS': brand_id = config.brand[5].id; break;
        case 'PUMA': brand_id = config.brand[6].id; break;
        case 'REEBOK': brand_id = config.brand[7].id; break;
        case 'NEW BALANCE': brand_id = config.brand[8].id; break;
        case 'ASICS': brand_id = config.brand[9].id; break;
        case 'VANS': brand_id = config.brand[10].id; break;
        case 'CONVERSE': brand_id = config.brand[11].id; break;
        case 'ZARA': brand_id = config.brand[12].id; break;
        case 'DIESEL': brand_id = config.brand[13].id; break;
        case 'GUCCI': brand_id = config.brand[14].id; break;
        case 'ARMANI': brand_id = config.brand[15].id; break;
        case 'VERSACE': brand_id = config.brand[16].id; break;
        case 'PRADA': brand_id = config.brand[17].id; break;
        case 'FENDI': brand_id = config.brand[18].id; break;
        case 'VALENTINO': brand_id = config.brand[9].id; break;
        case 'THE NORTH FACE': brand_id = config.brand[10].id; break;
        case 'BURBERRY': brand_id = config.brand[11].id; break;
        case 'STONE ISLAND': brand_id = config.brand[12].id; break;
        case 'OFF-WHITE': brand_id = config.brand[13].id; break;
        case 'SUPREME': brand_id = config.brand[14].id; break;
        case 'TRAVIS SCOTT': brand_id = config.brand[15].id; break;
        case 'YEEZY': brand_id = config.brand[16].id; break;
        default:
            message.channel.send(`${message.author}, merci de préciser une marque de chaussures valide.`);
            break;

    }

    switch (args[1].toUpperCase()) {
        // Tailles
        case 'XS': size_id = config.size[0].id; break;
        case 'S': size_id = config.size[1].id; break;
        case 'M': size_id = config.size[2].id; break;
        case 'L': size_id = config.size[3].id; break;
        case 'XL': size_id = config.size[4].id; break;
        case 'XXL': size_id = config.size[5].id; break;
        // Pointures
        case '38': size_id = config.size[6].id; break;
        case '39': size_id = config.size[7].id; break;
        case '40': size_id = config.size[8].id; break;
        case '41': size_id = config.size[9].id; break;
        case '42': size_id = config.size[10].id; break;
        case '42.5': size_id = config.size[11].id; break;
        case '43': size_id = config.size[12].id; break;
        case '43.5': size_id = config.size[13].id; break;
        case '44': size_id = config.size[14].id; break;
        case '44.5': size_id = config.size[15].id; break;
        case '45': size_id = config.size[16].id; break;

    }

    // Créer le rôle ayant pour nom la marque
    let role = message.guild.roles.cache.find(r => r.name === args[0].toUpperCase());
    // Si le role n'existe pas, on le crée
    if (!role) {
        role = await message.guild.roles.create(
        {
                name: args[0].toUpperCase(),
                color: 'RANDOM',
                permissions: ['0']
        });
    }

    // Vérifier si l'user à le role et sinon lui rajouter
    if (!message.member.roles.cache.has(role.id)) {
        await message.member.roles.add(role);
    }

    // Créer la catégorie moniteur personnalisé
    let category = message.guild.channels.cache.find(c => c.name === 'moniteur personnalisé');
    if (!category) {
        category = await message.guild.channels.create('moniteur personnalisé',
            {
                type: 'GUILD_CATEGORY',
                permissionOverwrites: [
                    {
                        id: message.guild.roles.everyone.id,
                        deny: ['VIEW_CHANNEL']
                    },
                    {
                        id: role.id,
                        allow: ['VIEW_CHANNEL']
                    }
                ]

            });
    }

    // Le channel est visible seulement s'il a le role
    let channelPerso = message.guild.channels.cache.find(channel => channel.name === args[0]);
    if (!channelPerso) {
        channelPerso = await message.guild.channels.create(args[0].toUpperCase(), {
            type: 'text',
            permissionOverwrites: [
                {
                    id: message.guild.roles.everyone.id,
                    deny: ['VIEW_CHANNEL']
                },
                {
                    id: role.id,
                    allow: ['VIEW_CHANNEL']
                }
            ]
        });
    }
    // Affecter le channelPerso à la catégorie
    await channelPerso.setParent(category.id);

    // console.log(args[2] + ' ' + args[3] + ' ' + args[4]) // DEBUG : Affiche les arguments

    let lien = `https://www.vinted.fr/vetements?search_text=${args[2]}&brand_id[]=${brand_id}&order=newest_first&price_from=${price_from}&currency=EUR&price_to=${price_to}&size_id[]=${size_id}`;
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

            //const channel = client.channels.cache.find(ch => ch.name === 'free-moniteur');
            channelPerso.send({embeds: [creaEmbed] });

            // vinted
            //console.log (product);

            });


        });




}

module.exports.help = {
    name:"vinted"
}