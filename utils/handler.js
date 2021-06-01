const path = require("path");
const fs = require("fs").promises;
const BaseCommand = require("../base/BaseCommand");
const BaseEvent = require("../base/BaseEvent");
const BasePostCommand = require("../base/BasePostCommand");
let connection;

(async () => {
	connection = await require("../database/db");
})();
async function registerCommands(client, dir = "") {
	const filePath = path.join(__dirname, dir);
	const files = await fs.readdir(filePath);
	for (const file of files) {
		const stat = await fs.lstat(path.join(filePath, file));
		if (stat.isDirectory())
			await registerCommands(client, path.join(dir, file));
		if (file.endsWith(".js")) {
			const Command = require(path.join(filePath, file));
			if (Command.prototype instanceof BaseCommand) {
				const cmd = new Command();
				client.commands.set(cmd.name, cmd);
				client.logger.log(
					"🎉  Succesfully registered " + cmd.name + " command !",
					"cmd"
				);
			}
		}
	}
}

async function registerEvents(client, dir = "") {
	const filePath = path.join(__dirname, dir);
	const files = await fs.readdir(filePath);
	for (const file of files) {
		const stat = await fs.lstat(path.join(filePath, file));
		if (stat.isDirectory()) await registerEvents(client, path.join(dir, file));
		if (file.endsWith(".js")) {
			const Event = require(path.join(filePath, file));
			if (Event.prototype instanceof BaseEvent) {
				const event = new Event();
				client.logger.log(
					"🎉  Succesfully registered " + event.name + " event !",
					"event"
				);
				client.on(event.name, event.run.bind(event, client, connection));
			}
		}
	}
}
async function registerPostCommands(client, dir = "") {
	const filePath = path.join(__dirname, dir);
	const files = await fs.readdir(filePath);
	for (const file of files) {
		const stat = await fs.lstat(path.join(filePath, file));
		if (stat.isDirectory())
			await registerPostCommands(client, path.join(dir, file));
		if (file.endsWith(".js")) {
			const Command = require(path.join(filePath, file));
			if (Command.prototype instanceof BasePostCommand) {
				const cmd = new Command();
				client.slashCmds.set(cmd.name, cmd);
			}
		}
	}
}

module.exports = { registerCommands, registerEvents, registerPostCommands };
