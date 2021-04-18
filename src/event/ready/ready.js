const BaseEvent = require("../../utils/structures/BaseEvent");
const Discord = require("discord.js");
const settings = require("../../../config");
module.exports =  class ReadyEvent extends BaseEvent {
    constructor() {
        super("ready");
    }

    async run (client) {
        console.log(`Logged as ${client.user.tag} in ${client.guilds.cache.size} !`); // Console log ready

        require("../../slashCommands/hello")(client);
        require("../../slashCommands/embed")(client);

        client.ws.on('INTERACTION_CREATE', async interaction => {
            const command = interaction.data.name.toLowerCase();
            const args = interaction.data.options;

            if (command == "hello") {
                client.api.interactions(interaction.id, interaction.token).callback.post({
                    data: {
                        type: 4,
                        data: {
                            content: "Hello world"
                        }
                    }
                })
            } else if (command == "echo") {
                const content = args.find(arg => arg.name.toLowerCase() == "content").value;
                let embed = new Discord.MessageEmbed()
                    .setTitle(content)
                    .setColor("#00e5ff")
                    .setAuthor(interaction.member.user.username, interaction.member.user.displayAvatarURL({format: "gif", dynamic: true}));

                client.api.interactions(interaction.id, interaction.token).callback.post({
                    data: {
                        type: 4,
                        data: await createAPIMessage(interaction, embed)
                    }
                })
            }
        });


        async function createAPIMessage(interaction, content) {
            const apiMessage = await Discord.APIMessage.create(client.channels.resolve(interaction.channel_id), content)
                .resolveData()
                .resolveFiles();

            return {
                ...apiMessage.data, files: apiMessage.files
            }
    }
    }
}

