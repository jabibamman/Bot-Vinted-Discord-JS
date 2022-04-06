const { Client, Intents, Collection, MessageEmbed } = require('discord.js');
const fs = require('fs');
const config = require('./config.json');
const configProduit = require('./Commandes/config.json');


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




client.on('messageCreate', message =>{
    if(!message.guild || message.author.bot === true) return;
    if(message.content.toLowerCase() === "bonjour"){
      message.channel.send('Bonjour !')
    }
  })
  
  client.on('messageCreate', message =>{
    if(!message.guild || message.author.bot === true) return;
    if(message.content.toLowerCase() === "bonsoir"){
      message.channel.send('Soir Bon !')
    }
  })
  
  client.on('messageCreate', message =>{
    if(!message.guild || message.author.bot === true) return;
    if(message.content.toLowerCase() === "salut"){
      message.channel.send('Salutation !')
    }
  })
  
  client.on('messageCreate', message =>{
    if(!message.guild || message.author.bot === true) return;
    if(message.content.toLowerCase() === "comment ca va ?"){
      message.channel.send('Bien et vous ? ')
    }
  })
  
  client.on('messageCreate', message =>{
    if(!message.guild || message.author.bot === true) return;
    if(message.content.toLowerCase() === "comment ca va"){
      message.channel.send('Bien et vous ? ')
    }
  })
  
  client.on('messageCreate', message =>{
    if(!message.guild || message.author.bot === true) return;
    if(message.content.toLowerCase() === "bien"){
      message.channel.send('ok')
    }
  })
  
  
  //// insulte
  
  client.on('messageCreate', message =>{
    if(!message.guild || message.author.bot === true) return;
    if(message.content.toLowerCase() === "tg"){
      message.reply('Ow les insultes !')
    }
  })
  
  client.on('messageCreate', message =>{
    if(!message.guild || message.author.bot === true) return;
    if(message.content.toLowerCase() === "fdp"){
      message.reply('Ta grand mère je lui met 4 coup de couteaux !')
    }
  }) 
  
  client.on('messageCreate', message =>{
    if(!message.guild || message.author.bot === true) return;
    if(message.content.toLowerCase() === "ftg"){
      message.reply('Ow les insultes !')
    }


    client.on('disconnected', () => {
        console.log('Bot disconnected');

    });
  });
