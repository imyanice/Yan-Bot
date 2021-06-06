const PostCommand = require("../../../base/PostGuildCommand");
const BasePostCommand = require("../../../base/BasePostCommand");

module.exports = class PostKickCommand extends BasePostCommand {
  constructor() {
    super("clear");
  }
  async run(client) {
    //post clear command to the api
    const command = new PostCommand();
    const data = {
      name: "clear",
      description: "Clear a number of message between 2 and 100.",

      options: [
        {
          name: "message",
          description: "Number of message to clear between 2 and 100.",
          type: 4,
          required: true,
        },
      ],
    };
    await command.post(client, data, client.config.guild_owner_id);
  }
};
