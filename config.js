const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923184474176";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "true"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_12_26_07_10_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQwLFxuICAgICAgICA0NixcbiAgICAgICAgMTc5LFxuICAgICAgICAxMzgsXG4gICAgICAgIDM3LFxuICAgICAgICAxMDEsXG4gICAgICAgIDkzLFxuICAgICAgICAyNDIsXG4gICAgICAgIDMyLFxuICAgICAgICAxNTYsXG4gICAgICAgIDExMSxcbiAgICAgICAgNTcsXG4gICAgICAgIDcwLFxuICAgICAgICA1NSxcbiAgICAgICAgMjMyLFxuICAgICAgICA5LFxuICAgICAgICAyMDEsXG4gICAgICAgIDIyNixcbiAgICAgICAgOTQsXG4gICAgICAgIDYxLFxuICAgICAgICA1OSxcbiAgICAgICAgMjQxLFxuICAgICAgICAxMyxcbiAgICAgICAgMjI1LFxuICAgICAgICAyNDEsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMTcsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMjAsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMjEsXG4gICAgICAgIDk4XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIwNyxcbiAgICAgICAgMTEzLFxuICAgICAgICAxMzYsXG4gICAgICAgIDQ2LFxuICAgICAgICAyMixcbiAgICAgICAgNDEsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMTc5LFxuICAgICAgICA3MSxcbiAgICAgICAgMTA2LFxuICAgICAgICA5MCxcbiAgICAgICAgMTAzLFxuICAgICAgICAxNTcsXG4gICAgICAgIDIzNixcbiAgICAgICAgMTg1LFxuICAgICAgICAxNTYsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMzMsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMTY0LFxuICAgICAgICAxOTMsXG4gICAgICAgIDM1LFxuICAgICAgICAxNzUsXG4gICAgICAgIDYwLFxuICAgICAgICAyMTAsXG4gICAgICAgIDUwLFxuICAgICAgICA3OCxcbiAgICAgICAgMTY2LFxuICAgICAgICA0NSxcbiAgICAgICAgMTAyLFxuICAgICAgICAzMCxcbiAgICAgICAgOTdcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDQ4LFxuICAgICAgICAxNjksXG4gICAgICAgIDU4LFxuICAgICAgICAxOTEsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMjUsXG4gICAgICAgIDIwMCxcbiAgICAgICAgOTcsXG4gICAgICAgIDgxLFxuICAgICAgICAyMDEsXG4gICAgICAgIDU4LFxuICAgICAgICAxNDIsXG4gICAgICAgIDIsXG4gICAgICAgIDE1MixcbiAgICAgICAgMTMyLFxuICAgICAgICAyMyxcbiAgICAgICAgMTY1LFxuICAgICAgICAzMCxcbiAgICAgICAgMTUsXG4gICAgICAgIDEwLFxuICAgICAgICA2MyxcbiAgICAgICAgMTIxLFxuICAgICAgICAyMTYsXG4gICAgICAgIDg0LFxuICAgICAgICAxODMsXG4gICAgICAgIDI1NSxcbiAgICAgICAgNyxcbiAgICAgICAgMjEsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMTIzLFxuICAgICAgICAyMTUsXG4gICAgICAgIDExOFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNTgsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMTQzLFxuICAgICAgICAyMTEsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMjIwLFxuICAgICAgICA1MCxcbiAgICAgICAgMTM1LFxuICAgICAgICAyMjQsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMjE2LFxuICAgICAgICAxOTgsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMTg0LFxuICAgICAgICAxNjcsXG4gICAgICAgIDE1NixcbiAgICAgICAgMTI5LFxuICAgICAgICAxODgsXG4gICAgICAgIDcsXG4gICAgICAgIDIwMixcbiAgICAgICAgMTA0LFxuICAgICAgICAyMDYsXG4gICAgICAgIDkyLFxuICAgICAgICAxNzIsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMTc1LFxuICAgICAgICAyNDQsXG4gICAgICAgIDE0OCxcbiAgICAgICAgOTYsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMTEzLFxuICAgICAgICA3OVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTYwLFxuICAgICAgICAyMSxcbiAgICAgICAgMTAzLFxuICAgICAgICAxNzUsXG4gICAgICAgIDU2LFxuICAgICAgICA0NixcbiAgICAgICAgMjQ4LFxuICAgICAgICA0OSxcbiAgICAgICAgMjI2LFxuICAgICAgICAxMzksXG4gICAgICAgIDk5LFxuICAgICAgICAyMTAsXG4gICAgICAgIDIwNixcbiAgICAgICAgMjQ4LFxuICAgICAgICA4LFxuICAgICAgICA3MSxcbiAgICAgICAgMTY1LFxuICAgICAgICAxNDcsXG4gICAgICAgIDE1OCxcbiAgICAgICAgNjYsXG4gICAgICAgIDE2NCxcbiAgICAgICAgNTgsXG4gICAgICAgIDMyLFxuICAgICAgICA0MyxcbiAgICAgICAgMjQxLFxuICAgICAgICAxNjIsXG4gICAgICAgIDQ5LFxuICAgICAgICA3NyxcbiAgICAgICAgNzYsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMTg3LFxuICAgICAgICA3N1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA5NSxcbiAgICAgICAgMjM5LFxuICAgICAgICAyNDIsXG4gICAgICAgIDcyLFxuICAgICAgICAyNTQsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMjQ0LFxuICAgICAgICAxOTAsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMTc0LFxuICAgICAgICA5MCxcbiAgICAgICAgMjM4LFxuICAgICAgICAxMzEsXG4gICAgICAgIDY3LFxuICAgICAgICAxMSxcbiAgICAgICAgMjksXG4gICAgICAgIDI1NCxcbiAgICAgICAgNjEsXG4gICAgICAgIDE4MyxcbiAgICAgICAgNDcsXG4gICAgICAgIDI0LFxuICAgICAgICAxNjcsXG4gICAgICAgIDEwLFxuICAgICAgICAxMTEsXG4gICAgICAgIDE5OSxcbiAgICAgICAgOCxcbiAgICAgICAgNDcsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMTkzLFxuICAgICAgICAyMjksXG4gICAgICAgIDE5MSxcbiAgICAgICAgNDlcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMCxcbiAgICAgICAgICAyMTYsXG4gICAgICAgICAgMTAyLFxuICAgICAgICAgIDE4MyxcbiAgICAgICAgICA2MyxcbiAgICAgICAgICAxLFxuICAgICAgICAgIDY3LFxuICAgICAgICAgIDE5MSxcbiAgICAgICAgICAxMzEsXG4gICAgICAgICAgMjE5LFxuICAgICAgICAgIDI0NCxcbiAgICAgICAgICAxMzMsXG4gICAgICAgICAgMTM1LFxuICAgICAgICAgIDIyMixcbiAgICAgICAgICAxMzAsXG4gICAgICAgICAgNTcsXG4gICAgICAgICAgMjAxLFxuICAgICAgICAgIDEzLFxuICAgICAgICAgIDE4NCxcbiAgICAgICAgICAxOTEsXG4gICAgICAgICAgMTkyLFxuICAgICAgICAgIDQsXG4gICAgICAgICAgMTk0LFxuICAgICAgICAgIDk2LFxuICAgICAgICAgIDYxLFxuICAgICAgICAgIDYyLFxuICAgICAgICAgIDExNCxcbiAgICAgICAgICAxODksXG4gICAgICAgICAgMzYsXG4gICAgICAgICAgMCxcbiAgICAgICAgICA4OSxcbiAgICAgICAgICAxMDFcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMjQxLFxuICAgICAgICAgIDMyLFxuICAgICAgICAgIDU2LFxuICAgICAgICAgIDUzLFxuICAgICAgICAgIDUsXG4gICAgICAgICAgMTY3LFxuICAgICAgICAgIDIyNyxcbiAgICAgICAgICAxMjEsXG4gICAgICAgICAgMjA1LFxuICAgICAgICAgIDEzNyxcbiAgICAgICAgICA3NSxcbiAgICAgICAgICAxMTYsXG4gICAgICAgICAgMTE1LFxuICAgICAgICAgIDEwMCxcbiAgICAgICAgICAyMjAsXG4gICAgICAgICAgMTEwLFxuICAgICAgICAgIDExOSxcbiAgICAgICAgICAxMDUsXG4gICAgICAgICAgMTgzLFxuICAgICAgICAgIDEzNyxcbiAgICAgICAgICA5NSxcbiAgICAgICAgICAyLFxuICAgICAgICAgIDI0NixcbiAgICAgICAgICA5MyxcbiAgICAgICAgICAxMjMsXG4gICAgICAgICAgMjAsXG4gICAgICAgICAgOTYsXG4gICAgICAgICAgNixcbiAgICAgICAgICAyMjcsXG4gICAgICAgICAgNzAsXG4gICAgICAgICAgMjksXG4gICAgICAgICAgMjlcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA4NixcbiAgICAgICAgMTE0LFxuICAgICAgICAyNTQsXG4gICAgICAgIDYzLFxuICAgICAgICAyMDUsXG4gICAgICAgIDEyMixcbiAgICAgICAgMTAsXG4gICAgICAgIDE4MixcbiAgICAgICAgMyxcbiAgICAgICAgMTgwLFxuICAgICAgICAxODIsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMjQxLFxuICAgICAgICAyMTQsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMjM3LFxuICAgICAgICAyMDEsXG4gICAgICAgIDIyMixcbiAgICAgICAgMTc1LFxuICAgICAgICAyNDAsXG4gICAgICAgIDIwMixcbiAgICAgICAgMTEsXG4gICAgICAgIDI0NixcbiAgICAgICAgMTkyLFxuICAgICAgICAxMjUsXG4gICAgICAgIDIzOCxcbiAgICAgICAgNjcsXG4gICAgICAgIDE2LFxuICAgICAgICA0NixcbiAgICAgICAgMjI3LFxuICAgICAgICA0NCxcbiAgICAgICAgODEsXG4gICAgICAgIDQxLFxuICAgICAgICA5MCxcbiAgICAgICAgODcsXG4gICAgICAgIDU0LFxuICAgICAgICAxNDQsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMTcyLFxuICAgICAgICAyMDAsXG4gICAgICAgIDE5LFxuICAgICAgICAyNDEsXG4gICAgICAgIDEwMixcbiAgICAgICAgMjE3LFxuICAgICAgICAxMTAsXG4gICAgICAgIDYyLFxuICAgICAgICAxMTEsXG4gICAgICAgIDMwLFxuICAgICAgICAxNyxcbiAgICAgICAgMjMyLFxuICAgICAgICAxMzEsXG4gICAgICAgIDE0NixcbiAgICAgICAgMTI4LFxuICAgICAgICA3NixcbiAgICAgICAgMTE4LFxuICAgICAgICA0NixcbiAgICAgICAgMjQ4LFxuICAgICAgICAxOTAsXG4gICAgICAgIDk4LFxuICAgICAgICAxNDAsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMTIwLFxuICAgICAgICAxOTEsXG4gICAgICAgIDhcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDE1NyxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJCOVpWUU1SeXlNRFA1c2wwZnphU2VLdEJwUHpLdDhFeC9QbCs1RXJyMVJFPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjkyMzAxMDQwNTY4OEBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiRjBCMThDRkVCQzhERUFFQjQxNjZCNTBEMURDQjU2RDFcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzIwNjE0MzY4XG4gICAgfSxcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiOTIzMDEwNDA1Njg4QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCI2QkU3NEI5QTVFNkUzNUUxNUU4NjdBNzkxM0JCMEJEMlwiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MjA2MTQzNzJcbiAgICB9XG4gIF0sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAxLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwibWJQSlo5VmZUX0NReUVLd2VCSm1DUVwiLFxuICBcInBob25lSWRcIjogXCI4YzJmYmMxZC1lOGYxLTQ2NDAtYjVkNi0xMThkZDM2MmViODdcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTA5LFxuICAgICAgMzcsXG4gICAgICAxMjUsXG4gICAgICAyMTUsXG4gICAgICAxOTAsXG4gICAgICAyNTUsXG4gICAgICAyMDksXG4gICAgICA0MCxcbiAgICAgIDE0NyxcbiAgICAgIDU3LFxuICAgICAgMTA5LFxuICAgICAgMjIsXG4gICAgICAyMDAsXG4gICAgICAxNDgsXG4gICAgICAxMzUsXG4gICAgICAyNDAsXG4gICAgICAxMDksXG4gICAgICAxNDgsXG4gICAgICA2MSxcbiAgICAgIDI1MVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxMjYsXG4gICAgICAxOTMsXG4gICAgICAxNDEsXG4gICAgICAyMSxcbiAgICAgIDE4OSxcbiAgICAgIDE4NSxcbiAgICAgIDE2MSxcbiAgICAgIDI0LFxuICAgICAgMjMzLFxuICAgICAgMTksXG4gICAgICA0LFxuICAgICAgMTg2LFxuICAgICAgMzAsXG4gICAgICAyMjgsXG4gICAgICAyNTAsXG4gICAgICAxMixcbiAgICAgIDcwLFxuICAgICAgMTIzLFxuICAgICAgNjYsXG4gICAgICAxNTJcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiSzhFSkQ3VFJcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjkyMzAxMDQwNTY4ODoxM0BzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiMzk1MzU2MjY5ODU0OTk6MTNAbGlkXCIsXG4gICAgXCJuYW1lXCI6IFwic+G0nMm0ybTKjyDhtI3htIDKn8mq4bSL8J+arMOXzZzDl1wiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ01xaDBHY1EyL3U1dEFZWUFTQUFLQUE9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwieVV6Nnk1Mm9Gbk1QenFUeVk5Y3hvZjRDU2QvY3RWM0J2UVdyckRWd21Idz1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCI5WGM1d2JPWGhPZDB0Nm1hemUvKytUR0pCZXJMY1o0Sktmbi9HaldXV01VL1llWXNabWt3WHl2VG1rem45VzdKcURLOUxKVUNNTUVaL0RDQW01dC9Bdz09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCIvcXMzSFdMUzY2bkI1TGVXTVB0NVRFbTNpOWNPWWlLQ08xMDQ5eGQ2bHFtemJqdVlYSG5rcGE5QUUxWlZ0YVNRU0V5TGlIM09aVkg3dFY5LzlvYnZEQT09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCI5MjMwMTA0MDU2ODg6MTNAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAyMDEsXG4gICAgICAgICAgNzYsXG4gICAgICAgICAgMjUwLFxuICAgICAgICAgIDIwMyxcbiAgICAgICAgICAxNTcsXG4gICAgICAgICAgMTY4LFxuICAgICAgICAgIDIyLFxuICAgICAgICAgIDExNSxcbiAgICAgICAgICAxNSxcbiAgICAgICAgICAyMDYsXG4gICAgICAgICAgMTY0LFxuICAgICAgICAgIDI0MixcbiAgICAgICAgICA5OSxcbiAgICAgICAgICAyMTUsXG4gICAgICAgICAgNDksXG4gICAgICAgICAgMTYxLFxuICAgICAgICAgIDI1NCxcbiAgICAgICAgICAyLFxuICAgICAgICAgIDczLFxuICAgICAgICAgIDIyMyxcbiAgICAgICAgICAyMjAsXG4gICAgICAgICAgMTgxLFxuICAgICAgICAgIDkzLFxuICAgICAgICAgIDE5MyxcbiAgICAgICAgICAxODksXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxNzEsXG4gICAgICAgICAgMTcyLFxuICAgICAgICAgIDUzLFxuICAgICAgICAgIDExMixcbiAgICAgICAgICAxNTIsXG4gICAgICAgICAgMTI0XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJhbmRyb2lkXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MjA2MTQzNjYsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFIMUxcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUgxTC5qc29uIjogIntcImtleURhdGFcIjpcIkl0L05xOHFNc0QwOVpCcUh5YmJiWjFDMFhBQ2Zrc0pzSUVIZ2JwNTdmSms9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MjE3MzIxNjcxLFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MTk4MTM5NzgwNzdcIn0iCn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "Suhail",


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
