const Discord = require('discord.js');
const db = require('wio.db')
const Jimp = require('jimp')

exports.run = (client, message, args) => { 

 var user = message.mentions.users.first() || message.author; 
  
const embed = new Discord.MessageEmbed()
.setAuthor(user.username, user.displayAvatarURL({dynamic:true}))
.setColor("BLUE")
.setImage(user.displayAvatarURL({dynamic:true}))
message.channel.send(embed)
};
exports.conf = {
  enabled: true,  
  guildOnly: false, 
  aliases: ['avatar'], 
  permLevel: 0
};

exports.help = {
  name: 'pp',
  description: 'taslak', 
  usage: 'sayac-hg-msg'
};