const BaseCommand = require("../../utils/structures/BaseCommand");
const Discord =  require("discord.js");
module.exports = class Embed extends BaseCommand {
    constructor() {
        super("embed", "fun", []);
    }
    async run(client, interaction, args) {
        const content = args.find(arg => arg.name.toLowerCase() == "content").value;
        let embed = new Discord.MessageEmbed()
            .setTitle(content)
            .setColor("#00e5ff");

        client.api.interactions(interaction.id, interaction.token).callback.post({
            data: {
                type: 4,
                data: await createAPIMessage(interaction, embed)
            }
        })
        async function createAPIMessage(interaction, content) {
            const apiMessage = await Discord.APIMessage.create(client.channels.resolve(interaction.channel_id), content)
                .resolveData()
                .resolveFiles();

            return {
                ...apiMessage.data, files: apiMessage.files
            }}
    }
}