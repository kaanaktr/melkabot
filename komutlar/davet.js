const Discord = require('discord.js');
const client = new Discord.Client();
const ayarlar = require('../ayarlar.json');
//

exports.run = (client, message) => {
  const embed = new Discord.MessageEmbed()
    .setAuthor(message.author.username, message.author.displayAvatarURL({dynamic: true}))
  .setColor("BLUE")
  .setFooter(`© ${client.user.username}` , client.user.displayAvatarURL({dynamic: true}))
  .setThumbnail("")
  .setDescription('Küfür-Reklam Engellemesi İçin Botu Kendi Sunucuna Davet Edebilirsin..')
  .setTimestamp()
  .addField("Linkiler:", `**[Destek Sunucusu](https://discord.gg/FgvzsCFQzs)**\n**[Davet Linki](https://discord.com/oauth2/authorize?client_id=794484818020532224&scope=bot&permissions=8)**`, false)
  .setURL('')
  	.setThumbnail(client.user.displayAvatarURL({dynamic: true}));

  message.channel.send({embed});
};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
  permLevel: 0
}

exports.help = {
  name: 'davet'
};