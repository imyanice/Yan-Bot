const BaseCommand = require("../../base/BaseCommand");

module.exports = class Hi extends BaseCommand {
  constructor() {
    super("clear", "moderation");
  }
  async run(client, interaction) {
    console.log(interaction);
    const numberofMsgs = interaction.options[0].value;
    if (interaction.member.guild.members.cache.get(
      interaction.user.id
    ).permissions.has("MANAGE_MESSAGE")) {
      await interaction.member.guild.channels.cache.get(interaction.channelID).bulkDelete(numberofMsgs).then(() => {
        interaction.reply("Succesfully deleted `" + numberofMsgs + "` !")
      });
    }
  }
};
