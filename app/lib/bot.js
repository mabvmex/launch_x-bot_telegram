const TelegramBot = require("node-telegram-bot-api");
const ExplorerController = require("./controllers/ExplorerControllers");
require("dotenv").config();

// replace the value below with the Telegram token you receive from @BotFather

// eslint-disable-next-line no-undef
const token = process.env.TOKEN;

// Create a bot that uses 'polling' to fetch new updates
const bot = new TelegramBot(token, { polling: true });

// Matches "/echo [whatever]"
bot.onText(/\/echo (.+)/, (msg, match) => {
    // 'msg' is the received Message from Telegram
    // 'match' is the result of executing the regexp above on the text content
    // of the message

    const chatId = msg.chat.id;
    const resp = match[1]; // the captured "whatever"

    // send back the matched "whatever" to the chat
    bot.sendMessage(chatId, resp);
});

// Listen for any kind of message. There are different kinds of
// messages.
bot.on("message", (msg) => {
    const chatId = msg.chat.id;
    const numberToApplyFb = parseInt(msg.text);
    const missionToApplyFb = msg.text;

    if (!isNaN(numberToApplyFb)) {
        const fizzbuzzTrick =
            ExplorerController.getResultInNumberOnly(numberToApplyFb);
        const responseBot = `Tu número es: ${numberToApplyFb}.\nValidación: ${fizzbuzzTrick}`;
        bot.sendMessage(chatId, responseBot);
    } else if (missionToApplyFb === "node" || missionToApplyFb === "java") {
        const fizzbuzzTrick =
            ExplorerController.getExplorerByMission(missionToApplyFb);

        const splitWoopas = fizzbuzzTrick.map((item) => item.split(",")).flat();
        const woopasSplitted = splitWoopas.join(", ");

        const responseBot = `Tu misión es: "${missionToApplyFb.toUpperCase()}".\nValidación: ${woopasSplitted}`;

        bot.sendMessage(chatId, responseBot);
    } else {
        bot.sendMessage(
            chatId,
            "Envía un número (número primo de 3 y/o 5) o una palabra válida (node / java)"
        );
    }
});
