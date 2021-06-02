const BaseCommand = require("../../base/BaseCommand");

module.exports = class Hi extends BaseCommand {
  constructor() {
    super("hello", "fun");
  }
  async run(client, interaction) {
    await interaction.reply("Hello world !");
  }
};
