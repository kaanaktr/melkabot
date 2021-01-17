const Discord = require('discord.js');
const data = require('wio.db');
const moment = require('moment');
moment.locale('tr');
require("moment-duration-format");
exports.run = async (client, message, args) => {
  
  if (!message.guild) {
  const ozelmesajuyari = new Discord.MessageEmbed()
  .setColor(0xFF0000)
  .setTimestamp()
  .setAuthor(message.author.username, message.author.avatarURL)
  .addField(':warning: Uyarı :warning:', '`up` adlı komutu özel mesajlarda kullanamazsın.')
  return message.author.send(ozelmesajuyari); }
message.channel.send(new Discord.MessageEmbed()
                     .setColor("BLUE")
                     .setAuthor("Melka Bot İstatistik Menüsü", client.user.displayAvatarURL({dynamic: true}))
.setThumbnail('https://cdn.glitch.com/4ea1e74d-1c99-490a-9c13-d46ec11bc464%2Fe4d668d1400a3a4541f861cb383074e6.gif')
.addField('• Çalışma Süresi', '```'+moment.duration(client.uptime).format("D [gün], H [saat], m [dakika], s [saniye]")+'```', true)
.addField('• Sunucular', '```'+client.guilds.cache.size+'```', true)
.addField('• Users', '```'+client.users.cache.filter(a => !a.allMembersCount).size+'```', true)
.addField('• Ping', '```'+client.ws.ping.toFixed(0)+' ms```', true)
.addField('• Server Shards', '```0```', true));

};
exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ["i"],
  permLevel: 0
}

exports.help = {
  name: 'istatistik'
};