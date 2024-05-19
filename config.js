const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Colombo,sri lanka."


global.mongodb= process.env.MONGODB_URI || "mongodb+srv://Dumundu:sandaras@cluster0.8wh3s1n.mongodb.net/"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/sri lanka";
global.github=process.env.GITHUB|| "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "94763959164" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null.94763959164";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "94763959164";




//========================= [ BOT SETTINGS ] =========================\\
global.style = process.env.STYLE   || '5'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "true"
global.readmessage = process.env.READ_MESSAGE || "true"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "true"
global.save_status = process.env.AUTO_SAVE_STATUS || "true"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_17_33_05_19_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNzIsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMjQ2LFxuICAgICAgICAxNyxcbiAgICAgICAgMTA0LFxuICAgICAgICA0NyxcbiAgICAgICAgMTUsXG4gICAgICAgIDU4LFxuICAgICAgICA3MyxcbiAgICAgICAgMTc5LFxuICAgICAgICAzNSxcbiAgICAgICAgMyxcbiAgICAgICAgMTc3LFxuICAgICAgICAyNDIsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMzEsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMjE5LFxuICAgICAgICAxMzAsXG4gICAgICAgIDEyNixcbiAgICAgICAgMTkwLFxuICAgICAgICAxOSxcbiAgICAgICAgNTEsXG4gICAgICAgIDE3NSxcbiAgICAgICAgNjcsXG4gICAgICAgIDcwLFxuICAgICAgICA3NyxcbiAgICAgICAgNzcsXG4gICAgICAgIDk4LFxuICAgICAgICAxMDcsXG4gICAgICAgIDE0NyxcbiAgICAgICAgODJcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTY0LFxuICAgICAgICA0MCxcbiAgICAgICAgMTY5LFxuICAgICAgICAyMDEsXG4gICAgICAgIDE4NyxcbiAgICAgICAgNixcbiAgICAgICAgMTk3LFxuICAgICAgICAxLFxuICAgICAgICAxMzksXG4gICAgICAgIDIwNCxcbiAgICAgICAgMTc1LFxuICAgICAgICAxODEsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMjE4LFxuICAgICAgICA5OSxcbiAgICAgICAgMTc1LFxuICAgICAgICAxOTIsXG4gICAgICAgIDgzLFxuICAgICAgICAyNDQsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMjE0LFxuICAgICAgICA2MixcbiAgICAgICAgMTQ5LFxuICAgICAgICAxOTcsXG4gICAgICAgIDQxLFxuICAgICAgICAyMjMsXG4gICAgICAgIDEyLFxuICAgICAgICAxNjAsXG4gICAgICAgIDIwNixcbiAgICAgICAgNTksXG4gICAgICAgIDI0OCxcbiAgICAgICAgMTE4XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMTIsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMTMsXG4gICAgICAgIDEsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMTk0LFxuICAgICAgICAxMSxcbiAgICAgICAgMjE5LFxuICAgICAgICAzMCxcbiAgICAgICAgMjMzLFxuICAgICAgICAxMDYsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMjgsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMjE0LFxuICAgICAgICAyLFxuICAgICAgICAxNTEsXG4gICAgICAgIDEyLFxuICAgICAgICAxMzUsXG4gICAgICAgIDExMSxcbiAgICAgICAgMjIzLFxuICAgICAgICAxMjIsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMTM1LFxuICAgICAgICAyNTIsXG4gICAgICAgIDg1LFxuICAgICAgICAyMixcbiAgICAgICAgMTY5LFxuICAgICAgICA3MyxcbiAgICAgICAgOTIsXG4gICAgICAgIDE3NixcbiAgICAgICAgMTA5XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE5OCxcbiAgICAgICAgNDgsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMTQ1LFxuICAgICAgICAxODksXG4gICAgICAgIDIwOCxcbiAgICAgICAgMjM0LFxuICAgICAgICAxODksXG4gICAgICAgIDQxLFxuICAgICAgICA1OCxcbiAgICAgICAgMjQ3LFxuICAgICAgICAwLFxuICAgICAgICAxNTIsXG4gICAgICAgIDI0NSxcbiAgICAgICAgNTAsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMTYwLFxuICAgICAgICAxNjcsXG4gICAgICAgIDE2OSxcbiAgICAgICAgOSxcbiAgICAgICAgMTQsXG4gICAgICAgIDE4LFxuICAgICAgICAxNTAsXG4gICAgICAgIDYyLFxuICAgICAgICA4NSxcbiAgICAgICAgMjIsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMTUxLFxuICAgICAgICA0NyxcbiAgICAgICAgMTgyLFxuICAgICAgICAxMCxcbiAgICAgICAgODRcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDQwLFxuICAgICAgICAxMDYsXG4gICAgICAgIDE2MyxcbiAgICAgICAgNTMsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMTIsXG4gICAgICAgIDEwNixcbiAgICAgICAgNTksXG4gICAgICAgIDExNyxcbiAgICAgICAgMTYwLFxuICAgICAgICAyMzYsXG4gICAgICAgIDkyLFxuICAgICAgICAyMTEsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMTYxLFxuICAgICAgICAxMyxcbiAgICAgICAgMjA5LFxuICAgICAgICAyNTUsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMTgsXG4gICAgICAgIDEyNixcbiAgICAgICAgMjE5LFxuICAgICAgICAxOSxcbiAgICAgICAgMjE0LFxuICAgICAgICAxODMsXG4gICAgICAgIDI3LFxuICAgICAgICAxMzMsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMTk1LFxuICAgICAgICAyNDgsXG4gICAgICAgIDI1MSxcbiAgICAgICAgNzVcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTY4LFxuICAgICAgICAxMDMsXG4gICAgICAgIDE4MSxcbiAgICAgICAgOTAsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMTE5LFxuICAgICAgICAxMDUsXG4gICAgICAgIDI3LFxuICAgICAgICAxMTEsXG4gICAgICAgIDQxLFxuICAgICAgICAxOTgsXG4gICAgICAgIDE1LFxuICAgICAgICA0MixcbiAgICAgICAgMTcxLFxuICAgICAgICAxNTUsXG4gICAgICAgIDE3LFxuICAgICAgICAyMDYsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMjQzLFxuICAgICAgICAyMTYsXG4gICAgICAgIDMzLFxuICAgICAgICAxNjksXG4gICAgICAgIDEwNixcbiAgICAgICAgMjE3LFxuICAgICAgICAxNjksXG4gICAgICAgIDEyMCxcbiAgICAgICAgMTM2LFxuICAgICAgICAyMzMsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMjU1LFxuICAgICAgICAyMyxcbiAgICAgICAgMTE2XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDE0NCxcbiAgICAgICAgICAyMjksXG4gICAgICAgICAgMTkyLFxuICAgICAgICAgIDIwNSxcbiAgICAgICAgICAxODQsXG4gICAgICAgICAgMSxcbiAgICAgICAgICA4NCxcbiAgICAgICAgICAxNjQsXG4gICAgICAgICAgMTE0LFxuICAgICAgICAgIDEyMSxcbiAgICAgICAgICA5NSxcbiAgICAgICAgICAzMSxcbiAgICAgICAgICA0NSxcbiAgICAgICAgICAxOTEsXG4gICAgICAgICAgMjI2LFxuICAgICAgICAgIDE5MyxcbiAgICAgICAgICAyMDUsXG4gICAgICAgICAgMjcsXG4gICAgICAgICAgMTY0LFxuICAgICAgICAgIDEzNSxcbiAgICAgICAgICAxMCxcbiAgICAgICAgICA3LFxuICAgICAgICAgIDUwLFxuICAgICAgICAgIDIzOCxcbiAgICAgICAgICAyNTUsXG4gICAgICAgICAgNjYsXG4gICAgICAgICAgMjM3LFxuICAgICAgICAgIDU4LFxuICAgICAgICAgIDExMyxcbiAgICAgICAgICAzMSxcbiAgICAgICAgICA3LFxuICAgICAgICAgIDg3XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDYyLFxuICAgICAgICAgIDY4LFxuICAgICAgICAgIDIwNSxcbiAgICAgICAgICA3NixcbiAgICAgICAgICAyNTMsXG4gICAgICAgICAgMTcsXG4gICAgICAgICAgMjQ3LFxuICAgICAgICAgIDE4NCxcbiAgICAgICAgICAxNTAsXG4gICAgICAgICAgMTk1LFxuICAgICAgICAgIDE4MixcbiAgICAgICAgICAyMDgsXG4gICAgICAgICAgMTk3LFxuICAgICAgICAgIDEyMSxcbiAgICAgICAgICAyMSxcbiAgICAgICAgICAyMTMsXG4gICAgICAgICAgMjA3LFxuICAgICAgICAgIDE5NCxcbiAgICAgICAgICA2NSxcbiAgICAgICAgICAxNzAsXG4gICAgICAgICAgMjksXG4gICAgICAgICAgMTgwLFxuICAgICAgICAgIDEwOSxcbiAgICAgICAgICA4NSxcbiAgICAgICAgICA3MSxcbiAgICAgICAgICAxNTksXG4gICAgICAgICAgODAsXG4gICAgICAgICAgNDQsXG4gICAgICAgICAgNzAsXG4gICAgICAgICAgNjUsXG4gICAgICAgICAgMjM0LFxuICAgICAgICAgIDIyXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjIsXG4gICAgICAgIDcyLFxuICAgICAgICAxNTAsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMTIxLFxuICAgICAgICAxMzIsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMTU3LFxuICAgICAgICA5NCxcbiAgICAgICAgMTQ0LFxuICAgICAgICAyMjksXG4gICAgICAgIDgxLFxuICAgICAgICAxMTUsXG4gICAgICAgIDExNCxcbiAgICAgICAgMjI4LFxuICAgICAgICAxMTgsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMTQ4LFxuICAgICAgICAxNSxcbiAgICAgICAgMjQ1LFxuICAgICAgICA0OCxcbiAgICAgICAgMTAwLFxuICAgICAgICAxNDIsXG4gICAgICAgIDk5LFxuICAgICAgICAyMDYsXG4gICAgICAgIDM1LFxuICAgICAgICAxNjMsXG4gICAgICAgIDI3LFxuICAgICAgICA5NyxcbiAgICAgICAgMjQwLFxuICAgICAgICAxOTcsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMTAxLFxuICAgICAgICAxMTgsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMTQ0LFxuICAgICAgICA4NyxcbiAgICAgICAgMTE5LFxuICAgICAgICA4OCxcbiAgICAgICAgNTQsXG4gICAgICAgIDgsXG4gICAgICAgIDExMixcbiAgICAgICAgODMsXG4gICAgICAgIDUyLFxuICAgICAgICAxMyxcbiAgICAgICAgMTYyLFxuICAgICAgICAxNzMsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMTEsXG4gICAgICAgIDIwNixcbiAgICAgICAgMjYsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMTA4LFxuICAgICAgICA5NixcbiAgICAgICAgNzQsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMzYsXG4gICAgICAgIDEzNCxcbiAgICAgICAgNDksXG4gICAgICAgIDU3LFxuICAgICAgICAyMjcsXG4gICAgICAgIDIzNixcbiAgICAgICAgMTAxLFxuICAgICAgICAxMjhcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDQ3LFxuICBcImFkdlNlY3JldEtleVwiOiBcIk8zdnZsQzJKMHZlQ3lVdHQ0b0xtOFZqeFVEMkhRUnVZdmtidjY4L0RGVjA9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiOTQ3NjM5NTkxNjRAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIjZDNjkzNUEzQTE0NDAxQjVEQkZGOTlGMUFBMDI3OTU2XCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTcxNjE0MDAyMFxuICAgIH1cbiAgXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDEsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJVQlBnM2NzNFRzdV80cllJOUhJWUZ3XCIsXG4gIFwicGhvbmVJZFwiOiBcImNiMWE4OWMzLWUyNjktNDhlYi1iNTU4LTRjNWVkMjEwNDlkZVwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAyMjUsXG4gICAgICAxMDgsXG4gICAgICAyNyxcbiAgICAgIDE1NSxcbiAgICAgIDE0NixcbiAgICAgIDExMSxcbiAgICAgIDUsXG4gICAgICAxMTMsXG4gICAgICAyNDYsXG4gICAgICAxMDcsXG4gICAgICAyMTEsXG4gICAgICAyMzIsXG4gICAgICAxMjMsXG4gICAgICAxNixcbiAgICAgIDE4MCxcbiAgICAgIDI0MixcbiAgICAgIDIxMCxcbiAgICAgIDEyNyxcbiAgICAgIDIyLFxuICAgICAgMTNcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTYwLFxuICAgICAgMTY4LFxuICAgICAgMjE0LFxuICAgICAgMzEsXG4gICAgICAyMTMsXG4gICAgICAyMjAsXG4gICAgICAyNDMsXG4gICAgICAzNCxcbiAgICAgIDQ1LFxuICAgICAgMTUzLFxuICAgICAgMjUxLFxuICAgICAgMzUsXG4gICAgICAxNjUsXG4gICAgICAyMDEsXG4gICAgICAxNDIsXG4gICAgICAxMjEsXG4gICAgICA0NyxcbiAgICAgIDE1MSxcbiAgICAgIDczLFxuICAgICAgMTBcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiSlZSVkZLRkhcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjk0NzYzOTU5MTY0OjdAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjQyOTQ1NzQ3MTI0MjkzOjdAbGlkXCIsXG4gICAgXCJuYW1lXCI6IFwiS2FseWFuaSDwn5KX8J+YmFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ01hUm91VUJFTzN2cUxJR0dBRWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwidXRiOVM3NkdLWWhYalhEb3loVk9QSXZyZEVsK2ZvQ0VKY1hqRW1uYzhIMD1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJsMDVFSGkvRlRqK0E2WGM4bnQvYmllR2w4UzNXbFZ2YkxWZnJjcXY5STQzMzR3UVB1eDNtQ0RERXZ0ZXNjRm92VGUzMGRXODMwYkhHejRrcGx6NDZEdz09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJCSGQ4V2dtUXdCcVZSS3c5SEVIZmdOdm1CdWhtdTdVc25BbGQraHlaakg3d2NKY2lRMm1HdmVjeldySXpZZjVKcFlYQXY2NTZFRnk1VnFSZXAvb0pqZz09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCI5NDc2Mzk1OTE2NDo3QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMTg2LFxuICAgICAgICAgIDIxNCxcbiAgICAgICAgICAyNTMsXG4gICAgICAgICAgNzUsXG4gICAgICAgICAgMTkwLFxuICAgICAgICAgIDEzNCxcbiAgICAgICAgICA0MSxcbiAgICAgICAgICAxMzYsXG4gICAgICAgICAgODcsXG4gICAgICAgICAgMTQxLFxuICAgICAgICAgIDExMixcbiAgICAgICAgICAyMzIsXG4gICAgICAgICAgMjAyLFxuICAgICAgICAgIDIxLFxuICAgICAgICAgIDc4LFxuICAgICAgICAgIDYwLFxuICAgICAgICAgIDEzOSxcbiAgICAgICAgICAyMzUsXG4gICAgICAgICAgMTE2LFxuICAgICAgICAgIDczLFxuICAgICAgICAgIDEyNixcbiAgICAgICAgICAxMjYsXG4gICAgICAgICAgMTI4LFxuICAgICAgICAgIDEzMixcbiAgICAgICAgICAzNyxcbiAgICAgICAgICAxOTcsXG4gICAgICAgICAgMjI3LFxuICAgICAgICAgIDE4LFxuICAgICAgICAgIDEwNSxcbiAgICAgICAgICAyMjAsXG4gICAgICAgICAgMjQwLFxuICAgICAgICAgIDEyNVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiYW5kcm9pZFwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzE2MTQwMDE2LFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBRkFRXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFGQVEuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJIVzNiT1pmNzhnVFZuaFg1cFBwalpRUzNwcGZvZlZrUzBKWENVVGtrN3JnPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjQ4MDgwNzEwOCxcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIwXCJ9Igp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.6",
  caption : global.caption || "CR-GAMER" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "CR-GAMER",
  packname: process.env.PACK_NAME || "❤",
  botname : process.env.BOT_NAME  || "CR-GAMER",
  ownername:process.env.OWNER_NAME|| "CR-GAMER",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
