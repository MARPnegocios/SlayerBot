const aoi = require('aoi.js')
const bot = new aoi.Bot({
  token: process.env.token,
  prefix: [`$getServerVar[prefix]`, `<@!967883748462981170>`],
  intents: "all",
})

const fs = require('fs');
const files = fs.readdirSync('./events').filter(file => file.endsWith('.js'))
files.forEach(x => {
require(`./events/${x}`) (bot)
});

const {Panel} = require("@akarui/aoi.panel")

bot.variables({
  prefix: ".",
  c: "BLACK",
  version1: "0.1"
})

bot.status({
  text: "Slayer Bot | By Marp",
  type: "PLAYING",
  time: 12,
  status: "dnd"
})

bot.onGuildJoin()
bot.onJoin()
bot.onMessage()
bot.onInteractionCreate()
bot.onMessageDelete()

bot.joinCommand({ 
channel: "1037728794800304239", 
code: ` $onlyif[$guildID==1037433447490261122; $sendMessage[<@$AuthorID> Joined The Server;no] 
`
}) 

bot.command({
  name: "<@$clientID>", 
aliases: ["<@!$clientID"],
code: `
Hi <@$authorID>
`,
nonPrefixed: "true"
})

const panel = new Panel({
    username: process.env.user ,
    password: process.env.password ,
    secret: require('crypto').randomBytes(16).toString("hex"),
    port: 3000,
    bot: bot,
    mainFile: "index.js",
    commands: "./comandos",

})
panel.loadPanel()

panel.onError()

const load = new aoi.LoadCommands(bot)

load.load(bot.cmd, "./comandos/")

bot.readyCommand({
  channel: "1038442084748775506",
  code: `$log[inicie sesion como $usertag[$clientid]]`
})

const express = require('express')
const app = express();

app.get("/", async (req, res) => {
  res.send('En linea')
})

app.listen(3000, async () => {
  console.log('App lista')
})

                            