console.log('[BOT] Warning: Self-botting may get your discord account banned at anytime');
console.log('[BOT] Warning: By using this bot, you acknowledge that anything that may happen to your discord account is at your own fault');

const Discord = require("discord.js");
const client = new Discord.Client({autoReconnect: true});
const config = require("./config.js");

var quoteRegex = /\/quote https:\/\/discordapp.com\/channels\/[0-9]+\/[0-9]+\/[0-9]+/i;

bot.on("ready", () => {
    bot.login(config.token);
    console.log('[BOT] Connection succeeded...');
})

/* command listener */ 
bot.on("message", msg => {
    /* makes sure only the id of whoever is in the config is used */
    if(msg.author.id != config.userid)
        return;

    let cmd = msg.content.split(" ")[0];

    /* commands */ 
    if (cmd === "/avatar" || cmd === "!av" || cmd === "/av") {

        var member = message.mentions.members.first();
        var quoteRegex = /\/quote https:\/\/discordapp.com\/channels\/[0-9]+\/[0-9]+\/[0-9]+/i;
        var match = captureRegex.exec(message.content); 
        
        var channelID = match[2];
        var messageID = match[3];
        var reply = match[4]; 
       try {
            await client.channels.get(channelID.fetchMessage(messageID))
              .then(avater => embedAvatar(member, reply))
        } catch(error) {
            console.log(error.stack.split("\n", 1).join(""));
        }
        message.delete().catch(console.error);
    }
    if (cmd === "/embed") {
        var text = message.content;
        embedText(text);

        message.delete().catch(console.error);
    }


});

/* Functions */

function embedAvatar(member, reply) {
    channel.send("", {
        embed: {
            color: member.displayColor, 
            name: `${member.username}'s profile picture!`,
            picture: member.embedAvatar ? member.embedAvatar : undefined
        },
    });

    if (reply !== "") {
         channel.send(reply);
    }
}

function embedText(text) {
    channel.send("", {
        embed: { 
            message: `${text.length}`,
        }
    });
}

bot.login(config.token);