const BaseEvent = require("../../base/BaseEvent");

module.exports = class GuildAddEvent extends BaseEvent {
  constructor() {
    super("guildCreate");
  }
  async run(client, connection, guild) {
    console.log(guild);
    try {
      connection.query("INSERT INTO channels (guildId) VALUES (?)", [guild.id]);
      connection.query("INSERT INTO roles (guildId) VALUES (?)", [guild.id]);
      connection.query("INSERT INTO welcomeChannel (guildId) VALUES (?)", [
        guild.id,
      ]);
      client.logger.log(
        `"GUILD" ${guild.name} has just added the bot (id :${guild.id}, owner id: ${guild.ownerID}).`,
        "log"
      );
      client.slashCmds.forEach((cmd) => {
        client.slashCmds.get(cmd.name).run(client);
      });
    } catch (err) {
      console.log(err);
    }
  }
};
