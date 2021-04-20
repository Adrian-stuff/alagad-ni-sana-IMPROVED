const petPetGif = require("pet-pet-gif");
const { MessageAttachment } = require("discord.js");

module.exports = {
  category: "Main",
  slash: "both",
  description: "petpet",
  maxArgs: 1,
  syntaxError: "Only need 1 user",

  callback: async ({ client, args, message, channel, interaction }) => {
    const getId =
      message === undefined ? interaction.member.user.id : message.author.id;
    const getAvatar =
      message === undefined
        ? interaction.member.user.avatar
        : message.author.avatar;

    const fixedArgs = args.toString().replace(/(@)|(<)|(>)|(!)/g, "");
    const argsFetch =
      args[0] === undefined
        ? undefined
        : await client.users
            .fetch(fixedArgs)
            .then((res) => res)
            .catch((err) => undefined);

    const response = `https://cdn.discordapp.com/avatars/${
      argsFetch === undefined ? getId : argsFetch.id
    }/${argsFetch === undefined ? getAvatar : argsFetch.avatar}.png?size=4096`;
    let animatedGif = await petPetGif(response).catch();

    const attachment = new MessageAttachment(animatedGif, "petpet.gif");

    const answer = { files: [attachment] };

    if (message) {
      channel.send(answer);
    }

    return answer;
  },
};
