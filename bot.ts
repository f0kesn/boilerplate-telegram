import TelegramBot from 'node-telegram-bot-api';

// Replace the token below with the Telegram bot token you receive from BotFather
const token = 'your-telegram-bot-token';

// Create a new Telegram bot instance
const bot = new TelegramBot(token, { polling: true });

// Listen for any messages sent to the bot
bot.on('message', (msg) => {
  const chatId = msg.chat.id;
  
  // Reply with a welcome message
  bot.sendMessage(chatId, `Hello, ${msg.from?.first_name || 'User'}! You said: ${msg.text}`);
  console.log(`Message received from ${msg.from?.first_name || 'User'}:`, msg.text);
});

// Optional: Log errors
bot.on('polling_error', (error) => {
  console.error('Polling error:', error);
});
