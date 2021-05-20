const Discord = require("discord.js");
const settings = require("../config");
/**
 * @param {Discord.Client} client
 */

module.exports = async (client) => {
  //post embed command to the api
  const data = {
    name: "embed",
    description: "Change your content to an embed",

    options: [
      {
        name: "content",
        description: "Content of the embed",
        type: 3,
        required: true,
      },
    ],
  };
  await client.guilds.cache.get(settings.guild_owner_id)?.commands.create(data);
};
