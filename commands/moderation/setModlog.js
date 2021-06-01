const BaseCommand = require("../../base/BaseCommand");

module.exports = class ModLog extends BaseCommand {
	constructor() {
		super("modlog", "administration");
	}
	async run(client, interaction, connection) {
		if (interaction.options[0]) {
			connection.query("UPDATE channels SET modLog=? WHERE `guildId`=?", [
				interaction.options[0].value,
				interaction.member.guild.id,
			]);
			await interaction.reply(
				"<a:YJ_greenverify:831535173816156160> Succesfully set the moderation channel to receive updates to: <#" +
					interaction.options[0].value +
					"> !"
			);
		} else {
			connection.query(
				"SELECT * FROM channels WHERE guildId =?",
				[interaction.member.guild.id],
				async (error, result) => {
					let channel = result[0].modLog;
					await interaction.reply(
						"The channel set to receive updates is: <#" + channel + "> !"
					);
				}
			);
		}
	}
};
