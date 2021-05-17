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
      //post ban command to the api
      data: {
        name: "ban",
        description: "Ban an user",

        options: [
          {
            name: "user",
            description: "User to ban from this guild.",
            type: 6,
            required: true,
          },
        ],
      },
    });
};
