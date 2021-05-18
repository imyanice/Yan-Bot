const BaseEvent = require("../../utils/structures/BaseEvent");
const Discord = require("discord.js");
const settings = require("../../../config");

module.exports = class ReadyEvent extends BaseEvent {
  constructor() {
    super("interaction");
  

  async run(client, interaction, connection) {
    
   
      const command = interaction.data.name.toLowerCase();
      const args = interaction.data.options;
      const commandRegistered = client.commands.get(command);
      if (commandRegistered) {
        commandRegistered.run(interaction, client, args, connection);
      }
  }
};
