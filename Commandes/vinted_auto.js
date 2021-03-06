const { MessageEmbed, MessageButton, MessageActionRow} = require('discord.js');

const vinted = require('vinted-api');

const config = require('./config.json');
module.exports = {
    execute: async function (client, brand1, brand2, brand3, brand4, brand5, brand6, prix_min, prix_max, type1, Discord) {
        let marques = [
            brand1,
            brand2,
            brand3,
            brand4,
            brand5,
            brand6
        ]
        let channel;

        marques.forEach (function callback(marque, index) {
            switch (marque.toUpperCase ()) {
                case 'NIKE': // remplacer marque par config.brand[1].id ;
                    marques.splice (index, 1, '&brand_id[]=' + config.brand[0].id);
                    break;
                case 'ADIDAS':
                    marques.splice (index, 1, '&brand_id[]=' + '&brand_id[]=' + config.brand[1].id);
                    break;
                case 'LACOSTE':
                    marques.splice (index, 1, '&brand_id[]=' + config.brand[2].id);
                    break;
                case 'RALPH-LAUREN':
                    marques.splice (index, 1, '&brand_id[]=' + config.brand[3].id);
                    break;
                case 'TOMMY-HILFIGER':
                    marques.splice (index, 1, '&brand_id[]=' + config.brand[4].id);
                    break;
                case 'LEVIS':
                    marques.splice (index, 1, '&brand_id[]=' + config.brand[5].id);
                    break;
                case 'PUMA':
                    marques.splice (index, 1, '&brand_id[]=' + config.brand[6].id);
                    break;
                case 'REEBOK':
                    marques.splice (index, 1, '&brand_id[]=' + config.brand[7].id);
                    break;
                case 'NEW-BALANCE':
                    marques.splice (index, 1, '&brand_id[]=' + config.brand[8].id);
                    break;
                case 'ASICS':
                    marques.splice (index, 1, '&brand_id[]=' + config.brand[9].id);
                    break;
                case 'VANS':
                    marques.splice (index, 1, '&brand_id[]=' + config.brand[10].id);
                    break;
                case 'CONVERSE':
                    marques.splice (index, 1, '&brand_id[]=' + config.brand[11].id);
                    break;
                case 'ZARA':
                    marques.splice (index, 1, '&brand_id[]=' + config.brand[12].id);
                    break;
                case 'DIESEL':
                    marques.splice (index, 1, '&brand_id[]=' + config.brand[13].id);
                    break;
                case 'GUCCI':
                    marques.splice (index, 1, '&brand_id[]=' + config.brand[14].id);
                    break;
                case 'ARMANI':
                    marques.splice (index, 1, '&brand_id[]=' + config.brand[15].id);
                    break;
                case 'VERSACE':
                    marques.splice (index, 1, '&brand_id[]=' + config.brand[16].id);
                    break;
                case 'PRADA':
                    marques.splice (index, 1, '&brand_id[]=' + config.brand[17].id);
                    break;
                case 'FENDI':
                    marques.splice (index, 1, '&brand_id[]=' + config.brand[18].id);
                    break;
                case 'VALENTINO':
                    marques.splice (index, 1, '&brand_id[]=' + config.brand[19].id);
                    break;
                case 'THE-NORTH-FACE':
                    marques.splice (index, 1, '&brand_id[]=' + config.brand[20].id);
                    break;
                case 'BURBERRY':
                    marques.splice (index, 1, '&brand_id[]=' + config.brand[21].id);
                    break;
                case 'STONE-ISLAND':
                    marques.splice (index, 1, '&brand_id[]=' + config.brand[22].id);
                    break;
                case 'OFF-WHITE':
                    marques.splice (index, 1, '&brand_id[]=' + config.brand[23].id);
                    break;
                case 'SUPREME':
                    marques.splice (index, 1, '&brand_id[]=' + config.brand[24].id);
                    break;
                case 'TRAVIS-SCOTT':
                    marques.splice (index, 1, '&brand_id[]=' + config.brand[25].id);
                    break;
                case 'YEEZY':
                    marques.splice (index, 1, '&brand_id[]=' + config.brand[26].id);
                    break;
                case 'CARHARTT':
                    marques.splice (index, 1, '&brand_id[]=' + config.brand[27].id);
                    break;
                default:
                    return console.log (marque + ' non reconnue');
                    break;
            }
        })

        switch (type1.toUpperCase ()) {
            case 'SNKRS':
                channel = client.channels.cache.get (config.channel_free[0].id);
                type1 = '&catalog[]=' + config.catalog[0].id;
                break;
            case 'PULL':
                channel = client.channels.cache.get (config.channel_free[1].id);
                type1 = '&catalog[]=' + config.catalog[1].id;
                break;
            default:
                return console.log (type1 + ' non reconnue');
                break;
        }


        let brand_id = "";
        marques.forEach (marque => {
            brand_id += marque;
        })
        let photo_url = ''
        let lien = `https://www.vinted.fr/vetements?search_text=${type1}${brand_id}&order=newest_first&price_from=${prix_min}&currency=EUR&price_to=${prix_max}${type1}`;
        // console.log(lien); // debug pour voir le lien
        vinted.search (lien).then ((posts) => {
            // Ici je fais un foreach de posts reverse pour parcourir les posts de fa??on d'avoir les derniers posts en dernier (tout en bas du channel)
            posts.items.reverse ().forEach (product => {
                // Si !product.photo.url
                if (product.photo.url) {
                    photo_url = product.photo.url;
                }else{
                    photo_url = 'https://images.assetsdelivery.com/compings_v2/kaymosk/kaymosk1804/kaymosk180400005.jpg';
                }

                // Si product.title contient 'bot' alors on pass
                if (product.title.toUpperCase ().includes ('BOT ')) {
                    console.log ('Product ' + product.title + ' contains "bot: "' + product.url);
                } else if (product.title.toUpperCase ().includes (' EBOOK')) {
                    console.log ('Product ' + product.title + ' contains "ebook: "' + product.url);
                } else if (product.title.toUpperCase ().includes ('REFUND')) {
                    console.log ('Product `' + product.title + '` contains refund: ' + product.url);
                } else {
                    const btnLien = new MessageButton ()
                        .setStyle ("LINK")
                        .setURL (product.url)
                        .setLabel ("Voir Annonce")
                        .setDisabled (false)

                    const btnVendeur = new MessageButton ()
                        .setStyle ("LINK")
                        .setURL (product.user.profile_url)
                        .setLabel ("Vendeur")
                        .setDisabled (false)

                    const btnAcheter = new MessageButton ()
                        .setStyle ("LINK")
                        .setURL ("https://www.vinted.fr/transaction/buy/new?source_screen=item&transaction%5Bitem_id%5D=" + product.id)
                        .setLabel ("Acheter")
                        .setDisabled (false)

                    const row = new MessageActionRow ().addComponents ([btnLien, btnVendeur, btnAcheter]);

                    const creaEmbed = new MessageEmbed ()
                        .setColor ('#0099ff')
                        .setTitle (product.title)
                        .setURL (product.url)
                        .setAuthor ({
                            "name": "Vinted Moniteur | Free",
                            "iconURL": `https://cdn.discordapp.com/avatars/${client.user.id}/${client.user.avatar}.png?size=256`,
                            "url": product.url
                        })
                        .addFields (
                            {"name": 'Taille', "value": '```' + product.size_title + '```' + '\u200b', "inline": true},
                            {"name": 'Marque', "value": '```' + product.brand_title + '```', "inline": true},
                            {
                                "name": 'Prix',
                                "value": '```' + product.price.substring (0, product.price.length - 2) + " ???```",
                                "inline": true
                            },
                            {"name": 'Vendeur', "value": '```' + product.user.login + '```' + "\u200b"}
                        )

                        .setImage (photo_url)
                        .setTimestamp ()
                        .setFooter ({
                            "text": 'By Jamessss#7426',
                            "iconURL": `https://cdn.discordapp.com/avatars/${client.user.id}/${client.user.avatar}.png?size=256`
                        });


                    // Send the message and the button

                    channel.send (
                        {
                            "embeds": [creaEmbed], "components": [row]
                        });
                }
            });


        });
    }
}

module.exports.help = {
    "name":"vinted_auto"
}








