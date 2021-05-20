const BaseCommand = require("../../base/BaseCommand");

module.exports = class Ban extends BaseCommand {
  constructor() {
    super("ban", "moderation", []);
  }
  async run(client, interaction, args) {
    await interaction.reply("🛠 Sorry, but this command is in hardly developpement...");
  } 
};
