const BaseEvent = require("../../utils/structures/BaseEvent");
const Discord = require("discord.js");
const settings = require("../../../config");

module.exports = class InteractionEvent extends BaseEvent {
  constructor() {
    super("interaction");
  }

  async run(client, interaction) {

    
      const command = interaction.name;
      const args = interaction.data.options;
      const commandRegistered = client.commands.get(command);
      if (commandRegistered) {
        commandRegistered.run(client, interaction, args, connection);
      }
    
  }
};
