const Discord = require("discord.js");
const settings =  require("../../config");
/**
 * @param {Discord.Client} client
 */

module.exports = (client) => {
    client.api.applications(client.user.id).guilds(settings.guild_owner_id).commands.post({ //post embed command to the api
        data: {
            name: "embed",
            description: "Change your content to an embed",

            options: [
                {
                    name: "Content",
                    description: "Content of the embed",
                    type: 3,
                    required: true
                }
            ]
        }
    });
}