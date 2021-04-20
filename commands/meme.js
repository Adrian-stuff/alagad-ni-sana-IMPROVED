const { MessageEmbed } = require("discord.js");
const axios = require("axios");
const util = require("util");

module.exports = {
  category: "Main",

  description: "Sends a random from a subreddit",
  expectedArgs: "[subreddit]",
  maxArgs: 1,
  syntaxError: "only need 1 subreddit",

  callback: async ({ message, channel, args, interaction }) => {
    const response = await axios
      .get(`https://meme-api.herokuapp.com/gimme/${args}`)
      .then((data) => {
        console.log(data);
        data = data.data;
        return data;
      })
      .catch((err) => {
        return new Error(err);
      });
    const memeEmbed = !util.types.isNativeError(response)
      ? new MessageEmbed()
          .setTitle(response.title)
          .setURL(response.postLink)
          .setColor(0x0099ff)
          .setAuthor(
            `u/${response.author}`,
            undefined,
            `https://reddit.com/users/${response.author}`
          )
          .setImage(response.url)
      : `tama ba yang subreddit mo ha? ${
          message === undefined
            ? `<@${interaction.member.user.id}>`
            : message.author
        }!`;

    if (message) {
      channel.send(
        util.types.isNativeError(response) ? memeEmbed : { embed: memeEmbed }
      );
    }

    return memeEmbed;
  },
};
