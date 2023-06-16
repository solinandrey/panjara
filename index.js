const express = require('express');
const bodyParser = require('body-parser');
const axios = require('axios');

const app = express();
app.use(bodyParser.json());

app.post('/webhook', (req, res) => {
  const { message } = req.body;
  
  if (message && message.text) {
    const chatId = message.chat.id;
    const text = message.text.toLowerCase();
    
    sendResponse(chatId, 'Привет!');
  }
  
  res.sendStatus(200);
});

app.listen(process.env.PORT || 3000, () => {
  console.log('Server is running');
});

// Функция для отправки ответного сообщения
function sendResponse(chatId, text) {
  axios.post(`https://api.telegram.org/bot${process.env.API_TOKEN}/sendMessage`, {
    chat_id: chatId,
    text: text,
  })
  .then((response) => {
    console.log('Message sent successfully');
  })
  .catch((error) => {
    console.error('Error sending message:', error);
  });
}
