const Discord = require('discord.js');

exports.run = (client, msg, args) => {
  
  if (!msg.member.roles.has("Sharer Rol ID")) return msg.channel.send("Bu komutu sadece **Kod Paylaşım Ekibi** kullanabilir!")
  
  if(msg.channel.id !== "Paylaşım kanalı ID") return msg.channel.send("Bu komutu sadece <#Paylaşım kanalı ID> kanalında **kullanabilirsin!**")
  
  let kodIsım = args[0]
  if(!kodIsım) return msg.channel.send("Bir kod ismi **belirt!**")
  
  let kodLink = args[1]
  if(!kodLink) return msg.channel.send("Bir kod linki **belirt!**")
  
  
  msg.guild.createChannel(kodIsım, {
    type: "text",
    parent: "743946281377857647"//Kanalı Oluşturacağı Kategori ID
  }).then(channel => {
    
    let embed = new Discord.RichEmbed()
    .setAuthor("Lux | Code Share - Kod Paylaşıldı")
    .addField("<a:lux_loading1:743808425833529354> Yetkili Bilgileri", `<a:lux_loading1:743808425833529354> Yetkili İsim \`${msg.author.tag}\` \n <a:lux_loading1:743808425833529354> Yetkili ID \`${msg.author.id}\``)
    .addField("<a:lux_sari1:743808333785595924> Kod Bilgileri", `<a:lux_sari1:743808333785595924> Kod İsmi \`${kodIsım}\` \n<a:lux_sari1:743808333785595924> Kod Kategorisi \`LuxScript\` `)
    .setColor("RED")
    
    msg.channel.send(`\`${kodIsım}\` adlı kod **paylaşıldı!**`)
    
 client.channels.get("Kod Log ID").send(embed)
    
    
    const kod = new Discord.RichEmbed()
    .setAuthor(`"${kodIsım}" Adlı Kod Paylaşıldı!`)
    .addField("Kod Hakkında",`<a:lux_loading1:743808425833529354> Yetkili İsim \`${msg.author.tag}\` \n<a:lux_loading1:743808425833529354> Yetkili ID \`${msg.author.id}\` \n\n<a:lux_ok1:743808349237411961> Kod Linki **・** [Tıkla](${kodLink})`)
    .setTimestamp()
    .setColor("RED")
    channel.send(kod)
  
  })
  
}
exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['lkod', 'lkodpaylaş'],
    permLevel: 0
  };
  
exports.help = {
 name: 'lkod-paylaş',
 description: 'kod paylaşmaya yarar',
 usage: '!fkod <kod isim> <kod linki>'
};

