# boilerplate-telegram
Typescript boilerplate chat bot


### Steps to Use This Code
1. **Install required dependencies**:
   Run the following command to set up your project and install the required package:
   ```bash
   mkdir boilerplate-telegram-bot
   cd boilerplate-telegram-bot
   npm init -y
   npm install --save node-telegram-bot-api
   npm install --save-dev typescript @types/node
   npx tsc --init
   ```

2. **Replace the Bot Token**:
   - Get your bot token from [BotFather](https://t.me/BotFather) after you create a new bot.
   - Replace `your-telegram-bot-token` with the token provided by BotFather. 

3. **Run the Bot**:
   - Save this file as `bot.ts`.
   - Compile the project using the TypeScript compiler with:
     ```bash
     npx tsc
     ```
   - Run the bot using Node.js:
     ```bash
     node dist/bot.js
     ```

4. **Interact with the Bot**:
   - Open Telegram and search for your bot using the username you set with BotFather.
   - Send a message to your bot, and it will reply with a personalized response containing your name and the text you sent.

This code acts as a simple echo bot: it listens for text messages and replies with the same message, prefixed with a greeting. You can easily modify it to handle more complex interactions!
