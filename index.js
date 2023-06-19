const { Telegraf } = require('telegraf');
const { message } = require("telegraf/filters");
const express = require('express');
const bodyParser = require('body-parser');

const TeleBot = require('telebot');
require('dotenv').config()
const bot = new TeleBot({token: process.env.API_TOKEN});

const app = express();
app.use(bodyParser.json());

// Обработчик команды /start
// bot.start((ctx) => {
//   ctx.reply('Привет!');
// });

// Обработчик текстовых сообщений
bot.on('text', (msg) => msg.reply.text(msg.text));

// Настроим Express для обработки вебхука от Telegram
app.post(`/webhook`, (req, res) => {
  console.log('i got request on webhook', req);
  bot.handleUpdate(req.body);
  res.sendStatus(200);
});

// Запускаем Express сервер
app.listen(process.env.PORT || 3000, () => {
  console.log('Сервер запущен');
});

// Запускаем бота
bot.start();
