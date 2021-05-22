const BaseCommand = require("../../base/BaseCommand"),
  { MessageEmbed } = require("discord.js");

module.exports = class Hi extends BaseCommand {
  constructor() {
    super("help", "misc");
  }
  async run(client, interaction) {
    let embed = new MessageEmbed()
      .setTitle("Help menu")

    if (!interaction.options[0]) {
      embed.addFields(
        {
          name: "FUN",
          value: "/help fun",
          inline: true,
        },
        {
          name: "MISC",
          value: "/help misc",
          inline: true,
        }
      )
      .addField("\u200B", '<:YJ_logo:831533916979593258> Dev by " Yan Jobs#0001 || Source code [here](https://github.com/Yan-Jobs/Yan-Bot)  :heart_eyes: ');
      await interaction.reply(embed);
    } else if (interaction.options[0].value === "misc") {
      
    }
  }
};
