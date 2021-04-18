const BaseEvent = require("../../utils/structures/BaseEvent");

module.exports = class MessageEvent extends BaseEvent {
    constructor() {
        super("message");
    }
    async run(client, message) {
        if (message.author.bot) return;
        message.reply("Hi");
    }
}