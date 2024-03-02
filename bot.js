(async () => {
    let process = require('process');
    process.on('uncaughtException', function(err) {
        console.log(`𝕖𝕣𝕣𝕠𝕣❕`);
        console.log(err);
    });
    const events = require('events');
    let Discord = require("discord.js")
    let Database = require("easy-json-database")
    let {
        MessageEmbed,
        MessageButton,
        MessageActionRow,
        Intents,
        Permissions,
        MessageSelectMenu
    } = require("discord.js")
    let logs = require("discord-logs")
    const os = require("os-utils");
    const lyricsFinder = require('lyrics-finder');
    let fs = require('fs');
    const devMode = typeof __E_IS_DEV !== "undefined" && __E_IS_DEV;
    const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
    const s4d = {
        Discord,
        database: new Database(`./database.json`),
        fire: null,
        joiningMember: null,
        reply: null,
        tokenInvalid: false,
        tokenError: null,
        player: null,
        manager: null,
        Inviter: null,
        message: null,
        notifer: null,
        checkMessageExists() {
            if (!s4d.client) throw new Error('You cannot perform message operations without a Discord.js client')
            if (!s4d.client.readyTimestamp) throw new Error('You cannot perform message operations while the bot is not connected to the Discord API')
        }
    };
    s4d.client = new s4d.Discord.Client({
        intents: [Object.values(s4d.Discord.Intents.FLAGS).reduce((acc, p) => acc | p, 0)],
        partials: ["REACTION", "CHANNEL"]
    });
    s4d.client.on('ready', () => {
        console.log(s4d.client.user.tag + " is alive!")
    })
    logs(s4d.client);
    await s4d.client.login('***').catch((e) => {
        s4d.tokenInvalid = true;
        s4d.tokenError = e;
        if (e.toString().toLowerCase().includes("token")) {
            throw new Error("An invalid token was provided!")
        } else {
            throw new Error("Intents are not turned on!")
        }
    });

    s4d.client.on('ready', async () => {
        s4d.client.user.setPresence({
            status: "online",
            activities: [{
                name: 'RAID ≠ Vengeance',
                type: "STREAMING",
                url: "https://www.twitch.tv/passwordpleasebot"
            }]
        });

    });

    s4d.client.on('guildCreate', async (s4dguild) => {
        let embed = new Discord.MessageEmbed()
        embed.setColor(s4d.database.get(String('embed_color')));
        embed.setTitle((String(s4d.database.get(String('add-bot_emoji'))) + ' **| Un nouveau serveur m\'a ajouté !**'));
        embed.setDescription((['> <:item_arrow:968261894538424370> **Nom du serveur: ** `', s4dguild.name, '`', '\n', '> <:item_arrow:968261894538424370> **Propriétaire du serveur: ** `', (s4dguild.owner).username, '` / `', (s4dguild.owner).id, '`'].join('')));
        s4d.client.channels.cache.get(s4d.database.get(String('add-bot_chanel'))).send({
            embeds: [embed]
        });


    });

    return s4d
})();