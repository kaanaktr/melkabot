const Discord = require("discord.js")
const db = require("wio.db")

exports.run = async(client, message, args) => {
  
  const yetkiyok = new Discord.MessageEmbed()
  .setColor("PURPLE")
  .setAuthor(`Bu Komutu Kullanmak İçin Yeterli İzine Sahip Değilsin`, message.author.avatarURL)
  
    if (!message.member.hasPermission("ADMINISTRATOR")) {
        return message.channel.send(' **Bu Komutu Kullanmak için** \`Yönetici\` **Yetkisine Sahip Olman Lazım** ');
    } 
  
  var sebep = args.slice(1).join(" ") || "Belirtilmemiş"
  
  const kisiyok = new Discord.MessageEmbed()
  .setColor("PURPLE")
  .setAuthor(`Bir Kişiyi Etiketlemelisin`, message.author.avatarURL)
  
  var kisi = message.mentions.users.first()
  
  if (!kisi)
    return message.channel.send(kisiyok)
  
  let uyarı = await db.add(`uyarı.${kisi.id+message.guild.id}`, 1)
  
  const tamamdir = new Discord.RichEmbed()
  .setColor("PURPLE")
  .setAuthor(`Kullanıcı Başarıyla Uyarıldı`, message.author.avatarURL)
  
  message.channel.send(tamamdir)
  
  let modlogkanal = message.guild.channels.find(db.get(`uyarsunucu_${message.guild.id}`))
  
  if (!modlogkanal) return;
  
  const sbb = new Discord.MessageEmbed()
  .setColor("PURPLE")
  .setTitle("Kullanıcı Sunucuda Uyarıldı!")
  .addField(`Uyarılan Kişi`, `${kisi}`)
  .addField(`Uyaran Kişi`, `${message.author}`)
  .addField(`Sebep`, `${sebep}`)
  .setTimestamp()

  message.guild.channels.get(modlogkanal.id).send(sbb)
  
}

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ["uyar", "warn", "uyarı"],
  perm: 0
}

exports.help = {
  name: "Uyar",
  description: "Kişiyi Uyarır",
  usage: "/uyar @Kişi Sebep"
}
