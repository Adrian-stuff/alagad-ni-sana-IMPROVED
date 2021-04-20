module.exports = {
  //   category: "Ping",
  aliases: ["p"],
  description: "Replies with Pong!",
  callback: async ({ instance, message, channel, interaction }) => {
    const response = `Pong! ${
      message ? message.author : `<@${interaction.member.user.id}>`
    }`;
    if (message) {
      channel.send(response);
    }

    return response;
  },
};
