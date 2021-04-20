require("dotenv").config();

const Discord = require("discord.js");
const WOKCommands = require("wokcommands");
const interactions = require("discord-slash-commands-client");

const client = new Discord.Client({
  partials: ["MESSAGE", "REACTION"],
});

// const client = new interactions.Client(process.env.TOKEN, "832856408520523796");

// client
//   .getCommands({ guidId: "828933252986306581" })
//   .then((res) => {
//     console.log("here");
//     console.log(res);
//   })
//   .catch(console.error);
// client
//   .deleteCommand("833599967133302814")
//   .then(console.log)
//   .catch(console.error);
// client
//   .createCommand({
//     name: "Tite",
//     description: "description for this unique command",
//   })
//   .then(console.log)
//   .catch(console.error);

client.on("ready", () => {
  new WOKCommands(client, {
    commandsDir: "commands",
    _showWarns: false,
  })
    .setDefaultPrefix("eds ")
    .setCategorySettings([
      {
        name: "Main",
        emoji: "🍆",
      },
    ]);
});

client.login(process.env.TOKEN);
