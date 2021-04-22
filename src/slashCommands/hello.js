const Discord = require("discord.js");
const settings = require("../../config");
/**
 * @param {Discord.Client} client
 */

module.exports = (client) => {
  client.api
    .applications(client.user.id)
    .guilds(settings.guild_owner_id)
    .commands.post({
      //Post hello  command
      data: {
        name: "hello",
        description: "just testing",
      },
    });
};
