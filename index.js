const TelegramBot = require('node-telegram-bot-api');

const API_TOKEN = '6215862830:AAFhUMn8HH4-EKw6vU0D604Y7pg_8rP1stQ';

const {Telegraf} = require("telegraf");

const bot = new Telegraf(API_TOKEN);

bot.on("message", async (ctx) => {
  // if (text === "/start") {
    ctx.reply("Hello, world!");
  // }
});

bot.launch();
