const API_TOKEN = '6215862830:AAFhUMn8HH4-EKw6vU0D604Y7pg_8rP1stQ';


const bot = require("telegraf");

const bot = new bot({
  token: API_TOKEN,
});

bot.on("message", async (chat_id, text) => {
  if (text === "/start") {
    bot.sendMessage(chat_id, "Hello, world!");
  }
});

bot.start();