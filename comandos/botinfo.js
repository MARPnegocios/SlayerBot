module.exports = {
  name:"botinfo",
  aliases:["bot"],
  code:`
  
$author[1;$client[user.username];$client[user.avatar]]

$thumbnail[1;$client[user.avatar]]

$addField[1;Version;\`\`\`k
$getVar[version1]\`\`\`;yes]

$addField[1;Creado con; \`\`\`k
aoi.js\`\`\`;yes]

$addField[1;Fecha de creacion del Bot;\`\`\`
$creationDate[$clientID]\`\`\`;yes]

$addField[1;Developer/Bot Owner;\`\`\`
$userTag[$botOwnerID]\`\`\`;yes]

$addField[1;RAM;\`\`\`k
$ram MB\`\`\`;yes]

$addField[1;Uso CPU ;\`\`\`k
$cpu\`\`\`;yes]

$addField[1;Ping; \`\`\`k
$ping ms\`\`\`;yes]

$addField[1;Tiempo Activo;\`\`\`fix
$djsEval[Math.floor(client.uptime / 86400000);;yes] days, $djsEval[Math.floor(client.uptime / 3600000) % 24;;yes] hours, $djsEval[Math.floor(client.uptime / 60000) % 60;;yes] minutes, $djsEval[Math.floor(client.uptime / 1000) % 60;;yes] seconds\`\`\`;yes]

$addField[1;Numero de Comandos;\`\`\`fix
$commandsCount\`\`\`;yes]

$addField[1;Numero de usuarios viendo;\`\`\`fix
$allMembersCount\`\`\`;yes]

$addField[1;Numero de canales viendo; \`\`\`k
$allChannelsCount\`\`\`;yes]

$addField[1;Numero de Servidores viendo;\`\`\`k
$serverCount\`\`\`;yes]

$addField[1;Bot ID;\`\`\`k
$finduser[$clientID]\`\`\`;yes]

$addField[1;Bot Tag;\`\`\`\
$userTag[$clientID]\`\`\`;yes] 

$addButton[1;Bot Invite;5;https://discord.com/api/oauth2/authorize?client_id=967883748462981170&permissions=8&scope=bot%20applications.commands;no]

$color[1;$getVar[c]]

$cooldown[5s;No ejecutes el comando tan rapido. Espera %time% para volver a ejecutarlo!]
`
}
