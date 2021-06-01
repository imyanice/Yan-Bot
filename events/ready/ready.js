const BaseEvent = require("../../base/BaseEvent");

module.exports = class ReadyEvent extends BaseEvent {
	constructor() {
		super("ready");
	}

	async run(client) {
		client.logger.log(
			`Logged as ${client.user.tag} in ${client.guilds.cache.size} !`,
			"ready"
		); // Console log ready
		client.slashCmds.forEach((cmd) => {
			client.slashCmds
				.get(cmd.name)
				.run(client)
				.then(() => {
					client.logger.log(
						"🎉  Succesfully posted " + cmd.name + " command !",
						"/"
					);
				});
		});
	}
};
