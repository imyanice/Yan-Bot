const BaseCommand = require("../../base/BaseCommand");
const Discord = require("discord.js");

module.exports = class Embed extends BaseCommand {
  constructor() {
    super("embed", "fun");
  }
  async run(client, interaction) {
    const content = interaction.options.get("content").value;
    const color = interaction.options.get("color").value || "#00e5ff";
    const embed = new Discord.MessageEmbed().setTitle(content).setColor(color);
    await interaction.reply(embed);
  }
};
