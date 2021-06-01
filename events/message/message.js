const BaseEvent = require("../../base/BaseEvent");
const Discord = require("discord.js");

module.exports = class MessageEvent extends BaseEvent {
	constructor() {
		super("message");
	}

	async run(client, connection, message) {}
};
