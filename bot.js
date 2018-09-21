const Discord = require("discord.js");
const client = new Discord.Client();
const config = require("./config.json");


client.on("ready", () => {
  console.log(`Bot foi iniciado, com ${client.users.size} usuário, em ${client.channels.size} canais, em ${client.guilds.size} servidores.`);
  client.user.setGame(`Eu estou em ${client.guilds.size} servidores`);
});

client.loguin(process.env.BOT_TOKEN);
