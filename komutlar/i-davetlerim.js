const Discord = require("discord.js");
const Database = require("../Helpers/Database");
// exports.onLoad = (client) => {};
/**
 * @param {Discord.Client} client 
 * @param {Discord.Message} message 
 * @param {Array<String>} args 
 */
exports.run = async (client, message, args) => {
  let member = message.mentions.members.first() || message.author;
   const db = new Database("./Servers/" + message.guild.id, "Invites");
    var data = db.get(`invites.${member.id}`) || { total: 0, fake: 0, inviter: null, regular: 0, bonus: 0, leave: 0 };
    var embed = new Discord.MessageEmbed()
    .setAuthor(member.tag, member.displayAvatarURL())
    .setDescription(`Senin **${(data.total || 0) + (data.bonus || 0) +- (data.leave || 0)}** daveti var! (**${data.regular || 0}** düzenli, **${data.bonus || 0}** bonus, **${data.leave || 0}** çıkan, **${data.fake || 0}** sahte)`)
    .setColor("BLUE")
    .setTimestamp()
    .setFooter(client.user.username, client.user.displayAvatarURL({dynamic:true}));
    message.channel.send(embed);
};
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};
exports.help = {
  name: 'rank',
  description: 'Logo Yaparsınız',
  usage: 'm-logo <yazı>'
};
