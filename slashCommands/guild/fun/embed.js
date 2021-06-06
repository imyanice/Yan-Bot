const PostCommand = require("../../../base/PostGuildCommand");
const BasePostCommand = require("../../../base/BasePostCommand");

module.exports = class PostEmbedCommand extends BasePostCommand {
  constructor() {
    super("embed");
  }
  async run(client) {
    //post embed command to the api
    const command = new PostCommand();
    const data = {
      name: "embed",
      description: "Change your content to an embed",

      options: [
        {
          name: "content",
          description: "Content of the embed",
          type: 3,
          required: true,
        },
        {
          name: "color",
          description: "The color of the embed (in hexadecimal like: #ffffff).",
          type: 3,
          required: false,
        },
      ],
    };
    await command.post(client, data, client.config.guild_owner_id);
  }
};
