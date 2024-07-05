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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_16_39_07_05_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgODAsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMTQ4LFxuICAgICAgICAxODQsXG4gICAgICAgIDk1LFxuICAgICAgICAxMDcsXG4gICAgICAgIDE0NSxcbiAgICAgICAgNzEsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMTA0LFxuICAgICAgICAyMTEsXG4gICAgICAgIDgxLFxuICAgICAgICAxMCxcbiAgICAgICAgNTQsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMjAyLFxuICAgICAgICAxODUsXG4gICAgICAgIDExNyxcbiAgICAgICAgMjI1LFxuICAgICAgICAxNDcsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMTE1LFxuICAgICAgICAzNSxcbiAgICAgICAgMTkwLFxuICAgICAgICAyMDYsXG4gICAgICAgIDExNCxcbiAgICAgICAgMTgzLFxuICAgICAgICAxNTEsXG4gICAgICAgIDEwOSxcbiAgICAgICAgOSxcbiAgICAgICAgMjQ1LFxuICAgICAgICAxMDFcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNjMsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMTQ1LFxuICAgICAgICAxOTMsXG4gICAgICAgIDIwNixcbiAgICAgICAgMTU3LFxuICAgICAgICAxMjEsXG4gICAgICAgIDEwLFxuICAgICAgICAyMzUsXG4gICAgICAgIDExOSxcbiAgICAgICAgMTA1LFxuICAgICAgICAyMjYsXG4gICAgICAgIDU2LFxuICAgICAgICA0NSxcbiAgICAgICAgMTQ0LFxuICAgICAgICAyMTEsXG4gICAgICAgIDY2LFxuICAgICAgICAxNSxcbiAgICAgICAgMTY3LFxuICAgICAgICA2NyxcbiAgICAgICAgMTEsXG4gICAgICAgIDcwLFxuICAgICAgICA3MCxcbiAgICAgICAgMjQyLFxuICAgICAgICAxNDQsXG4gICAgICAgIDc5LFxuICAgICAgICA4NSxcbiAgICAgICAgMTIyLFxuICAgICAgICAxNjUsXG4gICAgICAgIDEzNixcbiAgICAgICAgMjMyLFxuICAgICAgICAxMTlcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDgsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMzksXG4gICAgICAgIDY4LFxuICAgICAgICA3NyxcbiAgICAgICAgMjI0LFxuICAgICAgICAxODgsXG4gICAgICAgIDIsXG4gICAgICAgIDEyLFxuICAgICAgICAzNixcbiAgICAgICAgODMsXG4gICAgICAgIDEwMCxcbiAgICAgICAgODksXG4gICAgICAgIDEzLFxuICAgICAgICA0NSxcbiAgICAgICAgMTUzLFxuICAgICAgICA0NyxcbiAgICAgICAgMjQ5LFxuICAgICAgICA3NCxcbiAgICAgICAgMjMwLFxuICAgICAgICAxNjEsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMjEzLFxuICAgICAgICAyNTIsXG4gICAgICAgIDg1LFxuICAgICAgICA2LFxuICAgICAgICAyNDgsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMjAyLFxuICAgICAgICAzNSxcbiAgICAgICAgMTA0LFxuICAgICAgICAxMjFcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTYyLFxuICAgICAgICAzMyxcbiAgICAgICAgMjA5LFxuICAgICAgICAyMjgsXG4gICAgICAgIDE3NCxcbiAgICAgICAgODIsXG4gICAgICAgIDQ4LFxuICAgICAgICAxMTYsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMTUsXG4gICAgICAgIDE5LFxuICAgICAgICAxNjIsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMTYzLFxuICAgICAgICA2NixcbiAgICAgICAgMjIzLFxuICAgICAgICAxOTksXG4gICAgICAgIDkyLFxuICAgICAgICAzMyxcbiAgICAgICAgMjQsXG4gICAgICAgIDIwMixcbiAgICAgICAgNjUsXG4gICAgICAgIDM0LFxuICAgICAgICA4OSxcbiAgICAgICAgMTA0LFxuICAgICAgICAxNzksXG4gICAgICAgIDE2LFxuICAgICAgICAxMDAsXG4gICAgICAgIDExNCxcbiAgICAgICAgMTkyLFxuICAgICAgICAyNTIsXG4gICAgICAgIDcxXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA5NixcbiAgICAgICAgMTk4LFxuICAgICAgICAxNzEsXG4gICAgICAgIDgsXG4gICAgICAgIDIwMyxcbiAgICAgICAgNixcbiAgICAgICAgMTkzLFxuICAgICAgICA4MyxcbiAgICAgICAgMTIyLFxuICAgICAgICAzOSxcbiAgICAgICAgMTMsXG4gICAgICAgIDU3LFxuICAgICAgICAxMDYsXG4gICAgICAgIDEzMCxcbiAgICAgICAgNTAsXG4gICAgICAgIDExNCxcbiAgICAgICAgOTcsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMTkzLFxuICAgICAgICAzNSxcbiAgICAgICAgMTI3LFxuICAgICAgICAxNTUsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMTg3LFxuICAgICAgICAyNDAsXG4gICAgICAgIDMwLFxuICAgICAgICA5MSxcbiAgICAgICAgMjA1LFxuICAgICAgICAyLFxuICAgICAgICA1NSxcbiAgICAgICAgMjA2LFxuICAgICAgICA4MFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMDUsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMjQyLFxuICAgICAgICA4OCxcbiAgICAgICAgMTMxLFxuICAgICAgICAxOCxcbiAgICAgICAgMjMzLFxuICAgICAgICAxMzEsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMzQsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMTIwLFxuICAgICAgICAyMzEsXG4gICAgICAgIDE2NSxcbiAgICAgICAgNTIsXG4gICAgICAgIDc5LFxuICAgICAgICAyMzYsXG4gICAgICAgIDk4LFxuICAgICAgICAxMjgsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMjUyLFxuICAgICAgICA0OSxcbiAgICAgICAgOTAsXG4gICAgICAgIDE0MSxcbiAgICAgICAgODYsXG4gICAgICAgIDE1NSxcbiAgICAgICAgNDIsXG4gICAgICAgIDUsXG4gICAgICAgIDE4MixcbiAgICAgICAgNzAsXG4gICAgICAgIDEwMSxcbiAgICAgICAgNzhcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMjA4LFxuICAgICAgICAgIDc1LFxuICAgICAgICAgIDM4LFxuICAgICAgICAgIDc3LFxuICAgICAgICAgIDE2NixcbiAgICAgICAgICAxNjgsXG4gICAgICAgICAgMjIyLFxuICAgICAgICAgIDE1LFxuICAgICAgICAgIDIzLFxuICAgICAgICAgIDI0NCxcbiAgICAgICAgICA1OSxcbiAgICAgICAgICAxNjEsXG4gICAgICAgICAgNzMsXG4gICAgICAgICAgNTYsXG4gICAgICAgICAgMjAyLFxuICAgICAgICAgIDIwMyxcbiAgICAgICAgICA5MyxcbiAgICAgICAgICAxODksXG4gICAgICAgICAgODcsXG4gICAgICAgICAgNyxcbiAgICAgICAgICAxNDMsXG4gICAgICAgICAgMjIyLFxuICAgICAgICAgIDgsXG4gICAgICAgICAgMjE3LFxuICAgICAgICAgIDgxLFxuICAgICAgICAgIDU0LFxuICAgICAgICAgIDU1LFxuICAgICAgICAgIDUwLFxuICAgICAgICAgIDEyLFxuICAgICAgICAgIDEzLFxuICAgICAgICAgIDEwMCxcbiAgICAgICAgICAxMDFcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNjcsXG4gICAgICAgICAgMjUyLFxuICAgICAgICAgIDgzLFxuICAgICAgICAgIDEzLFxuICAgICAgICAgIDE1OCxcbiAgICAgICAgICAyMDgsXG4gICAgICAgICAgMzEsXG4gICAgICAgICAgMTM1LFxuICAgICAgICAgIDExLFxuICAgICAgICAgIDEyNixcbiAgICAgICAgICAxMjUsXG4gICAgICAgICAgMjE0LFxuICAgICAgICAgIDEzMSxcbiAgICAgICAgICAxOTAsXG4gICAgICAgICAgNTcsXG4gICAgICAgICAgMjM1LFxuICAgICAgICAgIDE1MyxcbiAgICAgICAgICAyNTAsXG4gICAgICAgICAgMjE2LFxuICAgICAgICAgIDE1MixcbiAgICAgICAgICAxODcsXG4gICAgICAgICAgMjIsXG4gICAgICAgICAgMjIyLFxuICAgICAgICAgIDEwMSxcbiAgICAgICAgICAyNCxcbiAgICAgICAgICA1LFxuICAgICAgICAgIDEyMyxcbiAgICAgICAgICAxNDQsXG4gICAgICAgICAgMjcsXG4gICAgICAgICAgNDMsXG4gICAgICAgICAgMyxcbiAgICAgICAgICA4NVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDI0NSxcbiAgICAgICAgNjIsXG4gICAgICAgIDE5NCxcbiAgICAgICAgOSxcbiAgICAgICAgNDcsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMjQ2LFxuICAgICAgICAyNixcbiAgICAgICAgMTcxLFxuICAgICAgICAxMjgsXG4gICAgICAgIDIzNyxcbiAgICAgICAgODIsXG4gICAgICAgIDQ2LFxuICAgICAgICAxNzYsXG4gICAgICAgIDEyNixcbiAgICAgICAgMTUyLFxuICAgICAgICAyMzYsXG4gICAgICAgIDI2LFxuICAgICAgICAxMzYsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMjA2LFxuICAgICAgICAxMCxcbiAgICAgICAgOTksXG4gICAgICAgIDE3MixcbiAgICAgICAgMjA1LFxuICAgICAgICAxNDYsXG4gICAgICAgIDExMCxcbiAgICAgICAgNDEsXG4gICAgICAgIDIyMixcbiAgICAgICAgMTEzLFxuICAgICAgICAyMDAsXG4gICAgICAgIDE3NCxcbiAgICAgICAgOTEsXG4gICAgICAgIDU1LFxuICAgICAgICAxOTcsXG4gICAgICAgIDczLFxuICAgICAgICAxMjUsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMTI2LFxuICAgICAgICA3LFxuICAgICAgICAyNDIsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMTQ2LFxuICAgICAgICA5NCxcbiAgICAgICAgMjA2LFxuICAgICAgICA4OCxcbiAgICAgICAgMTcyLFxuICAgICAgICAxODgsXG4gICAgICAgIDExOCxcbiAgICAgICAgMTA1LFxuICAgICAgICAxNDUsXG4gICAgICAgIDg5LFxuICAgICAgICAxMTksXG4gICAgICAgIDIxNCxcbiAgICAgICAgOCxcbiAgICAgICAgMjQ4LFxuICAgICAgICAzNCxcbiAgICAgICAgOTksXG4gICAgICAgIDIwNSxcbiAgICAgICAgMjQwLFxuICAgICAgICAyOSxcbiAgICAgICAgMTc4LFxuICAgICAgICAxMTgsXG4gICAgICAgIDZcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDEzNSxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJ2Y0xtMVE5bVorSjJuRG56Y2w2SURPL01QQkloWkdkeUhZRGpUUW1TZkNBPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjkyMzAxMDQwNTY4OEBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiOEI4RUJEOERBNUM0MjZFMzVCQkM1QzcyNzAxMEVEOTZcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzIwMTk3NTkxXG4gICAgfSxcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiOTIzMDEwNDA1Njg4QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCJENEI4NkE0NzA1RjhFMUYzQjM4MkEwNTUwRDVCQzJEQ1wiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MjAxOTc1OTJcbiAgICB9LFxuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCI5MjMwMTA0MDU2ODhAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIjI2OTA1REE5RjQ3RERBOTNBMTQ0MjRFOURGNkNBRkNBXCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTcyMDE5NzU5NlxuICAgIH0sXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjkyMzAxMDQwNTY4OEBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiQUUxREY5NjgyQzI0QkM0RTdBMzdBODMzQjEzNEYwMzVcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzIwMTk3NTk3XG4gICAgfVxuICBdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMSxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIjZuMndEQ1dPU01HbVNnWFYxa2hwWWdcIixcbiAgXCJwaG9uZUlkXCI6IFwiMjU5ODllZWEtOWFlNC00N2JjLWJkM2MtOWFhOWM3ZjMyYWZhXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDU3LFxuICAgICAgNDYsXG4gICAgICAyMDksXG4gICAgICAyMSxcbiAgICAgIDU1LFxuICAgICAgMTc0LFxuICAgICAgMjAzLFxuICAgICAgMCxcbiAgICAgIDE2MixcbiAgICAgIDExMSxcbiAgICAgIDEsXG4gICAgICAxNzksXG4gICAgICAyNDMsXG4gICAgICAyMzYsXG4gICAgICA0MSxcbiAgICAgIDc0LFxuICAgICAgMjI5LFxuICAgICAgMTc5LFxuICAgICAgMTc1LFxuICAgICAgMjE3XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDQ1LFxuICAgICAgMjUyLFxuICAgICAgMTU1LFxuICAgICAgODMsXG4gICAgICA3NCxcbiAgICAgIDE4NixcbiAgICAgIDEzNCxcbiAgICAgIDE5MCxcbiAgICAgIDc3LFxuICAgICAgMTg5LFxuICAgICAgNDAsXG4gICAgICA2OSxcbiAgICAgIDIwNyxcbiAgICAgIDE4MixcbiAgICAgIDE3OSxcbiAgICAgIDE1NixcbiAgICAgIDE5LFxuICAgICAgMjM4LFxuICAgICAgMTM0LFxuICAgICAgMTA3XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIlNRTUQ5VktQXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCI5MjMwMTA0MDU2ODg6OUBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiMzk1MzU2MjY5ODU0OTk6OUBsaWRcIixcbiAgICBcIm5hbWVcIjogXCJNQUxJS1wiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ01paDBHY1Ewc09ndEFZWUJDQUFLQUE9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwieVV6Nnk1Mm9Gbk1QenFUeVk5Y3hvZjRDU2QvY3RWM0J2UVdyckRWd21Idz1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCIydkpyRWh6aWZhNWFJK3lJWGdhNHRzbVRBZXJBYVZWNXBkWkRHdEFYZXMzZytPaDkxa3ZYSDZsQUFFZEJDQW91alA2TnNxOTlVVUZxM1ZCVnZHMWREUT09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJaNzBORS9SUlE3NG5vSFUyQUVIRzhmSURxcUN2Z2JPSmlxYnRGTW9ZaW9qZTlwUWd5Y3NQWkpReVR2eHphM1JpK2FzRVp2QUpVT2VKS2s2am1pM09Edz09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCI5MjMwMTA0MDU2ODg6OUBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDIwMSxcbiAgICAgICAgICA3NixcbiAgICAgICAgICAyNTAsXG4gICAgICAgICAgMjAzLFxuICAgICAgICAgIDE1NyxcbiAgICAgICAgICAxNjgsXG4gICAgICAgICAgMjIsXG4gICAgICAgICAgMTE1LFxuICAgICAgICAgIDE1LFxuICAgICAgICAgIDIwNixcbiAgICAgICAgICAxNjQsXG4gICAgICAgICAgMjQyLFxuICAgICAgICAgIDk5LFxuICAgICAgICAgIDIxNSxcbiAgICAgICAgICA0OSxcbiAgICAgICAgICAxNjEsXG4gICAgICAgICAgMjU0LFxuICAgICAgICAgIDIsXG4gICAgICAgICAgNzMsXG4gICAgICAgICAgMjIzLFxuICAgICAgICAgIDIyMCxcbiAgICAgICAgICAxODEsXG4gICAgICAgICAgOTMsXG4gICAgICAgICAgMTkzLFxuICAgICAgICAgIDE4OSxcbiAgICAgICAgICA1LFxuICAgICAgICAgIDE3MSxcbiAgICAgICAgICAxNzIsXG4gICAgICAgICAgNTMsXG4gICAgICAgICAgMTEyLFxuICAgICAgICAgIDE1MixcbiAgICAgICAgICAxMjRcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcyMDE5NzU5MCxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQUgxTFwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBSDFMLmpzb24iOiAie1wia2V5RGF0YVwiOlwiSXQvTnE4cU1zRDA5WkJxSHliYmJaMUMwWEFDZmtzSnNJRUhnYnA1N2ZKaz1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoyMTczMjE2NzEsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMTcxOTgxMzk3ODA3N1wifSIKfQ=="  // PUT your SESSION_ID 


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
