const BaseEvent = require("../../utils/structures/BaseEvent");
module.exports = class guildAddEvent extends BaseEvent {
  constructor() {
    super("guildCreate");
  }
  async run(client, guild, connection) {
    try {
      connection.query("INSERT INTO channels (guildId) VALUES (?)", [guild.id]);
      console.log(
        `"GUILD" ${guild.name} a ajouté le bot (id :${guild.id} owner: ${guild.owner.tag}, id: ${guild.owner.id}).`
      );
    } catch (err) {
      console.log(err);
    }
  }
};
