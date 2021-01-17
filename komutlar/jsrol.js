const Discord = require('discord.js');
module.exports.run = async (bot, message, args, guild, user) => {
    let sahip = message.member
   let jsrolu = message.guild.roles.find('id', 'Rol ID')
  if(message.guild.id !== 'Sunucu ID') return message.channel.sendEmbed(new Discord.RichEmbed().setDescription('Bu komudu sadece Kod Paylaşım sunucusunda kullanabilirsin.').setColor('BLUE'));
    if(!jsrolu) return message.channel.send('Bu sunucuda **JavaScript** isminde bir rol bulunmamakta.')
      if(message.member.roles.has(jsrolu.id)) return message.channel.send('<a:hype:720991905554497697> **JavaScript Rolün Var**')

  try {
      await (sahip.addRole(jsrolu.id));
      message.channel.sendMessage('<a:lux_done1:743808488517533737> **Başarılı**\n**<a:lux_done1:743808488517533737> JavaScript Rolü Verildi.**')
    } catch (error) { // eğer hata olursa bu hatayı öğrenmek için hatayı konsola gönderelim.
      return message.channel.send('**Rolün Zaten Var**')
   
};
}
exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: []
};

exports.help = {
  name: "js",
  description: "altyapı rolü verir.",
  usage: "js"
};