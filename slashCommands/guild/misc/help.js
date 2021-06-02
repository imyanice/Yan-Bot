const PostCommand = require("../../../base/PostGuildCommand");
const BasePostCommand = require("../../../base/BasePostCommand");

module.exports = class PostHelpCommand extends BasePostCommand {
  constructor() {
    super("help");
  }
  async run(client) {
    //Post hello  command to the api
    const command = new PostCommand();

    const data = {
      name: "help",
      description: "Show the help menu.",
      options: [
        {
          name: "category",
          description: "The category of the command you're looking for. ",
          type: 3,
        },
      ],
    };
    command.post(client, data, client.config.guild_owner_id);
  }
};
