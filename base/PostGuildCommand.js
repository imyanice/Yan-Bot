module.exports = class PostCommand {
	constructor(name) {
		this.name = name;
	}

	async post(client, data, guild) {
		await client.guilds.cache
			.get(guild)
			?.commands.create(data)
			.catch((e) => client.logger.log(e, "error"));
	}
};
