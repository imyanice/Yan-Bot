const PostCommand = require("../../../base/PostGuildCommand");
const BasePostCommand = require("../../../base/BasePostCommand");

module.exports = class PostKickCommand extends BasePostCommand {
  constructor() {
    super("kick");
  }
  async run(client) {
    //post kick command to the api
    const command = new PostCommand();
    const data = {
      name: "kick",
      description: "Kick a user",

      options: [
        {
          name: "user",
          description: "User to kick from this guild.",
          type: 6,
          required: true,
        },
        {
          name: "reason",
          description: "Why do you want to kick this user ?",
          type: 3,
        },
      ],
    };
    command.post(client, data, client.config.guild_owner_id);
  }
};
