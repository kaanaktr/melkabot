const Discord = require('discord.js');
const db = require('wio.db');

exports.run = async (client, message, args) => {
  const nn = new Discord.MessageEmbed().setThumbnail();
  if(!message.member.permissions.has('ADMINISTRATOR')) return message.channel.send(nn.setImage('https://media.giphy.com/media/Y41ynggo39awUmeg70/giphy.gif').setTitle(`Bir hata oldu!`).setThumbnail(message.author.avatarURL({dynamic: true})).setDescription(`**•** \`+küfür kısıt / kapat\` **kullanmak için,** \`Yönetici\` **yetkisine sahip olman gerekiyor.**`)).then(a => a.delete({timeout: 10000}));

if(!args[0]) return message.channel.send(nn.setColor('#00001').setTitle('Bir hata oldu!').setDescription(`küfür kısıtmak istersen **+küfür kısıt** yazmalısın.`))
if(args[0] === 'kısıt') {
db.set(`küfür.${message.guild.id}`, true);
return message.channel.send(nn.setTitle(`İşte bu kadar!`).setDescription('Küfür kısıtlaması başarıyla açıldı.')).then(a => a.delete({timeout: 10000}));
} else if(args[0] === 'kapat') {
db.delete(`küfür.${message.guild.id}`);
return message.channel.send(nn.setTitle('İşte bu kadar!').setDescription('Küfür kısıtlaması başarıyla kapatıldı.')).then(a => a.delete({timeout: 10000}));
}
};
exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
  permLevel: 0
}

exports.help = {
  name: 'küfür'
};