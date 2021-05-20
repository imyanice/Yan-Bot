const BaseEvent = require("../../utils/structures/BaseEvent");
const Discord = require("discord.js");
const settings = require("../../../config");

module.exports = class ReadyEvent extends BaseEvent {
  constructor() {
    super("ready");
  }

  async run(client, connection) {
    console.log(
      `Logged as ${client.user.tag} in ${client.guilds.cache.size} !`
    ); // Console log ready

    require("../../slashCommands/hello")(client);
    require("../../slashCommands/embed")(client);
    require("../../slashCommands/ban")(client);
    
  }
};
