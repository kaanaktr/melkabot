const Discord = require('discord.js');
const data = require('wio.db');

exports.run = async (client, message, args) => {
  const nn = new Discord.MessageEmbed().setThumbnail();
  if(message.author.id !== message.guild.owner.user.id) return message.reply('<:hayir:786989720025694272> Bu komutu kullanabilmek için **Sunucu Sahibi** olmalısın!')
const sistem = await data.fetch(`spam.${message.guild.id}`);
if(!sistem) return message.channel.send(nn.setColor("RED").setDescription(`<:hayir:786989720025694272> Spam koruma zaten aktif değil.`)).then(a => a.delete({timeout: 10000}));

data.delete(`spam.${message.guild.id}`);
return message.channel.send(nn.setTitle(`İşlem başarılı!`).setColor("GREEN").setDescription(`<a:evet:784361609682092093> Spam koruma başarıyla kapatıldı.`)).then(a => a.delete({timeout: 10000}));

};
exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ['spamkapat', 'spam-koruma-kapat', 'spam-korumakapat', 'spamkoruma-kapat'],
  permLevel: 0
}

exports.help = {
  name: 'spam-kapat'
};