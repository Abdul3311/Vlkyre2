const Heroku = require("heroku-client");
const ℓιєηт = require("../../𝓜𝖎𝖟𝖚ӄ𝖎🧀𝓒𝓻𝓪𝓽𝓮/catch");
const { MessageType, Mimetype } = require(`@adiwajshing/baileys`);
const _𝔏𝔞𝔟_ = require(`../../𝓜𝖎𝖟𝖚ӄ𝖎🧀𝓒𝓻𝓪𝓽𝓮/_𝔏𝔞𝔟_`);
var heroku = new Heroku({
  token: _𝔏𝔞𝔟_.HEROKU_API,
});
var ᴋᴇɪᴇx = new RegExp(_𝔏𝔞𝔟_.FOXTROT, "g");
var ᴋᴇɪ = /\/\^\[(.*)+\]\/\g/g.exec(ᴋᴇɪᴇx)[1];
const 𝓜𝓮𝓮git = require("simple-git")();
// ⬡==================⬡-----------------⦿   𝐌𝐢𝐳𝐮𝐤𝐢™   ⦿-----------------⬡==================⬡
`😈𝗠𝗶𝘇𝘂𝗸𝗶 𝗪𝗵𝗮𝘁𝘀𝗮𝗽𝗽 𝗨𝘀𝗲𝗿𝗯𝗼𝘁😈💡𝗠𝗮𝗱𝗲 𝗕𝘆 𝗔 𝗡𝗼𝗼𝗯 𝗳𝗼𝗿 𝗣𝗿𝗼𝘀💡
🐙ᴀᴅᴠᴀɴᴄᴇᴅ ᴡʜᴀᴛꜱᴀᴘᴘ ᴜꜱᴇʀʙᴏᴛ ᴡɪᴛʜ 80+ ᴄᴏᴍᴍᴀɴᴅꜱ ꜰᴏʀ ʙᴏᴛʜ ᴘʀɪᴠᴀᴛᴇ ᴀɴᴅ ɢʀᴏᴜᴘ-ᴜꜱᴀɢᴇ🐙

GNU GENERAL PUBLIC LICENSE Version 3, 29 June 2007 Copyright (C) 2007 Free Software Foundation
Everyone is permitted to 𝗰𝗼𝗽𝘆 𝗮𝗻𝗱 𝗱𝗶𝘀𝘁𝗿𝗶𝗯𝘂𝘁𝗲 verbatim copies of this license document, 𝗯𝘂𝘁 𝗰𝗵𝗮𝗻𝗴𝗶𝗻𝗴 𝗶𝘁 𝗶𝘀 𝗻𝗼𝘁 𝗮𝗹𝗹𝗼𝘄𝗲𝗱.
—••÷[ 𝓜𝖎𝖟𝖚ӄ𝖎™ ]÷••—  ᴡʜᴀᴛꜱᴀᴘᴘ ᴜꜱᴇʀʙᴏᴛ has been licensed under GNU General Public License
𝐂𝐨𝐩𝐲𝐫𝐢𝐠𝐡𝐭 (𝐂) 𝟐𝟎𝟐𝟏 𝗞𝗿𝗮𝗸𝗶𝗻𝘇 | 𝗞𝗿𝗮𝗸𝗶𝗻𝘇𝗟𝗮𝗯 | 𝗞𝗿𝗮𝗸𝗶𝗻𝘇𝗕𝗼𝘁`;
// ⬡==================⬡-----------------⦿   𝐌𝐢𝐳𝐮𝐤𝐢™   ⦿-----------------⬡==================⬡
module.exports = {
  name: `update`,
  description: `ᴛʜɪꜱ ᴄᴏᴍᴍᴀɴᴅ ᴄᴀɴ ʙᴇ ᴜꜱᴇᴅ ᴛᴏ ᴜᴘᴅᴀᴛᴇ ᴛʜᴇ ʙᴏᴛ`,
  async handle(𝓚𝓻𝓪𝓴𝓲𝓷𝔃, chat, 𝓜𝖎𝖟𝖚ӄ𝖎, arg) {
    var Sender = 𝓜𝖎𝖟𝖚ӄ𝖎.sender;
    var personsending = Sender.substring(0, Sender.length - 15);
    if (!𝓜𝖎𝖟𝖚ӄ𝖎.fromMe) {
      return await 𝓚𝓻𝓪𝓴𝓲𝓷𝔃
        .sendMessage(
          𝓜𝖎𝖟𝖚ӄ𝖎.chatId,
          {
            url: _𝔏𝔞𝔟_.ERROR,
          },
          MessageType.image,
          {
            mimetype: Mimetype.png,
            contextInfo: {
              mentionedJid: [𝓜𝖎𝖟𝖚ӄ𝖎.sender],
            },
            caption: `⬡••• *𝐌𝐢𝐳𝐮𝐤𝐢 by ₭𝔯𝔞ӄ𝔦𝔫𝔷𝔏𝔞𝔟* •••⦿

*•@${personsending}*,⚠️𝙉𝙞𝙘𝙚 𝙏𝙧𝙮 𝘽𝙪𝙩 𝙊𝙣𝙡𝙮 𝙈𝙮 𝙊𝙬𝙣𝙚𝙧 𝘾𝙖𝙣 𝙪𝙨𝙚 𝙩𝙝𝙖𝙩 𝙘𝙤𝙢𝙢𝙖𝙣𝙙!`,
          }
        )
        .catch((error) => ℓιєηт.catch(error, 𝓚𝓻𝓪𝓴𝓲𝓷𝔃, 𝓜𝖎𝖟𝖚ӄ𝖎));
    }
    await 𝓚𝓻𝓪𝓴𝓲𝓷𝔃
      .sendMessage(
        𝓜𝖎𝖟𝖚ӄ𝖎.chatId,
        {
          url: _𝔏𝔞𝔟_.UPT,
        },
        MessageType.image,
        {
          mimetype: Mimetype.png,
          contextInfo: {
            mentionedJid: [𝓜𝖎𝖟𝖚ӄ𝖎.sender],
          },
          caption: `⬡••• *𝐌𝐢𝐳𝐮𝐤𝐢 by ₭𝔯𝔞ӄ𝔦𝔫𝔷𝔏𝔞𝔟* •••⦿

*•@${personsending}*,ʏᴏᴜʀ 𝓜𝖎𝖟𝖚ӄ𝖎 ʙᴏᴛ ɪꜱ ɴᴏᴡ ᴜᴘᴅᴀᴛɪɴɢ.ᴘʟᴇᴀꜱᴇ ᴡᴀɪᴛ ꜰᴏʀ 30-60ꜱᴇᴄ

⚠️𝗜𝗳 𝗶𝘁 𝘄𝗮𝘀 𝗮 𝗕𝗜𝗚 ⚡𝐌𝐢𝐳𝐮𝐤𝐢™ 𝘂𝗽𝗱𝗮𝘁𝗲,
𝘁𝗵𝗲𝗻 𝗣𝗹𝗲𝗮𝘀𝗲 𝗿𝗲𝗱𝗲𝗽𝗹𝗼𝘆 𝘆𝗼𝘂𝗿 𝗯𝗼𝘁!`,
        }
      )
      .catch((error) => ℓιєηт.catch(error, 𝓚𝓻𝓪𝓴𝓲𝓷𝔃, 𝓜𝖎𝖟𝖚ӄ𝖎));
    heroku
      .delete("/apps/" + _𝔏𝔞𝔟_.HEROKU_BOT_NAME + "/dynos/" + "worker")
      .then((x) => console.log(x));
  },
};
