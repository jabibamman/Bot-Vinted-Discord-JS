﻿const { Client, Intents, Collection, MessageEmbed } = require('discord.js');
const fs = require('fs');
const config = require('./config.json');

const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] });


client.commands = new Collection();

fs.readdir('./Commandes/', (error, f) => {
    if (error) { return console.error(error); }
        let commandes = f.filter(f => f.split('.').pop() === 'js');
        if (commandes.length <= 0) { return console.log('Aucune commande trouvée !'); }

        commandes.forEach((f) => {
            let commande = require(`./Commandes/${f}`);
            console.log(`${f} commande chargée !`);
            client.commands.set(commande.help.name, commande);
        });
});

fs.readdir('./Events/', (error, f) => {
    if (error) { return console.error(error); }
        console.log(`${f.length} events chargés`);

        f.forEach((f) => {
            let events = require(`./Events/${f}`);
            let event = f.split('.')[0];
            client.on(event, events.bind(null, client));
        });
});

client.login(config.token);

// envoyer un message lorsque la personne viens d'arriver
client.on('guildMemberAdd', member => {
    const channel = member.guild.channels.cache.find(ch => ch.name === 'bienvenue');
    if (!channel) return;
    channel.send(`Bienvenue ${member} sur le serveur !`);
});
/*
 client.on('messageCreate', message =>{

     // Si l'identifiant du channel est égal à 959146840085909555 alors envoie un message
     if(message.channel.id === '959146840085909555'){

         const creaEmbed = new MessageEmbed()
            .setColor('#0099ff')
            .setTitle("Comment utiliser le bot ?")
             .setAuthor({ name: "vMoniteur", iconURL:  `https://cdn.discordapp.com/avatars/${message.author.id}/${message.author.avatar}.png?size=256` })
             .setDescription('Il suffit de choisir une marque si dessous et d\'utiliser la commande : ')
             .addField('`!vinted votre_marque votre_taille type_produit prix_min prix_max`',  '\u200b', false)
             .addFields(
                 { name: '- ' + configProduit.brand[0].name, value: '\u200b', inline: false },
                 { name: `- ${configProduit.brand[1].name}`, value: '\u200b', inline: false },
                 { name: `- ${configProduit.brand[2].name}`, value: '\u200b', inline: false },
                 { name: `- ${configProduit.brand[3].name}`, value: '\u200b', inline: false },
                 { name: `- ${configProduit.brand[4].name}`, value: '\u200b', inline: false },
                 { name: `- ${configProduit.brand[5].name}`, value: '\u200b', inline: false },
                 { name: `- ${configProduit.brand[6].name}`, value: '\u200b', inline: false },
                 { name: `- ${configProduit.brand[7].name}`, value: '\u200b', inline: false },
                 { name: `- ${configProduit.brand[8].name}`, value: '\u200b', inline: false },
                 { name: `- ${configProduit.brand[9].name}`, value: '\u200b', inline: false },
                 { name: `- ${configProduit.brand[10].name}`, value: '\u200b', inline: false },
                 { name: `- ${configProduit.brand[11].name}`, value: '\u200b', inline: false },
                 { name: `- ${configProduit.brand[12].name}`, value: '\u200b', inline: false },
                 { name: `- ${configProduit.brand[13].name}`, value: '\u200b', inline: false },
                 { name: `- ${configProduit.brand[14].name}`, value: '\u200b', inline: false },
                 { name: `- ${configProduit.brand[15].name}`, value: '\u200b', inline: false },
                 { name: `- ${configProduit.brand[16].name}`, value: '\u200b', inline: false }
             )
             .setThumbnail( `https://cdn.discordapp.com/avatars/${message.author.id}/${message.author.avatar}.png?size=2048`)

             .setTimestamp()
             .setFooter({ text: 'By Jamessss', iconURL: `https://cdn.discordapp.com/avatars/${message.author.id}/${message.author.avatar}.png?size=256` });

         const channel = client.channels.cache.find(ch => ch.name === 'config-moniteur');
         channel.send({embeds: [creaEmbed] });
    }
 });
*/




client.on('message', message =>{
    const logVinted = message.guild.channels.cache.find(c => c.name === 'log-vmoniteur');

    if(!message.guild || message.author.bot === true) return;
    switch (message.content.toLowerCase()) {
        case "bonjour":
            message.channel.send("Bonjour!");
            break;

        case "bonsoir":
            message.channel.send("Soir Bon !");
            break;

        case "salut":
            message.channel.send("Salutation !");
            break;

        case "comment ca va ?":
            message.channel.send("Bien et vous ?");
            break;

        case "bien":
            message.channel.send("ok.");
            break;

        // Insulte
        case "tg":
            message.channel.send("Oh les insultes !");
            break;

        case "ton daron":
            message.channel.send("Ton gros daron mon reuf !");
            break;

        case "ftg":
            message.channel.send("ta grand mère je lui met 4 coup de couteau gros chien");
            break;
    }
    if(message.content[0] === "!") {
        // afficher le channel ou l'user a envoyé le message
        logVinted.send("`"+message.author.username +"` a utilisé la commande `"+  message.content +"` dans le salon `" +  message.channel.name +"` le " + message.createdAt.getDate()+ "/"+message.createdAt.getUTCMonth()+"/"+message.createdAt.getFullYear()+" à " + message.createdAt.getHours()+":"+message.createdAt.getMinutes()+":"+message.createdAt.getSeconds()+".");

    }
});

// Lorsqu'un message est effacer
client.on('messageDelete', message => {
    if(!message.guild || message.author.bot === true) return;
    if (message.content[0] !== "!") {
        message.guild.channels.cache.find(c => c.name === 'log-vmoniteur')
            .send("`"+message.author.username +"` a effacé le message `"+  message.content +"` dans le salon `" +  message.channel.name +"` le " + message.createdAt.getDate()+ "/"+message.createdAt.getUTCMonth()+"/"+message.createdAt.getFullYear()+" à " + message.createdAt.getHours()+":"+message.createdAt.getMinutes()+":"+message.createdAt.getSeconds()+".");
    }
});


