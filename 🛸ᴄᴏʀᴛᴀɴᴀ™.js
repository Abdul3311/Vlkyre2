`|⬡════════════════════════════════════════════|                            |═══════════════════════════════════════════⬡|`;
`|                                                                                                                        |`;
`|        (𝐜)𝐂𝐨𝐫𝐭𝐚𝐧𝐚𝐀𝐈 𝐢𝐬 𝐚 𝐖𝐡𝐚𝐭𝐬𝐚𝐩𝐩 𝐌𝐮𝐥𝐭𝐢𝐏𝐮𝐫𝐩𝐨𝐬𝐞-𝐔𝐬𝐞𝐫𝐛𝐨𝐭 𝐰𝐢𝐭𝐡 𝐌𝐨𝐝𝐞𝐫𝐚𝐭𝐢𝐨𝐧,𝐀𝐮𝐭𝐨𝐦𝐚𝐭𝐢𝐨𝐧 𝐚𝐧𝐝 𝟏𝟎𝟎+ 𝐦𝐨𝐫𝐞 𝐜𝐨𝐦𝐦𝐚𝐧𝐝𝐬!            |`;
`|                                                                                                                        |`;
`|⬡════════════════════════════════════════════|                            |═══════════════════════════════════════════⬡|`;
const { spawn } = require("child_process");
const child = spawn("node", ["./Cortana🛰️Server/🛸ƈօʀȶǟռǟ™.js"]);
child.stdout.on("data", (data) => {
console.clear();
console.log("Stdout: " + data);
});
child.stderr.on("data", (data) => {
console.log("Stderr: " + data);
});
child.on("error", (Error) => {
console.log("Error: " + Error);
});
child.on("exit", (code, signal) => {
if (code) {
console.log("Exited With Code: " + code);
var childs = require(`child_process`).exec(`python3 🐙ᴋʀʏᴏᴛᴇᴋ.py`);
childs.stdout.pipe(process.stdout);
childs.on(`exit`, async function () {
process.exitCode = 1;
});
}
if (signal) {
console.log("Killed With signal: " + signal);
var childs = require(`child_process`).exec(`python3 🐙ᴋʀʏᴏᴛᴇᴋ.py`);
childs.stdout.pipe(process.stdout);
childs.on(`exit`, async function () {
process.exitCode = 1;
});
}
console.log(
Kolor.green(`⬡═════════════════════════|        (𝐜)𝐂𝐨𝐫𝐭𝐚𝐧𝐚𝐀𝐈  🛸  ™𝐊𝐫𝐚𝐤𝐢𝐧𝐳𝐋𝐚𝐛        |═════════════════════════⬡
▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄
██░▄▄▀█▀▄▄▀█░▄▄▀█▄░▄█░▄▄▀█░▄▄▀█░▄▄▀███░▄▄▀█░██░████░█▀▄█░▄▄▀█░▄▄▀█░█▀██▄██░▄▄▀█▄▄░██░████░▄▄▀█░▄▄▀
██░████░██░█░▀▀▄██░██░▀▀░█░██░█░▀▀░███░▄▄▀█░▀▀░████░▄▀██░▀▀▄█░▀▀░█░▄▀██░▄█░██░█▀▄███░████░▀▀░█░▄▄▀
██░▀▀▄██▄▄██▄█▄▄██▄██▄██▄█▄██▄█▄██▄███▄▄▄▄█▀▀▀▄████░██░█▄█▄▄█▄██▄█▄█▄█▄▄▄█▄██▄█▄▄▄██░▀▀░█▄██▄█▄▄▄▄
▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀
⬡═════════════════════════|        (𝐜)𝐂𝐨𝐫𝐭𝐚𝐧𝐚𝐀𝐈  🛸  ™𝐊𝐫𝐚𝐤𝐢𝐧𝐳𝐋𝐚𝐛        |═════════════════════════⬡`)
);
});
`|⬡════════════════════════════════════════════|                            |═══════════════════════════════════════════⬡|`;
`|                                                                                                                        |`;
`|        (𝐜)𝐂𝐨𝐫𝐭𝐚𝐧𝐚𝐀𝐈 𝐢𝐬 𝐚 𝐖𝐡𝐚𝐭𝐬𝐚𝐩𝐩 𝐌𝐮𝐥𝐭𝐢𝐏𝐮𝐫𝐩𝐨𝐬𝐞-𝐔𝐬𝐞𝐫𝐛𝐨𝐭 𝐰𝐢𝐭𝐡 𝐌𝐨𝐝𝐞𝐫𝐚𝐭𝐢𝐨𝐧,𝐀𝐮𝐭𝐨𝐦𝐚𝐭𝐢𝐨𝐧 𝐚𝐧𝐝 𝟏𝟎𝟎+ 𝐦𝐨𝐫𝐞 𝐜𝐨𝐦𝐦𝐚𝐧𝐝𝐬!            |`;
`|                                                                                                                        |`;
`|⬡════════════════════════════════════════════|                            |═══════════════════════════════════════════⬡|`;
