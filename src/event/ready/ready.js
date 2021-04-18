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
            const commandRegistered = client.commands.get(cmdName);
            if (command == commandRegistered) {
                commandRegistered.run(client, interaction, args)
            }
        })
    }
};









