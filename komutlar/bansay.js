const Discord = require("discord.js");

exports.run = (client, message, args) => {

  let westraA = message.guild;
  westraA
    .fetchBans()
    .then(westra =>
    message.channel.send(new Discord.MessageEmbed().setColor("BLUE").setDescription(`<:hayir:786989720025694272> Sunucunuzda **${westra.size}** banlanmış üye bulunmaktadır.`))
  )
    .catch(console.error);
};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ["bansay"],
  permLevel: 0
};

exports.help = {
  name: "bansay"
};