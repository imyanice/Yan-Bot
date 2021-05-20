const BaseCommand = require("../../utils/structures/BaseCommand");

module.exports = class Ban extends BaseCommand {
  constructor() {
    super("ban", "moderation", []);
  }
  async run(client, interaction, args) {
    let msg = `Succesfully banned <@${interaction.options[0].value}>`;
    let authorId = interaction.user.id;
    let author = interaction.member.guild.members.cache.get(authorId);
    if (author.permissions.has("BAN_MEMBERS")) return console.log("works");
    await interaction.reply(msg);
  }
};
