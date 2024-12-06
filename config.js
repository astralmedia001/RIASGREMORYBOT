//#RIAS
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "www.youtube.com";
global.video = "www.youtube.com";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "obidikechikadibia@gmail.com";
global.location = "Ondo, Nigeria";
global.mongodb = process.env.MONGODB_URI || "mongodb+srv://astrofx0011:astro@cluster0.lmwnxdt.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
global.allowJids = process.env.ALLOW_JID || "null";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "postgresql://tkm:Aqi6tqwyv5IwDHncTtVi5XtMGZvfndDJ@dpg-cqahogtds78s739sl81g-a.oregon-postgres.render.com/takudzwa";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Lagos";
global.github = process.env.GITHUB || "https://github.com/Toxic1239/RIASGREMORYBOT";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029Vaex2BtGU3BRQoeEsl0U";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029Vaex2BtGU3BRQoeEsl0U";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/c21ae479aab857b4f8006.jpg";
global.devs = "2348086541281";
global.sudo = process.env.SUDO || "2347042335645";
global.owner = process.env.OWNER_NUMBER || "2347042335645";
global.style = process.env.STYLE || "1";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "false";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "false";
global.userImages = process.env.USER_IMAGES || "https://telegra.ph/file/84a935261759d92084744.mp4";
global.waPresence = process.env.WAPRESENCE || "recording";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://riasgremorybot-xcqv.onrender.com/";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiRVBOMDd5OE9UMDUyNEJEak5taUljU2NETlZYaHpQd2V3eFpzZUU4LzMyND0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiREtDcVZNYTNYbUNqSUpyeXQxN2FZc0x4RGl5aENXZ3plZC9xdGVCd3JqYz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ5Tys4ZTFCRTk2UUIybllUQzhsWStiQVkrUlVCL0tJaUk0RmxJNm1Da1ZZPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ2d0VMM012cVkvZVJxUW9HNlcyWnl5cHdsNGpyR25ENnhwc05NYkFNbERvPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImFOQkdwTFNWVlkwYmJXdS92KzA1YnZsMnZBalplT0xaSXArZVgrWGNBSDQ9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Im5SRld5bDZUbVhrdlBMblFGeDRtVE02ZmxDTGpPK0plMEZGd0x3ZGxtQUk9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiWUdmUFpwN1pMSU42UHM0ZjNHQkhiazA3ZFMwZVZuM0RQQTdhVUo2ai8wQT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoidGt1RHZ5dG44V2NLNnpzU0tUYUlXWlI5MnJCK1l6RXZyQzBOWG9CMGdscz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ik9BS3NONXVFekxTNjBta0NvRCtvbHp5WlRRU0NoQndnNmNtdXBjOWR2ZVAvTXJ5WXBPMUVPU3dwdDhhYzd3NWNldEdpMWV4NElVNkxjZnBxMXRrWkRnPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTg4LCJhZHZTZWNyZXRLZXkiOiJjV2NzWktkRlZOTFBqcEc2V21Hd0xPYnVwRHZJeFJlRk5XQUdwYmJESU9rPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W3sia2V5Ijp7InJlbW90ZUppZCI6IjIzNDcwNDIzMzU2NDVAcy53aGF0c2FwcC5uZXQiLCJmcm9tTWUiOnRydWUsImlkIjoiM0E0MTlFQTcyNjIwQkY4MkY5MzIifSwibWVzc2FnZVRpbWVzdGFtcCI6MTczMzQ4OTE4M30seyJrZXkiOnsicmVtb3RlSmlkIjoiMjM0NzA0MjMzNTY0NUBzLndoYXRzYXBwLm5ldCIsImZyb21NZSI6dHJ1ZSwiaWQiOiIzQTZGOTY5Q0ZEMjQ3NTY3OEIyNCJ9LCJtZXNzYWdlVGltZXN0YW1wIjoxNzMzNDg5MTg1fV0sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjoxLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJyTHVWYURMNFMzQ2w2c3Vhck5GTjZBIiwicGhvbmVJZCI6IjVmZmY1ODA1LTA1ZTctNDVhOC04YTcwLTU4NTczYTBkN2MwYiIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJvb2pvY0NPZDNFa01JdFdxWm51eExPWk5kUGs9In0sInJlZ2lzdGVyZWQiOmZhbHNlLCJiYWNrdXBUb2tlbiI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkZUYmwvaXUwUGZiKzRiL1Z0aTZvNEZjT0NvZz0ifSwicmVnaXN0cmF0aW9uIjp7fSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ0tqNXg2Z05FSS9reTdvR0dBRWdBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6Ik1JbVpsUG9XazQ2N3gycm5kYlFVbFFKWEMvdzVxaFAxSXVCSHNFblFqQVk9IiwiYWNjb3VudFNpZ25hdHVyZSI6ImltY2xKb2dDVUJpSFBma3BuZ05HcmI1clhraFJDVitQdXpBUm1KN2pwcDh4WUNYZDE1OGpYMDZveWp2Y3Zkc051RWk4eFdRU2pndWZrOXhtdEZhd0RRPT0iLCJkZXZpY2VTaWduYXR1cmUiOiJXL0xKSnpNaHpEczB0WnNsRHFhSFNTNEVQWnk2aGhMbWEzS1N3OWJqbGZwSkJUSEFnZ1dUVDgvd09MTmZETFpvVW8yUGtiMXU0QnFyL1JuWUV4UmhCQT09In0sIm1lIjp7ImlkIjoiMjM0NzA0MjMzNTY0NTo2QHMud2hhdHNhcHAubmV0IiwibGlkIjoiMjc3ODg5MjMyNzI0MTk2OjZAbGlkIiwibmFtZSI6IlRpbWkifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiMjM0NzA0MjMzNTY0NTo2QHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQlRDSm1aVDZGcE9PdThkcTUzVzBGSlVDVnd2OE9hb1Q5U0xnUjdCSjBJd0cifX1dLCJwbGF0Zm9ybSI6ImlwaG9uZSIsInJvdXRpbmdJbmZvIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQ0JJSURRPT0ifSwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzMzNDg5MTgwLCJsYXN0UHJvcEhhc2giOiIzQW9TaHMiLCJteUFwcFN0YXRlS2V5SWQiOiJBQUFBQUxmVSJ9"
module.exports = {
  menu: process.env.MENU || "1",
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.3.1",
  caption: process.env.CAPTION || "𝗣𝗢𝗪𝗘𝗥𝗘𝗗 𝗕𝗬 𝗧𝗢𝗫𝗫𝗜𝗖 𝗕𝗢𝗬",
  author: process.env.PACK_AUTHER || "ᴛᴏxxɪᴄ ᴍᴅ",
  packname: process.env.PACK_NAME || "𝗥𝗜𝗔𝗦 𝗠𝗗",
  botname: process.env.BOT_NAME || "𝗥𝗜𝗔𝗦 𝗚𝗥𝗘𝗠𝗢𝗥𝗬",
  ownername: process.env.OWNER_NAME || "ᴛᴏxxɪᴄ",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "neLbXXrp8bSDcohnp1CW5UEa",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "sk-proj-pBksWDImP6VuvvJTvqDsT3BlbkFJ2E8GhbpzjyRFkFaBI9Aj",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "HRKU-2fc4d785-535b-4113-8291-84c5d3d6d2c3",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "toxicmd12",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "private",
  LANG: (process.env.THEME || "RIAS").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = false;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
