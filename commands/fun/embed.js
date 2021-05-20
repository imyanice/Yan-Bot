const BaseCommand = require("../../base/BaseCommand");
const Discord = require("discord.js");

module.exports = class Embed extends BaseCommand {
  constructor() {
    super("embed", "fun", []);
  }
  async run(client, interaction, args) {
    let content = interaction.options[0].value;
    let color = interaction.options[1].value || "#00e5ff";
    let embed = new Discord.MessageEmbed().setTitle(content).setColor(color);
    await interaction.reply(embed);
  }
};
