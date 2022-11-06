module.exports = {
  name:"eval",
  aliases:["e"],
  code:`$eval[$message]
 $onlyif[$message[1]!=;{newEmbed:{description:evalua algo}}]
$onlyForIDs[$botOwnerID;828793291133681665;{newEmbed: {description:❌ **__Este comando solo puede ser ejecutado por  <@$botOwnerID>!__**}{footer:Ejecutado por $userTag[$authorID]:$authorAvatar}}]
`
}
