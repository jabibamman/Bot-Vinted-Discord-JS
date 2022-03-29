const { Client, Intents, Collection} = require('discord.js');
const fs = require('fs');
const config = require('./config.json');

const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] });

client.commands = new Collection();

var prefix = config.prefix;

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


client.on('message', message =>{
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

});