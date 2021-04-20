module.exports = {
  category: "Main",
  description: "Sends the sender/{User}'s avatar",

  expectedArgs: "[User]",
  maxArgs: 1,
  syntaxError: "Only need 1 user",
  callback: async ({ client, message, channel, args, interaction }) => {
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

    const answer = `${
      (argsFetch === undefined ? false : argsFetch.avatar === null)
        ? `this user (<@${argsFetch.id}>) dont have a avatar`
        : (argsFetch === undefined ? `<@${getId}>\n` : args + "\n") + response
    }`;

    if (message) {
      channel.send(answer);
    }

    return answer;
  },
};
