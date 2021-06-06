const PostCommand = require("../../../base/PostGuildCommand");
const BasePostCommand = require("../../../base/BasePostCommand");

module.exports = class PostModLogCommand extends BasePostCommand {
  constructor() {
    super("modlog");
  }
  async run(client) {
    //Post hello  command to the api
    const command = new PostCommand();

    const data = {
      name: "modlog",
      description: "Show different options for the mod channels.",
      options: [
        {
          name: "channel",
          description: "The channel to set.",
          type: 7,
        },
      ],
    };
    await command.post(client, data, client.config.guild_owner_id);
  }
};
