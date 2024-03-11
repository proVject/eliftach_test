require('./src/helpers/envs.js')()
const config = require("./src/config");
const app = require('express')();
const PORT = process.env.PORT || 4040;
const BASE_URL = process.env.BASE_URL || 'localhost';
// const initMockData = require('./src/helpers/mock')

const initApi = () => {
  app.get('/', (req, res) => {
    res.status(200).send('OK')
  })

  config.express(app);
  config.routes(app);
  config.errors(app);

  app.listen(PORT, () => {
    console.log(`server is running on ${BASE_URL}:${PORT}`)
  })
}

const sequelize = require("./src/db.js");
const initRelationships = require('./src/models/relationships')

const start = async () => {
  try {
    initRelationships()
    await sequelize.authenticate();
    await sequelize.sync();
    // await initMockData()
    initApi()
  } catch (error) {
    console.log(error);
  }
};

start();

// const UserModel = require("./models");
// bot.on("message", async (msg) => {
//   const text = msg.text;
//   const chatId = msg.chat.id;
//
//   try {
//     if (text === "/start") {
//       let user = await UserModel.findOne({ chatId });
//       if (!user) {
//         await UserModel.create({ chatId });
//       }
//
//       await bot.sendSticker(
//         chatId,
//         "https://cdn.tlgrm.ru/stickers/ff6/4b6/ff64b611-aa7c-3603-b73c-7cd86d4b71dc/192/6.webp"
//       );
//       return bot.sendMessage(chatId, "Hello friend!");
//     }
//     if (text === "/info") {
//       const user = await UserModel.findOne({ chatId });
//       return bot.sendMessage(
//         chatId,
//         `your name is ${msg.from.first_name} ${msg.from.last_name}. Your Results: right - ${user.right}, wrong - ${user.wrong}`
//       );
//     }
//     if (text === "/game") {
//       return startGame(chatId);
//     }
//     return bot.sendMessage(chatId, "sorry, bro. I didn't understand you!");
//   } catch (error) {
//     console.log(error);
//     return bot.sendMessage(chatId, "something went wrong!");
//   }
// });
// bot.on("callback_query", async (msg) => {
//   const chatId = msg.message.chat.id;
//   const data = msg.data;
//   if (data === "/again") {
//     return startGame(chatId);
//   }
//   const user = await UserModel.findOne({ chatId });
//   console.log(user);
//   if (+data === chats[chatId]) {
//     user.right++;
//     await bot.sendMessage(chatId, "success!", againtOptions);
//   } else {
//     user.wrong++;
//     await bot.sendMessage(
//       chatId,
//       `wrong! it was ${chats[chatId]}`,
//       againtOptions
//     );
//   }
//   await user.save();
// });