const { Telegraf } = require('telegraf');
const { message } = require("telegraf/filters");
const express = require('express');
const bodyParser = require('body-parser');
require('dotenv').config()

const app = express();
app.use(bodyParser.json());

// Создаем экземпляр бота с указанием токена
const bot = new Telegraf(process.env.API_TOKEN);

// Обработчик команды /start
bot.start((ctx) => {
  ctx.reply('Привет!');
});

// Обработчик текстовых сообщений
bot.on(message('text'), (ctx) => {
  const text = ctx.message.text.toLowerCase();
    ctx.reply('Привет! я ненавижу телеграм');
});

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
bot.launch().then(() => {
  console.log('Бот успешно запущен');
}).catch((error) => {
  console.error('Ошибка при запуске бота:', error);
});
