const Discord = require("discord.js");
const {registerEvents} = require("./utils/handler");
const settings = require("../config");
// const {registerCommands} = require("./utils/handler");


const client = new Discord.Client();

client.on('ready', async () => {

});

(async () => {
    client.login(settings.token).catch((e) => console.log(e));
    client.commands = new Map();
    client.events = new Map();
    // await registerCommands(client, '../commands');
    await registerEvents(client, "../event");
})();
