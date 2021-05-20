const Yan = require("./base/Yan"),
  { registerEvents, registerCommands } = require("./utils/handler"),
  settings = require("./config");

const client = new Yan();

const init = async () => {
  await registerCommands(client, "../commands");
  await registerEvents(client, "../events");
  client.login(client.config.token);
};

init();
