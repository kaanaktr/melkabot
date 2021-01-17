const Discord = require('discord.js');
const data = require('wio.db');

exports.run = async (client, message, args) => {

message.channel.send(new Discord.MessageEmbed().setTitle('Melka Giriş & Sayaç Sistem').setDescription(`\`+sayaç [#kanalEtiket 1000]\` 
**Sunucun için toplam bir rakam tut**

\`+sayaç-kapat\` 
**Kurulu olan sayaç sistemi kapatır**`)
.setImage('https://media.discordapp.net/attachments/784329580805881856/786852447460524042/Gif_Dosya_2.gif').setThumbnail(message.author.avatarURL() ? message.author.avatarURL({dynamic: true}) : 'https://cdn.glitch.com/8e70d198-9ddc-40aa-b0c6-ccb4573f14a4%2F6499d2f1c46b106eed1e25892568aa55.png'));

};
exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
  permLevel: 0
}

exports.help = {
  name: 'sayaç-sistem'
};