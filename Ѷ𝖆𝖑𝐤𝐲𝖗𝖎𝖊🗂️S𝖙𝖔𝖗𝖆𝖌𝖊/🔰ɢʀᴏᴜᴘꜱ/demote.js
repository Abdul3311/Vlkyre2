("|⬡═════════════════════════════════════════════════|❝ Ⓒ𝐕𝐥𝐤𝐲𝐫𝐞 ☊ ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴋʀᴀᴋɪɴᴢʟᴀʙ™ ❞|════════════════════════════════════════════════⬡|");
/* 
(𝐜)𝐕𝐚𝐥𝐤𝐲𝐫𝐢𝐞 𝐢𝐬 𝐚 𝐖𝐡𝐚𝐭𝐬𝐚𝐩𝐩 𝐌𝐮𝐥𝐭𝐢𝐏𝐮𝐫𝐩𝐨𝐬𝐞-𝐔𝐬𝐞𝐫𝐛𝐨𝐭 𝐰𝐢𝐭𝐡 𝐌𝐨𝐝𝐞𝐫𝐚𝐭𝐢𝐨𝐧,𝐀𝐮𝐭𝐨𝐦𝐚𝐭𝐢𝐨𝐧 𝐚𝐧𝐝 𝟏𝟎𝟎+ 𝐦𝐨𝐫𝐞 𝐜𝐨𝐦𝐦𝐚𝐧𝐝𝐬! 
*/
("|⬡═════════════════════════════════════════════════|❝ Ⓒ𝐕𝐥𝐤𝐲𝐫𝐞 ☊ ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴋʀᴀᴋɪɴᴢʟᴀʙ™ ❞|════════════════════════════════════════════════⬡|");
require("../../Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊🖋️L𝖎𝖇𝖗𝖆𝖗ყ/𝕷𝖆ყO𝖚𝖙");
const {
isUrl,
fetchJson,
getBuffer,
jsonformat,
GIFBufferToVideoBuffer,
getRandom,
} = require(`../../Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊🖋️L𝖎𝖇𝖗𝖆𝖗ყ/myfunc`);
const fs = require(`fs`);
const util = require(`util`);
const hxz = require(`hxz-api`);
const chalk = require(`chalk`);
const db = require(`quick.db`);
const axios = require(`axios`);
const canvacord = require(`canvacord`);
const { Character } = require(`mailist`);
const moment = require(`moment-timezone`);
const Carbon = require(`unofficial-carbon-now`);
const { exec, execSync } = require(`child_process`);
const { N𝖊𝖊𝖉__A𝖗𝖌𝖘 } = require("../../Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊🌀B𝖚𝖙𝖙𝖔𝖓𝖘/N𝖊𝖊𝖉__A𝖗𝖌𝖘");
const { Sticker, StickerTypes } = require(`wa-sticker-formatter`);
const { Group_Only } = require("../../Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊🧭S𝖜𝖎𝖙𝖈𝖍/Group_Only");
const { Image_Button } = require("../../Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊🌀B𝖚𝖙𝖙𝖔𝖓𝖘/Image_Button");
const { Video_Button } = require("../../Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊🌀B𝖚𝖙𝖙𝖔𝖓𝖘/Video_Button");
const { Bot_Not_Admin } = require("../../Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊🧭S𝖜𝖎𝖙𝖈𝖍/Bot_Not_Admin");
const { Sender_Not_Admin } = require("../../Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊🧭S𝖜𝖎𝖙𝖈𝖍/Sender_Not_Admin");
const YouTube_Regex =
/(?:http(?:s|):\/\/|)(?:(?:www\.|)youtube(?:\-nocookie|)\.com\/(?:watch\?.*(?:|\&)v=|embed\/|v\/)|youtu\.be\/)([-_0-9A-Za-z]{11})/;
/*════════════════════════════════════════════════════════════|▷   ʍǟɖɛ ɮʏ ӄʀǟӄɨռʐʟǟɮ™  ◁|════════════════════════════════════════════════════════════*/
var Present_Path = require(`path`);
var Script_Name = Present_Path.basename(__filename);
var Final_Name = Script_Name.slice(0, -3).toLowerCase();
/*════════════════════════════════════════════════════════════|▷   ʍǟɖɛ ɮʏ ӄʀǟӄɨռʐʟǟɮ™  ◁|════════════════════════════════════════════════════════════*/
exports.demote = async (
ӄ𝖚𝖓𝖆𝖎,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊,
A𝖗𝖌𝖘,
pushName,
fromMe,
F𝖚𝖑𝖑_A𝖗𝖌𝖘,
quoted,
mime,
isMedia,
isGroup,
groupMetadata,
groupName,
participants,
groupAdmins,
isBotAdmin,
isSenderAdmin,
isSenderTUF
) => {
/*════════════════════════════════════════════════════════════|▷   ʍǟɖɛ ɮʏ ӄʀǟӄɨռʐʟǟɮ™  ◁|════════════════════════════════════════════════════════════*/
if (!Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.isGroup) {
return await Group_Only(ӄ𝖚𝖓𝖆𝖎, Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊)
}
("⦓════════════════════════「  𝐕𝐚𝐥𝐤𝐲𝐫𝐢𝐞 𝐀𝐩𝐢®  」══════════]  ʍǟɖɛ ɮʏ ӄʀǟӄɨռʐʟǟɮ™  [══════════「  𝐕𝐚𝐥𝐤𝐲𝐫𝐢𝐞 𝐀𝐩𝐢®  」════════════════════════⦔");
if (!isSenderAdmin) {
return await N𝖊𝖊𝖉__A𝖗𝖌𝖘(
ӄ𝖚𝖓𝖆𝖎,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊,
`*❌ERROR:* This is an Admin only Command!

*⚡USAGE:* ${prefix}${Final_Name} <Tag the person>`
);
}
("⦓════════════════════════「  𝐕𝐚𝐥𝐤𝐲𝐫𝐢𝐞 𝐀𝐩𝐢®  」══════════]  ʍǟɖɛ ɮʏ ӄʀǟӄɨռʐʟǟɮ™  [══════════「  𝐕𝐚𝐥𝐤𝐲𝐫𝐢𝐞 𝐀𝐩𝐢®  」════════════════════════⦔");
if (!isBotAdmin) {
return await N𝖊𝖊𝖉__A𝖗𝖌𝖘(
ӄ𝖚𝖓𝖆𝖎,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊,
`*❌ERROR:* Bot not admin!

*⚡USAGE:* ${prefix}${Final_Name} <Tag the person>`
);
}
("⦓════════════════════════「  𝐕𝐚𝐥𝐤𝐲𝐫𝐢𝐞 𝐀𝐩𝐢®  」══════════]  ʍǟɖɛ ɮʏ ӄʀǟӄɨռʐʟǟɮ™  [══════════「  𝐕𝐚𝐥𝐤𝐲𝐫𝐢𝐞 𝐀𝐩𝐢®  」════════════════════════⦔");
try {
let mention = mentionByTag;
let users = (await mention[0]) || Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.msg.contextInfo.participant;
if (!users) {
return await N𝖊𝖊𝖉__A𝖗𝖌𝖘(
ӄ𝖚𝖓𝖆𝖎,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊,
`*❌ERROR:* Couldn't find any userID in context!

*⚡USAGE:* ${prefix}${Final_Name} <Tag the person>`
);
}
("⦓════════════════════════「  𝐕𝐚𝐥𝐤𝐲𝐫𝐢𝐞 𝐀𝐩𝐢®  」══════════]  ʍǟɖɛ ɮʏ ӄʀǟӄɨռʐʟǟɮ™  [══════════「  𝐕𝐚𝐥𝐤𝐲𝐫𝐢𝐞 𝐀𝐩𝐢®  」════════════════════════⦔");
await ӄ𝖚𝖓𝖆𝖎.groupParticipantsUpdate(Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.chatID, [users], `demote`);
await ӄ𝖚𝖓𝖆𝖎.sendMessage(Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.chatID, {
text: `OOPs!! looks like @${Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.sender} demoted @${
users.split(`@`)[0]
}`,
contextInfo: { mentionedJid: [users, Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.sender] },
});
("⦓════════════════════════「  𝐕𝐚𝐥𝐤𝐲𝐫𝐢𝐞 𝐀𝐩𝐢®  」══════════]  ʍǟɖɛ ɮʏ ӄʀǟӄɨռʐʟǟɮ™  [══════════「  𝐕𝐚𝐥𝐤𝐲𝐫𝐢𝐞 𝐀𝐩𝐢®  」════════════════════════⦔");
} catch {
return await N𝖊𝖊𝖉__A𝖗𝖌𝖘(
ӄ𝖚𝖓𝖆𝖎,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊,
`*❌ERROR:* Please tag the user you want to demote!

*⚡USAGE:* ${prefix}${Final_Name} <Tag the person>`
);
}
};
("|⬡═════════════════════════════════════════════════|❝ Ⓒ𝐕𝐥𝐤𝐲𝐫𝐞 ☊ ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴋʀᴀᴋɪɴᴢʟᴀʙ™ ❞|════════════════════════════════════════════════⬡|");
/* 
(𝐜)𝐕𝐚𝐥𝐤𝐲𝐫𝐢𝐞 𝐢𝐬 𝐚 𝐖𝐡𝐚𝐭𝐬𝐚𝐩𝐩 𝐌𝐮𝐥𝐭𝐢𝐏𝐮𝐫𝐩𝐨𝐬𝐞-𝐔𝐬𝐞𝐫𝐛𝐨𝐭 𝐰𝐢𝐭𝐡 𝐌𝐨𝐝𝐞𝐫𝐚𝐭𝐢𝐨𝐧,𝐀𝐮𝐭𝐨𝐦𝐚𝐭𝐢𝐨𝐧 𝐚𝐧𝐝 𝟏𝟎𝟎+ 𝐦𝐨𝐫𝐞 𝐜𝐨𝐦𝐦𝐚𝐧𝐝𝐬! 
*/
("|⬡═════════════════════════════════════════════════|❝ Ⓒ𝐕𝐥𝐤𝐲𝐫𝐞 ☊ ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴋʀᴀᴋɪɴᴢʟᴀʙ™ ❞|════════════════════════════════════════════════⬡|");
