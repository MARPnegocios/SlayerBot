module.exports = {
  name:"serverinfo",
  aliases:["server"],
  code:`$author[1;$serverName[$guildID];$serverIcon]

$addField[1;Usuarios;\`\`\`k
$membersCount\`\`\`;yes]

$addField[1;Roles;\`\`\`k
$roleCount\`\`\`;yes]  

$addField[1;Emojis;\`\`\`k
$emojiCount[$guildID]\`\`\`;yes]

$addField[1;Canales de Voz;\`\`\`k
$djsEval[message.guild.channels.cache.filter(channel => channel.type == "GUILD_VOICE").size;yes]\`\`\`;yes]

$addField[1;Canales de Texto;\`\`\`k
$djsEval[message.guild.channels.cache.filter(channel => channel.type == "GUILD_TEXT").size;yes]\`\`\`
;yes]

$addField[1;Server ID;\`\`\`k
$guildID\`\`\`;yes]

$addField[1;Fecha de Creacion;\`\`\`k
$creationDate[$guildID;date]\`\`\`;yes]

$addField[1;Owner;<@!$ownerID>;yes]

$color[1;$getVar[c]]

$thumbnail[1;$servericon]

$cooldown[5s;No ejecutes el comando tan rapido. Espera %time% para volver a ejecutarlo!]
`
}
