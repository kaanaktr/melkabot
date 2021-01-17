const Discord = require('discord.js');

 exports.run = (client, message, args) => {
   
   if (!message.guild) {
  const ozelmesajuyari = new Discord.MessageEmbed()
  .setColor(0xFF0000)
  .setTimestamp()
  .setAuthor(message.author.username, message.author.displayAvatarURL({dynamic: true}))
  .addField(':warning: Uyarı :warning:', '`oylama` adlı komutu özel mesajlarda kullanamazsın.')
  return message.author.send(ozelmesajuyari); }

   let question = args.join(' ');

   let user = message.author.username

   if (!question) return message.channel.send(

     new Discord.MessageEmbed()

     .setDescription(`:x: **Eksik Kullanım: +oylama <oylanacak şey>**`)
   .setColor("RED"));

     console.log("oylama komutu " + message.author.username + '#' + message.author.discriminator + " tarafından kullanıldı.")
     message.channel.send(

       new Discord.MessageEmbed()

       .setColor("RED")
       .setThumbnail(message.author.displayAvatarURL({dynamic: true}))
       .setTimestamp()
       .setFooter('Oylama Sistemi')
      .setTitle(`**Oylama**`, client.user.displayAvatarURL({dynamic: true}))
       .setDescription(`\`\`\`${question}\`\`\``, true)).then(function(message) {

         message.react('✅');

         message.react('❌');

       });
message.delete();
     };


exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
  permLevel: 0
}

exports.help = {
  name: 'oylama'
};