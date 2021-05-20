const BaseEvent = require("../../utils/structures/BaseEvent");
const Discord = require("discord.js");
const settings = require("../../../config");

module.exports = class InteractionEvent extends BaseEvent {
  constructor() {
    super("interaction");
  }

  async run(client, connection, interaction) {
    console.log(interaction);

    const command = interaction.commandName;
    console.log(command);
    const args = interaction.options[0];
    const commandRegistered = client.commands.get(command);
    if (commandRegistered) {
      commandRegistered.run(client, interaction, args, connection);
    }
  }
};
