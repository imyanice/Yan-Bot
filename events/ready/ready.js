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
    client.slashCmds.forEach((cmd) => {
      client.slashCmds
        .get(cmd.name)
        .run(client)
        .then((run) => {
          client.logger.log(
            "🎉  Succesfully posted " + cmd.name + " command !",
            "/"
          );
        });
    });
  }
};
