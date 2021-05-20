const BaseCommand = require("../../base/BaseCommand");

module.exports = class Hi extends BaseCommand {
  constructor() {
    super("hello", "fun", []);
  };
  async run(client, interaction, args) {
    await interaction.reply("Hello world !")
  }
};
