const BaseEvent = require("../../base/BaseEvent");
const Discord = require("discord.js");

module.exports = class InteractionEvent extends BaseEvent {
  constructor() {
    super("interaction");
  }

  async run(client, connection, interaction) {
    // console.log(interaction) If you want see the JSON object.
    const command = interaction.commandName;
    const args = interaction.options[0];
    const commandRegistered = client.commands.get(command);
    if (commandRegistered) {
      commandRegistered.run(client, interaction, args, connection);
    }
  }
};
