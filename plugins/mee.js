const { System } = require("../lib/");   System({ pattern: "🐸", fromMe: true, desc: "self mention", type: "user", }, async (message, match) => { await message.client.sendMessage(message.chat, { text: `@${message.sender.split("@")[0]}`, mentions: [message.sender] }) });
@jontyop
Comment