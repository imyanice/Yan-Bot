const PostCommand = require("../../../base/PostGuildCommand");
const BasePostCommand = require("../../../base/BasePostCommand");

module.exports = class PostEmbedCommand extends BasePostCommand {
  constructor() {
    super("hello");
  }
  async run(client) {
    //Post hello  command to the api
    const command = new PostCommand();

    const data = {
      name: "hello",
      description: "Reply with Hello because I LOVE U !",
    };
    await command.post(client, data, client.config.guild_owner_id);
  }
};
