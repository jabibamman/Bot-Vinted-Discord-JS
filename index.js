const { Client, Intents, Collection } = require('discord.js');
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

// Dès que le bot est ready
client.on('ready', async () => {
    // Automatisation de la commande vinted toutes les 10 minutes
    const checkminutes = 10, checkthe_interval = checkminutes * 60 * 1000; // This checks every 10 minutes, change 10 to whatever minute you'd like
    setInterval(function() {
        // Récupère la commande vinted
        let commande = client.commands.get('vinted_auto');

        // Exécute la commande vinted (pull)
        commande.execute(client, "nike","the-north-face", "carhartt", "lacoste", "ralph-lauren","tommy-hilfiger","0", "20", "pull");

        // Exécute la commande vinted (snkrs)
        commande.execute(client, "nike","new-balance", "adidas", "yeezy", "converse","travis-scott","0", "150", "snkrs");

    }, checkthe_interval);
});
