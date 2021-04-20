const axios = require("axios");
const util = require("util");

module.exports = {
  category: "Main",
  // slash: "both",
  description: "Sends a Random Qoute",
  callback: async ({ message, channel }) => {
    const response = await axios
      .get("https://api.quotable.io/random")
      .then((data) => {
        data = data.data;
        return data;
      })
      .catch((err) => {
        return new Error(err);
      });
    const ans = util.types.isNativeError(response)
      ? "lol sira server ulitin nalang mamaya kbye"
      : `*${response.content}*\n - ${response.author}`;

    if (message) {
      channel.send(ans);
    }
    return ans;
  },
};
