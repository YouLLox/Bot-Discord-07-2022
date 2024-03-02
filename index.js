(async () => {
    let process = require('process');
    process.on('uncaughtException', function (err) {
        console.log(`Error!`);
        console.log(err);
    });
    const ShsHSjJSjSJSJSGHkkhdjdmns = ['CREATE_INSTANT_INVITE', 'MANAGE_CHANNELS', 'ADD_REACTIONS', 'STREAM', 'VIEW_CHANNEL', 'SEND_MESSAGES', 'SEND_TTS_MESSAGES', 'MANAGE_MESSAGES', 'EMBED_LINKS', 'ATTACH_FILES', 'READ_MESSAGE_HISTORY', 'MENTION_EVERYONE', 'USE_EXTERNAL_EMOJIS', 'CONNECT', 'SPEAK', 'USE_VAD', 'CHANGE_NICKNAME', 'MANAGE_ROLES', 'MANAGE_WEBHOOKS', 'USE_APPLICATION_COMMANDS', 'REQUEST_TO_SPEAK', 'MANAGE_THREADS', 'USE_PUBLIC_THREADS', 'CREATE_PUBLIC_THREADS', 'USE_PRIVATE_THREADS', 'CREATE_PRIVATE_THREADS', 'USE_EXTERNAL_STICKERS', 'SEND_MESSAGES_IN_THREADS', 'START_EMBEDDED_ACTIVITIES'











    ]
    const events = require('events');
    const {
        exec
    } = require("child_process")
    const S4D_APP_RUN_BUTTON = false
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
    let URL = require('url')
    const ms = require("ms")
    let https = require("https")
    const dootabase = require("easy-db-json");
    dootabase.setFile("./database.json");
    const synchronizeSlashCommands = require('@frostzzone/discord-sync-commands');
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
    var list, verification_add;


    await s4d.client.login('token').catch((e) => {
        s4d.tokenInvalid = true;
        s4d.tokenError = e;
        if (e.toString().toLowerCase().includes("token")) {
            throw new Error("An invalid token was provided!")
        } else {
            throw new Error("Intents are not turned on!")
        }
    });

    synchronizeSlashCommands(s4d.client, [{
        name: 'config',
        description: 'Configurer le bot en toute simplicité !',
        options: [

        ]
    }, {
        name: 'verify',
        description: 'Lancer le processus de vérification sur le serveur',
        options: [

        ]
    }, {
        name: 'role_infos',
        description: 'Afficher les informations d\'un rôle',
        options: [{
            type: 8,
            name: 'rôle',
            description: 'Choisissez le rôle',
            required: true
        },]
    }, {
        name: 'bot_infos',
        description: 'Afficher les informations du bot',
        options: [

        ]
    }, {
        name: 'condition_add',
        description: 'Ajouter une condition lors des partenariats',
        options: [{
            type: 4,
            name: 'membres_minimums',
            description: 'Nombre de membre(s) minimums pour cette condition',
            required: true,
            choices: [

            ]
        }, {
            type: 4,
            name: 'membres_maximums',
            description: 'Nombre de membre(s) maximum(s) pour cette condition',
            required: true,
            choices: [

            ]
        }, {
            type: 3,
            name: 'mention',
            description: 'Mention de votre côté',
            required: true,
            choices: [{
                name: String('Mention Everyone'),
                value: String('mentionever')
            }, {
                name: String('Mention Here'),
                value: String('mentionhere')
            }, {
                name: String('Notification Partenariat'),
                value: String('mentionpart')
            }, {
                name: String('Aucune Notification'),
                value: String('nomention')
            },]
        }, {
            type: 3,
            name: 'mention2',
            description: 'Mention du côté opposé',
            required: true,
            choices: [{
                name: String('Mention Everyone'),
                value: String('mentionever2')
            }, {
                name: String('Mention Here'),
                value: String('mentionhere2')
            }, {
                name: String('Notification Partenariat'),
                value: String('mentionnotif2')
            }, {
                name: String('Aucune Notification'),
                value: String('nomention2')
            },]
        },]
    }, {
        name: 'partner_add',
        description: 'Autoriser un utilisateur à faire des partenariats',
        options: [{
            type: 6,
            name: 'membre',
            description: 'Membre à ajouter à la liste',
            required: true
        },]
    }, {
        name: 'partner_remove',
        description: 'Annuler l\'autorisation d\'un utilisateur à faire des partenariats',
        options: [{
            type: 6,
            name: 'membre',
            description: 'Membre à retirer à la liste',
            required: true
        },]
    }, {
        name: 'condition_remove',
        description: 'Retirer une condition lors des partenariats',
        options: [{
            type: 4,
            name: 'numéro_condition',
            description: 'Numéro de la condition à supprimer',
            required: true,
            choices: [

            ]
        },]
    }, {
        name: 'conditions',
        description: 'Consulter les conditions partenariat du serveur',
        options: [

        ]
    }, {
        name: 'help',
        description: 'Consulter les commandes du bot',
        options: [

        ]
    }, {
        name: 'server_infos',
        description: 'Afficher les informations du serveur',
        options: [

        ]
    }, {
        name: 'partenariat',
        description: 'Lancer un partenariat avec un serveur',
        options: [{
            type: 3,
            name: 'id_serveur',
            description: 'ID du serveur que vous représentez',
            required: true,
            choices: [

            ]
        },]
    },], {
        debug: false,

    });

    s4d.client.on('guildCreate', async (s4dguild) => {
        console.log((['Le bot Partner a été ajouté à un nouveau serveur ! [NAME: ', s4dguild.name, '] / [ID: ', s4dguild.id, '] / [ID OWNER: ', (s4d.client.guilds.cache.get((s4dguild.id))).ownerId, '] / [TAG OWNER: ', (((s4d.client.guilds.cache.get((s4dguild.id))).members.cache.get(((s4d.client.guilds.cache.get((s4dguild.id))).ownerId)) || await (s4d.client.guilds.cache.get((s4dguild.id))).members.fetch(((s4d.client.guilds.cache.get((s4dguild.id))).ownerId))).user).tag, ']'].join('')));
        s4d.client.channels.cache.get(s4d.database.get(String('logs_chanel'))).send({
            embeds: [new MessageEmbed()
                .setColor(String(s4d.database.get(String('embed_color'))))
                .setDescription(String((['Le bot Partner a été ajouté à un nouveau serveur ! [NAME: ', s4dguild.name, '] / [ID: ', s4dguild.id, '] / [ID OWNER: ', (s4d.client.guilds.cache.get((s4dguild.id))).ownerId, '] / [TAG OWNER: ', (((s4d.client.guilds.cache.get((s4dguild.id))).members.cache.get(((s4d.client.guilds.cache.get((s4dguild.id))).ownerId)) || await (s4d.client.guilds.cache.get((s4dguild.id))).members.fetch(((s4d.client.guilds.cache.get((s4dguild.id))).ownerId))).user).tag, ']'].join(''))))
            ]
        });

    });

    s4d.client.on('guildDelete', async (s4dguild) => {
        console.log((['Le bot Partner a été ajouté à un nouveau serveur ! [NAME: ', s4dguild.name, '] / [ID: ', s4dguild.id, '] / [ID OWNER: ', (s4d.client.guilds.cache.get((s4dguild.id))).ownerId, '] / [TAG OWNER: ', (((s4d.client.guilds.cache.get((s4dguild.id))).members.cache.get(((s4d.client.guilds.cache.get((s4dguild.id))).ownerId)) || await (s4d.client.guilds.cache.get((s4dguild.id))).members.fetch(((s4d.client.guilds.cache.get((s4dguild.id))).ownerId))).user).tag, ']'].join('')));
        s4d.client.channels.cache.get(s4d.database.get(String('logs_chanel'))).send({
            embeds: [new MessageEmbed()
                .setColor(String(s4d.database.get(String('embed_color'))))
                .setDescription(String((['Le bot Partner a été ajouté à un nouveau serveur ! [NAME: ', s4dguild.name, '] / [ID: ', s4dguild.id, '] / [ID OWNER: ', (s4d.client.guilds.cache.get((s4dguild.id))).ownerId, '] / [TAG OWNER: ', (((s4d.client.guilds.cache.get((s4dguild.id))).members.cache.get(((s4d.client.guilds.cache.get((s4dguild.id))).ownerId)) || await (s4d.client.guilds.cache.get((s4dguild.id))).members.fetch(((s4d.client.guilds.cache.get((s4dguild.id))).ownerId))).user).tag, ']'].join(''))))
            ]
        });

    });

    s4d.client.on('interactionCreate', async (interaction) => {
        if ((interaction.customId) == 'part_notif_everyone') {
            if (((interaction.member).permissions.has(Permissions.FLAGS.ADMINISTRATOR)) || s4d.database.get(String('dev')) == ((interaction.member.user).id)) {
                dootabase.set(String(((interaction.guild).id)), 'no_verif');
                if ((dootabase.get(String((String((interaction.guild).id) + '-mention_everyone'))) == 'Activées') || (!dootabase.has(String((String((interaction.guild).id) + '-mention_everyone'))))) {
                    dootabase.set(String((String((interaction.guild).id) + '-mention_everyone')), 'Désactivées');
                    (interaction.channel).send({
                        embeds: [new MessageEmbed()
                            .setColor(String(s4d.database.get(String('good_color'))))
                            .setDescription(String((String(s4d.database.get(String('good_emoji'))) + String(s4d.database.get(String('message_good_question_config_menu_fr'))))))
                        ]
                    });
                    await delay(Number(3) * 1000);
                    (interaction.channel).bulkDelete((1 | 1));
                    var embed = new Discord.MessageEmbed()
                    embed.setColor(s4d.database.get(String('embed_color')));
                    embed.setTitle((String(s4d.database.get(String('settings_emoji'))) + String(s4d.database.get(String('config_menu-title_message_fr')))))
                        .setURL();
                    embed.setDescription((['> <:Partner_Owner:993091586583957534> **| ID du propriétaire:** *``` ID |', dootabase.get(String((String((interaction.guild).id) + '-owner-id_server'))), `\`\`\`*
            > <:Partner_Infos:992123787879399554> **Description du Serveur:** *\`\`\` Description | `, dootabase.get(String((String((interaction.guild).id) + '-desc_server'))), `\`\`\`*
            > <:Partner_Channel:992125913535889460> **Salon d'arrivés des Partenariats:** *\`\`\`ID | `, dootabase.get(String((String((interaction.guild).id) + '-part_chanel'))), `\`\`\`*
            > <:Partner_Save:993117407222702171> **Salon de Logs:** *\`\`\`ID | `, dootabase.get(String((String((interaction.guild).id) + '-part_logs_server'))), `\`\`\`*
            > <:Partner_Partner:992104887984861354> **Rôle de Notification Partenariat:** *\`\`\`ID | `, dootabase.get(String((String((interaction.guild).id) + '-part_notif_rank'))), `\`\`\`*
            > <:Partner_Notification:992727141340954624> **Mentions Everyone & Here:** *\`\`\` `, dootabase.get(String((String((interaction.guild).id) + '-mention_everyone'))), '', `\`\`\`*
            > <:Partner_Link:992955651359772753> **Publicité du serveur:** Publicité | `, dootabase.get(String((String((interaction.guild).id) + '-part_pub_server'))), ''].join('')));
                    const part_chanel = new MessageButton()
                        .setCustomId('part_chanel')
                        .setLabel('Salon Partenariats')
                        .setStyle(('SECONDARY'))
                        .setEmoji('<:Partner_Channel:992125913535889460>')

                    const part_pub_server = new MessageButton()
                        .setCustomId('part_pub_server')
                        .setLabel('Publicité Serveur')
                        .setStyle(('SECONDARY'))
                        .setEmoji('<:Partner_Link:992955651359772753>')

                    const part_logs_chanel = new MessageButton()
                        .setCustomId('part_logs_chanel')
                        .setLabel('Salon Logs')
                        .setStyle(('SECONDARY'))
                        .setEmoji('<:Partner_Save:993117407222702171>')

                    const part_notif_rank = new MessageButton()
                        .setCustomId('part_notif_rank')
                        .setLabel('Rôle Notification Partenariat')
                        .setStyle(('SECONDARY'))
                        .setEmoji('<:Partner_Partner:992104887984861354>')

                    const part_notif_everyone = new MessageButton()
                        .setCustomId('part_notif_everyone')
                        .setLabel('Mention Everyone & Here')
                        .setStyle(('SECONDARY'))
                        .setEmoji('<:Partner_Notification:992727141340954624>')

                    const config_reset = new MessageButton()
                        .setCustomId('config_reset')
                        .setLabel('Réinitialiser')
                        .setStyle(('DANGER'))
                        .setEmoji('<:Partner_Delete:993149012150599770>')

                    const part_config_menu = new MessageActionRow()
                        .addComponents(part_chanel)
                        .addComponents(part_logs_chanel)
                        .addComponents(part_notif_rank)

                    const part_config_ligne_menu = new MessageActionRow()
                        .addComponents(part_notif_everyone)
                        .addComponents(part_pub_server)
                        .addComponents(config_reset)

                    await interaction.message.edit({
                        embeds: [(embed)],
                        ephemeral: false,
                        components: [part_config_menu, part_config_ligne_menu]
                    });
                } else if (dootabase.get(String((String((interaction.guild).id) + '-mention_everyone'))) == 'Désactivées') {
                    dootabase.set(String((String((interaction.guild).id) + '-mention_everyone')), 'Activées');
                    (interaction.channel).send({
                        embeds: [new MessageEmbed()
                            .setColor(String(s4d.database.get(String('good_color'))))
                            .setDescription(String((String(s4d.database.get(String('good_emoji'))) + String(s4d.database.get(String('message_good_question_config_menu_fr'))))))
                        ]
                    });
                    await delay(Number(3) * 1000);
                    (interaction.channel).bulkDelete((1 | 1));
                    var embed = new Discord.MessageEmbed()
                    embed.setColor(s4d.database.get(String('embed_color')));
                    embed.setTitle((String(s4d.database.get(String('settings_emoji'))) + String(s4d.database.get(String('config_menu-title_message_fr')))))
                        .setURL();
                    embed.setDescription((['> <:Partner_Owner:993091586583957534> **| ID du propriétaire:** *``` ID | ', dootabase.get(String((String((interaction.guild).id) + '-owner-id_server'))), `\`\`\`*
            > <:Partner_Infos:992123787879399554> **Description du Serveur:** *\`\`\` Description | `, dootabase.get(String((String((interaction.guild).id) + '-desc_server'))), `\`\`\`*
            > <:Partner_Channel:992125913535889460> **Salon d'arrivés des Partenariats:** *\`\`\`ID | `, dootabase.get(String((String((interaction.guild).id) + '-part_chanel'))), `\`\`\`*
            > <:Partner_Save:993117407222702171> **Salon de Logs:** *\`\`\`ID | `, dootabase.get(String((String((interaction.guild).id) + '-part_logs_server'))), `\`\`\`*
            > <:Partner_Partner:992104887984861354> **Rôle de Notification Partenariat:** *\`\`\`ID | `, dootabase.get(String((String((interaction.guild).id) + '-part_notif_rank'))), `\`\`\`*
            > <:Partner_Notification:992727141340954624> **Mentions Everyone & Here:** *\`\`\` `, dootabase.get(String((String((interaction.guild).id) + '-mention_everyone'))), '', `\`\`\`*
            > <:Partner_Link:992955651359772753> **Publicité du serveur:** Publicité | `, dootabase.get(String((String((interaction.guild).id) + '-part_pub_server'))), ''].join('')));

                    const part_chanel = new MessageButton()
                        .setCustomId('part_chanel')
                        .setLabel('Salon Partenariats')
                        .setStyle(('SECONDARY'))
                        .setEmoji('<:Partner_Channel:992125913535889460>')

                    const part_pub_server = new MessageButton()
                        .setCustomId('part_pub_server')
                        .setLabel('Publicité Serveur')
                        .setStyle(('SECONDARY'))
                        .setEmoji('<:Partner_Link:992955651359772753>')

                    const part_logs_chanel = new MessageButton()
                        .setCustomId('part_logs_chanel')
                        .setLabel('Salon Logs')
                        .setStyle(('SECONDARY'))
                        .setEmoji('<:Partner_Save:993117407222702171>')

                    const part_notif_rank = new MessageButton()
                        .setCustomId('part_notif_rank')
                        .setLabel('Rôle Notification Partenariat')
                        .setStyle(('SECONDARY'))
                        .setEmoji('<:Partner_Partner:992104887984861354>')

                    const part_notif_everyone = new MessageButton()
                        .setCustomId('part_notif_everyone')
                        .setLabel('Mention Everyone & Here')
                        .setStyle(('SECONDARY'))
                        .setEmoji('<:Partner_Notification:992727141340954624>')

                    const config_reset = new MessageButton()
                        .setCustomId('config_reset')
                        .setLabel('Réinitialiser')
                        .setStyle(('DANGER'))
                        .setEmoji('<:Partner_Delete:993149012150599770>')

                    const part_config_menu = new MessageActionRow()
                        .addComponents(part_chanel)
                        .addComponents(part_logs_chanel)
                        .addComponents(part_notif_rank)

                    const part_config_ligne_menu = new MessageActionRow()
                        .addComponents(part_notif_everyone)
                        .addComponents(part_pub_server)
                        .addComponents(config_reset)

                    await interaction.message.edit({
                        embeds: [(embed)],
                        components: [part_config_menu, part_config_ligne_menu]
                    });
                }
            }
        }
        if ((interaction.customId) == 'part_pub_server') {
            if (((interaction.member).permissions.has(Permissions.FLAGS.ADMINISTRATOR)) || s4d.database.get(String('dev')) == ((interaction.member.user).id)) {
                dootabase.set(String(((interaction.guild).id)), 'no_verif');
                (interaction.channel).send(String((String(s4d.database.get(String('question_emoji'))) + String(s4d.database.get(String('question_part_pub_menu_config_fr')))))).then(() => {
                    (interaction.channel).awaitMessages({
                        filter: (m) => m.author.id === (interaction.member).id,
                        time: (5 * 60 * 1000),
                        max: 1
                    }).then(async (collected) => {
                        s4d.reply = collected.first().content;
                        s4d.message = collected.first();
                        if (!(((s4d.reply) || '').startsWith('cancel' || ''))) {
                            if ((String((s4d.reply)).includes(String('@everyone'))) || (String((s4d.reply)).includes(String('@here')))) {
                                (interaction.channel).send({
                                    embeds: [new MessageEmbed()
                                        .setColor(String(s4d.database.get(String('wrong_color'))))
                                        .setDescription(String((String(s4d.database.get(String('wrong_emoji'))) + String(s4d.database.get(String('everyone_error_message_fr'))))))
                                    ]
                                });
                                await delay(Number(3) * 1000);
                                (interaction.channel).bulkDelete((2 | 1));
                            } else {
                                (interaction.channel).send({
                                    embeds: [new MessageEmbed()
                                        .setColor(String(s4d.database.get(String('good_color'))))
                                        .setDescription(String((String(s4d.database.get(String('good_emoji'))) + String(s4d.database.get(String('message_good_question_config_menu_fr'))))))
                                    ]
                                });
                                await delay(Number(3) * 1000);
                                (interaction.channel).bulkDelete((2 | 1));
                                dootabase.set(String((String((interaction.guild).id) + '-part_pub_server')), (s4d.reply));
                                var embed = new Discord.MessageEmbed()
                                embed.setColor(s4d.database.get(String('embed_color')));
                                embed.setTitle((String(s4d.database.get(String('settings_emoji'))) + String(s4d.database.get(String('config_menu-title_message_fr')))))
                                    .setURL();
                                embed.setDescription((['> <:Partner_Owner:993091586583957534> **| ID du propriétaire:** *``` ID | ', dootabase.get(String((String((interaction.guild).id) + '-owner-id_server'))), `\`\`\`*
                > <:Partner_Infos:992123787879399554> **Description du Serveur:** *\`\`\` Description | `, dootabase.get(String((String((interaction.guild).id) + '-desc_server'))), `\`\`\`*
                > <:Partner_Channel:992125913535889460> **Salon d'arrivés des Partenariats:** *\`\`\`ID | `, dootabase.get(String((String((interaction.guild).id) + '-part_chanel'))), `\`\`\`*
                > <:Partner_Save:993117407222702171> **Salon de Logs:** *\`\`\`ID | `, dootabase.get(String((String((interaction.guild).id) + '-part_logs_server'))), `\`\`\`*
                > <:Partner_Partner:992104887984861354> **Rôle de Notification Partenariat:** *\`\`\`ID | `, dootabase.get(String((String((interaction.guild).id) + '-part_notif_rank'))), `\`\`\`*
                > <:Partner_Notification:992727141340954624> **Mentions Everyone & Here:** *\`\`\` `, dootabase.get(String((String((interaction.guild).id) + '-mention_everyone'))), '', `\`\`\`*
                > <:Partner_Link:992955651359772753> **Publicité du serveur:** Publicité | `, dootabase.get(String((String((interaction.guild).id) + '-part_pub_server'))), ''].join('')));

                                const part_chanel = new MessageButton()
                                    .setCustomId('part_chanel')
                                    .setLabel('Salon Partenariats')
                                    .setStyle(('SECONDARY'))
                                    .setEmoji('<:Partner_Channel:992125913535889460>')

                                const part_pub_server = new MessageButton()
                                    .setCustomId('part_pub_server')
                                    .setLabel('Publicité Serveur')
                                    .setStyle(('SECONDARY'))
                                    .setEmoji('<:Partner_Link:992955651359772753>')

                                const part_logs_chanel = new MessageButton()
                                    .setCustomId('part_logs_chanel')
                                    .setLabel('Salon Logs')
                                    .setStyle(('SECONDARY'))
                                    .setEmoji('<:Partner_Save:993117407222702171>')

                                const part_notif_rank = new MessageButton()
                                    .setCustomId('part_notif_rank')
                                    .setLabel('Rôle Notification Partenariat')
                                    .setStyle(('SECONDARY'))
                                    .setEmoji('<:Partner_Partner:992104887984861354>')

                                const part_notif_everyone = new MessageButton()
                                    .setCustomId('part_notif_everyone')
                                    .setLabel('Mention Everyone & Here')
                                    .setStyle(('SECONDARY'))
                                    .setEmoji('<:Partner_Notification:992727141340954624>')

                                const config_reset = new MessageButton()
                                    .setCustomId('config_reset')
                                    .setLabel('Réinitialiser')
                                    .setStyle(('DANGER'))
                                    .setEmoji('<:Partner_Delete:993149012150599770>')

                                const part_config_menu = new MessageActionRow()
                                    .addComponents(part_chanel)
                                    .addComponents(part_logs_chanel)
                                    .addComponents(part_notif_rank)

                                const part_config_ligne_menu = new MessageActionRow()
                                    .addComponents(part_notif_everyone)
                                    .addComponents(part_pub_server)
                                    .addComponents(config_reset)

                                await interaction.message.edit({
                                    embeds: [(embed)],
                                    components: [part_config_menu, part_config_ligne_menu]
                                });
                            }
                        } else {
                            (interaction.channel).send({
                                embeds: [new MessageEmbed()
                                    .setColor(String(s4d.database.get(String('embed_color'))))
                                    .setDescription(String((String(s4d.database.get(String('delete_emoji'))) + String(s4d.database.get(String('message_cancel_question_config_menu_fr'))))))
                                ]
                            });
                            await delay(Number(3) * 1000);
                            (interaction.channel).bulkDelete((2 | 1));
                        }

                        s4d.reply = null;
                    }).catch(async (e) => {
                        console.error(e);
                    });
                })
            }
        }
        if ((interaction.customId) == 'part_notif_rank') {
            if (((interaction.member).permissions.has(Permissions.FLAGS.ADMINISTRATOR)) || s4d.database.get(String('dev')) == ((interaction.member.user).id)) {
                dootabase.set(String(((interaction.guild).id)), 'no_verif');
                (interaction.channel).send(String((String(s4d.database.get(String('question_emoji'))) + String(s4d.database.get(String('question_notifrank_message_fr')))))).then(() => {
                    (interaction.channel).awaitMessages({
                        filter: (m) => m.author.id === (interaction.member).id,
                        time: (5 * 60 * 1000),
                        max: 1
                    }).then(async (collected) => {
                        s4d.reply = collected.first().content;
                        s4d.message = collected.first();
                        if (!((s4d.reply) || '').startsWith('<@&' || '')) {
                            (interaction.channel).send({
                                embeds: [new MessageEmbed()
                                    .setColor(String(s4d.database.get(String('good_color'))))
                                    .setDescription(String((String(s4d.database.get(String('good_emoji'))) + String(s4d.database.get(String('message_good_question_config_menu_fr'))))))
                                ]
                            });
                            await delay(Number(3) * 1000);
                            (interaction.channel).bulkDelete((2 | 1));
                            dootabase.set(String((String((interaction.guild).id) + '-part_notif_rank')), ((s4d.reply)));
                            var embed = new Discord.MessageEmbed()
                            embed.setColor(s4d.database.get(String('embed_color')));
                            embed.setTitle((String(s4d.database.get(String('settings_emoji'))) + String(s4d.database.get(String('config_menu-title_message_fr')))))
                                .setURL();
                            embed.setDescription((['> <:Partner_Owner:993091586583957534> **| ID du propriétaire:** *``` ID | ', dootabase.get(String((String((interaction.guild).id) + '-owner-id_server'))), `\`\`\`*
              > <:Partner_Infos:992123787879399554> **Description du Serveur:** *\`\`\` Description | `, dootabase.get(String((String((interaction.guild).id) + '-desc_server'))), `\`\`\`*
              > <:Partner_Channel:992125913535889460> **Salon d'arrivés des Partenariats:** *\`\`\`ID | `, dootabase.get(String((String((interaction.guild).id) + '-part_chanel'))), `\`\`\`*
              > <:Partner_Save:993117407222702171> **Salon de Logs:** *\`\`\`ID | `, dootabase.get(String((String((interaction.guild).id) + '-part_logs_server'))), `\`\`\`*
              > <:Partner_Partner:992104887984861354> **Rôle de Notification Partenariat:** *\`\`\`ID | `, dootabase.get(String((String((interaction.guild).id) + '-part_notif_rank'))), `\`\`\`*
              > <:Partner_Notification:992727141340954624> **Mentions Everyone & Here:** *\`\`\` `, dootabase.get(String((String((interaction.guild).id) + '-mention_everyone'))), '', `\`\`\`*
              > <:Partner_Link:992955651359772753> **Publicité du serveur:** Publicité | `, dootabase.get(String((String((interaction.guild).id) + '-part_pub_server'))), ''].join('')));

                            const part_chanel = new MessageButton()
                                .setCustomId('part_chanel')
                                .setLabel('Salon Partenariats')
                                .setStyle(('SECONDARY'))
                                .setEmoji('<:Partner_Channel:992125913535889460>')

                            const part_pub_server = new MessageButton()
                                .setCustomId('part_pub_server')
                                .setLabel('Publicité Serveur')
                                .setStyle(('SECONDARY'))
                                .setEmoji('<:Partner_Link:992955651359772753>')

                            const part_logs_chanel = new MessageButton()
                                .setCustomId('part_logs_chanel')
                                .setLabel('Salon Logs')
                                .setStyle(('SECONDARY'))
                                .setEmoji('<:Partner_Save:993117407222702171>')

                            const part_notif_rank = new MessageButton()
                                .setCustomId('part_notif_rank')
                                .setLabel('Rôle Notification Partenariat')
                                .setStyle(('SECONDARY'))
                                .setEmoji('<:Partner_Partner:992104887984861354>')

                            const part_notif_everyone = new MessageButton()
                                .setCustomId('part_notif_everyone')
                                .setLabel('Mention Everyone & Here')
                                .setStyle(('SECONDARY'))
                                .setEmoji('<:Partner_Notification:992727141340954624>')

                            const config_reset = new MessageButton()
                                .setCustomId('config_reset')
                                .setLabel('Réinitialiser')
                                .setStyle(('DANGER'))
                                .setEmoji('<:Partner_Delete:993149012150599770>')

                            const part_config_menu = new MessageActionRow()
                                .addComponents(part_chanel)
                                .addComponents(part_logs_chanel)
                                .addComponents(part_notif_rank)

                            const part_config_ligne_menu = new MessageActionRow()
                                .addComponents(part_notif_everyone)
                                .addComponents(part_pub_server)
                                .addComponents(config_reset)

                            await interaction.message.edit({
                                embeds: [(embed)],
                                components: [part_config_menu, part_config_ligne_menu]
                            });
                        } else if ((s4d.reply) == 'cancel') {
                            (interaction.channel).send({
                                embeds: [new MessageEmbed()
                                    .setColor(String(s4d.database.get(String('embed_color'))))
                                    .setDescription(String((String(s4d.database.get(String('delete_emoji'))) + String(s4d.database.get(String('message_cancel_question_config_menu_fr'))))))
                                ]
                            });
                            await delay(Number(3) * 1000);
                            (interaction.channel).bulkDelete((2 | 1));
                        } else {
                            (interaction.channel).send({
                                embeds: [new MessageEmbed()
                                    .setColor(String(s4d.database.get(String('wrong_color'))))
                                    .setDescription(String((String(s4d.database.get(String('wrong_emoji'))) + String(s4d.database.get(String('message_wrong_question_rank_config_menu_fr'))))))
                                ]
                            });
                            await delay(Number(3) * 1000);
                            (interaction.channel).bulkDelete((2 | 1));
                        }

                        s4d.reply = null;
                    }).catch(async (e) => {
                        console.error(e);
                    });
                })
            }
        }
        if ((interaction.customId) == 'part_logs_chanel') {
            if (((interaction.member).permissions.has(Permissions.FLAGS.ADMINISTRATOR)) || s4d.database.get(String('dev')) == ((interaction.member.user).id)) {
                dootabase.set(String(((interaction.guild).id)), 'no_verif');
                (interaction.channel).send(String((String(s4d.database.get(String('question_emoji'))) + String(s4d.database.get(String('question_part_chanel_menu_config_fr')))))).then(() => {
                    (interaction.channel).awaitMessages({
                        filter: (m) => m.author.id === (interaction.member).id,
                        time: (5 * 60 * 1000),
                        max: 1
                    }).then(async (collected) => {
                        s4d.reply = collected.first().content;
                        s4d.message = collected.first();
                        if (!((s4d.reply) || '').startsWith('<#' || '')) {
                            (interaction.channel).send({
                                embeds: [new MessageEmbed()
                                    .setColor(String(s4d.database.get(String('good_color'))))
                                    .setDescription(String((String(s4d.database.get(String('good_emoji'))) + String(s4d.database.get(String('message_good_question_config_menu_fr'))))))
                                ]
                            });
                            await delay(Number(3) * 1000);
                            (interaction.channel).bulkDelete((2 | 1));
                            dootabase.set(String((String((interaction.guild).id) + '-part_logs_server')), ((s4d.reply)));
                            var embed = new Discord.MessageEmbed()
                            embed.setColor(s4d.database.get(String('embed_color')));
                            embed.setTitle((String(s4d.database.get(String('settings_emoji'))) + String(s4d.database.get(String('config_menu-title_message_fr')))))
                                .setURL();
                            embed.setDescription((['> <:Partner_Owner:993091586583957534> **| ID du propriétaire:** *``` ID | ', dootabase.get(String((String((interaction.guild).id) + '-owner-id_server'))), `\`\`\`*
              > <:Partner_Infos:992123787879399554> **Description du Serveur:** *\`\`\` Description | `, dootabase.get(String((String((interaction.guild).id) + '-desc_server'))), `\`\`\`*
              > <:Partner_Channel:992125913535889460> **Salon d'arrivés des Partenariats:** *\`\`\`ID | `, dootabase.get(String((String((interaction.guild).id) + '-part_chanel'))), `\`\`\`*
              > <:Partner_Save:993117407222702171> **Salon de Logs:** *\`\`\`ID | `, dootabase.get(String((String((interaction.guild).id) + '-part_logs_server'))), `\`\`\`*
              > <:Partner_Partner:992104887984861354> **Rôle de Notification Partenariat:** *\`\`\`ID | `, dootabase.get(String((String((interaction.guild).id) + '-part_notif_rank'))), `\`\`\`*
              > <:Partner_Notification:992727141340954624> **Mentions Everyone & Here:** *\`\`\` `, dootabase.get(String((String((interaction.guild).id) + '-mention_everyone'))), '', `\`\`\`*
              > <:Partner_Link:992955651359772753> **Publicité du serveur:** Publicité | `, dootabase.get(String((String((interaction.guild).id) + '-part_pub_server'))), ''].join('')));

                            const part_chanel = new MessageButton()
                                .setCustomId('part_chanel')
                                .setLabel('Salon Partenariats')
                                .setStyle(('SECONDARY'))
                                .setEmoji('<:Partner_Channel:992125913535889460>')

                            const part_pub_server = new MessageButton()
                                .setCustomId('part_pub_server')
                                .setLabel('Publicité Serveur')
                                .setStyle(('SECONDARY'))
                                .setEmoji('<:Partner_Link:992955651359772753>')

                            const part_logs_chanel = new MessageButton()
                                .setCustomId('part_logs_chanel')
                                .setLabel('Salon Logs')
                                .setStyle(('SECONDARY'))
                                .setEmoji('<:Partner_Save:993117407222702171>')

                            const part_notif_rank = new MessageButton()
                                .setCustomId('part_notif_rank')
                                .setLabel('Rôle Notification Partenariat')
                                .setStyle(('SECONDARY'))
                                .setEmoji('<:Partner_Partner:992104887984861354>')

                            const part_notif_everyone = new MessageButton()
                                .setCustomId('part_notif_everyone')
                                .setLabel('Mention Everyone & Here')
                                .setStyle(('SECONDARY'))
                                .setEmoji('<:Partner_Notification:992727141340954624>')

                            const config_reset = new MessageButton()
                                .setCustomId('config_reset')
                                .setLabel('Réinitialiser')
                                .setStyle(('DANGER'))
                                .setEmoji('<:Partner_Delete:993149012150599770>')

                            const part_config_menu = new MessageActionRow()
                                .addComponents(part_chanel)
                                .addComponents(part_logs_chanel)
                                .addComponents(part_notif_rank)

                            const part_config_ligne_menu = new MessageActionRow()
                                .addComponents(part_notif_everyone)
                                .addComponents(part_pub_server)
                                .addComponents(config_reset)

                            await interaction.message.edit({
                                embeds: [(embed)],
                                components: [part_config_menu, part_config_ligne_menu]
                            });
                        } else if ((s4d.reply) == 'cancel') {
                            (interaction.channel).send({
                                embeds: [new MessageEmbed()
                                    .setColor(String(s4d.database.get(String('embed_color'))))
                                    .setDescription(String((String(s4d.database.get(String('delete_emoji'))) + String(s4d.database.get(String('message_cancel_question_config_menu_fr'))))))
                                ]
                            });
                            await delay(Number(3) * 1000);
                            (interaction.channel).bulkDelete((2 | 1));
                        } else {
                            (interaction.channel).send({
                                embeds: [new MessageEmbed()
                                    .setColor(String(s4d.database.get(String('wrong_color'))))
                                    .setDescription(String((String(s4d.database.get(String('wrong_emoji'))) + String(s4d.database.get(String('message_wrong_question_config_menu_fr'))))))
                                ]
                            });
                            await delay(Number(3) * 1000);
                            (interaction.channel).bulkDelete((2 | 1));
                        }

                        s4d.reply = null;
                    }).catch(async (e) => {
                        console.error(e);
                    });
                })
            }
        }
        if ((interaction.customId) == 'part_chanel') {
            if (((interaction.member).permissions.has(Permissions.FLAGS.ADMINISTRATOR)) || s4d.database.get(String('dev')) == ((interaction.member.user).id)) {
                dootabase.set(String(((interaction.guild).id)), 'no_verif');
                (interaction.channel).send(String((String(s4d.database.get(String('question_emoji'))) + String(s4d.database.get(String('question_part_chanel_menu_config_fr')))))).then(() => {
                    (interaction.channel).awaitMessages({
                        filter: (m) => m.author.id === (interaction.member).id,
                        time: (5 * 60 * 1000),
                        max: 1
                    }).then(async (collected) => {
                        s4d.reply = collected.first().content;
                        s4d.message = collected.first();
                        if (!((s4d.reply) || '').startsWith('<#' || '')) {
                            (interaction.channel).send({
                                embeds: [new MessageEmbed()
                                    .setColor(String(s4d.database.get(String('good_color'))))
                                    .setDescription(String((String(s4d.database.get(String('good_emoji'))) + String(s4d.database.get(String('message_good_question_config_menu_fr'))))))
                                ]
                            });
                            await delay(Number(3) * 1000);
                            (interaction.channel).bulkDelete((2 | 1));
                            dootabase.set(String((String((interaction.guild).id) + '-part_chanel')), ((s4d.reply)));
                            var embed = new Discord.MessageEmbed()
                            embed.setColor(s4d.database.get(String('embed_color')));
                            embed.setTitle((String(s4d.database.get(String('settings_emoji'))) + String(s4d.database.get(String('config_menu-title_message_fr')))))
                                .setURL();
                            embed.setDescription((['> <:Partner_Owner:993091586583957534> **| ID du propriétaire:** *``` ID | ', dootabase.get(String((String((interaction.guild).id) + '-owner-id_server'))), `\`\`\`*
              > <:Partner_Infos:992123787879399554> **Description du Serveur:** *\`\`\` Description | `, dootabase.get(String((String((interaction.guild).id) + '-desc_server'))), `\`\`\`*
              > <:Partner_Channel:992125913535889460> **Salon d'arrivés des Partenariats:** *\`\`\`ID | `, dootabase.get(String((String((interaction.guild).id) + '-part_chanel'))), `\`\`\`*
              > <:Partner_Save:993117407222702171> **Salon de Logs:** *\`\`\`ID | `, dootabase.get(String((String((interaction.guild).id) + '-part_logs_server'))), `\`\`\`*
              > <:Partner_Partner:992104887984861354> **Rôle de Notification Partenariat:** *\`\`\`ID | `, dootabase.get(String((String((interaction.guild).id) + '-part_notif_rank'))), `\`\`\`*
              > <:Partner_Notification:992727141340954624> **Mentions Everyone & Here:** *\`\`\` `, dootabase.get(String((String((interaction.guild).id) + '-mention_everyone'))), '', `\`\`\`*
              > <:Partner_Link:992955651359772753> **Publicité du serveur:** Publicité | `, dootabase.get(String((String((interaction.guild).id) + '-part_pub_server'))), ''].join('')));

                            const part_chanel = new MessageButton()
                                .setCustomId('part_chanel')
                                .setLabel('Salon Partenariats')
                                .setStyle(('SECONDARY'))
                                .setEmoji('<:Partner_Channel:992125913535889460>')

                            const part_pub_server = new MessageButton()
                                .setCustomId('part_pub_server')
                                .setLabel('Publicité Serveur')
                                .setStyle(('SECONDARY'))
                                .setEmoji('<:Partner_Link:992955651359772753>')

                            const part_logs_chanel = new MessageButton()
                                .setCustomId('part_logs_chanel')
                                .setLabel('Salon Logs')
                                .setStyle(('SECONDARY'))
                                .setEmoji('<:Partner_Save:993117407222702171>')

                            const part_notif_rank = new MessageButton()
                                .setCustomId('part_notif_rank')
                                .setLabel('Rôle Notification Partenariat')
                                .setStyle(('SECONDARY'))
                                .setEmoji('<:Partner_Partner:992104887984861354>')

                            const part_notif_everyone = new MessageButton()
                                .setCustomId('part_notif_everyone')
                                .setLabel('Mention Everyone & Here')
                                .setStyle(('SECONDARY'))
                                .setEmoji('<:Partner_Notification:992727141340954624>')

                            const config_reset = new MessageButton()
                                .setCustomId('config_reset')
                                .setLabel('Réinitialiser')
                                .setStyle(('DANGER'))
                                .setEmoji('<:Partner_Delete:993149012150599770>')

                            const part_config_menu = new MessageActionRow()
                                .addComponents(part_chanel)
                                .addComponents(part_logs_chanel)
                                .addComponents(part_notif_rank)

                            const part_config_ligne_menu = new MessageActionRow()
                                .addComponents(part_notif_everyone)
                                .addComponents(part_pub_server)
                                .addComponents(config_reset)

                            await interaction.message.edit({
                                embeds: [(embed)],
                                components: [part_config_menu, part_config_ligne_menu]
                            });
                        } else if ((s4d.reply) == 'cancel') {
                            (interaction.channel).send({
                                embeds: [new MessageEmbed()
                                    .setColor(String(s4d.database.get(String('embed_color'))))
                                    .setDescription(String((String(s4d.database.get(String('delete_emoji'))) + String(s4d.database.get(String('message_cancel_question_config_menu_fr'))))))
                                ]
                            });
                            await delay(Number() * 1000);
                            (interaction.channel).bulkDelete((2 | 1));
                        } else {
                            (interaction.channel).send({
                                embeds: [new MessageEmbed()
                                    .setColor(String(s4d.database.get(String('wrong_color'))))
                                    .setDescription(String((String(s4d.database.get(String('wrong_emoji'))) + String(s4d.database.get(String('message_wrong_question_config_menu_fr'))))))
                                ]
                            });
                            await delay(Number(4) * 1000);
                            (interaction.channel).bulkDelete((2 | 1));
                        }

                        s4d.reply = null;
                    }).catch(async (e) => {
                        console.error(e);
                    });
                })
            }
        }

    });

    s4d.client.on('interactionCreate', async (interaction) => {
        if ((interaction.customId) == 'delete_button_accept_menu') {
            dootabase.setFile("./" + 'Donnés' + ".json");
            if ((interaction.member).permissions.has(Permissions.FLAGS.ADMINISTRATOR) || s4d.database.get(String('dev')) == ((interaction.member.user).id)) {
                dootabase.set(String((String((interaction.guild).id))), 'no_verif');
                dootabase.del(String((String((interaction.guild).id) + '-owner-id_server')));
                dootabase.del(String((String((interaction.guild).id) + '-icon_server')));
                dootabase.set(String((String((interaction.guild).id) + '-mention_everyone')), 'Activées');
                dootabase.del(String((String((interaction.guild).id) + '-name_server')));
                dootabase.del(String((String((interaction.guild).id) + '-desc_server')));
                dootabase.del(String((String((interaction.guild).id) + '-banner_server')));
                dootabase.del(String((String((interaction.guild).id) + '-part_chanel')));
                dootabase.del(String((String((interaction.guild).id) + '-part_pub_server')));
                dootabase.del(String((String((interaction.guild).id) + '-part_logs_server')));
                dootabase.del(String((String((interaction.guild).id) + '-part_notif_rank')))

                var embed = new Discord.MessageEmbed()
                embed.setColor(s4d.database.get(String('good_color')));
                embed.setTitle((String(s4d.database.get(String('good_emoji')))) + String(s4d.database.get(String('ever_info_delete_config_message_fr'))))

                await interaction.update({
                    embeds: [(embed)],
                    ephemeral: false,
                    components: []
                });
            }
        }
    })

    s4d.client.on('interactionCreate', async (interaction) => {
        if ((interaction.customId) == 'delete_button_refused_menu') {
            dootabase.setFile("./" + 'Donnés' + ".json");
            if ((interaction.member).permissions.has(Permissions.FLAGS.ADMINISTRATOR) || s4d.database.get(String('dev')) == ((interaction.member.user).id)) {
                var embed = new Discord.MessageEmbed()
                embed.setColor(s4d.database.get(String('wrong_color')));
                embed.setTitle((String(s4d.database.get(String('wrong_emoji')))) + String(s4d.database.get(String('ever_info_stopped_delete_config_message_fr'))))

                await interaction.update({
                    embeds: [(embed)],
                    ephemeral: false,
                    components: []
                });
            }
        }
    })







    s4d.client.on('interactionCreate', async (interaction) => {
        if ((interaction.customId) == 'config_reset') {
            dootabase.setFile("./" + 'Donnés' + ".json");
            if ((interaction.member).permissions.has(Permissions.FLAGS.ADMINISTRATOR) || s4d.database.get(String('dev')) == ((interaction.member.user).id)) {
                var embed = new Discord.MessageEmbed()
                embed.setColor(s4d.database.get(String('embed_color')))
                embed.setDescription((String(s4d.database.get(String('delete_emoji'))) + String(s4d.database.get(String('delete_all_db_message_confirm_fr')))))

                const delete_button_accept_menu = new MessageButton()
                    .setCustomId('delete_button_accept_menu')
                    .setStyle('SECONDARY')
                    .setEmoji('<:Partner_Tick:992734092972003349>')

                const delete_button_refused_menu = new MessageButton()
                    .setCustomId('delete_button_refused_menu')
                    .setStyle('SECONDARY')
                    .setEmoji('<:Partner_Cross:992734085648748604>')

                const delete_button_menu = new MessageActionRow()
                    .addComponents(delete_button_accept_menu)
                    .addComponents(delete_button_refused_menu)

                await interaction.update({
                    embeds: [(embed)],
                    ephemeral: false,
                    components: [delete_button_menu]
                })
            } else {
                var embed = new Discord.MessageEmbed()
                embed.setColor(s4d.Database.get(String('wrong_color')));
                embed.setDescription((String(s4d.database.get(String('wrong_emoji')))) + String(s4d.database.get(String('error_perms_admin_message_fr'))))

                await interaction.reply({
                    embeds: [(embed)],
                    ephemeral: true,
                    components: []
                })
            }

        }
    })

    s4d.client.on('interactionCreate', async (interaction) => {
        let member = interaction.guild.members.cache.get(interaction.member.user.id)
        if ((interaction.commandName) == 'condition_add') {
            dootabase.setFile("./" + 'Donnés' + ".json");
            if (((interaction.member).permissions.has(Permissions.FLAGS.ADMINISTRATOR)) || s4d.database.get(String('dev')) == ((interaction.member.user).id)) {
                if ((((interaction.guild).members.cache.get('992907384592805968') || await (interaction.guild).members.fetch('992907384592805968'))).permissions.has(Permissions.FLAGS.CREATE_INSTANT_INVITE) && (((interaction.guild).members.cache.get('992907384592805968') || await (interaction.guild).members.fetch('992907384592805968'))).permissions.has(Permissions.FLAGS.VIEW_AUDIT_LOG) && (((interaction.guild).members.cache.get('992907384592805968') || await (interaction.guild).members.fetch('992907384592805968'))).permissions.has(Permissions.FLAGS.READ_MESSAGE_HISTORY) && (((interaction.guild).members.cache.get('992907384592805968') || await (interaction.guild).members.fetch('992907384592805968'))).permissions.has(Permissions.FLAGS.VIEW_CHANNEL) && (((interaction.guild).members.cache.get('992907384592805968') || await (interaction.guild).members.fetch('992907384592805968'))).permissions.has(Permissions.FLAGS.MANAGE_MESSAGES) && (((interaction.guild).members.cache.get('992907384592805968') || await (interaction.guild).members.fetch('992907384592805968'))).permissions.has(Permissions.FLAGS.USE_EXTERNAL_EMOJIS) && (((interaction.guild).members.cache.get('992907384592805968') || await (interaction.guild).members.fetch('992907384592805968'))).permissions.has(Permissions.FLAGS.ADD_REACTIONS) && (((interaction.guild).members.cache.get('992907384592805968') || await (interaction.guild).members.fetch('992907384592805968'))).permissions.has(Permissions.FLAGS.MENTION_EVERYONE)) {
                    if ((interaction.options.getInteger('membres_minimums')) >= 1 && (interaction.options.getInteger('membres_minimums')) <= 100000) {
                        if ((interaction.options.getInteger('membres_maximums')) >= 1 && (interaction.options.getInteger('membres_maximums')) <= 100000) {
                            if ((interaction.options.getInteger('membres_maximums')) > (interaction.options.getInteger('membres_minimums'))) {
                                if ((interaction.options.getString('mention')) == 'nomention' || (interaction.options.getString('mention')) == 'mentionever' || (interaction.options.getString('mention')) == 'mentionhere') {
                                    if (!dootabase.has(String((String((interaction.guild).id) + '-ultimate'))) || !(dootabase.get(String((String((interaction.guild).id) + '-ultimate'))) == 'Activé')) {
                                        if (!(dootabase.get(String((String((interaction.guild).id) + '-conditation1'))) == 'using')) {
                                            if ((((interaction.options.getString('mention')) == 'mentionever') && (dootabase.get(String((String((interaction.guild).id) + '-mention_everyone')))) == 'Désactivées') || (((interaction.options.getString('mention')) == 'mentionhere') && (dootabase.get(String((String((interaction.guild).id) + '-mention_everyone')))) == 'Désactivées')) {
                                                var embed = new Discord.MessageEmbed()
                                                embed.setColor(s4d.database.get(String('wrong_color')));
                                                embed.setDescription((String(s4d.database.get(String('wrong_emoji'))) + String(s4d.database.get(String('error_everyone_noactive_message_fr')))));

                                                await interaction.reply({
                                                    embeds: [(embed)],
                                                    ephemeral: true,
                                                    components: []
                                                });
                                            } else {
                                                dootabase.set(String((String((interaction.guild).id) + '-conditation1')), 'using');
                                                dootabase.set(String((String((interaction.guild).id) + '-conditation1_min_member')), (interaction.options.getInteger('membres_minimums')));
                                                dootabase.set(String((String((interaction.guild).id) + '-conditation1_max_member')), (interaction.options.getInteger('membres_maximums')));
                                                if ((interaction.options.getString('mention')) == 'mentionever') {
                                                    dootabase.set(String((String((interaction.guild).id) + '-conditation1_notif_server')), '@everyone');
                                                } else if ((interaction.options.getString('mention')) == 'mentionhere') {
                                                    dootabase.set(String((String((interaction.guild).id) + '-conditation1_notif_server')), '@here');
                                                } else if ((interaction.options.getString('mention')) == 'nomention') {
                                                    dootabase.set(String((String((interaction.guild).id) + '-conditation1_notif_server')), 'Aucune Mention');
                                                }
                                                if ((interaction.options.getString('mention2')) == 'mentionever2') {
                                                    dootabase.set(String((String((interaction.guild).id) + '-conditation1_notif_client')), '@everyone');
                                                } else if ((interaction.options.getString('mention2')) == 'mentionhere2') {
                                                    dootabase.set(String((String((interaction.guild).id) + '-conditation1_notif_client')), '@here');
                                                } else if ((interaction.options.getString('mention2')) == 'mentionnotif2') {
                                                    dootabase.set(String((String((interaction.guild).id) + '-conditation1_notif_client')), 'Notification Partenariat');
                                                } else if ((interaction.options.getString('mention2')) == 'nomention2') {
                                                    dootabase.set(String((String((interaction.guild).id) + '-conditation1_notif_client')), 'Aucune Mention');
                                                }
                                                var embed = new Discord.MessageEmbed()
                                                embed.setColor(s4d.database.get(String('good_color')));
                                                embed.setDescription((String(s4d.database.get(String('good_emoji'))) + String(s4d.database.get(String('good_condition_accepte_message_fr')))));

                                                await interaction.reply({
                                                    embeds: [(embed)],
                                                    ephemeral: true,
                                                    components: []
                                                });
                                            }
                                        } else if (!(dootabase.get(String((String((interaction.guild).id) + '-conditation2'))) == 'using')) {
                                            if ((((interaction.options.getString('mention')) == 'mentionever') && (dootabase.get(String((String((interaction.guild).id) + '-mention_everyone')))) == 'Désactivées') || (((interaction.options.getString('mention')) == 'mentionhere') && (dootabase.get(String((String((interaction.guild).id) + '-mention_everyone')))) == 'Désactivées')) {
                                                var embed = new Discord.MessageEmbed()
                                                embed.setColor(s4d.database.get(String('wrong_color')));
                                                embed.setDescription((String(s4d.database.get(String('wrong_emoji'))) + String(s4d.database.get(String('error_everyone_noactive_message_fr')))));

                                                await interaction.reply({
                                                    embeds: [(embed)],
                                                    ephemeral: true,
                                                    components: []
                                                });
                                            } else {
                                                dootabase.set(String((String((interaction.guild).id) + '-conditation2')), 'using');
                                                dootabase.set(String((String((interaction.guild).id) + '-conditation2_min_member')), (interaction.options.getInteger('membres_minimums')));
                                                dootabase.set(String((String((interaction.guild).id) + '-conditation2_max_member')), (interaction.options.getInteger('membres_maximums')));
                                                if ((interaction.options.getString('mention')) == 'mentionever') {
                                                    dootabase.set(String((String((interaction.guild).id) + '-conditation2_notif_server')), '@everyone');
                                                } else if ((interaction.options.getString('mention')) == 'mentionhere') {
                                                    dootabase.set(String((String((interaction.guild).id) + '-conditation2_notif_server')), '@here');
                                                } else if ((interaction.options.getString('mention')) == 'nomention') {
                                                    dootabase.set(String((String((interaction.guild).id) + '-conditation2_notif_server')), 'Aucune Mention');
                                                }
                                                if ((interaction.options.getString('mention2')) == 'mentionever2') {
                                                    dootabase.set(String((String((interaction.guild).id) + '-conditation2_notif_client')), '@everyone');
                                                } else if ((interaction.options.getString('mention2')) == 'mentionhere2') {
                                                    dootabase.set(String((String((interaction.guild).id) + '-conditation2_notif_client')), '@here');
                                                } else if ((interaction.options.getString('mention2')) == 'mentionnotif2') {
                                                    dootabase.set(String((String((interaction.guild).id) + '-conditation2_notif_client')), 'Notification Partenariat');
                                                } else if ((interaction.options.getString('mention2')) == 'nomention2') {
                                                    dootabase.set(String((String((interaction.guild).id) + '-conditation2_notif_client')), 'Aucune Mention');
                                                }
                                                var embed = new Discord.MessageEmbed()
                                                embed.setColor(s4d.database.get(String('good_color')));
                                                embed.setDescription((String(s4d.database.get(String('good_emoji'))) + String(s4d.database.get(String('good_condition_accepte_message_fr')))));

                                                await interaction.reply({
                                                    embeds: [(embed)],
                                                    ephemeral: true,
                                                    components: []
                                                });
                                            }
                                        } else if (!(dootabase.get(String((String((interaction.guild).id) + '-conditation3'))) == 'using')) {
                                            if ((((interaction.options.getString('mention')) == 'mentionever') && (dootabase.get(String((String((interaction.guild).id) + '-mention_everyone')))) == 'Désactivées') || (((interaction.options.getString('mention')) == 'mentionhere') && (dootabase.get(String((String((interaction.guild).id) + '-mention_everyone')))) == 'Désactivées')) {
                                                var embed = new Discord.MessageEmbed()
                                                embed.setColor(s4d.database.get(String('wrong_color')));
                                                embed.setDescription((String(s4d.database.get(String('wrong_emoji'))) + String(s4d.database.get(String('error_everyone_noactive_message_fr')))));

                                                await interaction.reply({
                                                    embeds: [(embed)],
                                                    ephemeral: true,
                                                    components: []
                                                });
                                            } else {
                                                dootabase.set(String((String((interaction.guild).id) + '-conditation3')), 'using');
                                                dootabase.set(String((String((interaction.guild).id) + '-conditation3_min_member')), (interaction.options.getInteger('membres_minimums')));
                                                dootabase.set(String((String((interaction.guild).id) + '-conditation3_max_member')), (interaction.options.getInteger('membres_maximums')));
                                                if ((interaction.options.getString('mention')) == 'mentionever') {
                                                    dootabase.set(String((String((interaction.guild).id) + '-conditation3_notif_server')), '@everyone');
                                                } else if ((interaction.options.getString('mention')) == 'mentionhere') {
                                                    dootabase.set(String((String((interaction.guild).id) + '-conditation3_notif_server')), '@here');
                                                } else if ((interaction.options.getString('mention')) == 'nomention') {
                                                    dootabase.set(String((String((interaction.guild).id) + '-conditation3_notif_server')), 'Aucune Mention');
                                                }
                                                if ((interaction.options.getString('mention2')) == 'mentionever2') {
                                                    dootabase.set(String((String((interaction.guild).id) + '-conditation3_notif_client')), '@everyone');
                                                } else if ((interaction.options.getString('mention2')) == 'mentionhere2') {
                                                    dootabase.set(String((String((interaction.guild).id) + '-conditation3_notif_client')), '@here');
                                                } else if ((interaction.options.getString('mention2')) == 'mentionnotif2') {
                                                    dootabase.set(String((String((interaction.guild).id) + '-conditation3_notif_client')), 'Notification Partenariat');
                                                } else if ((interaction.options.getString('mention2')) == 'nomention2') {
                                                    dootabase.set(String((String((interaction.guild).id) + '-conditation3_notif_client')), 'Aucune Mention');
                                                }
                                                var embed = new Discord.MessageEmbed()
                                                embed.setColor(s4d.database.get(String('good_color')));
                                                embed.setDescription((String(s4d.database.get(String('good_emoji'))) + String(s4d.database.get(String('good_condition_accepte_message_fr')))));

                                                await interaction.reply({
                                                    embeds: [(embed)],
                                                    ephemeral: true,
                                                    components: []
                                                });
                                            }
                                        } else if (!(dootabase.get(String((String((interaction.guild).id) + '-conditation4'))) == 'using')) {
                                            if ((((interaction.options.getString('mention')) == 'mentionever') && (dootabase.get(String((String((interaction.guild).id) + '-mention_everyone')))) == 'Désactivées') || (((interaction.options.getString('mention')) == 'mentionhere') && (dootabase.get(String((String((interaction.guild).id) + '-mention_everyone')))) == 'Désactivées')) {
                                                var embed = new Discord.MessageEmbed()
                                                embed.setColor(s4d.database.get(String('wrong_color')));
                                                embed.setDescription((String(s4d.database.get(String('wrong_emoji'))) + String(s4d.database.get(String('error_everyone_noactive_message_fr')))));

                                                await interaction.reply({
                                                    embeds: [(embed)],
                                                    ephemeral: true,
                                                    components: []
                                                });
                                            } else {
                                                dootabase.set(String((String((interaction.guild).id) + '-conditation4')), 'using');
                                                dootabase.set(String((String((interaction.guild).id) + '-conditation4_min_member')), (interaction.options.getInteger('membres_minimums')));
                                                dootabase.set(String((String((interaction.guild).id) + '-conditation4_max_member')), (interaction.options.getInteger('membres_maximums')));
                                                if ((interaction.options.getString('mention')) == 'mentionever') {
                                                    dootabase.set(String((String((interaction.guild).id) + '-conditation4_notif_server')), '@everyone');
                                                } else if ((interaction.options.getString('mention')) == 'mentionhere') {
                                                    dootabase.set(String((String((interaction.guild).id) + '-conditation4_notif_server')), '@here');
                                                } else if ((interaction.options.getString('mention')) == 'nomention') {
                                                    dootabase.set(String((String((interaction.guild).id) + '-conditation4_notif_server')), 'Aucune Mention');
                                                }
                                                if ((interaction.options.getString('mention2')) == 'mentionever2') {
                                                    dootabase.set(String((String((interaction.guild).id) + '-conditation4_notif_client')), '@everyone');
                                                } else if ((interaction.options.getString('mention2')) == 'mentionhere2') {
                                                    dootabase.set(String((String((interaction.guild).id) + '-conditation4_notif_client')), '@here');
                                                } else if ((interaction.options.getString('mention2')) == 'mentionnotif2') {
                                                    dootabase.set(String((String((interaction.guild).id) + '-conditation4_notif_client')), 'Notification Partenariat');
                                                } else if ((interaction.options.getString('mention2')) == 'nomention2') {
                                                    dootabase.set(String((String((interaction.guild).id) + '-conditation4_notif_client')), 'Aucune Mention');
                                                }
                                                var embed = new Discord.MessageEmbed()
                                                embed.setColor(s4d.database.get(String('good_color')));
                                                embed.setDescription((String(s4d.database.get(String('good_emoji'))) + String(s4d.database.get(String('good_condition_accepte_message_fr')))));

                                                await interaction.reply({
                                                    embeds: [(embed)],
                                                    ephemeral: true,
                                                    components: []
                                                });
                                            }
                                        } else {
                                            var embed = new Discord.MessageEmbed()
                                            embed.setColor(s4d.database.get(String('wrong_color')));
                                            embed.setDescription((String(s4d.database.get(String('wrong_emoji'))) + String(s4d.database.get(String('limite_condition_ultimate_message_fr')))));

                                            await interaction.reply({
                                                embeds: [(embed)],
                                                ephemeral: true,
                                                components: []
                                            });
                                        }
                                    } else {
                                        if (!(dootabase.get(String((String((interaction.guild).id) + '-conditation1'))) == 'using')) {
                                            if ((((interaction.options.getString('mention')) == 'mentionever') && (dootabase.get(String((String((interaction.guild).id) + '-mention_everyone')))) == 'Désactivées') || (((interaction.options.getString('mention')) == 'mentionhere') && (dootabase.get(String((String((interaction.guild).id) + '-mention_everyone')))) == 'Désactivées')) {
                                                var embed = new Discord.MessageEmbed()
                                                embed.setColor(s4d.database.get(String('wrong_color')));
                                                embed.setDescription((String(s4d.database.get(String('wrong_emoji'))) + String(s4d.database.get(String('error_everyone_noactive_message_fr')))));

                                                await interaction.reply({
                                                    embeds: [(embed)],
                                                    ephemeral: true,
                                                    components: []
                                                });
                                            } else {
                                                dootabase.set(String((String((interaction.guild).id) + '-conditation1')), 'using');
                                                dootabase.set(String((String((interaction.guild).id) + '-conditation1_min_member')), (interaction.options.getInteger('membres_minimums')));
                                                dootabase.set(String((String((interaction.guild).id) + '-conditation1_max_member')), (interaction.options.getInteger('membres_maximums')));
                                                if ((interaction.options.getString('mention')) == 'mentionever') {
                                                    dootabase.set(String((String((interaction.guild).id) + '-conditation1_notif_server')), '@everyone');
                                                } else if ((interaction.options.getString('mention')) == 'mentionhere') {
                                                    dootabase.set(String((String((interaction.guild).id) + '-conditation1_notif_server')), '@here');
                                                } else if ((interaction.options.getString('mention')) == 'nomention') {
                                                    dootabase.set(String((String((interaction.guild).id) + '-conditation1_notif_server')), 'Aucune Mention');
                                                }
                                                if ((interaction.options.getString('mention2')) == 'mentionever2') {
                                                    dootabase.set(String((String((interaction.guild).id) + '-conditation1_notif_client')), '@everyone');
                                                } else if ((interaction.options.getString('mention2')) == 'mentionhere2') {
                                                    dootabase.set(String((String((interaction.guild).id) + '-conditation1_notif_client')), '@here');
                                                } else if ((interaction.options.getString('mention2')) == 'mentionnotif2') {
                                                    dootabase.set(String((String((interaction.guild).id) + '-conditation1_notif_client')), 'Notification Partenariat');
                                                } else if ((interaction.options.getString('mention2')) == 'nomention2') {
                                                    dootabase.set(String((String((interaction.guild).id) + '-conditation1_notif_client')), 'Aucune Mention');
                                                }
                                                var embed = new Discord.MessageEmbed()
                                                embed.setColor(s4d.database.get(String('good_color')));
                                                embed.setDescription((String(s4d.database.get(String('good_emoji'))) + String(s4d.database.get(String('good_condition_accepte_message_fr')))));

                                                await interaction.reply({
                                                    embeds: [(embed)],
                                                    ephemeral: true,
                                                    components: []
                                                });
                                            }
                                        } else if (!(dootabase.get(String((String((interaction.guild).id) + '-conditation2'))) == 'using')) {
                                            if (((interaction.options.getString('mention')) == 'mentionever') && (dootabase.get(String((String((interaction.guild).id) + '-mention_everyone')))) == 'Désactivées') {
                                                var embed = new Discord.MessageEmbed()
                                                embed.setColor(s4d.database.get(String('wrong_color')));
                                                embed.setDescription((String(s4d.database.get(String('wrong_emoji'))) + String(s4d.database.get(String('error_everyone_noactive_message_fr')))));

                                                await interaction.reply({
                                                    embeds: [(embed)],
                                                    ephemeral: true,
                                                    components: []
                                                });
                                            } else {
                                                dootabase.set(String((String((interaction.guild).id) + '-conditation2')), 'using');
                                                dootabase.set(String((String((interaction.guild).id) + '-conditation2_min_member')), (interaction.options.getInteger('membres_minimums')));
                                                dootabase.set(String((String((interaction.guild).id) + '-conditation2_max_member')), (interaction.options.getInteger('membres_maximums')));
                                                if ((interaction.options.getString('mention')) == 'mentionever') {
                                                    dootabase.set(String((String((interaction.guild).id) + '-conditation2_notif_server')), '@everyone');
                                                } else if ((interaction.options.getString('mention')) == 'mentionhere') {
                                                    dootabase.set(String((String((interaction.guild).id) + '-conditation2_notif_server')), '@here');
                                                } else if ((interaction.options.getString('mention')) == 'nomention') {
                                                    dootabase.set(String((String((interaction.guild).id) + '-conditation2_notif_server')), 'Aucune Mention');
                                                }
                                                if ((interaction.options.getString('mention2')) == 'mentionever2') {
                                                    dootabase.set(String((String((interaction.guild).id) + '-conditation2_notif_client')), '@everyone');
                                                } else if ((interaction.options.getString('mention2')) == 'mentionhere2') {
                                                    dootabase.set(String((String((interaction.guild).id) + '-conditation2_notif_client')), '@here');
                                                } else if ((interaction.options.getString('mention2')) == 'mentionnotif2') {
                                                    dootabase.set(String((String((interaction.guild).id) + '-conditation2_notif_client')), 'Notification Partenariat');
                                                } else if ((interaction.options.getString('mention2')) == 'nomention2') {
                                                    dootabase.set(String((String((interaction.guild).id) + '-conditation2_notif_client')), 'Aucune Mention');
                                                }
                                                var embed = new Discord.MessageEmbed()
                                                embed.setColor(s4d.database.get(String('good_color')));
                                                embed.setDescription((String(s4d.database.get(String('good_emoji'))) + String(s4d.database.get(String('good_condition_accepte_message_fr')))));

                                                await interaction.reply({
                                                    embeds: [(embed)],
                                                    ephemeral: true,
                                                    components: []
                                                });
                                            }
                                        } else if (!(dootabase.get(String((String((interaction.guild).id) + '-conditation3'))) == 'using')) {
                                            if (((interaction.options.getString('mention')) == 'mentionever') && (dootabase.get(String((String((interaction.guild).id) + '-mention_everyone')))) == 'Désactivées') {
                                                var embed = new Discord.MessageEmbed()
                                                embed.setColor(s4d.database.get(String('wrong_color')));
                                                embed.setDescription((String(s4d.database.get(String('wrong_emoji'))) + String(s4d.database.get(String('error_everyone_noactive_message_fr')))));

                                                await interaction.reply({
                                                    embeds: [(embed)],
                                                    ephemeral: true,
                                                    components: []
                                                });
                                            } else {
                                                dootabase.set(String((String((interaction.guild).id) + '-conditation3')), 'using');
                                                dootabase.set(String((String((interaction.guild).id) + '-conditation3_min_member')), (interaction.options.getInteger('membres_minimums')));
                                                dootabase.set(String((String((interaction.guild).id) + '-conditation3_max_member')), (interaction.options.getInteger('membres_maximums')));
                                                if ((interaction.options.getString('mention')) == 'mentionever') {
                                                    dootabase.set(String((String((interaction.guild).id) + '-conditation3_notif_server')), '@everyone');
                                                } else if ((interaction.options.getString('mention')) == 'mentionhere') {
                                                    dootabase.set(String((String((interaction.guild).id) + '-conditation3_notif_server')), '@here');
                                                } else if ((interaction.options.getString('mention')) == 'nomention') {
                                                    dootabase.set(String((String((interaction.guild).id) + '-conditation3_notif_server')), 'Aucune Mention');
                                                }
                                                if ((interaction.options.getString('mention2')) == 'mentionever2') {
                                                    dootabase.set(String((String((interaction.guild).id) + '-conditation3_notif_client')), '@everyone');
                                                } else if ((interaction.options.getString('mention2')) == 'mentionhere2') {
                                                    dootabase.set(String((String((interaction.guild).id) + '-conditation3_notif_client')), '@here');
                                                } else if ((interaction.options.getString('mention2')) == 'mentionnotif2') {
                                                    dootabase.set(String((String((interaction.guild).id) + '-conditation3_notif_client')), 'Notification Partenariat');
                                                } else if ((interaction.options.getString('mention2')) == 'nomention2') {
                                                    dootabase.set(String((String((interaction.guild).id) + '-conditation3_notif_client')), 'Aucune Mention');
                                                }
                                                var embed = new Discord.MessageEmbed()
                                                embed.setColor(s4d.database.get(String('good_color')));
                                                embed.setDescription((String(s4d.database.get(String('good_emoji'))) + String(s4d.database.get(String('good_condition_accepte_message_fr')))));

                                                await interaction.reply({
                                                    embeds: [(embed)],
                                                    ephemeral: true,
                                                    components: []
                                                });
                                            }
                                        } else if (!(dootabase.get(String((String((interaction.guild).id) + '-conditation4'))) == 'using')) {
                                            if (((interaction.options.getString('mention')) == 'mentionever') && (dootabase.get(String((String((interaction.guild).id) + '-mention_everyone')))) == 'Désactivées') {
                                                var embed = new Discord.MessageEmbed()
                                                embed.setColor(s4d.database.get(String('wrong_color')));
                                                embed.setDescription((String(s4d.database.get(String('wrong_emoji'))) + String(s4d.database.get(String('error_everyone_noactive_message_fr')))));

                                                await interaction.reply({
                                                    embeds: [(embed)],
                                                    ephemeral: true,
                                                    components: []
                                                });
                                            } else {
                                                dootabase.set(String((String((interaction.guild).id) + '-conditation4')), 'using');
                                                dootabase.set(String((String((interaction.guild).id) + '-conditation4_min_member')), (interaction.options.getInteger('membres_minimums')));
                                                dootabase.set(String((String((interaction.guild).id) + '-conditation4_max_member')), (interaction.options.getInteger('membres_maximums')));
                                                if ((interaction.options.getString('mention')) == 'mentionever') {
                                                    dootabase.set(String((String((interaction.guild).id) + '-conditation4_notif_server')), '@everyone');
                                                } else if ((interaction.options.getString('mention')) == 'mentionhere') {
                                                    dootabase.set(String((String((interaction.guild).id) + '-conditation4_notif_server')), '@here');
                                                } else if ((interaction.options.getString('mention')) == 'nomention') {
                                                    dootabase.set(String((String((interaction.guild).id) + '-conditation4_notif_server')), 'Aucune Mention');
                                                }
                                                if ((interaction.options.getString('mention2')) == 'mentionever2') {
                                                    dootabase.set(String((String((interaction.guild).id) + '-conditation4_notif_client')), '@everyone');
                                                } else if ((interaction.options.getString('mention2')) == 'mentionhere2') {
                                                    dootabase.set(String((String((interaction.guild).id) + '-conditation4_notif_client')), '@here');
                                                } else if ((interaction.options.getString('mention2')) == 'mentionnotif2') {
                                                    dootabase.set(String((String((interaction.guild).id) + '-conditation4_notif_client')), 'Notification Partenariat');
                                                } else if ((interaction.options.getString('mention2')) == 'nomention2') {
                                                    dootabase.set(String((String((interaction.guild).id) + '-conditation4_notif_client')), 'Aucune Mention');
                                                }
                                                var embed = new Discord.MessageEmbed()
                                                embed.setColor(s4d.database.get(String('good_color')));
                                                embed.setDescription((String(s4d.database.get(String('good_emoji'))) + String(s4d.database.get(String('good_condition_accepte_message_fr')))));

                                                await interaction.reply({
                                                    embeds: [(embed)],
                                                    ephemeral: true,
                                                    components: []
                                                });
                                            }
                                        } else if (!(dootabase.get(String((String((interaction.guild).id) + '-conditation5'))) == 'using')) {
                                            if ((((interaction.options.getString('mention')) == 'mentionever') && (dootabase.get(String((String((interaction.guild).id) + '-mention_everyone')))) == 'Désactivées') || (((interaction.options.getString('mention')) == 'mentionhere') && (dootabase.get(String((String((interaction.guild).id) + '-mention_everyone')))) == 'Désactivées')) {
                                                var embed = new Discord.MessageEmbed()
                                                embed.setColor(s4d.database.get(String('wrong_color')));
                                                embed.setDescription((String(s4d.database.get(String('wrong_emoji'))) + String(s4d.database.get(String('error_everyone_noactive_message_fr')))));

                                                await interaction.reply({
                                                    embeds: [(embed)],
                                                    ephemeral: true,
                                                    components: []
                                                });
                                            } else {
                                                dootabase.set(String((String((interaction.guild).id) + '-conditation5')), 'using');
                                                dootabase.set(String((String((interaction.guild).id) + '-conditation5_min_member')), (interaction.options.getInteger('membres_minimums')));
                                                dootabase.set(String((String((interaction.guild).id) + '-conditation5_max_member')), (interaction.options.getInteger('membres_maximums')));
                                                if ((interaction.options.getString('mention')) == 'mentionever') {
                                                    dootabase.set(String((String((interaction.guild).id) + '-conditation5_notif_server')), '@everyone');
                                                } else if ((interaction.options.getString('mention')) == 'mentionhere') {
                                                    dootabase.set(String((String((interaction.guild).id) + '-conditation5_notif_server')), '@here');
                                                } else if ((interaction.options.getString('mention')) == 'nomention') {
                                                    dootabase.set(String((String((interaction.guild).id) + '-conditation5_notif_server')), 'Aucune Mention');
                                                }
                                                if ((interaction.options.getString('mention2')) == 'mentionever2') {
                                                    dootabase.set(String((String((interaction.guild).id) + '-conditation5_notif_client')), '@everyone');
                                                } else if ((interaction.options.getString('mention2')) == 'mentionhere2') {
                                                    dootabase.set(String((String((interaction.guild).id) + '-conditation5_notif_client')), '@here');
                                                } else if ((interaction.options.getString('mention2')) == 'mentionnotif2') {
                                                    dootabase.set(String((String((interaction.guild).id) + '-conditation5_notif_client')), 'Notification Partenariat');
                                                } else if ((interaction.options.getString('mention2')) == 'nomention2') {
                                                    dootabase.set(String((String((interaction.guild).id) + '-conditation5_notif_client')), 'Aucune Mention');
                                                }
                                                var embed = new Discord.MessageEmbed()
                                                embed.setColor(s4d.database.get(String('good_color')));
                                                embed.setDescription((String(s4d.database.get(String('good_emoji'))) + String(s4d.database.get(String('good_condition_accepte_message_fr')))));

                                                await interaction.reply({
                                                    embeds: [(embed)],
                                                    ephemeral: true,
                                                    components: []
                                                });
                                            }
                                        } else if (!(dootabase.get(String((String((interaction.guild).id) + '-conditation6'))) == 'using')) {
                                            if ((((interaction.options.getString('mention')) == 'mentionever') && (dootabase.get(String((String((interaction.guild).id) + '-mention_everyone')))) == 'Désactivées') || (((interaction.options.getString('mention')) == 'mentionhere') && (dootabase.get(String((String((interaction.guild).id) + '-mention_everyone')))) == 'Désactivées')) {
                                                var embed = new Discord.MessageEmbed()
                                                embed.setColor(s4d.database.get(String('wrong_color')));
                                                embed.setDescription((String(s4d.database.get(String('wrong_emoji'))) + String(s4d.database.get(String('error_everyone_noactive_message_fr')))));

                                                await interaction.reply({
                                                    embeds: [(embed)],
                                                    ephemeral: true,
                                                    components: []
                                                });
                                            } else {
                                                dootabase.set(String((String((interaction.guild).id) + '-conditation6')), 'using');
                                                dootabase.set(String((String((interaction.guild).id) + '-conditation6_min_member')), (interaction.options.getInteger('membres_minimums')));
                                                dootabase.set(String((String((interaction.guild).id) + '-conditation6_max_member')), (interaction.options.getInteger('membres_maximums')));
                                                if ((interaction.options.getString('mention')) == 'mentionever') {
                                                    dootabase.set(String((String((interaction.guild).id) + '-conditation6_notif_server')), '@everyone');
                                                } else if ((interaction.options.getString('mention')) == 'mentionhere') {
                                                    dootabase.set(String((String((interaction.guild).id) + '-conditation6_notif_server')), '@here');
                                                } else if ((interaction.options.getString('mention')) == 'nomention') {
                                                    dootabase.set(String((String((interaction.guild).id) + '-conditation6_notif_server')), 'Aucune Mention');
                                                }
                                                if ((interaction.options.getString('mention2')) == 'mentionever2') {
                                                    dootabase.set(String((String((interaction.guild).id) + '-conditation6_notif_client')), '@everyone');
                                                } else if ((interaction.options.getString('mention2')) == 'mentionhere2') {
                                                    dootabase.set(String((String((interaction.guild).id) + '-conditation6_notif_client')), '@here');
                                                } else if ((interaction.options.getString('mention2')) == 'mentionnotif2') {
                                                    dootabase.set(String((String((interaction.guild).id) + '-conditation6_notif_client')), 'Notification Partenariat');
                                                } else if ((interaction.options.getString('mention2')) == 'nomention2') {
                                                    dootabase.set(String((String((interaction.guild).id) + '-conditation6_notif_client')), 'Aucune Mention');
                                                }
                                                var embed = new Discord.MessageEmbed()
                                                embed.setColor(s4d.database.get(String('good_color')));
                                                embed.setDescription((String(s4d.database.get(String('good_emoji'))) + String(s4d.database.get(String('good_condition_accepte_message_fr')))));

                                                await interaction.reply({
                                                    embeds: [(embed)],
                                                    ephemeral: true,
                                                    components: []
                                                });
                                            }
                                        } else if (!(dootabase.get(String((String((interaction.guild).id) + '-conditation7'))) == 'using')) {
                                            if ((((interaction.options.getString('mention')) == 'mentionever') && (dootabase.get(String((String((interaction.guild).id) + '-mention_everyone')))) == 'Désactivées') || (((interaction.options.getString('mention')) == 'mentionhere') && (dootabase.get(String((String((interaction.guild).id) + '-mention_everyone')))) == 'Désactivées')) {
                                                var embed = new Discord.MessageEmbed()
                                                embed.setColor(s4d.database.get(String('wrong_color')));
                                                embed.setDescription((String(s4d.database.get(String('wrong_emoji'))) + String(s4d.database.get(String('error_everyone_noactive_message_fr')))));

                                                await interaction.reply({
                                                    embeds: [(embed)],
                                                    ephemeral: true,
                                                    components: []
                                                });
                                            } else {
                                                dootabase.set(String((String((interaction.guild).id) + '-conditation7')), 'using');
                                                dootabase.set(String((String((interaction.guild).id) + '-conditation7_min_member')), (interaction.options.getInteger('membres_minimums')));
                                                dootabase.set(String((String((interaction.guild).id) + '-conditation7_max_member')), (interaction.options.getInteger('membres_maximums')));
                                                if ((interaction.options.getString('mention')) == 'mentionever') {
                                                    dootabase.set(String((String((interaction.guild).id) + '-conditation7_notif_server')), '@everyone');
                                                } else if ((interaction.options.getString('mention')) == 'mentionhere') {
                                                    dootabase.set(String((String((interaction.guild).id) + '-conditation7_notif_server')), '@here');
                                                } else if ((interaction.options.getString('mention')) == 'nomention') {
                                                    dootabase.set(String((String((interaction.guild).id) + '-conditation7_notif_server')), 'Aucune Mention');
                                                }
                                                if ((interaction.options.getString('mention2')) == 'mentionever2') {
                                                    dootabase.set(String((String((interaction.guild).id) + '-conditation7_notif_client')), '@everyone');
                                                } else if ((interaction.options.getString('mention2')) == 'mentionhere2') {
                                                    dootabase.set(String((String((interaction.guild).id) + '-conditation7_notif_client')), '@here');
                                                } else if ((interaction.options.getString('mention2')) == 'mentionnotif2') {
                                                    dootabase.set(String((String((interaction.guild).id) + '-conditation7_notif_client')), 'Notification Partenariat');
                                                } else if ((interaction.options.getString('mention2')) == 'nomention2') {
                                                    dootabase.set(String((String((interaction.guild).id) + '-conditation7_notif_client')), 'Aucune Mention');
                                                }
                                                var embed = new Discord.MessageEmbed()
                                                embed.setColor(s4d.database.get(String('good_color')));
                                                embed.setDescription((String(s4d.database.get(String('good_emoji'))) + String(s4d.database.get(String('good_condition_accepte_message_fr')))));

                                                await interaction.reply({
                                                    embeds: [(embed)],
                                                    ephemeral: true,
                                                    components: []
                                                });
                                            }
                                        } else if (!(dootabase.get(String((String((interaction.guild).id) + '-conditation8'))) == 'using')) {
                                            if ((((interaction.options.getString('mention')) == 'mentionever') && (dootabase.get(String((String((interaction.guild).id) + '-mention_everyone')))) == 'Désactivées') || (((interaction.options.getString('mention')) == 'mentionhere') && (dootabase.get(String((String((interaction.guild).id) + '-mention_everyone')))) == 'Désactivées')) {
                                                var embed = new Discord.MessageEmbed()
                                                embed.setColor(s4d.database.get(String('wrong_color')));
                                                embed.setDescription((String(s4d.database.get(String('wrong_emoji'))) + String(s4d.database.get(String('error_everyone_noactive_message_fr')))));

                                                await interaction.reply({
                                                    embeds: [(embed)],
                                                    ephemeral: true,
                                                    components: []
                                                });
                                            } else {
                                                dootabase.set(String((String((interaction.guild).id) + '-conditation8')), 'using');
                                                dootabase.set(String((String((interaction.guild).id) + '-conditation8_min_member')), (interaction.options.getInteger('membres_minimums')));
                                                dootabase.set(String((String((interaction.guild).id) + '-conditation8_max_member')), (interaction.options.getInteger('membres_maximums')));
                                                if ((interaction.options.getString('mention')) == 'mentionever') {
                                                    dootabase.set(String((String((interaction.guild).id) + '-conditation8_notif_server')), '@everyone');
                                                } else if ((interaction.options.getString('mention')) == 'mentionhere') {
                                                    dootabase.set(String((String((interaction.guild).id) + '-conditation8_notif_server')), '@here');
                                                } else if ((interaction.options.getString('mention')) == 'nomention') {
                                                    dootabase.set(String((String((interaction.guild).id) + '-conditation8_notif_server')), 'Aucune Mention');
                                                }
                                                if ((interaction.options.getString('mention2')) == 'mentionever2') {
                                                    dootabase.set(String((String((interaction.guild).id) + '-conditation8_notif_client')), '@everyone');
                                                } else if ((interaction.options.getString('mention2')) == 'mentionhere2') {
                                                    dootabase.set(String((String((interaction.guild).id) + '-conditation8_notif_client')), '@here');
                                                } else if ((interaction.options.getString('mention2')) == 'mentionnotif2') {
                                                    dootabase.set(String((String((interaction.guild).id) + '-conditation8_notif_client')), 'Notification Partenariat');
                                                } else if ((interaction.options.getString('mention2')) == 'nomention2') {
                                                    dootabase.set(String((String((interaction.guild).id) + '-conditation8_notif_client')), 'Aucune Mention');
                                                }
                                                var embed = new Discord.MessageEmbed()
                                                embed.setColor(s4d.database.get(String('good_color')));
                                                embed.setDescription((String(s4d.database.get(String('good_emoji'))) + String(s4d.database.get(String('good_condition_accepte_message_fr')))));

                                                await interaction.reply({
                                                    embeds: [(embed)],
                                                    ephemeral: true,
                                                    components: []
                                                });
                                            }
                                        } else if (!(dootabase.get(String((String((interaction.guild).id) + '-conditation9'))) == 'using')) {
                                            if ((((interaction.options.getString('mention')) == 'mentionever') && (dootabase.get(String((String((interaction.guild).id) + '-mention_everyone')))) == 'Désactivées') || (((interaction.options.getString('mention')) == 'mentionhere') && (dootabase.get(String((String((interaction.guild).id) + '-mention_everyone')))) == 'Désactivées')) {
                                                var embed = new Discord.MessageEmbed()
                                                embed.setColor(s4d.database.get(String('wrong_color')));
                                                embed.setDescription((String(s4d.database.get(String('wrong_emoji'))) + String(s4d.database.get(String('error_everyone_noactive_message_fr')))));

                                                await interaction.reply({
                                                    embeds: [(embed)],
                                                    ephemeral: true,
                                                    components: []
                                                });
                                            } else {
                                                dootabase.set(String((String((interaction.guild).id) + '-conditation9')), 'using');
                                                dootabase.set(String((String((interaction.guild).id) + '-conditation9_min_member')), (interaction.options.getInteger('membres_minimums')));
                                                dootabase.set(String((String((interaction.guild).id) + '-conditation9_max_member')), (interaction.options.getInteger('membres_maximums')));
                                                if ((interaction.options.getString('mention')) == 'mentionever') {
                                                    dootabase.set(String((String((interaction.guild).id) + '-conditation9_notif_server')), '@everyone');
                                                } else if ((interaction.options.getString('mention')) == 'mentionhere') {
                                                    dootabase.set(String((String((interaction.guild).id) + '-conditation9_notif_server')), '@here');
                                                } else if ((interaction.options.getString('mention')) == 'nomention') {
                                                    dootabase.set(String((String((interaction.guild).id) + '-conditation9_notif_server')), 'Aucune Mention');
                                                }
                                                if ((interaction.options.getString('mention2')) == 'mentionever2') {
                                                    dootabase.set(String((String((interaction.guild).id) + '-conditation9_notif_client')), '@everyone');
                                                } else if ((interaction.options.getString('mention2')) == 'mentionhere2') {
                                                    dootabase.set(String((String((interaction.guild).id) + '-conditation9_notif_client')), '@here');
                                                } else if ((interaction.options.getString('mention2')) == 'mentionnotif2') {
                                                    dootabase.set(String((String((interaction.guild).id) + '-conditation9_notif_client')), 'Notification Partenariat');
                                                } else if ((interaction.options.getString('mention2')) == 'nomention2') {
                                                    dootabase.set(String((String((interaction.guild).id) + '-conditation9_notif_client')), 'Aucune Mention');
                                                }
                                                var embed = new Discord.MessageEmbed()
                                                embed.setColor(s4d.database.get(String('good_color')));
                                                embed.setDescription((String(s4d.database.get(String('good_emoji'))) + String(s4d.database.get(String('good_condition_accepte_message_fr')))));

                                                await interaction.reply({
                                                    embeds: [(embed)],
                                                    ephemeral: true,
                                                    components: []
                                                });
                                            }
                                        } else if (!(dootabase.get(String((String((interaction.guild).id) + '-conditation10'))) == 'using')) {
                                            if ((((interaction.options.getString('mention')) == 'mentionever') && (dootabase.get(String((String((interaction.guild).id) + '-mention_everyone')))) == 'Désactivées') || (((interaction.options.getString('mention')) == 'mentionhere') && (dootabase.get(String((String((interaction.guild).id) + '-mention_everyone')))) == 'Désactivées')) {
                                                var embed = new Discord.MessageEmbed()
                                                embed.setColor(s4d.database.get(String('wrong_color')));
                                                embed.setDescription((String(s4d.database.get(String('wrong_emoji'))) + String(s4d.database.get(String('error_everyone_noactive_message_fr')))));

                                                await interaction.reply({
                                                    embeds: [(embed)],
                                                    ephemeral: true,
                                                    components: []
                                                });
                                            } else {
                                                dootabase.set(String((String((interaction.guild).id) + '-conditation10')), 'using');
                                                dootabase.set(String((String((interaction.guild).id) + '-conditation10_min_member')), (interaction.options.getInteger('membres_minimums')));
                                                dootabase.set(String((String((interaction.guild).id) + '-conditation10_max_member')), (interaction.options.getInteger('membres_maximums')));
                                                if ((interaction.options.getString('mention')) == 'mentionever') {
                                                    dootabase.set(String((String((interaction.guild).id) + '-conditation10_notif_server')), '@everyone');
                                                } else if ((interaction.options.getString('mention')) == 'mentionhere') {
                                                    dootabase.set(String((String((interaction.guild).id) + '-conditation10_notif_server')), '@here');
                                                } else if ((interaction.options.getString('mention')) == 'nomention') {
                                                    dootabase.set(String((String((interaction.guild).id) + '-conditation10_notif_server')), 'Aucune Mention');
                                                }
                                                if ((interaction.options.getString('mention2')) == 'mentionever2') {
                                                    dootabase.set(String((String((interaction.guild).id) + '-conditation10_notif_client')), '@everyone');
                                                } else if ((interaction.options.getString('mention2')) == 'mentionhere2') {
                                                    dootabase.set(String((String((interaction.guild).id) + '-conditation10_notif_client')), '@here');
                                                } else if ((interaction.options.getString('mention2')) == 'mentionnotif2') {
                                                    dootabase.set(String((String((interaction.guild).id) + '-conditation10_notif_client')), 'Notification Partenariat');
                                                } else if ((interaction.options.getString('mention2')) == 'nomention2') {
                                                    dootabase.set(String((String((interaction.guild).id) + '-conditation10_notif_client')), 'Aucune Mention');
                                                }
                                                var embed = new Discord.MessageEmbed()
                                                embed.setColor(s4d.database.get(String('good_color')));
                                                embed.setDescription((String(s4d.database.get(String('good_emoji'))) + String(s4d.database.get(String('good_condition_accepte_message_fr')))));

                                                await interaction.reply({
                                                    embeds: [(embed)],
                                                    ephemeral: true,
                                                    components: []
                                                });
                                            }
                                        } else {
                                            var embed = new Discord.MessageEmbed()
                                            embed.setColor(s4d.database.get(String('wrong_color')));
                                            embed.setDescription((String(s4d.database.get(String('wrong_emoji'))) + String(s4d.database.get(String('limite_condition_ultimate_activate_message_fr')))));

                                            await interaction.reply({
                                                embeds: [(embed)],
                                                ephemeral: true,
                                                components: []
                                            });
                                        }
                                    }
                                } else if ((interaction.options.getString('mention')) == 'mentionpart') {
                                    if (dootabase.has(String((String((interaction.guild).id) + '-part_notif_rank'))) && !(dootabase.get(String((String((interaction.guild).id) + '-part_notif_rank'))) == 'Aucun rôle de notification n\'a été configuré !')) {
                                        if (!dootabase.has(String((String((interaction.guild).id) + '-ultimate'))) || !(dootabase.get(String((String((interaction.guild).id) + '-ultimate'))) == 'Activé')) {
                                            if (!(dootabase.get(String((String((interaction.guild).id) + '-conditation1'))) == 'using')) {
                                                dootabase.set(String((String((interaction.guild).id) + '-conditation1')), 'using');
                                                dootabase.set(String((String((interaction.guild).id) + '-conditation1_min_member')), (interaction.options.getInteger('membres_minimums')));
                                                dootabase.set(String((String((interaction.guild).id) + '-conditation1_max_member')), (interaction.options.getInteger('membres_maximums')));
                                                if ((interaction.options.getString('mention')) == 'mentionpart') {
                                                    dootabase.set(String((String((interaction.guild).id) + '-conditation1_notif_server')), 'Notification Partenariat');
                                                }
                                                if ((interaction.options.getString('mention2')) == 'mentionever2') {
                                                    dootabase.set(String((String((interaction.guild).id) + '-conditation1_notif_client')), '@everyone');
                                                } else if ((interaction.options.getString('mention2')) == 'mentionhere2') {
                                                    dootabase.set(String((String((interaction.guild).id) + '-conditation1_notif_client')), '@here');
                                                } else if ((interaction.options.getString('mention2')) == 'mentionnotif2') {
                                                    dootabase.set(String((String((interaction.guild).id) + '-conditation1_notif_client')), 'Notification Partenariat');
                                                } else if ((interaction.options.getString('mention2')) == 'nomention2') {
                                                    dootabase.set(String((String((interaction.guild).id) + '-conditation1_notif_client')), 'Aucune Mention');
                                                }
                                                var embed = new Discord.MessageEmbed()
                                                embed.setColor(s4d.database.get(String('good_color')));
                                                embed.setDescription((String(s4d.database.get(String('good_emoji'))) + String(s4d.database.get(String('good_condition_accepte_message_fr')))));

                                                await interaction.reply({
                                                    embeds: [(embed)],
                                                    ephemeral: true,
                                                    components: []
                                                });
                                            } else if (!(dootabase.get(String((String((interaction.guild).id) + '-conditation2'))) == 'using')) {
                                                dootabase.set(String((String((interaction.guild).id) + '-conditation2')), 'using');
                                                dootabase.set(String((String((interaction.guild).id) + '-conditation2_min_member')), (interaction.options.getInteger('membres_minimums')));
                                                dootabase.set(String((String((interaction.guild).id) + '-conditation2_max_member')), (interaction.options.getInteger('membres_maximums')));
                                                if ((interaction.options.getString('mention')) == 'mentionpart') {
                                                    dootabase.set(String((String((interaction.guild).id) + '-conditation2_notif_server')), 'Notification Partenariat');
                                                }
                                                if ((interaction.options.getString('mention2')) == 'mentionever2') {
                                                    dootabase.set(String((String((interaction.guild).id) + '-conditation2_notif_client')), '@everyone');
                                                } else if ((interaction.options.getString('mention2')) == 'mentionhere2') {
                                                    dootabase.set(String((String((interaction.guild).id) + '-conditation2_notif_client')), '@here');
                                                } else if ((interaction.options.getString('mention2')) == 'mentionnotif2') {
                                                    dootabase.set(String((String((interaction.guild).id) + '-conditation2_notif_client')), 'Notification Partenariat');
                                                } else if ((interaction.options.getString('mention2')) == 'nomention2') {
                                                    dootabase.set(String((String((interaction.guild).id) + '-conditation2_notif_client')), 'Aucune Mention');
                                                }
                                                var embed = new Discord.MessageEmbed()
                                                embed.setColor(s4d.database.get(String('good_color')));
                                                embed.setDescription((String(s4d.database.get(String('good_emoji'))) + String(s4d.database.get(String('good_condition_accepte_message_fr')))));

                                                await interaction.reply({
                                                    embeds: [(embed)],
                                                    ephemeral: true,
                                                    components: []
                                                });
                                            } else if (!(dootabase.get(String((String((interaction.guild).id) + '-conditation3'))) == 'using')) {
                                                dootabase.set(String((String((interaction.guild).id) + '-conditation3')), 'using');
                                                dootabase.set(String((String((interaction.guild).id) + '-conditation3_min_member')), (interaction.options.getInteger('membres_minimums')));
                                                dootabase.set(String((String((interaction.guild).id) + '-conditation3_max_member')), (interaction.options.getInteger('membres_maximums')));
                                                if ((interaction.options.getString('mention')) == 'mentionpart') {
                                                    dootabase.set(String((String((interaction.guild).id) + '-conditation3_notif_server')), 'Notification Partenariat');
                                                }
                                                if ((interaction.options.getString('mention2')) == 'mentionever2') {
                                                    dootabase.set(String((String((interaction.guild).id) + '-conditation3_notif_client')), '@everyone');
                                                } else if ((interaction.options.getString('mention2')) == 'mentionhere2') {
                                                    dootabase.set(String((String((interaction.guild).id) + '-conditation3_notif_client')), '@here');
                                                } else if ((interaction.options.getString('mention2')) == 'mentionnotif2') {
                                                    dootabase.set(String((String((interaction.guild).id) + '-conditation3_notif_client')), 'Notification Partenariat');
                                                } else if ((interaction.options.getString('mention2')) == 'nomention2') {
                                                    dootabase.set(String((String((interaction.guild).id) + '-conditation3_notif_client')), 'Aucune Mention');
                                                }
                                                var embed = new Discord.MessageEmbed()
                                                embed.setColor(s4d.database.get(String('good_color')));
                                                embed.setDescription((String(s4d.database.get(String('good_emoji'))) + String(s4d.database.get(String('good_condition_accepte_message_fr')))));

                                                await interaction.reply({
                                                    embeds: [(embed)],
                                                    ephemeral: true,
                                                    components: []
                                                });
                                            } else if (!(dootabase.get(String((String((interaction.guild).id) + '-conditation4'))) == 'using')) {
                                                dootabase.set(String((String((interaction.guild).id) + '-conditation4')), 'using');
                                                dootabase.set(String((String((interaction.guild).id) + '-conditation4_min_member')), (interaction.options.getInteger('membres_minimums')));
                                                dootabase.set(String((String((interaction.guild).id) + '-conditation4_max_member')), (interaction.options.getInteger('membres_maximums')));
                                                if ((interaction.options.getString('mention')) == 'mentionpart') {
                                                    dootabase.set(String((String((interaction.guild).id) + '-conditation4_notif_server')), 'Notification Partenariat');
                                                }
                                                if ((interaction.options.getString('mention2')) == 'mentionever2') {
                                                    dootabase.set(String((String((interaction.guild).id) + '-conditation4_notif_client')), '@everyone');
                                                } else if ((interaction.options.getString('mention2')) == 'mentionhere2') {
                                                    dootabase.set(String((String((interaction.guild).id) + '-conditation4_notif_client')), '@here');
                                                } else if ((interaction.options.getString('mention2')) == 'mentionnotif2') {
                                                    dootabase.set(String((String((interaction.guild).id) + '-conditation4_notif_client')), 'Notification Partenariat');
                                                } else if ((interaction.options.getString('mention2')) == 'nomention2') {
                                                    dootabase.set(String((String((interaction.guild).id) + '-conditation4_notif_client')), 'Aucune Mention');
                                                }
                                                var embed = new Discord.MessageEmbed()
                                                embed.setColor(s4d.database.get(String('good_color')));
                                                embed.setDescription((String(s4d.database.get(String('good_emoji'))) + String(s4d.database.get(String('good_condition_accepte_message_fr')))));

                                                await interaction.reply({
                                                    embeds: [(embed)],
                                                    ephemeral: true,
                                                    components: []
                                                });
                                            } else {
                                                var embed = new Discord.MessageEmbed()
                                                embed.setColor(s4d.database.get(String('wrong_color')));
                                                embed.setDescription((String(s4d.database.get(String('wrong_emoji'))) + String(s4d.database.get(String('limite_condition_ultimate_message_fr')))));

                                                await interaction.reply({
                                                    embeds: [(embed)],
                                                    ephemeral: true,
                                                    components: []
                                                });
                                            }
                                        } else {
                                            if (!(dootabase.get(String((String((interaction.guild).id) + '-conditation1'))) == 'using')) {
                                                dootabase.set(String((String((interaction.guild).id) + '-conditation1')), 'using');
                                                dootabase.set(String((String((interaction.guild).id) + '-conditation1_min_member')), (interaction.options.getInteger('membres_minimums')));
                                                dootabase.set(String((String((interaction.guild).id) + '-conditation1_max_member')), (interaction.options.getInteger('membres_maximums')));
                                                if ((interaction.options.getString('mention')) == 'mentionpart') {
                                                    dootabase.set(String((String((interaction.guild).id) + '-conditation1_notif_server')), 'Notification Partenariat');
                                                }
                                                if ((interaction.options.getString('mention2')) == 'mentionever2') {
                                                    dootabase.set(String((String((interaction.guild).id) + '-conditation1_notif_client')), '@everyone');
                                                } else if ((interaction.options.getString('mention2')) == 'mentionhere2') {
                                                    dootabase.set(String((String((interaction.guild).id) + '-conditation1_notif_client')), '@here');
                                                } else if ((interaction.options.getString('mention2')) == 'mentionnotif2') {
                                                    dootabase.set(String((String((interaction.guild).id) + '-conditation1_notif_client')), 'Notification Partenariat');
                                                } else if ((interaction.options.getString('mention2')) == 'nomention2') {
                                                    dootabase.set(String((String((interaction.guild).id) + '-conditation1_notif_client')), 'Aucune Mention');
                                                }
                                                var embed = new Discord.MessageEmbed()
                                                embed.setColor(s4d.database.get(String('good_color')));
                                                embed.setDescription((String(s4d.database.get(String('good_emoji'))) + String(s4d.database.get(String('good_condition_accepte_message_fr')))));

                                                await interaction.reply({
                                                    embeds: [(embed)],
                                                    ephemeral: true,
                                                    components: []
                                                });
                                            } else if (!(dootabase.get(String((String((interaction.guild).id) + '-conditation2'))) == 'using')) {
                                                dootabase.set(String((String((interaction.guild).id) + '-conditation2')), 'using');
                                                dootabase.set(String((String((interaction.guild).id) + '-conditation2_min_member')), (interaction.options.getInteger('membres_minimums')));
                                                dootabase.set(String((String((interaction.guild).id) + '-conditation2_max_member')), (interaction.options.getInteger('membres_maximums')));
                                                if ((interaction.options.getString('mention')) == 'mentionpart') {
                                                    dootabase.set(String((String((interaction.guild).id) + '-conditation2_notif_server')), 'Notification Partenariat');
                                                }
                                                if ((interaction.options.getString('mention2')) == 'mentionever2') {
                                                    dootabase.set(String((String((interaction.guild).id) + '-conditation2_notif_client')), '@everyone');
                                                } else if ((interaction.options.getString('mention2')) == 'mentionhere2') {
                                                    dootabase.set(String((String((interaction.guild).id) + '-conditation2_notif_client')), '@here');
                                                } else if ((interaction.options.getString('mention2')) == 'mentionnotif2') {
                                                    dootabase.set(String((String((interaction.guild).id) + '-conditation2_notif_client')), 'Notification Partenariat');
                                                } else if ((interaction.options.getString('mention2')) == 'nomention2') {
                                                    dootabase.set(String((String((interaction.guild).id) + '-conditation2_notif_client')), 'Aucune Mention');
                                                }
                                                var embed = new Discord.MessageEmbed()
                                                embed.setColor(s4d.database.get(String('good_color')));
                                                embed.setDescription((String(s4d.database.get(String('good_emoji'))) + String(s4d.database.get(String('good_condition_accepte_message_fr')))));

                                                await interaction.reply({
                                                    embeds: [(embed)],
                                                    ephemeral: true,
                                                    components: []
                                                });
                                            } else if (!(dootabase.get(String((String((interaction.guild).id) + '-conditation3'))) == 'using')) {
                                                dootabase.set(String((String((interaction.guild).id) + '-conditation3')), 'using');
                                                dootabase.set(String((String((interaction.guild).id) + '-conditation3_min_member')), (interaction.options.getInteger('membres_minimums')));
                                                dootabase.set(String((String((interaction.guild).id) + '-conditation3_max_member')), (interaction.options.getInteger('membres_maximums')));
                                                if ((interaction.options.getString('mention')) == 'mentionpart') {
                                                    dootabase.set(String((String((interaction.guild).id) + '-conditation3_notif_server')), 'Notification Partenariat');
                                                }
                                                if ((interaction.options.getString('mention2')) == 'mentionever2') {
                                                    dootabase.set(String((String((interaction.guild).id) + '-conditation3_notif_client')), '@everyone');
                                                } else if ((interaction.options.getString('mention2')) == 'mentionhere2') {
                                                    dootabase.set(String((String((interaction.guild).id) + '-conditation3_notif_client')), '@here');
                                                } else if ((interaction.options.getString('mention2')) == 'mentionnotif2') {
                                                    dootabase.set(String((String((interaction.guild).id) + '-conditation3_notif_client')), 'Notification Partenariat');
                                                } else if ((interaction.options.getString('mention2')) == 'nomention2') {
                                                    dootabase.set(String((String((interaction.guild).id) + '-conditation3_notif_client')), 'Aucune Mention');
                                                }
                                                var embed = new Discord.MessageEmbed()
                                                embed.setColor(s4d.database.get(String('good_color')));
                                                embed.setDescription((String(s4d.database.get(String('good_emoji'))) + String(s4d.database.get(String('good_condition_accepte_message_fr')))));

                                                await interaction.reply({
                                                    embeds: [(embed)],
                                                    ephemeral: true,
                                                    components: []
                                                });
                                            } else if (!(dootabase.get(String((String((interaction.guild).id) + '-conditation4'))) == 'using')) {
                                                dootabase.set(String((String((interaction.guild).id) + '-conditation4')), 'using');
                                                dootabase.set(String((String((interaction.guild).id) + '-conditation4_min_member')), (interaction.options.getInteger('membres_minimums')));
                                                dootabase.set(String((String((interaction.guild).id) + '-conditation4_max_member')), (interaction.options.getInteger('membres_maximums')));
                                                if ((interaction.options.getString('mention')) == 'mentionpart') {
                                                    dootabase.set(String((String((interaction.guild).id) + '-conditation4_notif_server')), 'Notification Partenariat');
                                                }
                                                if ((interaction.options.getString('mention2')) == 'mentionever2') {
                                                    dootabase.set(String((String((interaction.guild).id) + '-conditation4_notif_client')), '@everyone');
                                                } else if ((interaction.options.getString('mention2')) == 'mentionhere2') {
                                                    dootabase.set(String((String((interaction.guild).id) + '-conditation4_notif_client')), '@here');
                                                } else if ((interaction.options.getString('mention2')) == 'mentionnotif2') {
                                                    dootabase.set(String((String((interaction.guild).id) + '-conditation4_notif_client')), 'Notification Partenariat');
                                                } else if ((interaction.options.getString('mention2')) == 'nomention2') {
                                                    dootabase.set(String((String((interaction.guild).id) + '-conditation4_notif_client')), 'Aucune Mention');
                                                }
                                                var embed = new Discord.MessageEmbed()
                                                embed.setColor(s4d.database.get(String('good_color')));
                                                embed.setDescription((String(s4d.database.get(String('good_emoji'))) + String(s4d.database.get(String('good_condition_accepte_message_fr')))));

                                                await interaction.reply({
                                                    embeds: [(embed)],
                                                    ephemeral: true,
                                                    components: []
                                                });
                                            } else if (!(dootabase.get(String((String((interaction.guild).id) + '-conditation5'))) == 'using')) {
                                                dootabase.set(String((String((interaction.guild).id) + '-conditation5')), 'using');
                                                dootabase.set(String((String((interaction.guild).id) + '-conditation5_min_member')), (interaction.options.getInteger('membres_minimums')));
                                                dootabase.set(String((String((interaction.guild).id) + '-conditation5_max_member')), (interaction.options.getInteger('membres_maximums')));
                                                if ((interaction.options.getString('mention')) == 'mentionpart') {
                                                    dootabase.set(String((String((interaction.guild).id) + '-conditation5_notif_server')), 'Notification Partenariat');
                                                }
                                                if ((interaction.options.getString('mention2')) == 'mentionever2') {
                                                    dootabase.set(String((String((interaction.guild).id) + '-conditation5_notif_client')), '@everyone');
                                                } else if ((interaction.options.getString('mention2')) == 'mentionhere2') {
                                                    dootabase.set(String((String((interaction.guild).id) + '-conditation5_notif_client')), '@here');
                                                } else if ((interaction.options.getString('mention2')) == 'mentionnotif2') {
                                                    dootabase.set(String((String((interaction.guild).id) + '-conditation5_notif_client')), 'Notification Partenariat');
                                                } else if ((interaction.options.getString('mention2')) == 'nomention2') {
                                                    dootabase.set(String((String((interaction.guild).id) + '-conditation5_notif_client')), 'Aucune Mention');
                                                }
                                                var embed = new Discord.MessageEmbed()
                                                embed.setColor(s4d.database.get(String('good_color')));
                                                embed.setDescription((String(s4d.database.get(String('good_emoji'))) + String(s4d.database.get(String('good_condition_accepte_message_fr')))));

                                                await interaction.reply({
                                                    embeds: [(embed)],
                                                    ephemeral: true,
                                                    components: []
                                                });
                                            } else if (!(dootabase.get(String((String((interaction.guild).id) + '-conditation6'))) == 'using')) {
                                                dootabase.set(String((String((interaction.guild).id) + '-conditation6')), 'using');
                                                dootabase.set(String((String((interaction.guild).id) + '-conditation6_min_member')), (interaction.options.getInteger('membres_minimums')));
                                                dootabase.set(String((String((interaction.guild).id) + '-conditation6_max_member')), (interaction.options.getInteger('membres_maximums')));
                                                if ((interaction.options.getString('mention')) == 'mentionpart') {
                                                    dootabase.set(String((String((interaction.guild).id) + '-conditation6_notif_server')), 'Notification Partenariat');
                                                }
                                                if ((interaction.options.getString('mention2')) == 'mentionever2') {
                                                    dootabase.set(String((String((interaction.guild).id) + '-conditation6_notif_client')), '@everyone');
                                                } else if ((interaction.options.getString('mention2')) == 'mentionhere2') {
                                                    dootabase.set(String((String((interaction.guild).id) + '-conditation6_notif_client')), '@here');
                                                } else if ((interaction.options.getString('mention2')) == 'mentionnotif2') {
                                                    dootabase.set(String((String((interaction.guild).id) + '-conditation6_notif_client')), 'Notification Partenariat');
                                                } else if ((interaction.options.getString('mention2')) == 'nomention2') {
                                                    dootabase.set(String((String((interaction.guild).id) + '-conditation6_notif_client')), 'Aucune Mention');
                                                }
                                                var embed = new Discord.MessageEmbed()
                                                embed.setColor(s4d.database.get(String('good_color')));
                                                embed.setDescription((String(s4d.database.get(String('good_emoji'))) + String(s4d.database.get(String('good_condition_accepte_message_fr')))));

                                                await interaction.reply({
                                                    embeds: [(embed)],
                                                    ephemeral: true,
                                                    components: []
                                                });
                                            } else if (!(dootabase.get(String((String((interaction.guild).id) + '-conditation7'))) == 'using')) {
                                                dootabase.set(String((String((interaction.guild).id) + '-conditation7')), 'using');
                                                dootabase.set(String((String((interaction.guild).id) + '-conditation7_min_member')), (interaction.options.getInteger('membres_minimums')));
                                                dootabase.set(String((String((interaction.guild).id) + '-conditation7_max_member')), (interaction.options.getInteger('membres_maximums')));
                                                if ((interaction.options.getString('mention')) == 'mentionpart') {
                                                    dootabase.set(String((String((interaction.guild).id) + '-conditation7_notif_server')), 'Notification Partenariat');
                                                }
                                                if ((interaction.options.getString('mention2')) == 'mentionever2') {
                                                    dootabase.set(String((String((interaction.guild).id) + '-conditation7_notif_client')), '@everyone');
                                                } else if ((interaction.options.getString('mention2')) == 'mentionhere2') {
                                                    dootabase.set(String((String((interaction.guild).id) + '-conditation7_notif_client')), '@here');
                                                } else if ((interaction.options.getString('mention2')) == 'mentionnotif2') {
                                                    dootabase.set(String((String((interaction.guild).id) + '-conditation7_notif_client')), 'Notification Partenariat');
                                                } else if ((interaction.options.getString('mention2')) == 'nomention2') {
                                                    dootabase.set(String((String((interaction.guild).id) + '-conditation7_notif_client')), 'Aucune Mention');
                                                }
                                                var embed = new Discord.MessageEmbed()
                                                embed.setColor(s4d.database.get(String('good_color')));
                                                embed.setDescription((String(s4d.database.get(String('good_emoji'))) + String(s4d.database.get(String('good_condition_accepte_message_fr')))));

                                                await interaction.reply({
                                                    embeds: [(embed)],
                                                    ephemeral: true,
                                                    components: []
                                                });
                                            } else if (!(dootabase.get(String((String((interaction.guild).id) + '-conditation8'))) == 'using')) {
                                                dootabase.set(String((String((interaction.guild).id) + '-conditation8')), 'using');
                                                dootabase.set(String((String((interaction.guild).id) + '-conditation8_min_member')), (interaction.options.getInteger('membres_minimums')));
                                                dootabase.set(String((String((interaction.guild).id) + '-conditation8_max_member')), (interaction.options.getInteger('membres_maximums')));
                                                if ((interaction.options.getString('mention')) == 'mentionpart') {
                                                    dootabase.set(String((String((interaction.guild).id) + '-conditation8_notif_server')), 'Notification Partenariat');
                                                }
                                                if ((interaction.options.getString('mention2')) == 'mentionever2') {
                                                    dootabase.set(String((String((interaction.guild).id) + '-conditation8_notif_client')), '@everyone');
                                                } else if ((interaction.options.getString('mention2')) == 'mentionhere2') {
                                                    dootabase.set(String((String((interaction.guild).id) + '-conditation8_notif_client')), '@here');
                                                } else if ((interaction.options.getString('mention2')) == 'mentionnotif2') {
                                                    dootabase.set(String((String((interaction.guild).id) + '-conditation8_notif_client')), 'Notification Partenariat');
                                                } else if ((interaction.options.getString('mention2')) == 'nomention2') {
                                                    dootabase.set(String((String((interaction.guild).id) + '-conditation8_notif_client')), 'Aucune Mention');
                                                }
                                                var embed = new Discord.MessageEmbed()
                                                embed.setColor(s4d.database.get(String('good_color')));
                                                embed.setDescription((String(s4d.database.get(String('good_emoji'))) + String(s4d.database.get(String('good_condition_accepte_message_fr')))));

                                                await interaction.reply({
                                                    embeds: [(embed)],
                                                    ephemeral: true,
                                                    components: []
                                                });
                                            } else if (!(dootabase.get(String((String((interaction.guild).id) + '-conditation9'))) == 'using')) {
                                                dootabase.set(String((String((interaction.guild).id) + '-conditation9')), 'using');
                                                dootabase.set(String((String((interaction.guild).id) + '-conditation9_min_member')), (interaction.options.getInteger('membres_minimums')));
                                                dootabase.set(String((String((interaction.guild).id) + '-conditation9_max_member')), (interaction.options.getInteger('membres_maximums')));
                                                if ((interaction.options.getString('mention')) == 'mentionpart') {
                                                    dootabase.set(String((String((interaction.guild).id) + '-conditation9_notif_server')), 'Notification Partenariat');
                                                }
                                                if ((interaction.options.getString('mention2')) == 'mentionever2') {
                                                    dootabase.set(String((String((interaction.guild).id) + '-conditation9_notif_client')), '@everyone');
                                                } else if ((interaction.options.getString('mention2')) == 'mentionhere2') {
                                                    dootabase.set(String((String((interaction.guild).id) + '-conditation9_notif_client')), '@here');
                                                } else if ((interaction.options.getString('mention2')) == 'mentionnotif2') {
                                                    dootabase.set(String((String((interaction.guild).id) + '-conditation9_notif_client')), 'Notification Partenariat');
                                                } else if ((interaction.options.getString('mention2')) == 'nomention2') {
                                                    dootabase.set(String((String((interaction.guild).id) + '-conditation9_notif_client')), 'Aucune Mention');
                                                }
                                                var embed = new Discord.MessageEmbed()
                                                embed.setColor(s4d.database.get(String('good_color')));
                                                embed.setDescription((String(s4d.database.get(String('good_emoji'))) + String(s4d.database.get(String('good_condition_accepte_message_fr')))));

                                                await interaction.reply({
                                                    embeds: [(embed)],
                                                    ephemeral: true,
                                                    components: []
                                                });
                                            } else if (!(dootabase.get(String((String((interaction.guild).id) + '-conditation10'))) == 'using')) {
                                                dootabase.set(String((String((interaction.guild).id) + '-conditation10')), 'using');
                                                dootabase.set(String((String((interaction.guild).id) + '-conditation10_min_member')), (interaction.options.getInteger('membres_minimums')));
                                                dootabase.set(String((String((interaction.guild).id) + '-conditation10_max_member')), (interaction.options.getInteger('membres_maximums')));
                                                if ((interaction.options.getString('mention')) == 'mentionpart') {
                                                    dootabase.set(String((String((interaction.guild).id) + '-conditation10_notif_server')), 'Notification Partenariat');
                                                }
                                                if ((interaction.options.getString('mention2')) == 'mentionever2') {
                                                    dootabase.set(String((String((interaction.guild).id) + '-conditation10_notif_client')), '@everyone');
                                                } else if ((interaction.options.getString('mention2')) == 'mentionhere2') {
                                                    dootabase.set(String((String((interaction.guild).id) + '-conditation10_notif_client')), '@here');
                                                } else if ((interaction.options.getString('mention2')) == 'mentionnotif2') {
                                                    dootabase.set(String((String((interaction.guild).id) + '-conditation10_notif_client')), 'Notification Partenariat');
                                                } else if ((interaction.options.getString('mention2')) == 'nomention2') {
                                                    dootabase.set(String((String((interaction.guild).id) + '-conditation10_notif_client')), 'Aucune Mention');
                                                }
                                                var embed = new Discord.MessageEmbed()
                                                embed.setColor(s4d.database.get(String('good_color')));
                                                embed.setDescription((String(s4d.database.get(String('good_emoji'))) + String(s4d.database.get(String('good_condition_accepte_message_fr')))));

                                                await interaction.reply({
                                                    embeds: [(embed)],
                                                    ephemeral: true,
                                                    components: []
                                                });
                                            } else {
                                                var embed = new Discord.MessageEmbed()
                                                embed.setColor(s4d.database.get(String('wrong_color')));
                                                embed.setDescription((String(s4d.database.get(String('wrong_emoji'))) + String(s4d.database.get(String('limite_condition_ultimate_activate_message_fr')))));

                                                await interaction.reply({
                                                    embeds: [(embed)],
                                                    ephemeral: true,
                                                    components: []
                                                });
                                            }
                                        }
                                    } else {
                                        var embed = new Discord.MessageEmbed()
                                        embed.setColor(s4d.database.get(String('wrong_color')));
                                        embed.setDescription((String(s4d.database.get(String('wrong_emoji'))) + String(s4d.database.get(String('error_notifpart_noconfig_message_fr')))));

                                        await interaction.reply({
                                            embeds: [(embed)],
                                            ephemeral: true,
                                            components: []
                                        });
                                    }
                                }
                            } else {
                                var embed = new Discord.MessageEmbed()
                                embed.setColor(s4d.database.get(String('wrong_color')));
                                embed.setDescription((String(s4d.database.get(String('wrong_emoji'))) + String(s4d.database.get(String('error_message_minim_big_member_outnumber_fr')))));

                                await interaction.reply({
                                    embeds: [(embed)],
                                    ephemeral: true,
                                    components: []
                                });
                            }
                        } else {
                            var embed = new Discord.MessageEmbed()
                            embed.setColor(s4d.database.get(String('wrong_color')));
                            embed.setDescription((String(s4d.database.get(String('wrong_emoji'))) + String(s4d.database.get(String('error_message_max_member_outnumber_fr')))));

                            await interaction.reply({
                                embeds: [(embed)],
                                ephemeral: true,
                                components: []
                            });
                        }
                    } else {
                        var embed = new Discord.MessageEmbed()
                        embed.setColor(s4d.database.get(String('wrong_color')));
                        embed.setDescription((String(s4d.database.get(String('wrong_emoji'))) + String(s4d.database.get(String('error_message_minim_member_outnumber_fr')))));

                        await interaction.reply({
                            embeds: [(embed)],
                            ephemeral: true,
                            components: []
                        });
                    }
                } else {
                    var embed = new Discord.MessageEmbed()
                    embed.setColor(s4d.database.get(String('wrong_color')));
                    embed.setDescription((String(s4d.database.get(String('wrong_emoji'))) + String(s4d.database.get(String('wrong_bot_pers_message_fr')))));

                    await interaction.reply({
                        embeds: [(embed)],
                        ephemeral: true,
                        components: []
                    });
                }
            } else {
                var embed = new Discord.MessageEmbed()
                embed.setColor(s4d.database.get(String('wrong_color')));
                embed.setDescription((String(s4d.database.get(String('wrong_emoji'))) + String(s4d.database.get(String('wrong_owner_message_fr')))));

                await interaction.reply({
                    embeds: [(embed)],
                    ephemeral: true,
                    components: []
                });
            }

        }

    });

    s4d.client.on('messageCreate', async (s4dmessage) => {
        if ((s4dmessage.content) == '#shutdown') {
            if (s4d.database.get(String('dev')) == ((s4dmessage.author).id)) {
                s4dmessage.channel.send({
                    embeds: [new MessageEmbed()
                        .setColor(String(s4d.database.get(String('embed_color'))))
                        .setDescription(String((String(s4d.database.get(String('loading_emoji'))) + ' **| Le bot sera éteint dans 5 secondes !**')))
                        .setFooter(String((String(s4d.database.get(String('tag_author_footer_fr'))) + String((s4dmessage.author).tag))))
                    ]
                }).then(async (s4dreply) => {
                    await delay(Number(5) * 1000);
                    s4dmessage.delete();
                    s4d.client.destroy();

                });
            } else {
                s4dmessage.reply({
                    embeds: [new MessageEmbed()
                        .setColor(String(s4d.database.get(String('wrong_color'))))
                        .setDescription(String((String(s4d.database.get(String('wrong_emoji'))) + String(s4d.database.get(String('error_access_dev_message_fr'))))))
                        .setFooter(String((String(s4d.database.get(String('tag_author_footer_fr'))) + String((s4dmessage.author).tag))))
                    ],
                    allowedMentions: {
                        repliedUser: true
                    }
                }).then(async (s4dfrost_real_reply) => {
                    await delay(Number(5) * 1000);
                    s4dfrost_real_reply.delete();
                    s4dmessage.delete();

                });
            }
        }

    });

    s4d.client.on('interactionCreate', async (interaction) => {
        let member = interaction.guild.members.cache.get(interaction.member.user.id)
        if ((interaction.commandName) == 'partenariat') {
            dootabase.setFile("./" + 'Donnés' + ".json");
            if (!((interaction.member.user).bot)) {
                dootabase.set(String((String(interaction.options.getString('id_serveur')) + '-id_server')), (interaction.options.getString('id_serveur')));
                dootabase.set(String((String((interaction.guild).id) + '-id_server')), (interaction.options.getString('id_serveur')));
                if (dootabase.get(String(([dootabase.get(String((String(interaction.options.getString('id_serveur')) + '-id_server'))), '-', (interaction.member.user).id, '-partner_list'].join('')))) == 'partner') {
                    if (!(((interaction.guild).id) == (interaction.options.getString('id_serveur')))) {
                        if (((((interaction.guild).members.cache.get('992907384592805968') || await (interaction.guild).members.fetch('992907384592805968'))).permissions.has(Permissions.FLAGS.ADD_REACTIONS) && (((interaction.guild).members.cache.get('992907384592805968') || await (interaction.guild).members.fetch('992907384592805968'))).permissions.has(Permissions.FLAGS.CREATE_INSTANT_INVITE) && (((interaction.guild).members.cache.get('992907384592805968') || await (interaction.guild).members.fetch('992907384592805968'))).permissions.has(Permissions.FLAGS.EMBED_LINKS) && (((interaction.guild).members.cache.get('992907384592805968') || await (interaction.guild).members.fetch('992907384592805968'))).permissions.has(Permissions.FLAGS.MANAGE_MESSAGES) && (((interaction.guild).members.cache.get('992907384592805968') || await (interaction.guild).members.fetch('992907384592805968'))).permissions.has(Permissions.FLAGS.MENTION_EVERYONE) && (((interaction.guild).members.cache.get('992907384592805968') || await (interaction.guild).members.fetch('992907384592805968'))).permissions.has(Permissions.FLAGS.READ_MESSAGE_HISTORY) && (((interaction.guild).members.cache.get('992907384592805968') || await (interaction.guild).members.fetch('992907384592805968'))).permissions.has(Permissions.FLAGS.SEND_MESSAGES) && (((interaction.guild).members.cache.get('992907384592805968') || await (interaction.guild).members.fetch('992907384592805968'))).permissions.has(Permissions.FLAGS.VIEW_AUDIT_LOG) && (((interaction.guild).members.cache.get('992907384592805968') || await (interaction.guild).members.fetch('992907384592805968'))).permissions.has(Permissions.FLAGS.VIEW_CHANNEL)) && ((((s4d.client.guilds.cache.get((interaction.options.getString('id_serveur')))).members.cache.get('992907384592805968') || await (s4d.client.guilds.cache.get((interaction.options.getString('id_serveur')))).members.fetch('992907384592805968'))).permissions.has(Permissions.FLAGS.ADD_REACTIONS) && (((s4d.client.guilds.cache.get((interaction.options.getString('id_serveur')))).members.cache.get('992907384592805968') || await (s4d.client.guilds.cache.get((interaction.options.getString('id_serveur')))).members.fetch('992907384592805968'))).permissions.has(Permissions.FLAGS.CREATE_INSTANT_INVITE)
                            && (((s4d.client.guilds.cache.get((interaction.options.getString('id_serveur')))).members.cache.get('992907384592805968') || await (s4d.client.guilds.cache.get((interaction.options.getString('id_serveur')))).members.fetch('992907384592805968'))).permissions.has(Permissions.FLAGS.EMBED_LINKS) && (((s4d.client.guilds.cache.get((interaction.options.getString('id_serveur')))).members.cache.get('992907384592805968') || await (s4d.client.guilds.cache.get((interaction.options.getString('id_serveur')))).members.fetch('992907384592805968'))).permissions.has(Permissions.FLAGS.MANAGE_MESSAGES) && (((s4d.client.guilds.cache.get((interaction.options.getString('id_serveur')))).members.cache.get('992907384592805968') || await (s4d.client.guilds.cache.get((interaction.options.getString('id_serveur')))).members.fetch('992907384592805968'))).permissions.has(Permissions.FLAGS.MENTION_EVERYONE) && (((s4d.client.guilds.cache.get((interaction.options.getString('id_serveur')))).members.cache.get('992907384592805968') || await (s4d.client.guilds.cache.get((interaction.options.getString('id_serveur')))).members.fetch('992907384592805968'))).permissions.has(Permissions.FLAGS.READ_MESSAGE_HISTORY) && (((s4d.client.guilds.cache.get((interaction.options.getString('id_serveur')))).members.cache.get('992907384592805968') || await (s4d.client.guilds.cache.get((interaction.options.getString('id_serveur')))).members.fetch('992907384592805968'))).permissions.has(Permissions.FLAGS.SEND_MESSAGES) && (((s4d.client.guilds.cache.get((interaction.options.getString('id_serveur')))).members.cache.get('992907384592805968') || await (s4d.client.guilds.cache.get((interaction.options.getString('id_serveur')))).members.fetch('992907384592805968'))).permissions.has(Permissions.FLAGS.VIEW_AUDIT_LOG) && (((s4d.client.guilds.cache.get((interaction.options.getString('id_serveur')))).members.cache.get('992907384592805968') || await (s4d.client.guilds.cache.get((interaction.options.getString('id_serveur')))).members.fetch('992907384592805968'))).permissions.has(Permissions.FLAGS.VIEW_CHANNEL))) {
                            if (dootabase.get(String(((interaction.guild).id))) == 'verif_serv') {
                                if (dootabase.get(String((interaction.options.getString('id_serveur')))) == 'verif_serv') {
                                    if (!(dootabase.get(String((interaction.options.getString('id_serveur')))) == 'blacklist_serv')) {
                                        if (!(dootabase.get(String(((interaction.guild).id))) == 'blacklist_serv')) {
                                            if (!(dootabase.get(String(((interaction.member.user).id))) == 'raid')) {
                                                if (!(dootabase.get(String(((interaction.guild).ownerId))) == 'raid')) {
                                                    if (!(dootabase.get(String(((s4d.client.guilds.cache.get(dootabase.get(String((String(interaction.options.getString('id_serveur')) + '-id_server'))))).ownerId))) == 'raid')) {
                                                        if (dootabase.get(String((String((interaction.guild).id) + '-owner-id_server'))) == ((interaction.guild).ownerId)) {
                                                            if (dootabase.get(String((String(interaction.options.getString('id_serveur')) + '-owner-id_server'))) == ((s4d.client.guilds.cache.get(dootabase.get(String((String(interaction.options.getString('id_serveur')) + '-id_server'))))).ownerId)) {
                                                                if (dootabase.get(String((String((interaction.guild).id) + '-name_server'))) == ((interaction.guild).name)) {
                                                                    if (dootabase.get(String((String(interaction.options.getString('id_serveur')) + '-desc_server'))) == 'Le serveur ne possède aucune description !' || dootabase.get(String((String(interaction.options.getString('id_serveur')) + '-desc_server'))) == ((s4d.client.guilds.cache.get(dootabase.get(String((String(interaction.options.getString('id_serveur')) + '-id_server'))))).description)) {
                                                                        if (dootabase.get(String((String((interaction.guild).id) + '-desc_server'))) == 'Le serveur ne possède aucune description !' || dootabase.get(String((String((interaction.guild).id) + '-desc_server'))) == ((interaction.guild).description)) {
                                                                            if (!dootabase.has(String(([(interaction.guild).id, '-', interaction.options.getString('id_serveur'), '-cooldown_part'].join('')))) || dootabase.get(String(([(interaction.guild).id, '-', interaction.options.getString('id_serveur'), '-cooldown_part'].join('')))) <= (Math.floor(new Date().getTime() / 1000))) {
                                                                                if (!(dootabase.get(String((String((interaction.guild).id) + '-ultimate'))) == 'Activé')) {
                                                                                    if (!dootabase.has(String((String((interaction.guild).id) + '-number_part'))) || !(dootabase.get(String((String((interaction.guild).id) + '-number_part'))) >= 20)) {
                                                                                        dootabase.add(String('part_total_stats'), parseInt(1));
                                                                                        if (((s4d.client.guilds.cache.get(dootabase.get(String((String(interaction.options.getString('id_serveur')) + '-id_server'))))).memberCount) >= dootabase.get(String((String((interaction.guild).id) + '-conditation1_min_member'))) && ((s4d.client.guilds.cache.get(dootabase.get(String((String(interaction.options.getString('id_serveur')) + '-id_server'))))).memberCount) <= dootabase.get(String((String((interaction.guild).id) + '-conditation1_max_member')))) {
                                                                                            if ((dootabase.get(String((String((interaction.guild).id) + '-conditation1_notif_client'))) == 'Notification Partenariat' || dootabase.get(String((String((interaction.guild).id) + '-conditation1_notif_server'))) == 'Notification Partenariat') && (dootabase.get(String((String((interaction.guild).id) + '-part_notif_rank'))) == 'Aucun rôle de notification n\'a été configuré !' || dootabase.get(String((String(dootabase.get(String((String((interaction.guild).id) + '-id_server')))) + '-part_notif_rank'))) == 'Aucun rôle de notification n\'a été configuré !')) {
                                                                                                var embed = new Discord.MessageEmbed()
                                                                                                embed.setColor(s4d.database.get(String('wrong_color')));
                                                                                                embed.setDescription((String(s4d.database.get(String('wrong_emoji'))) + String(s4d.database.get(String('notif_part_error_message_fr')))));

                                                                                                await interaction.reply({
                                                                                                    embeds: [(embed)],
                                                                                                    ephemeral: false,
                                                                                                    components: []
                                                                                                });
                                                                                            } else {
                                                                                                var embed = new Discord.MessageEmbed()
                                                                                                embed.setTitle((String(s4d.database.get(String('partner_emoji'))) + String(s4d.database.get(String('condition_partenariat_title_fr')))))
                                                                                                    .setURL();
                                                                                                embed.setColor(s4d.database.get(String('embed_color')));
                                                                                                embed.setDescription(([`__**Condition trouvée (N°1)**__
                                                        > Serveur Discord entre *\``, dootabase.get(String((String((interaction.guild).id) + '-conditation1_min_member'))), '`* et *`', dootabase.get(String((String((interaction.guild).id) + '-conditation1_max_member'))), `\`* membres:
                                                        > *\`De votre côté = `, dootabase.get(String((String((interaction.guild).id) + '-conditation1_notif_client'))), `\`*
                                                        > *\`De notre côté = `, dootabase.get(String((String((interaction.guild).id) + '-conditation1_notif_server'))), '`*'].join('')));
                                                                                                embed.setFooter((String(s4d.database.get(String('tag_author_footer_fr'))) + String((interaction.member.user).tag)), ((interaction.member.user).displayAvatarURL({
                                                                                                    format: "png"
                                                                                                })));
                                                                                                embed.setTimestamp();

                                                                                                const accept_condition1 = new MessageButton()
                                                                                                    .setCustomId('accept_condition1')
                                                                                                    .setLabel('Accepter')
                                                                                                    .setStyle(('SUCCESS'))
                                                                                                    .setEmoji(s4d.database.get(String('good_emoji')))

                                                                                                const refused_condition = new MessageButton()
                                                                                                    .setCustomId('refused_condition')
                                                                                                    .setLabel('Refuser')
                                                                                                    .setStyle(('DANGER'))
                                                                                                    .setEmoji(s4d.database.get(String('wrong_emoji')))

                                                                                                const condition_menu_boutton = new MessageActionRow()
                                                                                                    .addComponents(accept_condition1)
                                                                                                    .addComponents(refused_condition)

                                                                                                await interaction.reply({
                                                                                                    embeds: [(embed)],
                                                                                                    ephemeral: false,
                                                                                                    components: [condition_menu_boutton]
                                                                                                });
                                                                                            }
                                                                                        } else if (((s4d.client.guilds.cache.get(dootabase.get(String((String(interaction.options.getString('id_serveur')) + '-id_server'))))).memberCount) >= dootabase.get(String((String((interaction.guild).id) + '-conditation2_min_member'))) && ((s4d.client.guilds.cache.get(dootabase.get(String((String(interaction.options.getString('id_serveur')) + '-id_server'))))).memberCount) <= dootabase.get(String((String((interaction.guild).id) + '-conditation2_max_member')))) {
                                                                                            if ((dootabase.get(String((String((interaction.guild).id) + '-conditation2_notif_client'))) == 'Notification Partenariat' || dootabase.get(String((String((interaction.guild).id) + '-conditation2_notif_server'))) == 'Notification Partenariat') && (dootabase.get(String((String((interaction.guild).id) + '-part_notif_rank'))) == 'Aucun rôle de notification n\'a été configuré !' || dootabase.get(String((String(dootabase.get(String((String((interaction.guild).id) + '-id_server')))) + '-part_notif_rank'))) == 'Aucun rôle de notification n\'a été configuré !')) {
                                                                                                var embed = new Discord.MessageEmbed()
                                                                                                embed.setColor(s4d.database.get(String('wrong_color')));
                                                                                                embed.setDescription((String(s4d.database.get(String('wrong_emoji'))) + String(s4d.database.get(String('notif_part_error_message_fr')))));

                                                                                                await interaction.reply({
                                                                                                    embeds: [(embed)],
                                                                                                    ephemeral: false,
                                                                                                    components: []
                                                                                                });
                                                                                            } else {
                                                                                                var embed = new Discord.MessageEmbed()
                                                                                                embed.setTitle((String(s4d.database.get(String('partner_emoji'))) + String(s4d.database.get(String('condition_partenariat_title_fr')))))
                                                                                                    .setURL();
                                                                                                embed.setColor(s4d.database.get(String('embed_color')));
                                                                                                embed.setDescription(([`__**Condition trouvée (N°2)**__
                                                        > Serveur Discord entre *\``, dootabase.get(String((String((interaction.guild).id) + '-conditation2_min_member'))), '`* et *`', dootabase.get(String((String((interaction.guild).id) + '-conditation2_max_member'))), `\`* membres:
                                                        > *\`De votre côté = `, dootabase.get(String((String((interaction.guild).id) + '-conditation2_notif_client'))), `\`*
                                                        > *\`De notre côté = `, dootabase.get(String((String((interaction.guild).id) + '-conditation2_notif_server'))), '`*'].join('')));
                                                                                                embed.setFooter((String(s4d.database.get(String('tag_author_footer_fr'))) + String((interaction.member.user).tag)), ((interaction.member.user).displayAvatarURL({
                                                                                                    format: "png"
                                                                                                })));
                                                                                                embed.setTimestamp();

                                                                                                const accept_condition2 = new MessageButton()
                                                                                                    .setCustomId('accept_condition2')
                                                                                                    .setLabel('Accepter')
                                                                                                    .setStyle(('SUCCESS'))
                                                                                                    .setEmoji(s4d.database.get(String('good_emoji')))

                                                                                                const refused_condition = new MessageButton()
                                                                                                    .setCustomId('refused_condition')
                                                                                                    .setLabel('Refuser')
                                                                                                    .setStyle(('DANGER'))
                                                                                                    .setEmoji(s4d.database.get(String('wrong_emoji')))

                                                                                                const condition_menu_boutton = new MessageActionRow()
                                                                                                    .addComponents(accept_condition2)
                                                                                                    .addComponents(refused_condition)

                                                                                                await interaction.reply({
                                                                                                    embeds: [(embed)],
                                                                                                    ephemeral: false,
                                                                                                    components: [condition_menu_boutton]
                                                                                                });
                                                                                            }
                                                                                        } else if (((s4d.client.guilds.cache.get(dootabase.get(String((String(interaction.options.getString('id_serveur')) + '-id_server'))))).memberCount) >= dootabase.get(String((String((interaction.guild).id) + '-conditation3_min_member'))) && ((s4d.client.guilds.cache.get(dootabase.get(String((String(interaction.options.getString('id_serveur')) + '-id_server'))))).memberCount) <= dootabase.get(String((String((interaction.guild).id) + '-conditation3_max_member')))) {
                                                                                            if ((dootabase.get(String((String((interaction.guild).id) + '-conditation3_notif_client'))) == 'Notification Partenariat' || dootabase.get(String((String((interaction.guild).id) + '-conditation3_notif_server'))) == 'Notification Partenariat') && (dootabase.get(String((String((interaction.guild).id) + '-part_notif_rank'))) == 'Aucun rôle de notification n\'a été configuré !' || dootabase.get(String((String(dootabase.get(String((String((interaction.guild).id) + '-id_server')))) + '-part_notif_rank'))) == 'Aucun rôle de notification n\'a été configuré !')) {
                                                                                                var embed = new Discord.MessageEmbed()
                                                                                                embed.setColor(s4d.database.get(String('wrong_color')));
                                                                                                embed.setDescription((String(s4d.database.get(String('wrong_emoji'))) + String(s4d.database.get(String('notif_part_error_message_fr')))));

                                                                                                await interaction.reply({
                                                                                                    embeds: [(embed)],
                                                                                                    ephemeral: false,
                                                                                                    components: []
                                                                                                });
                                                                                            } else {
                                                                                                var embed = new Discord.MessageEmbed()
                                                                                                embed.setTitle((String(s4d.database.get(String('partner_emoji'))) + String(s4d.database.get(String('condition_partenariat_title_fr')))))
                                                                                                    .setURL();
                                                                                                embed.setColor(s4d.database.get(String('embed_color')));
                                                                                                embed.setDescription(([`__**Condition trouvée (N°3)**__
                                                        > Serveur Discord entre *\``, dootabase.get(String((String((interaction.guild).id) + '-conditation3_min_member'))), '`* et *`', dootabase.get(String((String((interaction.guild).id) + '-conditation3_max_member'))), `\`* membres:
                                                        > *\`De votre côté = `, dootabase.get(String((String((interaction.guild).id) + '-conditation3_notif_client'))), `\`*
                                                        > *\`De notre côté = `, dootabase.get(String((String((interaction.guild).id) + '-conditation3_notif_server'))), '`*'].join('')));
                                                                                                embed.setFooter((String(s4d.database.get(String('tag_author_footer_fr'))) + String((interaction.member.user).tag)), ((interaction.member.user).displayAvatarURL({
                                                                                                    format: "png"
                                                                                                })));
                                                                                                embed.setTimestamp();

                                                                                                const accept_condition3 = new MessageButton()
                                                                                                    .setCustomId('accept_condition3')
                                                                                                    .setLabel('Accepter')
                                                                                                    .setStyle(('SUCCESS'))
                                                                                                    .setEmoji(s4d.database.get(String('good_emoji')))

                                                                                                const refused_condition = new MessageButton()
                                                                                                    .setCustomId('refused_condition')
                                                                                                    .setLabel('Refuser')
                                                                                                    .setStyle(('DANGER'))
                                                                                                    .setEmoji(s4d.database.get(String('wrong_emoji')))

                                                                                                const condition_menu_boutton = new MessageActionRow()
                                                                                                    .addComponents(accept_condition3)
                                                                                                    .addComponents(refused_condition)

                                                                                                await interaction.reply({
                                                                                                    embeds: [(embed)],
                                                                                                    ephemeral: false,
                                                                                                    components: [condition_menu_boutton]
                                                                                                });
                                                                                            }
                                                                                        } else if (((s4d.client.guilds.cache.get(dootabase.get(String((String(interaction.options.getString('id_serveur')) + '-id_server'))))).memberCount) >= dootabase.get(String((String((interaction.guild).id) + '-conditation4_min_member'))) && ((s4d.client.guilds.cache.get(dootabase.get(String((String(interaction.options.getString('id_serveur')) + '-id_server'))))).memberCount) <= dootabase.get(String((String((interaction.guild).id) + '-conditation4_max_member')))) {
                                                                                            if ((dootabase.get(String((String((interaction.guild).id) + '-conditation4_notif_client'))) == 'Notification Partenariat' || dootabase.get(String((String((interaction.guild).id) + '-conditation4_notif_server'))) == 'Notification Partenariat') && (dootabase.get(String((String((interaction.guild).id) + '-part_notif_rank'))) == 'Aucun rôle de notification n\'a été configuré !' || dootabase.get(String((String(dootabase.get(String((String((interaction.guild).id) + '-id_server')))) + '-part_notif_rank'))) == 'Aucun rôle de notification n\'a été configuré !')) {
                                                                                                var embed = new Discord.MessageEmbed()
                                                                                                embed.setColor(s4d.database.get(String('wrong_color')));
                                                                                                embed.setDescription((String(s4d.database.get(String('wrong_emoji'))) + String(s4d.database.get(String('notif_part_error_message_fr')))));

                                                                                                await interaction.reply({
                                                                                                    embeds: [(embed)],
                                                                                                    ephemeral: false,
                                                                                                    components: []
                                                                                                });
                                                                                            } else {
                                                                                                var embed = new Discord.MessageEmbed()
                                                                                                embed.setTitle((String(s4d.database.get(String('partner_emoji'))) + String(s4d.database.get(String('condition_partenariat_title_fr')))))
                                                                                                    .setURL();
                                                                                                embed.setColor(s4d.database.get(String('embed_color')));
                                                                                                embed.setDescription(([`__**Condition trouvée (N°1)**__
                                                        > Serveur Discord entre *\``, dootabase.get(String((String((interaction.guild).id) + '-conditation4_min_member'))), '`* et *`', dootabase.get(String((String((interaction.guild).id) + '-conditation4_max_member'))), `\`* membres:
                                                        > *\`De votre côté = `, dootabase.get(String((String((interaction.guild).id) + '-conditation4_notif_client'))), `\`*
                                                        > *\`De notre côté = `, dootabase.get(String((String((interaction.guild).id) + '-conditation4_notif_server'))), '`*'].join('')));
                                                                                                embed.setFooter((String(s4d.database.get(String('tag_author_footer_fr'))) + String((interaction.member.user).tag)), ((interaction.member.user).displayAvatarURL({
                                                                                                    format: "png"
                                                                                                })));
                                                                                                embed.setTimestamp();

                                                                                                const accept_condition4 = new MessageButton()
                                                                                                    .setCustomId('accept_condition4')
                                                                                                    .setLabel('Accepter')
                                                                                                    .setStyle(('SUCCESS'))
                                                                                                    .setEmoji(s4d.database.get(String('good_emoji')))

                                                                                                const refused_condition = new MessageButton()
                                                                                                    .setCustomId('refused_condition')
                                                                                                    .setLabel('Refuser')
                                                                                                    .setStyle(('DANGER'))
                                                                                                    .setEmoji(s4d.database.get(String('wrong_emoji')))

                                                                                                const condition_menu_boutton = new MessageActionRow()
                                                                                                    .addComponents(accept_condition4)
                                                                                                    .addComponents(refused_condition)

                                                                                                await interaction.reply({
                                                                                                    embeds: [(embed)],
                                                                                                    ephemeral: false,
                                                                                                    components: [condition_menu_boutton]
                                                                                                });
                                                                                            }
                                                                                        } else {
                                                                                            var embed = new Discord.MessageEmbed()
                                                                                            embed.setColor(s4d.database.get(String('wrong_color')));
                                                                                            embed.setDescription((String(s4d.database.get(String('wrong_emoji'))) + String(s4d.database.get(String('condition_notfound_message_fr')))));

                                                                                            await interaction.reply({
                                                                                                embeds: [(embed)],
                                                                                                ephemeral: true,
                                                                                                components: []
                                                                                            });
                                                                                        }
                                                                                    } else {
                                                                                        var embed = new Discord.MessageEmbed()
                                                                                        embed.setColor(s4d.database.get(String('wrong_color')));
                                                                                        embed.setDescription((String(s4d.database.get(String('wrong_emoji'))) + String(s4d.database.get(String('limite_part_message_fr')))));

                                                                                        await interaction.reply({
                                                                                            embeds: [(embed)],
                                                                                            ephemeral: true,
                                                                                            components: []
                                                                                        });
                                                                                    }
                                                                                } else {
                                                                                    if (((s4d.client.guilds.cache.get(dootabase.get(String((String(interaction.options.getString('id_serveur')) + '-id_server'))))).memberCount) >= dootabase.get(String((String((interaction.guild).id) + '-conditation1_min_member'))) && ((s4d.client.guilds.cache.get(dootabase.get(String((String(interaction.options.getString('id_serveur')) + '-id_server'))))).memberCount) <= dootabase.get(String((String((interaction.guild).id) + '-conditation1_max_member')))) {
                                                                                        if ((dootabase.get(String((String((interaction.guild).id) + '-conditation1_notif_client'))) == 'Notification Partenariat' || dootabase.get(String((String((interaction.guild).id) + '-conditation1_notif_server'))) == 'Notification Partenariat') && (dootabase.get(String((String((interaction.guild).id) + '-part_notif_rank'))) == 'Aucun rôle de notification n\'a été configuré !' || dootabase.get(String((String(dootabase.get(String((String((interaction.guild).id) + '-id_server')))) + '-part_notif_rank'))) == 'Aucun rôle de notification n\'a été configuré !')) {
                                                                                            var embed = new Discord.MessageEmbed()
                                                                                            embed.setColor(s4d.database.get(String('wrong_color')));
                                                                                            embed.setDescription((String(s4d.database.get(String('wrong_emoji'))) + String(s4d.database.get(String('notif_part_error_message_fr')))));

                                                                                            await interaction.reply({
                                                                                                embeds: [(embed)],
                                                                                                ephemeral: false,
                                                                                                components: []
                                                                                            });
                                                                                        } else {
                                                                                            var embed = new Discord.MessageEmbed()
                                                                                            embed.setTitle((String(s4d.database.get(String('partner_emoji'))) + String(s4d.database.get(String('condition_partenariat_title_fr')))))
                                                                                                .setURL();
                                                                                            embed.setColor(s4d.database.get(String('embed_color')));
                                                                                            embed.setDescription(([`__**Condition trouvée (N°1)**__
                                                      > Serveur Discord entre *\``, dootabase.get(String((String((interaction.guild).id) + '-conditation1_min_member'))), '`* et *`', dootabase.get(String((String((interaction.guild).id) + '-conditation1_max_member'))), `\`* membres:
                                                      > *\`De votre côté = `, dootabase.get(String((String((interaction.guild).id) + '-conditation1_notif_client'))), `\`*
                                                      > *\`De notre côté = `, dootabase.get(String((String((interaction.guild).id) + '-conditation1_notif_server'))), '`*'].join('')));
                                                                                            embed.setFooter((String(s4d.database.get(String('tag_author_footer_fr'))) + String((interaction.member.user).tag)), ((interaction.member.user).displayAvatarURL({
                                                                                                format: "png"
                                                                                            })));
                                                                                            embed.setTimestamp();

                                                                                            const accept_condition1 = new MessageButton()
                                                                                                .setCustomId('accept_condition1')
                                                                                                .setLabel('Accepter')
                                                                                                .setStyle(('SUCCESS'))
                                                                                                .setEmoji(s4d.database.get(String('good_emoji')))

                                                                                            const refused_condition = new MessageButton()
                                                                                                .setCustomId('refused_condition')
                                                                                                .setLabel('Refuser')
                                                                                                .setStyle(('DANGER'))
                                                                                                .setEmoji(s4d.database.get(String('wrong_emoji')))

                                                                                            const condition_menu_boutton = new MessageActionRow()
                                                                                                .addComponents(accept_condition1)
                                                                                                .addComponents(refused_condition)

                                                                                            await interaction.reply({
                                                                                                embeds: [(embed)],
                                                                                                ephemeral: false,
                                                                                                components: [condition_menu_boutton]
                                                                                            });
                                                                                        }
                                                                                    } else if (((s4d.client.guilds.cache.get(dootabase.get(String((String(interaction.options.getString('id_serveur')) + '-id_server'))))).memberCount) >= dootabase.get(String((String((interaction.guild).id) + '-conditation2_min_member'))) && ((s4d.client.guilds.cache.get(dootabase.get(String((String(interaction.options.getString('id_serveur')) + '-id_server'))))).memberCount) <= dootabase.get(String((String((interaction.guild).id) + '-conditation2_max_member')))) {
                                                                                        if ((dootabase.get(String((String((interaction.guild).id) + '-conditation2_notif_client'))) == 'Notification Partenariat' || dootabase.get(String((String((interaction.guild).id) + '-conditation2_notif_server'))) == 'Notification Partenariat') && (dootabase.get(String((String((interaction.guild).id) + '-part_notif_rank'))) == 'Aucun rôle de notification n\'a été configuré !' || dootabase.get(String((String(dootabase.get(String((String((interaction.guild).id) + '-id_server')))) + '-part_notif_rank'))) == 'Aucun rôle de notification n\'a été configuré !')) {
                                                                                            var embed = new Discord.MessageEmbed()
                                                                                            embed.setColor(s4d.database.get(String('wrong_color')));
                                                                                            embed.setDescription((String(s4d.database.get(String('wrong_emoji'))) + String(s4d.database.get(String('notif_part_error_message_fr')))));

                                                                                            await interaction.reply({
                                                                                                embeds: [(embed)],
                                                                                                ephemeral: false,
                                                                                                components: []
                                                                                            });
                                                                                        } else {
                                                                                            var embed = new Discord.MessageEmbed()
                                                                                            embed.setTitle((String(s4d.database.get(String('partner_emoji'))) + String(s4d.database.get(String('condition_partenariat_title_fr')))))
                                                                                                .setURL();
                                                                                            embed.setColor(s4d.database.get(String('embed_color')));
                                                                                            embed.setDescription(([`__**Condition trouvée (N°2)**__
                                                      > Serveur Discord entre *\``, dootabase.get(String((String((interaction.guild).id) + '-conditation2_min_member'))), '`* et *`', dootabase.get(String((String((interaction.guild).id) + '-conditation2_max_member'))), `\`* membres:
                                                      > *\`De votre côté = `, dootabase.get(String((String((interaction.guild).id) + '-conditation2_notif_client'))), `\`*
                                                      > *\`De notre côté = `, dootabase.get(String((String((interaction.guild).id) + '-conditation2_notif_server'))), '`*'].join('')));
                                                                                            embed.setFooter((String(s4d.database.get(String('tag_author_footer_fr'))) + String((interaction.member.user).tag)), ((interaction.member.user).displayAvatarURL({
                                                                                                format: "png"
                                                                                            })));
                                                                                            embed.setTimestamp();

                                                                                            const accept_condition2 = new MessageButton()
                                                                                                .setCustomId('accept_condition2')
                                                                                                .setLabel('Accepter')
                                                                                                .setStyle(('SUCCESS'))
                                                                                                .setEmoji(s4d.database.get(String('good_emoji')))

                                                                                            const refused_condition = new MessageButton()
                                                                                                .setCustomId('refused_condition')
                                                                                                .setLabel('Refuser')
                                                                                                .setStyle(('DANGER'))
                                                                                                .setEmoji(s4d.database.get(String('wrong_emoji')))

                                                                                            const condition_menu_boutton = new MessageActionRow()
                                                                                                .addComponents(accept_condition2)
                                                                                                .addComponents(refused_condition)

                                                                                            await interaction.reply({
                                                                                                embeds: [(embed)],
                                                                                                ephemeral: false,
                                                                                                components: [condition_menu_boutton]
                                                                                            });
                                                                                        }
                                                                                    } else if (((s4d.client.guilds.cache.get(dootabase.get(String((String(interaction.options.getString('id_serveur')) + '-id_server'))))).memberCount) >= dootabase.get(String((String((interaction.guild).id) + '-conditation3_min_member'))) && ((s4d.client.guilds.cache.get(dootabase.get(String((String(interaction.options.getString('id_serveur')) + '-id_server'))))).memberCount) <= dootabase.get(String((String((interaction.guild).id) + '-conditation3_max_member')))) {
                                                                                        if ((dootabase.get(String((String((interaction.guild).id) + '-conditation3_notif_client'))) == 'Notification Partenariat' || dootabase.get(String((String((interaction.guild).id) + '-conditation3_notif_server'))) == 'Notification Partenariat') && (dootabase.get(String((String((interaction.guild).id) + '-part_notif_rank'))) == 'Aucun rôle de notification n\'a été configuré !' || dootabase.get(String((String(dootabase.get(String((String((interaction.guild).id) + '-id_server')))) + '-part_notif_rank'))) == 'Aucun rôle de notification n\'a été configuré !')) {
                                                                                            var embed = new Discord.MessageEmbed()
                                                                                            embed.setColor(s4d.database.get(String('wrong_color')));
                                                                                            embed.setDescription((String(s4d.database.get(String('wrong_emoji'))) + String(s4d.database.get(String('notif_part_error_message_fr')))));

                                                                                            await interaction.reply({
                                                                                                embeds: [(embed)],
                                                                                                ephemeral: false,
                                                                                                components: []
                                                                                            });
                                                                                        } else {
                                                                                            var embed = new Discord.MessageEmbed()
                                                                                            embed.setTitle((String(s4d.database.get(String('partner_emoji'))) + String(s4d.database.get(String('condition_partenariat_title_fr')))))
                                                                                                .setURL();
                                                                                            embed.setColor(s4d.database.get(String('embed_color')));
                                                                                            embed.setDescription(([`__**Condition trouvée (N°3)**__
                                                      > Serveur Discord entre *\``, dootabase.get(String((String((interaction.guild).id) + '-conditation1_min_member'))), '`* et *`', dootabase.get(String((String((interaction.guild).id) + '-conditation1_max_member'))), `\`* membres:
                                                      > *\`De votre côté = `, dootabase.get(String((String((interaction.guild).id) + '-conditation3_notif_client'))), `\`*
                                                      > *\`De notre côté = `, dootabase.get(String((String((interaction.guild).id) + '-conditation3_notif_server'))), '`*'].join('')));
                                                                                            embed.setFooter((String(s4d.database.get(String('tag_author_footer_fr'))) + String((interaction.member.user).tag)), ((interaction.member.user).displayAvatarURL({
                                                                                                format: "png"
                                                                                            })));
                                                                                            embed.setTimestamp();

                                                                                            const accept_condition3 = new MessageButton()
                                                                                                .setCustomId('accept_condition3')
                                                                                                .setLabel('Accepter')
                                                                                                .setStyle(('SUCCESS'))
                                                                                                .setEmoji(s4d.database.get(String('good_emoji')))

                                                                                            const refused_condition = new MessageButton()
                                                                                                .setCustomId('refused_condition')
                                                                                                .setLabel('Refuser')
                                                                                                .setStyle(('DANGER'))
                                                                                                .setEmoji(s4d.database.get(String('wrong_emoji')))

                                                                                            const condition_menu_boutton = new MessageActionRow()
                                                                                                .addComponents(accept_condition3)
                                                                                                .addComponents(refused_condition)

                                                                                            await interaction.reply({
                                                                                                embeds: [(embed)],
                                                                                                ephemeral: false,
                                                                                                components: [condition_menu_boutton]
                                                                                            });
                                                                                        }
                                                                                    } else if (((s4d.client.guilds.cache.get(dootabase.get(String((String(interaction.options.getString('id_serveur')) + '-id_server'))))).memberCount) >= dootabase.get(String((String((interaction.guild).id) + '-conditation4_min_member'))) && ((s4d.client.guilds.cache.get(dootabase.get(String((String(interaction.options.getString('id_serveur')) + '-id_server'))))).memberCount) <= dootabase.get(String((String((interaction.guild).id) + '-conditation4_max_member')))) {
                                                                                        if ((dootabase.get(String((String((interaction.guild).id) + '-conditation4_notif_client'))) == 'Notification Partenariat' || dootabase.get(String((String((interaction.guild).id) + '-conditation4_notif_server'))) == 'Notification Partenariat') && (dootabase.get(String((String((interaction.guild).id) + '-part_notif_rank'))) == 'Aucun rôle de notification n\'a été configuré !' || dootabase.get(String((String(dootabase.get(String((String((interaction.guild).id) + '-id_server')))) + '-part_notif_rank'))) == 'Aucun rôle de notification n\'a été configuré !')) {
                                                                                            var embed = new Discord.MessageEmbed()
                                                                                            embed.setColor(s4d.database.get(String('wrong_color')));
                                                                                            embed.setDescription((String(s4d.database.get(String('wrong_emoji'))) + String(s4d.database.get(String('notif_part_error_message_fr')))));

                                                                                            await interaction.reply({
                                                                                                embeds: [(embed)],
                                                                                                ephemeral: false,
                                                                                                components: []
                                                                                            });
                                                                                        } else {
                                                                                            var embed = new Discord.MessageEmbed()
                                                                                            embed.setTitle((String(s4d.database.get(String('partner_emoji'))) + String(s4d.database.get(String('condition_partenariat_title_fr')))))
                                                                                                .setURL();
                                                                                            embed.setColor(s4d.database.get(String('embed_color')));
                                                                                            embed.setDescription(([`__**Condition trouvée (N°4)**__
                                                      > Serveur Discord entre *\``, dootabase.get(String((String((interaction.guild).id) + '-conditation4_min_member'))), '`* et *`', dootabase.get(String((String((interaction.guild).id) + '-conditation4_max_member'))), `\`* membres:
                                                      > *\`De votre côté = `, dootabase.get(String((String((interaction.guild).id) + '-conditation4_notif_client'))), `\`*
                                                      > *\`De notre côté = `, dootabase.get(String((String((interaction.guild).id) + '-conditation4_notif_server'))), '`*'].join('')));
                                                                                            embed.setFooter((String(s4d.database.get(String('tag_author_footer_fr'))) + String((interaction.member.user).tag)), ((interaction.member.user).displayAvatarURL({
                                                                                                format: "png"
                                                                                            })));
                                                                                            embed.setTimestamp();

                                                                                            const accept_condition4 = new MessageButton()
                                                                                                .setCustomId('accept_condition4')
                                                                                                .setLabel('Accepter')
                                                                                                .setStyle(('SUCCESS'))
                                                                                                .setEmoji(s4d.database.get(String('good_emoji')))

                                                                                            const refused_condition = new MessageButton()
                                                                                                .setCustomId('refused_condition')
                                                                                                .setLabel('Refuser')
                                                                                                .setStyle(('DANGER'))
                                                                                                .setEmoji(s4d.database.get(String('wrong_emoji')))

                                                                                            const condition_menu_boutton = new MessageActionRow()
                                                                                                .addComponents(accept_condition4)
                                                                                                .addComponents(refused_condition)

                                                                                            await interaction.reply({
                                                                                                embeds: [(embed)],
                                                                                                ephemeral: false,
                                                                                                components: [condition_menu_boutton]
                                                                                            });
                                                                                        }
                                                                                    } else if (((s4d.client.guilds.cache.get(dootabase.get(String((String(interaction.options.getString('id_serveur')) + '-id_server'))))).memberCount) >= dootabase.get(String((String((interaction.guild).id) + '-conditation5_min_member'))) && ((s4d.client.guilds.cache.get(dootabase.get(String((String(interaction.options.getString('id_serveur')) + '-id_server'))))).memberCount) <= dootabase.get(String((String((interaction.guild).id) + '-conditation5_max_member')))) {
                                                                                        if ((dootabase.get(String((String((interaction.guild).id) + '-conditation5_notif_client'))) == 'Notification Partenariat' || dootabase.get(String((String((interaction.guild).id) + '-conditation5_notif_server'))) == 'Notification Partenariat') && (dootabase.get(String((String((interaction.guild).id) + '-part_notif_rank'))) == 'Aucun rôle de notification n\'a été configuré !' || dootabase.get(String((String(dootabase.get(String((String((interaction.guild).id) + '-id_server')))) + '-part_notif_rank'))) == 'Aucun rôle de notification n\'a été configuré !')) {
                                                                                            var embed = new Discord.MessageEmbed()
                                                                                            embed.setColor(s4d.database.get(String('wrong_color')));
                                                                                            embed.setDescription((String(s4d.database.get(String('wrong_emoji'))) + String(s4d.database.get(String('notif_part_error_message_fr')))));

                                                                                            await interaction.reply({
                                                                                                embeds: [(embed)],
                                                                                                ephemeral: false,
                                                                                                components: []
                                                                                            });
                                                                                        } else {
                                                                                            var embed = new Discord.MessageEmbed()
                                                                                            embed.setTitle((String(s4d.database.get(String('partner_emoji'))) + String(s4d.database.get(String('condition_partenariat_title_fr')))))
                                                                                                .setURL();
                                                                                            embed.setColor(s4d.database.get(String('embed_color')));
                                                                                            embed.setDescription(([`__**Condition trouvée (N°5)**__
                                                      > Serveur Discord entre *\``, dootabase.get(String((String((interaction.guild).id) + '-conditation5_min_member'))), '`* et *`', dootabase.get(String((String((interaction.guild).id) + '-conditation5_max_member'))), `\`* membres:
                                                      > *\`De votre côté = `, dootabase.get(String((String((interaction.guild).id) + '-conditation5_notif_client'))), `\`*
                                                      > *\`De notre côté = `, dootabase.get(String((String((interaction.guild).id) + '-conditation5_notif_server'))), '`*'].join('')));
                                                                                            embed.setFooter((String(s4d.database.get(String('tag_author_footer_fr'))) + String((interaction.member.user).tag)), ((interaction.member.user).displayAvatarURL({
                                                                                                format: "png"
                                                                                            })));
                                                                                            embed.setTimestamp();

                                                                                            const accept_condition5 = new MessageButton()
                                                                                                .setCustomId('accept_condition5')
                                                                                                .setLabel('Accepter')
                                                                                                .setStyle(('SUCCESS'))
                                                                                                .setEmoji(s4d.database.get(String('good_emoji')))

                                                                                            const refused_condition = new MessageButton()
                                                                                                .setCustomId('refused_condition')
                                                                                                .setLabel('Refuser')
                                                                                                .setStyle(('DANGER'))
                                                                                                .setEmoji(s4d.database.get(String('wrong_emoji')))

                                                                                            const condition_menu_boutton = new MessageActionRow()
                                                                                                .addComponents(accept_condition5)
                                                                                                .addComponents(refused_condition)

                                                                                            await interaction.reply({
                                                                                                embeds: [(embed)],
                                                                                                ephemeral: false,
                                                                                                components: [condition_menu_boutton]
                                                                                            });
                                                                                        }
                                                                                    } else if (((s4d.client.guilds.cache.get(dootabase.get(String((String(interaction.options.getString('id_serveur')) + '-id_server'))))).memberCount) >= dootabase.get(String((String((interaction.guild).id) + '-conditation6_min_member'))) && ((s4d.client.guilds.cache.get(dootabase.get(String((String(interaction.options.getString('id_serveur')) + '-id_server'))))).memberCount) <= dootabase.get(String((String((interaction.guild).id) + '-conditation6_max_member')))) {
                                                                                        if ((dootabase.get(String((String((interaction.guild).id) + '-conditation6_notif_client'))) == 'Notification Partenariat' || dootabase.get(String((String((interaction.guild).id) + '-conditation6_notif_server'))) == 'Notification Partenariat') && (dootabase.get(String((String((interaction.guild).id) + '-part_notif_rank'))) == 'Aucun rôle de notification n\'a été configuré !' || dootabase.get(String((String(dootabase.get(String((String((interaction.guild).id) + '-id_server')))) + '-part_notif_rank'))) == 'Aucun rôle de notification n\'a été configuré !')) {
                                                                                            var embed = new Discord.MessageEmbed()
                                                                                            embed.setColor(s4d.database.get(String('wrong_color')));
                                                                                            embed.setDescription((String(s4d.database.get(String('wrong_emoji'))) + String(s4d.database.get(String('notif_part_error_message_fr')))));

                                                                                            await interaction.reply({
                                                                                                embeds: [(embed)],
                                                                                                ephemeral: false,
                                                                                                components: []
                                                                                            });
                                                                                        } else {
                                                                                            var embed = new Discord.MessageEmbed()
                                                                                            embed.setTitle((String(s4d.database.get(String('partner_emoji'))) + String(s4d.database.get(String('condition_partenariat_title_fr')))))
                                                                                                .setURL();
                                                                                            embed.setColor(s4d.database.get(String('embed_color')));
                                                                                            embed.setDescription(([`__**Condition trouvée (N°6)**__
                                                      > Serveur Discord entre *\``, dootabase.get(String((String((interaction.guild).id) + '-conditation6_min_member'))), '`* et *`', dootabase.get(String((String((interaction.guild).id) + '-conditation6_max_member'))), `\`* membres:
                                                      > *\`De votre côté = `, dootabase.get(String((String((interaction.guild).id) + '-conditation6_notif_client'))), `\`*
                                                      > *\`De notre côté = `, dootabase.get(String((String((interaction.guild).id) + '-conditation6_notif_server'))), '`*'].join('')));
                                                                                            embed.setFooter((String(s4d.database.get(String('tag_author_footer_fr'))) + String((interaction.member.user).tag)), ((interaction.member.user).displayAvatarURL({
                                                                                                format: "png"
                                                                                            })));
                                                                                            embed.setTimestamp();

                                                                                            const accept_condition6 = new MessageButton()
                                                                                                .setCustomId('accept_condition6')
                                                                                                .setLabel('Accepter')
                                                                                                .setStyle(('SUCCESS'))
                                                                                                .setEmoji(s4d.database.get(String('good_emoji')))

                                                                                            const refused_condition = new MessageButton()
                                                                                                .setCustomId('refused_condition')
                                                                                                .setLabel('Refuser')
                                                                                                .setStyle(('DANGER'))
                                                                                                .setEmoji(s4d.database.get(String('wrong_emoji')))

                                                                                            const condition_menu_boutton = new MessageActionRow()
                                                                                                .addComponents(accept_condition6)
                                                                                                .addComponents(refused_condition)

                                                                                            await interaction.reply({
                                                                                                embeds: [(embed)],
                                                                                                ephemeral: false,
                                                                                                components: [condition_menu_boutton]
                                                                                            });
                                                                                        }
                                                                                    } else if (((s4d.client.guilds.cache.get(dootabase.get(String((String(interaction.options.getString('id_serveur')) + '-id_server'))))).memberCount) >= dootabase.get(String((String((interaction.guild).id) + '-conditation7_min_member'))) && ((s4d.client.guilds.cache.get(dootabase.get(String((String(interaction.options.getString('id_serveur')) + '-id_server'))))).memberCount) <= dootabase.get(String((String((interaction.guild).id) + '-conditation7_max_member')))) {
                                                                                        if ((dootabase.get(String((String((interaction.guild).id) + '-conditation7_notif_client'))) == 'Notification Partenariat' || dootabase.get(String((String((interaction.guild).id) + '-conditation7_notif_server'))) == 'Notification Partenariat') && (dootabase.get(String((String((interaction.guild).id) + '-part_notif_rank'))) == 'Aucun rôle de notification n\'a été configuré !' || dootabase.get(String((String(dootabase.get(String((String((interaction.guild).id) + '-id_server')))) + '-part_notif_rank'))) == 'Aucun rôle de notification n\'a été configuré !')) {
                                                                                            var embed = new Discord.MessageEmbed()
                                                                                            embed.setColor(s4d.database.get(String('wrong_color')));
                                                                                            embed.setDescription((String(s4d.database.get(String('wrong_emoji'))) + String(s4d.database.get(String('notif_part_error_message_fr')))));

                                                                                            await interaction.reply({
                                                                                                embeds: [(embed)],
                                                                                                ephemeral: false,
                                                                                                components: []
                                                                                            });
                                                                                        } else {
                                                                                            var embed = new Discord.MessageEmbed()
                                                                                            embed.setTitle((String(s4d.database.get(String('partner_emoji'))) + String(s4d.database.get(String('condition_partenariat_title_fr')))))
                                                                                                .setURL();
                                                                                            embed.setColor(s4d.database.get(String('embed_color')));
                                                                                            embed.setDescription(([`__**Condition trouvée (N°7)**__
                                                      > Serveur Discord entre *\``, dootabase.get(String((String((interaction.guild).id) + '-conditation7_min_member'))), '`* et *`', dootabase.get(String((String((interaction.guild).id) + '-conditation7_max_member'))), `\`* membres:
                                                      > *\`De votre côté = `, dootabase.get(String((String((interaction.guild).id) + '-conditation7_notif_client'))), `\`*
                                                      > *\`De notre côté = `, dootabase.get(String((String((interaction.guild).id) + '-conditation7_notif_server'))), '`*'].join('')));
                                                                                            embed.setFooter((String(s4d.database.get(String('tag_author_footer_fr'))) + String((interaction.member.user).tag)), ((interaction.member.user).displayAvatarURL({
                                                                                                format: "png"
                                                                                            })));
                                                                                            embed.setTimestamp();

                                                                                            const accept_condition7 = new MessageButton()
                                                                                                .setCustomId('accept_condition7')
                                                                                                .setLabel('Accepter')
                                                                                                .setStyle(('SUCCESS'))
                                                                                                .setEmoji(s4d.database.get(String('good_emoji')))

                                                                                            const refused_condition = new MessageButton()
                                                                                                .setCustomId('refused_condition')
                                                                                                .setLabel('Refuser')
                                                                                                .setStyle(('DANGER'))
                                                                                                .setEmoji(s4d.database.get(String('wrong_emoji')))

                                                                                            const condition_menu_boutton = new MessageActionRow()
                                                                                                .addComponents(accept_condition7)
                                                                                                .addComponents(refused_condition)

                                                                                            await interaction.reply({
                                                                                                embeds: [(embed)],
                                                                                                ephemeral: false,
                                                                                                components: [condition_menu_boutton]
                                                                                            });
                                                                                        }
                                                                                    } else if (((s4d.client.guilds.cache.get(dootabase.get(String((String(interaction.options.getString('id_serveur')) + '-id_server'))))).memberCount) >= dootabase.get(String((String((interaction.guild).id) + '-conditation8_min_member'))) && ((s4d.client.guilds.cache.get(dootabase.get(String((String(interaction.options.getString('id_serveur')) + '-id_server'))))).memberCount) <= dootabase.get(String((String((interaction.guild).id) + '-conditation8_max_member')))) {
                                                                                        if ((dootabase.get(String((String((interaction.guild).id) + '-conditation8_notif_client'))) == 'Notification Partenariat' || dootabase.get(String((String((interaction.guild).id) + '-conditation8_notif_server'))) == 'Notification Partenariat') && (dootabase.get(String((String((interaction.guild).id) + '-part_notif_rank'))) == 'Aucun rôle de notification n\'a été configuré !' || dootabase.get(String((String(dootabase.get(String((String((interaction.guild).id) + '-id_server')))) + '-part_notif_rank'))) == 'Aucun rôle de notification n\'a été configuré !')) {
                                                                                            var embed = new Discord.MessageEmbed()
                                                                                            embed.setColor(s4d.database.get(String('wrong_color')));
                                                                                            embed.setDescription((String(s4d.database.get(String('wrong_emoji'))) + String(s4d.database.get(String('notif_part_error_message_fr')))));

                                                                                            await interaction.reply({
                                                                                                embeds: [(embed)],
                                                                                                ephemeral: false,
                                                                                                components: []
                                                                                            });
                                                                                        } else {
                                                                                            var embed = new Discord.MessageEmbed()
                                                                                            embed.setTitle((String(s4d.database.get(String('partner_emoji'))) + String(s4d.database.get(String('condition_partenariat_title_fr')))))
                                                                                                .setURL();
                                                                                            embed.setColor(s4d.database.get(String('embed_color')));
                                                                                            embed.setDescription(([`__**Condition trouvée (N°1)**__
                                                      > Serveur Discord entre *\``, dootabase.get(String((String((interaction.guild).id) + '-conditation8_min_member'))), '`* et *`', dootabase.get(String((String((interaction.guild).id) + '-conditation8_max_member'))), `\`* membres:
                                                      > *\`De votre côté = `, dootabase.get(String((String((interaction.guild).id) + '-conditation8_notif_client'))), `\`*
                                                      > *\`De notre côté = `, dootabase.get(String((String((interaction.guild).id) + '-conditation8_notif_server'))), '`*'].join('')));
                                                                                            embed.setFooter((String(s4d.database.get(String('tag_author_footer_fr'))) + String((interaction.member.user).tag)), ((interaction.member.user).displayAvatarURL({
                                                                                                format: "png"
                                                                                            })));
                                                                                            embed.setTimestamp();

                                                                                            const accept_condition8 = new MessageButton()
                                                                                                .setCustomId('accept_condition8')
                                                                                                .setLabel('Accepter')
                                                                                                .setStyle(('SUCCESS'))
                                                                                                .setEmoji(s4d.database.get(String('good_emoji')))

                                                                                            const refused_condition = new MessageButton()
                                                                                                .setCustomId('refused_condition')
                                                                                                .setLabel('Refuser')
                                                                                                .setStyle(('DANGER'))
                                                                                                .setEmoji(s4d.database.get(String('wrong_emoji')))

                                                                                            const condition_menu_boutton = new MessageActionRow()
                                                                                                .addComponents(accept_condition8)
                                                                                                .addComponents(refused_condition)

                                                                                            await interaction.reply({
                                                                                                embeds: [(embed)],
                                                                                                ephemeral: false,
                                                                                                components: [condition_menu_boutton]
                                                                                            });
                                                                                        }
                                                                                    } else if (((s4d.client.guilds.cache.get(dootabase.get(String((String(interaction.options.getString('id_serveur')) + '-id_server'))))).memberCount) >= dootabase.get(String((String((interaction.guild).id) + '-conditation9_min_member'))) && ((s4d.client.guilds.cache.get(dootabase.get(String((String(interaction.options.getString('id_serveur')) + '-id_server'))))).memberCount) <= dootabase.get(String((String((interaction.guild).id) + '-conditation9_max_member')))) {
                                                                                        if ((dootabase.get(String((String((interaction.guild).id) + '-conditation9_notif_client'))) == 'Notification Partenariat' || dootabase.get(String((String((interaction.guild).id) + '-conditation9_notif_server'))) == 'Notification Partenariat') && (dootabase.get(String((String((interaction.guild).id) + '-part_notif_rank'))) == 'Aucun rôle de notification n\'a été configuré !' || dootabase.get(String((String(dootabase.get(String((String((interaction.guild).id) + '-id_server')))) + '-part_notif_rank'))) == 'Aucun rôle de notification n\'a été configuré !')) {
                                                                                            var embed = new Discord.MessageEmbed()
                                                                                            embed.setColor(s4d.database.get(String('wrong_color')));
                                                                                            embed.setDescription((String(s4d.database.get(String('wrong_emoji'))) + String(s4d.database.get(String('notif_part_error_message_fr')))));

                                                                                            await interaction.reply({
                                                                                                embeds: [(embed)],
                                                                                                ephemeral: false,
                                                                                                components: []
                                                                                            });
                                                                                        } else {
                                                                                            var embed = new Discord.MessageEmbed()
                                                                                            embed.setTitle((String(s4d.database.get(String('partner_emoji'))) + String(s4d.database.get(String('condition_partenariat_title_fr')))))
                                                                                                .setURL();
                                                                                            embed.setColor(s4d.database.get(String('embed_color')));
                                                                                            embed.setDescription(([`__**Condition trouvée (N°9)**__
                                                      > Serveur Discord entre *\``, dootabase.get(String((String((interaction.guild).id) + '-conditation9_min_member'))), '`* et *`', dootabase.get(String((String((interaction.guild).id) + '-conditation9_max_member'))), `\`* membres:
                                                      > *\`De votre côté = `, dootabase.get(String((String((interaction.guild).id) + '-conditation9_notif_client'))), `\`*
                                                      > *\`De notre côté = `, dootabase.get(String((String((interaction.guild).id) + '-conditation9_notif_server'))), '`*'].join('')));
                                                                                            embed.setFooter((String(s4d.database.get(String('tag_author_footer_fr'))) + String((interaction.member.user).tag)), ((interaction.member.user).displayAvatarURL({
                                                                                                format: "png"
                                                                                            })));
                                                                                            embed.setTimestamp();

                                                                                            const accept_condition9 = new MessageButton()
                                                                                                .setCustomId('accept_condition9')
                                                                                                .setLabel('Accepter')
                                                                                                .setStyle(('SUCCESS'))
                                                                                                .setEmoji(s4d.database.get(String('good_emoji')))

                                                                                            const refused_condition = new MessageButton()
                                                                                                .setCustomId('refused_condition')
                                                                                                .setLabel('Refuser')
                                                                                                .setStyle(('DANGER'))
                                                                                                .setEmoji(s4d.database.get(String('wrong_emoji')))

                                                                                            const condition_menu_boutton = new MessageActionRow()
                                                                                                .addComponents(accept_condition9)
                                                                                                .addComponents(refused_condition)

                                                                                            await interaction.reply({
                                                                                                embeds: [(embed)],
                                                                                                ephemeral: false,
                                                                                                components: [condition_menu_boutton]
                                                                                            });
                                                                                        }
                                                                                    } else if (((s4d.client.guilds.cache.get(dootabase.get(String((String(interaction.options.getString('id_serveur')) + '-id_server'))))).memberCount) >= dootabase.get(String((String((interaction.guild).id) + '-conditation10_min_member'))) && ((s4d.client.guilds.cache.get(dootabase.get(String((String(interaction.options.getString('id_serveur')) + '-id_server'))))).memberCount) <= dootabase.get(String((String((interaction.guild).id) + '-conditation10_max_member')))) {
                                                                                        if ((dootabase.get(String((String((interaction.guild).id) + '-conditation10_notif_client'))) == 'Notification Partenariat' || dootabase.get(String((String((interaction.guild).id) + '-conditation10_notif_server'))) == 'Notification Partenariat') && (dootabase.get(String((String((interaction.guild).id) + '-part_notif_rank'))) == 'Aucun rôle de notification n\'a été configuré !' || dootabase.get(String((String(dootabase.get(String((String((interaction.guild).id) + '-id_server')))) + '-part_notif_rank'))) == 'Aucun rôle de notification n\'a été configuré !')) {
                                                                                            var embed = new Discord.MessageEmbed()
                                                                                            embed.setColor(s4d.database.get(String('wrong_color')));
                                                                                            embed.setDescription((String(s4d.database.get(String('wrong_emoji'))) + String(s4d.database.get(String('notif_part_error_message_fr')))));

                                                                                            await interaction.reply({
                                                                                                embeds: [(embed)],
                                                                                                ephemeral: false,
                                                                                                components: []
                                                                                            });
                                                                                        } else {
                                                                                            var embed = new Discord.MessageEmbed()
                                                                                            embed.setTitle((String(s4d.database.get(String('partner_emoji'))) + String(s4d.database.get(String('condition_partenariat_title_fr')))))
                                                                                                .setURL();
                                                                                            embed.setColor(s4d.database.get(String('embed_color')));
                                                                                            embed.setDescription(([`__**Condition trouvée (N°10)**__
                                                      > Serveur Discord entre *\``, dootabase.get(String((String((interaction.guild).id) + '-conditation10_min_member'))), '`* et *`', dootabase.get(String((String((interaction.guild).id) + '-conditation10_max_member'))), `\`* membres:
                                                      > *\`De votre côté = `, dootabase.get(String((String((interaction.guild).id) + '-conditation10_notif_client'))), `\`*
                                                      > *\`De notre côté = `, dootabase.get(String((String((interaction.guild).id) + '-conditation10_notif_server'))), '`*'].join('')));
                                                                                            embed.setFooter((String(s4d.database.get(String('tag_author_footer_fr'))) + String((interaction.member.user).tag)), ((interaction.member.user).displayAvatarURL({
                                                                                                format: "png"
                                                                                            })));
                                                                                            embed.setTimestamp();

                                                                                            const accept_condition10 = new MessageButton()
                                                                                                .setCustomId('accept_condition10')
                                                                                                .setLabel('Accepter')
                                                                                                .setStyle(('SUCCESS'))
                                                                                                .setEmoji(s4d.database.get(String('good_emoji')))

                                                                                            const refused_condition = new MessageButton()
                                                                                                .setCustomId('refused_condition')
                                                                                                .setLabel('Refuser')
                                                                                                .setStyle(('DANGER'))
                                                                                                .setEmoji(s4d.database.get(String('wrong_emoji')))

                                                                                            const condition_menu_boutton = new MessageActionRow()
                                                                                                .addComponents(accept_condition10)
                                                                                                .addComponents(refused_condition)

                                                                                            await interaction.reply({
                                                                                                embeds: [(embed)],
                                                                                                ephemeral: false,
                                                                                                components: [condition_menu_boutton]
                                                                                            });
                                                                                        }
                                                                                    } else {
                                                                                        var embed = new Discord.MessageEmbed()
                                                                                        embed.setColor(s4d.database.get(String('wrong_color')));
                                                                                        embed.setDescription((String(s4d.database.get(String('wrong_emoji'))) + String(s4d.database.get(String('condition_notfound_message_fr')))));

                                                                                        await interaction.reply({
                                                                                            embeds: [(embed)],
                                                                                            ephemeral: true,
                                                                                            components: []
                                                                                        });
                                                                                    }
                                                                                }
                                                                            } else {
                                                                                var embed = new Discord.MessageEmbed()
                                                                                embed.setColor(s4d.database.get(String('wrong_color')));
                                                                                embed.setDescription((String(s4d.database.get(String('wrong_emoji'))) + String(s4d.database.get(String('time_server_part_limite_reply_message_fr')))));

                                                                                await interaction.reply({
                                                                                    embeds: [(embed)],
                                                                                    ephemeral: true,
                                                                                    components: []
                                                                                });
                                                                            }
                                                                        } else {
                                                                            var embed = new Discord.MessageEmbed()
                                                                            embed.setColor(s4d.database.get(String('wrong_color')));
                                                                            embed.setDescription((String(s4d.database.get(String('wrong_emoji'))) + String(s4d.database.get(String('info_change_config_menu_message_fr')))));

                                                                            await interaction.reply({
                                                                                embeds: [(embed)],
                                                                                ephemeral: true,
                                                                                components: []
                                                                            });
                                                                        }
                                                                    } else {
                                                                        var embed = new Discord.MessageEmbed()
                                                                        embed.setColor(s4d.database.get(String('wrong_color')));
                                                                        embed.setDescription((String(s4d.database.get(String('wrong_emoji'))) + String(s4d.database.get(String('info_change_config_menu_message_fr')))));

                                                                        await interaction.reply({
                                                                            embeds: [(embed)],
                                                                            ephemeral: true,
                                                                            components: []
                                                                        });
                                                                    }
                                                                } else {
                                                                    var embed = new Discord.MessageEmbed()
                                                                    embed.setColor(s4d.database.get(String('wrong_color')));
                                                                    embed.setDescription((String(s4d.database.get(String('wrong_emoji'))) + String(s4d.database.get(String('info_change_config_menu_message_fr')))));

                                                                    await interaction.reply({
                                                                        embeds: [(embed)],
                                                                        ephemeral: true,
                                                                        components: []
                                                                    });
                                                                }
                                                            } else {
                                                                var embed = new Discord.MessageEmbed()
                                                                embed.setColor(s4d.database.get(String('wrong_color')));
                                                                embed.setDescription((String(s4d.database.get(String('wrong_emoji'))) + String(s4d.database.get(String('info_change_config_menu_message_fr')))));

                                                                await interaction.reply({
                                                                    embeds: [(embed)],
                                                                    ephemeral: true,
                                                                    components: []
                                                                });
                                                            }
                                                        } else {
                                                            var embed = new Discord.MessageEmbed()
                                                            embed.setColor(s4d.database.get(String('wrong_color')));
                                                            embed.setDescription((String(s4d.database.get(String('wrong_emoji'))) + String(s4d.database.get(String('info_change_config_menu_message_fr')))));

                                                            await interaction.reply({
                                                                embeds: [(embed)],
                                                                ephemeral: true,
                                                                components: []
                                                            });
                                                        }
                                                    } else {
                                                        var embed = new Discord.MessageEmbed()
                                                        embed.setColor(s4d.database.get(String('embed_color')));
                                                        embed.setDescription((String(s4d.database.get(String('blacklist_emoji'))) + String(s4d.database.get(String('server_owner_chanel_message_fr')))));

                                                        await interaction.reply({
                                                            embeds: [(embed)],
                                                            ephemeral: true,
                                                            components: []
                                                        });
                                                    }
                                                } else {
                                                    var embed = new Discord.MessageEmbed()
                                                    embed.setColor(s4d.database.get(String('embed_color')));
                                                    embed.setDescription((String(s4d.database.get(String('blacklist_emoji'))) + String(s4d.database.get(String('server_owner_chanel_message_fr')))));

                                                    await interaction.reply({
                                                        embeds: [(embed)],
                                                        ephemeral: true,
                                                        components: []
                                                    });
                                                }
                                            } else {
                                                var embed = new Discord.MessageEmbed()
                                                embed.setColor(s4d.database.get(String('embed_color')));
                                                embed.setDescription((String(s4d.database.get(String('blacklist_emoji'))) + String(s4d.database.get(String('server_owner_form_message_fr')))));

                                                await interaction.reply({
                                                    embeds: [(embed)],
                                                    ephemeral: true,
                                                    components: []
                                                });
                                            }
                                        } else {
                                            var embed = new Discord.MessageEmbed()
                                            embed.setColor(s4d.database.get(String('embed_color')));
                                            embed.setDescription((String(s4d.database.get(String('blacklist_emoji'))) + String(s4d.database.get(String('server_blacklist_message_fr')))));

                                            await interaction.reply({
                                                embeds: [(embed)],
                                                ephemeral: true,
                                                components: []
                                            });
                                        }
                                    } else {
                                        var embed = new Discord.MessageEmbed()
                                        embed.setColor(s4d.database.get(String('embed_color')));
                                        embed.setDescription((String(s4d.database.get(String('blacklist_emoji'))) + String(s4d.database.get(String('server_blacklist_message_fr')))));

                                        await interaction.reply({
                                            embeds: [(embed)],
                                            ephemeral: true,
                                            components: []
                                        });
                                    }
                                } else {
                                    var embed = new Discord.MessageEmbed()
                                    embed.setColor(s4d.database.get(String('wrong_color')));
                                    embed.setDescription((String(s4d.database.get(String('wrong_emoji'))) + String(s4d.database.get(String('nover_server_message_fr')))));

                                    await interaction.reply({
                                        embeds: [(embed)],
                                        ephemeral: true,
                                        components: []
                                    });
                                }
                            } else {
                                var embed = new Discord.MessageEmbed()
                                embed.setColor(s4d.database.get(String('wrong_color')));
                                embed.setDescription((String(s4d.database.get(String('wrong_emoji'))) + String(s4d.database.get(String('nover_server_message_fr')))));

                                await interaction.reply({
                                    embeds: [(embed)],
                                    ephemeral: true,
                                    components: []
                                });
                            }
                        } else {
                            var embed = new Discord.MessageEmbed()
                            embed.setColor(s4d.database.get(String('wrong_color')));
                            embed.setDescription((String(s4d.database.get(String('wrong_emoji'))) + String(s4d.database.get(String('admin_perms_error_message_fr')))));

                            await interaction.reply({
                                embeds: [(embed)],
                                ephemeral: true,
                                components: []
                            });
                        }
                    } else {
                        var embed = new Discord.MessageEmbed()
                        embed.setColor(s4d.database.get(String('wrong_color')));
                        embed.setDescription((String(s4d.database.get(String('wrong_emoji'))) + String(s4d.database.get(String('same_server_message_fr')))));

                        await interaction.reply({
                            embeds: [(embed)],
                            ephemeral: true,
                            components: []
                        });
                    }
                } else {
                    var embed = new Discord.MessageEmbed()
                    embed.setColor(s4d.database.get(String('wrong_color')));
                    embed.setDescription((String(s4d.database.get(String('wrong_emoji'))) + String(s4d.database.get(String('wrong_user_noexist_partner_list_message_fr')))));

                    await interaction.reply({
                        embeds: [(embed)],
                        ephemeral: true,
                        components: []
                    });
                }
            } else {
                var embed = new Discord.MessageEmbed()
                embed.setColor(s4d.database.get(String('wrong_color')));
                embed.setDescription((String(s4d.database.get(String('wrong_emoji'))) + String(s4d.database.get(String('user_bot_message_fr')))));

                await interaction.reply({
                    embeds: [(embed)],
                    ephemeral: true,
                    components: []
                });
            }
        }

    });

    s4d.client.on('guildDelete', async (s4dguild) => {
        await delay(Number(2) * 1000);
        s4d.client.channels.cache.get('992363181899005992').setName(('🤖・Serveurs : ' + String(s4d.client.guilds.cache.size)))

    });

    s4d.client.on('guildCreate', async (s4dguild) => {
        s4d.client.channels.cache.get('991989413217321027').send({
            embeds: [new MessageEmbed()
                .setColor(String(s4d.database.get(String('support_embed_color'))))
                .setDescription(String((['**<:Partner_Welcome:992734094238679090> | Le bot a été ajouté au serveur `', s4dguild.name, '` !**', '', ''].join(''))))
            ]
        });
        (((s4d.client.guilds.cache.get((s4dguild.id))).members.cache.get(((s4d.client.guilds.cache.get((s4dguild.id))).ownerId)) || await (s4d.client.guilds.cache.get((s4dguild.id))).members.fetch(((s4d.client.guilds.cache.get((s4dguild.id))).ownerId)))).send({
            embeds: [new MessageEmbed()
                .setColor(String(s4d.database.get(String('embed_color'))))
                .setDescription(String(s4d.database.get(String('message_add_bot_fr'))))
            ]
        });
        await delay(Number(2) * 1000);
        s4d.client.channels.cache.get('992363181899005992').setName(('🤖・Serveurs : ' + String(s4d.client.guilds.cache.size)))

    });

    s4d.client.on('interactionCreate', async (interaction) => {
        if ((interaction.customId) == 'accept_condition4') {
            if (((interaction.member.user).id) == ((interaction.member.user).id)) {
                dootabase.setFile("./" + 'Donnés' + ".json");
                if (dootabase.get(String(([dootabase.get(String((String((interaction.guild).id) + '-id_server'))), '-', (interaction.member.user).id, '-partner_list'].join('')))) == 'partner') {
                    if (ShsHSjJSjSJSJSGHkkhdjdmns.includes(s4d.client.channels.cache.get(dootabase.get(String((String(dootabase.get(String((String((interaction.guild).id) + '-id_server')))) + '-part_chanel')))).permissionsFor((((s4d.client.guilds.cache.get(dootabase.get(String((String((interaction.guild).id) + '-id_server'))))).members.cache.get('992907384592805968') || await (s4d.client.guilds.cache.get(dootabase.get(String((String((interaction.guild).id) + '-id_server'))))).members.fetch('992907384592805968')).user)).toArray().filter(x => x == 'SEND_MESSAGES')[0])) {
                        if (ShsHSjJSjSJSJSGHkkhdjdmns.includes(s4d.client.channels.cache.get(dootabase.get(String((String((interaction.guild).id) + '-part_chanel')))).permissionsFor((((interaction.guild).members.cache.get('992907384592805968') || await (interaction.guild).members.fetch('992907384592805968')).user)).toArray().filter(x => x == 'SEND_MESSAGES')[0])) {
                            if (dootabase.get(String(((interaction.guild).id))) == 'verif_serv') {
                                if (dootabase.get(String(dootabase.get(String((String((interaction.guild).id) + '-id_server'))))) == 'verif_serv') {
                                    if (!(dootabase.get(String(dootabase.get(String((String((interaction.guild).id) + '-id_server'))))) == 'blacklist_serv')) {
                                        if (!(dootabase.get(String(((interaction.guild).id))) == 'blacklist_serv')) {
                                            if (!(dootabase.get(String(((interaction.member.user).id))) == 'raid')) {
                                                if (!(dootabase.get(String(((interaction.guild).ownerId))) == 'raid')) {
                                                    if (!(dootabase.get(String(((s4d.client.guilds.cache.get(dootabase.get(String((String((interaction.guild).id) + '-id_server'))))).ownerId))) == 'raid')) {
                                                        if (dootabase.get(String((String((interaction.guild).id) + '-owner-id_server'))) == ((interaction.guild).ownerId)) {
                                                            if (dootabase.get(String((String(dootabase.get(String((String((interaction.guild).id) + '-id_server')))) + '-owner-id_server'))) == ((s4d.client.guilds.cache.get(dootabase.get(String((String((interaction.guild).id) + '-id_server'))))).ownerId)) {
                                                                if (dootabase.get(String((String((interaction.guild).id) + '-name_server'))) == ((interaction.guild).name)) {
                                                                    if (!dootabase.has(String(([(interaction.guild).id, '-', dootabase.get(String((String((interaction.guild).id) + '-id_server'))), '-cooldown_part'].join('')))) || dootabase.get(String(([(interaction.guild).id, '-', dootabase.get(String((String((interaction.guild).id) + '-id_server'))), '-cooldown_part'].join('')))) <= (Math.floor(new Date().getTime() / 1000))) {
                                                                        if (!dootabase.has(String((String((interaction.guild).id) + '-number_part'))) || !(dootabase.get(String((String((interaction.guild).id) + '-number_part'))) >= 20)) {
                                                                            if ((dootabase.get(String((String((interaction.guild).id) + '-conditation4_notif_client'))) == '@everyone' || dootabase.get(String((String((interaction.guild).id) + '-conditation4_notif_client'))) == '@here') && (dootabase.get(String((String(dootabase.get(String((String((interaction.guild).id) + '-id_server')))) + '-mention_everyone'))) == 'Désactivées')) {
                                                                                var embed = new Discord.MessageEmbed()
                                                                                embed.setColor(s4d.database.get(String('wrong_color')));
                                                                                embed.setDescription((String(s4d.database.get(String('wrong_emoji'))) + String(s4d.database.get(String('notif_noactive_everyone_message_fr')))));

                                                                                await interaction.update({
                                                                                    embeds: [(embed)],
                                                                                    components: []
                                                                                });
                                                                            } else {
                                                                                dootabase.add(String((String(dootabase.get(String((String((interaction.guild).id) + '-id_server')))) + '-part_count_limite')), parseInt(1));
                                                                                dootabase.set(String(([(interaction.guild).id, '-', dootabase.get(String((String((interaction.guild).id) + '-id_server'))), '-cooldown_part', '', ''].join(''))), ((Math.floor(new Date().getTime() / 1000)) + 604800));
                                                                                var embed = new Discord.MessageEmbed()
                                                                                embed.setDescription('<:Partner_Tick:992734092972003349> **| Partenariat terminé !**');
                                                                                embed.setColor(s4d.database.get(String('good_color')));
                                                                                embed.setFooter((String(s4d.database.get(String('tag_author_footer_fr'))) + String((interaction.member.user).tag)), ((interaction.member.user).displayAvatarURL({
                                                                                    format: "png"
                                                                                })));
                                                                                embed.setTimestamp();

                                                                                await interaction.update({
                                                                                    embeds: [(embed)],
                                                                                    components: []
                                                                                });
                                                                                if (dootabase.get(String((String((interaction.guild).id) + '-conditation4_notif_client'))) == 'Notification Partenariat') {
                                                                                    s4d.client.channels.cache.get(dootabase.get(String((String(dootabase.get(String((String((interaction.guild).id) + '-id_server')))) + '-part_chanel')))).send({
                                                                                        content: String((['> <:Partner_Member:994858030942408704> | **Auteur:** *<@', (interaction.member.user).id, '> / `', (interaction.member.user).tag, '` / `', (interaction.member.user).id, `\`*
                                        > <:Partner_Notification:992727141340954624> | **Mention:** <@&`, dootabase.get(String((String(dootabase.get(String((String((interaction.guild).id) + '-id_server')))) + '-part_notif_rank'))), '>', '\n', '\n', '\n', dootabase.get(String((String((interaction.guild).id) + '-part_pub_server')))].join('')))
                                                                                    });
                                                                                    s4d.client.channels.cache.get(dootabase.get(String((String(dootabase.get(String((String((interaction.guild).id) + '-id_server')))) + '-part_logs_server')))).send({
                                                                                        embeds: [new MessageEmbed()
                                                                                            .setTitle(String((String(s4d.database.get(String('save_emoji'))) + String(s4d.database.get(String('logs_title_part_title_fr'))))))
                                                                                            .setColor(String(s4d.database.get(String('embed_color'))))
                                                                                            .setDescription(String((['> <:Partner_Member:994858030942408704> | **Auteur:** *<@', (interaction.member.user).id, '> / `', (interaction.member.user).tag, '` / `', (interaction.member.user).id, `\`*
                                        > <:Partner_Notification:992727141340954624> | **Mention:** `, dootabase.get(String((String((interaction.guild).id) + '-conditation4_notif_client'))), '', '\n', '\n', '\n', dootabase.get(String((String((interaction.guild).id) + '-part_pub_server')))].join(''))))
                                                                                            .setFooter(String((String(s4d.database.get(String('tag_author_footer_fr'))) + String((interaction.member.user).tag))))
                                                                                        ]
                                                                                    });
                                                                                    if (dootabase.get(String((String((interaction.guild).id) + '-conditation4_notif_server'))) == 'Notification Partenariat') {
                                                                                        s4d.client.channels.cache.get(dootabase.get(String((String((interaction.guild).id) + '-part_chanel')))).send({
                                                                                            content: String((['> <:Partner_Member:994858030942408704> | **Auteur:** *<@', (interaction.member.user).id, '> / `', (interaction.member.user).tag, '` / `', (interaction.member.user).id, `\`*
                                          > <:Partner_Notification:992727141340954624> | **Mention:** <@&`, dootabase.get(String((String((interaction.guild).id) + '-part_notif_rank'))), '>', '\n', '\n', '\n', dootabase.get(String((String(dootabase.get(String((String((interaction.guild).id) + '-id_server')))) + '-part_pub_server')))].join('')))
                                                                                        });
                                                                                        s4d.client.channels.cache.get(dootabase.get(String((String((interaction.guild).id) + '-part_logs_server')))).send({
                                                                                            embeds: [new MessageEmbed()
                                                                                                .setTitle(String((String(s4d.database.get(String('save_emoji'))) + String(s4d.database.get(String('logs_title_part_title_fr'))))))
                                                                                                .setColor(String(s4d.database.get(String('embed_color'))))
                                                                                                .setDescription(String((['> <:Partner_Member:994858030942408704> | **Auteur:** *<@', (interaction.member.user).id, '> / `', (interaction.member.user).tag, '` / `', (interaction.member.user).id, `\`*
                                          > <:Partner_Notification:992727141340954624> | **Mention:** `, dootabase.get(String((String((interaction.guild).id) + '-conditation4_notif_server'))), '', '\n', '\n', '\n', dootabase.get(String((String(dootabase.get(String((String((interaction.guild).id) + '-id_server')))) + '-part_pub_server')))].join(''))))
                                                                                                .setFooter(String((String(s4d.database.get(String('tag_author_footer_fr'))) + String((interaction.member.user).tag))))
                                                                                            ]
                                                                                        });
                                                                                    } else {
                                                                                        s4d.client.channels.cache.get(dootabase.get(String((String((interaction.guild).id) + '-part_chanel')))).send({
                                                                                            content: String((['> <:Partner_Member:994858030942408704> | **Auteur:** *<@', (interaction.member.user).id, '> / `', (interaction.member.user).tag, '` / `', (interaction.member.user).id, `\`*
                                          > <:Partner_Notification:992727141340954624> | **Mention:** `, dootabase.get(String((String((interaction.guild).id) + '-conditation4_notif_server'))), '', '\n', '\n', '\n', dootabase.get(String((String(dootabase.get(String((String((interaction.guild).id) + '-id_server')))) + '-part_pub_server')))].join('')))
                                                                                        });
                                                                                        s4d.client.channels.cache.get(dootabase.get(String((String((interaction.guild).id) + '-part_logs_server')))).send({
                                                                                            embeds: [new MessageEmbed()
                                                                                                .setTitle(String((String(s4d.database.get(String('save_emoji'))) + String(s4d.database.get(String('logs_title_part_title_fr'))))))
                                                                                                .setColor(String(s4d.database.get(String('embed_color'))))
                                                                                                .setDescription(String((['> <:Partner_Member:994858030942408704> | **Auteur:** *<@', (interaction.member.user).id, '> / `', (interaction.member.user).tag, '` / `', (interaction.member.user).id, `\`*
                                          > <:Partner_Notification:992727141340954624> | **Mention:** `, dootabase.get(String((String((interaction.guild).id) + '-conditation4_notif_server'))), '', '\n', '\n', '\n', dootabase.get(String((String(dootabase.get(String((String((interaction.guild).id) + '-id_server')))) + '-part_pub_server')))].join(''))))
                                                                                                .setFooter(String((String(s4d.database.get(String('tag_author_footer_fr'))) + String((interaction.member.user).tag))))
                                                                                            ]
                                                                                        });
                                                                                    }
                                                                                } else {
                                                                                    s4d.client.channels.cache.get(dootabase.get(String((String(dootabase.get(String((String((interaction.guild).id) + '-id_server')))) + '-part_chanel')))).send({
                                                                                        content: String((['> <:Partner_Member:994858030942408704> | **Auteur:** *<@', (interaction.member.user).id, '> / `', (interaction.member.user).tag, '` / `', (interaction.member.user).id, `\`*
                                        > <:Partner_Notification:992727141340954624> | **Mention:** `, dootabase.get(String((String((interaction.guild).id) + '-conditation4_notif_client'))), '', '\n', '\n', '\n', dootabase.get(String((String((interaction.guild).id) + '-part_pub_server')))].join('')))
                                                                                    });
                                                                                    s4d.client.channels.cache.get(dootabase.get(String((String(dootabase.get(String((String((interaction.guild).id) + '-id_server')))) + '-part_logs_server')))).send({
                                                                                        embeds: [new MessageEmbed()
                                                                                            .setTitle(String((String(s4d.database.get(String('save_emoji'))) + String(s4d.database.get(String('logs_title_part_title_fr'))))))
                                                                                            .setColor(String(s4d.database.get(String('embed_color'))))
                                                                                            .setDescription(String((['> <:Partner_Member:994858030942408704> | **Auteur:** *<@', (interaction.member.user).id, '> / `', (interaction.member.user).tag, '` / `', (interaction.member.user).id, `\`*
                                        > <:Partner_Notification:992727141340954624> | **Mention:** `, dootabase.get(String((String((interaction.guild).id) + '-conditation4_notif_client'))), '', '\n', '\n', '\n', dootabase.get(String((String((interaction.guild).id) + '-part_pub_server')))].join(''))))
                                                                                            .setFooter(String((String(s4d.database.get(String('tag_author_footer_fr'))) + String((interaction.member.user).tag))))
                                                                                        ]
                                                                                    });
                                                                                    if (dootabase.get(String((String((interaction.guild).id) + '-conditation4_notif_server'))) == 'Notification Partenariat') {
                                                                                        s4d.client.channels.cache.get(dootabase.get(String((String((interaction.guild).id) + '-part_chanel')))).send({
                                                                                            content: String((['> <:Partner_Member:994858030942408704> | **Auteur:** *<@', (interaction.member.user).id, '> / `', (interaction.member.user).tag, '` / `', (interaction.member.user).id, `\`*
                                          > <:Partner_Notification:992727141340954624> | **Mention:** <@&`, dootabase.get(String((String((interaction.guild).id) + '-part_notif_rank'))), '>', '\n', '\n', '\n', dootabase.get(String((String(dootabase.get(String((String((interaction.guild).id) + '-id_server')))) + '-part_pub_server')))].join('')))
                                                                                        });
                                                                                        s4d.client.channels.cache.get(dootabase.get(String((String((interaction.guild).id) + '-part_logs_server')))).send({
                                                                                            embeds: [new MessageEmbed()
                                                                                                .setTitle(String((String(s4d.database.get(String('save_emoji'))) + String(s4d.database.get(String('logs_title_part_title_fr'))))))
                                                                                                .setColor(String(s4d.database.get(String('embed_color'))))
                                                                                                .setDescription(String((['> <:Partner_Member:994858030942408704> | **Auteur:** *<@', (interaction.member.user).id, '> / `', (interaction.member.user).tag, '` / `', (interaction.member.user).id, `\`*
                                          > <:Partner_Notification:992727141340954624> | **Mention:** `, dootabase.get(String((String((interaction.guild).id) + '-conditation4_notif_server'))), '', '\n', '\n', '\n', dootabase.get(String((String(dootabase.get(String((String((interaction.guild).id) + '-id_server')))) + '-part_pub_server')))].join(''))))
                                                                                                .setFooter(String((String(s4d.database.get(String('tag_author_footer_fr'))) + String((interaction.member.user).tag))))
                                                                                            ]
                                                                                        });
                                                                                    } else {
                                                                                        s4d.client.channels.cache.get(dootabase.get(String((String((interaction.guild).id) + '-part_chanel')))).send({
                                                                                            content: String((['> <:Partner_Member:994858030942408704> | **Auteur:** *<@', (interaction.member.user).id, '> / `', (interaction.member.user).tag, '` / `', (interaction.member.user).id, `\`*
                                          > <:Partner_Notification:992727141340954624> | **Mention:** `, dootabase.get(String((String((interaction.guild).id) + '-conditation4_notif_server'))), '', '\n', '\n', '\n', dootabase.get(String((String(dootabase.get(String((String((interaction.guild).id) + '-id_server')))) + '-part_pub_server')))].join('')))
                                                                                        });
                                                                                        s4d.client.channels.cache.get(dootabase.get(String((String((interaction.guild).id) + '-part_logs_server')))).send({
                                                                                            embeds: [new MessageEmbed()
                                                                                                .setTitle(String((String(s4d.database.get(String('save_emoji'))) + String(s4d.database.get(String('logs_title_part_title_fr'))))))
                                                                                                .setColor(String(s4d.database.get(String('embed_color'))))
                                                                                                .setDescription(String((['> <:Partner_Member:994858030942408704> | **Auteur:** *<@', (interaction.member.user).id, '> / `', (interaction.member.user).tag, '` / `', (interaction.member.user).id, `\`*
                                          > <:Partner_Notification:992727141340954624> | **Mention:** `, dootabase.get(String((String((interaction.guild).id) + '-conditation4_notif_server'))), '', '\n', '\n', '\n', dootabase.get(String((String(dootabase.get(String((String((interaction.guild).id) + '-id_server')))) + '-part_pub_server')))].join(''))))
                                                                                                .setFooter(String((String(s4d.database.get(String('tag_author_footer_fr'))) + String((interaction.member.user).tag))))
                                                                                            ]
                                                                                        });
                                                                                    }
                                                                                }
                                                                            }

                                                                        } else {
                                                                            var embed = new Discord.MessageEmbed()
                                                                            embed.setColor(s4d.database.get(String('wrong_color')));
                                                                            embed.setDescription((String(s4d.database.get(String('wrong_emoji'))) + String(s4d.database.get(String('limite_part_message_fr')))));

                                                                            await interaction.reply({
                                                                                embeds: [(embed)],
                                                                                ephemeral: true,
                                                                                components: []
                                                                            });
                                                                        }
                                                                    } else {
                                                                        var embed = new Discord.MessageEmbed()
                                                                        embed.setColor(s4d.database.get(String('wrong_color')));
                                                                        embed.setDescription((String(s4d.database.get(String('wrong_emoji'))) + String(s4d.database.get(String('time_server_part_limite_reply_message_fr')))));

                                                                        await interaction.reply({
                                                                            embeds: [(embed)],
                                                                            ephemeral: true,
                                                                            components: []
                                                                        });
                                                                    }
                                                                } else {
                                                                    var embed = new Discord.MessageEmbed()
                                                                    embed.setColor(s4d.database.get(String('wrong_color')));
                                                                    embed.setDescription((String(s4d.database.get(String('wrong_emoji'))) + String(s4d.database.get(String('info_change_config_menu_message_fr')))));

                                                                    await interaction.reply({
                                                                        embeds: [(embed)],
                                                                        ephemeral: true,
                                                                        components: []
                                                                    });
                                                                }
                                                            } else {
                                                                var embed = new Discord.MessageEmbed()
                                                                embed.setColor(s4d.database.get(String('wrong_color')));
                                                                embed.setDescription((String(s4d.database.get(String('wrong_emoji'))) + String(s4d.database.get(String('info_change_config_menu_message_fr')))));

                                                                await interaction.reply({
                                                                    embeds: [(embed)],
                                                                    ephemeral: true,
                                                                    components: []
                                                                });
                                                            }
                                                        } else {
                                                            var embed = new Discord.MessageEmbed()
                                                            embed.setColor(s4d.database.get(String('wrong_color')));
                                                            embed.setDescription((String(s4d.database.get(String('wrong_emoji'))) + String(s4d.database.get(String('info_change_config_menu_message_fr')))));

                                                            await interaction.reply({
                                                                embeds: [(embed)],
                                                                ephemeral: true,
                                                                components: []
                                                            });
                                                        }
                                                    } else {
                                                        var embed = new Discord.MessageEmbed()
                                                        embed.setColor(s4d.database.get(String('embed_color')));
                                                        embed.setDescription((String(s4d.database.get(String('blacklist_emoji'))) + String(s4d.database.get(String('server_owner_chanel_message_fr')))));

                                                        await interaction.reply({
                                                            embeds: [(embed)],
                                                            ephemeral: true,
                                                            components: []
                                                        });
                                                    }
                                                } else {
                                                    var embed = new Discord.MessageEmbed()
                                                    embed.setColor(s4d.database.get(String('embed_color')));
                                                    embed.setDescription((String(s4d.database.get(String('blacklist_emoji'))) + String(s4d.database.get(String('server_owner_chanel_message_fr')))));

                                                    await interaction.reply({
                                                        embeds: [(embed)],
                                                        ephemeral: true,
                                                        components: []
                                                    });
                                                }
                                            } else {
                                                var embed = new Discord.MessageEmbed()
                                                embed.setColor(s4d.database.get(String('embed_color')));
                                                embed.setDescription((String(s4d.database.get(String('blacklist_emoji'))) + String(s4d.database.get(String('server_owner_form_message_fr')))));

                                                await interaction.reply({
                                                    embeds: [(embed)],
                                                    ephemeral: true,
                                                    components: []
                                                });
                                            }
                                        } else {
                                            var embed = new Discord.MessageEmbed()
                                            embed.setColor(s4d.database.get(String('embed_color')));
                                            embed.setDescription((String(s4d.database.get(String('blacklist_emoji'))) + String(s4d.database.get(String('server_blacklist_message_fr')))));

                                            await interaction.reply({
                                                embeds: [(embed)],
                                                ephemeral: true,
                                                components: []
                                            });
                                        }
                                    } else {
                                        var embed = new Discord.MessageEmbed()
                                        embed.setColor(s4d.database.get(String('embed_color')));
                                        embed.setDescription((String(s4d.database.get(String('blacklist_emoji'))) + String(s4d.database.get(String('server_blacklist_message_fr')))));

                                        await interaction.reply({
                                            embeds: [(embed)],
                                            ephemeral: true,
                                            components: []
                                        });
                                    }
                                } else {
                                    var embed = new Discord.MessageEmbed()
                                    embed.setColor(s4d.database.get(String('wrong_color')));
                                    embed.setDescription((String(s4d.database.get(String('wrong_emoji'))) + String(s4d.database.get(String('nover_server_message_fr')))));

                                    await interaction.reply({
                                        embeds: [(embed)],
                                        ephemeral: true,
                                        components: []
                                    });
                                }
                            } else {
                                var embed = new Discord.MessageEmbed()
                                embed.setColor(s4d.database.get(String('wrong_color')));
                                embed.setDescription((String(s4d.database.get(String('wrong_emoji'))) + String(s4d.database.get(String('nover_server_message_fr')))));

                                await interaction.reply({
                                    embeds: [(embed)],
                                    ephemeral: true,
                                    components: []
                                });
                            }
                        } else {
                            var embed = new Discord.MessageEmbed()
                            embed.setColor(s4d.database.get(String('wrong_color')));
                            embed.setDescription((String(s4d.database.get(String('wrong_emoji'))) + String(s4d.database.get(String('bot_not_send_message_fr')))));

                            await interaction.reply({
                                embeds: [(embed)],
                                ephemeral: true,
                                components: []
                            });
                        }
                    } else {
                        var embed = new Discord.MessageEmbed()
                        embed.setColor(s4d.database.get(String('wrong_color')));
                        embed.setDescription((String(s4d.database.get(String('wrong_emoji'))) + String(s4d.database.get(String('bot_not_send_message_fr')))));

                        await interaction.reply({
                            embeds: [(embed)],
                            ephemeral: true,
                            components: []
                        });
                    }
                } else {
                    var embed = new Discord.MessageEmbed()
                    embed.setColor(s4d.database.get(String('wrong_color')));
                    embed.setDescription((String(s4d.database.get(String('wrong_emoji'))) + String(s4d.database.get(String('wrong_user_noexist_partner_list_message_fr')))));

                    await interaction.reply({
                        embeds: [(embed)],
                        ephemeral: true,
                        components: []
                    });
                }
            }
        }
        if ((interaction.customId) == 'accept_condition3') {
            if (((interaction.member.user).id) == ((interaction.member.user).id)) {
                dootabase.setFile("./" + 'Donnés' + ".json");
                if (dootabase.get(String(([dootabase.get(String((String((interaction.guild).id) + '-id_server'))), '-', (interaction.member.user).id, '-partner_list'].join('')))) == 'partner') {
                    if (ShsHSjJSjSJSJSGHkkhdjdmns.includes(s4d.client.channels.cache.get(dootabase.get(String((String(dootabase.get(String((String((interaction.guild).id) + '-id_server')))) + '-part_chanel')))).permissionsFor((((s4d.client.guilds.cache.get(dootabase.get(String((String((interaction.guild).id) + '-id_server'))))).members.cache.get('992907384592805968') || await (s4d.client.guilds.cache.get(dootabase.get(String((String((interaction.guild).id) + '-id_server'))))).members.fetch('992907384592805968')).user)).toArray().filter(x => x == 'SEND_MESSAGES')[0])) {
                        if (ShsHSjJSjSJSJSGHkkhdjdmns.includes(s4d.client.channels.cache.get(dootabase.get(String((String((interaction.guild).id) + '-part_chanel')))).permissionsFor((((interaction.guild).members.cache.get('992907384592805968') || await (interaction.guild).members.fetch('992907384592805968')).user)).toArray().filter(x => x == 'SEND_MESSAGES')[0])) {
                            if (dootabase.get(String(((interaction.guild).id))) == 'verif_serv') {
                                if (dootabase.get(String(dootabase.get(String((String((interaction.guild).id) + '-id_server'))))) == 'verif_serv') {
                                    if (!(dootabase.get(String(dootabase.get(String((String((interaction.guild).id) + '-id_server'))))) == 'blacklist_serv')) {
                                        if (!(dootabase.get(String(((interaction.guild).id))) == 'blacklist_serv')) {
                                            if (!(dootabase.get(String(((interaction.member.user).id))) == 'raid')) {
                                                if (!(dootabase.get(String(((interaction.guild).ownerId))) == 'raid')) {
                                                    if (!(dootabase.get(String(((s4d.client.guilds.cache.get(dootabase.get(String((String((interaction.guild).id) + '-id_server'))))).ownerId))) == 'raid')) {
                                                        if (dootabase.get(String((String((interaction.guild).id) + '-owner-id_server'))) == ((interaction.guild).ownerId)) {
                                                            if (dootabase.get(String((String(dootabase.get(String((String((interaction.guild).id) + '-id_server')))) + '-owner-id_server'))) == ((s4d.client.guilds.cache.get(dootabase.get(String((String((interaction.guild).id) + '-id_server'))))).ownerId)) {
                                                                if (dootabase.get(String((String((interaction.guild).id) + '-name_server'))) == ((interaction.guild).name)) {
                                                                    if (!dootabase.has(String(([(interaction.guild).id, '-', dootabase.get(String((String((interaction.guild).id) + '-id_server'))), '-cooldown_part'].join('')))) || dootabase.get(String(([(interaction.guild).id, '-', dootabase.get(String((String((interaction.guild).id) + '-id_server'))), '-cooldown_part'].join('')))) <= (Math.floor(new Date().getTime() / 1000))) {
                                                                        if (!dootabase.has(String((String((interaction.guild).id) + '-number_part'))) || !(dootabase.get(String((String((interaction.guild).id) + '-number_part'))) >= 20)) {
                                                                            if ((dootabase.get(String((String((interaction.guild).id) + '-conditation3_notif_client'))) == '@everyone' || dootabase.get(String((String((interaction.guild).id) + '-conditation3_notif_client'))) == '@here') && (dootabase.get(String((String(dootabase.get(String((String((interaction.guild).id) + '-id_server')))) + '-mention_everyone'))) == 'Désactivées')) {
                                                                                var embed = new Discord.MessageEmbed()
                                                                                embed.setColor(s4d.database.get(String('wrong_color')));
                                                                                embed.setDescription((String(s4d.database.get(String('wrong_emoji'))) + String(s4d.database.get(String('notif_noactive_everyone_message_fr')))));

                                                                                await interaction.update({
                                                                                    embeds: [(embed)],
                                                                                    components: []
                                                                                });
                                                                            } else {
                                                                                dootabase.add(String((String(dootabase.get(String((String((interaction.guild).id) + '-id_server')))) + '-part_count_limite')), parseInt(1));
                                                                                dootabase.set(String(([(interaction.guild).id, '-', dootabase.get(String((String((interaction.guild).id) + '-id_server'))), '-cooldown_part', '', ''].join(''))), ((Math.floor(new Date().getTime() / 1000)) + 604800));
                                                                                var embed = new Discord.MessageEmbed()
                                                                                embed.setDescription('<:Partner_Tick:992734092972003349> **| Partenariat terminé !**');
                                                                                embed.setColor(s4d.database.get(String('good_color')));
                                                                                embed.setFooter((String(s4d.database.get(String('tag_author_footer_fr'))) + String((interaction.member.user).tag)), ((interaction.member.user).displayAvatarURL({
                                                                                    format: "png"
                                                                                })));
                                                                                embed.setTimestamp();

                                                                                await interaction.update({
                                                                                    embeds: [(embed)],
                                                                                    components: []
                                                                                });
                                                                                if (dootabase.get(String((String((interaction.guild).id) + '-conditation3_notif_client'))) == 'Notification Partenariat') {
                                                                                    s4d.client.channels.cache.get(dootabase.get(String((String(dootabase.get(String((String((interaction.guild).id) + '-id_server')))) + '-part_chanel')))).send({
                                                                                        content: String((['> <:Partner_Member:994858030942408704> | **Auteur:** *<@', (interaction.member.user).id, '> / `', (interaction.member.user).tag, '` / `', (interaction.member.user).id, `\`*
                                        > <:Partner_Notification:992727141340954624> | **Mention:** <@&`, dootabase.get(String((String(dootabase.get(String((String((interaction.guild).id) + '-id_server')))) + '-part_notif_rank'))), '>', '\n', '\n', '\n', dootabase.get(String((String((interaction.guild).id) + '-part_pub_server')))].join('')))
                                                                                    });
                                                                                    s4d.client.channels.cache.get(dootabase.get(String((String(dootabase.get(String((String((interaction.guild).id) + '-id_server')))) + '-part_logs_server')))).send({
                                                                                        embeds: [new MessageEmbed()
                                                                                            .setTitle(String((String(s4d.database.get(String('save_emoji'))) + String(s4d.database.get(String('logs_title_part_title_fr'))))))
                                                                                            .setColor(String(s4d.database.get(String('embed_color'))))
                                                                                            .setDescription(String((['> <:Partner_Member:994858030942408704> | **Auteur:** *<@', (interaction.member.user).id, '> / `', (interaction.member.user).tag, '` / `', (interaction.member.user).id, `\`*
                                        > <:Partner_Notification:992727141340954624> | **Mention:** `, dootabase.get(String((String((interaction.guild).id) + '-conditation3_notif_client'))), '', '\n', '\n', '\n', dootabase.get(String((String((interaction.guild).id) + '-part_pub_server')))].join(''))))
                                                                                            .setFooter(String((String(s4d.database.get(String('tag_author_footer_fr'))) + String((interaction.member.user).tag))))
                                                                                        ]
                                                                                    });
                                                                                    if (dootabase.get(String((String((interaction.guild).id) + '-conditation3_notif_server'))) == 'Notification Partenariat') {
                                                                                        s4d.client.channels.cache.get(dootabase.get(String((String((interaction.guild).id) + '-part_chanel')))).send({
                                                                                            content: String((['> <:Partner_Member:994858030942408704> | **Auteur:** *<@', (interaction.member.user).id, '> / `', (interaction.member.user).tag, '` / `', (interaction.member.user).id, `\`*
                                          > <:Partner_Notification:992727141340954624> | **Mention:** <@&`, dootabase.get(String((String((interaction.guild).id) + '-part_notif_rank'))), '>', '\n', '\n', '\n', dootabase.get(String((String(dootabase.get(String((String((interaction.guild).id) + '-id_server')))) + '-part_pub_server')))].join('')))
                                                                                        });
                                                                                        s4d.client.channels.cache.get(dootabase.get(String((String((interaction.guild).id) + '-part_logs_server')))).send({
                                                                                            embeds: [new MessageEmbed()
                                                                                                .setTitle(String((String(s4d.database.get(String('save_emoji'))) + String(s4d.database.get(String('logs_title_part_title_fr'))))))
                                                                                                .setColor(String(s4d.database.get(String('embed_color'))))
                                                                                                .setDescription(String((['> <:Partner_Member:994858030942408704> | **Auteur:** *<@', (interaction.member.user).id, '> / `', (interaction.member.user).tag, '` / `', (interaction.member.user).id, `\`*
                                          > <:Partner_Notification:992727141340954624> | **Mention:** `, dootabase.get(String((String((interaction.guild).id) + '-conditation3_notif_server'))), '', '\n', '\n', '\n', dootabase.get(String((String(dootabase.get(String((String((interaction.guild).id) + '-id_server')))) + '-part_pub_server')))].join(''))))
                                                                                                .setFooter(String((String(s4d.database.get(String('tag_author_footer_fr'))) + String((interaction.member.user).tag))))
                                                                                            ]
                                                                                        });
                                                                                    } else {
                                                                                        s4d.client.channels.cache.get(dootabase.get(String((String((interaction.guild).id) + '-part_chanel')))).send({
                                                                                            content: String((['> <:Partner_Member:994858030942408704> | **Auteur:** *<@', (interaction.member.user).id, '> / `', (interaction.member.user).tag, '` / `', (interaction.member.user).id, `\`*
                                          > <:Partner_Notification:992727141340954624> | **Mention:** `, dootabase.get(String((String((interaction.guild).id) + '-conditation3_notif_server'))), '', '\n', '\n', '\n', dootabase.get(String((String(dootabase.get(String((String((interaction.guild).id) + '-id_server')))) + '-part_pub_server')))].join('')))
                                                                                        });
                                                                                        s4d.client.channels.cache.get(dootabase.get(String((String((interaction.guild).id) + '-part_logs_server')))).send({
                                                                                            embeds: [new MessageEmbed()
                                                                                                .setTitle(String((String(s4d.database.get(String('save_emoji'))) + String(s4d.database.get(String('logs_title_part_title_fr'))))))
                                                                                                .setColor(String(s4d.database.get(String('embed_color'))))
                                                                                                .setDescription(String((['> <:Partner_Member:994858030942408704> | **Auteur:** *<@', (interaction.member.user).id, '> / `', (interaction.member.user).tag, '` / `', (interaction.member.user).id, `\`*
                                          > <:Partner_Notification:992727141340954624> | **Mention:** `, dootabase.get(String((String((interaction.guild).id) + '-conditation3_notif_server'))), '', '\n', '\n', '\n', dootabase.get(String((String(dootabase.get(String((String((interaction.guild).id) + '-id_server')))) + '-part_pub_server')))].join(''))))
                                                                                                .setFooter(String((String(s4d.database.get(String('tag_author_footer_fr'))) + String((interaction.member.user).tag))))
                                                                                            ]
                                                                                        });
                                                                                    }
                                                                                } else {
                                                                                    s4d.client.channels.cache.get(dootabase.get(String((String(dootabase.get(String((String((interaction.guild).id) + '-id_server')))) + '-part_chanel')))).send({
                                                                                        content: String((['> <:Partner_Member:994858030942408704> | **Auteur:** *<@', (interaction.member.user).id, '> / `', (interaction.member.user).tag, '` / `', (interaction.member.user).id, `\`*
                                        > <:Partner_Notification:992727141340954624> | **Mention:** `, dootabase.get(String((String((interaction.guild).id) + '-conditation3_notif_client'))), '', '\n', '\n', '\n', dootabase.get(String((String((interaction.guild).id) + '-part_pub_server')))].join('')))
                                                                                    });
                                                                                    s4d.client.channels.cache.get(dootabase.get(String((String(dootabase.get(String((String((interaction.guild).id) + '-id_server')))) + '-part_logs_server')))).send({
                                                                                        embeds: [new MessageEmbed()
                                                                                            .setTitle(String((String(s4d.database.get(String('save_emoji'))) + String(s4d.database.get(String('logs_title_part_title_fr'))))))
                                                                                            .setColor(String(s4d.database.get(String('embed_color'))))
                                                                                            .setDescription(String((['> <:Partner_Member:994858030942408704> | **Auteur:** *<@', (interaction.member.user).id, '> / `', (interaction.member.user).tag, '` / `', (interaction.member.user).id, `\`*
                                        > <:Partner_Notification:992727141340954624> | **Mention:** `, dootabase.get(String((String((interaction.guild).id) + '-conditation3_notif_client'))), '', '\n', '\n', '\n', dootabase.get(String((String((interaction.guild).id) + '-part_pub_server')))].join(''))))
                                                                                            .setFooter(String((String(s4d.database.get(String('tag_author_footer_fr'))) + String((interaction.member.user).tag))))
                                                                                        ]
                                                                                    });
                                                                                    if (dootabase.get(String((String((interaction.guild).id) + '-conditation3_notif_server'))) == 'Notification Partenariat') {
                                                                                        s4d.client.channels.cache.get(dootabase.get(String((String((interaction.guild).id) + '-part_chanel')))).send({
                                                                                            content: String((['> <:Partner_Member:994858030942408704> | **Auteur:** *<@', (interaction.member.user).id, '> / `', (interaction.member.user).tag, '` / `', (interaction.member.user).id, `\`*
                                          > <:Partner_Notification:992727141340954624> | **Mention:** <@&`, dootabase.get(String((String((interaction.guild).id) + '-part_notif_rank'))), '>', '\n', '\n', '\n', dootabase.get(String((String(dootabase.get(String((String((interaction.guild).id) + '-id_server')))) + '-part_pub_server')))].join('')))
                                                                                        });
                                                                                        s4d.client.channels.cache.get(dootabase.get(String((String((interaction.guild).id) + '-part_logs_server')))).send({
                                                                                            embeds: [new MessageEmbed()
                                                                                                .setTitle(String((String(s4d.database.get(String('save_emoji'))) + String(s4d.database.get(String('logs_title_part_title_fr'))))))
                                                                                                .setColor(String(s4d.database.get(String('embed_color'))))
                                                                                                .setDescription(String((['> <:Partner_Member:994858030942408704> | **Auteur:** *<@', (interaction.member.user).id, '> / `', (interaction.member.user).tag, '` / `', (interaction.member.user).id, `\`*
                                          > <:Partner_Notification:992727141340954624> | **Mention:** `, dootabase.get(String((String((interaction.guild).id) + '-conditation3_notif_server'))), '', '\n', '\n', '\n', dootabase.get(String((String(dootabase.get(String((String((interaction.guild).id) + '-id_server')))) + '-part_pub_server')))].join(''))))
                                                                                                .setFooter(String((String(s4d.database.get(String('tag_author_footer_fr'))) + String((interaction.member.user).tag))))
                                                                                            ]
                                                                                        });
                                                                                    } else {
                                                                                        s4d.client.channels.cache.get(dootabase.get(String((String((interaction.guild).id) + '-part_chanel')))).send({
                                                                                            content: String((['> <:Partner_Member:994858030942408704> | **Auteur:** *<@', (interaction.member.user).id, '> / `', (interaction.member.user).tag, '` / `', (interaction.member.user).id, `\`*
                                          > <:Partner_Notification:992727141340954624> | **Mention:** `, dootabase.get(String((String((interaction.guild).id) + '-conditation3_notif_server'))), '', '\n', '\n', '\n', dootabase.get(String((String(dootabase.get(String((String((interaction.guild).id) + '-id_server')))) + '-part_pub_server')))].join('')))
                                                                                        });
                                                                                        s4d.client.channels.cache.get(dootabase.get(String((String((interaction.guild).id) + '-part_logs_server')))).send({
                                                                                            embeds: [new MessageEmbed()
                                                                                                .setTitle(String((String(s4d.database.get(String('save_emoji'))) + String(s4d.database.get(String('logs_title_part_title_fr'))))))
                                                                                                .setColor(String(s4d.database.get(String('embed_color'))))
                                                                                                .setDescription(String((['> <:Partner_Member:994858030942408704> | **Auteur:** *<@', (interaction.member.user).id, '> / `', (interaction.member.user).tag, '` / `', (interaction.member.user).id, `\`*
                                          > <:Partner_Notification:992727141340954624> | **Mention:** `, dootabase.get(String((String((interaction.guild).id) + '-conditation3_notif_server'))), '', '\n', '\n', '\n', dootabase.get(String((String(dootabase.get(String((String((interaction.guild).id) + '-id_server')))) + '-part_pub_server')))].join(''))))
                                                                                                .setFooter(String((String(s4d.database.get(String('tag_author_footer_fr'))) + String((interaction.member.user).tag))))
                                                                                            ]
                                                                                        });
                                                                                    }
                                                                                }
                                                                            }

                                                                        } else {
                                                                            var embed = new Discord.MessageEmbed()
                                                                            embed.setColor(s4d.database.get(String('wrong_color')));
                                                                            embed.setDescription((String(s4d.database.get(String('wrong_emoji'))) + String(s4d.database.get(String('limite_part_message_fr')))));

                                                                            await interaction.reply({
                                                                                embeds: [(embed)],
                                                                                ephemeral: true,
                                                                                components: []
                                                                            });
                                                                        }
                                                                    } else {
                                                                        var embed = new Discord.MessageEmbed()
                                                                        embed.setColor(s4d.database.get(String('wrong_color')));
                                                                        embed.setDescription((String(s4d.database.get(String('wrong_emoji'))) + String(s4d.database.get(String('time_server_part_limite_reply_message_fr')))));

                                                                        await interaction.reply({
                                                                            embeds: [(embed)],
                                                                            ephemeral: true,
                                                                            components: []
                                                                        });
                                                                    }
                                                                } else {
                                                                    var embed = new Discord.MessageEmbed()
                                                                    embed.setColor(s4d.database.get(String('wrong_color')));
                                                                    embed.setDescription((String(s4d.database.get(String('wrong_emoji'))) + String(s4d.database.get(String('info_change_config_menu_message_fr')))));

                                                                    await interaction.reply({
                                                                        embeds: [(embed)],
                                                                        ephemeral: true,
                                                                        components: []
                                                                    });
                                                                }
                                                            } else {
                                                                var embed = new Discord.MessageEmbed()
                                                                embed.setColor(s4d.database.get(String('wrong_color')));
                                                                embed.setDescription((String(s4d.database.get(String('wrong_emoji'))) + String(s4d.database.get(String('info_change_config_menu_message_fr')))));

                                                                await interaction.reply({
                                                                    embeds: [(embed)],
                                                                    ephemeral: true,
                                                                    components: []
                                                                });
                                                            }
                                                        } else {
                                                            var embed = new Discord.MessageEmbed()
                                                            embed.setColor(s4d.database.get(String('wrong_color')));
                                                            embed.setDescription((String(s4d.database.get(String('wrong_emoji'))) + String(s4d.database.get(String('info_change_config_menu_message_fr')))));

                                                            await interaction.reply({
                                                                embeds: [(embed)],
                                                                ephemeral: true,
                                                                components: []
                                                            });
                                                        }
                                                    } else {
                                                        var embed = new Discord.MessageEmbed()
                                                        embed.setColor(s4d.database.get(String('embed_color')));
                                                        embed.setDescription((String(s4d.database.get(String('blacklist_emoji'))) + String(s4d.database.get(String('server_owner_chanel_message_fr')))));

                                                        await interaction.reply({
                                                            embeds: [(embed)],
                                                            ephemeral: true,
                                                            components: []
                                                        });
                                                    }
                                                } else {
                                                    var embed = new Discord.MessageEmbed()
                                                    embed.setColor(s4d.database.get(String('embed_color')));
                                                    embed.setDescription((String(s4d.database.get(String('blacklist_emoji'))) + String(s4d.database.get(String('server_owner_chanel_message_fr')))));

                                                    await interaction.reply({
                                                        embeds: [(embed)],
                                                        ephemeral: true,
                                                        components: []
                                                    });
                                                }
                                            } else {
                                                var embed = new Discord.MessageEmbed()
                                                embed.setColor(s4d.database.get(String('embed_color')));
                                                embed.setDescription((String(s4d.database.get(String('blacklist_emoji'))) + String(s4d.database.get(String('server_owner_form_message_fr')))));

                                                await interaction.reply({
                                                    embeds: [(embed)],
                                                    ephemeral: true,
                                                    components: []
                                                });
                                            }
                                        } else {
                                            var embed = new Discord.MessageEmbed()
                                            embed.setColor(s4d.database.get(String('embed_color')));
                                            embed.setDescription((String(s4d.database.get(String('blacklist_emoji'))) + String(s4d.database.get(String('server_blacklist_message_fr')))));

                                            await interaction.reply({
                                                embeds: [(embed)],
                                                ephemeral: true,
                                                components: []
                                            });
                                        }
                                    } else {
                                        var embed = new Discord.MessageEmbed()
                                        embed.setColor(s4d.database.get(String('embed_color')));
                                        embed.setDescription((String(s4d.database.get(String('blacklist_emoji'))) + String(s4d.database.get(String('server_blacklist_message_fr')))));

                                        await interaction.reply({
                                            embeds: [(embed)],
                                            ephemeral: true,
                                            components: []
                                        });
                                    }
                                } else {
                                    var embed = new Discord.MessageEmbed()
                                    embed.setColor(s4d.database.get(String('wrong_color')));
                                    embed.setDescription((String(s4d.database.get(String('wrong_emoji'))) + String(s4d.database.get(String('nover_server_message_fr')))));

                                    await interaction.reply({
                                        embeds: [(embed)],
                                        ephemeral: true,
                                        components: []
                                    });
                                }
                            } else {
                                var embed = new Discord.MessageEmbed()
                                embed.setColor(s4d.database.get(String('wrong_color')));
                                embed.setDescription((String(s4d.database.get(String('wrong_emoji'))) + String(s4d.database.get(String('nover_server_message_fr')))));

                                await interaction.reply({
                                    embeds: [(embed)],
                                    ephemeral: true,
                                    components: []
                                });
                            }
                        } else {
                            var embed = new Discord.MessageEmbed()
                            embed.setColor(s4d.database.get(String('wrong_color')));
                            embed.setDescription((String(s4d.database.get(String('wrong_emoji'))) + String(s4d.database.get(String('bot_not_send_message_fr')))));

                            await interaction.reply({
                                embeds: [(embed)],
                                ephemeral: true,
                                components: []
                            });
                        }
                    } else {
                        var embed = new Discord.MessageEmbed()
                        embed.setColor(s4d.database.get(String('wrong_color')));
                        embed.setDescription((String(s4d.database.get(String('wrong_emoji'))) + String(s4d.database.get(String('bot_not_send_message_fr')))));

                        await interaction.reply({
                            embeds: [(embed)],
                            ephemeral: true,
                            components: []
                        });
                    }
                } else {
                    var embed = new Discord.MessageEmbed()
                    embed.setColor(s4d.database.get(String('wrong_color')));
                    embed.setDescription((String(s4d.database.get(String('wrong_emoji'))) + String(s4d.database.get(String('wrong_user_noexist_partner_list_message_fr')))));

                    await interaction.reply({
                        embeds: [(embed)],
                        ephemeral: true,
                        components: []
                    });
                }
            }
        }
        if ((interaction.customId) == 'accept_condition2') {
            if (((interaction.member.user).id) == ((interaction.member.user).id)) {
                dootabase.setFile("./" + 'Donnés' + ".json");
                if (dootabase.get(String(([dootabase.get(String((String((interaction.guild).id) + '-id_server'))), '-', (interaction.member.user).id, '-partner_list'].join('')))) == 'partner') {
                    if (ShsHSjJSjSJSJSGHkkhdjdmns.includes(s4d.client.channels.cache.get(dootabase.get(String((String(dootabase.get(String((String((interaction.guild).id) + '-id_server')))) + '-part_chanel')))).permissionsFor((((s4d.client.guilds.cache.get(dootabase.get(String((String((interaction.guild).id) + '-id_server'))))).members.cache.get('992907384592805968') || await (s4d.client.guilds.cache.get(dootabase.get(String((String((interaction.guild).id) + '-id_server'))))).members.fetch('992907384592805968')).user)).toArray().filter(x => x == 'SEND_MESSAGES')[0])) {
                        if (ShsHSjJSjSJSJSGHkkhdjdmns.includes(s4d.client.channels.cache.get(dootabase.get(String((String((interaction.guild).id) + '-part_chanel')))).permissionsFor((((interaction.guild).members.cache.get('992907384592805968') || await (interaction.guild).members.fetch('992907384592805968')).user)).toArray().filter(x => x == 'SEND_MESSAGES')[0])) {
                            if (dootabase.get(String(((interaction.guild).id))) == 'verif_serv') {
                                if (dootabase.get(String(dootabase.get(String((String((interaction.guild).id) + '-id_server'))))) == 'verif_serv') {
                                    if (!(dootabase.get(String(dootabase.get(String((String((interaction.guild).id) + '-id_server'))))) == 'blacklist_serv')) {
                                        if (!(dootabase.get(String(((interaction.guild).id))) == 'blacklist_serv')) {
                                            if (!(dootabase.get(String(((interaction.member.user).id))) == 'raid')) {
                                                if (!(dootabase.get(String(((interaction.guild).ownerId))) == 'raid')) {
                                                    if (!(dootabase.get(String(((s4d.client.guilds.cache.get(dootabase.get(String((String((interaction.guild).id) + '-id_server'))))).ownerId))) == 'raid')) {
                                                        if (dootabase.get(String((String((interaction.guild).id) + '-owner-id_server'))) == ((interaction.guild).ownerId)) {
                                                            if (dootabase.get(String((String(dootabase.get(String((String((interaction.guild).id) + '-id_server')))) + '-owner-id_server'))) == ((s4d.client.guilds.cache.get(dootabase.get(String((String((interaction.guild).id) + '-id_server'))))).ownerId)) {
                                                                if (dootabase.get(String((String((interaction.guild).id) + '-name_server'))) == ((interaction.guild).name)) {
                                                                    if (!dootabase.has(String(([(interaction.guild).id, '-', dootabase.get(String((String((interaction.guild).id) + '-id_server'))), '-cooldown_part'].join('')))) || dootabase.get(String(([(interaction.guild).id, '-', dootabase.get(String((String((interaction.guild).id) + '-id_server'))), '-cooldown_part'].join('')))) <= (Math.floor(new Date().getTime() / 1000))) {
                                                                        if (!dootabase.has(String((String((interaction.guild).id) + '-number_part'))) || !(dootabase.get(String((String((interaction.guild).id) + '-number_part'))) >= 20)) {
                                                                            if ((dootabase.get(String((String((interaction.guild).id) + '-conditation2_notif_client'))) == '@everyone' || dootabase.get(String((String((interaction.guild).id) + '-conditation2_notif_client'))) == '@here') && (dootabase.get(String((String(dootabase.get(String((String((interaction.guild).id) + '-id_server')))) + '-mention_everyone'))) == 'Désactivées')) {
                                                                                var embed = new Discord.MessageEmbed()
                                                                                embed.setColor(s4d.database.get(String('wrong_color')));
                                                                                embed.setDescription((String(s4d.database.get(String('wrong_emoji'))) + String(s4d.database.get(String('notif_noactive_everyone_message_fr')))));

                                                                                await interaction.update({
                                                                                    embeds: [(embed)],
                                                                                    components: []
                                                                                });
                                                                            } else {
                                                                                dootabase.add(String((String(dootabase.get(String((String((interaction.guild).id) + '-id_server')))) + '-part_count_limite')), parseInt(1));
                                                                                dootabase.set(String(([(interaction.guild).id, '-', dootabase.get(String((String((interaction.guild).id) + '-id_server'))), '-cooldown_part', '', ''].join(''))), ((Math.floor(new Date().getTime() / 1000)) + 604800));
                                                                                var embed = new Discord.MessageEmbed()
                                                                                embed.setDescription('<:Partner_Tick:992734092972003349> **| Partenariat terminé !**');
                                                                                embed.setColor(s4d.database.get(String('good_color')));
                                                                                embed.setFooter((String(s4d.database.get(String('tag_author_footer_fr'))) + String((interaction.member.user).tag)), ((interaction.member.user).displayAvatarURL({
                                                                                    format: "png"
                                                                                })));
                                                                                embed.setTimestamp();

                                                                                await interaction.update({
                                                                                    embeds: [(embed)],
                                                                                    components: []
                                                                                });
                                                                                if (dootabase.get(String((String((interaction.guild).id) + '-conditation2_notif_client'))) == 'Notification Partenariat') {
                                                                                    s4d.client.channels.cache.get(dootabase.get(String((String(dootabase.get(String((String((interaction.guild).id) + '-id_server')))) + '-part_chanel')))).send({
                                                                                        content: String((['> <:Partner_Member:994858030942408704> | **Auteur:** *<@', (interaction.member.user).id, '> / `', (interaction.member.user).tag, '` / `', (interaction.member.user).id, `\`*
                                        > <:Partner_Notification:992727141340954624> | **Mention:** <@&`, dootabase.get(String((String(dootabase.get(String((String((interaction.guild).id) + '-id_server')))) + '-part_notif_rank'))), '>', '\n', '\n', '\n', dootabase.get(String((String((interaction.guild).id) + '-part_pub_server')))].join('')))
                                                                                    });
                                                                                    s4d.client.channels.cache.get(dootabase.get(String((String(dootabase.get(String((String((interaction.guild).id) + '-id_server')))) + '-part_logs_server')))).send({
                                                                                        embeds: [new MessageEmbed()
                                                                                            .setTitle(String((String(s4d.database.get(String('save_emoji'))) + String(s4d.database.get(String('logs_title_part_title_fr'))))))
                                                                                            .setColor(String(s4d.database.get(String('embed_color'))))
                                                                                            .setDescription(String((['> <:Partner_Member:994858030942408704> | **Auteur:** *<@', (interaction.member.user).id, '> / `', (interaction.member.user).tag, '` / `', (interaction.member.user).id, `\`*
                                        > <:Partner_Notification:992727141340954624> | **Mention:** `, dootabase.get(String((String((interaction.guild).id) + '-conditation2_notif_client'))), '', '\n', '\n', '\n', dootabase.get(String((String((interaction.guild).id) + '-part_pub_server')))].join(''))))
                                                                                            .setFooter(String((String(s4d.database.get(String('tag_author_footer_fr'))) + String((interaction.member.user).tag))))
                                                                                        ]
                                                                                    });
                                                                                    if (dootabase.get(String((String((interaction.guild).id) + '-conditation2_notif_server'))) == 'Notification Partenariat') {
                                                                                        s4d.client.channels.cache.get(dootabase.get(String((String((interaction.guild).id) + '-part_chanel')))).send({
                                                                                            content: String((['> <:Partner_Member:994858030942408704> | **Auteur:** *<@', (interaction.member.user).id, '> / `', (interaction.member.user).tag, '` / `', (interaction.member.user).id, `\`*
                                          > <:Partner_Notification:992727141340954624> | **Mention:** <@&`, dootabase.get(String((String((interaction.guild).id) + '-part_notif_rank'))), '>', '\n', '\n', '\n', dootabase.get(String((String(dootabase.get(String((String((interaction.guild).id) + '-id_server')))) + '-part_pub_server')))].join('')))
                                                                                        });
                                                                                        s4d.client.channels.cache.get(dootabase.get(String((String((interaction.guild).id) + '-part_logs_server')))).send({
                                                                                            embeds: [new MessageEmbed()
                                                                                                .setTitle(String((String(s4d.database.get(String('save_emoji'))) + String(s4d.database.get(String('logs_title_part_title_fr'))))))
                                                                                                .setColor(String(s4d.database.get(String('embed_color'))))
                                                                                                .setDescription(String((['> <:Partner_Member:994858030942408704> | **Auteur:** *<@', (interaction.member.user).id, '> / `', (interaction.member.user).tag, '` / `', (interaction.member.user).id, `\`*
                                          > <:Partner_Notification:992727141340954624> | **Mention:** `, dootabase.get(String((String((interaction.guild).id) + '-conditation2_notif_server'))), '', '\n', '\n', '\n', dootabase.get(String((String(dootabase.get(String((String((interaction.guild).id) + '-id_server')))) + '-part_pub_server')))].join(''))))
                                                                                                .setFooter(String((String(s4d.database.get(String('tag_author_footer_fr'))) + String((interaction.member.user).tag))))
                                                                                            ]
                                                                                        });
                                                                                    } else {
                                                                                        s4d.client.channels.cache.get(dootabase.get(String((String((interaction.guild).id) + '-part_chanel')))).send({
                                                                                            content: String((['> <:Partner_Member:994858030942408704> | **Auteur:** *<@', (interaction.member.user).id, '> / `', (interaction.member.user).tag, '` / `', (interaction.member.user).id, `\`*
                                          > <:Partner_Notification:992727141340954624> | **Mention:** `, dootabase.get(String((String((interaction.guild).id) + '-conditation2_notif_server'))), '', '\n', '\n', '\n', dootabase.get(String((String(dootabase.get(String((String((interaction.guild).id) + '-id_server')))) + '-part_pub_server')))].join('')))
                                                                                        });
                                                                                        s4d.client.channels.cache.get(dootabase.get(String((String((interaction.guild).id) + '-part_logs_server')))).send({
                                                                                            embeds: [new MessageEmbed()
                                                                                                .setTitle(String((String(s4d.database.get(String('save_emoji'))) + String(s4d.database.get(String('logs_title_part_title_fr'))))))
                                                                                                .setColor(String(s4d.database.get(String('embed_color'))))
                                                                                                .setDescription(String((['> <:Partner_Member:994858030942408704> | **Auteur:** *<@', (interaction.member.user).id, '> / `', (interaction.member.user).tag, '` / `', (interaction.member.user).id, `\`*
                                          > <:Partner_Notification:992727141340954624> | **Mention:** `, dootabase.get(String((String((interaction.guild).id) + '-conditation2_notif_server'))), '', '\n', '\n', '\n', dootabase.get(String((String(dootabase.get(String((String((interaction.guild).id) + '-id_server')))) + '-part_pub_server')))].join(''))))
                                                                                                .setFooter(String((String(s4d.database.get(String('tag_author_footer_fr'))) + String((interaction.member.user).tag))))
                                                                                            ]
                                                                                        });
                                                                                    }
                                                                                } else {
                                                                                    s4d.client.channels.cache.get(dootabase.get(String((String(dootabase.get(String((String((interaction.guild).id) + '-id_server')))) + '-part_chanel')))).send({
                                                                                        content: String((['> <:Partner_Member:994858030942408704> | **Auteur:** *<@', (interaction.member.user).id, '> / `', (interaction.member.user).tag, '` / `', (interaction.member.user).id, `\`*
                                        > <:Partner_Notification:992727141340954624> | **Mention:** `, dootabase.get(String((String((interaction.guild).id) + '-conditation2_notif_client'))), '', '\n', '\n', '\n', dootabase.get(String((String((interaction.guild).id) + '-part_pub_server')))].join('')))
                                                                                    });
                                                                                    s4d.client.channels.cache.get(dootabase.get(String((String(dootabase.get(String((String((interaction.guild).id) + '-id_server')))) + '-part_logs_server')))).send({
                                                                                        embeds: [new MessageEmbed()
                                                                                            .setTitle(String((String(s4d.database.get(String('save_emoji'))) + String(s4d.database.get(String('logs_title_part_title_fr'))))))
                                                                                            .setColor(String(s4d.database.get(String('embed_color'))))
                                                                                            .setDescription(String((['> <:Partner_Member:994858030942408704> | **Auteur:** *<@', (interaction.member.user).id, '> / `', (interaction.member.user).tag, '` / `', (interaction.member.user).id, `\`*
                                        > <:Partner_Notification:992727141340954624> | **Mention:** `, dootabase.get(String((String((interaction.guild).id) + '-conditation2_notif_client'))), '', '\n', '\n', '\n', dootabase.get(String((String((interaction.guild).id) + '-part_pub_server')))].join(''))))
                                                                                            .setFooter(String((String(s4d.database.get(String('tag_author_footer_fr'))) + String((interaction.member.user).tag))))
                                                                                        ]
                                                                                    });
                                                                                    if (dootabase.get(String((String((interaction.guild).id) + '-conditation2_notif_server'))) == 'Notification Partenariat') {
                                                                                        s4d.client.channels.cache.get(dootabase.get(String((String((interaction.guild).id) + '-part_chanel')))).send({
                                                                                            content: String((['> <:Partner_Member:994858030942408704> | **Auteur:** *<@', (interaction.member.user).id, '> / `', (interaction.member.user).tag, '` / `', (interaction.member.user).id, `\`*
                                          > <:Partner_Notification:992727141340954624> | **Mention:** <@&`, dootabase.get(String((String((interaction.guild).id) + '-part_notif_rank'))), '>', '\n', '\n', '\n', dootabase.get(String((String(dootabase.get(String((String((interaction.guild).id) + '-id_server')))) + '-part_pub_server')))].join('')))
                                                                                        });
                                                                                        s4d.client.channels.cache.get(dootabase.get(String((String((interaction.guild).id) + '-part_logs_server')))).send({
                                                                                            embeds: [new MessageEmbed()
                                                                                                .setTitle(String((String(s4d.database.get(String('save_emoji'))) + String(s4d.database.get(String('logs_title_part_title_fr'))))))
                                                                                                .setColor(String(s4d.database.get(String('embed_color'))))
                                                                                                .setDescription(String((['> <:Partner_Member:994858030942408704> | **Auteur:** *<@', (interaction.member.user).id, '> / `', (interaction.member.user).tag, '` / `', (interaction.member.user).id, `\`*
                                          > <:Partner_Notification:992727141340954624> | **Mention:** `, dootabase.get(String((String((interaction.guild).id) + '-conditation2_notif_server'))), '', '\n', '\n', '\n', dootabase.get(String((String(dootabase.get(String((String((interaction.guild).id) + '-id_server')))) + '-part_pub_server')))].join(''))))
                                                                                                .setFooter(String((String(s4d.database.get(String('tag_author_footer_fr'))) + String((interaction.member.user).tag))))
                                                                                            ]
                                                                                        });
                                                                                    } else {
                                                                                        s4d.client.channels.cache.get(dootabase.get(String((String((interaction.guild).id) + '-part_chanel')))).send({
                                                                                            content: String((['> <:Partner_Member:994858030942408704> | **Auteur:** *<@', (interaction.member.user).id, '> / `', (interaction.member.user).tag, '` / `', (interaction.member.user).id, `\`*
                                          > <:Partner_Notification:992727141340954624> | **Mention:** `, dootabase.get(String((String((interaction.guild).id) + '-conditation2_notif_server'))), '', '\n', '\n', '\n', dootabase.get(String((String(dootabase.get(String((String((interaction.guild).id) + '-id_server')))) + '-part_pub_server')))].join('')))
                                                                                        });
                                                                                        s4d.client.channels.cache.get(dootabase.get(String((String((interaction.guild).id) + '-part_logs_server')))).send({
                                                                                            embeds: [new MessageEmbed()
                                                                                                .setTitle(String((String(s4d.database.get(String('save_emoji'))) + String(s4d.database.get(String('logs_title_part_title_fr'))))))
                                                                                                .setColor(String(s4d.database.get(String('embed_color'))))
                                                                                                .setDescription(String((['> <:Partner_Member:994858030942408704> | **Auteur:** *<@', (interaction.member.user).id, '> / `', (interaction.member.user).tag, '` / `', (interaction.member.user).id, `\`*
                                          > <:Partner_Notification:992727141340954624> | **Mention:** `, dootabase.get(String((String((interaction.guild).id) + '-conditation2_notif_server'))), '', '\n', '\n', '\n', dootabase.get(String((String(dootabase.get(String((String((interaction.guild).id) + '-id_server')))) + '-part_pub_server')))].join(''))))
                                                                                                .setFooter(String((String(s4d.database.get(String('tag_author_footer_fr'))) + String((interaction.member.user).tag))))
                                                                                            ]
                                                                                        });
                                                                                    }
                                                                                }
                                                                            }
                                                                        } else {
                                                                            var embed = new Discord.MessageEmbed()
                                                                            embed.setColor(s4d.database.get(String('wrong_color')));
                                                                            embed.setDescription((String(s4d.database.get(String('wrong_emoji'))) + String(s4d.database.get(String('limite_part_message_fr')))));

                                                                            await interaction.reply({
                                                                                embeds: [(embed)],
                                                                                ephemeral: true,
                                                                                components: []
                                                                            });
                                                                        }
                                                                    } else {
                                                                        var embed = new Discord.MessageEmbed()
                                                                        embed.setColor(s4d.database.get(String('wrong_color')));
                                                                        embed.setDescription((String(s4d.database.get(String('wrong_emoji'))) + String(s4d.database.get(String('time_server_part_limite_reply_message_fr')))));

                                                                        await interaction.reply({
                                                                            embeds: [(embed)],
                                                                            ephemeral: true,
                                                                            components: []
                                                                        });
                                                                    }
                                                                } else {
                                                                    var embed = new Discord.MessageEmbed()
                                                                    embed.setColor(s4d.database.get(String('wrong_color')));
                                                                    embed.setDescription((String(s4d.database.get(String('wrong_emoji'))) + String(s4d.database.get(String('info_change_config_menu_message_fr')))));

                                                                    await interaction.reply({
                                                                        embeds: [(embed)],
                                                                        ephemeral: true,
                                                                        components: []
                                                                    });
                                                                }
                                                            } else {
                                                                var embed = new Discord.MessageEmbed()
                                                                embed.setColor(s4d.database.get(String('wrong_color')));
                                                                embed.setDescription((String(s4d.database.get(String('wrong_emoji'))) + String(s4d.database.get(String('info_change_config_menu_message_fr')))));

                                                                await interaction.reply({
                                                                    embeds: [(embed)],
                                                                    ephemeral: true,
                                                                    components: []
                                                                });
                                                            }
                                                        } else {
                                                            var embed = new Discord.MessageEmbed()
                                                            embed.setColor(s4d.database.get(String('wrong_color')));
                                                            embed.setDescription((String(s4d.database.get(String('wrong_emoji'))) + String(s4d.database.get(String('info_change_config_menu_message_fr')))));

                                                            await interaction.reply({
                                                                embeds: [(embed)],
                                                                ephemeral: true,
                                                                components: []
                                                            });
                                                        }
                                                    } else {
                                                        var embed = new Discord.MessageEmbed()
                                                        embed.setColor(s4d.database.get(String('embed_color')));
                                                        embed.setDescription((String(s4d.database.get(String('blacklist_emoji'))) + String(s4d.database.get(String('server_owner_chanel_message_fr')))));

                                                        await interaction.reply({
                                                            embeds: [(embed)],
                                                            ephemeral: true,
                                                            components: []
                                                        });
                                                    }
                                                } else {
                                                    var embed = new Discord.MessageEmbed()
                                                    embed.setColor(s4d.database.get(String('embed_color')));
                                                    embed.setDescription((String(s4d.database.get(String('blacklist_emoji'))) + String(s4d.database.get(String('server_owner_chanel_message_fr')))));

                                                    await interaction.reply({
                                                        embeds: [(embed)],
                                                        ephemeral: true,
                                                        components: []
                                                    });
                                                }
                                            } else {
                                                var embed = new Discord.MessageEmbed()
                                                embed.setColor(s4d.database.get(String('embed_color')));
                                                embed.setDescription((String(s4d.database.get(String('blacklist_emoji'))) + String(s4d.database.get(String('server_owner_form_message_fr')))));

                                                await interaction.reply({
                                                    embeds: [(embed)],
                                                    ephemeral: true,
                                                    components: []
                                                });
                                            }
                                        } else {
                                            var embed = new Discord.MessageEmbed()
                                            embed.setColor(s4d.database.get(String('embed_color')));
                                            embed.setDescription((String(s4d.database.get(String('blacklist_emoji'))) + String(s4d.database.get(String('server_blacklist_message_fr')))));

                                            await interaction.reply({
                                                embeds: [(embed)],
                                                ephemeral: true,
                                                components: []
                                            });
                                        }
                                    } else {
                                        var embed = new Discord.MessageEmbed()
                                        embed.setColor(s4d.database.get(String('embed_color')));
                                        embed.setDescription((String(s4d.database.get(String('blacklist_emoji'))) + String(s4d.database.get(String('server_blacklist_message_fr')))));

                                        await interaction.reply({
                                            embeds: [(embed)],
                                            ephemeral: true,
                                            components: []
                                        });
                                    }
                                } else {
                                    var embed = new Discord.MessageEmbed()
                                    embed.setColor(s4d.database.get(String('wrong_color')));
                                    embed.setDescription((String(s4d.database.get(String('wrong_emoji'))) + String(s4d.database.get(String('nover_server_message_fr')))));

                                    await interaction.reply({
                                        embeds: [(embed)],
                                        ephemeral: true,
                                        components: []
                                    });
                                }
                            } else {
                                var embed = new Discord.MessageEmbed()
                                embed.setColor(s4d.database.get(String('wrong_color')));
                                embed.setDescription((String(s4d.database.get(String('wrong_emoji'))) + String(s4d.database.get(String('nover_server_message_fr')))));

                                await interaction.reply({
                                    embeds: [(embed)],
                                    ephemeral: true,
                                    components: []
                                });
                            }
                        } else {
                            var embed = new Discord.MessageEmbed()
                            embed.setColor(s4d.database.get(String('wrong_color')));
                            embed.setDescription((String(s4d.database.get(String('wrong_emoji'))) + String(s4d.database.get(String('bot_not_send_message_fr')))));

                            await interaction.reply({
                                embeds: [(embed)],
                                ephemeral: true,
                                components: []
                            });
                        }
                    } else {
                        var embed = new Discord.MessageEmbed()
                        embed.setColor(s4d.database.get(String('wrong_color')));
                        embed.setDescription((String(s4d.database.get(String('wrong_emoji'))) + String(s4d.database.get(String('bot_not_send_message_fr')))));

                        await interaction.reply({
                            embeds: [(embed)],
                            ephemeral: true,
                            components: []
                        });
                    }
                } else {
                    var embed = new Discord.MessageEmbed()
                    embed.setColor(s4d.database.get(String('wrong_color')));
                    embed.setDescription((String(s4d.database.get(String('wrong_emoji'))) + String(s4d.database.get(String('wrong_user_noexist_partner_list_message_fr')))));

                    await interaction.reply({
                        embeds: [(embed)],
                        ephemeral: true,
                        components: []
                    });
                }
            }
        }
        if ((interaction.customId) == 'accept_condition1') {
            if (((interaction.member.user).id) == ((interaction.member.user).id)) {
                dootabase.setFile("./" + 'Donnés' + ".json");
                if (dootabase.get(String(([dootabase.get(String((String((interaction.guild).id) + '-id_server'))), '-', (interaction.member.user).id, '-partner_list'].join('')))) == 'partner') {
                    if (dootabase.get(String(((interaction.guild).id))) == 'verif_serv') {
                        if (ShsHSjJSjSJSJSGHkkhdjdmns.includes(s4d.client.channels.cache.get(dootabase.get(String((String(dootabase.get(String((String((interaction.guild).id) + '-id_server')))) + '-part_chanel')))).permissionsFor((((s4d.client.guilds.cache.get(dootabase.get(String((String((interaction.guild).id) + '-id_server'))))).members.cache.get('992907384592805968') || await (s4d.client.guilds.cache.get(dootabase.get(String((String((interaction.guild).id) + '-id_server'))))).members.fetch('992907384592805968')).user)).toArray().filter(x => x == 'SEND_MESSAGES')[0])) {
                            if (ShsHSjJSjSJSJSGHkkhdjdmns.includes(s4d.client.channels.cache.get(dootabase.get(String((String((interaction.guild).id) + '-part_chanel')))).permissionsFor((((interaction.guild).members.cache.get('992907384592805968') || await (interaction.guild).members.fetch('992907384592805968')).user)).toArray().filter(x => x == 'SEND_MESSAGES')[0])) {
                                if (dootabase.get(String(dootabase.get(String((String((interaction.guild).id) + '-id_server'))))) == 'verif_serv') {
                                    if (!(dootabase.get(String(dootabase.get(String((String((interaction.guild).id) + '-id_server'))))) == 'blacklist_serv')) {
                                        if (!(dootabase.get(String(((interaction.guild).id))) == 'blacklist_serv')) {
                                            if (!(dootabase.get(String(((interaction.member.user).id))) == 'raid')) {
                                                if (!(dootabase.get(String(((interaction.guild).ownerId))) == 'raid')) {
                                                    if (!(dootabase.get(String(((s4d.client.guilds.cache.get(dootabase.get(String((String((interaction.guild).id) + '-id_server'))))).ownerId))) == 'raid')) {
                                                        if (dootabase.get(String((String((interaction.guild).id) + '-owner-id_server'))) == ((interaction.guild).ownerId)) {
                                                            if (dootabase.get(String((String(dootabase.get(String((String((interaction.guild).id) + '-id_server')))) + '-owner-id_server'))) == ((s4d.client.guilds.cache.get(dootabase.get(String((String((interaction.guild).id) + '-id_server'))))).ownerId)) {
                                                                if (dootabase.get(String((String((interaction.guild).id) + '-name_server'))) == ((interaction.guild).name)) {
                                                                    if (!dootabase.has(String(([(interaction.guild).id, '-', dootabase.get(String((String((interaction.guild).id) + '-id_server'))), '-cooldown_part'].join('')))) || dootabase.get(String(([(interaction.guild).id, '-', dootabase.get(String((String((interaction.guild).id) + '-id_server'))), '-cooldown_part'].join('')))) <= (Math.floor(new Date().getTime() / 1000))) {
                                                                        if (!dootabase.has(String((String((interaction.guild).id) + '-number_part'))) || !(dootabase.get(String((String((interaction.guild).id) + '-number_part'))) >= 20)) {
                                                                            if ((dootabase.get(String((String((interaction.guild).id) + '-conditation1_notif_client'))) == '@everyone' || dootabase.get(String((String((interaction.guild).id) + '-conditation1_notif_client'))) == '@here') && (dootabase.get(String((String(dootabase.get(String((String((interaction.guild).id) + '-id_server')))) + '-mention_everyone'))) == 'Désactivées')) {
                                                                                var embed = new Discord.MessageEmbed()
                                                                                embed.setColor(s4d.database.get(String('wrong_color')));
                                                                                embed.setDescription((String(s4d.database.get(String('wrong_emoji'))) + String(s4d.database.get(String('notif_noactive_everyone_message_fr')))));
                                                                                await interaction.update({
                                                                                    embeds: [(embed)],
                                                                                    components: []
                                                                                });
                                                                            } else {
                                                                                dootabase.add(String((String(dootabase.get(String((String((interaction.guild).id) + '-id_server')))) + '-part_count_limite')), parseInt(1));
                                                                                dootabase.set(String(([(interaction.guild).id, '-', dootabase.get(String((String((interaction.guild).id) + '-id_server'))), '-cooldown_part', '', ''].join(''))), ((Math.floor(new Date().getTime() / 1000)) + 604800));
                                                                                var embed = new Discord.MessageEmbed()
                                                                                embed.setDescription('<:Partner_Tick:992734092972003349> **| Partenariat terminé !**');
                                                                                embed.setColor(s4d.database.get(String('good_color')));
                                                                                embed.setFooter((String(s4d.database.get(String('tag_author_footer_fr'))) + String((interaction.member.user).tag)), ((interaction.member.user).displayAvatarURL({
                                                                                    format: "png"
                                                                                })));
                                                                                embed.setTimestamp();

                                                                                await interaction.update({
                                                                                    embeds: [(embed)],
                                                                                    components: []
                                                                                });
                                                                                if (dootabase.get(String((String((interaction.guild).id) + '-conditation1_notif_client'))) == 'Notification Partenariat') {
                                                                                    s4d.client.channels.cache.get(dootabase.get(String((String(dootabase.get(String((String((interaction.guild).id) + '-id_server')))) + '-part_chanel')))).send({
                                                                                        content: String((['> <:Partner_Member:994858030942408704> | **Auteur:** *<@', (interaction.member.user).id, '> / `', (interaction.member.user).tag, '` / `', (interaction.member.user).id, `\`*
                                        > <:Partner_Notification:992727141340954624> | **Mention:** <@&`, dootabase.get(String((String(dootabase.get(String((String((interaction.guild).id) + '-id_server')))) + '-part_notif_rank'))), '>', '\n', '\n', '\n', dootabase.get(String((String((interaction.guild).id) + '-part_pub_server')))].join('')))
                                                                                    });
                                                                                    s4d.client.channels.cache.get(dootabase.get(String((String(dootabase.get(String((String((interaction.guild).id) + '-id_server')))) + '-part_logs_server')))).send({
                                                                                        embeds: [new MessageEmbed()
                                                                                            .setTitle(String((String(s4d.database.get(String('save_emoji'))) + String(s4d.database.get(String('logs_title_part_title_fr'))))))
                                                                                            .setColor(String(s4d.database.get(String('embed_color'))))
                                                                                            .setDescription(String((['> <:Partner_Member:994858030942408704> | **Auteur:** *<@', (interaction.member.user).id, '> / `', (interaction.member.user).tag, '` / `', (interaction.member.user).id, `\`*
                                        > <:Partner_Notification:992727141340954624> | **Mention:** `, dootabase.get(String((String((interaction.guild).id) + '-conditation1_notif_client'))), '', '\n', '\n', '\n', dootabase.get(String((String((interaction.guild).id) + '-part_pub_server')))].join(''))))
                                                                                            .setFooter(String((String(s4d.database.get(String('tag_author_footer_fr'))) + String((interaction.member.user).tag))))
                                                                                        ]
                                                                                    });
                                                                                    if (dootabase.get(String((String((interaction.guild).id) + '-conditation1_notif_server'))) == 'Notification Partenariat') {
                                                                                        s4d.client.channels.cache.get(dootabase.get(String((String((interaction.guild).id) + '-part_chanel')))).send({
                                                                                            content: String((['> <:Partner_Member:994858030942408704> | **Auteur:** *<@', (interaction.member.user).id, '> / `', (interaction.member.user).tag, '` / `', (interaction.member.user).id, `\`*
                                          > <:Partner_Notification:992727141340954624> | **Mention:** <@&`, dootabase.get(String((String((interaction.guild).id) + '-part_notif_rank'))), '>', '\n', '\n', '\n', dootabase.get(String((String(dootabase.get(String((String((interaction.guild).id) + '-id_server')))) + '-part_pub_server')))].join('')))
                                                                                        });
                                                                                        s4d.client.channels.cache.get(dootabase.get(String((String((interaction.guild).id) + '-part_logs_server')))).send({
                                                                                            embeds: [new MessageEmbed()
                                                                                                .setTitle(String((String(s4d.database.get(String('save_emoji'))) + String(s4d.database.get(String('logs_title_part_title_fr'))))))
                                                                                                .setColor(String(s4d.database.get(String('embed_color'))))
                                                                                                .setDescription(String((['> <:Partner_Member:994858030942408704> | **Auteur:** *<@', (interaction.member.user).id, '> / `', (interaction.member.user).tag, '` / `', (interaction.member.user).id, `\`*
                                          > <:Partner_Notification:992727141340954624> | **Mention:** `, dootabase.get(String((String((interaction.guild).id) + '-conditation1_notif_server'))), '', '\n', '\n', '\n', dootabase.get(String((String(dootabase.get(String((String((interaction.guild).id) + '-id_server')))) + '-part_pub_server')))].join(''))))
                                                                                                .setFooter(String((String(s4d.database.get(String('tag_author_footer_fr'))) + String((interaction.member.user).tag))))
                                                                                            ]
                                                                                        });
                                                                                    } else {
                                                                                        s4d.client.channels.cache.get(dootabase.get(String((String((interaction.guild).id) + '-part_chanel')))).send({
                                                                                            content: String((['> <:Partner_Member:994858030942408704> | **Auteur:** *<@', (interaction.member.user).id, '> / `', (interaction.member.user).tag, '` / `', (interaction.member.user).id, `\`*
                                          > <:Partner_Notification:992727141340954624> | **Mention:** `, dootabase.get(String((String((interaction.guild).id) + '-conditation1_notif_server'))), '', '\n', '\n', '\n', dootabase.get(String((String(dootabase.get(String((String((interaction.guild).id) + '-id_server')))) + '-part_pub_server')))].join('')))
                                                                                        });
                                                                                        s4d.client.channels.cache.get(dootabase.get(String((String((interaction.guild).id) + '-part_logs_server')))).send({
                                                                                            embeds: [new MessageEmbed()
                                                                                                .setTitle(String((String(s4d.database.get(String('save_emoji'))) + String(s4d.database.get(String('logs_title_part_title_fr'))))))
                                                                                                .setColor(String(s4d.database.get(String('embed_color'))))
                                                                                                .setDescription(String((['> <:Partner_Member:994858030942408704> | **Auteur:** *<@', (interaction.member.user).id, '> / `', (interaction.member.user).tag, '` / `', (interaction.member.user).id, `\`*
                                          > <:Partner_Notification:992727141340954624> | **Mention:** `, dootabase.get(String((String((interaction.guild).id) + '-conditation1_notif_server'))), '', '\n', '\n', '\n', dootabase.get(String((String(dootabase.get(String((String((interaction.guild).id) + '-id_server')))) + '-part_pub_server')))].join(''))))
                                                                                                .setFooter(String((String(s4d.database.get(String('tag_author_footer_fr'))) + String((interaction.member.user).tag))))
                                                                                            ]
                                                                                        });
                                                                                    }
                                                                                } else {
                                                                                    s4d.client.channels.cache.get(dootabase.get(String((String(dootabase.get(String((String((interaction.guild).id) + '-id_server')))) + '-part_chanel')))).send({
                                                                                        content: String((['> <:Partner_Member:994858030942408704> | **Auteur:** *<@', (interaction.member.user).id, '> / `', (interaction.member.user).tag, '` / `', (interaction.member.user).id, `\`*
                                        > <:Partner_Notification:992727141340954624> | **Mention:** `, dootabase.get(String((String((interaction.guild).id) + '-conditation1_notif_client'))), '', '\n', '\n', '\n', dootabase.get(String((String((interaction.guild).id) + '-part_pub_server')))].join('')))
                                                                                    });
                                                                                    s4d.client.channels.cache.get(dootabase.get(String((String(dootabase.get(String((String((interaction.guild).id) + '-id_server')))) + '-part_logs_server')))).send({
                                                                                        embeds: [new MessageEmbed()
                                                                                            .setTitle(String((String(s4d.database.get(String('save_emoji'))) + String(s4d.database.get(String('logs_title_part_title_fr'))))))
                                                                                            .setColor(String(s4d.database.get(String('embed_color'))))
                                                                                            .setDescription(String((['> <:Partner_Member:994858030942408704> | **Auteur:** *<@', (interaction.member.user).id, '> / `', (interaction.member.user).tag, '` / `', (interaction.member.user).id, `\`*
                                        > <:Partner_Notification:992727141340954624> | **Mention:** `, dootabase.get(String((String((interaction.guild).id) + '-conditation1_notif_client'))), '', '\n', '\n', '\n', dootabase.get(String((String((interaction.guild).id) + '-part_pub_server')))].join(''))))
                                                                                            .setFooter(String((String(s4d.database.get(String('tag_author_footer_fr'))) + String((interaction.member.user).tag))))
                                                                                        ]
                                                                                    });
                                                                                    if (dootabase.get(String((String((interaction.guild).id) + '-conditation1_notif_server'))) == 'Notification Partenariat') {
                                                                                        s4d.client.channels.cache.get(dootabase.get(String((String((interaction.guild).id) + '-part_chanel')))).send({
                                                                                            content: String((['> <:Partner_Member:994858030942408704> | **Auteur:** *<@', (interaction.member.user).id, '> / `', (interaction.member.user).tag, '` / `', (interaction.member.user).id, `\`*
                                          > <:Partner_Notification:992727141340954624> | **Mention:** <@&`, dootabase.get(String((String((interaction.guild).id) + '-part_notif_rank'))), '>', '\n', '\n', '\n', dootabase.get(String((String(dootabase.get(String((String((interaction.guild).id) + '-id_server')))) + '-part_pub_server')))].join('')))
                                                                                        });
                                                                                        s4d.client.channels.cache.get(dootabase.get(String((String((interaction.guild).id) + '-part_logs_server')))).send({
                                                                                            embeds: [new MessageEmbed()
                                                                                                .setTitle(String((String(s4d.database.get(String('save_emoji'))) + String(s4d.database.get(String('logs_title_part_title_fr'))))))
                                                                                                .setColor(String(s4d.database.get(String('embed_color'))))
                                                                                                .setDescription(String((['> <:Partner_Member:994858030942408704> | **Auteur:** *<@', (interaction.member.user).id, '> / `', (interaction.member.user).tag, '` / `', (interaction.member.user).id, `\`*
                                          > <:Partner_Notification:992727141340954624> | **Mention:** `, dootabase.get(String((String((interaction.guild).id) + '-conditation1_notif_server'))), '', '\n', '\n', '\n', dootabase.get(String((String(dootabase.get(String((String((interaction.guild).id) + '-id_server')))) + '-part_pub_server')))].join(''))))
                                                                                                .setFooter(String((String(s4d.database.get(String('tag_author_footer_fr'))) + String((interaction.member.user).tag))))
                                                                                            ]
                                                                                        });
                                                                                    } else {
                                                                                        s4d.client.channels.cache.get(dootabase.get(String((String((interaction.guild).id) + '-part_chanel')))).send({
                                                                                            content: String((['> <:Partner_Member:994858030942408704> | **Auteur:** *<@', (interaction.member.user).id, '> / `', (interaction.member.user).tag, '` / `', (interaction.member.user).id, `\`*
                                          > <:Partner_Notification:992727141340954624> | **Mention:** `, dootabase.get(String((String((interaction.guild).id) + '-conditation1_notif_server'))), '', '\n', '\n', '\n', dootabase.get(String((String(dootabase.get(String((String((interaction.guild).id) + '-id_server')))) + '-part_pub_server')))].join('')))
                                                                                        });
                                                                                        s4d.client.channels.cache.get(dootabase.get(String((String((interaction.guild).id) + '-part_logs_server')))).send({
                                                                                            embeds: [new MessageEmbed()
                                                                                                .setTitle(String((String(s4d.database.get(String('save_emoji'))) + String(s4d.database.get(String('logs_title_part_title_fr'))))))
                                                                                                .setColor(String(s4d.database.get(String('embed_color'))))
                                                                                                .setDescription(String((['> <:Partner_Member:994858030942408704> | **Auteur:** *<@', (interaction.member.user).id, '> / `', (interaction.member.user).tag, '` / `', (interaction.member.user).id, `\`*
                                          > <:Partner_Notification:992727141340954624> | **Mention:** `, dootabase.get(String((String((interaction.guild).id) + '-conditation1_notif_server'))), '', '\n', '\n', '\n', dootabase.get(String((String(dootabase.get(String((String((interaction.guild).id) + '-id_server')))) + '-part_pub_server')))].join(''))))
                                                                                                .setFooter(String((String(s4d.database.get(String('tag_author_footer_fr'))) + String((interaction.member.user).tag))))
                                                                                            ]
                                                                                        });
                                                                                    }
                                                                                }
                                                                            }
                                                                        } else {
                                                                            var embed = new Discord.MessageEmbed()
                                                                            embed.setColor(s4d.database.get(String('wrong_color')));
                                                                            embed.setDescription((String(s4d.database.get(String('wrong_emoji'))) + String(s4d.database.get(String('limite_part_message_fr')))));

                                                                            await interaction.reply({
                                                                                embeds: [(embed)],
                                                                                ephemeral: true,
                                                                                components: []
                                                                            });
                                                                        }
                                                                    } else {
                                                                        var embed = new Discord.MessageEmbed()
                                                                        embed.setColor(s4d.database.get(String('wrong_color')));
                                                                        embed.setDescription((String(s4d.database.get(String('wrong_emoji'))) + String(s4d.database.get(String('time_server_part_limite_reply_message_fr')))));

                                                                        await interaction.reply({
                                                                            embeds: [(embed)],
                                                                            ephemeral: true,
                                                                            components: []
                                                                        });
                                                                    }
                                                                } else {
                                                                    var embed = new Discord.MessageEmbed()
                                                                    embed.setColor(s4d.database.get(String('wrong_color')));
                                                                    embed.setDescription((String(s4d.database.get(String('wrong_emoji'))) + String(s4d.database.get(String('info_change_config_menu_message_fr')))));

                                                                    await interaction.reply({
                                                                        embeds: [(embed)],
                                                                        ephemeral: true,
                                                                        components: []
                                                                    });
                                                                }
                                                            } else {
                                                                var embed = new Discord.MessageEmbed()
                                                                embed.setColor(s4d.database.get(String('wrong_color')));
                                                                embed.setDescription((String(s4d.database.get(String('wrong_emoji'))) + String(s4d.database.get(String('info_change_config_menu_message_fr')))));

                                                                await interaction.reply({
                                                                    embeds: [(embed)],
                                                                    ephemeral: true,
                                                                    components: []
                                                                });
                                                            }
                                                        } else {
                                                            var embed = new Discord.MessageEmbed()
                                                            embed.setColor(s4d.database.get(String('wrong_color')));
                                                            embed.setDescription((String(s4d.database.get(String('wrong_emoji'))) + String(s4d.database.get(String('info_change_config_menu_message_fr')))));

                                                            await interaction.reply({
                                                                embeds: [(embed)],
                                                                ephemeral: true,
                                                                components: []
                                                            });
                                                        }
                                                    } else {
                                                        var embed = new Discord.MessageEmbed()
                                                        embed.setColor(s4d.database.get(String('embed_color')));
                                                        embed.setDescription((String(s4d.database.get(String('blacklist_emoji'))) + String(s4d.database.get(String('server_owner_chanel_message_fr')))));

                                                        await interaction.reply({
                                                            embeds: [(embed)],
                                                            ephemeral: true,
                                                            components: []
                                                        });
                                                    }
                                                } else {
                                                    var embed = new Discord.MessageEmbed()
                                                    embed.setColor(s4d.database.get(String('embed_color')));
                                                    embed.setDescription((String(s4d.database.get(String('blacklist_emoji'))) + String(s4d.database.get(String('server_owner_chanel_message_fr')))));

                                                    await interaction.reply({
                                                        embeds: [(embed)],
                                                        ephemeral: true,
                                                        components: []
                                                    });
                                                }
                                            } else {
                                                var embed = new Discord.MessageEmbed()
                                                embed.setColor(s4d.database.get(String('embed_color')));
                                                embed.setDescription((String(s4d.database.get(String('blacklist_emoji'))) + String(s4d.database.get(String('server_owner_form_message_fr')))));

                                                await interaction.reply({
                                                    embeds: [(embed)],
                                                    ephemeral: true,
                                                    components: []
                                                });
                                            }
                                        } else {
                                            var embed = new Discord.MessageEmbed()
                                            embed.setColor(s4d.database.get(String('embed_color')));
                                            embed.setDescription((String(s4d.database.get(String('blacklist_emoji'))) + String(s4d.database.get(String('server_blacklist_message_fr')))));

                                            await interaction.reply({
                                                embeds: [(embed)],
                                                ephemeral: true,
                                                components: []
                                            });
                                        }
                                    } else {
                                        var embed = new Discord.MessageEmbed()
                                        embed.setColor(s4d.database.get(String('embed_color')));
                                        embed.setDescription((String(s4d.database.get(String('blacklist_emoji'))) + String(s4d.database.get(String('server_blacklist_message_fr')))));

                                        await interaction.reply({
                                            embeds: [(embed)],
                                            ephemeral: true,
                                            components: []
                                        });
                                    }
                                } else {
                                    var embed = new Discord.MessageEmbed()
                                    embed.setColor(s4d.database.get(String('wrong_color')));
                                    embed.setDescription((String(s4d.database.get(String('wrong_emoji'))) + String(s4d.database.get(String('nover_server_message_fr')))));

                                    await interaction.reply({
                                        embeds: [(embed)],
                                        ephemeral: true,
                                        components: []
                                    });
                                }
                            } else {
                                var embed = new Discord.MessageEmbed()
                                embed.setColor(s4d.database.get(String('wrong_color')));
                                embed.setDescription((String(s4d.database.get(String('wrong_emoji'))) + String(s4d.database.get(String('bot_not_send_message_fr')))));

                                await interaction.update({
                                    embeds: [(embed)],
                                    ephemeral: true,
                                    components: []
                                });
                            }
                        } else {
                            var embed = new Discord.MessageEmbed()
                            embed.setColor(s4d.database.get(String('wrong_color')));
                            embed.setDescription((String(s4d.database.get(String('wrong_emoji'))) + String(s4d.database.get(String('bot_not_send_message_fr')))));

                            await interaction.update({
                                embeds: [(embed)],
                                ephemeral: true,
                                components: []
                            });
                        }
                    } else {
                        var embed = new Discord.MessageEmbed()
                        embed.setColor(s4d.database.get(String('wrong_color')));
                        embed.setDescription((String(s4d.database.get(String('wrong_emoji'))) + String(s4d.database.get(String('nover_server_message_fr')))));

                        await interaction.reply({
                            embeds: [(embed)],
                            ephemeral: true,
                            components: []
                        });
                    }
                } else {
                    var embed = new Discord.MessageEmbed()
                    embed.setColor(s4d.database.get(String('wrong_color')));
                    embed.setDescription((String(s4d.database.get(String('wrong_emoji'))) + String(s4d.database.get(String('wrong_user_noexist_partner_list_message_fr')))));

                    await interaction.reply({
                        embeds: [(embed)],
                        ephemeral: true,
                        components: []
                    });
                }
            }
        }
        if ((interaction.customId) == 'refused_condition') {
            if (((interaction.member.user).id) == ((interaction.member.user).id)) {
                var embed = new Discord.MessageEmbed()
                embed.setColor(s4d.database.get(String('wrong_color')));
                embed.setDescription((String(s4d.database.get(String('wrong_emoji'))) + String(s4d.database.get(String('stop_condition_partenariat_message_fr')))));
                embed.setFooter((String(s4d.database.get(String('tag_author_footer_fr'))) + String((interaction.member.user).tag)), ((interaction.member.user).displayAvatarURL({
                    format: "png"
                })));
                embed.setTimestamp();

                await interaction.update({
                    embeds: [(embed)],
                    components: []
                });
            }
        }
        if ((interaction.customId) == 'accept_condition5' || (interaction.customId) == 'accept_condition6' || (interaction.customId) == 'accept_condition7' || (interaction.customId) == 'accept_condition8' || (interaction.customId) == 'accept_condition9' || (interaction.customId) == 'accept_condition10') {
            if (dootabase.get(String((String((interaction.guild).id) + '-ultimate'))) == 'Activé') {
                if ((interaction.customId) == 'accept_condition10') {
                    if (((interaction.member.user).id) == ((interaction.member.user).id)) {
                        dootabase.setFile("./" + 'Donnés' + ".json");
                        if (dootabase.get(String(([dootabase.get(String((String((interaction.guild).id) + '-id_server'))), '-', (interaction.member.user).id, '-partner_list'].join('')))) == 'partner') {
                            if (ShsHSjJSjSJSJSGHkkhdjdmns.includes(s4d.client.channels.cache.get(dootabase.get(String((String(dootabase.get(String((String((interaction.guild).id) + '-id_server')))) + '-part_chanel')))).permissionsFor((((s4d.client.guilds.cache.get(dootabase.get(String((String((interaction.guild).id) + '-id_server'))))).members.cache.get('992907384592805968') || await (s4d.client.guilds.cache.get(dootabase.get(String((String((interaction.guild).id) + '-id_server'))))).members.fetch('992907384592805968')).user)).toArray().filter(x => x == 'SEND_MESSAGES')[0])) {
                                if (ShsHSjJSjSJSJSGHkkhdjdmns.includes(s4d.client.channels.cache.get(dootabase.get(String((String((interaction.guild).id) + '-part_chanel')))).permissionsFor((((interaction.guild).members.cache.get('992907384592805968') || await (interaction.guild).members.fetch('992907384592805968')).user)).toArray().filter(x => x == 'SEND_MESSAGES')[0])) {
                                    if (dootabase.get(String(((interaction.guild).id))) == 'verif_serv') {
                                        if (dootabase.get(String(dootabase.get(String((String((interaction.guild).id) + '-id_server'))))) == 'verif_serv') {
                                            if (!(dootabase.get(String(dootabase.get(String((String((interaction.guild).id) + '-id_server'))))) == 'blacklist_serv')) {
                                                if (!(dootabase.get(String(((interaction.guild).id))) == 'blacklist_serv')) {
                                                    if (!(dootabase.get(String(((interaction.member.user).id))) == 'raid')) {
                                                        if (!(dootabase.get(String(((interaction.guild).ownerId))) == 'raid')) {
                                                            if (!(dootabase.get(String(((s4d.client.guilds.cache.get(dootabase.get(String((String((interaction.guild).id) + '-id_server'))))).ownerId))) == 'raid')) {
                                                                if (dootabase.get(String((String((interaction.guild).id) + '-owner-id_server'))) == ((interaction.guild).ownerId)) {
                                                                    if (dootabase.get(String((String(dootabase.get(String((String((interaction.guild).id) + '-id_server')))) + '-owner-id_server'))) == ((s4d.client.guilds.cache.get(dootabase.get(String((String((interaction.guild).id) + '-id_server'))))).ownerId)) {
                                                                        if (dootabase.get(String((String((interaction.guild).id) + '-name_server'))) == ((interaction.guild).name)) {
                                                                            if (!dootabase.has(String(([(interaction.guild).id, '-', dootabase.get(String((String((interaction.guild).id) + '-id_server'))), '-cooldown_part'].join('')))) || dootabase.get(String(([(interaction.guild).id, '-', dootabase.get(String((String((interaction.guild).id) + '-id_server'))), '-cooldown_part'].join('')))) <= (Math.floor(new Date().getTime() / 1000))) {
                                                                                if (!dootabase.has(String((String((interaction.guild).id) + '-number_part'))) || !(dootabase.get(String((String((interaction.guild).id) + '-number_part'))) >= 20)) {
                                                                                    if ((dootabase.get(String((String((interaction.guild).id) + '-conditation1_notif_client'))) == '@everyone' || dootabase.get(String((String((interaction.guild).id) + '-conditation1_notif_client'))) == '@here') && (dootabase.get(String((String(dootabase.get(String((String((interaction.guild).id) + '-id_server')))) + '-mention_everyone'))) == 'Désactivées')) {
                                                                                        var embed = new Discord.MessageEmbed()
                                                                                        embed.setColor(s4d.database.get(String('wrong_color')));
                                                                                        embed.setDescription((String(s4d.database.get(String('wrong_emoji'))) + String(s4d.database.get(String('notif_noactive_everyone_message_fr')))));

                                                                                        await interaction.update({
                                                                                            embeds: [(embed)],
                                                                                            components: []
                                                                                        });
                                                                                    } else {
                                                                                        dootabase.add(String((String(dootabase.get(String((String((interaction.guild).id) + '-id_server')))) + '-part_count_limite')), parseInt(1));
                                                                                        dootabase.set(String(([(interaction.guild).id, '-', dootabase.get(String((String((interaction.guild).id) + '-id_server'))), '-cooldown_part', '', ''].join(''))), ((Math.floor(new Date().getTime() / 1000)) + 604800));
                                                                                        var embed = new Discord.MessageEmbed()
                                                                                        embed.setDescription('<:Partner_Tick:992734092972003349> **| Partenariat terminé !**');
                                                                                        embed.setColor(s4d.database.get(String('good_color')));
                                                                                        embed.setFooter((String(s4d.database.get(String('tag_author_footer_fr'))) + String((interaction.member.user).tag)), ((interaction.member.user).displayAvatarURL({
                                                                                            format: "png"
                                                                                        })));
                                                                                        embed.setTimestamp();

                                                                                        await interaction.update({
                                                                                            embeds: [(embed)],
                                                                                            components: []
                                                                                        });
                                                                                        if (dootabase.get(String((String((interaction.guild).id) + '-conditation10_notif_client'))) == 'Notification Partenariat') {
                                                                                            s4d.client.channels.cache.get(dootabase.get(String((String(dootabase.get(String((String((interaction.guild).id) + '-id_server')))) + '-part_chanel')))).send({
                                                                                                content: String((['> <:Partner_Member:994858030942408704> | **Auteur:** *<@', (interaction.member.user).id, '> / `', (interaction.member.user).tag, '` / `', (interaction.member.user).id, `\`*
                                            > <:Partner_Notification:992727141340954624> | **Mention:** <@&`, dootabase.get(String((String(dootabase.get(String((String((interaction.guild).id) + '-id_server')))) + '-part_notif_rank'))), '>', '\n', '\n', '\n', dootabase.get(String((String((interaction.guild).id) + '-part_pub_server')))].join('')))
                                                                                            });
                                                                                            s4d.client.channels.cache.get(dootabase.get(String((String(dootabase.get(String((String((interaction.guild).id) + '-id_server')))) + '-part_logs_server')))).send({
                                                                                                embeds: [new MessageEmbed()
                                                                                                    .setTitle(String((String(s4d.database.get(String('save_emoji'))) + String(s4d.database.get(String('logs_title_part_title_fr'))))))
                                                                                                    .setColor(String(s4d.database.get(String('embed_color'))))
                                                                                                    .setDescription(String((['> <:Partner_Member:994858030942408704> | **Auteur:** *<@', (interaction.member.user).id, '> / `', (interaction.member.user).tag, '` / `', (interaction.member.user).id, `\`*
                                            > <:Partner_Notification:992727141340954624> | **Mention:** `, dootabase.get(String((String((interaction.guild).id) + '-conditation10_notif_client'))), '', '\n', '\n', '\n', dootabase.get(String((String((interaction.guild).id) + '-part_pub_server')))].join(''))))
                                                                                                    .setFooter(String((String(s4d.database.get(String('tag_author_footer_fr'))) + String((interaction.member.user).tag))))
                                                                                                ]
                                                                                            });
                                                                                            if (dootabase.get(String((String((interaction.guild).id) + '-conditation10_notif_server'))) == 'Notification Partenariat') {
                                                                                                s4d.client.channels.cache.get(dootabase.get(String((String((interaction.guild).id) + '-part_chanel')))).send({
                                                                                                    content: String((['> <:Partner_Member:994858030942408704> | **Auteur:** *<@', (interaction.member.user).id, '> / `', (interaction.member.user).tag, '` / `', (interaction.member.user).id, `\`*
                                              > <:Partner_Notification:992727141340954624> | **Mention:** <@&`, dootabase.get(String((String((interaction.guild).id) + '-part_notif_rank'))), '>', '\n', '\n', '\n', dootabase.get(String((String(dootabase.get(String((String((interaction.guild).id) + '-id_server')))) + '-part_pub_server')))].join('')))
                                                                                                });
                                                                                                s4d.client.channels.cache.get(dootabase.get(String((String((interaction.guild).id) + '-part_logs_server')))).send({
                                                                                                    embeds: [new MessageEmbed()
                                                                                                        .setTitle(String((String(s4d.database.get(String('save_emoji'))) + String(s4d.database.get(String('logs_title_part_title_fr'))))))
                                                                                                        .setColor(String(s4d.database.get(String('embed_color'))))
                                                                                                        .setDescription(String((['> <:Partner_Member:994858030942408704> | **Auteur:** *<@', (interaction.member.user).id, '> / `', (interaction.member.user).tag, '` / `', (interaction.member.user).id, `\`*
                                              > <:Partner_Notification:992727141340954624> | **Mention:** `, dootabase.get(String((String((interaction.guild).id) + '-conditation10_notif_server'))), '', '\n', '\n', '\n', dootabase.get(String((String(dootabase.get(String((String((interaction.guild).id) + '-id_server')))) + '-part_pub_server')))].join(''))))
                                                                                                        .setFooter(String((String(s4d.database.get(String('tag_author_footer_fr'))) + String((interaction.member.user).tag))))
                                                                                                    ]
                                                                                                });
                                                                                            } else {
                                                                                                s4d.client.channels.cache.get(dootabase.get(String((String((interaction.guild).id) + '-part_chanel')))).send({
                                                                                                    content: String((['> <:Partner_Member:994858030942408704> | **Auteur:** *<@', (interaction.member.user).id, '> / `', (interaction.member.user).tag, '` / `', (interaction.member.user).id, `\`*
                                              > <:Partner_Notification:992727141340954624> | **Mention:** `, dootabase.get(String((String((interaction.guild).id) + '-conditation10_notif_server'))), '', '\n', '\n', '\n', dootabase.get(String((String(dootabase.get(String((String((interaction.guild).id) + '-id_server')))) + '-part_pub_server')))].join('')))
                                                                                                });
                                                                                                s4d.client.channels.cache.get(dootabase.get(String((String((interaction.guild).id) + '-part_logs_server')))).send({
                                                                                                    embeds: [new MessageEmbed()
                                                                                                        .setTitle(String((String(s4d.database.get(String('save_emoji'))) + String(s4d.database.get(String('logs_title_part_title_fr'))))))
                                                                                                        .setColor(String(s4d.database.get(String('embed_color'))))
                                                                                                        .setDescription(String((['> <:Partner_Member:994858030942408704> | **Auteur:** *<@', (interaction.member.user).id, '> / `', (interaction.member.user).tag, '` / `', (interaction.member.user).id, `\`*
                                              > <:Partner_Notification:992727141340954624> | **Mention:** `, dootabase.get(String((String((interaction.guild).id) + '-conditation10_notif_server'))), '', '\n', '\n', '\n', dootabase.get(String((String(dootabase.get(String((String((interaction.guild).id) + '-id_server')))) + '-part_pub_server')))].join(''))))
                                                                                                        .setFooter(String((String(s4d.database.get(String('tag_author_footer_fr'))) + String((interaction.member.user).tag))))
                                                                                                    ]
                                                                                                });
                                                                                            }
                                                                                        } else {
                                                                                            s4d.client.channels.cache.get(dootabase.get(String((String(dootabase.get(String((String((interaction.guild).id) + '-id_server')))) + '-part_chanel')))).send({
                                                                                                content: String((['> <:Partner_Member:994858030942408704> | **Auteur:** *<@', (interaction.member.user).id, '> / `', (interaction.member.user).tag, '` / `', (interaction.member.user).id, `\`*
                                            > <:Partner_Notification:992727141340954624> | **Mention:** `, dootabase.get(String((String((interaction.guild).id) + '-conditation10_notif_client'))), '', '\n', '\n', '\n', dootabase.get(String((String((interaction.guild).id) + '-part_pub_server')))].join('')))
                                                                                            });
                                                                                            s4d.client.channels.cache.get(dootabase.get(String((String(dootabase.get(String((String((interaction.guild).id) + '-id_server')))) + '-part_logs_server')))).send({
                                                                                                embeds: [new MessageEmbed()
                                                                                                    .setTitle(String((String(s4d.database.get(String('save_emoji'))) + String(s4d.database.get(String('logs_title_part_title_fr'))))))
                                                                                                    .setColor(String(s4d.database.get(String('embed_color'))))
                                                                                                    .setDescription(String((['> <:Partner_Member:994858030942408704> | **Auteur:** *<@', (interaction.member.user).id, '> / `', (interaction.member.user).tag, '` / `', (interaction.member.user).id, `\`*
                                            > <:Partner_Notification:992727141340954624> | **Mention:** `, dootabase.get(String((String((interaction.guild).id) + '-conditation10_notif_client'))), '', '\n', '\n', '\n', dootabase.get(String((String((interaction.guild).id) + '-part_pub_server')))].join(''))))
                                                                                                    .setFooter(String((String(s4d.database.get(String('tag_author_footer_fr'))) + String((interaction.member.user).tag))))
                                                                                                ]
                                                                                            });
                                                                                            if (dootabase.get(String((String((interaction.guild).id) + '-conditation10_notif_server'))) == 'Notification Partenariat') {
                                                                                                s4d.client.channels.cache.get(dootabase.get(String((String((interaction.guild).id) + '-part_chanel')))).send({
                                                                                                    content: String((['> <:Partner_Member:994858030942408704> | **Auteur:** *<@', (interaction.member.user).id, '> / `', (interaction.member.user).tag, '` / `', (interaction.member.user).id, `\`*
                                              > <:Partner_Notification:992727141340954624> | **Mention:** <@&`, dootabase.get(String((String((interaction.guild).id) + '-part_notif_rank'))), '>', '\n', '\n', '\n', dootabase.get(String((String(dootabase.get(String((String((interaction.guild).id) + '-id_server')))) + '-part_pub_server')))].join('')))
                                                                                                });
                                                                                                s4d.client.channels.cache.get(dootabase.get(String((String((interaction.guild).id) + '-part_logs_server')))).send({
                                                                                                    embeds: [new MessageEmbed()
                                                                                                        .setTitle(String((String(s4d.database.get(String('save_emoji'))) + String(s4d.database.get(String('logs_title_part_title_fr'))))))
                                                                                                        .setColor(String(s4d.database.get(String('embed_color'))))
                                                                                                        .setDescription(String((['> <:Partner_Member:994858030942408704> | **Auteur:** *<@', (interaction.member.user).id, '> / `', (interaction.member.user).tag, '` / `', (interaction.member.user).id, `\`*
                                              > <:Partner_Notification:992727141340954624> | **Mention:** `, dootabase.get(String((String((interaction.guild).id) + '-conditation10_notif_server'))), '', '\n', '\n', '\n', dootabase.get(String((String(dootabase.get(String((String((interaction.guild).id) + '-id_server')))) + '-part_pub_server')))].join(''))))
                                                                                                        .setFooter(String((String(s4d.database.get(String('tag_author_footer_fr'))) + String((interaction.member.user).tag))))
                                                                                                    ]
                                                                                                });
                                                                                            } else {
                                                                                                s4d.client.channels.cache.get(dootabase.get(String((String((interaction.guild).id) + '-part_chanel')))).send({
                                                                                                    content: String((['> <:Partner_Member:994858030942408704> | **Auteur:** *<@', (interaction.member.user).id, '> / `', (interaction.member.user).tag, '` / `', (interaction.member.user).id, `\`*
                                              > <:Partner_Notification:992727141340954624> | **Mention:** `, dootabase.get(String((String((interaction.guild).id) + '-conditation10_notif_server'))), '', '\n', '\n', '\n', dootabase.get(String((String(dootabase.get(String((String((interaction.guild).id) + '-id_server')))) + '-part_pub_server')))].join('')))
                                                                                                });
                                                                                                s4d.client.channels.cache.get(dootabase.get(String((String((interaction.guild).id) + '-part_logs_server')))).send({
                                                                                                    embeds: [new MessageEmbed()
                                                                                                        .setTitle(String((String(s4d.database.get(String('save_emoji'))) + String(s4d.database.get(String('logs_title_part_title_fr'))))))
                                                                                                        .setColor(String(s4d.database.get(String('embed_color'))))
                                                                                                        .setDescription(String((['> <:Partner_Member:994858030942408704> | **Auteur:** *<@', (interaction.member.user).id, '> / `', (interaction.member.user).tag, '` / `', (interaction.member.user).id, `\`*
                                              > <:Partner_Notification:992727141340954624> | **Mention:** `, dootabase.get(String((String((interaction.guild).id) + '-conditation10_notif_server'))), '', '\n', '\n', '\n', dootabase.get(String((String(dootabase.get(String((String((interaction.guild).id) + '-id_server')))) + '-part_pub_server')))].join(''))))
                                                                                                        .setFooter(String((String(s4d.database.get(String('tag_author_footer_fr'))) + String((interaction.member.user).tag))))
                                                                                                    ]
                                                                                                });
                                                                                            }
                                                                                        }
                                                                                    }
                                                                                } else {
                                                                                    var embed = new Discord.MessageEmbed()
                                                                                    embed.setColor(s4d.database.get(String('wrong_color')));
                                                                                    embed.setDescription((String(s4d.database.get(String('wrong_emoji'))) + String(s4d.database.get(String('limite_part_message_fr')))));

                                                                                    await interaction.reply({
                                                                                        embeds: [(embed)],
                                                                                        ephemeral: true,
                                                                                        components: []
                                                                                    });
                                                                                }
                                                                            } else {
                                                                                var embed = new Discord.MessageEmbed()
                                                                                embed.setColor(s4d.database.get(String('wrong_color')));
                                                                                embed.setDescription((String(s4d.database.get(String('wrong_emoji'))) + String(s4d.database.get(String('time_server_part_limite_reply_message_fr')))));

                                                                                await interaction.reply({
                                                                                    embeds: [(embed)],
                                                                                    ephemeral: true,
                                                                                    components: []
                                                                                });
                                                                            }
                                                                        } else {
                                                                            var embed = new Discord.MessageEmbed()
                                                                            embed.setColor(s4d.database.get(String('wrong_color')));
                                                                            embed.setDescription((String(s4d.database.get(String('wrong_emoji'))) + String(s4d.database.get(String('info_change_config_menu_message_fr')))));

                                                                            await interaction.reply({
                                                                                embeds: [(embed)],
                                                                                ephemeral: true,
                                                                                components: []
                                                                            });
                                                                        }
                                                                    } else {
                                                                        var embed = new Discord.MessageEmbed()
                                                                        embed.setColor(s4d.database.get(String('wrong_color')));
                                                                        embed.setDescription((String(s4d.database.get(String('wrong_emoji'))) + String(s4d.database.get(String('info_change_config_menu_message_fr')))));

                                                                        await interaction.reply({
                                                                            embeds: [(embed)],
                                                                            ephemeral: true,
                                                                            components: []
                                                                        });
                                                                    }
                                                                } else {
                                                                    var embed = new Discord.MessageEmbed()
                                                                    embed.setColor(s4d.database.get(String('wrong_color')));
                                                                    embed.setDescription((String(s4d.database.get(String('wrong_emoji'))) + String(s4d.database.get(String('info_change_config_menu_message_fr')))));

                                                                    await interaction.reply({
                                                                        embeds: [(embed)],
                                                                        ephemeral: true,
                                                                        components: []
                                                                    });
                                                                }
                                                            } else {
                                                                var embed = new Discord.MessageEmbed()
                                                                embed.setColor(s4d.database.get(String('wrong_color')));
                                                                embed.setDescription((String(s4d.database.get(String('wrong_emoji'))) + String(s4d.database.get(String('info_change_config_menu_message_fr')))));

                                                                await interaction.reply({
                                                                    embeds: [(embed)],
                                                                    ephemeral: true,
                                                                    components: []
                                                                });
                                                            }
                                                        } else {
                                                            var embed = new Discord.MessageEmbed()
                                                            embed.setColor(s4d.database.get(String('wrong_color')));
                                                            embed.setDescription((String(s4d.database.get(String('wrong_emoji'))) + String(s4d.database.get(String('info_change_config_menu_message_fr')))));

                                                            await interaction.reply({
                                                                embeds: [(embed)],
                                                                ephemeral: true,
                                                                components: []
                                                            });
                                                        }
                                                    } else {
                                                        var embed = new Discord.MessageEmbed()
                                                        embed.setColor(s4d.database.get(String('embed_color')));
                                                        embed.setDescription((String(s4d.database.get(String('blacklist_emoji'))) + String(s4d.database.get(String('server_owner_chanel_message_fr')))));

                                                        await interaction.reply({
                                                            embeds: [(embed)],
                                                            ephemeral: true,
                                                            components: []
                                                        });
                                                    }
                                                } else {
                                                    var embed = new Discord.MessageEmbed()
                                                    embed.setColor(s4d.database.get(String('embed_color')));
                                                    embed.setDescription((String(s4d.database.get(String('blacklist_emoji'))) + String(s4d.database.get(String('server_owner_chanel_message_fr')))));

                                                    await interaction.reply({
                                                        embeds: [(embed)],
                                                        ephemeral: true,
                                                        components: []
                                                    });
                                                }
                                            } else {
                                                var embed = new Discord.MessageEmbed()
                                                embed.setColor(s4d.database.get(String('embed_color')));
                                                embed.setDescription((String(s4d.database.get(String('blacklist_emoji'))) + String(s4d.database.get(String('server_owner_form_message_fr')))));

                                                await interaction.reply({
                                                    embeds: [(embed)],
                                                    ephemeral: true,
                                                    components: []
                                                });
                                            }
                                        } else {
                                            var embed = new Discord.MessageEmbed()
                                            embed.setColor(s4d.database.get(String('embed_color')));
                                            embed.setDescription((String(s4d.database.get(String('blacklist_emoji'))) + String(s4d.database.get(String('server_blacklist_message_fr')))));

                                            await interaction.reply({
                                                embeds: [(embed)],
                                                ephemeral: true,
                                                components: []
                                            });
                                        }
                                    } else {
                                        var embed = new Discord.MessageEmbed()
                                        embed.setColor(s4d.database.get(String('embed_color')));
                                        embed.setDescription((String(s4d.database.get(String('blacklist_emoji'))) + String(s4d.database.get(String('server_blacklist_message_fr')))));

                                        await interaction.reply({
                                            embeds: [(embed)],
                                            ephemeral: true,
                                            components: []
                                        });
                                    }
                                } else {
                                    var embed = new Discord.MessageEmbed()
                                    embed.setColor(s4d.database.get(String('wrong_color')));
                                    embed.setDescription((String(s4d.database.get(String('wrong_emoji'))) + String(s4d.database.get(String('nover_server_message_fr')))));

                                    await interaction.reply({
                                        embeds: [(embed)],
                                        ephemeral: true,
                                        components: []
                                    });
                                }
                            } else {
                                var embed = new Discord.MessageEmbed()
                                embed.setColor(s4d.database.get(String('wrong_color')));
                                embed.setDescription((String(s4d.database.get(String('wrong_emoji'))) + String(s4d.database.get(String('nover_server_message_fr')))));

                                await interaction.reply({
                                    embeds: [(embed)],
                                    ephemeral: true,
                                    components: []
                                });
                            }
                        } else {
                            var embed = new Discord.MessageEmbed()
                            embed.setColor(s4d.database.get(String('wrong_color')));
                            embed.setDescription((String(s4d.database.get(String('wrong_emoji'))) + String(s4d.database.get(String('bot_not_send_message_fr')))));

                            await interaction.reply({
                                embeds: [(embed)],
                                ephemeral: true,
                                components: []
                            });
                        }
                    } else {
                        var embed = new Discord.MessageEmbed()
                        embed.setColor(s4d.database.get(String('wrong_color')));
                        embed.setDescription((String(s4d.database.get(String('wrong_emoji'))) + String(s4d.database.get(String('bot_not_send_message_fr')))));

                        await interaction.reply({
                            embeds: [(embed)],
                            ephemeral: true,
                            components: []
                        });
                    }
                } else {
                    var embed = new Discord.MessageEmbed()
                    embed.setColor(s4d.database.get(String('wrong_color')));
                    embed.setDescription((String(s4d.database.get(String('wrong_emoji'))) + String(s4d.database.get(String('wrong_user_noexist_partner_list_message_fr')))));

                    await interaction.reply({
                        embeds: [(embed)],
                        ephemeral: true,
                        components: []
                    });
                }
            }
        }
        if ((interaction.customId) == 'accept_condition9') {
            if (((interaction.member.user).id) == ((interaction.member.user).id)) {
                dootabase.setFile("./" + 'Donnés' + ".json");
                if (dootabase.get(String(([dootabase.get(String((String((interaction.guild).id) + '-id_server'))), '-', (interaction.member.user).id, '-partner_list'].join('')))) == 'partner') {
                    if (ShsHSjJSjSJSJSGHkkhdjdmns.includes(s4d.client.channels.cache.get(dootabase.get(String((String(dootabase.get(String((String((interaction.guild).id) + '-id_server')))) + '-part_chanel')))).permissionsFor((((s4d.client.guilds.cache.get(dootabase.get(String((String((interaction.guild).id) + '-id_server'))))).members.cache.get('992907384592805968') || await (s4d.client.guilds.cache.get(dootabase.get(String((String((interaction.guild).id) + '-id_server'))))).members.fetch('992907384592805968')).user)).toArray().filter(x => x == 'SEND_MESSAGES')[0])) {
                        if (ShsHSjJSjSJSJSGHkkhdjdmns.includes(s4d.client.channels.cache.get(dootabase.get(String((String((interaction.guild).id) + '-part_chanel')))).permissionsFor((((interaction.guild).members.cache.get('992907384592805968') || await (interaction.guild).members.fetch('992907384592805968')).user)).toArray().filter(x => x == 'SEND_MESSAGES')[0])) {
                            if (dootabase.get(String(((interaction.guild).id))) == 'verif_serv') {
                                if (dootabase.get(String(dootabase.get(String((String((interaction.guild).id) + '-id_server'))))) == 'verif_serv') {
                                    if (!(dootabase.get(String(dootabase.get(String((String((interaction.guild).id) + '-id_server'))))) == 'blacklist_serv')) {
                                        if (!(dootabase.get(String(((interaction.guild).id))) == 'blacklist_serv')) {
                                            if (!(dootabase.get(String(((interaction.member.user).id))) == 'raid')) {
                                                if (!(dootabase.get(String(((interaction.guild).ownerId))) == 'raid')) {
                                                    if (!(dootabase.get(String(((s4d.client.guilds.cache.get(dootabase.get(String((String((interaction.guild).id) + '-id_server'))))).ownerId))) == 'raid')) {
                                                        if (dootabase.get(String((String((interaction.guild).id) + '-owner-id_server'))) == ((interaction.guild).ownerId)) {
                                                            if (dootabase.get(String((String(dootabase.get(String((String((interaction.guild).id) + '-id_server')))) + '-owner-id_server'))) == ((s4d.client.guilds.cache.get(dootabase.get(String((String((interaction.guild).id) + '-id_server'))))).ownerId)) {
                                                                if (dootabase.get(String((String((interaction.guild).id) + '-name_server'))) == ((interaction.guild).name)) {
                                                                    if (!dootabase.has(String(([(interaction.guild).id, '-', dootabase.get(String((String((interaction.guild).id) + '-id_server'))), '-cooldown_part'].join('')))) || dootabase.get(String(([(interaction.guild).id, '-', dootabase.get(String((String((interaction.guild).id) + '-id_server'))), '-cooldown_part'].join('')))) <= (Math.floor(new Date().getTime() / 1000))) {
                                                                        if (!dootabase.has(String((String((interaction.guild).id) + '-number_part'))) || !(dootabase.get(String((String((interaction.guild).id) + '-number_part'))) >= 20)) {
                                                                            if ((dootabase.get(String((String((interaction.guild).id) + '-conditation9_notif_client'))) == '@everyone' || dootabase.get(String((String((interaction.guild).id) + '-conditation9_notif_client'))) == '@here') && (dootabase.get(String((String(dootabase.get(String((String((interaction.guild).id) + '-id_server')))) + '-mention_everyone'))) == 'Désactivées')) {
                                                                                var embed = new Discord.MessageEmbed()
                                                                                embed.setColor(s4d.database.get(String('wrong_color')));
                                                                                embed.setDescription((String(s4d.database.get(String('wrong_emoji'))) + String(s4d.database.get(String('notif_noactive_everyone_message_fr')))));

                                                                                await interaction.update({
                                                                                    embeds: [(embed)],
                                                                                    components: []
                                                                                });
                                                                            } else {
                                                                                dootabase.add(String((String(dootabase.get(String((String((interaction.guild).id) + '-id_server')))) + '-part_count_limite')), parseInt(1));
                                                                                dootabase.set(String(([(interaction.guild).id, '-', dootabase.get(String((String((interaction.guild).id) + '-id_server'))), '-cooldown_part', '', ''].join(''))), ((Math.floor(new Date().getTime() / 1000)) + 604800));
                                                                                var embed = new Discord.MessageEmbed()
                                                                                embed.setDescription('<:Partner_Tick:992734092972003349> **| Partenariat terminé !**');
                                                                                embed.setColor(s4d.database.get(String('good_color')));
                                                                                embed.setFooter((String(s4d.database.get(String('tag_author_footer_fr'))) + String((interaction.member.user).tag)), ((interaction.member.user).displayAvatarURL({
                                                                                    format: "png"
                                                                                })));
                                                                                embed.setTimestamp();

                                                                                await interaction.update({
                                                                                    embeds: [(embed)],
                                                                                    components: []
                                                                                });
                                                                                if (dootabase.get(String((String((interaction.guild).id) + '-conditation9_notif_client'))) == 'Notification Partenariat') {
                                                                                    s4d.client.channels.cache.get(dootabase.get(String((String(dootabase.get(String((String((interaction.guild).id) + '-id_server')))) + '-part_chanel')))).send({
                                                                                        content: String((['> <:Partner_Member:994858030942408704> | **Auteur:** *<@', (interaction.member.user).id, '> / `', (interaction.member.user).tag, '` / `', (interaction.member.user).id, `\`*
                                            > <:Partner_Notification:992727141340954624> | **Mention:** <@&`, dootabase.get(String((String(dootabase.get(String((String((interaction.guild).id) + '-id_server')))) + '-part_notif_rank'))), '>', '\n', '\n', '\n', dootabase.get(String((String((interaction.guild).id) + '-part_pub_server')))].join('')))
                                                                                    });
                                                                                    s4d.client.channels.cache.get(dootabase.get(String((String(dootabase.get(String((String((interaction.guild).id) + '-id_server')))) + '-part_logs_server')))).send({
                                                                                        embeds: [new MessageEmbed()
                                                                                            .setTitle(String((String(s4d.database.get(String('save_emoji'))) + String(s4d.database.get(String('logs_title_part_title_fr'))))))
                                                                                            .setColor(String(s4d.database.get(String('embed_color'))))
                                                                                            .setDescription(String((['> <:Partner_Member:994858030942408704> | **Auteur:** *<@', (interaction.member.user).id, '> / `', (interaction.member.user).tag, '` / `', (interaction.member.user).id, `\`*
                                            > <:Partner_Notification:992727141340954624> | **Mention:** `, dootabase.get(String((String((interaction.guild).id) + '-conditation9_notif_client'))), '', '\n', '\n', '\n', dootabase.get(String((String((interaction.guild).id) + '-part_pub_server')))].join(''))))
                                                                                            .setFooter(String((String(s4d.database.get(String('tag_author_footer_fr'))) + String((interaction.member.user).tag))))
                                                                                        ]
                                                                                    });
                                                                                    if (dootabase.get(String((String((interaction.guild).id) + '-conditation9_notif_server'))) == 'Notification Partenariat') {
                                                                                        s4d.client.channels.cache.get(dootabase.get(String((String((interaction.guild).id) + '-part_chanel')))).send({
                                                                                            content: String((['> <:Partner_Member:994858030942408704> | **Auteur:** *<@', (interaction.member.user).id, '> / `', (interaction.member.user).tag, '` / `', (interaction.member.user).id, `\`*
                                              > <:Partner_Notification:992727141340954624> | **Mention:** <@&`, dootabase.get(String((String((interaction.guild).id) + '-part_notif_rank'))), '>', '\n', '\n', '\n', dootabase.get(String((String(dootabase.get(String((String((interaction.guild).id) + '-id_server')))) + '-part_pub_server')))].join('')))
                                                                                        });
                                                                                        s4d.client.channels.cache.get(dootabase.get(String((String((interaction.guild).id) + '-part_logs_server')))).send({
                                                                                            embeds: [new MessageEmbed()
                                                                                                .setTitle(String((String(s4d.database.get(String('save_emoji'))) + String(s4d.database.get(String('logs_title_part_title_fr'))))))
                                                                                                .setColor(String(s4d.database.get(String('embed_color'))))
                                                                                                .setDescription(String((['> <:Partner_Member:994858030942408704> | **Auteur:** *<@', (interaction.member.user).id, '> / `', (interaction.member.user).tag, '` / `', (interaction.member.user).id, `\`*
                                              > <:Partner_Notification:992727141340954624> | **Mention:** `, dootabase.get(String((String((interaction.guild).id) + '-conditation9_notif_server'))), '', '\n', '\n', '\n', dootabase.get(String((String(dootabase.get(String((String((interaction.guild).id) + '-id_server')))) + '-part_pub_server')))].join(''))))
                                                                                                .setFooter(String((String(s4d.database.get(String('tag_author_footer_fr'))) + String((interaction.member.user).tag))))
                                                                                            ]
                                                                                        });
                                                                                    } else {
                                                                                        s4d.client.channels.cache.get(dootabase.get(String((String((interaction.guild).id) + '-part_chanel')))).send({
                                                                                            content: String((['> <:Partner_Member:994858030942408704> | **Auteur:** *<@', (interaction.member.user).id, '> / `', (interaction.member.user).tag, '` / `', (interaction.member.user).id, `\`*
                                              > <:Partner_Notification:992727141340954624> | **Mention:** `, dootabase.get(String((String((interaction.guild).id) + '-conditation9_notif_server'))), '', '\n', '\n', '\n', dootabase.get(String((String(dootabase.get(String((String((interaction.guild).id) + '-id_server')))) + '-part_pub_server')))].join('')))
                                                                                        });
                                                                                        s4d.client.channels.cache.get(dootabase.get(String((String((interaction.guild).id) + '-part_logs_server')))).send({
                                                                                            embeds: [new MessageEmbed()
                                                                                                .setTitle(String((String(s4d.database.get(String('save_emoji'))) + String(s4d.database.get(String('logs_title_part_title_fr'))))))
                                                                                                .setColor(String(s4d.database.get(String('embed_color'))))
                                                                                                .setDescription(String((['> <:Partner_Member:994858030942408704> | **Auteur:** *<@', (interaction.member.user).id, '> / `', (interaction.member.user).tag, '` / `', (interaction.member.user).id, `\`*
                                              > <:Partner_Notification:992727141340954624> | **Mention:** `, dootabase.get(String((String((interaction.guild).id) + '-conditation9_notif_server'))), '', '\n', '\n', '\n', dootabase.get(String((String(dootabase.get(String((String((interaction.guild).id) + '-id_server')))) + '-part_pub_server')))].join(''))))
                                                                                                .setFooter(String((String(s4d.database.get(String('tag_author_footer_fr'))) + String((interaction.member.user).tag))))
                                                                                            ]
                                                                                        });
                                                                                    }
                                                                                } else {
                                                                                    s4d.client.channels.cache.get(dootabase.get(String((String(dootabase.get(String((String((interaction.guild).id) + '-id_server')))) + '-part_chanel')))).send({
                                                                                        content: String((['> <:Partner_Member:994858030942408704> | **Auteur:** *<@', (interaction.member.user).id, '> / `', (interaction.member.user).tag, '` / `', (interaction.member.user).id, `\`*
                                            > <:Partner_Notification:992727141340954624> | **Mention:** `, dootabase.get(String((String((interaction.guild).id) + '-conditation9_notif_client'))), '', '\n', '\n', '\n', dootabase.get(String((String((interaction.guild).id) + '-part_pub_server')))].join('')))
                                                                                    });
                                                                                    s4d.client.channels.cache.get(dootabase.get(String((String(dootabase.get(String((String((interaction.guild).id) + '-id_server')))) + '-part_logs_server')))).send({
                                                                                        embeds: [new MessageEmbed()
                                                                                            .setTitle(String((String(s4d.database.get(String('save_emoji'))) + String(s4d.database.get(String('logs_title_part_title_fr'))))))
                                                                                            .setColor(String(s4d.database.get(String('embed_color'))))
                                                                                            .setDescription(String((['> <:Partner_Member:994858030942408704> | **Auteur:** *<@', (interaction.member.user).id, '> / `', (interaction.member.user).tag, '` / `', (interaction.member.user).id, `\`*
                                            > <:Partner_Notification:992727141340954624> | **Mention:** `, dootabase.get(String((String((interaction.guild).id) + '-conditation9_notif_client'))), '', '\n', '\n', '\n', dootabase.get(String((String((interaction.guild).id) + '-part_pub_server')))].join(''))))
                                                                                            .setFooter(String((String(s4d.database.get(String('tag_author_footer_fr'))) + String((interaction.member.user).tag))))
                                                                                        ]
                                                                                    });
                                                                                    if (dootabase.get(String((String((interaction.guild).id) + '-conditation9_notif_server'))) == 'Notification Partenariat') {
                                                                                        s4d.client.channels.cache.get(dootabase.get(String((String((interaction.guild).id) + '-part_chanel')))).send({
                                                                                            content: String((['> <:Partner_Member:994858030942408704> | **Auteur:** *<@', (interaction.member.user).id, '> / `', (interaction.member.user).tag, '` / `', (interaction.member.user).id, `\`*
                                              > <:Partner_Notification:992727141340954624> | **Mention:** <@&`, dootabase.get(String((String((interaction.guild).id) + '-part_notif_rank'))), '>', '\n', '\n', '\n', dootabase.get(String((String(dootabase.get(String((String((interaction.guild).id) + '-id_server')))) + '-part_pub_server')))].join('')))
                                                                                        });
                                                                                        s4d.client.channels.cache.get(dootabase.get(String((String((interaction.guild).id) + '-part_logs_server')))).send({
                                                                                            embeds: [new MessageEmbed()
                                                                                                .setTitle(String((String(s4d.database.get(String('save_emoji'))) + String(s4d.database.get(String('logs_title_part_title_fr'))))))
                                                                                                .setColor(String(s4d.database.get(String('embed_color'))))
                                                                                                .setDescription(String((['> <:Partner_Member:994858030942408704> | **Auteur:** *<@', (interaction.member.user).id, '> / `', (interaction.member.user).tag, '` / `', (interaction.member.user).id, `\`*
                                              > <:Partner_Notification:992727141340954624> | **Mention:** `, dootabase.get(String((String((interaction.guild).id) + '-conditation9_notif_server'))), '', '\n', '\n', '\n', dootabase.get(String((String(dootabase.get(String((String((interaction.guild).id) + '-id_server')))) + '-part_pub_server')))].join(''))))
                                                                                                .setFooter(String((String(s4d.database.get(String('tag_author_footer_fr'))) + String((interaction.member.user).tag))))
                                                                                            ]
                                                                                        });
                                                                                    } else {
                                                                                        s4d.client.channels.cache.get(dootabase.get(String((String((interaction.guild).id) + '-part_chanel')))).send({
                                                                                            content: String((['> <:Partner_Member:994858030942408704> | **Auteur:** *<@', (interaction.member.user).id, '> / `', (interaction.member.user).tag, '` / `', (interaction.member.user).id, `\`*
                                              > <:Partner_Notification:992727141340954624> | **Mention:** `, dootabase.get(String((String((interaction.guild).id) + '-conditation9_notif_server'))), '', '\n', '\n', '\n', dootabase.get(String((String(dootabase.get(String((String((interaction.guild).id) + '-id_server')))) + '-part_pub_server')))].join('')))
                                                                                        });
                                                                                        s4d.client.channels.cache.get(dootabase.get(String((String((interaction.guild).id) + '-part_logs_server')))).send({
                                                                                            embeds: [new MessageEmbed()
                                                                                                .setTitle(String((String(s4d.database.get(String('save_emoji'))) + String(s4d.database.get(String('logs_title_part_title_fr'))))))
                                                                                                .setColor(String(s4d.database.get(String('embed_color'))))
                                                                                                .setDescription(String((['> <:Partner_Member:994858030942408704> | **Auteur:** *<@', (interaction.member.user).id, '> / `', (interaction.member.user).tag, '` / `', (interaction.member.user).id, `\`*
                                              > <:Partner_Notification:992727141340954624> | **Mention:** `, dootabase.get(String((String((interaction.guild).id) + '-conditation9_notif_server'))), '', '\n', '\n', '\n', dootabase.get(String((String(dootabase.get(String((String((interaction.guild).id) + '-id_server')))) + '-part_pub_server')))].join(''))))
                                                                                                .setFooter(String((String(s4d.database.get(String('tag_author_footer_fr'))) + String((interaction.member.user).tag))))
                                                                                            ]
                                                                                        });
                                                                                    }
                                                                                }
                                                                            }

                                                                        } else {
                                                                            var embed = new Discord.MessageEmbed()
                                                                            embed.setColor(s4d.database.get(String('wrong_color')));
                                                                            embed.setDescription((String(s4d.database.get(String('wrong_emoji'))) + String(s4d.database.get(String('limite_part_message_fr')))));

                                                                            await interaction.reply({
                                                                                embeds: [(embed)],
                                                                                ephemeral: true,
                                                                                components: []
                                                                            });
                                                                        }
                                                                    } else {
                                                                        var embed = new Discord.MessageEmbed()
                                                                        embed.setColor(s4d.database.get(String('wrong_color')));
                                                                        embed.setDescription((String(s4d.database.get(String('wrong_emoji'))) + String(s4d.database.get(String('time_server_part_limite_reply_message_fr')))));

                                                                        await interaction.reply({
                                                                            embeds: [(embed)],
                                                                            ephemeral: true,
                                                                            components: []
                                                                        });
                                                                    }
                                                                } else {
                                                                    var embed = new Discord.MessageEmbed()
                                                                    embed.setColor(s4d.database.get(String('wrong_color')));
                                                                    embed.setDescription((String(s4d.database.get(String('wrong_emoji'))) + String(s4d.database.get(String('info_change_config_menu_message_fr')))));

                                                                    await interaction.reply({
                                                                        embeds: [(embed)],
                                                                        ephemeral: true,
                                                                        components: []
                                                                    });
                                                                }
                                                            } else {
                                                                var embed = new Discord.MessageEmbed()
                                                                embed.setColor(s4d.database.get(String('wrong_color')));
                                                                embed.setDescription((String(s4d.database.get(String('wrong_emoji'))) + String(s4d.database.get(String('info_change_config_menu_message_fr')))));

                                                                await interaction.reply({
                                                                    embeds: [(embed)],
                                                                    ephemeral: true,
                                                                    components: []
                                                                });
                                                            }
                                                        } else {
                                                            var embed = new Discord.MessageEmbed()
                                                            embed.setColor(s4d.database.get(String('wrong_color')));
                                                            embed.setDescription((String(s4d.database.get(String('wrong_emoji'))) + String(s4d.database.get(String('info_change_config_menu_message_fr')))));

                                                            await interaction.reply({
                                                                embeds: [(embed)],
                                                                ephemeral: true,
                                                                components: []
                                                            });
                                                        }
                                                    } else {
                                                        var embed = new Discord.MessageEmbed()
                                                        embed.setColor(s4d.database.get(String('embed_color')));
                                                        embed.setDescription((String(s4d.database.get(String('blacklist_emoji'))) + String(s4d.database.get(String('server_owner_chanel_message_fr')))));

                                                        await interaction.reply({
                                                            embeds: [(embed)],
                                                            ephemeral: true,
                                                            components: []
                                                        });
                                                    }
                                                } else {
                                                    var embed = new Discord.MessageEmbed()
                                                    embed.setColor(s4d.database.get(String('embed_color')));
                                                    embed.setDescription((String(s4d.database.get(String('blacklist_emoji'))) + String(s4d.database.get(String('server_owner_chanel_message_fr')))));

                                                    await interaction.reply({
                                                        embeds: [(embed)],
                                                        ephemeral: true,
                                                        components: []
                                                    });
                                                }
                                            } else {
                                                var embed = new Discord.MessageEmbed()
                                                embed.setColor(s4d.database.get(String('embed_color')));
                                                embed.setDescription((String(s4d.database.get(String('blacklist_emoji'))) + String(s4d.database.get(String('server_owner_form_message_fr')))));

                                                await interaction.reply({
                                                    embeds: [(embed)],
                                                    ephemeral: true,
                                                    components: []
                                                });
                                            }
                                        } else {
                                            var embed = new Discord.MessageEmbed()
                                            embed.setColor(s4d.database.get(String('embed_color')));
                                            embed.setDescription((String(s4d.database.get(String('blacklist_emoji'))) + String(s4d.database.get(String('server_blacklist_message_fr')))));

                                            await interaction.reply({
                                                embeds: [(embed)],
                                                ephemeral: true,
                                                components: []
                                            });
                                        }
                                    } else {
                                        var embed = new Discord.MessageEmbed()
                                        embed.setColor(s4d.database.get(String('embed_color')));
                                        embed.setDescription((String(s4d.database.get(String('blacklist_emoji'))) + String(s4d.database.get(String('server_blacklist_message_fr')))));

                                        await interaction.reply({
                                            embeds: [(embed)],
                                            ephemeral: true,
                                            components: []
                                        });
                                    }
                                } else {
                                    var embed = new Discord.MessageEmbed()
                                    embed.setColor(s4d.database.get(String('wrong_color')));
                                    embed.setDescription((String(s4d.database.get(String('wrong_emoji'))) + String(s4d.database.get(String('nover_server_message_fr')))));

                                    await interaction.reply({
                                        embeds: [(embed)],
                                        ephemeral: true,
                                        components: []
                                    });
                                }
                            } else {
                                var embed = new Discord.MessageEmbed()
                                embed.setColor(s4d.database.get(String('wrong_color')));
                                embed.setDescription((String(s4d.database.get(String('wrong_emoji'))) + String(s4d.database.get(String('nover_server_message_fr')))));

                                await interaction.reply({
                                    embeds: [(embed)],
                                    ephemeral: true,
                                    components: []
                                });
                            }
                        } else {
                            var embed = new Discord.MessageEmbed()
                            embed.setColor(s4d.database.get(String('wrong_color')));
                            embed.setDescription((String(s4d.database.get(String('wrong_emoji'))) + String(s4d.database.get(String('bot_not_send_message_fr')))));

                            await interaction.reply({
                                embeds: [(embed)],
                                ephemeral: true,
                                components: []
                            });
                        }
                    } else {
                        var embed = new Discord.MessageEmbed()
                        embed.setColor(s4d.database.get(String('wrong_color')));
                        embed.setDescription((String(s4d.database.get(String('wrong_emoji'))) + String(s4d.database.get(String('bot_not_send_message_fr')))));

                        await interaction.reply({
                            embeds: [(embed)],
                            ephemeral: true,
                            components: []
                        });
                    }
                } else {
                    var embed = new Discord.MessageEmbed()
                    embed.setColor(s4d.database.get(String('wrong_color')));
                    embed.setDescription((String(s4d.database.get(String('wrong_emoji'))) + String(s4d.database.get(String('wrong_user_noexist_partner_list_message_fr')))));

                    await interaction.reply({
                        embeds: [(embed)],
                        ephemeral: true,
                        components: []
                    });
                }
            }
        }
        if ((interaction.customId) == 'accept_condition8') {
            if (((interaction.member.user).id) == ((interaction.member.user).id)) {
                dootabase.setFile("./" + 'Donnés' + ".json");
                if (dootabase.get(String(([dootabase.get(String((String((interaction.guild).id) + '-id_server'))), '-', (interaction.member.user).id, '-partner_list'].join('')))) == 'partner') {
                    if (ShsHSjJSjSJSJSGHkkhdjdmns.includes(s4d.client.channels.cache.get(dootabase.get(String((String(dootabase.get(String((String((interaction.guild).id) + '-id_server')))) + '-part_chanel')))).permissionsFor((((s4d.client.guilds.cache.get(dootabase.get(String((String((interaction.guild).id) + '-id_server'))))).members.cache.get('992907384592805968') || await (s4d.client.guilds.cache.get(dootabase.get(String((String((interaction.guild).id) + '-id_server'))))).members.fetch('992907384592805968')).user)).toArray().filter(x => x == 'SEND_MESSAGES')[0])) {
                        if (ShsHSjJSjSJSJSGHkkhdjdmns.includes(s4d.client.channels.cache.get(dootabase.get(String((String((interaction.guild).id) + '-part_chanel')))).permissionsFor((((interaction.guild).members.cache.get('992907384592805968') || await (interaction.guild).members.fetch('992907384592805968')).user)).toArray().filter(x => x == 'SEND_MESSAGES')[0])) {
                            if (dootabase.get(String(((interaction.guild).id))) == 'verif_serv') {
                                if (dootabase.get(String(dootabase.get(String((String((interaction.guild).id) + '-id_server'))))) == 'verif_serv') {
                                    if (!(dootabase.get(String(dootabase.get(String((String((interaction.guild).id) + '-id_server'))))) == 'blacklist_serv')) {
                                        if (!(dootabase.get(String(((interaction.guild).id))) == 'blacklist_serv')) {
                                            if (!(dootabase.get(String(((interaction.member.user).id))) == 'raid')) {
                                                if (!(dootabase.get(String(((interaction.guild).ownerId))) == 'raid')) {
                                                    if (!(dootabase.get(String(((s4d.client.guilds.cache.get(dootabase.get(String((String((interaction.guild).id) + '-id_server'))))).ownerId))) == 'raid')) {
                                                        if (dootabase.get(String((String((interaction.guild).id) + '-owner-id_server'))) == ((interaction.guild).ownerId)) {
                                                            if (dootabase.get(String((String(dootabase.get(String((String((interaction.guild).id) + '-id_server')))) + '-owner-id_server'))) == ((s4d.client.guilds.cache.get(dootabase.get(String((String((interaction.guild).id) + '-id_server'))))).ownerId)) {
                                                                if (dootabase.get(String((String((interaction.guild).id) + '-name_server'))) == ((interaction.guild).name)) {
                                                                    if (!dootabase.has(String(([(interaction.guild).id, '-', dootabase.get(String((String((interaction.guild).id) + '-id_server'))), '-cooldown_part'].join('')))) || dootabase.get(String(([(interaction.guild).id, '-', dootabase.get(String((String((interaction.guild).id) + '-id_server'))), '-cooldown_part'].join('')))) <= (Math.floor(new Date().getTime() / 1000))) {
                                                                        if (!dootabase.has(String((String((interaction.guild).id) + '-number_part'))) || !(dootabase.get(String((String((interaction.guild).id) + '-number_part'))) >= 20)) {
                                                                            if ((dootabase.get(String((String((interaction.guild).id) + '-conditation8_notif_client'))) == '@everyone' || dootabase.get(String((String((interaction.guild).id) + '-conditation8_notif_client'))) == '@here') && (dootabase.get(String((String(dootabase.get(String((String((interaction.guild).id) + '-id_server')))) + '-mention_everyone'))) == 'Désactivées')) {
                                                                                var embed = new Discord.MessageEmbed()
                                                                                embed.setColor(s4d.database.get(String('wrong_color')));
                                                                                embed.setDescription((String(s4d.database.get(String('wrong_emoji'))) + String(s4d.database.get(String('notif_noactive_everyone_message_fr')))));

                                                                                await interaction.update({
                                                                                    embeds: [(embed)],
                                                                                    components: []
                                                                                });
                                                                            } else {
                                                                                dootabase.add(String((String(dootabase.get(String((String((interaction.guild).id) + '-id_server')))) + '-part_count_limite')), parseInt(1));
                                                                                dootabase.set(String(([(interaction.guild).id, '-', dootabase.get(String((String((interaction.guild).id) + '-id_server'))), '-cooldown_part', '', ''].join(''))), ((Math.floor(new Date().getTime() / 1000)) + 604800));
                                                                                var embed = new Discord.MessageEmbed()
                                                                                embed.setDescription('<:Partner_Tick:992734092972003349> **| Partenariat terminé !**');
                                                                                embed.setColor(s4d.database.get(String('good_color')));
                                                                                embed.setFooter((String(s4d.database.get(String('tag_author_footer_fr'))) + String((interaction.member.user).tag)), ((interaction.member.user).displayAvatarURL({
                                                                                    format: "png"
                                                                                })));
                                                                                embed.setTimestamp();

                                                                                await interaction.update({
                                                                                    embeds: [(embed)],
                                                                                    components: []
                                                                                });
                                                                                if (dootabase.get(String((String((interaction.guild).id) + '-conditation8_notif_client'))) == 'Notification Partenariat') {
                                                                                    s4d.client.channels.cache.get(dootabase.get(String((String(dootabase.get(String((String((interaction.guild).id) + '-id_server')))) + '-part_chanel')))).send({
                                                                                        content: String((['> <:Partner_Member:994858030942408704> | **Auteur:** *<@', (interaction.member.user).id, '> / `', (interaction.member.user).tag, '` / `', (interaction.member.user).id, `\`*
                                            > <:Partner_Notification:992727141340954624> | **Mention:** <@&`, dootabase.get(String((String(dootabase.get(String((String((interaction.guild).id) + '-id_server')))) + '-part_notif_rank'))), '>', '\n', '\n', '\n', dootabase.get(String((String((interaction.guild).id) + '-part_pub_server')))].join('')))
                                                                                    });
                                                                                    s4d.client.channels.cache.get(dootabase.get(String((String(dootabase.get(String((String((interaction.guild).id) + '-id_server')))) + '-part_logs_server')))).send({
                                                                                        embeds: [new MessageEmbed()
                                                                                            .setTitle(String((String(s4d.database.get(String('save_emoji'))) + String(s4d.database.get(String('logs_title_part_title_fr'))))))
                                                                                            .setColor(String(s4d.database.get(String('embed_color'))))
                                                                                            .setDescription(String((['> <:Partner_Member:994858030942408704> | **Auteur:** *<@', (interaction.member.user).id, '> / `', (interaction.member.user).tag, '` / `', (interaction.member.user).id, `\`*
                                            > <:Partner_Notification:992727141340954624> | **Mention:** `, dootabase.get(String((String((interaction.guild).id) + '-conditation8_notif_client'))), '', '\n', '\n', '\n', dootabase.get(String((String((interaction.guild).id) + '-part_pub_server')))].join(''))))
                                                                                            .setFooter(String((String(s4d.database.get(String('tag_author_footer_fr'))) + String((interaction.member.user).tag))))
                                                                                        ]
                                                                                    });
                                                                                    if (dootabase.get(String((String((interaction.guild).id) + '-conditation8_notif_server'))) == 'Notification Partenariat') {
                                                                                        s4d.client.channels.cache.get(dootabase.get(String((String((interaction.guild).id) + '-part_chanel')))).send({
                                                                                            content: String((['> <:Partner_Member:994858030942408704> | **Auteur:** *<@', (interaction.member.user).id, '> / `', (interaction.member.user).tag, '` / `', (interaction.member.user).id, `\`*
                                              > <:Partner_Notification:992727141340954624> | **Mention:** <@&`, dootabase.get(String((String((interaction.guild).id) + '-part_notif_rank'))), '>', '\n', '\n', '\n', dootabase.get(String((String(dootabase.get(String((String((interaction.guild).id) + '-id_server')))) + '-part_pub_server')))].join('')))
                                                                                        });
                                                                                        s4d.client.channels.cache.get(dootabase.get(String((String((interaction.guild).id) + '-part_logs_server')))).send({
                                                                                            embeds: [new MessageEmbed()
                                                                                                .setTitle(String((String(s4d.database.get(String('save_emoji'))) + String(s4d.database.get(String('logs_title_part_title_fr'))))))
                                                                                                .setColor(String(s4d.database.get(String('embed_color'))))
                                                                                                .setDescription(String((['> <:Partner_Member:994858030942408704> | **Auteur:** *<@', (interaction.member.user).id, '> / `', (interaction.member.user).tag, '` / `', (interaction.member.user).id, `\`*
                                              > <:Partner_Notification:992727141340954624> | **Mention:** `, dootabase.get(String((String((interaction.guild).id) + '-conditation8_notif_server'))), '', '\n', '\n', '\n', dootabase.get(String((String(dootabase.get(String((String((interaction.guild).id) + '-id_server')))) + '-part_pub_server')))].join(''))))
                                                                                                .setFooter(String((String(s4d.database.get(String('tag_author_footer_fr'))) + String((interaction.member.user).tag))))
                                                                                            ]
                                                                                        });
                                                                                    } else {
                                                                                        s4d.client.channels.cache.get(dootabase.get(String((String((interaction.guild).id) + '-part_chanel')))).send({
                                                                                            content: String((['> <:Partner_Member:994858030942408704> | **Auteur:** *<@', (interaction.member.user).id, '> / `', (interaction.member.user).tag, '` / `', (interaction.member.user).id, `\`*
                                              > <:Partner_Notification:992727141340954624> | **Mention:** `, dootabase.get(String((String((interaction.guild).id) + '-conditation8_notif_server'))), '', '\n', '\n', '\n', dootabase.get(String((String(dootabase.get(String((String((interaction.guild).id) + '-id_server')))) + '-part_pub_server')))].join('')))
                                                                                        });
                                                                                        s4d.client.channels.cache.get(dootabase.get(String((String((interaction.guild).id) + '-part_logs_server')))).send({
                                                                                            embeds: [new MessageEmbed()
                                                                                                .setTitle(String((String(s4d.database.get(String('save_emoji'))) + String(s4d.database.get(String('logs_title_part_title_fr'))))))
                                                                                                .setColor(String(s4d.database.get(String('embed_color'))))
                                                                                                .setDescription(String((['> <:Partner_Member:994858030942408704> | **Auteur:** *<@', (interaction.member.user).id, '> / `', (interaction.member.user).tag, '` / `', (interaction.member.user).id, `\`*
                                              > <:Partner_Notification:992727141340954624> | **Mention:** `, dootabase.get(String((String((interaction.guild).id) + '-conditation8_notif_server'))), '', '\n', '\n', '\n', dootabase.get(String((String(dootabase.get(String((String((interaction.guild).id) + '-id_server')))) + '-part_pub_server')))].join(''))))
                                                                                                .setFooter(String((String(s4d.database.get(String('tag_author_footer_fr'))) + String((interaction.member.user).tag))))
                                                                                            ]
                                                                                        });
                                                                                    }
                                                                                } else {
                                                                                    s4d.client.channels.cache.get(dootabase.get(String((String(dootabase.get(String((String((interaction.guild).id) + '-id_server')))) + '-part_chanel')))).send({
                                                                                        content: String((['> <:Partner_Member:994858030942408704> | **Auteur:** *<@', (interaction.member.user).id, '> / `', (interaction.member.user).tag, '` / `', (interaction.member.user).id, `\`*
                                            > <:Partner_Notification:992727141340954624> | **Mention:** `, dootabase.get(String((String((interaction.guild).id) + '-conditation8_notif_client'))), '', '\n', '\n', '\n', dootabase.get(String((String((interaction.guild).id) + '-part_pub_server')))].join('')))
                                                                                    });
                                                                                    s4d.client.channels.cache.get(dootabase.get(String((String(dootabase.get(String((String((interaction.guild).id) + '-id_server')))) + '-part_logs_server')))).send({
                                                                                        embeds: [new MessageEmbed()
                                                                                            .setTitle(String((String(s4d.database.get(String('save_emoji'))) + String(s4d.database.get(String('logs_title_part_title_fr'))))))
                                                                                            .setColor(String(s4d.database.get(String('embed_color'))))
                                                                                            .setDescription(String((['> <:Partner_Member:994858030942408704> | **Auteur:** *<@', (interaction.member.user).id, '> / `', (interaction.member.user).tag, '` / `', (interaction.member.user).id, `\`*
                                            > <:Partner_Notification:992727141340954624> | **Mention:** `, dootabase.get(String((String((interaction.guild).id) + '-conditation8_notif_client'))), '', '\n', '\n', '\n', dootabase.get(String((String((interaction.guild).id) + '-part_pub_server')))].join(''))))
                                                                                            .setFooter(String((String(s4d.database.get(String('tag_author_footer_fr'))) + String((interaction.member.user).tag))))
                                                                                        ]
                                                                                    });
                                                                                    if (dootabase.get(String((String((interaction.guild).id) + '-conditation8_notif_server'))) == 'Notification Partenariat') {
                                                                                        s4d.client.channels.cache.get(dootabase.get(String((String((interaction.guild).id) + '-part_chanel')))).send({
                                                                                            content: String((['> <:Partner_Member:994858030942408704> | **Auteur:** *<@', (interaction.member.user).id, '> / `', (interaction.member.user).tag, '` / `', (interaction.member.user).id, `\`*
                                              > <:Partner_Notification:992727141340954624> | **Mention:** <@&`, dootabase.get(String((String((interaction.guild).id) + '-part_notif_rank'))), '>', '\n', '\n', '\n', dootabase.get(String((String(dootabase.get(String((String((interaction.guild).id) + '-id_server')))) + '-part_pub_server')))].join('')))
                                                                                        });
                                                                                        s4d.client.channels.cache.get(dootabase.get(String((String((interaction.guild).id) + '-part_logs_server')))).send({
                                                                                            embeds: [new MessageEmbed()
                                                                                                .setTitle(String((String(s4d.database.get(String('save_emoji'))) + String(s4d.database.get(String('logs_title_part_title_fr'))))))
                                                                                                .setColor(String(s4d.database.get(String('embed_color'))))
                                                                                                .setDescription(String((['> <:Partner_Member:994858030942408704> | **Auteur:** *<@', (interaction.member.user).id, '> / `', (interaction.member.user).tag, '` / `', (interaction.member.user).id, `\`*
                                              > <:Partner_Notification:992727141340954624> | **Mention:** `, dootabase.get(String((String((interaction.guild).id) + '-conditation8_notif_server'))), '', '\n', '\n', '\n', dootabase.get(String((String(dootabase.get(String((String((interaction.guild).id) + '-id_server')))) + '-part_pub_server')))].join(''))))
                                                                                                .setFooter(String((String(s4d.database.get(String('tag_author_footer_fr'))) + String((interaction.member.user).tag))))
                                                                                            ]
                                                                                        });
                                                                                    } else {
                                                                                        s4d.client.channels.cache.get(dootabase.get(String((String((interaction.guild).id) + '-part_chanel')))).send({
                                                                                            content: String((['> <:Partner_Member:994858030942408704> | **Auteur:** *<@', (interaction.member.user).id, '> / `', (interaction.member.user).tag, '` / `', (interaction.member.user).id, `\`*
                                              > <:Partner_Notification:992727141340954624> | **Mention:** `, dootabase.get(String((String((interaction.guild).id) + '-conditation8_notif_server'))), '', '\n', '\n', '\n', dootabase.get(String((String(dootabase.get(String((String((interaction.guild).id) + '-id_server')))) + '-part_pub_server')))].join('')))
                                                                                        });
                                                                                        s4d.client.channels.cache.get(dootabase.get(String((String((interaction.guild).id) + '-part_logs_server')))).send({
                                                                                            embeds: [new MessageEmbed()
                                                                                                .setTitle(String((String(s4d.database.get(String('save_emoji'))) + String(s4d.database.get(String('logs_title_part_title_fr'))))))
                                                                                                .setColor(String(s4d.database.get(String('embed_color'))))
                                                                                                .setDescription(String((['> <:Partner_Member:994858030942408704> | **Auteur:** *<@', (interaction.member.user).id, '> / `', (interaction.member.user).tag, '` / `', (interaction.member.user).id, `\`*
                                              > <:Partner_Notification:992727141340954624> | **Mention:** `, dootabase.get(String((String((interaction.guild).id) + '-conditation8_notif_server'))), '', '\n', '\n', '\n', dootabase.get(String((String(dootabase.get(String((String((interaction.guild).id) + '-id_server')))) + '-part_pub_server')))].join(''))))
                                                                                                .setFooter(String((String(s4d.database.get(String('tag_author_footer_fr'))) + String((interaction.member.user).tag))))
                                                                                            ]
                                                                                        });
                                                                                    }
                                                                                }
                                                                            }

                                                                        } else {
                                                                            var embed = new Discord.MessageEmbed()
                                                                            embed.setColor(s4d.database.get(String('wrong_color')));
                                                                            embed.setDescription((String(s4d.database.get(String('wrong_emoji'))) + String(s4d.database.get(String('limite_part_message_fr')))));

                                                                            await interaction.reply({
                                                                                embeds: [(embed)],
                                                                                ephemeral: true,
                                                                                components: []
                                                                            });
                                                                        }
                                                                    } else {
                                                                        var embed = new Discord.MessageEmbed()
                                                                        embed.setColor(s4d.database.get(String('wrong_color')));
                                                                        embed.setDescription((String(s4d.database.get(String('wrong_emoji'))) + String(s4d.database.get(String('time_server_part_limite_reply_message_fr')))));

                                                                        await interaction.reply({
                                                                            embeds: [(embed)],
                                                                            ephemeral: true,
                                                                            components: []
                                                                        });
                                                                    }
                                                                } else {
                                                                    var embed = new Discord.MessageEmbed()
                                                                    embed.setColor(s4d.database.get(String('wrong_color')));
                                                                    embed.setDescription((String(s4d.database.get(String('wrong_emoji'))) + String(s4d.database.get(String('info_change_config_menu_message_fr')))));

                                                                    await interaction.reply({
                                                                        embeds: [(embed)],
                                                                        ephemeral: true,
                                                                        components: []
                                                                    });
                                                                }
                                                            } else {
                                                                var embed = new Discord.MessageEmbed()
                                                                embed.setColor(s4d.database.get(String('wrong_color')));
                                                                embed.setDescription((String(s4d.database.get(String('wrong_emoji'))) + String(s4d.database.get(String('info_change_config_menu_message_fr')))));

                                                                await interaction.reply({
                                                                    embeds: [(embed)],
                                                                    ephemeral: true,
                                                                    components: []
                                                                });
                                                            }
                                                        } else {
                                                            var embed = new Discord.MessageEmbed()
                                                            embed.setColor(s4d.database.get(String('wrong_color')));
                                                            embed.setDescription((String(s4d.database.get(String('wrong_emoji'))) + String(s4d.database.get(String('info_change_config_menu_message_fr')))));

                                                            await interaction.reply({
                                                                embeds: [(embed)],
                                                                ephemeral: true,
                                                                components: []
                                                            });
                                                        }
                                                    } else {
                                                        var embed = new Discord.MessageEmbed()
                                                        embed.setColor(s4d.database.get(String('embed_color')));
                                                        embed.setDescription((String(s4d.database.get(String('blacklist_emoji'))) + String(s4d.database.get(String('server_owner_chanel_message_fr')))));

                                                        await interaction.reply({
                                                            embeds: [(embed)],
                                                            ephemeral: true,
                                                            components: []
                                                        });
                                                    }
                                                } else {
                                                    var embed = new Discord.MessageEmbed()
                                                    embed.setColor(s4d.database.get(String('embed_color')));
                                                    embed.setDescription((String(s4d.database.get(String('blacklist_emoji'))) + String(s4d.database.get(String('server_owner_chanel_message_fr')))));

                                                    await interaction.reply({
                                                        embeds: [(embed)],
                                                        ephemeral: true,
                                                        components: []
                                                    });
                                                }
                                            } else {
                                                var embed = new Discord.MessageEmbed()
                                                embed.setColor(s4d.database.get(String('embed_color')));
                                                embed.setDescription((String(s4d.database.get(String('blacklist_emoji'))) + String(s4d.database.get(String('server_owner_form_message_fr')))));

                                                await interaction.reply({
                                                    embeds: [(embed)],
                                                    ephemeral: true,
                                                    components: []
                                                });
                                            }
                                        } else {
                                            var embed = new Discord.MessageEmbed()
                                            embed.setColor(s4d.database.get(String('embed_color')));
                                            embed.setDescription((String(s4d.database.get(String('blacklist_emoji'))) + String(s4d.database.get(String('server_blacklist_message_fr')))));

                                            await interaction.reply({
                                                embeds: [(embed)],
                                                ephemeral: true,
                                                components: []
                                            });
                                        }
                                    } else {
                                        var embed = new Discord.MessageEmbed()
                                        embed.setColor(s4d.database.get(String('embed_color')));
                                        embed.setDescription((String(s4d.database.get(String('blacklist_emoji'))) + String(s4d.database.get(String('server_blacklist_message_fr')))));

                                        await interaction.reply({
                                            embeds: [(embed)],
                                            ephemeral: true,
                                            components: []
                                        });
                                    }
                                } else {
                                    var embed = new Discord.MessageEmbed()
                                    embed.setColor(s4d.database.get(String('wrong_color')));
                                    embed.setDescription((String(s4d.database.get(String('wrong_emoji'))) + String(s4d.database.get(String('nover_server_message_fr')))));

                                    await interaction.reply({
                                        embeds: [(embed)],
                                        ephemeral: true,
                                        components: []
                                    });
                                }
                            } else {
                                var embed = new Discord.MessageEmbed()
                                embed.setColor(s4d.database.get(String('wrong_color')));
                                embed.setDescription((String(s4d.database.get(String('wrong_emoji'))) + String(s4d.database.get(String('nover_server_message_fr')))));

                                await interaction.reply({
                                    embeds: [(embed)],
                                    ephemeral: true,
                                    components: []
                                });
                            }
                        } else {
                            var embed = new Discord.MessageEmbed()
                            embed.setColor(s4d.database.get(String('wrong_color')));
                            embed.setDescription((String(s4d.database.get(String('wrong_emoji'))) + String(s4d.database.get(String('bot_not_send_message_fr')))));

                            await interaction.reply({
                                embeds: [(embed)],
                                ephemeral: true,
                                components: []
                            });
                        }
                    } else {
                        var embed = new Discord.MessageEmbed()
                        embed.setColor(s4d.database.get(String('wrong_color')));
                        embed.setDescription((String(s4d.database.get(String('wrong_emoji'))) + String(s4d.database.get(String('bot_not_send_message_fr')))));

                        await interaction.reply({
                            embeds: [(embed)],
                            ephemeral: true,
                            components: []
                        });
                    }
                } else {
                    var embed = new Discord.MessageEmbed()
                    embed.setColor(s4d.database.get(String('wrong_color')));
                    embed.setDescription((String(s4d.database.get(String('wrong_emoji'))) + String(s4d.database.get(String('wrong_user_noexist_partner_list_message_fr')))));

                    await interaction.reply({
                        embeds: [(embed)],
                        ephemeral: true,
                        components: []
                    });
                }
            }
        }
        if ((interaction.customId) == 'accept_condition7') {
            if (((interaction.member.user).id) == ((interaction.member.user).id)) {
                dootabase.setFile("./" + 'Donnés' + ".json");
                if (dootabase.get(String(([dootabase.get(String((String((interaction.guild).id) + '-id_server'))), '-', (interaction.member.user).id, '-partner_list'].join('')))) == 'partner') {
                    if (ShsHSjJSjSJSJSGHkkhdjdmns.includes(s4d.client.channels.cache.get(dootabase.get(String((String(dootabase.get(String((String((interaction.guild).id) + '-id_server')))) + '-part_chanel')))).permissionsFor((((s4d.client.guilds.cache.get(dootabase.get(String((String((interaction.guild).id) + '-id_server'))))).members.cache.get('992907384592805968') || await (s4d.client.guilds.cache.get(dootabase.get(String((String((interaction.guild).id) + '-id_server'))))).members.fetch('992907384592805968')).user)).toArray().filter(x => x == 'SEND_MESSAGES')[0])) {
                        if (ShsHSjJSjSJSJSGHkkhdjdmns.includes(s4d.client.channels.cache.get(dootabase.get(String((String((interaction.guild).id) + '-part_chanel')))).permissionsFor((((interaction.guild).members.cache.get('992907384592805968') || await (interaction.guild).members.fetch('992907384592805968')).user)).toArray().filter(x => x == 'SEND_MESSAGES')[0])) {
                            if (dootabase.get(String(((interaction.guild).id))) == 'verif_serv') {
                                if (dootabase.get(String(dootabase.get(String((String((interaction.guild).id) + '-id_server'))))) == 'verif_serv') {
                                    if (!(dootabase.get(String(dootabase.get(String((String((interaction.guild).id) + '-id_server'))))) == 'blacklist_serv')) {
                                        if (!(dootabase.get(String(((interaction.guild).id))) == 'blacklist_serv')) {
                                            if (!(dootabase.get(String(((interaction.member.user).id))) == 'raid')) {
                                                if (!(dootabase.get(String(((interaction.guild).ownerId))) == 'raid')) {
                                                    if (!(dootabase.get(String(((s4d.client.guilds.cache.get(dootabase.get(String((String((interaction.guild).id) + '-id_server'))))).ownerId))) == 'raid')) {
                                                        if (dootabase.get(String((String((interaction.guild).id) + '-owner-id_server'))) == ((interaction.guild).ownerId)) {
                                                            if (dootabase.get(String((String(dootabase.get(String((String((interaction.guild).id) + '-id_server')))) + '-owner-id_server'))) == ((s4d.client.guilds.cache.get(dootabase.get(String((String((interaction.guild).id) + '-id_server'))))).ownerId)) {
                                                                if (dootabase.get(String((String((interaction.guild).id) + '-name_server'))) == ((interaction.guild).name)) {
                                                                    if (!dootabase.has(String(([(interaction.guild).id, '-', dootabase.get(String((String((interaction.guild).id) + '-id_server'))), '-cooldown_part'].join('')))) || dootabase.get(String(([(interaction.guild).id, '-', dootabase.get(String((String((interaction.guild).id) + '-id_server'))), '-cooldown_part'].join('')))) <= (Math.floor(new Date().getTime() / 1000))) {
                                                                        if (!dootabase.has(String((String((interaction.guild).id) + '-number_part'))) || !(dootabase.get(String((String((interaction.guild).id) + '-number_part'))) >= 20)) {
                                                                            if ((dootabase.get(String((String((interaction.guild).id) + '-conditation7_notif_client'))) == '@everyone' || dootabase.get(String((String((interaction.guild).id) + '-conditation7_notif_client'))) == '@here') && (dootabase.get(String((String(dootabase.get(String((String((interaction.guild).id) + '-id_server')))) + '-mention_everyone'))) == 'Désactivées')) {
                                                                                var embed = new Discord.MessageEmbed()
                                                                                embed.setColor(s4d.database.get(String('wrong_color')));
                                                                                embed.setDescription((String(s4d.database.get(String('wrong_emoji'))) + String(s4d.database.get(String('notif_noactive_everyone_message_fr')))));

                                                                                await interaction.update({
                                                                                    embeds: [(embed)],
                                                                                    components: []
                                                                                });
                                                                            } else {
                                                                                dootabase.add(String((String(dootabase.get(String((String((interaction.guild).id) + '-id_server')))) + '-part_count_limite')), parseInt(1));
                                                                                dootabase.set(String(([(interaction.guild).id, '-', dootabase.get(String((String((interaction.guild).id) + '-id_server'))), '-cooldown_part', '', ''].join(''))), ((Math.floor(new Date().getTime() / 1000)) + 604800));
                                                                                var embed = new Discord.MessageEmbed()
                                                                                embed.setDescription('<:Partner_Tick:992734092972003349> **| Partenariat terminé !**');
                                                                                embed.setColor(s4d.database.get(String('good_color')));
                                                                                embed.setFooter((String(s4d.database.get(String('tag_author_footer_fr'))) + String((interaction.member.user).tag)), ((interaction.member.user).displayAvatarURL({
                                                                                    format: "png"
                                                                                })));
                                                                                embed.setTimestamp();

                                                                                await interaction.update({
                                                                                    embeds: [(embed)],
                                                                                    components: []
                                                                                });
                                                                                if (dootabase.get(String((String((interaction.guild).id) + '-conditation7_notif_client'))) == 'Notification Partenariat') {
                                                                                    s4d.client.channels.cache.get(dootabase.get(String((String(dootabase.get(String((String((interaction.guild).id) + '-id_server')))) + '-part_chanel')))).send({
                                                                                        content: String((['> <:Partner_Member:994858030942408704> | **Auteur:** *<@', (interaction.member.user).id, '> / `', (interaction.member.user).tag, '` / `', (interaction.member.user).id, `\`*
                                            > <:Partner_Notification:992727141340954624> | **Mention:** <@&`, dootabase.get(String((String(dootabase.get(String((String((interaction.guild).id) + '-id_server')))) + '-part_notif_rank'))), '>', '\n', '\n', '\n', dootabase.get(String((String((interaction.guild).id) + '-part_pub_server')))].join('')))
                                                                                    });
                                                                                    s4d.client.channels.cache.get(dootabase.get(String((String(dootabase.get(String((String((interaction.guild).id) + '-id_server')))) + '-part_logs_server')))).send({
                                                                                        embeds: [new MessageEmbed()
                                                                                            .setTitle(String((String(s4d.database.get(String('save_emoji'))) + String(s4d.database.get(String('logs_title_part_title_fr'))))))
                                                                                            .setColor(String(s4d.database.get(String('embed_color'))))
                                                                                            .setDescription(String((['> <:Partner_Member:994858030942408704> | **Auteur:** *<@', (interaction.member.user).id, '> / `', (interaction.member.user).tag, '` / `', (interaction.member.user).id, `\`*
                                            > <:Partner_Notification:992727141340954624> | **Mention:** `, dootabase.get(String((String((interaction.guild).id) + '-conditation7_notif_client'))), '', '\n', '\n', '\n', dootabase.get(String((String((interaction.guild).id) + '-part_pub_server')))].join(''))))
                                                                                            .setFooter(String((String(s4d.database.get(String('tag_author_footer_fr'))) + String((interaction.member.user).tag))))
                                                                                        ]
                                                                                    });
                                                                                    if (dootabase.get(String((String((interaction.guild).id) + '-conditation7_notif_server'))) == 'Notification Partenariat') {
                                                                                        s4d.client.channels.cache.get(dootabase.get(String((String((interaction.guild).id) + '-part_chanel')))).send({
                                                                                            content: String((['> <:Partner_Member:994858030942408704> | **Auteur:** *<@', (interaction.member.user).id, '> / `', (interaction.member.user).tag, '` / `', (interaction.member.user).id, `\`*
                                              > <:Partner_Notification:992727141340954624> | **Mention:** <@&`, dootabase.get(String((String((interaction.guild).id) + '-part_notif_rank'))), '>', '\n', '\n', '\n', dootabase.get(String((String(dootabase.get(String((String((interaction.guild).id) + '-id_server')))) + '-part_pub_server')))].join('')))
                                                                                        });
                                                                                        s4d.client.channels.cache.get(dootabase.get(String((String((interaction.guild).id) + '-part_logs_server')))).send({
                                                                                            embeds: [new MessageEmbed()
                                                                                                .setTitle(String((String(s4d.database.get(String('save_emoji'))) + String(s4d.database.get(String('logs_title_part_title_fr'))))))
                                                                                                .setColor(String(s4d.database.get(String('embed_color'))))
                                                                                                .setDescription(String((['> <:Partner_Member:994858030942408704> | **Auteur:** *<@', (interaction.member.user).id, '> / `', (interaction.member.user).tag, '` / `', (interaction.member.user).id, `\`*
                                              > <:Partner_Notification:992727141340954624> | **Mention:** `, dootabase.get(String((String((interaction.guild).id) + '-conditation7_notif_server'))), '', '\n', '\n', '\n', dootabase.get(String((String(dootabase.get(String((String((interaction.guild).id) + '-id_server')))) + '-part_pub_server')))].join(''))))
                                                                                                .setFooter(String((String(s4d.database.get(String('tag_author_footer_fr'))) + String((interaction.member.user).tag))))
                                                                                            ]
                                                                                        });
                                                                                    } else {
                                                                                        s4d.client.channels.cache.get(dootabase.get(String((String((interaction.guild).id) + '-part_chanel')))).send({
                                                                                            content: String((['> <:Partner_Member:994858030942408704> | **Auteur:** *<@', (interaction.member.user).id, '> / `', (interaction.member.user).tag, '` / `', (interaction.member.user).id, `\`*
                                              > <:Partner_Notification:992727141340954624> | **Mention:** `, dootabase.get(String((String((interaction.guild).id) + '-conditation7_notif_server'))), '', '\n', '\n', '\n', dootabase.get(String((String(dootabase.get(String((String((interaction.guild).id) + '-id_server')))) + '-part_pub_server')))].join('')))
                                                                                        });
                                                                                        s4d.client.channels.cache.get(dootabase.get(String((String((interaction.guild).id) + '-part_logs_server')))).send({
                                                                                            embeds: [new MessageEmbed()
                                                                                                .setTitle(String((String(s4d.database.get(String('save_emoji'))) + String(s4d.database.get(String('logs_title_part_title_fr'))))))
                                                                                                .setColor(String(s4d.database.get(String('embed_color'))))
                                                                                                .setDescription(String((['> <:Partner_Member:994858030942408704> | **Auteur:** *<@', (interaction.member.user).id, '> / `', (interaction.member.user).tag, '` / `', (interaction.member.user).id, `\`*
                                              > <:Partner_Notification:992727141340954624> | **Mention:** `, dootabase.get(String((String((interaction.guild).id) + '-conditation7_notif_server'))), '', '\n', '\n', '\n', dootabase.get(String((String(dootabase.get(String((String((interaction.guild).id) + '-id_server')))) + '-part_pub_server')))].join(''))))
                                                                                                .setFooter(String((String(s4d.database.get(String('tag_author_footer_fr'))) + String((interaction.member.user).tag))))
                                                                                            ]
                                                                                        });
                                                                                    }
                                                                                } else {
                                                                                    s4d.client.channels.cache.get(dootabase.get(String((String(dootabase.get(String((String((interaction.guild).id) + '-id_server')))) + '-part_chanel')))).send({
                                                                                        content: String((['> <:Partner_Member:994858030942408704> | **Auteur:** *<@', (interaction.member.user).id, '> / `', (interaction.member.user).tag, '` / `', (interaction.member.user).id, `\`*
                                            > <:Partner_Notification:992727141340954624> | **Mention:** `, dootabase.get(String((String((interaction.guild).id) + '-conditation7_notif_client'))), '', '\n', '\n', '\n', dootabase.get(String((String((interaction.guild).id) + '-part_pub_server')))].join('')))
                                                                                    });
                                                                                    s4d.client.channels.cache.get(dootabase.get(String((String(dootabase.get(String((String((interaction.guild).id) + '-id_server')))) + '-part_logs_server')))).send({
                                                                                        embeds: [new MessageEmbed()
                                                                                            .setTitle(String((String(s4d.database.get(String('save_emoji'))) + String(s4d.database.get(String('logs_title_part_title_fr'))))))
                                                                                            .setColor(String(s4d.database.get(String('embed_color'))))
                                                                                            .setDescription(String((['> <:Partner_Member:994858030942408704> | **Auteur:** *<@', (interaction.member.user).id, '> / `', (interaction.member.user).tag, '` / `', (interaction.member.user).id, `\`*
                                            > <:Partner_Notification:992727141340954624> | **Mention:** `, dootabase.get(String((String((interaction.guild).id) + '-conditation7_notif_client'))), '', '\n', '\n', '\n', dootabase.get(String((String((interaction.guild).id) + '-part_pub_server')))].join(''))))
                                                                                            .setFooter(String((String(s4d.database.get(String('tag_author_footer_fr'))) + String((interaction.member.user).tag))))
                                                                                        ]
                                                                                    });
                                                                                    if (dootabase.get(String((String((interaction.guild).id) + '-conditation7_notif_server'))) == 'Notification Partenariat') {
                                                                                        s4d.client.channels.cache.get(dootabase.get(String((String((interaction.guild).id) + '-part_chanel')))).send({
                                                                                            content: String((['> <:Partner_Member:994858030942408704> | **Auteur:** *<@', (interaction.member.user).id, '> / `', (interaction.member.user).tag, '` / `', (interaction.member.user).id, `\`*
                                              > <:Partner_Notification:992727141340954624> | **Mention:** <@&`, dootabase.get(String((String((interaction.guild).id) + '-part_notif_rank'))), '>', '\n', '\n', '\n', dootabase.get(String((String(dootabase.get(String((String((interaction.guild).id) + '-id_server')))) + '-part_pub_server')))].join('')))
                                                                                        });
                                                                                        s4d.client.channels.cache.get(dootabase.get(String((String((interaction.guild).id) + '-part_logs_server')))).send({
                                                                                            embeds: [new MessageEmbed()
                                                                                                .setTitle(String((String(s4d.database.get(String('save_emoji'))) + String(s4d.database.get(String('logs_title_part_title_fr'))))))
                                                                                                .setColor(String(s4d.database.get(String('embed_color'))))
                                                                                                .setDescription(String((['> <:Partner_Member:994858030942408704> | **Auteur:** *<@', (interaction.member.user).id, '> / `', (interaction.member.user).tag, '` / `', (interaction.member.user).id, `\`*
                                              > <:Partner_Notification:992727141340954624> | **Mention:** `, dootabase.get(String((String((interaction.guild).id) + '-conditation7_notif_server'))), '', '\n', '\n', '\n', dootabase.get(String((String(dootabase.get(String((String((interaction.guild).id) + '-id_server')))) + '-part_pub_server')))].join(''))))
                                                                                                .setFooter(String((String(s4d.database.get(String('tag_author_footer_fr'))) + String((interaction.member.user).tag))))
                                                                                            ]
                                                                                        });
                                                                                    } else {
                                                                                        s4d.client.channels.cache.get(dootabase.get(String((String((interaction.guild).id) + '-part_chanel')))).send({
                                                                                            content: String((['> <:Partner_Member:994858030942408704> | **Auteur:** *<@', (interaction.member.user).id, '> / `', (interaction.member.user).tag, '` / `', (interaction.member.user).id, `\`*
                                              > <:Partner_Notification:992727141340954624> | **Mention:** `, dootabase.get(String((String((interaction.guild).id) + '-conditation7_notif_server'))), '', '\n', '\n', '\n', dootabase.get(String((String(dootabase.get(String((String((interaction.guild).id) + '-id_server')))) + '-part_pub_server')))].join('')))
                                                                                        });
                                                                                        s4d.client.channels.cache.get(dootabase.get(String((String((interaction.guild).id) + '-part_logs_server')))).send({
                                                                                            embeds: [new MessageEmbed()
                                                                                                .setTitle(String((String(s4d.database.get(String('save_emoji'))) + String(s4d.database.get(String('logs_title_part_title_fr'))))))
                                                                                                .setColor(String(s4d.database.get(String('embed_color'))))
                                                                                                .setDescription(String((['> <:Partner_Member:994858030942408704> | **Auteur:** *<@', (interaction.member.user).id, '> / `', (interaction.member.user).tag, '` / `', (interaction.member.user).id, `\`*
                                              > <:Partner_Notification:992727141340954624> | **Mention:** `, dootabase.get(String((String((interaction.guild).id) + '-conditation7_notif_server'))), '', '\n', '\n', '\n', dootabase.get(String((String(dootabase.get(String((String((interaction.guild).id) + '-id_server')))) + '-part_pub_server')))].join(''))))
                                                                                                .setFooter(String((String(s4d.database.get(String('tag_author_footer_fr'))) + String((interaction.member.user).tag))))
                                                                                            ]
                                                                                        });
                                                                                    }
                                                                                }
                                                                            }

                                                                        } else {
                                                                            var embed = new Discord.MessageEmbed()
                                                                            embed.setColor(s4d.database.get(String('wrong_color')));
                                                                            embed.setDescription((String(s4d.database.get(String('wrong_emoji'))) + String(s4d.database.get(String('limite_part_message_fr')))));

                                                                            await interaction.reply({
                                                                                embeds: [(embed)],
                                                                                ephemeral: true,
                                                                                components: []
                                                                            });
                                                                        }
                                                                    } else {
                                                                        var embed = new Discord.MessageEmbed()
                                                                        embed.setColor(s4d.database.get(String('wrong_color')));
                                                                        embed.setDescription((String(s4d.database.get(String('wrong_emoji'))) + String(s4d.database.get(String('time_server_part_limite_reply_message_fr')))));

                                                                        await interaction.reply({
                                                                            embeds: [(embed)],
                                                                            ephemeral: true,
                                                                            components: []
                                                                        });
                                                                    }
                                                                } else {
                                                                    var embed = new Discord.MessageEmbed()
                                                                    embed.setColor(s4d.database.get(String('wrong_color')));
                                                                    embed.setDescription((String(s4d.database.get(String('wrong_emoji'))) + String(s4d.database.get(String('info_change_config_menu_message_fr')))));

                                                                    await interaction.reply({
                                                                        embeds: [(embed)],
                                                                        ephemeral: true,
                                                                        components: []
                                                                    });
                                                                }
                                                            } else {
                                                                var embed = new Discord.MessageEmbed()
                                                                embed.setColor(s4d.database.get(String('wrong_color')));
                                                                embed.setDescription((String(s4d.database.get(String('wrong_emoji'))) + String(s4d.database.get(String('info_change_config_menu_message_fr')))));

                                                                await interaction.reply({
                                                                    embeds: [(embed)],
                                                                    ephemeral: true,
                                                                    components: []
                                                                });
                                                            }
                                                        } else {
                                                            var embed = new Discord.MessageEmbed()
                                                            embed.setColor(s4d.database.get(String('wrong_color')));
                                                            embed.setDescription((String(s4d.database.get(String('wrong_emoji'))) + String(s4d.database.get(String('info_change_config_menu_message_fr')))));

                                                            await interaction.reply({
                                                                embeds: [(embed)],
                                                                ephemeral: true,
                                                                components: []
                                                            });
                                                        }
                                                    } else {
                                                        var embed = new Discord.MessageEmbed()
                                                        embed.setColor(s4d.database.get(String('embed_color')));
                                                        embed.setDescription((String(s4d.database.get(String('blacklist_emoji'))) + String(s4d.database.get(String('server_owner_chanel_message_fr')))));

                                                        await interaction.reply({
                                                            embeds: [(embed)],
                                                            ephemeral: true,
                                                            components: []
                                                        });
                                                    }
                                                } else {
                                                    var embed = new Discord.MessageEmbed()
                                                    embed.setColor(s4d.database.get(String('embed_color')));
                                                    embed.setDescription((String(s4d.database.get(String('blacklist_emoji'))) + String(s4d.database.get(String('server_owner_chanel_message_fr')))));

                                                    await interaction.reply({
                                                        embeds: [(embed)],
                                                        ephemeral: true,
                                                        components: []
                                                    });
                                                }
                                            } else {
                                                var embed = new Discord.MessageEmbed()
                                                embed.setColor(s4d.database.get(String('embed_color')));
                                                embed.setDescription((String(s4d.database.get(String('blacklist_emoji'))) + String(s4d.database.get(String('server_owner_form_message_fr')))));

                                                await interaction.reply({
                                                    embeds: [(embed)],
                                                    ephemeral: true,
                                                    components: []
                                                });
                                            }
                                        } else {
                                            var embed = new Discord.MessageEmbed()
                                            embed.setColor(s4d.database.get(String('embed_color')));
                                            embed.setDescription((String(s4d.database.get(String('blacklist_emoji'))) + String(s4d.database.get(String('server_blacklist_message_fr')))));

                                            await interaction.reply({
                                                embeds: [(embed)],
                                                ephemeral: true,
                                                components: []
                                            });
                                        }
                                    } else {
                                        var embed = new Discord.MessageEmbed()
                                        embed.setColor(s4d.database.get(String('embed_color')));
                                        embed.setDescription((String(s4d.database.get(String('blacklist_emoji'))) + String(s4d.database.get(String('server_blacklist_message_fr')))));

                                        await interaction.reply({
                                            embeds: [(embed)],
                                            ephemeral: true,
                                            components: []
                                        });
                                    }
                                } else {
                                    var embed = new Discord.MessageEmbed()
                                    embed.setColor(s4d.database.get(String('wrong_color')));
                                    embed.setDescription((String(s4d.database.get(String('wrong_emoji'))) + String(s4d.database.get(String('nover_server_message_fr')))));

                                    await interaction.reply({
                                        embeds: [(embed)],
                                        ephemeral: true,
                                        components: []
                                    });
                                }
                            } else {
                                var embed = new Discord.MessageEmbed()
                                embed.setColor(s4d.database.get(String('wrong_color')));
                                embed.setDescription((String(s4d.database.get(String('wrong_emoji'))) + String(s4d.database.get(String('nover_server_message_fr')))));

                                await interaction.reply({
                                    embeds: [(embed)],
                                    ephemeral: true,
                                    components: []
                                });
                            }
                        } else {
                            var embed = new Discord.MessageEmbed()
                            embed.setColor(s4d.database.get(String('wrong_color')));
                            embed.setDescription((String(s4d.database.get(String('wrong_emoji'))) + String(s4d.database.get(String('bot_not_send_message_fr')))));

                            await interaction.reply({
                                embeds: [(embed)],
                                ephemeral: true,
                                components: []
                            });
                        }
                    } else {
                        var embed = new Discord.MessageEmbed()
                        embed.setColor(s4d.database.get(String('wrong_color')));
                        embed.setDescription((String(s4d.database.get(String('wrong_emoji'))) + String(s4d.database.get(String('bot_not_send_message_fr')))));

                        await interaction.reply({
                            embeds: [(embed)],
                            ephemeral: true,
                            components: []
                        });
                    }
                } else {
                    var embed = new Discord.MessageEmbed()
                    embed.setColor(s4d.database.get(String('wrong_color')));
                    embed.setDescription((String(s4d.database.get(String('wrong_emoji'))) + String(s4d.database.get(String('wrong_user_noexist_partner_list_message_fr')))));

                    await interaction.reply({
                        embeds: [(embed)],
                        ephemeral: true,
                        components: []
                    });
                }
            }
        }
        if ((interaction.customId) == 'accept_condition6') {
            if (((interaction.member.user).id) == ((interaction.member.user).id)) {
                dootabase.setFile("./" + 'Donnés' + ".json");
                if (dootabase.get(String(([dootabase.get(String((String((interaction.guild).id) + '-id_server'))), '-', (interaction.member.user).id, '-partner_list'].join('')))) == 'partner') {
                    if (ShsHSjJSjSJSJSGHkkhdjdmns.includes(s4d.client.channels.cache.get(dootabase.get(String((String(dootabase.get(String((String((interaction.guild).id) + '-id_server')))) + '-part_chanel')))).permissionsFor((((s4d.client.guilds.cache.get(dootabase.get(String((String((interaction.guild).id) + '-id_server'))))).members.cache.get('992907384592805968') || await (s4d.client.guilds.cache.get(dootabase.get(String((String((interaction.guild).id) + '-id_server'))))).members.fetch('992907384592805968')).user)).toArray().filter(x => x == 'SEND_MESSAGES')[0])) {
                        if (ShsHSjJSjSJSJSGHkkhdjdmns.includes(s4d.client.channels.cache.get(dootabase.get(String((String((interaction.guild).id) + '-part_chanel')))).permissionsFor((((interaction.guild).members.cache.get('992907384592805968') || await (interaction.guild).members.fetch('992907384592805968')).user)).toArray().filter(x => x == 'SEND_MESSAGES')[0])) {
                            if (dootabase.get(String(((interaction.guild).id))) == 'verif_serv') {
                                if (dootabase.get(String(dootabase.get(String((String((interaction.guild).id) + '-id_server'))))) == 'verif_serv') {
                                    if (!(dootabase.get(String(dootabase.get(String((String((interaction.guild).id) + '-id_server'))))) == 'blacklist_serv')) {
                                        if (!(dootabase.get(String(((interaction.guild).id))) == 'blacklist_serv')) {
                                            if (!(dootabase.get(String(((interaction.member.user).id))) == 'raid')) {
                                                if (!(dootabase.get(String(((interaction.guild).ownerId))) == 'raid')) {
                                                    if (!(dootabase.get(String(((s4d.client.guilds.cache.get(dootabase.get(String((String((interaction.guild).id) + '-id_server'))))).ownerId))) == 'raid')) {
                                                        if (dootabase.get(String((String((interaction.guild).id) + '-owner-id_server'))) == ((interaction.guild).ownerId)) {
                                                            if (dootabase.get(String((String(dootabase.get(String((String((interaction.guild).id) + '-id_server')))) + '-owner-id_server'))) == ((s4d.client.guilds.cache.get(dootabase.get(String((String((interaction.guild).id) + '-id_server'))))).ownerId)) {
                                                                if (dootabase.get(String((String((interaction.guild).id) + '-name_server'))) == ((interaction.guild).name)) {
                                                                    if (!dootabase.has(String(([(interaction.guild).id, '-', dootabase.get(String((String((interaction.guild).id) + '-id_server'))), '-cooldown_part'].join('')))) || dootabase.get(String(([(interaction.guild).id, '-', dootabase.get(String((String((interaction.guild).id) + '-id_server'))), '-cooldown_part'].join('')))) <= (Math.floor(new Date().getTime() / 1000))) {
                                                                        if (!dootabase.has(String((String((interaction.guild).id) + '-number_part'))) || !(dootabase.get(String((String((interaction.guild).id) + '-number_part'))) >= 20)) {
                                                                            if ((dootabase.get(String((String((interaction.guild).id) + '-conditation6_notif_client'))) == '@everyone' || dootabase.get(String((String((interaction.guild).id) + '-conditation6_notif_client'))) == '@here') && (dootabase.get(String((String(dootabase.get(String((String((interaction.guild).id) + '-id_server')))) + '-mention_everyone'))) == 'Désactivées')) {
                                                                                var embed = new Discord.MessageEmbed()
                                                                                embed.setColor(s4d.database.get(String('wrong_color')));
                                                                                embed.setDescription((String(s4d.database.get(String('wrong_emoji'))) + String(s4d.database.get(String('notif_noactive_everyone_message_fr')))));

                                                                                await interaction.update({
                                                                                    embeds: [(embed)],
                                                                                    components: []
                                                                                });
                                                                            } else {
                                                                                dootabase.add(String((String(dootabase.get(String((String((interaction.guild).id) + '-id_server')))) + '-part_count_limite')), parseInt(1));
                                                                                dootabase.set(String(([(interaction.guild).id, '-', dootabase.get(String((String((interaction.guild).id) + '-id_server'))), '-cooldown_part', '', ''].join(''))), ((Math.floor(new Date().getTime() / 1000)) + 604800));
                                                                                var embed = new Discord.MessageEmbed()
                                                                                embed.setDescription('<:Partner_Tick:992734092972003349> **| Partenariat terminé !**');
                                                                                embed.setColor(s4d.database.get(String('good_color')));
                                                                                embed.setFooter((String(s4d.database.get(String('tag_author_footer_fr'))) + String((interaction.member.user).tag)), ((interaction.member.user).displayAvatarURL({
                                                                                    format: "png"
                                                                                })));
                                                                                embed.setTimestamp();

                                                                                await interaction.update({
                                                                                    embeds: [(embed)],
                                                                                    components: []
                                                                                });
                                                                                if (dootabase.get(String((String((interaction.guild).id) + '-conditation6_notif_client'))) == 'Notification Partenariat') {
                                                                                    s4d.client.channels.cache.get(dootabase.get(String((String(dootabase.get(String((String((interaction.guild).id) + '-id_server')))) + '-part_chanel')))).send({
                                                                                        content: String((['> <:Partner_Member:994858030942408704> | **Auteur:** *<@', (interaction.member.user).id, '> / `', (interaction.member.user).tag, '` / `', (interaction.member.user).id, `\`*
                                            > <:Partner_Notification:992727141340954624> | **Mention:** <@&`, dootabase.get(String((String(dootabase.get(String((String((interaction.guild).id) + '-id_server')))) + '-part_notif_rank'))), '>', '\n', '\n', '\n', dootabase.get(String((String((interaction.guild).id) + '-part_pub_server')))].join('')))
                                                                                    });
                                                                                    s4d.client.channels.cache.get(dootabase.get(String((String(dootabase.get(String((String((interaction.guild).id) + '-id_server')))) + '-part_logs_server')))).send({
                                                                                        embeds: [new MessageEmbed()
                                                                                            .setTitle(String((String(s4d.database.get(String('save_emoji'))) + String(s4d.database.get(String('logs_title_part_title_fr'))))))
                                                                                            .setColor(String(s4d.database.get(String('embed_color'))))
                                                                                            .setDescription(String((['> <:Partner_Member:994858030942408704> | **Auteur:** *<@', (interaction.member.user).id, '> / `', (interaction.member.user).tag, '` / `', (interaction.member.user).id, `\`*
                                            > <:Partner_Notification:992727141340954624> | **Mention:** `, dootabase.get(String((String((interaction.guild).id) + '-conditation6_notif_client'))), '', '\n', '\n', '\n', dootabase.get(String((String((interaction.guild).id) + '-part_pub_server')))].join(''))))
                                                                                            .setFooter(String((String(s4d.database.get(String('tag_author_footer_fr'))) + String((interaction.member.user).tag))))
                                                                                        ]
                                                                                    });
                                                                                    if (dootabase.get(String((String((interaction.guild).id) + '-conditation6_notif_server'))) == 'Notification Partenariat') {
                                                                                        s4d.client.channels.cache.get(dootabase.get(String((String((interaction.guild).id) + '-part_chanel')))).send({
                                                                                            content: String((['> <:Partner_Member:994858030942408704> | **Auteur:** *<@', (interaction.member.user).id, '> / `', (interaction.member.user).tag, '` / `', (interaction.member.user).id, `\`*
                                              > <:Partner_Notification:992727141340954624> | **Mention:** <@&`, dootabase.get(String((String((interaction.guild).id) + '-part_notif_rank'))), '>', '\n', '\n', '\n', dootabase.get(String((String(dootabase.get(String((String((interaction.guild).id) + '-id_server')))) + '-part_pub_server')))].join('')))
                                                                                        });
                                                                                        s4d.client.channels.cache.get(dootabase.get(String((String((interaction.guild).id) + '-part_logs_server')))).send({
                                                                                            embeds: [new MessageEmbed()
                                                                                                .setTitle(String((String(s4d.database.get(String('save_emoji'))) + String(s4d.database.get(String('logs_title_part_title_fr'))))))
                                                                                                .setColor(String(s4d.database.get(String('embed_color'))))
                                                                                                .setDescription(String((['> <:Partner_Member:994858030942408704> | **Auteur:** *<@', (interaction.member.user).id, '> / `', (interaction.member.user).tag, '` / `', (interaction.member.user).id, `\`*
                                              > <:Partner_Notification:992727141340954624> | **Mention:** `, dootabase.get(String((String((interaction.guild).id) + '-conditation6_notif_server'))), '', '\n', '\n', '\n', dootabase.get(String((String(dootabase.get(String((String((interaction.guild).id) + '-id_server')))) + '-part_pub_server')))].join(''))))
                                                                                                .setFooter(String((String(s4d.database.get(String('tag_author_footer_fr'))) + String((interaction.member.user).tag))))
                                                                                            ]
                                                                                        });
                                                                                    } else {
                                                                                        s4d.client.channels.cache.get(dootabase.get(String((String((interaction.guild).id) + '-part_chanel')))).send({
                                                                                            content: String((['> <:Partner_Member:994858030942408704> | **Auteur:** *<@', (interaction.member.user).id, '> / `', (interaction.member.user).tag, '` / `', (interaction.member.user).id, `\`*
                                              > <:Partner_Notification:992727141340954624> | **Mention:** `, dootabase.get(String((String((interaction.guild).id) + '-conditation6_notif_server'))), '', '\n', '\n', '\n', dootabase.get(String((String(dootabase.get(String((String((interaction.guild).id) + '-id_server')))) + '-part_pub_server')))].join('')))
                                                                                        });
                                                                                        s4d.client.channels.cache.get(dootabase.get(String((String((interaction.guild).id) + '-part_logs_server')))).send({
                                                                                            embeds: [new MessageEmbed()
                                                                                                .setTitle(String((String(s4d.database.get(String('save_emoji'))) + String(s4d.database.get(String('logs_title_part_title_fr'))))))
                                                                                                .setColor(String(s4d.database.get(String('embed_color'))))
                                                                                                .setDescription(String((['> <:Partner_Member:994858030942408704> | **Auteur:** *<@', (interaction.member.user).id, '> / `', (interaction.member.user).tag, '` / `', (interaction.member.user).id, `\`*
                                              > <:Partner_Notification:992727141340954624> | **Mention:** `, dootabase.get(String((String((interaction.guild).id) + '-conditation6_notif_server'))), '', '\n', '\n', '\n', dootabase.get(String((String(dootabase.get(String((String((interaction.guild).id) + '-id_server')))) + '-part_pub_server')))].join(''))))
                                                                                                .setFooter(String((String(s4d.database.get(String('tag_author_footer_fr'))) + String((interaction.member.user).tag))))
                                                                                            ]
                                                                                        });
                                                                                    }
                                                                                } else {
                                                                                    s4d.client.channels.cache.get(dootabase.get(String((String(dootabase.get(String((String((interaction.guild).id) + '-id_server')))) + '-part_chanel')))).send({
                                                                                        content: String((['> <:Partner_Member:994858030942408704> | **Auteur:** *<@', (interaction.member.user).id, '> / `', (interaction.member.user).tag, '` / `', (interaction.member.user).id, `\`*
                                            > <:Partner_Notification:992727141340954624> | **Mention:** `, dootabase.get(String((String((interaction.guild).id) + '-conditation6_notif_client'))), '', '\n', '\n', '\n', dootabase.get(String((String((interaction.guild).id) + '-part_pub_server')))].join('')))
                                                                                    });
                                                                                    s4d.client.channels.cache.get(dootabase.get(String((String(dootabase.get(String((String((interaction.guild).id) + '-id_server')))) + '-part_logs_server')))).send({
                                                                                        embeds: [new MessageEmbed()
                                                                                            .setTitle(String((String(s4d.database.get(String('save_emoji'))) + String(s4d.database.get(String('logs_title_part_title_fr'))))))
                                                                                            .setColor(String(s4d.database.get(String('embed_color'))))
                                                                                            .setDescription(String((['> <:Partner_Member:994858030942408704> | **Auteur:** *<@', (interaction.member.user).id, '> / `', (interaction.member.user).tag, '` / `', (interaction.member.user).id, `\`*
                                            > <:Partner_Notification:992727141340954624> | **Mention:** `, dootabase.get(String((String((interaction.guild).id) + '-conditation6_notif_client'))), '', '\n', '\n', '\n', dootabase.get(String((String((interaction.guild).id) + '-part_pub_server')))].join(''))))
                                                                                            .setFooter(String((String(s4d.database.get(String('tag_author_footer_fr'))) + String((interaction.member.user).tag))))
                                                                                        ]
                                                                                    });
                                                                                    if (dootabase.get(String((String((interaction.guild).id) + '-conditation6_notif_server'))) == 'Notification Partenariat') {
                                                                                        s4d.client.channels.cache.get(dootabase.get(String((String((interaction.guild).id) + '-part_chanel')))).send({
                                                                                            content: String((['> <:Partner_Member:994858030942408704> | **Auteur:** *<@', (interaction.member.user).id, '> / `', (interaction.member.user).tag, '` / `', (interaction.member.user).id, `\`*
                                              > <:Partner_Notification:992727141340954624> | **Mention:** <@&`, dootabase.get(String((String((interaction.guild).id) + '-part_notif_rank'))), '>', '\n', '\n', '\n', dootabase.get(String((String(dootabase.get(String((String((interaction.guild).id) + '-id_server')))) + '-part_pub_server')))].join('')))
                                                                                        });
                                                                                        s4d.client.channels.cache.get(dootabase.get(String((String((interaction.guild).id) + '-part_logs_server')))).send({
                                                                                            embeds: [new MessageEmbed()
                                                                                                .setTitle(String((String(s4d.database.get(String('save_emoji'))) + String(s4d.database.get(String('logs_title_part_title_fr'))))))
                                                                                                .setColor(String(s4d.database.get(String('embed_color'))))
                                                                                                .setDescription(String((['> <:Partner_Member:994858030942408704> | **Auteur:** *<@', (interaction.member.user).id, '> / `', (interaction.member.user).tag, '` / `', (interaction.member.user).id, `\`*
                                              > <:Partner_Notification:992727141340954624> | **Mention:** `, dootabase.get(String((String((interaction.guild).id) + '-conditation6_notif_server'))), '', '\n', '\n', '\n', dootabase.get(String((String(dootabase.get(String((String((interaction.guild).id) + '-id_server')))) + '-part_pub_server')))].join(''))))
                                                                                                .setFooter(String((String(s4d.database.get(String('tag_author_footer_fr'))) + String((interaction.member.user).tag))))
                                                                                            ]
                                                                                        });
                                                                                    } else {
                                                                                        s4d.client.channels.cache.get(dootabase.get(String((String((interaction.guild).id) + '-part_chanel')))).send({
                                                                                            content: String((['> <:Partner_Member:994858030942408704> | **Auteur:** *<@', (interaction.member.user).id, '> / `', (interaction.member.user).tag, '` / `', (interaction.member.user).id, `\`*
                                              > <:Partner_Notification:992727141340954624> | **Mention:** `, dootabase.get(String((String((interaction.guild).id) + '-conditation6_notif_server'))), '', '\n', '\n', '\n', dootabase.get(String((String(dootabase.get(String((String((interaction.guild).id) + '-id_server')))) + '-part_pub_server')))].join('')))
                                                                                        });
                                                                                        s4d.client.channels.cache.get(dootabase.get(String((String((interaction.guild).id) + '-part_logs_server')))).send({
                                                                                            embeds: [new MessageEmbed()
                                                                                                .setTitle(String((String(s4d.database.get(String('save_emoji'))) + String(s4d.database.get(String('logs_title_part_title_fr'))))))
                                                                                                .setColor(String(s4d.database.get(String('embed_color'))))
                                                                                                .setDescription(String((['> <:Partner_Member:994858030942408704> | **Auteur:** *<@', (interaction.member.user).id, '> / `', (interaction.member.user).tag, '` / `', (interaction.member.user).id, `\`*
                                              > <:Partner_Notification:992727141340954624> | **Mention:** `, dootabase.get(String((String((interaction.guild).id) + '-conditation6_notif_server'))), '', '\n', '\n', '\n', dootabase.get(String((String(dootabase.get(String((String((interaction.guild).id) + '-id_server')))) + '-part_pub_server')))].join(''))))
                                                                                                .setFooter(String((String(s4d.database.get(String('tag_author_footer_fr'))) + String((interaction.member.user).tag))))
                                                                                            ]
                                                                                        });
                                                                                    }
                                                                                }
                                                                            }

                                                                        } else {
                                                                            var embed = new Discord.MessageEmbed()
                                                                            embed.setColor(s4d.database.get(String('wrong_color')));
                                                                            embed.setDescription((String(s4d.database.get(String('wrong_emoji'))) + String(s4d.database.get(String('limite_part_message_fr')))));

                                                                            await interaction.reply({
                                                                                embeds: [(embed)],
                                                                                ephemeral: true,
                                                                                components: []
                                                                            });
                                                                        }
                                                                    } else {
                                                                        var embed = new Discord.MessageEmbed()
                                                                        embed.setColor(s4d.database.get(String('wrong_color')));
                                                                        embed.setDescription((String(s4d.database.get(String('wrong_emoji'))) + String(s4d.database.get(String('time_server_part_limite_reply_message_fr')))));

                                                                        await interaction.reply({
                                                                            embeds: [(embed)],
                                                                            ephemeral: true,
                                                                            components: []
                                                                        });
                                                                    }
                                                                } else {
                                                                    var embed = new Discord.MessageEmbed()
                                                                    embed.setColor(s4d.database.get(String('wrong_color')));
                                                                    embed.setDescription((String(s4d.database.get(String('wrong_emoji'))) + String(s4d.database.get(String('info_change_config_menu_message_fr')))));

                                                                    await interaction.reply({
                                                                        embeds: [(embed)],
                                                                        ephemeral: true,
                                                                        components: []
                                                                    });
                                                                }
                                                            } else {
                                                                var embed = new Discord.MessageEmbed()
                                                                embed.setColor(s4d.database.get(String('wrong_color')));
                                                                embed.setDescription((String(s4d.database.get(String('wrong_emoji'))) + String(s4d.database.get(String('info_change_config_menu_message_fr')))));

                                                                await interaction.reply({
                                                                    embeds: [(embed)],
                                                                    ephemeral: true,
                                                                    components: []
                                                                });
                                                            }
                                                        } else {
                                                            var embed = new Discord.MessageEmbed()
                                                            embed.setColor(s4d.database.get(String('wrong_color')));
                                                            embed.setDescription((String(s4d.database.get(String('wrong_emoji'))) + String(s4d.database.get(String('info_change_config_menu_message_fr')))));

                                                            await interaction.reply({
                                                                embeds: [(embed)],
                                                                ephemeral: true,
                                                                components: []
                                                            });
                                                        }
                                                    } else {
                                                        var embed = new Discord.MessageEmbed()
                                                        embed.setColor(s4d.database.get(String('embed_color')));
                                                        embed.setDescription((String(s4d.database.get(String('blacklist_emoji'))) + String(s4d.database.get(String('server_owner_chanel_message_fr')))));

                                                        await interaction.reply({
                                                            embeds: [(embed)],
                                                            ephemeral: true,
                                                            components: []
                                                        });
                                                    }
                                                } else {
                                                    var embed = new Discord.MessageEmbed()
                                                    embed.setColor(s4d.database.get(String('embed_color')));
                                                    embed.setDescription((String(s4d.database.get(String('blacklist_emoji'))) + String(s4d.database.get(String('server_owner_chanel_message_fr')))));

                                                    await interaction.reply({
                                                        embeds: [(embed)],
                                                        ephemeral: true,
                                                        components: []
                                                    });
                                                }
                                            } else {
                                                var embed = new Discord.MessageEmbed()
                                                embed.setColor(s4d.database.get(String('embed_color')));
                                                embed.setDescription((String(s4d.database.get(String('blacklist_emoji'))) + String(s4d.database.get(String('server_owner_form_message_fr')))));

                                                await interaction.reply({
                                                    embeds: [(embed)],
                                                    ephemeral: true,
                                                    components: []
                                                });
                                            }
                                        } else {
                                            var embed = new Discord.MessageEmbed()
                                            embed.setColor(s4d.database.get(String('embed_color')));
                                            embed.setDescription((String(s4d.database.get(String('blacklist_emoji'))) + String(s4d.database.get(String('server_blacklist_message_fr')))));

                                            await interaction.reply({
                                                embeds: [(embed)],
                                                ephemeral: true,
                                                components: []
                                            });
                                        }
                                    } else {
                                        var embed = new Discord.MessageEmbed()
                                        embed.setColor(s4d.database.get(String('embed_color')));
                                        embed.setDescription((String(s4d.database.get(String('blacklist_emoji'))) + String(s4d.database.get(String('server_blacklist_message_fr')))));

                                        await interaction.reply({
                                            embeds: [(embed)],
                                            ephemeral: true,
                                            components: []
                                        });
                                    }
                                } else {
                                    var embed = new Discord.MessageEmbed()
                                    embed.setColor(s4d.database.get(String('wrong_color')));
                                    embed.setDescription((String(s4d.database.get(String('wrong_emoji'))) + String(s4d.database.get(String('nover_server_message_fr')))));

                                    await interaction.reply({
                                        embeds: [(embed)],
                                        ephemeral: true,
                                        components: []
                                    });
                                }
                            } else {
                                var embed = new Discord.MessageEmbed()
                                embed.setColor(s4d.database.get(String('wrong_color')));
                                embed.setDescription((String(s4d.database.get(String('wrong_emoji'))) + String(s4d.database.get(String('nover_server_message_fr')))));

                                await interaction.reply({
                                    embeds: [(embed)],
                                    ephemeral: true,
                                    components: []
                                });
                            }
                        } else {
                            var embed = new Discord.MessageEmbed()
                            embed.setColor(s4d.database.get(String('wrong_color')));
                            embed.setDescription((String(s4d.database.get(String('wrong_emoji'))) + String(s4d.database.get(String('bot_not_send_message_fr')))));

                            await interaction.reply({
                                embeds: [(embed)],
                                ephemeral: true,
                                components: []
                            });
                        }
                    } else {
                        var embed = new Discord.MessageEmbed()
                        embed.setColor(s4d.database.get(String('wrong_color')));
                        embed.setDescription((String(s4d.database.get(String('wrong_emoji'))) + String(s4d.database.get(String('bot_not_send_message_fr')))));

                        await interaction.reply({
                            embeds: [(embed)],
                            ephemeral: true,
                            components: []
                        });
                    }
                } else {
                    var embed = new Discord.MessageEmbed()
                    embed.setColor(s4d.database.get(String('wrong_color')));
                    embed.setDescription((String(s4d.database.get(String('wrong_emoji'))) + String(s4d.database.get(String('wrong_user_noexist_partner_list_message_fr')))));

                    await interaction.reply({
                        embeds: [(embed)],
                        ephemeral: true,
                        components: []
                    });
                }
            }
        }
        if ((interaction.customId) == 'accept_condition5') {
            if (((interaction.member.user).id) == ((interaction.member.user).id)) {
                dootabase.setFile("./" + 'Donnés' + ".json");
                if (dootabase.get(String(([dootabase.get(String((String((interaction.guild).id) + '-id_server'))), '-', (interaction.member.user).id, '-partner_list'].join('')))) == 'partner') {
                    if (ShsHSjJSjSJSJSGHkkhdjdmns.includes(s4d.client.channels.cache.get(dootabase.get(String((String(dootabase.get(String((String((interaction.guild).id) + '-id_server')))) + '-part_chanel')))).permissionsFor((((s4d.client.guilds.cache.get(dootabase.get(String((String((interaction.guild).id) + '-id_server'))))).members.cache.get('992907384592805968') || await (s4d.client.guilds.cache.get(dootabase.get(String((String((interaction.guild).id) + '-id_server'))))).members.fetch('992907384592805968')).user)).toArray().filter(x => x == 'SEND_MESSAGES')[0])) {
                        if (ShsHSjJSjSJSJSGHkkhdjdmns.includes(s4d.client.channels.cache.get(dootabase.get(String((String((interaction.guild).id) + '-part_chanel')))).permissionsFor((((interaction.guild).members.cache.get('992907384592805968') || await (interaction.guild).members.fetch('992907384592805968')).user)).toArray().filter(x => x == 'SEND_MESSAGES')[0])) {
                            if (dootabase.get(String(((interaction.guild).id))) == 'verif_serv') {
                                if (dootabase.get(String(dootabase.get(String((String((interaction.guild).id) + '-id_server'))))) == 'verif_serv') {
                                    if (!(dootabase.get(String(dootabase.get(String((String((interaction.guild).id) + '-id_server'))))) == 'blacklist_serv')) {
                                        if (!(dootabase.get(String(((interaction.guild).id))) == 'blacklist_serv')) {
                                            if (!(dootabase.get(String(((interaction.member.user).id))) == 'raid')) {
                                                if (!(dootabase.get(String(((interaction.guild).ownerId))) == 'raid')) {
                                                    if (!(dootabase.get(String(((s4d.client.guilds.cache.get(dootabase.get(String((String((interaction.guild).id) + '-id_server'))))).ownerId))) == 'raid')) {
                                                        if (dootabase.get(String((String((interaction.guild).id) + '-owner-id_server'))) == ((interaction.guild).ownerId)) {
                                                            if (dootabase.get(String((String(dootabase.get(String((String((interaction.guild).id) + '-id_server')))) + '-owner-id_server'))) == ((s4d.client.guilds.cache.get(dootabase.get(String((String((interaction.guild).id) + '-id_server'))))).ownerId)) {
                                                                if (dootabase.get(String((String((interaction.guild).id) + '-name_server'))) == ((interaction.guild).name)) {
                                                                    if (!dootabase.has(String(([(interaction.guild).id, '-', dootabase.get(String((String((interaction.guild).id) + '-id_server'))), '-cooldown_part'].join('')))) || dootabase.get(String(([(interaction.guild).id, '-', dootabase.get(String((String((interaction.guild).id) + '-id_server'))), '-cooldown_part'].join('')))) <= (Math.floor(new Date().getTime() / 1000))) {
                                                                        if (!dootabase.has(String((String((interaction.guild).id) + '-number_part'))) || !(dootabase.get(String((String((interaction.guild).id) + '-number_part'))) >= 20)) {
                                                                            if ((dootabase.get(String((String((interaction.guild).id) + '-conditation5_notif_client'))) == '@everyone' || dootabase.get(String((String((interaction.guild).id) + '-conditation5_notif_client'))) == '@here') && (dootabase.get(String((String(dootabase.get(String((String((interaction.guild).id) + '-id_server')))) + '-mention_everyone'))) == 'Désactivées')) {
                                                                                var embed = new Discord.MessageEmbed()
                                                                                embed.setColor(s4d.database.get(String('wrong_color')));
                                                                                embed.setDescription((String(s4d.database.get(String('wrong_emoji'))) + String(s4d.database.get(String('notif_noactive_everyone_message_fr')))));

                                                                                await interaction.update({
                                                                                    embeds: [(embed)],
                                                                                    components: []
                                                                                });
                                                                            } else {
                                                                                dootabase.add(String((String(dootabase.get(String((String((interaction.guild).id) + '-id_server')))) + '-part_count_limite')), parseInt(1));
                                                                                dootabase.set(String(([(interaction.guild).id, '-', dootabase.get(String((String((interaction.guild).id) + '-id_server'))), '-cooldown_part', '', ''].join(''))), ((Math.floor(new Date().getTime() / 1000)) + 604800));
                                                                                var embed = new Discord.MessageEmbed()
                                                                                embed.setDescription('<:Partner_Tick:992734092972003349> **| Partenariat terminé !**');
                                                                                embed.setColor(s4d.database.get(String('good_color')));
                                                                                embed.setFooter((String(s4d.database.get(String('tag_author_footer_fr'))) + String((interaction.member.user).tag)), ((interaction.member.user).displayAvatarURL({
                                                                                    format: "png"
                                                                                })));
                                                                                embed.setTimestamp();

                                                                                await interaction.update({
                                                                                    embeds: [(embed)],
                                                                                    components: []
                                                                                });
                                                                                if (dootabase.get(String((String((interaction.guild).id) + '-conditation6_notif_client'))) == 'Notification Partenariat') {
                                                                                    s4d.client.channels.cache.get(dootabase.get(String((String(dootabase.get(String((String((interaction.guild).id) + '-id_server')))) + '-part_chanel')))).send({
                                                                                        content: String((['> <:Partner_Member:994858030942408704> | **Auteur:** *<@', (interaction.member.user).id, '> / `', (interaction.member.user).tag, '` / `', (interaction.member.user).id, `\`*
                                            > <:Partner_Notification:992727141340954624> | **Mention:** <@&`, dootabase.get(String((String(dootabase.get(String((String((interaction.guild).id) + '-id_server')))) + '-part_notif_rank'))), '>', '\n', '\n', '\n', dootabase.get(String((String((interaction.guild).id) + '-part_pub_server')))].join('')))
                                                                                    });
                                                                                    s4d.client.channels.cache.get(dootabase.get(String((String(dootabase.get(String((String((interaction.guild).id) + '-id_server')))) + '-part_logs_server')))).send({
                                                                                        embeds: [new MessageEmbed()
                                                                                            .setTitle(String((String(s4d.database.get(String('save_emoji'))) + String(s4d.database.get(String('logs_title_part_title_fr'))))))
                                                                                            .setColor(String(s4d.database.get(String('embed_color'))))
                                                                                            .setDescription(String((['> <:Partner_Member:994858030942408704> | **Auteur:** *<@', (interaction.member.user).id, '> / `', (interaction.member.user).tag, '` / `', (interaction.member.user).id, `\`*
                                            > <:Partner_Notification:992727141340954624> | **Mention:** `, dootabase.get(String((String((interaction.guild).id) + '-conditation5_notif_client'))), '', '\n', '\n', '\n', dootabase.get(String((String((interaction.guild).id) + '-part_pub_server')))].join(''))))
                                                                                            .setFooter(String((String(s4d.database.get(String('tag_author_footer_fr'))) + String((interaction.member.user).tag))))
                                                                                        ]
                                                                                    });
                                                                                    if (dootabase.get(String((String((interaction.guild).id) + '-conditation5_notif_server'))) == 'Notification Partenariat') {
                                                                                        s4d.client.channels.cache.get(dootabase.get(String((String((interaction.guild).id) + '-part_chanel')))).send({
                                                                                            content: String((['> <:Partner_Member:994858030942408704> | **Auteur:** *<@', (interaction.member.user).id, '> / `', (interaction.member.user).tag, '` / `', (interaction.member.user).id, `\`*
                                              > <:Partner_Notification:992727141340954624> | **Mention:** <@&`, dootabase.get(String((String((interaction.guild).id) + '-part_notif_rank'))), '>', '\n', '\n', '\n', dootabase.get(String((String(dootabase.get(String((String((interaction.guild).id) + '-id_server')))) + '-part_pub_server')))].join('')))
                                                                                        });
                                                                                        s4d.client.channels.cache.get(dootabase.get(String((String((interaction.guild).id) + '-part_logs_server')))).send({
                                                                                            embeds: [new MessageEmbed()
                                                                                                .setTitle(String((String(s4d.database.get(String('save_emoji'))) + String(s4d.database.get(String('logs_title_part_title_fr'))))))
                                                                                                .setColor(String(s4d.database.get(String('embed_color'))))
                                                                                                .setDescription(String((['> <:Partner_Member:994858030942408704> | **Auteur:** *<@', (interaction.member.user).id, '> / `', (interaction.member.user).tag, '` / `', (interaction.member.user).id, `\`*
                                              > <:Partner_Notification:992727141340954624> | **Mention:** `, dootabase.get(String((String((interaction.guild).id) + '-conditation5_notif_server'))), '', '\n', '\n', '\n', dootabase.get(String((String(dootabase.get(String((String((interaction.guild).id) + '-id_server')))) + '-part_pub_server')))].join(''))))
                                                                                                .setFooter(String((String(s4d.database.get(String('tag_author_footer_fr'))) + String((interaction.member.user).tag))))
                                                                                            ]
                                                                                        });
                                                                                    } else {
                                                                                        s4d.client.channels.cache.get(dootabase.get(String((String((interaction.guild).id) + '-part_chanel')))).send({
                                                                                            content: String((['> <:Partner_Member:994858030942408704> | **Auteur:** *<@', (interaction.member.user).id, '> / `', (interaction.member.user).tag, '` / `', (interaction.member.user).id, `\`*
                                              > <:Partner_Notification:992727141340954624> | **Mention:** `, dootabase.get(String((String((interaction.guild).id) + '-conditation5_notif_server'))), '', '\n', '\n', '\n', dootabase.get(String((String(dootabase.get(String((String((interaction.guild).id) + '-id_server')))) + '-part_pub_server')))].join('')))
                                                                                        });
                                                                                        s4d.client.channels.cache.get(dootabase.get(String((String((interaction.guild).id) + '-part_logs_server')))).send({
                                                                                            embeds: [new MessageEmbed()
                                                                                                .setTitle(String((String(s4d.database.get(String('save_emoji'))) + String(s4d.database.get(String('logs_title_part_title_fr'))))))
                                                                                                .setColor(String(s4d.database.get(String('embed_color'))))
                                                                                                .setDescription(String((['> <:Partner_Member:994858030942408704> | **Auteur:** *<@', (interaction.member.user).id, '> / `', (interaction.member.user).tag, '` / `', (interaction.member.user).id, `\`*
                                              > <:Partner_Notification:992727141340954624> | **Mention:** `, dootabase.get(String((String((interaction.guild).id) + '-conditation5_notif_server'))), '', '\n', '\n', '\n', dootabase.get(String((String(dootabase.get(String((String((interaction.guild).id) + '-id_server')))) + '-part_pub_server')))].join(''))))
                                                                                                .setFooter(String((String(s4d.database.get(String('tag_author_footer_fr'))) + String((interaction.member.user).tag))))
                                                                                            ]
                                                                                        });
                                                                                    }
                                                                                } else {
                                                                                    s4d.client.channels.cache.get(dootabase.get(String((String(dootabase.get(String((String((interaction.guild).id) + '-id_server')))) + '-part_chanel')))).send({
                                                                                        content: String((['> <:Partner_Member:994858030942408704> | **Auteur:** *<@', (interaction.member.user).id, '> / `', (interaction.member.user).tag, '` / `', (interaction.member.user).id, `\`*
                                            > <:Partner_Notification:992727141340954624> | **Mention:** `, dootabase.get(String((String((interaction.guild).id) + '-conditation5_notif_client'))), '', '\n', '\n', '\n', dootabase.get(String((String((interaction.guild).id) + '-part_pub_server')))].join('')))
                                                                                    });
                                                                                    s4d.client.channels.cache.get(dootabase.get(String((String(dootabase.get(String((String((interaction.guild).id) + '-id_server')))) + '-part_logs_server')))).send({
                                                                                        embeds: [new MessageEmbed()
                                                                                            .setTitle(String((String(s4d.database.get(String('save_emoji'))) + String(s4d.database.get(String('logs_title_part_title_fr'))))))
                                                                                            .setColor(String(s4d.database.get(String('embed_color'))))
                                                                                            .setDescription(String((['> <:Partner_Member:994858030942408704> | **Auteur:** *<@', (interaction.member.user).id, '> / `', (interaction.member.user).tag, '` / `', (interaction.member.user).id, `\`*
                                            > <:Partner_Notification:992727141340954624> | **Mention:** `, dootabase.get(String((String((interaction.guild).id) + '-conditation5_notif_client'))), '', '\n', '\n', '\n', dootabase.get(String((String((interaction.guild).id) + '-part_pub_server')))].join(''))))
                                                                                            .setFooter(String((String(s4d.database.get(String('tag_author_footer_fr'))) + String((interaction.member.user).tag))))
                                                                                        ]
                                                                                    });
                                                                                    if (dootabase.get(String((String((interaction.guild).id) + '-conditation5_notif_server'))) == 'Notification Partenariat') {
                                                                                        s4d.client.channels.cache.get(dootabase.get(String((String((interaction.guild).id) + '-part_chanel')))).send({
                                                                                            content: String((['> <:Partner_Member:994858030942408704> | **Auteur:** *<@', (interaction.member.user).id, '> / `', (interaction.member.user).tag, '` / `', (interaction.member.user).id, `\`*
                                              > <:Partner_Notification:992727141340954624> | **Mention:** <@&`, dootabase.get(String((String((interaction.guild).id) + '-part_notif_rank'))), '>', '\n', '\n', '\n', dootabase.get(String((String(dootabase.get(String((String((interaction.guild).id) + '-id_server')))) + '-part_pub_server')))].join('')))
                                                                                        });
                                                                                        s4d.client.channels.cache.get(dootabase.get(String((String((interaction.guild).id) + '-part_logs_server')))).send({
                                                                                            embeds: [new MessageEmbed()
                                                                                                .setTitle(String((String(s4d.database.get(String('save_emoji'))) + String(s4d.database.get(String('logs_title_part_title_fr'))))))
                                                                                                .setColor(String(s4d.database.get(String('embed_color'))))
                                                                                                .setDescription(String((['> <:Partner_Member:994858030942408704> | **Auteur:** *<@', (interaction.member.user).id, '> / `', (interaction.member.user).tag, '` / `', (interaction.member.user).id, `\`*
                                              > <:Partner_Notification:992727141340954624> | **Mention:** `, dootabase.get(String((String((interaction.guild).id) + '-conditation5_notif_server'))), '', '\n', '\n', '\n', dootabase.get(String((String(dootabase.get(String((String((interaction.guild).id) + '-id_server')))) + '-part_pub_server')))].join(''))))
                                                                                                .setFooter(String((String(s4d.database.get(String('tag_author_footer_fr'))) + String((interaction.member.user).tag))))
                                                                                            ]
                                                                                        });
                                                                                    } else {
                                                                                        s4d.client.channels.cache.get(dootabase.get(String((String((interaction.guild).id) + '-part_chanel')))).send({
                                                                                            content: String((['> <:Partner_Member:994858030942408704> | **Auteur:** *<@', (interaction.member.user).id, '> / `', (interaction.member.user).tag, '` / `', (interaction.member.user).id, `\`*
                                              > <:Partner_Notification:992727141340954624> | **Mention:** `, dootabase.get(String((String((interaction.guild).id) + '-conditation5_notif_server'))), '', '\n', '\n', '\n', dootabase.get(String((String(dootabase.get(String((String((interaction.guild).id) + '-id_server')))) + '-part_pub_server')))].join('')))
                                                                                        });
                                                                                        s4d.client.channels.cache.get(dootabase.get(String((String((interaction.guild).id) + '-part_logs_server')))).send({
                                                                                            embeds: [new MessageEmbed()
                                                                                                .setTitle(String((String(s4d.database.get(String('save_emoji'))) + String(s4d.database.get(String('logs_title_part_title_fr'))))))
                                                                                                .setColor(String(s4d.database.get(String('embed_color'))))
                                                                                                .setDescription(String((['> <:Partner_Member:994858030942408704> | **Auteur:** *<@', (interaction.member.user).id, '> / `', (interaction.member.user).tag, '` / `', (interaction.member.user).id, `\`*
                                              > <:Partner_Notification:992727141340954624> | **Mention:** `, dootabase.get(String((String((interaction.guild).id) + '-conditation5_notif_server'))), '', '\n', '\n', '\n', dootabase.get(String((String(dootabase.get(String((String((interaction.guild).id) + '-id_server')))) + '-part_pub_server')))].join(''))))
                                                                                                .setFooter(String((String(s4d.database.get(String('tag_author_footer_fr'))) + String((interaction.member.user).tag))))
                                                                                            ]
                                                                                        });
                                                                                    }
                                                                                }
                                                                            }

                                                                        } else {
                                                                            var embed = new Discord.MessageEmbed()
                                                                            embed.setColor(s4d.database.get(String('wrong_color')));
                                                                            embed.setDescription((String(s4d.database.get(String('wrong_emoji'))) + String(s4d.database.get(String('limite_part_message_fr')))));

                                                                            await interaction.reply({
                                                                                embeds: [(embed)],
                                                                                ephemeral: true,
                                                                                components: []
                                                                            });
                                                                        }
                                                                    } else {
                                                                        var embed = new Discord.MessageEmbed()
                                                                        embed.setColor(s4d.database.get(String('wrong_color')));
                                                                        embed.setDescription((String(s4d.database.get(String('wrong_emoji'))) + String(s4d.database.get(String('time_server_part_limite_reply_message_fr')))));

                                                                        await interaction.reply({
                                                                            embeds: [(embed)],
                                                                            ephemeral: true,
                                                                            components: []
                                                                        });
                                                                    }
                                                                } else {
                                                                    var embed = new Discord.MessageEmbed()
                                                                    embed.setColor(s4d.database.get(String('wrong_color')));
                                                                    embed.setDescription((String(s4d.database.get(String('wrong_emoji'))) + String(s4d.database.get(String('info_change_config_menu_message_fr')))));

                                                                    await interaction.reply({
                                                                        embeds: [(embed)],
                                                                        ephemeral: true,
                                                                        components: []
                                                                    });
                                                                }
                                                            } else {
                                                                var embed = new Discord.MessageEmbed()
                                                                embed.setColor(s4d.database.get(String('wrong_color')));
                                                                embed.setDescription((String(s4d.database.get(String('wrong_emoji'))) + String(s4d.database.get(String('info_change_config_menu_message_fr')))));

                                                                await interaction.reply({
                                                                    embeds: [(embed)],
                                                                    ephemeral: true,
                                                                    components: []
                                                                });
                                                            }
                                                        } else {
                                                            var embed = new Discord.MessageEmbed()
                                                            embed.setColor(s4d.database.get(String('wrong_color')));
                                                            embed.setDescription((String(s4d.database.get(String('wrong_emoji'))) + String(s4d.database.get(String('info_change_config_menu_message_fr')))));

                                                            await interaction.reply({
                                                                embeds: [(embed)],
                                                                ephemeral: true,
                                                                components: []
                                                            });
                                                        }
                                                    } else {
                                                        var embed = new Discord.MessageEmbed()
                                                        embed.setColor(s4d.database.get(String('embed_color')));
                                                        embed.setDescription((String(s4d.database.get(String('blacklist_emoji'))) + String(s4d.database.get(String('server_owner_chanel_message_fr')))));

                                                        await interaction.reply({
                                                            embeds: [(embed)],
                                                            ephemeral: true,
                                                            components: []
                                                        });
                                                    }
                                                } else {
                                                    var embed = new Discord.MessageEmbed()
                                                    embed.setColor(s4d.database.get(String('embed_color')));
                                                    embed.setDescription((String(s4d.database.get(String('blacklist_emoji'))) + String(s4d.database.get(String('server_owner_chanel_message_fr')))));

                                                    await interaction.reply({
                                                        embeds: [(embed)],
                                                        ephemeral: true,
                                                        components: []
                                                    });
                                                }
                                            } else {
                                                var embed = new Discord.MessageEmbed()
                                                embed.setColor(s4d.database.get(String('embed_color')));
                                                embed.setDescription((String(s4d.database.get(String('blacklist_emoji'))) + String(s4d.database.get(String('server_owner_form_message_fr')))));

                                                await interaction.reply({
                                                    embeds: [(embed)],
                                                    ephemeral: true,
                                                    components: []
                                                });
                                            }
                                        } else {
                                            var embed = new Discord.MessageEmbed()
                                            embed.setColor(s4d.database.get(String('embed_color')));
                                            embed.setDescription((String(s4d.database.get(String('blacklist_emoji'))) + String(s4d.database.get(String('server_blacklist_message_fr')))));

                                            await interaction.reply({
                                                embeds: [(embed)],
                                                ephemeral: true,
                                                components: []
                                            });
                                        }
                                    } else {
                                        var embed = new Discord.MessageEmbed()
                                        embed.setColor(s4d.database.get(String('embed_color')));
                                        embed.setDescription((String(s4d.database.get(String('blacklist_emoji'))) + String(s4d.database.get(String('server_blacklist_message_fr')))));

                                        await interaction.reply({
                                            embeds: [(embed)],
                                            ephemeral: true,
                                            components: []
                                        });
                                    }
                                } else {
                                    var embed = new Discord.MessageEmbed()
                                    embed.setColor(s4d.database.get(String('wrong_color')));
                                    embed.setDescription((String(s4d.database.get(String('wrong_emoji'))) + String(s4d.database.get(String('nover_server_message_fr')))));

                                    await interaction.reply({
                                        embeds: [(embed)],
                                        ephemeral: true,
                                        components: []
                                    });
                                }
                            } else {
                                var embed = new Discord.MessageEmbed()
                                embed.setColor(s4d.database.get(String('wrong_color')));
                                embed.setDescription((String(s4d.database.get(String('wrong_emoji'))) + String(s4d.database.get(String('nover_server_message_fr')))));

                                await interaction.reply({
                                    embeds: [(embed)],
                                    ephemeral: true,
                                    components: []
                                });
                            }
                        } else {
                            var embed = new Discord.MessageEmbed()
                            embed.setColor(s4d.database.get(String('wrong_color')));
                            embed.setDescription((String(s4d.database.get(String('wrong_emoji'))) + String(s4d.database.get(String('bot_not_send_message_fr')))));

                            await interaction.reply({
                                embeds: [(embed)],
                                ephemeral: true,
                                components: []
                            });
                        }
                    } else {
                        var embed = new Discord.MessageEmbed()
                        embed.setColor(s4d.database.get(String('wrong_color')));
                        embed.setDescription((String(s4d.database.get(String('wrong_emoji'))) + String(s4d.database.get(String('bot_not_send_message_fr')))));

                        await interaction.reply({
                            embeds: [(embed)],
                            ephemeral: true,
                            components: []
                        });
                    }
                } else {
                    var embed = new Discord.MessageEmbed()
                    embed.setColor(s4d.database.get(String('wrong_color')));
                    embed.setDescription((String(s4d.database.get(String('wrong_emoji'))) + String(s4d.database.get(String('wrong_user_noexist_partner_list_message_fr')))));

                    await interaction.reply({
                        embeds: [(embed)],
                        ephemeral: true,
                        components: []
                    });
                }
            } else {
                var embed = new Discord.MessageEmbed()
                embed.setColor(s4d.database.get(String('wrong_color')));
                embed.setDescription((String(s4d.database.get(String('wrong_emoji'))) + String(s4d.database.get(String('config_condition_error_message_fr')))));

                await interaction.reply({
                    embeds: [(embed)],
                    ephemeral: true,
                    components: []
                });
            }
        }

    });

    s4d.client.on('messageCreate', async (s4dmessage) => {
        dootabase.setFile("./" + 'Donnés' + ".json");
        if ((s4dmessage.content) == '<@992907384592805968>') {
            s4dmessage.reply({
                embeds: [new MessageEmbed()
                    .setTitle(String((String(s4d.database.get(String('logo_emoji'))) + ' **| Partner Bot**')))
                    .setColor(String(s4d.database.get(String('embed_color'))))
                    .setDescription(String('**Mon préfixe est** *`/`* **!**'))
                    .setFooter(String((String(s4d.database.get(String('tag_author_footer_fr'))) + String((s4dmessage.author).tag))))
                ],
                allowedMentions: {
                    repliedUser: true
                }
            });
        }
        if (((s4dmessage.content) || '').startsWith('#blacklist_server' || '')) {
            if (s4d.database.get(String('dev')) == ((s4dmessage.author).id)) {
                verification_add = (s4dmessage.content).split(' ');
                verification_add = verification_add.splice(1, 1)[0];
                dootabase.set(String(verification_add), 'blacklist_serv');
                s4d.client.channels.cache.get(s4d.database.get(String('logs_chanel'))).send({
                    embeds: [new MessageEmbed()
                        .setTitle(String((String(s4d.database.get(String('blacklist_emoji'))) + ' **| Serveur Blacklist**')))
                        .setColor(String(s4d.database.get(String('embed_color'))))
                        .setDescription(String((['**ID:** *```', verification_add, `\`\`\`*
      **Auteur:** *\`\`\``, (s4dmessage.author).tag, ' / ', (s4dmessage.author).id, '```*'].join(''))))
                    ]
                });
                s4dmessage.channel.send({
                    embeds: [new MessageEmbed()
                        .setTitle(String((String(s4d.database.get(String('blacklist_emoji'))) + ' **| Serveur Blacklist**')))
                        .setColor(String(s4d.database.get(String('embed_color'))))
                        .setDescription(String((['**Le serveur avec l\'ID** *`', verification_add, '', '', '`* **a bien été ajouté de la liste des serveurs blacklist !**'].join(''))))
                    ]
                });
                s4dmessage.delete();
            } else {
                s4dmessage.reply({
                    embeds: [new MessageEmbed()
                        .setColor(String(s4d.database.get(String('wrong_color'))))
                        .setDescription(String((String(s4d.database.get(String('wrong_emoji'))) + String(s4d.database.get(String('error_access_dev_message_fr'))))))
                    ],
                    allowedMentions: {
                        repliedUser: true
                    }
                }).then(async (s4dfrost_real_reply) => {
                    s4dmessage.delete();
                    await delay(Number(5) * 1000);
                    s4dfrost_real_reply.delete();

                });
            }
        }
        if (((s4dmessage.content) || '').startsWith('#blacklist_remove' || '')) {
            if (s4d.database.get(String('dev')) == ((s4dmessage.author).id)) {
                verification_add = (s4dmessage.content).split(' ');
                verification_add = verification_add.splice(1, 1)[0];
                dootabase.set(String(verification_add), 'no_raid');
                s4d.client.channels.cache.get(s4d.database.get(String('logs_chanel'))).send({
                    embeds: [new MessageEmbed()
                        .setTitle(String((String(s4d.database.get(String('blacklist_emoji'))) + ' **| UnBlacklist**')))
                        .setColor(String(s4d.database.get(String('embed_color'))))
                        .setDescription(String((['**ID:** *```', verification_add, '', '', `\`\`\`*
      **Auteur:** *\`\`\``, (s4dmessage.author).tag, ' / ', (s4dmessage.author).id, '```*'].join(''))))
                    ]
                });
                s4dmessage.channel.send({
                    embeds: [new MessageEmbed()
                        .setTitle(String((String(s4d.database.get(String('blacklist_emoji'))) + ' **| UnBlacklist**')))
                        .setColor(String(s4d.database.get(String('embed_color'))))
                        .setDescription(String((['**L\'ID** *`', verification_add, '', '', '`* **a bien été retiré de la liste des utilisateurs blacklist !**'].join(''))))
                    ]
                });
                s4dmessage.delete();
            } else {
                s4dmessage.reply({
                    embeds: [new MessageEmbed()
                        .setColor(String(s4d.database.get(String('wrong_color'))))
                        .setDescription(String((String(s4d.database.get(String('wrong_emoji'))) + String(s4d.database.get(String('error_access_dev_message_fr'))))))
                    ],
                    allowedMentions: {
                        repliedUser: true
                    }
                }).then(async (s4dfrost_real_reply) => {
                    s4dmessage.delete();
                    await delay(Number(5) * 1000);
                    s4dfrost_real_reply.delete();

                });
            }
        }
        if (((s4dmessage.content) || '').startsWith('#blacklist_user' || '')) {
            if (s4d.database.get(String('dev')) == ((s4dmessage.author).id)) {
                verification_add = (s4dmessage.content).split(' ');
                verification_add = verification_add.splice(1, 1)[0];
                dootabase.set(String(verification_add), 'raid');
                s4d.client.channels.cache.get(s4d.database.get(String('logs_chanel'))).send({
                    embeds: [new MessageEmbed()
                        .setTitle(String((String(s4d.database.get(String('blacklist_emoji'))) + ' **| Utilisateur Blacklist**')))
                        .setColor(String(s4d.database.get(String('embed_color'))))
                        .setDescription(String((['**ID:** *```', verification_add, '', '', `\`\`\`*
      **Auteur:** *\`\`\``, (s4dmessage.author).tag, ' / ', (s4dmessage.author).id, '```*'].join(''))))
                    ]
                });
                s4dmessage.channel.send({
                    embeds: [new MessageEmbed()
                        .setTitle(String((String(s4d.database.get(String('blacklist_emoji'))) + ' **| Utilisateur Blacklist**')))
                        .setColor(String(s4d.database.get(String('embed_color'))))
                        .setDescription(String((['**L\'utilisateur avec l\'ID** *`', verification_add, '', '', '`* **a bien été ajouté à la liste des utilisateurs blacklist !**'].join(''))))
                    ]
                });
                s4dmessage.delete();
            } else {
                s4dmessage.reply({
                    embeds: [new MessageEmbed()
                        .setColor(String(s4d.database.get(String('wrong_color'))))
                        .setDescription(String((String(s4d.database.get(String('wrong_emoji'))) + String(s4d.database.get(String('error_access_dev_message_fr'))))))
                    ],
                    allowedMentions: {
                        repliedUser: true
                    }
                }).then(async (s4dfrost_real_reply) => {
                    s4dmessage.delete();
                    await delay(Number(5) * 1000);
                    s4dfrost_real_reply.delete();

                });
            }
        }
        if (((s4dmessage.content) || '').startsWith('#ultimate_activate' || '')) {
            if (s4d.database.get(String('dev')) == ((s4dmessage.author).id)) {
                if (!(dootabase.get(String(verification_add)) == 'blacklist_serv')) {
                    verification_add = (s4dmessage.content).split(' ');
                    verification_add = verification_add.splice(1, 1)[0];
                    dootabase.set(String((String(verification_add) + '-ultimate_time')), ((Math.floor(new Date().getTime() / 1000)) + 2629800));
                    dootabase.set(String((String(verification_add) + '-ultimate')), 'Activé');
                    s4d.client.channels.cache.get(s4d.database.get(String('logs_chanel'))).send({
                        embeds: [new MessageEmbed()
                            .setTitle(String((String(s4d.database.get(String('ultimate_emoji'))) + ' **| Programme Ultimate activé !**')))
                            .setColor(String(s4d.database.get(String('good_color'))))
                            .setDescription(String((['**ID:** *```', verification_add, `\`\`\`*
        **Nom:** *\`\`\``, (s4d.client.guilds.cache.get(verification_add)).name, `\`\`\`*
        **Auteur:** *\`\`\``, (s4dmessage.author).tag, ' / ', (s4dmessage.author).id, '```*'].join(''))))
                        ]
                    });
                    s4dmessage.channel.send({
                        embeds: [new MessageEmbed()
                            .setTitle(String((String(s4d.database.get(String('ultimate_emoji'))) + ' **| Programme Ultimate activé !**')))
                            .setColor(String(s4d.database.get(String('good_color'))))
                            .setDescription(String((['**Le serveur avec l\'ID** *`', verification_add, '`* **et le nom** *`', (s4d.client.guilds.cache.get(verification_add)).name, '`* **a bien été ajouté au programme Ultimate !**'].join(''))))
                        ]
                    });
                    s4dmessage.delete();
                } else {
                    s4dmessage.reply({
                        embeds: [new MessageEmbed()
                            .setColor(String(s4d.database.get(String('embed_color'))))
                            .setDescription(String((String(s4d.database.get(String('blacklist_emoji'))) + ' **| Ce serveur est blacklist !**')))
                        ],
                        allowedMentions: {
                            repliedUser: true
                        }
                    }).then(async (s4dfrost_real_reply) => {
                        await delay(Number(5) * 1000);
                        s4dfrost_real_reply.delete();
                        s4dmessage.delete();

                    });
                }
            } else {
                s4dmessage.reply({
                    embeds: [new MessageEmbed()
                        .setColor(String(s4d.database.get(String('wrong_color'))))
                        .setDescription(String((String(s4d.database.get(String('wrong_emoji'))) + String(s4d.database.get(String('error_access_dev_message_fr'))))))
                    ],
                    allowedMentions: {
                        repliedUser: true
                    }
                }).then(async (s4dfrost_real_reply) => {
                    s4dmessage.delete();
                    await delay(Number(5) * 1000);
                    s4dfrost_real_reply.delete();

                });
            }
        }
        if (((s4dmessage.content) || '').startsWith('#ultimate_remove' || '')) {
            if (s4d.database.get(String('dev')) == ((s4dmessage.author).id)) {
                if (!(dootabase.get(String(verification_add)) == 'blacklist_serv')) {
                    verification_add = (s4dmessage.content).split(' ');
                    verification_add = verification_add.splice(1, 1)[0];
                    dootabase.set(String((String(verification_add) + '-ultimate')), 'Désactivé');
                    s4d.client.channels.cache.get(s4d.database.get(String('logs_chanel'))).send({
                        embeds: [new MessageEmbed()
                            .setTitle(String((String(s4d.database.get(String('delete_emoji'))) + ' **| Retiré du programme Ultimate !**')))
                            .setColor(String(s4d.database.get(String('wrong_color'))))
                            .setDescription(String((['**ID:** *```', verification_add, `\`\`\`*
        **Nom:** *\`\`\``, (s4d.client.guilds.cache.get(verification_add)).name, `\`\`\`*
        **Auteur:** *\`\`\``, (s4dmessage.author).tag, ' / ', (s4dmessage.author).id, '```*'].join(''))))
                        ]
                    });
                    s4dmessage.channel.send({
                        embeds: [new MessageEmbed()
                            .setTitle(String((String(s4d.database.get(String('delete_emoji'))) + ' **| Retiré du programme Ultimate !**')))
                            .setColor(String(s4d.database.get(String('embed_color'))))
                            .setDescription(String((['**Le serveur avec l\'ID** *`', verification_add, '`* **et le nom** *`', (s4d.client.guilds.cache.get(verification_add)).name, '`* **a bien été retiré du programme Ultimate !**'].join(''))))
                        ]
                    });
                    s4dmessage.delete();
                } else {
                    s4dmessage.reply({
                        embeds: [new MessageEmbed()
                            .setColor(String(s4d.database.get(String('embed_color'))))
                            .setDescription(String((String(s4d.database.get(String('blacklist_emoji'))) + ' **| Ce serveur est blacklist !**')))
                        ],
                        allowedMentions: {
                            repliedUser: true
                        }
                    }).then(async (s4dfrost_real_reply) => {
                        await delay(Number(5) * 1000);
                        s4dfrost_real_reply.delete();
                        s4dmessage.delete();

                    });
                }
            } else {
                s4dmessage.reply({
                    embeds: [new MessageEmbed()
                        .setColor(String(s4d.database.get(String('wrong_color'))))
                        .setDescription(String((String(s4d.database.get(String('wrong_emoji'))) + String(s4d.database.get(String('error_access_dev_message_fr'))))))
                    ],
                    allowedMentions: {
                        repliedUser: true
                    }
                }).then(async (s4dfrost_real_reply) => {
                    s4dmessage.delete();
                    await delay(Number(5) * 1000);
                    s4dfrost_real_reply.delete();
                });
            }
        }
        if (((s4dmessage.content) || '').startsWith('#verification_remove' || '')) {
            if ((s4dmessage.member)._roles.includes(((s4dmessage.guild).roles.cache.get('993455718336311366')).id)) {
                if (!(dootabase.get(String(verification_add)) == 'blacklist_serv')) {
                    verification_add = (s4dmessage.content).split(' ');
                    verification_add = verification_add.splice(1, 1)[0];
                    dootabase.set(String(verification_add), 'no_verif');
                    s4d.client.channels.cache.get(s4d.database.get(String('logs_chanel'))).send({
                        embeds: [new MessageEmbed()
                            .setTitle(String((String(s4d.database.get(String('delete_emoji'))) + ' **| Serveur retiré des verifs!**')))
                            .setColor(String(s4d.database.get(String('wrong_color'))))
                            .setDescription(String((['**ID:** *```', verification_add, `\`\`\`*
        **Nom:** *\`\`\``, (s4d.client.guilds.cache.get(verification_add)).name, `\`\`\`*
        **Auteur:** *\`\`\``, (s4dmessage.author).tag, ' / ', (s4dmessage.author).id, '```*'].join(''))))
                        ]
                    });
                    s4dmessage.channel.send({
                        embeds: [new MessageEmbed()
                            .setTitle(String((String(s4d.database.get(String('delete_emoji'))) + ' **| Serveur retiré des verifs!**')))
                            .setColor(String(s4d.database.get(String('embed_color'))))
                            .setDescription(String((['**Le serveur avec l\'ID** *`', verification_add, '`* **et le nom** *`', (s4d.client.guilds.cache.get(verification_add)).name, '`* **a bien été retiré à la liste des serveurs vérifiés !**'].join(''))))
                        ]
                    });
                    s4dmessage.delete();
                } else {
                    s4dmessage.reply({
                        embeds: [new MessageEmbed()
                            .setColor(String(s4d.database.get(String('embed_color'))))
                            .setDescription(String((String(s4d.database.get(String('blacklist_emoji'))) + ' **| Ce serveur est blacklist !**')))
                        ],
                        allowedMentions: {
                            repliedUser: true
                        }
                    }).then(async (s4dfrost_real_reply) => {
                        await delay(Number(5) * 1000);
                        s4dfrost_real_reply.delete();
                        s4dmessage.delete();

                    });
                }
            } else {
                s4dmessage.reply({
                    embeds: [new MessageEmbed()
                        .setColor(String(s4d.database.get(String('wrong_color'))))
                        .setDescription(String((String(s4d.database.get(String('wrong_emoji'))) + String(s4d.database.get(String('error_access_modo_analyste_message_fr'))))))
                    ],
                    allowedMentions: {
                        repliedUser: true
                    }
                }).then(async (s4dfrost_real_reply) => {
                    await delay(Number(5) * 1000);
                    s4dfrost_real_reply.delete();
                    s4dmessage.delete();

                });
            }
        }
        if (((s4dmessage.content) || '').startsWith('#verification_add' || '')) {
            if ((s4dmessage.member)._roles.includes(((s4dmessage.guild).roles.cache.get('993455718336311366')).id)) {
                if (!(dootabase.get(String(verification_add)) == 'blacklist_serv')) {
                    verification_add = (s4dmessage.content).split(' ');
                    verification_add = verification_add.splice(1, 1)[0];
                    dootabase.set(String(verification_add), 'verif_serv');
                    s4d.client.channels.cache.get(s4d.database.get(String('logs_chanel'))).send({
                        embeds: [new MessageEmbed()
                            .setTitle(String((String(s4d.database.get(String('good_emoji'))) + ' **| Serveur vérifié!**')))
                            .setColor(String(s4d.database.get(String('good_color'))))
                            .setDescription(String((['**ID:** *```', verification_add, `\`\`\`*
        **Nom:** *\`\`\``, (s4d.client.guilds.cache.get(verification_add)).name, `\`\`\`*
        **Auteur:** *\`\`\``, (s4dmessage.author).tag, ' / ', (s4dmessage.author).id, '```*'].join(''))))
                        ]
                    });
                    s4dmessage.channel.send({
                        embeds: [new MessageEmbed()
                            .setTitle(String((String(s4d.database.get(String('good_emoji'))) + ' **| Serveur vérifié!**')))
                            .setColor(String(s4d.database.get(String('good_color'))))
                            .setDescription(String((['**Le serveur avec l\'ID** *`', verification_add, '`* **et le nom** *`', (s4d.client.guilds.cache.get(verification_add)).name, '`* **a bien été ajouté à la liste des serveurs vérifiés !**'].join(''))))
                        ]
                    });
                    s4dmessage.delete();
                } else {
                    s4dmessage.reply({
                        embeds: [new MessageEmbed()
                            .setColor(String(s4d.database.get(String('embed_color'))))
                            .setDescription(String((String(s4d.database.get(String('blacklist_emoji'))) + ' **| Ce serveur est blacklist !**')))
                        ],
                        allowedMentions: {
                            repliedUser: true
                        }
                    }).then(async (s4dfrost_real_reply) => {
                        await delay(Number(5) * 1000);
                        s4dfrost_real_reply.delete();
                        s4dmessage.delete();

                    });
                }
            } else {
                s4dmessage.reply({
                    embeds: [new MessageEmbed()
                        .setColor(String(s4d.database.get(String('wrong_color'))))
                        .setDescription(String((String(s4d.database.get(String('wrong_emoji'))) + String(s4d.database.get(String('error_access_modo_analyste_message_fr'))))))
                    ],
                    allowedMentions: {
                        repliedUser: true
                    }
                }).then(async (s4dfrost_real_reply) => {
                    await delay(Number(5) * 1000);
                    s4dfrost_real_reply.delete();
                    s4dmessage.delete();

                });
            }
        }
        if ((s4dmessage.content) == '#help') {
            if (s4d.database.get(String('dev')) == ((s4dmessage.author).id)) {
                s4dmessage.delete();
                (s4dmessage.author).send({
                    embeds: [new MessageEmbed()
                        .setTitle(String('<:Partner_PartnerSupport:996818326087012433> **| Menu d\'aide (Espace développeurs) - Partner Project**'))
                        .setColor(String(s4d.database.get(String('embed_color'))))
                        .setDescription(String(`__**<:Partner_Dev:992908906839937054> | Commandes développeurs**__

      **↬ <:Partner_Blacklist:993457706465775646> | Sanctions:**
      > **\`#blacklist_user\`** ⇀ *Ajouter un utilisateur à la liste des personnes ne pouvant pas utiliser le bot.*
      > **\`#blacklist_remove\`** ⇀ *Retirer un utilisateur/serveur de la liste des personnes/serveurs ne pouvant pas utiliser le bot.*
      > **\`#blacklist_server\`** ⇀ *Ajouter un serveur à la liste des serveurs ne pouvant pas utiliser le bot.*

      **↬ <:Partner_Ultimate:992099675706507274> | Gestion Ultimate:**
      > **\`##ultimate_activate\`** ⇀ *Activer le programme Ultimate sur un serveur pour une durée de 1 mois.*
      > **\`#ultimate_remove\`** ⇀ *Désactiver le programme Ultimate d'un serveur.*

      **↬ <:Partner_Verify:992099544198295602> | Gestion vérification:**
      > **\`#verification_add\`** ⇀ *Ajouter un serveur à la liste des serveurs vérifiés.*
      > **\`#verification_remove\`** ⇀ *Retirer un serveur des la liste des serveurs vérifiés.*
      `))
                    ]
                });
            } else {
                s4dmessage.reply({
                    embeds: [new MessageEmbed()
                        .setColor(String(s4d.database.get(String('wrong_color'))))
                        .setDescription(String((String(s4d.database.get(String('wrong_emoji'))) + String(s4d.database.get(String('error_access_dev_message_fr'))))))
                    ],
                    allowedMentions: {
                        repliedUser: true
                    }
                }).then(async (s4dfrost_real_reply) => {
                    s4dmessage.delete();
                    await delay(Number(5) * 1000);
                    s4dfrost_real_reply.delete();

                });
            }
        }

    });

    s4d.client.on('interactionCreate', async (interaction) => {
        let member = interaction.guild.members.cache.get(interaction.member.user.id)
        if ((interaction.commandName) == 'condition_remove') {
            dootabase.setFile("./" + 'Donnés' + ".json");
            if (((interaction.member).permissions.has(Permissions.FLAGS.ADMINISTRATOR)) || s4d.database.get(String('dev')) == ((interaction.member.user).id)) {
                if ((interaction.options.getInteger('numéro_condition')) >= 1 && (interaction.options.getInteger('numéro_condition')) <= 10) {
                    if ((interaction.options.getInteger('numéro_condition')) == 1) {
                        if (dootabase.get(String((String((interaction.guild).id) + '-conditation1'))) == 'using') {
                            dootabase.del(String((String((interaction.guild).id) + '-conditation1')));
                            dootabase.del(String((String((interaction.guild).id) + '-conditation1_min_member')));
                            dootabase.del(String((String((interaction.guild).id) + '-conditation1_max_member')));
                            dootabase.del(String((String((interaction.guild).id) + '-conditation1_notif_server')));
                            dootabase.del(String((String((interaction.guild).id) + '-conditation1_notif_client')));
                            var embed = new Discord.MessageEmbed()
                            embed.setColor(s4d.database.get(String('embed_color')));
                            embed.setDescription((String(s4d.database.get(String('delete_emoji'))) + String(s4d.database.get(String('good_condition_delete_message_fr')))));

                            await interaction.reply({
                                embeds: [(embed)],
                                ephemeral: true,
                                components: []
                            });
                        } else {
                            var embed = new Discord.MessageEmbed()
                            embed.setColor(s4d.database.get(String('wrong_color')));
                            embed.setDescription((String(s4d.database.get(String('wrong_emoji'))) + String(s4d.database.get(String('condition_noexist_message_fr')))));

                            await interaction.reply({
                                embeds: [(embed)],
                                ephemeral: true,
                                components: []
                            });
                        }
                    } else if ((interaction.options.getInteger('numéro_condition')) == 2) {
                        if (dootabase.get(String((String((interaction.guild).id) + '-conditation2'))) == 'using') {
                            dootabase.del(String((String((interaction.guild).id) + '-conditation2')));
                            dootabase.del(String((String((interaction.guild).id) + '-conditation2_min_member')));
                            dootabase.del(String((String((interaction.guild).id) + '-conditation2_max_member')));
                            dootabase.del(String((String((interaction.guild).id) + '-conditation2_notif_server')));
                            dootabase.del(String((String((interaction.guild).id) + '-conditation2_notif_client')));
                            var embed = new Discord.MessageEmbed()
                            embed.setColor(s4d.database.get(String('embed_color')));
                            embed.setDescription((String(s4d.database.get(String('delete_emoji'))) + String(s4d.database.get(String('good_condition_delete_message_fr')))));

                            await interaction.reply({
                                embeds: [(embed)],
                                ephemeral: true,
                                components: []
                            });
                        } else {
                            var embed = new Discord.MessageEmbed()
                            embed.setColor(s4d.database.get(String('wrong_color')));
                            embed.setDescription((String(s4d.database.get(String('wrong_emoji'))) + String(s4d.database.get(String('condition_noexist_message_fr')))));

                            await interaction.reply({
                                embeds: [(embed)],
                                ephemeral: true,
                                components: []
                            });
                        }
                    } else if ((interaction.options.getInteger('numéro_condition')) == 3) {
                        if (dootabase.get(String((String((interaction.guild).id) + '-conditation3'))) == 'using') {
                            dootabase.del(String((String((interaction.guild).id) + '-conditation3')));
                            dootabase.del(String((String((interaction.guild).id) + '-conditation3_min_member')));
                            dootabase.del(String((String((interaction.guild).id) + '-conditation3_max_member')));
                            dootabase.del(String((String((interaction.guild).id) + '-conditation3_notif_server')));
                            dootabase.del(String((String((interaction.guild).id) + '-conditation3_notif_client')));
                            var embed = new Discord.MessageEmbed()
                            embed.setColor(s4d.database.get(String('embed_color')));
                            embed.setDescription((String(s4d.database.get(String('delete_emoji'))) + String(s4d.database.get(String('good_condition_delete_message_fr')))));

                            await interaction.reply({
                                embeds: [(embed)],
                                ephemeral: true,
                                components: []
                            });
                        } else {
                            var embed = new Discord.MessageEmbed()
                            embed.setColor(s4d.database.get(String('wrong_color')));
                            embed.setDescription((String(s4d.database.get(String('wrong_emoji'))) + String(s4d.database.get(String('condition_noexist_message_fr')))));

                            await interaction.reply({
                                embeds: [(embed)],
                                ephemeral: true,
                                components: []
                            });
                        }
                    } else if ((interaction.options.getInteger('numéro_condition')) == 4) {
                        if (dootabase.get(String((String((interaction.guild).id) + '-conditation4'))) == 'using') {
                            dootabase.del(String((String((interaction.guild).id) + '-conditation4')));
                            dootabase.del(String((String((interaction.guild).id) + '-conditation4_min_member')));
                            dootabase.del(String((String((interaction.guild).id) + '-conditation4_max_member')));
                            dootabase.del(String((String((interaction.guild).id) + '-conditation4_notif_server')));
                            dootabase.del(String((String((interaction.guild).id) + '-conditation4_notif_client')));
                            var embed = new Discord.MessageEmbed()
                            embed.setColor(s4d.database.get(String('embed_color')));
                            embed.setDescription((String(s4d.database.get(String('delete_emoji'))) + String(s4d.database.get(String('good_condition_delete_message_fr')))));

                            await interaction.reply({
                                embeds: [(embed)],
                                ephemeral: true,
                                components: []
                            });
                        } else {
                            var embed = new Discord.MessageEmbed()
                            embed.setColor(s4d.database.get(String('wrong_color')));
                            embed.setDescription((String(s4d.database.get(String('wrong_emoji'))) + String(s4d.database.get(String('condition_noexist_message_fr')))));

                            await interaction.reply({
                                embeds: [(embed)],
                                ephemeral: true,
                                components: []
                            });
                        }
                    } else if ((interaction.options.getInteger('numéro_condition')) == 5) {
                        if (dootabase.get(String((String((interaction.guild).id) + '-conditation5'))) == 'using') {
                            dootabase.del(String((String((interaction.guild).id) + '-conditation5')));
                            dootabase.del(String((String((interaction.guild).id) + '-conditation5_min_member')));
                            dootabase.del(String((String((interaction.guild).id) + '-conditation5_max_member')));
                            dootabase.del(String((String((interaction.guild).id) + '-conditation5_notif_server')));
                            dootabase.del(String((String((interaction.guild).id) + '-conditation5_notif_client')));
                            var embed = new Discord.MessageEmbed()
                            embed.setColor(s4d.database.get(String('embed_color')));
                            embed.setDescription((String(s4d.database.get(String('delete_emoji'))) + String(s4d.database.get(String('good_condition_delete_message_fr')))));

                            await interaction.reply({
                                embeds: [(embed)],
                                ephemeral: true,
                                components: []
                            });
                        } else {
                            var embed = new Discord.MessageEmbed()
                            embed.setColor(s4d.database.get(String('wrong_color')));
                            embed.setDescription((String(s4d.database.get(String('wrong_emoji'))) + String(s4d.database.get(String('condition_noexist_message_fr')))));

                            await interaction.reply({
                                embeds: [(embed)],
                                ephemeral: true,
                                components: []
                            });
                        }
                    } else if ((interaction.options.getInteger('numéro_condition')) == 6) {
                        if (dootabase.get(String((String((interaction.guild).id) + '-conditation6'))) == 'using') {
                            dootabase.del(String((String((interaction.guild).id) + '-conditation6')));
                            dootabase.del(String((String((interaction.guild).id) + '-conditation6_min_member')));
                            dootabase.del(String((String((interaction.guild).id) + '-conditation6_max_member')));
                            dootabase.del(String((String((interaction.guild).id) + '-conditation6_notif_server')));
                            dootabase.del(String((String((interaction.guild).id) + '-conditation6_notif_client')));
                            var embed = new Discord.MessageEmbed()
                            embed.setColor(s4d.database.get(String('embed_color')));
                            embed.setDescription((String(s4d.database.get(String('delete_emoji'))) + String(s4d.database.get(String('good_condition_delete_message_fr')))));

                            await interaction.reply({
                                embeds: [(embed)],
                                ephemeral: true,
                                components: []
                            });
                        } else {
                            var embed = new Discord.MessageEmbed()
                            embed.setColor(s4d.database.get(String('wrong_color')));
                            embed.setDescription((String(s4d.database.get(String('wrong_emoji'))) + String(s4d.database.get(String('condition_noexist_message_fr')))));

                            await interaction.reply({
                                embeds: [(embed)],
                                ephemeral: true,
                                components: []
                            });
                        }
                    } else if ((interaction.options.getInteger('numéro_condition')) == 7) {
                        if (dootabase.get(String((String((interaction.guild).id) + '-conditation7'))) == 'using') {
                            dootabase.del(String((String((interaction.guild).id) + '-conditation7')));
                            dootabase.del(String((String((interaction.guild).id) + '-conditation7_min_member')));
                            dootabase.del(String((String((interaction.guild).id) + '-conditation7_max_member')));
                            dootabase.del(String((String((interaction.guild).id) + '-conditation7_notif_server')));
                            dootabase.del(String((String((interaction.guild).id) + '-conditation7_notif_client')));
                            var embed = new Discord.MessageEmbed()
                            embed.setColor(s4d.database.get(String('embed_color')));
                            embed.setDescription((String(s4d.database.get(String('delete_emoji'))) + String(s4d.database.get(String('good_condition_delete_message_fr')))));

                            await interaction.reply({
                                embeds: [(embed)],
                                ephemeral: true,
                                components: []
                            });
                        } else {
                            var embed = new Discord.MessageEmbed()
                            embed.setColor(s4d.database.get(String('wrong_color')));
                            embed.setDescription((String(s4d.database.get(String('wrong_emoji'))) + String(s4d.database.get(String('condition_noexist_message_fr')))));

                            await interaction.reply({
                                embeds: [(embed)],
                                ephemeral: true,
                                components: []
                            });
                        }
                    } else if ((interaction.options.getInteger('numéro_condition')) == 8) {
                        if (dootabase.get(String((String((interaction.guild).id) + '-conditation8'))) == 'using') {
                            dootabase.del(String((String((interaction.guild).id) + '-conditation8')));
                            dootabase.del(String((String((interaction.guild).id) + '-conditation8_min_member')));
                            dootabase.del(String((String((interaction.guild).id) + '-conditation8_max_member')));
                            dootabase.del(String((String((interaction.guild).id) + '-conditation8_notif_server')));
                            dootabase.del(String((String((interaction.guild).id) + '-conditation8_notif_client')));
                            var embed = new Discord.MessageEmbed()
                            embed.setColor(s4d.database.get(String('embed_color')));
                            embed.setDescription((String(s4d.database.get(String('delete_emoji'))) + String(s4d.database.get(String('good_condition_delete_message_fr')))));

                            await interaction.reply({
                                embeds: [(embed)],
                                ephemeral: true,
                                components: []
                            });
                        } else {
                            var embed = new Discord.MessageEmbed()
                            embed.setColor(s4d.database.get(String('wrong_color')));
                            embed.setDescription((String(s4d.database.get(String('wrong_emoji'))) + String(s4d.database.get(String('condition_noexist_message_fr')))));

                            await interaction.reply({
                                embeds: [(embed)],
                                ephemeral: true,
                                components: []
                            });
                        }
                    } else if ((interaction.options.getInteger('numéro_condition')) == 9) {
                        if (dootabase.get(String((String((interaction.guild).id) + '-conditation9'))) == 'using') {
                            dootabase.del(String((String((interaction.guild).id) + '-conditation9')));
                            dootabase.del(String((String((interaction.guild).id) + '-conditation9_min_member')));
                            dootabase.del(String((String((interaction.guild).id) + '-conditation9_max_member')));
                            dootabase.del(String((String((interaction.guild).id) + '-conditation9_notif_server')));
                            dootabase.del(String((String((interaction.guild).id) + '-conditation9_notif_client')));
                            var embed = new Discord.MessageEmbed()
                            embed.setColor(s4d.database.get(String('embed_color')));
                            embed.setDescription((String(s4d.database.get(String('delete_emoji'))) + String(s4d.database.get(String('good_condition_delete_message_fr')))));

                            await interaction.reply({
                                embeds: [(embed)],
                                ephemeral: true,
                                components: []
                            });
                        } else {
                            var embed = new Discord.MessageEmbed()
                            embed.setColor(s4d.database.get(String('wrong_color')));
                            embed.setDescription((String(s4d.database.get(String('wrong_emoji'))) + String(s4d.database.get(String('condition_noexist_message_fr')))));

                            await interaction.reply({
                                embeds: [(embed)],
                                ephemeral: true,
                                components: []
                            });
                        }
                    } else if ((interaction.options.getInteger('numéro_condition')) == 10) {
                        if (dootabase.get(String((String((interaction.guild).id) + '-conditation10'))) == 'using') {
                            dootabase.del(String((String((interaction.guild).id) + '-conditation10')));
                            dootabase.del(String((String((interaction.guild).id) + '-conditation10_min_member')));
                            dootabase.del(String((String((interaction.guild).id) + '-conditation10_max_member')));
                            dootabase.del(String((String((interaction.guild).id) + '-conditation10_notif_server')));
                            dootabase.del(String((String((interaction.guild).id) + '-conditation10_notif_client')));
                            var embed = new Discord.MessageEmbed()
                            embed.setColor(s4d.database.get(String('embed_color')));
                            embed.setDescription((String(s4d.database.get(String('delete_emoji'))) + String(s4d.database.get(String('good_condition_delete_message_fr')))));

                            await interaction.reply({
                                embeds: [(embed)],
                                ephemeral: true,
                                components: []
                            });
                        } else {
                            var embed = new Discord.MessageEmbed()
                            embed.setColor(s4d.database.get(String('wrong_color')));
                            embed.setDescription((String(s4d.database.get(String('wrong_emoji'))) + String(s4d.database.get(String('condition_noexist_message_fr')))));

                            await interaction.reply({
                                embeds: [(embed)],
                                ephemeral: true,
                                components: []
                            });
                        }
                    }
                } else {
                    var embed = new Discord.MessageEmbed()
                    embed.setColor(s4d.database.get(String('wrong_color')));
                    embed.setDescription((String(s4d.database.get(String('wrong_emoji'))) + String(s4d.database.get(String('number_big_condition_remove_message_fr')))));

                    await interaction.reply({
                        embeds: [(embed)],
                        ephemeral: true,
                        components: []
                    });
                }
            } else {
                var embed = new Discord.MessageEmbed()
                embed.setColor(s4d.database.get(String('wrong_color')));
                embed.setDescription((String(s4d.database.get(String('wrong_emoji'))) + String(s4d.database.get(String('wrong_owner_message_fr')))));

                await interaction.reply({
                    embeds: [(embed)],
                    ephemeral: true,
                    components: []
                });
            }
        }

    });

    s4d.client.on('interactionCreate', async (interaction) => {
        let member = interaction.guild.members.cache.get(interaction.member.user.id)
        if ((interaction.commandName) == 'server_infos') {
            if (!dootabase.has(String((String((interaction.guild).id) + '-ultimate'))) || !(dootabase.get(String((String((interaction.guild).id) + '-ultimate'))) == 'Activé')) {
                dootabase.set(String((String((interaction.guild).id) + '-ultimate')), 'Non activé');
            }
            if (!dootabase.has(String(((interaction.guild).id))) || !(dootabase.get(String(((interaction.guild).id))) == 'verif_serv') && !(dootabase.get(String(((interaction.guild).id))) == 'blacklist_serv')) {
                dootabase.set(String(((interaction.guild).id)), 'Le serveur est ni vérifié ni blacklist !');
            }
            var embed = new Discord.MessageEmbed()
            embed.setColor(s4d.database.get(String('embed_color')));
            embed.setTitle((String(s4d.database.get(String('owner_emoji'))) + String(s4d.database.get(String('server_infos_title_message_fr')))))
                .setURL();
            embed.setDescription(([`↬ <:Partner_Help:993250377518546964> **| Informations sur le serveur:**

      > **<:Partner_Infos:992123787879399554> | Nom du serveur:** *\``, (interaction.guild).name, `\`*
      > **<:Partner_Settings:992734090312822794> | ID du serveur:** *\``, (interaction.guild).id, `\`*
      > **<:Partner_Moderator:992110132538376272> | Propriétaire du serveur:** *<@`, (interaction.guild).ownerId, '> / `', (((interaction.guild).members.cache.get(((interaction.guild).ownerId)) || await (interaction.guild).members.fetch(((interaction.guild).ownerId))).user).tag, ' / ', (interaction.guild).ownerId, '', `\`*
      > **<:Partner_Channel:992125913535889460> | Description du serveur:** *\``, (interaction.guild).description, `\`*
      > **<:Partner_Save:993117407222702171> | Date de création:** *\``, (interaction.guild).createdAt, `\`*
      > **<:Partner_Member:994858030942408704> | Nombre de membre(s):** *\``, (interaction.guild).memberCount, `\`*
      > **<:Partner_Diamond:992110929707798548> | Nombre de boost(s):** *\``, (interaction.guild).premiumSubscriptionCount, `\`*
      > **<:Partner_Boost:994859179254743090> | Niveau de boost:** *\``, (interaction.guild).premiumTier, `\`*

      ↬ **<:Partner_Partner:992104887984861354> | Informations Partenariats:**

      > <:Partner_Ultimate:992099675706507274> **| Programme Ultimate:** *\``, dootabase.get(String((String((interaction.guild).id) + '-ultimate'))), `\`*
      > **<:Partner_Verify:992099544198295602> | Serveur vérifié:** *\``, dootabase.get(String(((interaction.guild).id))), '`*', '', '', '', ''].join('')));
            embed.setImage(((interaction.guild).banner));
            embed.setFooter((String(s4d.database.get(String('tag_author_footer_fr'))) + String((interaction.member.user).tag)), ((interaction.member.user).displayAvatarURL({
                format: "png"
            })));
            embed.setTimestamp();

            await interaction.reply({
                embeds: [(embed)],
                ephemeral: false,
                components: []
            });
        }

    });

    s4d.client.on('interactionCreate', async (interaction) => {
        let member = interaction.guild.members.cache.get(interaction.member.user.id)
        if ((interaction.commandName) == 'help') {
            var embed = new Discord.MessageEmbed()
            embed.setColor(s4d.database.get(String('embed_color')));
            embed.setTitle('<:Partner_Logo:992099488653123634> **| Menu d\'aide - Partner **')
                .setURL();
            embed.setDescription(`<:Partner_Welcome:992734094238679090> **| Bienvenue sur le menu d'aide de** *\`Partner\`* **en cas de problème, contactez le support !**

      Interagissez avec les boutons pour afficher mes informations.`);
            embed.setImage('https://media.discordapp.net/attachments/957206053139935232/994661217413107832/Banniere_bot.png');
            embed.setFooter((String(s4d.database.get(String('tag_author_footer_fr'))) + String((interaction.member.user).tag)), ((interaction.member.user).displayAvatarURL({
                format: "png"
            })));
            embed.setTimestamp();

            const slash_command_help = new MessageButton()
                .setCustomId('slash_command_help')
                .setLabel('Slashs Commands')
                .setStyle(('SECONDARY'))
                .setEmoji('<:Partner_Slash:994641278593671289>')

            const add_bot_help = new MessageButton()
                .setLabel('Ajouter le bot')
                .setStyle(('LINK'))
                .setEmoji('<:Partner_Link:992955651359772753>')
                .setURL('https://discord.com/api/oauth2/authorize?client_id=992907384592805968&permissions=2147970241&scope=bot%20applications.commands')

            const join_server_help = new MessageButton()
                .setLabel('Serveur Support')
                .setStyle(('LINK'))
                .setEmoji('<:Partner_Diamond:992110929707798548>')
                .setURL('https://discord.gg/CJhCzvGs4e')

            const help_button = new MessageActionRow()
                .addComponents(slash_command_help)
                .addComponents(add_bot_help)
                .addComponents(join_server_help)

            await interaction.reply({
                embeds: [(embed)],
                ephemeral: false,
                components: [help_button]
            });
        }

    });

    s4d.client.on('messageDelete', async (s4dmessage) => {
        dootabase.setFile("./" + 'Donnés' + ".json");
        if (((s4dmessage.channel).id) == dootabase.get(String((String((s4dmessage.guild).id) + '-part_chanel')))) {
            (s4dmessage.channel).createInvite({
                maxAge: 0,
                maxUses: 0
            }).then(async invite => {
                s4d.client.channels.cache.get(s4d.database.get(String('logs_chanel'))).send({
                    content: String('<@&991989412604940334>')
                });
                s4d.client.channels.cache.get(s4d.database.get(String('logs_chanel'))).send({
                    embeds: [new MessageEmbed()
                        .setTitle(String((String(s4d.database.get(String('wrong_emoji'))) + ' **| Message suspect supprimé !**')))
                        .setColor(String('#993399'))
                        .setDescription(String(([`Un message extrêmement suspect a été supprimé dans un salon de partenariat, veuillez réagir le plus vite possible par une action proportionnelle à l'acte !

      **ID du serveur:** *\`\`\``, (s4dmessage.guild).id, `\`\`\`*
      **Salon:** *\`\`\``, (s4dmessage.channel).id, ' / #', (s4dmessage.channel).name, `\`\`\`*
      **Auteur du message:** *\`\`\``, (s4dmessage.member.user).tag, ' / ', (s4dmessage.member.user).id, `\`\`\`*
      **Invitation vers le serveur:** *\`\`\``, invite.url, `\`\`\`*
      **Contenu du message:** *\`\`\``, s4dmessage.content, '```*'].join(''))))
                    ]
                });

            });
        }

    });

    s4d.client.on('interactionCreate', async (interaction) => {
        if ((interaction.customId) == 'slash_command_help') {
            var embed = new Discord.MessageEmbed()
            embed.setColor(s4d.database.get(String('embed_color')));
            embed.setTitle('<:Partner_Logo:992099488653123634> **| Menu d\'aide - Partner **')
                .setURL();
            embed.setDescription(`<:Partner_Slash:994641278593671289> __**| Slashs Commands**__

      **↬ <:Partner_Settings:992734090312822794> | Utilitaires:**
      >      **\`/help\`** ⇀ *Afficher le menu d'aide du bot.*
      >      **\`/bot_infos\`** ⇀ *Afficher les informations relatives au bot.*
      >      **\`/role_infos\`** ⇀ *Afficher les informations précises d'un rôle.*
      >      **\`/server_infos\`** ⇀ *Afficher les informations du serveur.*

      **↬ <:Partner_Partner:992104887984861354> | Partenariat:**
      >      **\`/partenariat\`** ⇀ *Lancer un partenariat avec un serveur.*
      >      **\`/config\`** ⇀ *Configurer le bot sur le serveur.*
      >      **\`/verify\`** ⇀ *Lancer le programme de vérification sur le serveur.*
      >      **\`/partner_add\`** ⇀ *Ajouter un utilisateur à la liste des personnes autorisées à faire des partenariats.*
      >      **\`/partner_remove\`** ⇀ *Retirer un utilisateur de la liste des personnes autorisées à faire des partenariats.*
      >      **\`/condition_add\`** ⇀ *Ajouter une condition de partenariat.*
      >      **\`/condition_remove\`** ⇀ *Retirer une condition de partenariat.*
      >      **\`/conditions\`** ⇀ *Afficher les conditions de partenariat de ce serveur.*`);
            embed.setImage('https://media.discordapp.net/attachments/957206053139935232/994661217413107832/Banniere_bot.png');
            embed.setFooter((String(s4d.database.get(String('tag_author_footer_fr'))) + String((interaction.member.user).tag)), ((interaction.member.user).displayAvatarURL({
                format: "png"
            })));
            embed.setTimestamp();

            const help_return = new MessageButton()
                .setCustomId('help_return')
                .setLabel('Retour')
                .setStyle(('PRIMARY'))
                .setEmoji('⏪')

            const return_help = new MessageActionRow()
                .addComponents(help_return)

            await interaction.update({
                embeds: [(embed)],
                components: [return_help]
            });
        }

    });

    s4d.client.on('ready', async () => {
        dootabase.setFile("./" + 'Donnés' + ".json");

        while (s4d.client && s4d.client.token) {
            await delay(50);
            if (((new Date().getHours())) == 0 && ((new Date().getMinutes())) == 0) {
                s4d.client.guilds.cache.forEach(async (s) => {
                    dootabase.del(String((String((s).id) + '-number_part')));
                    await delay(Number(600) * 1000);

                })
            }
            await delay(Number(20) * 1000);

            console.log('ran')
        }

    });

    s4d.client.on('messageCreate', async (s4dmessage) => {
        dootabase.setFile("./" + 'Donnés' + ".json");
        if (dootabase.get(String((String((s4dmessage.guild).id) + '-ultimate_time'))) <= (Math.floor(new Date().getTime() / 1000))) {
            dootabase.set(String((String((s4dmessage.guild).id) + '-ultimate')), 'Désactivé');
        }

    });

    s4d.client.on('interactionCreate', async (interaction) => {
        if ((interaction.customId) == 'help_return') {
            var embed = new Discord.MessageEmbed()
            embed.setColor(s4d.database.get(String('embed_color')));
            embed.setTitle('<:Partner_Logo:992099488653123634> **| Menu d\'aide - Partner **')
                .setURL();
            embed.setDescription(`<:Partner_Welcome:992734094238679090> **| Bienvenue sur le menu d'aide de** *\`Partner\`* **en cas de problème, contactez le support !**

      Interagissez avec les boutons pour afficher mes informations.`);
            embed.setImage('https://media.discordapp.net/attachments/957206053139935232/994661217413107832/Banniere_bot.png');
            embed.setFooter((String(s4d.database.get(String('tag_author_footer_fr'))) + String((interaction.member.user).tag)), ((interaction.member.user).displayAvatarURL({
                format: "png"
            })));
            embed.setTimestamp();

            const slash_command_help = new MessageButton()
                .setCustomId('slash_command_help')
                .setLabel('Slashs Commands')
                .setStyle(('SECONDARY'))
                .setEmoji('<:Partner_Slash:994641278593671289>')

            const add_bot_help = new MessageButton()
                .setLabel('Ajouter le bot')
                .setStyle(('LINK'))
                .setEmoji('<:Partner_Link:992955651359772753>')
                .setURL('https://discord.com/api/oauth2/authorize?client_id=992907384592805968&permissions=2147970241&scope=bot%20applications.commands')

            const join_server_help = new MessageButton()
                .setLabel('Serveur Support')
                .setStyle(('LINK'))
                .setEmoji('<:Partner_Diamond:992110929707798548>')
                .setURL('https://discord.gg/CJhCzvGs4e')

            const help_button2 = new MessageActionRow()
                .addComponents(slash_command_help)
                .addComponents(add_bot_help)
                .addComponents(join_server_help)

            await interaction.update({
                embeds: [(embed)],
                components: [help_button2]
            });
        }

    });

    s4d.client.on('interactionCreate', async (interaction) => {
        let member = interaction.guild.members.cache.get(interaction.member.user.id)
        if ((interaction.commandName) == 'conditions') {
            dootabase.setFile("./" + 'Donnés' + ".json");
            if (!(dootabase.get(String(((interaction.guild).id))) == 'blacklist_serv')) {
                if (!(dootabase.get(String(((interaction.member.user).id))) == 'raid')) {
                    if (!(dootabase.get(String((String((interaction.guild).id) + '-ultimate'))) == 'Activé')) {
                        var embed = new Discord.MessageEmbed()
                        embed.setFooter((String(s4d.database.get(String('tag_author_footer_fr'))) + String((interaction.member.user).tag)), ((interaction.member.user).displayAvatarURL({
                            format: "png"
                        })));
                        embed.setTimestamp();
                        embed.setColor(s4d.database.get(String('embed_color')));
                        embed.setTitle((['<:Partner_Partner:992104887984861354> **| Conditions partenariat de** *`', (interaction.guild).name, '`*'].join('')))
                            .setURL();
                        embed.setDescription(([
                            [`__**Condition N°1**__ \n> Serveur Discord entre *\``, dootabase.get(String((String((interaction.guild).id) + '-conditation1_min_member'))), '`* et *`', dootabase.get(String((String((interaction.guild).id) + '-conditation1_max_member'))), `\`* membres: \n> *\`De votre côté = `, dootabase.get(String((String((interaction.guild).id) + '-conditation1_notif_client'))), `\`* \n> *\`De notre côté = `, dootabase.get(String((String((interaction.guild).id) + '-conditation1_notif_server'))), `\`*
            `].join(''), [`__**Condition N°2**__ \n> Serveur Discord entre *\``, dootabase.get(String((String((interaction.guild).id) + '-conditation2_min_member'))), '`* et *`', dootabase.get(String((String((interaction.guild).id) + '-conditation2_max_member'))), `\`* membres: \n> *\`De votre côté = `, dootabase.get(String((String((interaction.guild).id) + '-conditation2_notif_client'))), `\`* \n> *\`De notre côté = `, dootabase.get(String((String((interaction.guild).id) + '-conditation2_notif_server'))), `\`*
            `].join(''), [`__**Condition N°3**__ \n> Serveur Discord entre *\``, dootabase.get(String((String((interaction.guild).id) + '-conditation3_min_member'))), '`* et *`', dootabase.get(String((String((interaction.guild).id) + '-conditation3_max_member'))), `\`* membres: \n> *\`De votre côté = `, dootabase.get(String((String((interaction.guild).id) + '-conditation3_notif_client'))), `\`*
            > *\`De notre côté = `, dootabase.get(String((String((interaction.guild).id) + '-conditation3_notif_server'))), `\`*
            `].join(''), [`__**Condition N°4**__\n> Serveur Discord entre *\``, dootabase.get(String((String((interaction.guild).id) + '-conditation4_min_member'))), '`* et *`', dootabase.get(String((String((interaction.guild).id) + '-conditation4_max_member'))), `\`* membres: \n> *\`De votre côté = `, dootabase.get(String((String((interaction.guild).id) + '-conditation4_notif_client'))), `\`* \n> *\`De notre côté = `, dootabase.get(String((String((interaction.guild).id) + '-conditation4_notif_server'))), `\`*
            `].join(''), '', '', '', ''
                        ].join('')));

                        await interaction.reply({
                            embeds: [(embed)],
                            ephemeral: false,
                            components: []
                        });
                    } else {
                        var embed = new Discord.MessageEmbed()
                        embed.setColor(s4d.database.get(String('embed_color')));
                        embed.setTitle((['<:Partner_Partner:992104887984861354> **| Conditions partenariat de** *`', (interaction.guild).name, '`*'].join('')))
                            .setURL();
                        embed.setDescription(([
                            [`__**Condition N°1**__ \n> Serveur Discord entre *\``, dootabase.get(String((String((interaction.guild).id) + '-conditation1_min_member'))), '`* et *`', dootabase.get(String((String((interaction.guild).id) + '-conditation1_max_member'))), `\`* membres: \n> *\`De votre côté = `, dootabase.get(String((String((interaction.guild).id) + '-conditation1_notif_client'))), `\`* \n> *\`De notre côté = `, dootabase.get(String((String((interaction.guild).id) + '-conditation1_notif_server'))), `\`*
            `].join(''), [`__**Condition N°2**__ \n> Serveur Discord entre *\``, dootabase.get(String((String((interaction.guild).id) + '-conditation2_min_member'))), '`* et *`', dootabase.get(String((String((interaction.guild).id) + '-conditation2_max_member'))), `\`* membres: \n> *\`De votre côté = `, dootabase.get(String((String((interaction.guild).id) + '-conditation2_notif_client'))), `\`* \n> *\`De notre côté = `, dootabase.get(String((String((interaction.guild).id) + '-conditation2_notif_server'))), `\`*
            `].join(''), [`__**Condition N°3**__ \n> Serveur Discord entre *\``, dootabase.get(String((String((interaction.guild).id) + '-conditation3_min_member'))), '`* et *`', dootabase.get(String((String((interaction.guild).id) + '-conditation3_max_member'))), `\`* membres: \n> *\`De votre côté = `, dootabase.get(String((String((interaction.guild).id) + '-conditation3_notif_client'))), `\`* \n> *\`De notre côté = `, dootabase.get(String((String((interaction.guild).id) + '-conditation3_notif_server'))), `\`*
            `].join(''), [`__**Condition N°4**__ \n> Serveur Discord entre *\``, dootabase.get(String((String((interaction.guild).id) + '-conditation4_min_member'))), '`* et *`', dootabase.get(String((String((interaction.guild).id) + '-conditation4_max_member'))), `\`* membres: \n> *\`De votre côté = `, dootabase.get(String((String((interaction.guild).id) + '-conditation4_notif_client'))), `\`* \n> *\`De notre côté = `, dootabase.get(String((String((interaction.guild).id) + '-conditation4_notif_server'))), `\`*
            `].join(''), [`__**Condition N°5**__ \n> Serveur Discord entre *\``, dootabase.get(String((String((interaction.guild).id) + '-conditation5_min_member'))), '`* et *`', dootabase.get(String((String((interaction.guild).id) + '-conditation5_max_member'))), `\`* membres: \n> *\`De votre côté = `, dootabase.get(String((String((interaction.guild).id) + '-conditation5_notif_client'))), `\`* \n> *\`De notre côté = `, dootabase.get(String((String((interaction.guild).id) + '-conditation5_notif_server'))), `\`*
            `].join(''), [`__**Condition N°6**__ \n> Serveur Discord entre *\``, dootabase.get(String((String((interaction.guild).id) + '-conditation6_min_member'))), '`* et *`', dootabase.get(String((String((interaction.guild).id) + '-conditation6_max_member'))), `\`* membres: \n> *\`De votre côté = `, dootabase.get(String((String((interaction.guild).id) + '-conditation6_notif_client'))), `\`* \n> *\`De notre côté = `, dootabase.get(String((String((interaction.guild).id) + '-conditation6_notif_server'))), `\`*
            `].join(''), [`__**Condition N°7**__ \n> Serveur Discord entre *\``, dootabase.get(String((String((interaction.guild).id) + '-conditation7_min_member'))), '`* et *`', dootabase.get(String((String((interaction.guild).id) + '-conditation7_max_member'))), `\`* membres: \n> *\`De votre côté = `, dootabase.get(String((String((interaction.guild).id) + '-conditation7_notif_client'))), `\`* \n> *\`De notre côté = `, dootabase.get(String((String((interaction.guild).id) + '-conditation7_notif_server'))), `\`*
            `].join(''), [`__**Condition N°8**__ \n> Serveur Discord entre *\``, dootabase.get(String((String((interaction.guild).id) + '-conditation8_min_member'))), '`* et *`', dootabase.get(String((String((interaction.guild).id) + '-conditation8_max_member'))), `\`* membres: \n> *\`De votre côté = `, dootabase.get(String((String((interaction.guild).id) + '-conditation8_notif_client'))), `\`* \n> *\`De notre côté = `, dootabase.get(String((String((interaction.guild).id) + '-conditation8_notif_server'))), `\`*
            `].join(''), [`__**Condition N°9**__ \n> Serveur Discord entre *\``, dootabase.get(String((String((interaction.guild).id) + '-conditation9_min_member'))), '`* et *`', dootabase.get(String((String((interaction.guild).id) + '-conditation9_max_member'))), `\`* membres: \n> *\`De votre côté = `, dootabase.get(String((String((interaction.guild).id) + '-conditation9_notif_client'))), `\`* \n> *\`De notre côté = `, dootabase.get(String((String((interaction.guild).id) + '-conditation9_notif_server'))), `\`*
            `].join(''), [`__**Condition N°10**__ \n> Serveur Discord entre *\``, dootabase.get(String((String((interaction.guild).id) + '-conditation10_min_member'))), '`* et *`', dootabase.get(String((String((interaction.guild).id) + '-conditation10_max_member'))), `\`* membres: \n> *\`De votre côté = `, dootabase.get(String((String((interaction.guild).id) + '-conditation10_notif_client'))), `\`* \n> *\`De notre côté = `, dootabase.get(String((String((interaction.guild).id) + '-conditation10_notif_server'))), `\`*
            `].join(''), ''
                        ].join('')));
                        embed.setFooter((String(s4d.database.get(String('tag_author_footer_fr'))) + String((interaction.member.user).tag)), ((interaction.member.user).displayAvatarURL({
                            format: "png"
                        })));
                        embed.setTimestamp();

                        await interaction.reply({
                            embeds: [(embed)],
                            ephemeral: false,
                            components: []
                        });
                    }
                } else {
                    var embed = new Discord.MessageEmbed()
                    embed.setColor(s4d.database.get(String('embed_color')));
                    embed.setDescription((String(s4d.database.get(String('blacklist_emoji'))) + String(s4d.database.get(String('user_blacklist_message_fr')))));

                    await interaction.reply({
                        embeds: [(embed)],
                        ephemeral: true,
                        components: []
                    });
                }
            } else {
                var embed = new Discord.MessageEmbed()
                embed.setColor(s4d.database.get(String('embed_color')));
                embed.setDescription((String(s4d.database.get(String('blacklist_emoji'))) + String(s4d.database.get(String('server_blacklist_message_fr')))));

                await interaction.reply({
                    embeds: [(embed)],
                    ephemeral: true,
                    components: []
                });
            }
        }

    });

    s4d.client.on('ready', async () => {
        s4d.client.user.setActivity('Partner Project | /', {
            type: "STREAMING",
            url: 'https://www.twitch.tv/partnerproject'
        });

    });

    s4d.client.on('interactionCreate', async (interaction) => {
        let member = interaction.guild.members.cache.get(interaction.member.user.id)
        if ((interaction.commandName) == 'bot_infos') {

            os.cpuUsage(async function (v) {
                var obj = v * 100
                var embed = new Discord.MessageEmbed()
                embed.setDescription(([`<:Partner_Infos:992123787879399554> __**| Mes informations:**__
        > <:Partner_Channel:992125913535889460> **| ID du bot:** *\`992907384592805968\`*
        > <:Partner_Logo:992099488653123634> **| Nom du bot:** *\`Partner#9554\`*
        > <:Partner_Dev:992908906839937054> **| Mon développeur:** *<@`, (((s4d.client.guilds.cache.get('991989412575576145')).members.cache.get('397406757422628869') || await (s4d.client.guilds.cache.get('991989412575576145')).members.fetch('397406757422628869')).user).id, '> / `', (((s4d.client.guilds.cache.get('991989412575576145')).members.cache.get('397406757422628869') || await (s4d.client.guilds.cache.get('991989412575576145')).members.fetch('397406757422628869')).user).tag, `\` / \`397406757422628869\`*
        > <:Partner_Help:993250377518546964> **| Nombre de serveur(s):** *\``, s4d.client.guilds.cache.size, ` serveur(s)\`*
        > <:Partner_Moderator:992110132538376272> **| Nombre de membre(s):** *\``, s4d.client.users.cache.size, ` membre(s)\`*
        > <:Partner_Bug:993249429140279417> **| Ping du bot:** *\``, s4d.client.ws.ping, `ms\`*

        <:Partner_Settings:992734090312822794> __**| Informations avancées:**__
        > <a:Loading:993133475559378964> **| Date du dernier redémarrage:** *\``, String(s4d.client.readyAt), `\`*
        > <:Partner_Settings:992734090312822794> **| Système d'exploitation:** *\``, os.platform(), `\`*
        > <:Partner_CPU:993653128262062100> **| CPU Utilisé:** *\``, obj, ` / 100%\`*
        > <:Partner_Save:993117407222702171> **| RAM Totale:** *\``, os.totalmem(), `MB\`*
        > <:Partner_Money:992734088890941451> **| RAM Libre:** *\``, os.freemem(), 'MB`*', ''].join('')));
                embed.setTitle((String(s4d.database.get(String('settings_emoji'))) + String(s4d.database.get(String('info_bot_title_fr')))))
                    .setURL();
                embed.setColor(s4d.database.get(String('embed_color')));
                embed.setImage('https://media.discordapp.net/attachments/895337458013700136/994299240295706774/Banniere_Generale.png');
                embed.setFooter((String(s4d.database.get(String('tag_author_footer_fr'))) + String((interaction.member.user).tag)), ((interaction.member.user).displayAvatarURL({
                    format: "png"
                })));
                embed.setTimestamp();

                const link_invites_bot = new MessageButton()
                    .setLabel('Ajouter le bot')
                    .setStyle(('LINK'))
                    .setEmoji('<:Partner_Link:992955651359772753>')
                    .setURL('https://discord.com/api/oauth2/authorize?client_id=992907384592805968&permissions=2147970241&scope=bot%20applications.commands')

                const link_invites_server = new MessageButton()
                    .setLabel('Serveur Support')
                    .setStyle(('LINK'))
                    .setEmoji('<:Partner_Diamond:992110929707798548>')
                    .setURL('https://discord.gg/CJhCzvGs4e')

                const link_bot_info = new MessageActionRow()
                    .addComponents(link_invites_bot)
                    .addComponents(link_invites_server)

                await interaction.reply({
                    embeds: [(embed)],
                    ephemeral: false,
                    components: [link_bot_info]
                });

            });
        }

    });

    s4d.client.on('interactionCreate', async (interaction) => {
        let member = interaction.guild.members.cache.get(interaction.member.user.id)
        if ((interaction.commandName) == 'partner_remove') {
            dootabase.setFile("./" + 'Donnés' + ".json");
            if ((interaction.member).permissions.has(Permissions.FLAGS.ADMINISTRATOR) || s4d.database.get(String('dev')) == ((interaction.member.user).id)) {
                if (dootabase.has(String(([(interaction.guild).id, '-', (interaction.options.getUser('membre')).id, '-partner_list'].join(''))))) {
                    dootabase.del(String(([(interaction.guild).id, '-', (interaction.options.getUser('membre')).id, '-partner_list'].join(''))));
                    var embed = new Discord.MessageEmbed()
                    embed.setColor(s4d.database.get(String('good_color')));
                    embed.setDescription((String(s4d.database.get(String('good_emoji'))) + String(s4d.database.get(String('remove_partner_good_message_fr')))));

                    await interaction.reply({
                        embeds: [(embed)],
                        ephemeral: true,
                        components: []
                    });
                    if (dootabase.has(String((String((interaction.guild).id) + '-part_logs_server'))) && !(dootabase.get(String((String((interaction.guild).id) + '-part_logs_server'))) == 'Aucun salon de logs n\'a été configuré !')) {
                        s4d.client.channels.cache.get(dootabase.get(String((String((interaction.guild).id) + '-part_logs_server')))).send({
                            embeds: [new MessageEmbed()
                                .setTitle(String((String(s4d.database.get(String('save_emoji'))) + String(s4d.database.get(String('logs_new_action_title_fr'))))))
                                .setColor(String(s4d.database.get(String('wrong_color'))))
                                .setDescription(String(([`**Un nouvel utilisateur a été retiré de la liste des personnes pouvant faire un partenariat !**

          **<:Partner_Settings:992734090312822794> | Commande:** *\`\`\` /partner_remove\`\`\`*
          **<:Partner_Moderator:992110132538376272> | Auteur:** *\`\`\``, (interaction.member.user).tag, ' / ', (interaction.member.user).id, `\`\`\`*
          **<:Partner_Welcome:992734094238679090> | Utilisateur visé:** *\`\`\``, (interaction.options.getUser('membre')).tag, ' / ', (interaction.options.getUser('membre')).id, '```*'].join(''))))
                            ]
                        });
                    }
                } else {
                    var embed = new Discord.MessageEmbed()
                    embed.setColor(s4d.database.get(String('wrong_color')));
                    embed.setDescription((String(s4d.database.get(String('wrong_emoji'))) + String(s4d.database.get(String('user_noexist_partner_remove_message_fr')))));

                    await interaction.reply({
                        embeds: [(embed)],
                        ephemeral: true,
                        components: []
                    });
                }
            } else {
                var embed = new Discord.MessageEmbed()
                embed.setColor(s4d.database.get(String('wrong_color')));
                embed.setDescription((String(s4d.database.get(String('wrong_emoji'))) + String(s4d.database.get(String('perm_admin_error_message_fr')))));

                await interaction.reply({
                    embeds: [(embed)],
                    ephemeral: true,
                    components: []
                });
            }
        }
        if ((interaction.commandName) == 'partner_add') {
            dootabase.setFile("./" + 'Donnés' + ".json");
            if ((interaction.member).permissions.has(Permissions.FLAGS.ADMINISTRATOR) || s4d.database.get(String('dev')) == ((interaction.member.user).id)) {
                if (!(dootabase.get(String(((interaction.options.getUser('membre')).id))) == 'raid')) {
                    if (!(dootabase.get(String(([(interaction.guild).id, '-', (interaction.options.getUser('membre')).id, '-partner_list'].join('')))) == 'partner')) {
                        dootabase.set(String(([(interaction.guild).id, '-', (interaction.options.getUser('membre')).id, '-partner_list'].join(''))), 'partner');
                        var embed = new Discord.MessageEmbed()
                        embed.setColor(s4d.database.get(String('good_color')));
                        embed.setDescription((String(s4d.database.get(String('good_emoji'))) + String(s4d.database.get(String('add_partner_good_message_fr')))));

                        await interaction.reply({
                            embeds: [(embed)],
                            ephemeral: true,
                            components: []
                        });
                        if (dootabase.has(String((String((interaction.guild).id) + '-part_logs_server'))) && !(dootabase.get(String((String((interaction.guild).id) + '-part_logs_server'))) == 'Aucun salon de logs n\'a été configuré !')) {
                            s4d.client.channels.cache.get(dootabase.get(String((String((interaction.guild).id) + '-part_logs_server')))).send({
                                embeds: [new MessageEmbed()
                                    .setTitle(String((String(s4d.database.get(String('save_emoji'))) + String(s4d.database.get(String('logs_new_action_title_fr'))))))
                                    .setColor(String(s4d.database.get(String('good_color'))))
                                    .setDescription(String(([`**Un nouvel utilisateur a été ajouté à la liste des personnes pouvant faire un partenariat !**

            **<:Partner_Settings:992734090312822794> | Commande:** *\`\`\` /partner_add\`\`\`*
            **<:Partner_Moderator:992110132538376272> | Auteur:** *\`\`\``, (interaction.member.user).tag, ' / ', (interaction.member.user).id, `\`\`\`*
            **<:Partner_Welcome:992734094238679090> | Utilisateur visé:** *\`\`\``, (interaction.options.getUser('membre')).tag, ' / ', (interaction.options.getUser('membre')).id, '```*'].join(''))))
                                ]
                            });
                        }
                    } else {
                        var embed = new Discord.MessageEmbed()
                        embed.setColor(s4d.database.get(String('wrong_color')));
                        embed.setDescription((String(s4d.database.get(String('wrong_emoji'))) + String(s4d.database.get(String('user_exist_partner_add_message_fr')))));

                        await interaction.reply({
                            embeds: [(embed)],
                            ephemeral: true,
                            components: []
                        });
                    }
                } else {
                    var embed = new Discord.MessageEmbed()
                    embed.setColor(s4d.database.get(String('embed_color')));
                    embed.setDescription((String(s4d.database.get(String('blacklist_emoji'))) + String(s4d.database.get(String('raid_user_bloque_message_fr')))));

                    await interaction.reply({
                        embeds: [(embed)],
                        ephemeral: true,
                        components: []
                    });
                }
            } else {
                var embed = new Discord.MessageEmbed()
                embed.setColor(s4d.database.get(String('wrong_color')));
                embed.setDescription((String(s4d.database.get(String('wrong_emoji'))) + String(s4d.database.get(String('perm_admin_error_message_fr')))));

                await interaction.reply({
                    embeds: [(embed)],
                    ephemeral: true,
                    components: []
                });
            }
        }

    });

    s4d.client.on('interactionCreate', async (interaction) => {
        let member = interaction.guild.members.cache.get(interaction.member.user.id)
        if ((interaction.commandName) == 'config') {
            if (((interaction.member).permissions.has(Permissions.FLAGS.ADMINISTRATOR)) || s4d.database.get(String('dev')) == ((interaction.member.user).id)) {
                if ((((interaction.guild).members.cache.get('992907384592805968') || await (interaction.guild).members.fetch('992907384592805968'))).permissions.has(Permissions.FLAGS.CREATE_INSTANT_INVITE) && (((interaction.guild).members.cache.get('992907384592805968') || await (interaction.guild).members.fetch('992907384592805968'))).permissions.has(Permissions.FLAGS.VIEW_AUDIT_LOG) && (((interaction.guild).members.cache.get('992907384592805968') || await (interaction.guild).members.fetch('992907384592805968'))).permissions.has(Permissions.FLAGS.READ_MESSAGE_HISTORY) && (((interaction.guild).members.cache.get('992907384592805968') || await (interaction.guild).members.fetch('992907384592805968'))).permissions.has(Permissions.FLAGS.VIEW_CHANNEL) && (((interaction.guild).members.cache.get('992907384592805968') || await (interaction.guild).members.fetch('992907384592805968'))).permissions.has(Permissions.FLAGS.MANAGE_MESSAGES) && (((interaction.guild).members.cache.get('992907384592805968') || await (interaction.guild).members.fetch('992907384592805968'))).permissions.has(Permissions.FLAGS.USE_EXTERNAL_EMOJIS) && (((interaction.guild).members.cache.get('992907384592805968') || await (interaction.guild).members.fetch('992907384592805968'))).permissions.has(Permissions.FLAGS.ADD_REACTIONS) && (((interaction.guild).members.cache.get('992907384592805968') || await (interaction.guild).members.fetch('992907384592805968'))).permissions.has(Permissions.FLAGS.MENTION_EVERYONE)) {
                    dootabase.setFile("./" + 'Donnés' + ".json");
                    if (!dootabase.has(String((String((interaction.guild).id) + '-owner-id_server')))) {
                        dootabase.set(String((String((interaction.guild).id) + '-owner-id_server')), ((interaction.guild).ownerId));
                    }
                    if (!dootabase.has(String((String((interaction.guild).id) + '-mention_everyone')))) {
                        dootabase.set(String((String((interaction.guild).id) + '-mention_everyone')), 'Activées');
                    }
                    if (!dootabase.has(String((String((interaction.guild).id) + '-name_server')))) {
                        dootabase.set(String((String((interaction.guild).id) + '-name_server')), ((interaction.guild).name));
                    }
                    if (!dootabase.has(String((String((interaction.guild).id) + '-desc_server')))) {
                        if (!(((interaction.guild).description) == null)) {
                            dootabase.set(String((String((interaction.guild).id) + '-desc_server')), ((interaction.guild).description));
                        } else {
                            dootabase.set(String((String((interaction.guild).id) + '-desc_server')), 'Le serveur ne possède aucune description !');
                        }
                    }
                    if (!dootabase.has(String((String((interaction.guild).id) + '-part_chanel')))) {
                        dootabase.set(String((String((interaction.guild).id) + '-part_chanel')), 'Aucun salon n\'a été configuré !');
                    }
                    if (!dootabase.has(String((String((interaction.guild).id) + '-part_pub_server')))) {
                        dootabase.set(String((String((interaction.guild).id) + '-part_pub_server')), 'Aucune publicité n\'a été configurée !');
                    }
                    if (!dootabase.has(String((String((interaction.guild).id) + '-part_logs_server')))) {
                        dootabase.set(String((String((interaction.guild).id) + '-part_logs_server')), 'Aucun salon de logs n\'a été configuré !');
                    }
                    if (!dootabase.has(String((String((interaction.guild).id) + '-part_notif_rank')))) {
                        dootabase.set(String((String((interaction.guild).id) + '-part_notif_rank')), 'Aucun rôle de notification n\'a été configuré !');
                    }
                    var embed = new Discord.MessageEmbed()
                    embed.setColor(s4d.database.get(String('embed_color')));
                    embed.setTitle((String(s4d.database.get(String('settings_emoji'))) + String(s4d.database.get(String('config_menu-title_message_fr')))))
                        .setURL();
                    embed.setDescription((['> <:Partner_Owner:993091586583957534> **| ID du propriétaire:** *``` ID | ', dootabase.get(String((String((interaction.guild).id) + '-owner-id_server'))), `\`\`\`*
          > <:Partner_Infos:992123787879399554> **Description du Serveur:** *\`\`\` Description | `, dootabase.get(String((String((interaction.guild).id) + '-desc_server'))), `\`\`\`*
          > <:Partner_Channel:992125913535889460> **Salon d'arrivés des Partenariats:** *\`\`\`ID | `, dootabase.get(String((String((interaction.guild).id) + '-part_chanel'))), `\`\`\`*
          > <:Partner_Save:993117407222702171> **Salon de Logs:** *\`\`\`ID | `, dootabase.get(String((String((interaction.guild).id) + '-part_logs_server'))), `\`\`\`*
          > <:Partner_Partner:992104887984861354> **Rôle de Notification Partenariat:** *\`\`\`ID | `, dootabase.get(String((String((interaction.guild).id) + '-part_notif_rank'))), `\`\`\`*
          > <:Partner_Notification:992727141340954624> **Mentions Everyone & Here:** *\`\`\` `, dootabase.get(String((String((interaction.guild).id) + '-mention_everyone'))), '', `\`\`\`*
          > <:Partner_Link:992955651359772753> **Publicité du serveur:** Publicité | `, dootabase.get(String((String((interaction.guild).id) + '-part_pub_server'))), ''].join('')));

                    const part_chanel = new MessageButton()
                        .setCustomId('part_chanel')
                        .setLabel('Salon Partenariats')
                        .setStyle(('SECONDARY'))
                        .setEmoji('<:Partner_Channel:992125913535889460>')

                    const part_pub_server = new MessageButton()
                        .setCustomId('part_pub_server')
                        .setLabel('Publicité Serveur')
                        .setStyle(('SECONDARY'))
                        .setEmoji('<:Partner_Link:992955651359772753>')

                    const part_logs_chanel = new MessageButton()
                        .setCustomId('part_logs_chanel')
                        .setLabel('Salon Logs')
                        .setStyle(('SECONDARY'))
                        .setEmoji('<:Partner_Save:993117407222702171>')

                    const part_notif_rank = new MessageButton()
                        .setCustomId('part_notif_rank')
                        .setLabel('Rôle Notification Partenariat')
                        .setStyle(('SECONDARY'))
                        .setEmoji('<:Partner_Partner:992104887984861354>')

                    const part_notif_everyone = new MessageButton()
                        .setCustomId('part_notif_everyone')
                        .setLabel('Mention Everyone & Here')
                        .setStyle(('SECONDARY'))
                        .setEmoji('<:Partner_Notification:992727141340954624>')

                    const config_reset = new MessageButton()
                        .setCustomId('config_reset')
                        .setLabel('Réinitialiser')
                        .setStyle(('DANGER'))
                        .setEmoji('<:Partner_Delete:993149012150599770>')

                    const part_config_menu = new MessageActionRow()
                        .addComponents(part_chanel)
                        .addComponents(part_logs_chanel)
                        .addComponents(part_notif_rank)

                    const part_config_ligne_menu = new MessageActionRow()
                        .addComponents(part_notif_everyone)
                        .addComponents(part_pub_server)
                        .addComponents(config_reset)

                    await interaction.reply({
                        embeds: [(embed)],
                        ephemeral: false,
                        components: [part_config_menu, part_config_ligne_menu]
                    });
                } else {
                    var embed = new Discord.MessageEmbed()
                    embed.setColor(s4d.database.get(String('wrong_color')));
                    embed.setDescription((String(s4d.database.get(String('wrong_emoji'))) + String(s4d.database.get(String('wrong_bot_pers_message_fr')))));

                    await interaction.reply({
                        embeds: [(embed)],
                        ephemeral: true,
                        components: []
                    });
                }
            } else {
                var embed = new Discord.MessageEmbed()
                embed.setColor(s4d.database.get(String('wrong_color')));
                embed.setDescription((String(s4d.database.get(String('wrong_emoji'))) + String(s4d.database.get(String('wrong_owner_message_fr')))));

                await interaction.reply({
                    embeds: [(embed)],
                    ephemeral: true,
                    components: []
                });
            }
        }

    });

    s4d.client.on('interactionCreate', async (interaction) => {
        let member = interaction.guild.members.cache.get(interaction.member.user.id)
        if ((interaction.commandName) == 'role_infos') {
            list = [];
            (s4d.client.guilds.cache.get(((interaction.guild).id))).members.cache.forEach(async m => {
                if ((m)._roles.includes(((s4d.client.guilds.cache.get(((interaction.guild).id))).roles.cache.get(((interaction.options.getRole('rôle')).id))).id)) {
                    list.push((m));
                }

            })
            var embed = new Discord.MessageEmbed()
            embed.setColor(s4d.database.get(String('embed_color')));
            embed.setDescription((['> <:Partner_Help:993250377518546964> **| Nom du rôle:** *`', (interaction.options.getRole('rôle')).name, `\`*
      > <:Partner_Warn:992945311678988399> **| ID du rôle:** *\``, (interaction.options.getRole('rôle')).id, `\`*
      > <:Partner_Settings:992734090312822794> **| Nom du serveur:** *\``, (interaction.options.getRole('rôle')).guild, `\`*
      > <:Partner_Blacklist:993457706465775646> **| Nombre de membre(s) possédant(s) le rôle:** *\``, list.length, '/', (interaction.guild).memberCount, ' membre(s)', `\`*
      > <:Partner_Pen:993120823445553282> **| Couleur du rôle:** *\``, (interaction.options.getRole('rôle')).color, '`*'].join('')));
            embed.setTitle((String(s4d.database.get(String('diamond_emoji'))) + String(s4d.database.get(String('role_info_message_fr')))))
                .setURL();
            embed.setFooter((String(s4d.database.get(String('tag_author_footer_fr'))) + String((interaction.member.user).tag)), ((interaction.member.user).displayAvatarURL({
                format: "png"
            })));
            embed.setTimestamp();

            await interaction.reply({
                embeds: [(embed)],
                ephemeral: false,
                components: []
            });
        }

    });

    s4d.client.on('interactionCreate', async (interaction) => {
        let member = interaction.guild.members.cache.get(interaction.member.user.id)
        if ((interaction.commandName) == 'verify') {
            if (((interaction.member).permissions.has(Permissions.FLAGS.ADMINISTRATOR)) || s4d.database.get(String('dev')) == ((interaction.member.user).id)) {
                if ((((interaction.guild).members.cache.get('992907384592805968') || await (interaction.guild).members.fetch('992907384592805968'))).permissions.has(Permissions.FLAGS.CREATE_INSTANT_INVITE) && (((interaction.guild).members.cache.get('992907384592805968') || await (interaction.guild).members.fetch('992907384592805968'))).permissions.has(Permissions.FLAGS.VIEW_AUDIT_LOG) && (((interaction.guild).members.cache.get('992907384592805968') || await (interaction.guild).members.fetch('992907384592805968'))).permissions.has(Permissions.FLAGS.READ_MESSAGE_HISTORY) && (((interaction.guild).members.cache.get('992907384592805968') || await (interaction.guild).members.fetch('992907384592805968'))).permissions.has(Permissions.FLAGS.VIEW_CHANNEL) && (((interaction.guild).members.cache.get('992907384592805968') || await (interaction.guild).members.fetch('992907384592805968'))).permissions.has(Permissions.FLAGS.MANAGE_MESSAGES) && (((interaction.guild).members.cache.get('992907384592805968') || await (interaction.guild).members.fetch('992907384592805968'))).permissions.has(Permissions.FLAGS.USE_EXTERNAL_EMOJIS) && (((interaction.guild).members.cache.get('992907384592805968') || await (interaction.guild).members.fetch('992907384592805968'))).permissions.has(Permissions.FLAGS.ADD_REACTIONS) && (((interaction.guild).members.cache.get('992907384592805968') || await (interaction.guild).members.fetch('992907384592805968'))).permissions.has(Permissions.FLAGS.MENTION_EVERYONE)) {
                    if ((!(dootabase.has(String((String((interaction.guild).id) + '-cooldown_verify_good'))))) || (((dootabase.get(String((String((interaction.guild).id) + '-cooldown_verify_good')))) <= (Math.floor(new Date().getTime() / 1000))))) {
                        dootabase.setFile("./" + 'Donnés' + ".json");
                        if (dootabase.has(String((String((interaction.guild).id) + '-owner-id_server')))) {
                            dootabase.set(String((String((interaction.guild).id) + '-owner-id_server_statut')), s4d.database.get(String('good_emoji')));
                        } else {
                            dootabase.set(String((String((interaction.guild).id) + '-owner-id_server_statut')), s4d.database.get(String('wrong_emoji')));
                        }
                        if (dootabase.has(String((String((interaction.guild).id) + '-name_server')))) {
                            dootabase.set(String((String((interaction.guild).id) + '-name_server_statut')), s4d.database.get(String('good_emoji')));
                        } else {
                            dootabase.set(String((String((interaction.guild).id) + '-name_server_statut')), s4d.database.get(String('wrong_emoji')));
                        }
                        if (dootabase.has(String((String((interaction.guild).id) + '-desc_server'))) && !(dootabase.get(String((String((interaction.guild).id) + '-desc_server'))) == 'Le serveur ne possède aucune description !')) {
                            dootabase.set(String((String((interaction.guild).id) + '-desc_server_statut')), s4d.database.get(String('good_emoji')));
                        } else if (dootabase.get(String((String((interaction.guild).id) + '-desc_server'))) == 'Le serveur ne possède aucune description !') {
                            dootabase.set(String((String((interaction.guild).id) + '-desc_server_statut')), s4d.database.get(String('good_emoji')));
                        } else {
                            dootabase.set(String((String((interaction.guild).id) + '-desc_server_statut')), s4d.database.get(String('wrong_emoji')));
                        }
                        if (dootabase.has(String((String((interaction.guild).id) + '-part_chanel'))) && !(dootabase.get(String((String((interaction.guild).id) + '-part_chanel'))) == 'Aucun salon n\'a été configuré !')) {
                            dootabase.set(String((String((interaction.guild).id) + '-part_chanel_statut')), s4d.database.get(String('good_emoji')));
                        } else {
                            dootabase.set(String((String((interaction.guild).id) + '-part_chanel_statut')), s4d.database.get(String('wrong_emoji')));
                        }
                        if (dootabase.has(String((String((interaction.guild).id) + '-part_pub_server'))) && !(dootabase.get(String((String((interaction.guild).id) + '-part_pub_server'))) == 'Aucune publicité n\'a été configurée !')) {
                            dootabase.set(String((String((interaction.guild).id) + '-part_pub_server_statut')), s4d.database.get(String('good_emoji')));
                        } else {
                            dootabase.set(String((String((interaction.guild).id) + '-part_pub_server_statut')), s4d.database.get(String('wrong_emoji')));
                        }
                        if (dootabase.has(String((String((interaction.guild).id) + '-part_logs_server'))) && !(dootabase.get(String((String((interaction.guild).id) + '-part_logs_server'))) == 'Aucun salon de logs n\'a été configuré !')) {
                            dootabase.set(String((String((interaction.guild).id) + '-part_logs_server_statut')), s4d.database.get(String('good_emoji')));
                        } else {
                            dootabase.set(String((String((interaction.guild).id) + '-part_logs_server_statut')), s4d.database.get(String('wrong_emoji')));
                        }
                        if (dootabase.has(String((String((interaction.guild).id) + '-part_notif_rank'))) && !(dootabase.get(String((String((interaction.guild).id) + '-part_notif_rank'))) == 'Aucun rôle de notification n\'a été configuré !')) {
                            dootabase.set(String((String((interaction.guild).id) + '-part_notif_rank_statut')), s4d.database.get(String('good_emoji')));
                        } else {
                            dootabase.set(String((String((interaction.guild).id) + '-part_notif_rank_statut')), s4d.database.get(String('wrong_emoji')));
                        }
                        var embed = new Discord.MessageEmbed()
                        embed.setColor(s4d.database.get(String('embed_color')));
                        embed.setTitle((String(s4d.database.get(String('verify_emoji'))) + String(s4d.database.get(String('verify_menu-title_message_fr')))))
                            .setURL();
                        embed.setDescription((['', '', '> ', dootabase.get(String((String((interaction.guild).id) + '-owner-id_server_statut'))), ` **| ID du propriétaire**
          > `, dootabase.get(String((String((interaction.guild).id) + '-desc_server_statut'))), ` **| Description du serveur**
          > `, dootabase.get(String((String((interaction.guild).id) + '-part_chanel_statut'))), ` **| Salon de Partenariat**
          > `, dootabase.get(String((String((interaction.guild).id) + '-part_logs_server_statut'))), ` **| Salon de Logs**
          > `, dootabase.get(String((String((interaction.guild).id) + '-part_notif_rank_statut'))), ` **| Rôle Notification Partenariat**
          > `, dootabase.get(String((String((interaction.guild).id) + '-part_pub_server_statut'))), ' **| Publicité du serveur**', '', ''].join('')));

                        const verify_good = new MessageButton()
                            .setCustomId('verify_good')
                            .setLabel('Lancer la Vérification')
                            .setStyle(('SUCCESS'))
                            .setEmoji('<:Partner_Tick:992734092972003349>')

                        const part_verify_menu = new MessageActionRow()
                            .addComponents(verify_good)

                        await interaction.reply({
                            embeds: [(embed)],
                            ephemeral: false,
                            components: [part_verify_menu]
                        });
                    } else {
                        var embed = new Discord.MessageEmbed()
                        embed.setColor(s4d.database.get(String('wrong_color')));
                        embed.setDescription((String(s4d.database.get(String('wrong_emoji'))) + String(s4d.database.get(String('time_verif_message_cooldown_fr')))));

                        await interaction.reply({
                            embeds: [(embed)],
                            ephemeral: true,
                            components: []
                        });
                    }
                } else {
                    var embed = new Discord.MessageEmbed()
                    embed.setColor(s4d.database.get(String('wrong_color')));
                    embed.setDescription((String(s4d.database.get(String('wrong_emoji'))) + String(s4d.database.get(String('wrong_bot_pers_message_fr')))));

                    await interaction.reply({
                        embeds: [(embed)],
                        ephemeral: true,
                        components: []
                    });
                }
            } else {
                var embed = new Discord.MessageEmbed()
                embed.setColor(s4d.database.get(String('wrong_color')));
                embed.setDescription((String(s4d.database.get(String('wrong_emoji'))) + String(s4d.database.get(String('wrong_owner_message_fr')))));

                await interaction.reply({
                    embeds: [(embed)],
                    ephemeral: true,
                    components: []
                });
            }
        }

    });

    s4d.client.on('interactionCreate', async (interaction) => {
        if ((interaction.customId) == 'verify_good') {
            if (((interaction.member).permissions.has(Permissions.FLAGS.ADMINISTRATOR)) || s4d.database.get(String('dev')) == ((interaction.member.user).id)) {
                if ((((interaction.guild).members.cache.get('992907384592805968') || await (interaction.guild).members.fetch('992907384592805968'))).permissions.has(Permissions.FLAGS.CREATE_INSTANT_INVITE) && (((interaction.guild).members.cache.get('992907384592805968') || await (interaction.guild).members.fetch('992907384592805968'))).permissions.has(Permissions.FLAGS.VIEW_AUDIT_LOG) && (((interaction.guild).members.cache.get('992907384592805968') || await (interaction.guild).members.fetch('992907384592805968'))).permissions.has(Permissions.FLAGS.READ_MESSAGE_HISTORY) && (((interaction.guild).members.cache.get('992907384592805968') || await (interaction.guild).members.fetch('992907384592805968'))).permissions.has(Permissions.FLAGS.VIEW_CHANNEL) && (((interaction.guild).members.cache.get('992907384592805968') || await (interaction.guild).members.fetch('992907384592805968'))).permissions.has(Permissions.FLAGS.MANAGE_MESSAGES) && (((interaction.guild).members.cache.get('992907384592805968') || await (interaction.guild).members.fetch('992907384592805968'))).permissions.has(Permissions.FLAGS.USE_EXTERNAL_EMOJIS) && (((interaction.guild).members.cache.get('992907384592805968') || await (interaction.guild).members.fetch('992907384592805968'))).permissions.has(Permissions.FLAGS.ADD_REACTIONS) && (((interaction.guild).members.cache.get('992907384592805968') || await (interaction.guild).members.fetch('992907384592805968'))).permissions.has(Permissions.FLAGS.MENTION_EVERYONE)) {
                    if (!(dootabase.get(String(((interaction.guild).ownerId))) == 'raid')) {
                        if (dootabase.get(String((String((interaction.guild).id) + '-part_pub_server_statut'))) == s4d.database.get(String('good_emoji')) && dootabase.get(String((String((interaction.guild).id) + '-part_chanel_statut'))) == s4d.database.get(String('good_emoji')) && dootabase.get(String((String((interaction.guild).id) + '-part_logs_server_statut'))) == s4d.database.get(String('good_emoji')) && dootabase.get(String((String((interaction.guild).id) + '-owner-id_server_statut'))) == s4d.database.get(String('good_emoji')) && dootabase.get(String((String((interaction.guild).id) + '-desc_server_statut'))) == s4d.database.get(String('good_emoji'))) {
                            dootabase.set(String((String((interaction.guild).id) + '-cooldown_verify_good')), ((Math.floor(new Date().getTime() / 1000)) + 900));
                            const serveur_invite = new MessageButton()
                                .setLabel('Serveur Support')
                                .setStyle(('LINK'))
                                .setEmoji('<:Partner_Link:992955651359772753>')
                                .setURL('https://discord.gg/CJhCzvGs4e')

                            const server_invite_button = new MessageActionRow()
                                .addComponents(serveur_invite)
                            await interaction.message.delete()
                            dootabase.add(String('number_verif'), parseInt(1));
                            var embed = new MessageEmbed()
                                .setColor(String(s4d.database.get(String('embed_color'))))
                                .setDescription(String(([s4d.database.get(String('diamond_emoji')), s4d.database.get(String('message_attente_verif_fr')), dootabase.get(String('number_verif')), '**'].join(''))))
                            await interaction.channel.send({
                                embeds: [(embed)]
                            });
                            (interaction.channel).createInvite({
                                maxAge: 0,
                                maxUses: 0
                            }).then(async invite => {
                                dootabase.set(String((String((interaction.guild).id) + '-invites_server')), (invite.url));

                            });
                            await delay(Number(2) * 1000);
                            var embed = new Discord.MessageEmbed()
                            embed.setColor(s4d.database.get(String('support_embed_color')));
                            embed.setDescription((['**Demande Numéro: ', dootabase.get(String('number_verif')), `**
                  > <:Partner_Owner:993091586583957534> **| ID du propriétaire:** *\`\`\``, dootabase.get(String((String((interaction.guild).id) + '-owner-id_server'))), `\`\`\`*
                  > <:Partner_Infos:992123787879399554> **Description du Serveur:** *\`\`\``, dootabase.get(String((String((interaction.guild).id) + '-desc_server'))), `\`\`\`*
                  > 🌉 **Numéro d'icone:** *\`\`\``, ' ID | ', ((interaction.guild).icon), `\`\`\`*
                  > 🌌 **Numéro de bannière:** *\`\`\``, ' ID | ', ((interaction.guild).banner), `\`\`\`*
                  > <:Partner_Channel:992125913535889460> **Salon d'arrivés des Partenariats:** *\`\`\`ID | `, dootabase.get(String((String((interaction.guild).id) + '-part_chanel'))), `\`\`\`*
                  > <:Partner_Save:993117407222702171> **Salon de Logs:** *\`\`\`ID | `, dootabase.get(String((String((interaction.guild).id) + '-part_logs_server'))), `\`\`\`*
                  > <:Partner_Moderator:992110132538376272> **Nombre de membres:** *\`\`\``, (interaction.guild).memberCount, `\`\`\`*
                  > <:Partner_Welcome:992734094238679090> **Date de création du serveur:** *\`\`\``, (interaction.guild).createdAt, `\`\`\`*
                  > <:Partner_Partner:992104887984861354> **Nom du Serveur:** *\`\`\``, (interaction.guild).name, `\`\`\`*
                  > <:Partner_Partner:992104887984861354> **Rôle Notification Partenariat:** *\`\`\``, dootabase.get(String((String((interaction.guild).id) + '-part_notif_rank'))), `\`\`\`*
                  > <:Partner_Blacklist:993457706465775646> **ID du serveur:** *\`\`\``, (interaction.guild).id, `\`\`\`*
                  > <:Partner_Link:992955651359772753> **Publicité du serveur:** `, dootabase.get(String((String((interaction.guild).id) + '-part_pub_server'))), ''].join('')));
                            embed.setTitle((String(s4d.database.get(String('verify_emoji'))) + String(s4d.database.get(String('verify_message_verif_title_fr')))))
                                .setURL();

                            const accept_server = new MessageButton()
                                .setCustomId('accept_server')
                                .setLabel('Accepter')
                                .setStyle(('SUCCESS'))
                                .setEmoji('<:Partner_Tick:992734092972003349>')

                            const refused_server = new MessageButton()
                                .setCustomId('refused_server')
                                .setLabel('Refuser')
                                .setStyle(('DANGER'))
                                .setEmoji('<:Partner_Cross:992734085648748604>')

                            const link_server = new MessageButton()
                                .setLabel('Lien d\'invitation')
                                .setStyle(('LINK'))
                                .setEmoji('<:Partner_Link:992955651359772753>')
                                .setURL(dootabase.get(String((String((interaction.guild).id) + '-invites_server'))))

                            const verif_system_button = new MessageActionRow()
                                .addComponents(link_server)

                            s4d.client.channels.cache.get(s4d.database.get(String('verif_channel'))).send({
                                embeds: [(embed)],
                                components: [verif_system_button]
                            });
                        } else {
                            var embed = new Discord.MessageEmbed()
                            embed.setColor(s4d.database.get(String('wrong_color')));
                            embed.setDescription((String(s4d.database.get(String('wrong_emoji'))) + String(s4d.database.get(String('message_option_verify_nogood_fr')))));

                            await interaction.reply({
                                ephemeral: true,
                                embeds: [(embed)],
                                components: []
                            });
                        }
                    } else {
                        var embed = new Discord.MessageEmbed()
                        embed.setColor(s4d.database.get(String('embed_color')));
                        embed.setDescription((String(s4d.database.get(String('blacklist_emoji'))) + String(s4d.database.get(String('message_verify_raid_server_fr')))));

                        await interaction.reply({
                            ephemeral: true,
                            embeds: [(embed)],
                            components: []
                        });
                    }
                } else {
                    var embed = new Discord.MessageEmbed()
                    embed.setColor(s4d.database.get(String('embed_color')));
                    embed.setDescription((String(s4d.database.get(String('blacklist_emoji'))) + String(s4d.database.get(String('message_verify_blacklist_server_fr')))));

                    await interaction.reply({
                        ephemeral: true,
                        embeds: [(embed)],
                        components: []
                    });
                }
            } else {
                var embed = new Discord.MessageEmbed()
                embed.setColor(s4d.database.get(String('wrong_color')));
                embed.setDescription((String(s4d.database.get(String('wrong_emoji'))) + String(s4d.database.get(String('wrong_owner_message_fr')))));

                await interaction.reply({
                    embeds: [(embed)],
                    ephemeral: true,
                    components: []
                });
            }
        }
    });

    return s4d
})();