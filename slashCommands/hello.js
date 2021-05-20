const Discord = require("discord.js");
const settings = require("../config");
/**
 * @param {Discord.Client} client
 */

module.exports = async (client) => {
  //Post hello  command
  const data = {
    name: "hello",
    description: "Reply with Hello because I LOVE U !",
  };
    await client.guilds.cache.get(settings.guild_owner_id)?.commands.create(data);
};
