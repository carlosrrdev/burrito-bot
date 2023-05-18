require("dotenv").config();
const { REST, Routes, ApplicationCommandOptionType } = require("discord.js");

const commands = [
  {
    name: "hello",
    description: "Greets the user",
    options: [
      {
        name: "user",
        description: "The user to greet",
        type: ApplicationCommandOptionType.User,
        required: true,
      },
    ],
  },
];

const rest = new REST({ version: "10" }).setToken(process.env.TOKEN);

(async () => {
  try {
    console.log("Registering commands...");
    await rest.put(
      Routes.applicationGuildCommands(
        process.env.CLIENT_ID,
        process.env.GUILD_ID
      ),
      { body: commands }
    );
    console.log("Commands registered!");
  } catch (error) {
    console.log(error);
  }
})();
