// ⬡==================⬡-----------------⦿   𝐌𝐢𝐳𝐮𝐤𝐢™   ⦿-----------------⬡==================⬡
`😈𝗠𝗶𝘇𝘂𝗸𝗶 𝗪𝗵𝗮𝘁𝘀𝗮𝗽𝗽 𝗨𝘀𝗲𝗿𝗯𝗼𝘁😈💡𝗠𝗮𝗱𝗲 𝗕𝘆 𝗔 𝗡𝗼𝗼𝗯 𝗳𝗼𝗿 𝗣𝗿𝗼𝘀💡
🐙ᴀᴅᴠᴀɴᴄᴇᴅ ᴡʜᴀᴛꜱᴀᴘᴘ ᴜꜱᴇʀʙᴏᴛ ᴡɪᴛʜ 80+ ᴄᴏᴍᴍᴀɴᴅꜱ ꜰᴏʀ ʙᴏᴛʜ ᴘʀɪᴠᴀᴛᴇ ᴀɴᴅ ɢʀᴏᴜᴘ-ᴜꜱᴀɢᴇ🐙

GNU GENERAL PUBLIC LICENSE Version 3, 29 June 2007 Copyright (C) 2007 Free Software Foundation
Everyone is permitted to 𝗰𝗼𝗽𝘆 𝗮𝗻𝗱 𝗱𝗶𝘀𝘁𝗿𝗶𝗯𝘂𝘁𝗲 verbatim copies of this license document, 𝗯𝘂𝘁 𝗰𝗵𝗮𝗻𝗴𝗶𝗻𝗴 𝗶𝘁 𝗶𝘀 𝗻𝗼𝘁 𝗮𝗹𝗹𝗼𝘄𝗲𝗱.
—••÷[ 𝓜𝖎𝖟𝖚ӄ𝖎™ ]÷••—  ᴡʜᴀᴛꜱᴀᴘᴘ ᴜꜱᴇʀʙᴏᴛ has been licensed under GNU General Public License
𝐂𝐨𝐩𝐲𝐫𝐢𝐠𝐡𝐭 (𝐂) 𝟐𝟎𝟐𝟏 𝗞𝗿𝗮𝗸𝗶𝗻𝘇 | 𝗞𝗿𝗮𝗸𝗶𝗻𝘇𝗟𝗮𝗯 | 𝗞𝗿𝗮𝗸𝗶𝗻𝘇𝗕𝗼𝘁`;
// ⬡==================⬡-----------------⦿   𝐌𝐢𝐳𝐮𝐤𝐢™   ⦿-----------------⬡==================⬡
const { MessageType, Mimetype } = require(`@adiwajshing/baileys`);
const _𝔏𝔞𝔟_ = require("./_𝔏𝔞𝔟_");
require("python-format-js");
exports.catch = async (error, 𝓚𝓻𝓪𝓴𝓲𝓷𝔃, 𝓜𝖎𝖟𝖚ӄ𝖎) => {
  var str = 𝓜𝖎𝖟𝖚ӄ𝖎.sender;
  var newString = str.substring(0, str.length - 15);
  await 𝓚𝓻𝓪𝓴𝓲𝓷𝔃.sendMessage(
    𝓜𝖎𝖟𝖚ӄ𝖎.logGroup,
    `⬡••• *𝐌𝐢𝐳𝐮𝐤𝐢 by ₭𝔯𝔞ӄ𝔦𝔫𝔷𝔏𝔞𝔟* •••⦿

⚠️𝗘𝗿𝗿𝗼𝗿⚠️
${error}

シ︎🛸𝐆𝐫𝐨𝐮𝐩: ${_𝔏𝔞𝔟_.HASH}`,
    MessageType.text,
    {
      contextInfo: {
        mentionedJid: [𝓜𝖎𝖟𝖚ӄ𝖎.sender],
      },
    }
  );
  await 𝓚𝓻𝓪𝓴𝓲𝓷𝔃.sendMessage(
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


*•@${newString}*, 𝙏𝙝𝙚𝙧𝙚 𝙒𝙖𝙨 𝘼𝙣 𝙀𝙧𝙧𝙤𝙧.𝙋𝙡𝙚𝙖𝙨𝙚 𝙩𝙧𝙮 𝘼𝙜𝙖𝙞𝙣 𝙇𝙖𝙩𝙚𝙧!

シ︎🛸𝐆𝐫𝐨𝐮𝐩: ${_𝔏𝔞𝔟_.HASH}`,
    }
  );
};
// ⬡==================⬡-----------------⦿   𝐌𝐢𝐳𝐮𝐤𝐢™   ⦿-----------------⬡==================⬡
`😈𝗠𝗶𝘇𝘂𝗸𝗶 𝗪𝗵𝗮𝘁𝘀𝗮𝗽𝗽 𝗨𝘀𝗲𝗿𝗯𝗼𝘁😈💡𝗠𝗮𝗱𝗲 𝗕𝘆 𝗔 𝗡𝗼𝗼𝗯 𝗳𝗼𝗿 𝗣𝗿𝗼𝘀💡
🐙ᴀᴅᴠᴀɴᴄᴇᴅ ᴡʜᴀᴛꜱᴀᴘᴘ ᴜꜱᴇʀʙᴏᴛ ᴡɪᴛʜ 80+ ᴄᴏᴍᴍᴀɴᴅꜱ ꜰᴏʀ ʙᴏᴛʜ ᴘʀɪᴠᴀᴛᴇ ᴀɴᴅ ɢʀᴏᴜᴘ-ᴜꜱᴀɢᴇ🐙

GNU GENERAL PUBLIC LICENSE Version 3, 29 June 2007 Copyright (C) 2007 Free Software Foundation
Everyone is permitted to 𝗰𝗼𝗽𝘆 𝗮𝗻𝗱 𝗱𝗶𝘀𝘁𝗿𝗶𝗯𝘂𝘁𝗲 verbatim copies of this license document, 𝗯𝘂𝘁 𝗰𝗵𝗮𝗻𝗴𝗶𝗻𝗴 𝗶𝘁 𝗶𝘀 𝗻𝗼𝘁 𝗮𝗹𝗹𝗼𝘄𝗲𝗱.
—••÷[ 𝓜𝖎𝖟𝖚ӄ𝖎™ ]÷••—  ᴡʜᴀᴛꜱᴀᴘᴘ ᴜꜱᴇʀʙᴏᴛ has been licensed under GNU General Public License
𝐂𝐨𝐩𝐲𝐫𝐢𝐠𝐡𝐭 (𝐂) 𝟐𝟎𝟐𝟏 𝗞𝗿𝗮𝗸𝗶𝗻𝘇 | 𝗞𝗿𝗮𝗸𝗶𝗻𝘇𝗟𝗮𝗯 | 𝗞𝗿𝗮𝗸𝗶𝗻𝘇𝗕𝗼𝘁`;
// ⬡==================⬡-----------------⦿   𝐌𝐢𝐳𝐮𝐤𝐢™   ⦿-----------------⬡==================⬡
