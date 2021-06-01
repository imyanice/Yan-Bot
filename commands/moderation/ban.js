const BaseCommand = require("../../base/BaseCommand");

module.exports = class Ban extends BaseCommand {
	constructor() {
		super("ban", "moderation");
	}
	async run(client, interaction) {
		const author = interaction.member.guild.members.cache.get(
			interaction.user.id
		);
		const userToBan = interaction.member.guild.members.cache.get(
			interaction.options[0].value
		);
		const pruneDays = interaction.options[2].value;
		const banReason = interaction.options[1].value;
		if (author.permissions.has("BAN_MEMBERS")) {
			await userToBan.ban({ reason: banReason, days: pruneDays }).catch((e) => {
				client.logger.log(e, "err");
				interaction.reply(
					"<:YJ_error:845314543118844014> An error occured, please try again later, *it is maybe caused because I don't have the required permissions (ban members) or the user to ban have a higher role than me*."
				);
			});
			await interaction.reply(
				"<a:YJ_greenverify:831535173816156160> Succesfully banned: `" +
					userToBan.user.username +
					"#" +
					userToBan.user.discriminator +
					"` !"
			);
		} else {
			await interaction.reply(
				":x: Sorry only those have the permission to ban members can perform this command..."
			);
		}
	}
};
