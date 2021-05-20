const BaseCommand = require("../../utils/structures/BaseCommand");

module.exports = class Hi extends BaseCommand {
  constructor() {
    super("hello", "fun", []);
  }
  async run(client, interaction, args) {
    client.api.interactions(interaction.id, interaction.token).callback.post({
      data: {
        type: 4,
        data: {
          content: "Hello world !",
        },
      },
    });
  }
};
