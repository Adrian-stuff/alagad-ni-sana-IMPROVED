const { MessageEmbed } = require("discord.js");

module.exports = {
  category: "Main",
  description: "Measure your pp",
  expectedArgs: "[User]",
  maxArgs: 1,
  syntaxError: "Only need 1 user",

  callback: ({ message, interaction, args }) => {
    const body = `    ▐░░░░░░░░░░░▌\n`.repeat(Math.floor(Math.random() * 11));

    const titeEmbed = new MessageEmbed()
      .setTitle("Measure your pp:")
      .setDescription(
        `${
          args[0] === undefined
            ? `${
                message
                  ? message.author.username
                  : interaction.member.user.username
              }`
            : `${args}`
        } 's pp:\n` +
          "```        ▄▄ ▄▄\n      ▄▌▒▒▀▒▒▐▄\n     ▐▒▒▒▒▒▒▒▒▒▌\n    ▐▒▒▒▒▒▒▒▒▒▒▒▌\n    ▐▒▒▒▒▒▒▒▒▒▒▒▌\n    ▐▀▄▄▄▄▄▄▄▄▄▀▌\n" +
          body +
          "   ▄█▓░░░░░░░░░▓█▄\n  ▄▀░░░░░░░░░░░░░ ▀▄\n ▐░░░░░░░▀▄▒▄▀░░░░░░▌\n▐░░░░░░░▒▒▐▒▒░░░░░░░▌\n▐▒░░░░░▒▒▒▐▒▒▒░░░░░▒▌\n ▀▄▒▒▒▒▒▄▀▒▀▄▒▒▒▒▒▄▀\n   ▀▀▀▀▀     ▀▀▀▀▀```"
      )
      .setColor(15406156);
    if (message) {
      message.channel.send({ embed: titeEmbed });
    }
    return titeEmbed;
  },
};
