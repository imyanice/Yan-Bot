const BaseCommand = require("../../base/BaseCommand"),
  { MessageEmbed } = require("discord.js");

module.exports = class Hi extends BaseCommand {
  constructor() {
    super("help", "general");
  }
  async run(client, interaction) {
    const embed = new MessageEmbed().setTitle("Help menu");

    if (!interaction.options.get("category")) {
      embed
        .addFields(
          {
            name: "<:YJ_fun:846032578745335848>  Fun",
            value: "<:YJ_SashCommands:846034021368332319> `help fun`",
            inline: true,
          },
          {
            name: "<:YJ_moderation:846044206077575209>  Moderation",
            value: "<:YJ_SashCommands:846034021368332319> `help moderation`",
            inline: true,
          }
        )
        .addField(
          "\u200B",
          '<:YJ_logo:831533916979593258> Dev by " Yan Jobs#0001 | Source code [here](https://github.com/Yan-Jobs/Yan-Bot) | Open Source :hearts: '
        );
      await interaction.reply(embed);
    } else if (interaction.options.get("category").value === "fun") {
      embed
        .setTitle("<:YJ_fun:846032578745335848>  Fun commands")
        .setDescription(
          "All the  <:YJ_fun:846032578745335848>  fun commands who are in the bot."
        )
        .addField(
          "Commands: ",
          "<:YJ_SashCommands:846034021368332319> `embed`, Transform your content as en embed,\n<:YJ_SashCommands:846034021368332319> `hello`, Reply with `Hello world !`, \n**Much commands will be added later !**"
        )
        .setThumbnail("https://emoji.gg/assets/emoji/5262-sunglases-funny.png");
      await interaction.reply(embed);
    } else if (interaction.options.get("category").value === "moderation") {
      embed
        .setTitle("<:YJ_moderation:846044206077575209>  Moderation commands")
        .setDescription(
          "All the  <:YJ_moderation:846044206077575209>  moderation commands who are in the bot."
        )
        .addField(
          "Commands: ",
          "<:YJ_SashCommands:846034021368332319> `ban`, Ban a user *(ban users permission required)*,\n<:YJ_SashCommands:846034021368332319> `kick`, Kick a user *(kick users permission required)*,\n<:YJ_SashCommands:846034021368332319> `clear`, Clear a number of message between 2 and 100 *(manage message permission required)*.\n**Much commands will be added later !**"
        )
        .setThumbnail(
          "https://emoji.gg/assets/emoji/9175_moderation_hammer.png"
        );
      await interaction.reply(embed);
    } else {
      await interaction.reply(
        "**Sorry this category was not found. Please try with the following:** `moderation`, `fun`."
      );
    }
  }
};
