const Discord = require("discord.js");
const { registerEvents, registerCommands } = require("./utils/handler");
const settings = require("../config");

const client = new Discord.Client({intents: ["DIRECT_MESSAGE_TYPING", "GUILD_MESSAGES", "GUILD_MEMBERS", "GUILDS"]});

(async () => {
  client.login(settings.token);
  client.commands = new Map();
  client.events = new Map();
  await registerCommands(client, "../commands");
  await registerEvents(client, "../event");
})();
