require("dotenv").config();
const { Client, IntentsBitField } = require("discord.js");
const { getDadGreeting, getMomGreeting } = require("./getGreetings");

const client = new Client({
  intents: [
    IntentsBitField.Flags.Guilds,
    IntentsBitField.Flags.GuildMembers,
    IntentsBitField.Flags.GuildMessages,
    IntentsBitField.Flags.MessageContent,
  ],
});

let burritoId;
client.on("ready", (client) => {
  burritoId = client.user.id;
});

// client.on("messageCreate", (message) => {
//   if (message.author.bot) {
//     return;
//   }
//   if (message.mentions.users) {
//     const users = message.mentions.users;
//     users.map((user) => {
//       if (user.id === burritoId) {
//         message.reply(
//           "Bonjour! Burrito bot at your service! 🫡 Interact with me using `/[command]`"
//         );
//       }
//     });
//   }
// });

client.on("interactionCreate", (interaction) => {
  if (!interaction.isChatInputCommand) return;

  if (interaction.commandName === "hello") {
    const { member } = interaction.options.get("user");
    if (member.id === "291688666948960256") {
      interaction.reply(getDadGreeting());
      return;
    }
    if (member.id === "866415179843239947") {
      interaction.reply(getMomGreeting());
      return;
    }
    return;
  }
});

// console.log(process.env.TOKEN);
client.login(process.env.TOKEN);
