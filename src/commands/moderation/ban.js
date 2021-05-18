const BaseCommand = require("../../utils/structures/BaseCommand");

module.exports = class Ban extends BaseCommand {
  constructor() {
    super("ban", "moderation", []);
  }
  async run(interaction, client, args) {
    
    let msg = `Succesfully banned <@${interaction.data.options[0].value}>`;
    let authorId = interaction.member.user.id;
    let author = interaction.guild.members.cache.get(authorID);
    if (author.permission.has("BAN_MEMBERS")) return console.log("works");
    interaction.reply(msg);
  }
};
