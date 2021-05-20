const BaseEvent = require("../../base/BaseEvent");
module.exports = class GuildAddEvent extends BaseEvent {
  constructor() {
    super("guildCreate");
  }
  async run(client, connection, guild) {
    console.log(guild);
    try {
      
      connection.query("INSERT INTO channels (guildId) VALUES (?)", [guild.id]);
      client.logger.log(
        `"GUILD" ${guild.name} has just added the bot (id :${guild.id}, owner id: ${guild.ownerID}).`, "log"
      );
    } catch (err) {
      console.log(err);
    }
  }
};
