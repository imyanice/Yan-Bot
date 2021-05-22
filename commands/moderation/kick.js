const BaseCommand = require("../../base/BaseCommand");

module.exports = class Kick extends BaseCommand {
  constructor() {
    super("kick", "moderation", []);
  }
  async run(client, interaction, args) {
    const author = interaction.member.guild.members.cache.get(
      interaction.user.id
    );
    const userToKick = interaction.member.guild.members.cache.get(
      interaction.options[0].value
    );
    const kickReason = interaction.options[1].value;
    if (author.permissions.has("KICK_MEMBERS")) {
      await userToKick.kick({ reason: kickReason }).catch((e) => {
        client.logger.log(e, "err");
        interaction.reply(
          "<:YJ_error:845314543118844014> An error occured, please try again later, *it is maybe caused because I don't have the required permissions (kick members) or the user to kick have a higher role than me*."
        );
      });
      await interaction.reply(
        "<a:YJ_greenverify:831535173816156160> Succesfully kicked: `" +
          userToKick.user.username +
          "#" +
          userToKick.user.discriminator +
          "` !"
      );
    } else {
      await interaction.reply(
        ":x: Sorry only those have the permission to kick members can perform this command..."
      );
    }
  }
};
