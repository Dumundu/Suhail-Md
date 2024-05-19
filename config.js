const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Colombo,sri lanka."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/sri lanka";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "94726393273" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null.726393273";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "94726393273";




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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_15_00_05_19_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTQ0LFxuICAgICAgICAxMTgsXG4gICAgICAgIDkwLFxuICAgICAgICA4LFxuICAgICAgICAxODgsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMTYwLFxuICAgICAgICA5LFxuICAgICAgICAxMDYsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMTk1LFxuICAgICAgICA5NixcbiAgICAgICAgNDksXG4gICAgICAgIDI0NixcbiAgICAgICAgNjcsXG4gICAgICAgIDExOCxcbiAgICAgICAgMTAwLFxuICAgICAgICA0MixcbiAgICAgICAgMTAxLFxuICAgICAgICAxNDMsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMjA1LFxuICAgICAgICAxNTcsXG4gICAgICAgIDk3LFxuICAgICAgICAxOTUsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMTQ2LFxuICAgICAgICAxMTMsXG4gICAgICAgIDIxMyxcbiAgICAgICAgNzIsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMTEzXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDgwLFxuICAgICAgICA1NyxcbiAgICAgICAgMTM2LFxuICAgICAgICA5MCxcbiAgICAgICAgMjUsXG4gICAgICAgIDE5MSxcbiAgICAgICAgNzQsXG4gICAgICAgIDI4LFxuICAgICAgICAyOSxcbiAgICAgICAgMjAzLFxuICAgICAgICAxNCxcbiAgICAgICAgMTkyLFxuICAgICAgICA2LFxuICAgICAgICAxMzQsXG4gICAgICAgIDgwLFxuICAgICAgICAxMzUsXG4gICAgICAgIDExMyxcbiAgICAgICAgMTAwLFxuICAgICAgICAxNDYsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMjIyLFxuICAgICAgICAyMSxcbiAgICAgICAgMTg3LFxuICAgICAgICAyNTAsXG4gICAgICAgIDk5LFxuICAgICAgICA2OCxcbiAgICAgICAgNjksXG4gICAgICAgIDEsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMTcwLFxuICAgICAgICAxMDEsXG4gICAgICAgIDEwM1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTYsXG4gICAgICAgIDU5LFxuICAgICAgICAyNixcbiAgICAgICAgMTk3LFxuICAgICAgICAxOTksXG4gICAgICAgIDIwMixcbiAgICAgICAgMTM3LFxuICAgICAgICA3MCxcbiAgICAgICAgMTY1LFxuICAgICAgICAxMDgsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMTA1LFxuICAgICAgICA4NyxcbiAgICAgICAgNzAsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMTQ4LFxuICAgICAgICAxOTcsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMjUwLFxuICAgICAgICA3LFxuICAgICAgICAxNDIsXG4gICAgICAgIDk3LFxuICAgICAgICAxMTAsXG4gICAgICAgIDUyLFxuICAgICAgICAyNCxcbiAgICAgICAgMjA5LFxuICAgICAgICAyMDIsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMjcsXG4gICAgICAgIDc3LFxuICAgICAgICAyMTUsXG4gICAgICAgIDkxXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIwNSxcbiAgICAgICAgODAsXG4gICAgICAgIDEyLFxuICAgICAgICAzMyxcbiAgICAgICAgODQsXG4gICAgICAgIDExNyxcbiAgICAgICAgMjQzLFxuICAgICAgICAyNSxcbiAgICAgICAgMjIxLFxuICAgICAgICAyNSxcbiAgICAgICAgMjM3LFxuICAgICAgICAxMjksXG4gICAgICAgIDE2NyxcbiAgICAgICAgMTA1LFxuICAgICAgICAxMCxcbiAgICAgICAgMjUxLFxuICAgICAgICAyMjEsXG4gICAgICAgIDYsXG4gICAgICAgIDU4LFxuICAgICAgICAxNzAsXG4gICAgICAgIDIxNixcbiAgICAgICAgMTkyLFxuICAgICAgICA4OSxcbiAgICAgICAgMjQsXG4gICAgICAgIDIyLFxuICAgICAgICA2MyxcbiAgICAgICAgMTk3LFxuICAgICAgICAxNDYsXG4gICAgICAgIDEzNixcbiAgICAgICAgMzUsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNjQsXG4gICAgICAgIDQsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMTAxLFxuICAgICAgICA0MixcbiAgICAgICAgMTU0LFxuICAgICAgICA0NCxcbiAgICAgICAgNDksXG4gICAgICAgIDIyNyxcbiAgICAgICAgNzksXG4gICAgICAgIDIwMCxcbiAgICAgICAgNzMsXG4gICAgICAgIDI1LFxuICAgICAgICAxMSxcbiAgICAgICAgMjIsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMTUsXG4gICAgICAgIDc1LFxuICAgICAgICAyMDAsXG4gICAgICAgIDM2LFxuICAgICAgICAxNzYsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMjMwLFxuICAgICAgICAxMjMsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMTY2LFxuICAgICAgICAyMDksXG4gICAgICAgIDE5NixcbiAgICAgICAgMjQ1LFxuICAgICAgICAyMzUsXG4gICAgICAgIDExNSxcbiAgICAgICAgODRcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNTcsXG4gICAgICAgIDI3LFxuICAgICAgICAyMzcsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMjQ4LFxuICAgICAgICA5NCxcbiAgICAgICAgMTgyLFxuICAgICAgICAxNyxcbiAgICAgICAgNyxcbiAgICAgICAgNjcsXG4gICAgICAgIDE5NCxcbiAgICAgICAgNjQsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMjUyLFxuICAgICAgICAxNzQsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMTczLFxuICAgICAgICAxMCxcbiAgICAgICAgMjQ0LFxuICAgICAgICAxOTcsXG4gICAgICAgIDI1LFxuICAgICAgICAzMixcbiAgICAgICAgNjEsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMTIsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMjMwLFxuICAgICAgICAxNDcsXG4gICAgICAgIDMzLFxuICAgICAgICAxMjgsXG4gICAgICAgIDEwLFxuICAgICAgICA1OFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxNixcbiAgICAgICAgICA1MixcbiAgICAgICAgICAxOTMsXG4gICAgICAgICAgNDksXG4gICAgICAgICAgODYsXG4gICAgICAgICAgMjAzLFxuICAgICAgICAgIDE0NCxcbiAgICAgICAgICA1NCxcbiAgICAgICAgICAyMzMsXG4gICAgICAgICAgMjQ4LFxuICAgICAgICAgIDUxLFxuICAgICAgICAgIDg4LFxuICAgICAgICAgIDY5LFxuICAgICAgICAgIDEwNCxcbiAgICAgICAgICA3MyxcbiAgICAgICAgICA1NCxcbiAgICAgICAgICAxNDMsXG4gICAgICAgICAgNzcsXG4gICAgICAgICAgNDgsXG4gICAgICAgICAgMTMyLFxuICAgICAgICAgIDI4LFxuICAgICAgICAgIDk2LFxuICAgICAgICAgIDczLFxuICAgICAgICAgIDcwLFxuICAgICAgICAgIDE5OCxcbiAgICAgICAgICAxNTYsXG4gICAgICAgICAgMTYxLFxuICAgICAgICAgIDE3NixcbiAgICAgICAgICAxMDEsXG4gICAgICAgICAgNTAsXG4gICAgICAgICAgMTU1LFxuICAgICAgICAgIDgwXG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDEwOCxcbiAgICAgICAgICAxMTIsXG4gICAgICAgICAgMTg1LFxuICAgICAgICAgIDUxLFxuICAgICAgICAgIDg1LFxuICAgICAgICAgIDIxMCxcbiAgICAgICAgICAyMTYsXG4gICAgICAgICAgMTgyLFxuICAgICAgICAgIDIxMyxcbiAgICAgICAgICAyMzcsXG4gICAgICAgICAgMTUwLFxuICAgICAgICAgIDE4OSxcbiAgICAgICAgICAxOTgsXG4gICAgICAgICAgMSxcbiAgICAgICAgICA3NixcbiAgICAgICAgICAzMCxcbiAgICAgICAgICAxNDAsXG4gICAgICAgICAgMTAsXG4gICAgICAgICAgNzAsXG4gICAgICAgICAgMjUwLFxuICAgICAgICAgIDI1LFxuICAgICAgICAgIDExNyxcbiAgICAgICAgICAzMCxcbiAgICAgICAgICAyMSxcbiAgICAgICAgICA0NSxcbiAgICAgICAgICA3OCxcbiAgICAgICAgICAxMjUsXG4gICAgICAgICAgOTMsXG4gICAgICAgICAgMjIxLFxuICAgICAgICAgIDE0OSxcbiAgICAgICAgICA4NixcbiAgICAgICAgICA4NVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDYxLFxuICAgICAgICAyMjgsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMjA1LFxuICAgICAgICAyMjUsXG4gICAgICAgIDUsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMjA2LFxuICAgICAgICA1NixcbiAgICAgICAgNjgsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMTk5LFxuICAgICAgICA5MCxcbiAgICAgICAgNCxcbiAgICAgICAgMTk2LFxuICAgICAgICAyNTUsXG4gICAgICAgIDg3LFxuICAgICAgICAxOTcsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMjI3LFxuICAgICAgICAxMzAsXG4gICAgICAgIDgwLFxuICAgICAgICAxNSxcbiAgICAgICAgNjgsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMTc0LFxuICAgICAgICAxMCxcbiAgICAgICAgOTYsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMjQ5LFxuICAgICAgICAxNDgsXG4gICAgICAgIDEsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMTk5LFxuICAgICAgICAxODcsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMzcsXG4gICAgICAgIDQ5LFxuICAgICAgICA5NixcbiAgICAgICAgMjMzLFxuICAgICAgICA2NCxcbiAgICAgICAgODMsXG4gICAgICAgIDExMixcbiAgICAgICAgNjksXG4gICAgICAgIDE0NyxcbiAgICAgICAgMjIyLFxuICAgICAgICAxNyxcbiAgICAgICAgMjQ5LFxuICAgICAgICA4MixcbiAgICAgICAgMTg5LFxuICAgICAgICA2MSxcbiAgICAgICAgOTgsXG4gICAgICAgIDEwMSxcbiAgICAgICAgNDQsXG4gICAgICAgIDQ4LFxuICAgICAgICA3LFxuICAgICAgICAyMjksXG4gICAgICAgIDEwNCxcbiAgICAgICAgMTM4LFxuICAgICAgICA2NSxcbiAgICAgICAgMTQ5LFxuICAgICAgICAyMjIsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMTBcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDE2OSxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCI1TzJ5aDRCMDV1dU44dk9TOTY2NThZYUpGb3A4dUlLbTF1dWJqSGxURzVFPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjk0NzI2MzkzMjczQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCJGMzUxNUUwMkUwREE2NkRFN0I4REZBNzgwRDJENEZFMlwiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MTYxMzA4NDlcbiAgICB9XG4gIF0sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiM2RTWm5fX1dRSkNxV0VRUUtLRE9KZ1wiLFxuICBcInBob25lSWRcIjogXCJkOGU1NWMxMS03ZjhkLTQ5OTAtYWVkZS01NGIyYTZkM2Q1N2ZcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTIwLFxuICAgICAgMTE5LFxuICAgICAgMTgwLFxuICAgICAgOTIsXG4gICAgICA0NixcbiAgICAgIDExMCxcbiAgICAgIDExMSxcbiAgICAgIDEwNyxcbiAgICAgIDE1OSxcbiAgICAgIDE3NCxcbiAgICAgIDEzOSxcbiAgICAgIDg5LFxuICAgICAgMTM3LFxuICAgICAgODUsXG4gICAgICAxMDksXG4gICAgICAxMTAsXG4gICAgICAxMTQsXG4gICAgICA4NyxcbiAgICAgIDEwNixcbiAgICAgIDk4XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDY5LFxuICAgICAgMTg4LFxuICAgICAgNjksXG4gICAgICAyMixcbiAgICAgIDIwLFxuICAgICAgMzQsXG4gICAgICAyNDcsXG4gICAgICA0MixcbiAgICAgIDIwNixcbiAgICAgIDE0NyxcbiAgICAgIDE4MCxcbiAgICAgIDE0MSxcbiAgICAgIDEyLFxuICAgICAgODMsXG4gICAgICAzNixcbiAgICAgIDE2NyxcbiAgICAgIDI2LFxuICAgICAgMTcsXG4gICAgICAxOTksXG4gICAgICAxOTZcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiUThESEw1Q0VcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjk0NzI2MzkzMjczOjQyQHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJuYW1lXCI6IFwiS82fRc2fWM2fVM2fRc2fUs2fXCIsXG4gICAgXCJsaWRcIjogXCIyMTQyNDE4MjcxMzU1MDQ6NDJAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDSmozeHdRUW1LaW9zZ1lZQVNBQUtBQT1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJCVzRHY3ZJb2lsVFBhMHBuS1JZTW5kTVBySDY2RXZvRG9KWFpHTU02N2xJPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcInYxMnF4ZDBaQmhuZDNGcC9WaFJKcU5vTXJkbWFpY1VibnJ4Rzd5aC9VR0ZpcGlpNlc0S1Bjb1YvWFg0RHBhTy9NcTZKUm52YVBPZlUrdTBPcjd2SkJRPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIjBZWC9BR0xlN000Z1JEVFB3cVFNSnhqQ2o2S1hpc0xKUUdOMXNmeUhUak9JR0ZuaFZDTmx0ckhnZUdwNXRwazBZbmc0YU5rUUJwNExmckd5bnVGaEJRPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjk0NzI2MzkzMjczOjQyQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxMTAsXG4gICAgICAgICAgNixcbiAgICAgICAgICAxMTQsXG4gICAgICAgICAgMjQyLFxuICAgICAgICAgIDQwLFxuICAgICAgICAgIDEzOCxcbiAgICAgICAgICA4NCxcbiAgICAgICAgICAyMDcsXG4gICAgICAgICAgMTA3LFxuICAgICAgICAgIDc0LFxuICAgICAgICAgIDEwMyxcbiAgICAgICAgICA0MSxcbiAgICAgICAgICAyMixcbiAgICAgICAgICAxMixcbiAgICAgICAgICAxNTcsXG4gICAgICAgICAgMjExLFxuICAgICAgICAgIDE1LFxuICAgICAgICAgIDE3MixcbiAgICAgICAgICAxMjYsXG4gICAgICAgICAgMTg2LFxuICAgICAgICAgIDE4LFxuICAgICAgICAgIDI1MCxcbiAgICAgICAgICAzLFxuICAgICAgICAgIDE2MCxcbiAgICAgICAgICAxNDksXG4gICAgICAgICAgMjE3LFxuICAgICAgICAgIDI0LFxuICAgICAgICAgIDE5NSxcbiAgICAgICAgICA1OCxcbiAgICAgICAgICAyMzgsXG4gICAgICAgICAgODJcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcInNtYmFcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcxNjEzMDg0M1xufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS11bmRlZmluZWQuanNvbiI6IHt9Cn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.6",
  caption : global.caption || "KING PAWAN" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "KING PAWAN",
  packname: process.env.PACK_NAME || "❤",
  botname : process.env.BOT_NAME  || "KING PAWAN",
  ownername:process.env.OWNER_NAME|| "KING PAWAN",


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
