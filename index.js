const Discord = require("discord.js");
const PREFIX = "c" // PREFIX CONSTRAIN

var bot = new Discord.Client();

// Event
bot.on("ready", () => {
    bot.user.setGame("Sibuk ngoding!"); // Keterangan
    console.log(`${bot.user.username} Sampun hidup.`);
});

bot.on("message", function(message) {
    if(message.author.bot) return; 
    if(!message.guild) return;
    if(!message.content.startsWith(PREFIX)) return;

    var args = message.content.substring(PREFIX.length).split(" ");
    var command = args[0].toLowerCase();

    if(command == ":ping") {
        message.channel.send(":ping_pong: **PONG!**`")
    }
    if(command == ":status") {
        message.channel.send(":fencer: ***SEHAT***`");
    }
});

bot.login("NjEzMzI0NjgwNDM0MTU1NTMz.XVvhAg.yDLExlnsE2E4-s_fmBs4F491opw");

