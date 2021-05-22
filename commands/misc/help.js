const BaseCommand = require("../../base/BaseCommand");

module.exports = class Hi extends BaseCommand {
  constructor() {
    super("help", "misc");
  }
  async run(client, interaction) {
    await interaction.reply("Hello world !");
  }
};
