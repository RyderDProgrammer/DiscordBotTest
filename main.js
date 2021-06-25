const Discord = require('discord.js');
const token = process.env.TOKEN;

const client = new Discord.Client();


client.once('ready', () => {
    console.log("The bot is online!");
})



//Needs to be at the end of file.
client.login(token);
