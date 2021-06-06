const BaseEvent = require("../../base/BaseEvent");
module.exports = class GuildDeleteEvent extends BaseEvent {
  constructor() {
    super("guildDelete");
  }
  async run(client, connection, guild) {
    try {
      connection.query("DELETE FROM `leaveChannel` WHERE `guildId`=?", [
        guild.id,
      ]);
      connection.query("DELETE FROM `roles` WHERE `guildId`=?", [guild.id]);
      connection.query("DELETE FROM `modChannel` WHERE `guildId`=?", [
        guild.id,
      ]);
      connection.query("DELETE FROM `welcomeChannel` WHERE `guildId`=?", [
        guild.id,
      ]);
      client.logger.log(
        `"GUILD" ${guild.name} has just removed the bot (id :${guild.id}, owner id: ${guild.ownerID}) !`,
        "log"
      );
    } catch (err) {
      console.log(err);
    }
  }
};
