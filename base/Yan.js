const { Client, Intents } = require("discord.js");
const { GiveawaysManager } = require("discord-giveaways");

class Yan extends Client {
  constructor() {
    super({
      intents: [
				Intents.FLAGS.GUILDS,
				Intents.FLAGS.GUILD_MEMBERS,
				Intents.FLAGS.GUILD_MESSAGES,
				Intents.FLAGS.GUILD_MESSAGE_REACTIONS,
				Intents.FLAGS.GUILD_VOICE_STATES,
				Intents.FLAGS.DIRECT_MESSAGES
			]
    });
    
    this.config = require("../config");
        this.commands = new Map;
    this.events = new Map;
    this.giveawaysManager = new GiveawaysManager(this, {
      storage: './giveaways.json',
    updateCountdownEvery: 10000,
    default: {
        botsCanWin: false,
        exemptPermissions: ['MANAGE_MESSAGES', 'ADMINISTRATOR'],
        embedColor: '#FF0000',
        reaction: '🎉'
    },
    

  });
}};

module.exports = Yan;