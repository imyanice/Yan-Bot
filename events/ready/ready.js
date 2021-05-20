const BaseEvent = require("../../base/BaseEvent");
const Discord = require("discord.js");

module.exports = class ReadyEvent extends BaseEvent {
  constructor() {
    super("ready");
  }

  async run(client, connection) {
    client.logger.log(
      `Logged as ${client.user.tag} in ${client.guilds.cache.size} !`,
      "ready"
    ); // Console log ready

    require("../../slashCommands/hello")(client);
    require("../../slashCommands/embed")(client);
    require("../../slashCommands/ban")(client);
  }
};
