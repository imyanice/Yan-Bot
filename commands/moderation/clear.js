const BaseCommand = require("../../base/BaseCommand");

module.exports = class ClearCommand extends BaseCommand {
  constructor() {
    super("clear", "moderation");
  }
  async run(client, interaction) {
    const numberofMsgs = interaction.options[0].value;
    if (
      interaction.member.guild.members.cache
        .get(interaction.user.id)
        .permissions.has("MANAGE_MESSAGE")
    ) {
      if (numberofMsgs > 100 || numberofMsgs < 2)
        return await interaction.reply(
          "<:YJ_error:845314543118844014> Please provide an amount between 2 and 100 !"
        );
      await interaction.member.guild.channels.cache
        .get(interaction.channelID)
        .bulkDelete(numberofMsgs)
        .then(() => {
          interaction.reply(
            "<a:YJ_greenverify:831535173816156160> Succesfully deleted `" +
              numberofMsgs +
              " message(s)` !"
          );
        })
        .catch((e) => {
          interaction.reply(
            "<:YJ_error:845314543118844014> Hmmmm, something went wrong, *(please check if I have the correct permissio: manage message)* !"
          );
          client.logger.log(
            e +
              " in " +
              interaction.member.guild.name +
              " id: " +
              interaction.member.guild.id,
            "error"
          );
        });
    }
  }
};
