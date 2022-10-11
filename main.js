const Discord = require('discord.js');
const client = new Discord.Client();

const {readFileSync, promises: fsPromises} = require('fs');
const TOKEN = readFileSync("TOKEN", 'utf-8');

client.on("ready", () => {
    console.log("Client ready");
});

client.on("message", (message) => {
    if(message.content.startsWith("ping")) {
        message.channel.send("pong");
    }
});

client.login(TOKEN);
