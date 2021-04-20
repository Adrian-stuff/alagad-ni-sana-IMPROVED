module.exports = {
  category: "Main",
  description: "Sends a Yes or No",
  expectedArgs: "<Question>",
  minArgs: 1,
  maxArgs: -1,
  syntaxError: "bobo amputa walang tanong pano ko yan masasagot ha?",

  callback: ({ message, channel, args, interaction }) => {
    const result = Math.floor(Math.random() * 11) % 2 === 0 ? "Yes" : "No";
    const question = args.toString().replace(/,/g, " ");
    const response = `${
      message === undefined
        ? `<@${interaction.member.user.id}>`
        : message.author
    } "${question}" \n **${result}** `;

    if (message) {
      channel.send(response);
    }

    return response;
  },
};
