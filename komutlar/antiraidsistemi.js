const Discord = require('discord.js');
const db = require('wio.db')
exports.run = (client, message, args) => { 

if (!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send(` Bu komutu kullanabilmek için "\`Yönetici\`" yetkisine sahip olmalısın.`);
  
  const sec = args[0]  

if (!sec) {
  return message.channel.send(new Discord.MessageEmbed().setColor("RED").setDescription(`Anti Raid Bot Sistemi Nedir?\nEğer Açarsanız Sunucu Sahibinin İzni Olmadan Sunucuya Başka Bot Sokmaz. Giren Botlar Otomatik Atılır.\nÖrnek Kullanımı \`+anti-raid-bot-sistemi aç/kapat #logkanalı\`
`));
}
  
  if (sec == "aç") {
    const kanal = message.mentions.channels.first()
  if (!kanal) {
    return message.reply(`Anti Raid Bot Sistemi Örnek Kullanımı \`+anti-raid-bot-sistemi aç/kapat #logkanalı\``)
  }
    db.set(`antiraidK_${message.guild.id}`, kanal.id)
    return message.channel.send(new Discord.MessageEmbed().setColor("GREEN").setDescription(`:white_check_mark: Kayıt Kanalını ${kanal} Olarak Ayarladım.`))
      }
    

  
    if (sec == "kapat") {
    db.delete(`antiraidK_${message.guild.id}`)
    message.channel.send(new Discord.MessageEmbed().setColor("GREEN").setDescription(`:white_check_mark: Kayıt Kanalını Başarıyla Kapattım!`))
  
  
    
  };
}
exports.conf = {
  enabled: true,  
  guildOnly: false, 
  aliases: ['antiraidbotsistemi'], 
  permLevel: 0
};

exports.help = {
  name: 'anti-raid-bot-sistemi',
  description: 'taslak', 
  usage: 'antiraid'
};