const Discord = require("discord.js");
const settings = require("../config");
/**
 * @param {Discord.Client} client
 */

module.exports = async (client) => {
  //post ban command to the api
  const data = {
    name: "ban",
    description: "Ban a user",

    options: [
      {
        name: "user",
        description: "User to ban from this guild.",
        type: 6,
        required: true,
      },
    ],
  };
  await client.guilds.cache
    .get(client.config.guild_owner_id)
    ?.commands.create(data);
};
