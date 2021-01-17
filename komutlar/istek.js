const Discord = require('discord.js');

exports.run = async(client, message, args) => {
    let type = args.slice(0).join(' ');
    if (type.length < 1) return message.channel.send('Doğru Kullanım : !istek <istekkod>')
const embed = new Discord.RichEmbed()
.setColor('#00ff00')
.setDescription('İstek Kodunuz başarıyla bildirildi \n En Yakın Zamanda <#Etiketlenecek Kanal ID> Kanalından Cevap Vereceğiz. ')
message.channel.send(embed)
const embed2 = new Discord.RichEmbed()
.setColor("#ff0009")
.setDescription(`**${message.author.tag}** adlı kullanıcının **isteği ;**`)
.addField(`<a:lux_mavi1:743808399212544081> **Gönderen Kişinin Bilgileri**`, `<a:lux_kirmizi1:743808465096671243> Kullanıcı Adı: ${message.author.username}\n<a:lux_kirmizi1:743808465096671243> Kullanıcı ID: ${message.author.id}\n<a:lux_kirmizi1:743808465096671243> Kullanıcı Tagı: ${message.author.discriminator}`)
.addField("<a:lux_mavi1:743808399212544081> **İstenilen Komut/Kod ;**", type)
.setThumbnail(message.author.avatarURL)
client.channels.get('Mesaj Atılıcak Kanal ID').send(embed2); // Kanal ID 


};

exports.conf = {
    enabled: true,
    guildOnly: true,
    aliases: [],
  permLevel: 0
}

exports.help = {
    name: 'istek',
    description: 'Sunucuya giren kullanıcıya seçtiğiniz rolü otomatik verir.',
    usage: 'istek <istek>'
}
