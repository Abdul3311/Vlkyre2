`|⬡════════════════════════════════════════════|                            |═══════════════════════════════════════════⬡|`;
`|                                                                                                                        |`;
`|        (𝐜)𝐂𝐨𝐫𝐥𝐞𝐱𝐚𝐀𝐈 𝐢𝐬 𝐚 𝐖𝐡𝐚𝐭𝐬𝐚𝐩𝐩 𝐌𝐮𝐥𝐭𝐢𝐏𝐮𝐫𝐩𝐨𝐬𝐞-𝐔𝐬𝐞𝐫𝐛𝐨𝐭 𝐰𝐢𝐭𝐡 𝐌𝐨𝐝𝐞𝐫𝐚𝐭𝐢𝐨𝐧,𝐀𝐮𝐭𝐨𝐦𝐚𝐭𝐢𝐨𝐧 𝐚𝐧𝐝 𝟏𝟎𝟎+ 𝐦𝐨𝐫𝐞 𝐜𝐨𝐦𝐦𝐚𝐧𝐝𝐬!            |`;
`|                                                                                                                        |`;
`|⬡════════════════════════════════════════════|                            |═══════════════════════════════════════════⬡|`;
const { MessageType } = require(`@adiwajshing/baileys`);
const Downloader = require(`nodejs-file-downloader`);
const ᴄᴏʀʟᴇxᴀ_Buttons = require(`./ᴄᴏʀʟᴇxᴀ_Buttons`);
const { YouTube_Video } = require(`./youmaker`);
const { servers, v2mate } = require("./v2mate");
const _𝔏𝔞𝔟_ = require(`./_𝔏𝔞𝔟_`);
const ꜰᴜᴄᴋ = require(`./oShit`);
const vers = require(`../package.json`);
var ᴋᴇɪᴇx = new RegExp(_𝔏𝔞𝔟_.FOXTROT, `g`);
var ᴋᴇɪ = /\/\^\[(.*)+\]\/\g/g.exec(ᴋᴇɪᴇx)[1];
const cleanRF = require(`./cleanRF`);
const TinyURL = require("tinyurl");
const fs = require(`fs`);
`|⬡════════════════════════════════════════════|   ◤Ⓒ𝐂𝐨𝐫𝐥𝐞𝐱𝐚 ⧱ 𝐊𝐫𝐚𝐤𝐢𝐧𝐳𝐋𝐚𝐛™ ⧱ 𝟐𝟎𝟐𝟐◢   |═══════════════════════════════════════════⬡|`;
exports.FFmpegVideo = async (ӄ𝖗𝖆ӄ𝖎𝖓𝖟𝕷𝖆𝖇, 𝖈𝖔𝖗𝖑𝖊𝖝𝖆, chat, Found, userBadge) => {
var աɦօֆɛռȶɦǟȶ = 𝖈𝖔𝖗𝖑𝖊𝖝𝖆.sender;
const defaultnm = 𝖈𝖔𝖗𝖑𝖊𝖝𝖆.commandName;
var աɦօֆɛռȶɦǟȶռʊʍ = աɦօֆɛռȶɦǟȶ
.substring(0, աɦօֆɛռȶɦǟȶ.length - 15)
.replace(/[+ ]/g, "");
var FFmpegFile = `./ᴄᴏʀʟᴇxᴀ☕ꜱʜᴏᴘ/${chat.key.id}.mp4`;
const FinalName = defaultnm.charAt(0).toUpperCase() + defaultnm.slice(1);
`|⬡════════════════════════════════════════════|   ◤Ⓒ𝐂𝐨𝐫𝐥𝐞𝐱𝐚 ⧱ 𝐊𝐫𝐚𝐤𝐢𝐧𝐳𝐋𝐚𝐛™ ⧱ 𝟐𝟎𝟐𝟐◢   |═══════════════════════════════════════════⬡|`;
YouTube_Video(Found.url).then(async (res) => {
try {
const { dl_link, thumb, title, filesizeF, filesize } = res;
TinyURL.shorten(dl_link).then(
async function (DirectFile) {
const downloader = await new Downloader({
url: DirectFile,
directory: `ᴄᴏʀʟᴇxᴀ☕ꜱʜᴏᴘ`,
fileName: `${chat.key.id}.mp4`,
cloneFiles: false,
});
try {
await downloader.download();
console.log(
`⬡═══════════════════| 🥂𝐃𝐨𝐰𝐧𝐥𝐨𝐚𝐝 𝐅𝐢𝐧𝐢𝐬𝐞𝐝🥂 |═══════════════════⬡`
);
} catch (Error) {
console.log(`⬡═══════════════════| 🐞𝐄𝐫𝐫𝐨𝐫: ` + Error);
userBadge.Limits = userBadge.Limits + 1;
await userBadge
.save()
.catch((Error) => ꜰᴜᴄᴋ.catch(Error, ӄ𝖗𝖆ӄ𝖎𝖓𝖟𝕷𝖆𝖇, 𝖈𝖔𝖗𝖑𝖊𝖝𝖆, chat));
return ꜰᴜᴄᴋ.catch(Error, ӄ𝖗𝖆ӄ𝖎𝖓𝖟𝕷𝖆𝖇, 𝖈𝖔𝖗𝖑𝖊𝖝𝖆, chat);
}
`|⬡════════════════════════════════════════════|   ◤Ⓒ𝐂𝐨𝐫𝐥𝐞𝐱𝐚 ⧱ 𝐊𝐫𝐚𝐤𝐢𝐧𝐳𝐋𝐚𝐛™ ⧱ 𝟐𝟎𝟐𝟐◢   |═══════════════════════════════════════════⬡|`;
try {
const media = await ӄ𝖗𝖆ӄ𝖎𝖓𝖟𝕷𝖆𝖇.prepareMessage(
𝖈𝖔𝖗𝖑𝖊𝖝𝖆.chatId,
fs.readFileSync(FFmpegFile),
MessageType.video,
{ mimetype: "video/mp4" }
);
await ӄ𝖗𝖆ӄ𝖎𝖓𝖟𝕷𝖆𝖇
.sendMessage(
𝖈𝖔𝖗𝖑𝖊𝖝𝖆.chatId,
{
contentText: `🪶 𝐇𝐞𝐲: @${աɦօֆɛռȶɦǟȶռʊʍ},

╔════◇🔱𝐂𝐨𝐦𝐦𝐚𝐧𝐝: _${ᴋᴇɪ}${FinalName}_
║
║🍻 𝗧𝗶𝘁𝗹𝗲: ${Found.title}
║🙈 𝗩𝗶𝗲𝘄𝘀: ${Found.views}
║⏰ 𝗗𝘂𝗿𝗮𝘁𝗶𝗼𝗻: ${Found.timestamp}
║✒️ 𝗔𝘂𝘁𝗵𝗼𝗿: ${Found.author.name}
║✒️ 𝗥𝗲𝗹𝗲𝗮𝘀𝗲𝗱: ${Found.ago}
║📜 𝐃𝐞𝐬𝐜𝐫𝐢𝐩𝐭𝐢𝐨𝐧: ${Found.description}
║🦋 𝗗𝗶𝗿𝗲𝗰𝘁-𝗗𝗹: ${DirectFile}
║🔗 𝗟𝗶𝗻𝗸: ${Found.url}
╚════════════╝`,
footerText: `◤Ⓒ𝐂𝐨𝐫𝐥𝐞𝐱𝐚 • _𝟐𝟎𝟐𝟐_ • 𝐊𝐫𝐚𝐤𝐢𝐧𝐳𝐋𝐚𝐛™◢ `,
buttons: [
{
buttonId: `${ᴋᴇɪ}help`,
buttonText: { displayText: `${ᴋᴇɪ}help` },
type: 1,
},
],
headerType: 5,
videoMessage: media.message.videoMessage,
},
MessageType.buttonsMessage,
{
quoted: chat,
contextInfo: { mentionedJid: [աɦօֆɛռȶɦǟȶ] },
}
)
.catch((Error) => ꜰᴜᴄᴋ.catch(Error, ӄ𝖗𝖆ӄ𝖎𝖓𝖟𝕷𝖆𝖇, 𝖈𝖔𝖗𝖑𝖊𝖝𝖆, chat));
await cleanRF.cleanRF(FFmpegFile);
} catch (Error) {
console.log(`⬡═══════════════════| 🐞𝐄𝐫𝐫𝐨𝐫: ` + Error);
userBadge.Limits = userBadge.Limits + 1;
await userBadge
.save()
.catch((Error) => ꜰᴜᴄᴋ.catch(Error, ӄ𝖗𝖆ӄ𝖎𝖓𝖟𝕷𝖆𝖇, 𝖈𝖔𝖗𝖑𝖊𝖝𝖆, chat));
return ꜰᴜᴄᴋ.catch(Error, ӄ𝖗𝖆ӄ𝖎𝖓𝖟𝕷𝖆𝖇, 𝖈𝖔𝖗𝖑𝖊𝖝𝖆, chat);
}
},
async function (Error) {
console.log(`⬡═══════════════════| 🐞𝐄𝐫𝐫𝐨𝐫: ` + Error);
userBadge.Limits = userBadge.Limits + 1;
await userBadge
.save()
.catch((Error) => ꜰᴜᴄᴋ.catch(Error, ӄ𝖗𝖆ӄ𝖎𝖓𝖟𝕷𝖆𝖇, 𝖈𝖔𝖗𝖑𝖊𝖝𝖆, chat));
return ꜰᴜᴄᴋ.catch(Error, ӄ𝖗𝖆ӄ𝖎𝖓𝖟𝕷𝖆𝖇, 𝖈𝖔𝖗𝖑𝖊𝖝𝖆, chat);
}
);
`|⬡════════════════════════════════════════════|   ◤Ⓒ𝐂𝐨𝐫𝐥𝐞𝐱𝐚 ⧱ 𝐊𝐫𝐚𝐤𝐢𝐧𝐳𝐋𝐚𝐛™ ⧱ 𝟐𝟎𝟐𝟐◢   |═══════════════════════════════════════════⬡|`;
} catch (Error) {
let { dl_link, thumb, title, filesize, filesizeF } = await v2mate(
Found.url,
"en68"
);
TinyURL.shorten(dl_link).then(
async function (DirectFile) {
require(`child_process`).exec(
`ffmpeg -i "${DirectFile}" "${FFmpegFile}"`,
async (Error) => {
if (Error) {
console.log(
`⬡═══════════════════| 🔺𝐅𝐅𝐦𝐩𝐞𝐠 𝐄𝐫𝐫𝐨𝐫🔺 |═══════════════════⬡` +
Error
);
userBadge.Limits = userBadge.Limits + 1;
await userBadge
.save()
.catch((Error) =>
ꜰᴜᴄᴋ.catch(Error, ӄ𝖗𝖆ӄ𝖎𝖓𝖟𝕷𝖆𝖇, 𝖈𝖔𝖗𝖑𝖊𝖝𝖆, chat)
);
return ꜰᴜᴄᴋ.catch(Error, ӄ𝖗𝖆ӄ𝖎𝖓𝖟𝕷𝖆𝖇, 𝖈𝖔𝖗𝖑𝖊𝖝𝖆, chat);
}
console.log(
`⬡═══════════════════| 🥂𝐃𝐨𝐰𝐧𝐥𝐨𝐚𝐝 𝐅𝐢𝐧𝐢𝐬𝐞𝐝🥂 |═══════════════════⬡`
);
try {
const media = await ӄ𝖗𝖆ӄ𝖎𝖓𝖟𝕷𝖆𝖇.prepareMessage(
𝖈𝖔𝖗𝖑𝖊𝖝𝖆.chatId,
fs.readFileSync(FFmpegFile),
MessageType.video,
{ mimetype: "video/mp4" }
);
await ӄ𝖗𝖆ӄ𝖎𝖓𝖟𝕷𝖆𝖇
.sendMessage(
𝖈𝖔𝖗𝖑𝖊𝖝𝖆.chatId,
{
contentText: `🪶 𝐇𝐞𝐲: @${աɦօֆɛռȶɦǟȶռʊʍ},

╔════◇🔱𝐂𝐨𝐦𝐦𝐚𝐧𝐝: _${ᴋᴇɪ}${FinalName}_
║
║🍻 𝗧𝗶𝘁𝗹𝗲: ${Found.title}
║🙈 𝗩𝗶𝗲𝘄𝘀: ${Found.views}
║⏰ 𝗗𝘂𝗿𝗮𝘁𝗶𝗼𝗻: ${Found.timestamp}
║✒️ 𝗔𝘂𝘁𝗵𝗼𝗿: ${Found.author.name}
║✒️ 𝗥𝗲𝗹𝗲𝗮𝘀𝗲𝗱: ${Found.ago}
║📜 𝐃𝐞𝐬𝐜𝐫𝐢𝐩𝐭𝐢𝐨𝐧: ${Found.description}
║🦋 𝗗𝗶𝗿𝗲𝗰𝘁-𝗗𝗹: ${DirectFile}
║🔗 𝗟𝗶𝗻𝗸: ${Found.url}
╚════════════╝`,
footerText: `◤Ⓒ𝐂𝐨𝐫𝐥𝐞𝐱𝐚 • _𝟐𝟎𝟐𝟐_ • 𝐊𝐫𝐚𝐤𝐢𝐧𝐳𝐋𝐚𝐛™◢ `,
buttons: [
{
buttonId: `${ᴋᴇɪ}help`,
buttonText: { displayText: `${ᴋᴇɪ}help` },
type: 1,
},
],
headerType: 5,
videoMessage: media.message.videoMessage,
},
MessageType.buttonsMessage,
{
quoted: chat,
contextInfo: { mentionedJid: [աɦօֆɛռȶɦǟȶ] },
}
)
.catch((Error) =>
ꜰᴜᴄᴋ.catch(Error, ӄ𝖗𝖆ӄ𝖎𝖓𝖟𝕷𝖆𝖇, 𝖈𝖔𝖗𝖑𝖊𝖝𝖆, chat)
);
return await cleanRF.cleanRF(FFmpegFile);
} catch (Error) {
console.log(
`⬡═══════════════════| 🔺𝐅𝐅𝐦𝐩𝐞𝐠 𝐄𝐫𝐫𝐨𝐫🔺 |═══════════════════⬡` +
Error
);
userBadge.Limits = userBadge.Limits + 1;
await userBadge
.save()
.catch((Error) =>
ꜰᴜᴄᴋ.catch(Error, ӄ𝖗𝖆ӄ𝖎𝖓𝖟𝕷𝖆𝖇, 𝖈𝖔𝖗𝖑𝖊𝖝𝖆, chat)
);
return ꜰᴜᴄᴋ.catch(Error, ӄ𝖗𝖆ӄ𝖎𝖓𝖟𝕷𝖆𝖇, 𝖈𝖔𝖗𝖑𝖊𝖝𝖆, chat);
}
}
);
},
async function (Error) {
console.log(`⬡═══════════════════| 🐞𝐄𝐫𝐫𝐨𝐫: ` + Error);
userBadge.Limits = userBadge.Limits + 1;
await userBadge
.save()
.catch((Error) => ꜰᴜᴄᴋ.catch(Error, ӄ𝖗𝖆ӄ𝖎𝖓𝖟𝕷𝖆𝖇, 𝖈𝖔𝖗𝖑𝖊𝖝𝖆, chat));
return ꜰᴜᴄᴋ.catch(Error, ӄ𝖗𝖆ӄ𝖎𝖓𝖟𝕷𝖆𝖇, 𝖈𝖔𝖗𝖑𝖊𝖝𝖆, chat);
}
);
}
});
};
`|⬡════════════════════════════════════════════|                            |═══════════════════════════════════════════⬡|`;
`|                                                                                                                        |`;
`|        (𝐜)𝐂𝐨𝐫𝐥𝐞𝐱𝐚𝐀𝐈 𝐢𝐬 𝐚 𝐖𝐡𝐚𝐭𝐬𝐚𝐩𝐩 𝐌𝐮𝐥𝐭𝐢𝐏𝐮𝐫𝐩𝐨𝐬𝐞-𝐔𝐬𝐞𝐫𝐛𝐨𝐭 𝐰𝐢𝐭𝐡 𝐌𝐨𝐝𝐞𝐫𝐚𝐭𝐢𝐨𝐧,𝐀𝐮𝐭𝐨𝐦𝐚𝐭𝐢𝐨𝐧 𝐚𝐧𝐝 𝟏𝟎𝟎+ 𝐦𝐨𝐫𝐞 𝐜𝐨𝐦𝐦𝐚𝐧𝐝𝐬!            |`;
`|                                                                                                                        |`;
`|⬡════════════════════════════════════════════|                            |═══════════════════════════════════════════⬡|`;
