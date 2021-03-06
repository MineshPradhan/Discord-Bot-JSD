require('dotenv').config();

const { Client, Intents, Message } = require('discord.js');

const myIntents = new Intents();

const client = new Client({
    intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES, Intents.FLAGS.DIRECT_MESSAGES],
});

client.on('ready', () => {
    console.log(`${client.user.tag} has logged in.`)
});

client.on('message', (message) => {
    console.log(`[${message.author.tag}]: ${message.content}`);
    if(message.content === 'hello'){
        message.reply(`hello! ${message.author.username}`);
    }
});

client.login(process.env.DISCORDJS_BOT_TOKEN);