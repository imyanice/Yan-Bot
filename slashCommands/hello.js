const Discord = require("discord.js");
/**
 * @param {Discord.Client} client
 */

module.exports = async (client) => {
  //Post hello  command
  const data = {
    name: "hello",
    description: "Reply with Hello because I LOVE U !",
  };
  await client.guilds.cache
    .get(client.config.guild_owner_id)
    ?.commands.create(data);
};
