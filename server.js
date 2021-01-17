const Discord = require("discord.js");
const client = new Discord.Client();
const ayarlar = require("./ayarlar.json");
const chalk = require("chalk");
const moment = require("moment");
const { Client, Util } = require("discord.js");
const fs = require("fs");
const db = require("wio.db");
const http = require("http");
const express = require("express");
require("./util/eventLoader.js")(client);
const request = require("request");

const app = express();
app.get("/", (request, response) => {
  console.log(Date.now() + " Ping tamamdır,");
  response.sendStatus(200);
});
app.listen(process.env.PORT);
setInterval(() => {
  http.get(`http://polished-glamorous-dandelion.glitch.me/`);
}, 280000);

var prefix = ayarlar.prefix;

const log = message => {
  console.log(`${message}`);
};

client.commands = new Discord.Collection();
client.aliases = new Discord.Collection();
fs.readdir("./komutlar/", (err, files) => {
  if (err) console.error(err);
  log(`[Melka] ${files.length} komut yüklenecek.`);
  files.forEach(f => {
    let props = require(`./komutlar/${f}`);
    log(`[Melka] Yüklenen komut: ${props.help.name}.`);
    client.commands.set(props.help.name, props);
    props.conf.aliases.forEach(alias => {
      client.aliases.set(alias, props.help.name);
    });
  });
});

client.reload = command => {
  return new Promise((resolve, reject) => {
    try {
      delete require.cache[require.resolve(`./komutlar/${command}`)];
      let cmd = require(`./komutlar/${command}`);
      client.commands.delete(command);
      client.aliases.forEach((cmd, alias) => {
        if (cmd === command) client.aliases.delete(alias);
      });
      client.commands.set(command, cmd);
      cmd.conf.aliases.forEach(alias => {
        client.aliases.set(alias, cmd.help.name);
      });
      resolve();
    } catch (e) {
      reject(e);
    }
  });
};

client.load = command => {
  return new Promise((resolve, reject) => {
    try {
      let cmd = require(`./komutlar/${command}`);
      client.commands.set(command, cmd);
      cmd.conf.aliases.forEach(alias => {
        client.aliases.set(alias, cmd.help.name);
      });
      resolve();
    } catch (e) {
      reject(e);
    }
  });
};

client.unload = command => {
  return new Promise((resolve, reject) => {
    try {
      delete require.cache[require.resolve(`./komutlar/${command}`)];
      let cmd = require(`./komutlar/${command}`);
      client.commands.delete(command);
      client.aliases.forEach((cmd, alias) => {
        if (cmd === command) client.aliases.delete(alias);
      });
      resolve();
    } catch (e) {
      reject(e);
    }
  });
};

client.elevation = message => {
  if (!message.guild) {
    return;
  }
  let permlvl = 0;
  if (message.member.hasPermission("BAN_MEMBERS")) permlvl = 2;
  if (message.member.hasPermission("ADMINISTRATOR")) permlvl = 3;
  if (message.author.id === ayarlar.sahip) permlvl = 4;
  return permlvl;
};

var regToken = /[\w\d]{24}\.[\w\d]{6}\.[\w\d-_]{27}/g;
// client.on('debug', e => {
//   console.log(chalk.bgBlue.green(e.replace(regToken, 'that was redacted')));
// });

client.on("warn", e => {
  console.log(chalk.bgYellow(e.replace(regToken, "that was redacted")));
});

client.on("error", e => {
  console.log(chalk.bgRed(e.replace(regToken, "that was redacted")));
});

client.on("message", async message => {
  if (message.channel.type !== "text") return;
  if (message.content.length >= 5) {
    const caps = await db.fetch(`caps.${message.guild.id}`);
    if (!caps) return;

    let kontrol = message.content.toUpperCase();
    if (message.content === kontrol) {
      if (message.member.permissions.has("BAN_MEMBERS")) return;
      if (message.mentions.users.first()) return;

      return message.delete();
    }
  }
});

client.on("message", async message => {
  if (message.channel.type !== "text") return;
  const küfür = await db.fetch(`küfür.${message.guild.id}`);
  if (!küfür) return;
  const blacklist = [
    "oç",
    "amk",
    "ananı sikiyim",
    "ananıskm",
    "piç",
    "amk",
    "amsk",
    "sikim",
    "sikiyim",
    "orospu çocuğu",
    "piç kurusu",
    "kahpe",
    "orospu",
    "sik",
    "yarrak",
    "amcık",
    "amık",
    "yarram",
    "sikimi ye",
    "mk",
    "mq",
    "aq",
    "mal",
    "a.q",
    "a.m.k.",
    "a.mk",
    "am.k",
    "Mal",
    "Oç",
    "amq"
  ];
  const uyarılar = [
    "İt is Haram bRo! 🤥",
    "Az düzgün konuş günaha girme! 🤧",
    "Aaaa ayıp dostum! 🥴",
    "Vayy ahlaksız çocuk! 🙀",
    "Tövbesteyşin! 🤫"
  ];
  let uyarımesaj = uyarılar[Math.floor(Math.random() * uyarılar.length)];
  let content = message.content.split(" ");

  content.forEach(kelime => {
    if (blacklist.some(küfür => küfür === kelime)) {
      if (message.member.permissions.has("BAN_MEMBERS")) return;
      message.delete();
      message.channel.send(
        new Discord.MessageEmbed()
          .setTitle("Küfür Kısıtlı")
          .setDescription(`${message.author} ${uyarımesaj}`)
      );
    }
  });
});

client.on("guildMemberAdd", async member => {
  //lrowsxrd
  let kanal = await db.fetch(`otok_${member.guild.id}`); //lrowsxrd
  let rol = await db.fetch(`otorol_${member.guild.id}`); //lrowsxrd
  let mesaj = db.fetch(`otomesaj_${member.guild.id}`); //lrowsxrd
  if (!kanal) return; //lrowsxrd

  if (!mesaj) {
    client.channels
      .get(kanal)
      .send(
        "HG BB Sistemi Otomatik Rol Verildi Seninle Beraber `" +
          member.guild.memberCount +
          "` Kişiyiz! Hoşgeldin! `" +
          member.user.username +
          "`"
      );
    member.addRole(rol);
    return;
  }

  if (mesaj) {
    var mesajs = await db
      .fetch(`otomesaj_${member.guild.id}`)
      .replace("-uye-", `${member.user.tag}`)
      .replace("-rol-", `${member.guild.roles.get(rol).name}`)
      .replace("-server-", `${member.guild.name}`)
      .replace("-uyesayisi-", `${member.guild.memberCount}`)
      .replace(
        "-botsayisi-",
        `${member.guild.members.filter(m => m.user.bot).size}`
      )
      .replace("-bolge-", `${member.guild.region}`)
      .replace("-kanalsayisi-", `${member.guild.channels.size}`);
    member.addRole(rol);
    client.channels.get(kanal).send(mesajs);
  }
});
////////////////////otorol

client.on("message", async msg => {
  let cfxy = await db.fetch(`kufur_${msg.guild.id}`);
  if (cfxy == "Açık") {
    const kufur = [
      "discord.gg",
      "https//",
      ".com",
      ".xyz",
      ".net",
      ".com.tr",
      ".glitch.me",
      ".org",
      ".net",
      ".site",
      ".co"
    ];
    if (kufur.some(word => msg.content.includes(word))) {
      try {
        const dmihbar = new Discord.MessageEmbed()
          .setTitle("Sunucunda Reklam Yapılıyor Neredesin!?")
          .setColor(0x00ae86)
          .setDescription(
            `${msg.author} kullanıcısı **${msg.guild}** sunucusunda reklam yaptı.`
          )
          .addField("Kullanıcının mesajı:", ` ${msg.content}`);

        msg.guild.owner.send(dmihbar); //CodeFENIX

        if (!msg.member.hasPermission("BAN_MEMBERS")) {
          msg.delete();

          return msg
            .reply("Reklam yapmamalısın dostum!")
            .then(msg => msg.delete(5000)); //CodeFENIX
        }
      } catch (err) {
        console.log(err);
      }
    }
  } else if (cfxy == "Kapalı") {
  }
  //lrowsxrd
});

client.on("guildMemberAdd", async member => {
  let user = member.user;
  let guild = member.guild;
  const sistemKanalID = await db.fetch(`sayaç.kanal.${guild.id}`);
  if (!sistemKanalID) return;
  let channel = guild.channels.cache.get(sistemKanalID);
  const sistemSayı = await db.fetch(`sayaç.sayı.${guild.id}`);
  if (!sistemSayı) return;
  let sayı = Number(sistemSayı);
  if (!sayı) return;
  let rol;
  const otoRole = await db.fetch(`oto.role.${guild.id}`);
  if (otoRole) {
    rol = `>>> **Sunucuya katılan kullanıcıya ${guild.roles.cache.get(
      otoRole
    )} rolü direk verildi!**`;
  } else {
    rol = "";
  }
  if (guild.memberCount >= sayı) {
    db.delete(`sayaç.sayı.${guild.id}`);
    db.delete(`sayaç.kanal.${guild.id}`);
    channel.send(`> \`${user.tag}\` **az önce katıldı... yoksa katılmadı mı?**
  
  > **Toplam da** \`${guild.memberCount}\` **Kişi olduk! Sayaç tamamlandı! 🎉**
  
  ${rol}`);
  } else {
    channel.send(`> \`${user.tag}\` **az önce katıldı... yoksa katılmadı mı?**
  
  > **Toplam da** \`${
    guild.memberCount
  }\` **Kişi olduk!** \`${sayı}\` **Kullanıcı olmasına** \`${sayı -
      Number(guild.memberCount)}\` **Kullanıcı kaldı!**
  
  ${rol}`);
  }
});

client.on("guildMemberRemove", async member => {
  let user = member.user;
  let guild = member.guild;
  const sistemKanalID = await db.fetch(`sayaç.kanal.${guild.id}`);
  if (!sistemKanalID) return;
  let channel = guild.channels.cache.get(sistemKanalID);
  const sistemSayı = await db.fetch(`sayaç.sayı.${guild.id}`);
  if (!sistemSayı) return;
  let sayı = Number(sistemSayı);
  if (!sayı) return;
  const attachment = new Discord.MessageAttachment(
    "https://cdn.discordapp.com/attachments/766636339361480727/766636500891729930/giphy.gif"
  );
  channel.send(
    `> \`${user.tag}\` **Gittiğini fark ettim Aaaaaa!**
  
  > **Toplam da** \`${
    guild.memberCount
  }\` **Kişi olduk!** \`${sayı}\` **Kullanıcı olmasına** \`${sayı -
      Number(guild.memberCount)}\` **Kullanıcı kaldı!**`,
    attachment
  );
});

client.on("message", message => {
  if (message.channel.type !== "text") return;
  let mesaj = message.content.toLocaleLowerCase();
  if (mesaj.includes("<@!785465120847167489>"))
    message.channel.send(
      new Discord.MessageEmbed()
        .setColor("BLUE")
        .setDescription(`:sparkles: **Ön ekim:** \`xyz!\``)
    );
});

const ms = require("parse-ms");
const { DiscordAPIError } = require("discord.js");

client.on("message", async message => {
  if (message.author.bot) return;
  if (!message.guild) return;
  if (message.content.includes(`afk`)) return;

  if (await db.fetch(`afk_${message.author.id}`)) {
    db.delete(`afk_${message.author.id}`);
    db.delete(`afk_süre_${message.author.id}`);

    const embed = new Discord.MessageEmbed()

      .setColor("GREEN")
      .setAuthor(
        message.author.username,
        message.author.displayAvatarURL({ dynamic: true })
      )
      .setDescription(`**Afk Modundan Başarıyla Çıkıldı.**`);

    message.channel.send(embed);
  }

  var USER = message.mentions.users.first();
  if (!USER) return;
  var REASON = await db.fetch(`afk_${USER.id}`);

  if (REASON) {
    let süre = await db.fetch(`afk_süre_${USER.id}`);
    let timeObj = ms(Date.now() - süre);

    const afk = new Discord.MessageEmbed()

      .setColor("RED")
      .setDescription(
        `**BU KULLANICI AFK**\n\n**Afk Olan Kullanıcı :** \`${USER.tag}\`\n**Afk Süresi :** \`${timeObj.hours}saat\` \`${timeObj.minutes}dakika\` \`${timeObj.seconds}saniye\`\n**Sebep :** \`${REASON}\``
      );

    message.channel.send(afk);
  }
});
//#endregion
//#endregion

/////// gold hg başlangıç

/*
client.on("message", async msg => {

  //const db = require("quick.db");
  const ms2 = require("parse-ms");
  let timeout = 600000; //süresini dilediğiniz gibi kısaltabilirsiniz. default : 600000
  let dakdest = 1;
  let i = db.fetch(`üyelikk_${msg.author.id}`);
  if (db.has(`üyelikk_${msg.author.id}`) == true) {
    if (dakdest !== null && timeout - (Date.now() - dakdest) > 0) {
      let time = ms2(timeout - (Date.now() - dakdest));
    } else {
      if (msg.author.bot) return;
      if(msg.content.size > 32){
        var embed = new Discord.MessageEmbed()
        .setAuthor(`Crypto`,`${msg.author.avatarURL() || msg.author.displayAvatarURL()}`)
        .setDescription(`<a:gold1:719860487734427708> Hizzaya Geçin! Burada Bir Gold Üye Belirdi! <@${msg.author.id}>`)
        .setColor("GOLD")
        msg.channel.send(embed).then(msg => {msg.delete({ timeout: 5000 })}).catch(console.error);
      }
    }
  } else if (i == undefined) {
  }
  if (!i) return;
});
*/
// gold hg bitiş

// crypto tepk

client.on("message", message => {
  if (message.channel.type !== "text") return;
  let mesaj = message.content.toLocaleLowerCase();
  if (mesaj.includes("<@!794484818020532224>")) message.channel.send(new Discord.MessageEmbed().setColor("BLUE").setDescription("Prefixim: `+`\nYardım için: `+yardım`"));
});

client.on("message", message => {
  if (message.channel.type !== "text") return;
  let mesaj = message.content.toLocaleLowerCase();
  if (mesaj.includes("<@794484818020532224>")) message.channel.send(new Discord.MessageEmbed().setColor("BLUE").setDescription("Prefixim: `+`\nYardım için: `+yardım`"));
});
// spam engel

/////// gold hg başlangıç

client.on("message", async msg => {
  //const db = require("quick.db");
  const ms2 = require("parse-ms");
  let timeout = 600000; //süresini dilediğiniz gibi kısaltabilirsiniz. default : 600000
  let dakdest = 1;
  let i = db.fetch(`üyelikk_${msg.author.id}`);
  if (db.has(`üyelikk_${msg.author.id}`) == true) {
    if (dakdest !== null && timeout - (Date.now() - dakdest) > 0) {
      let time = ms2(timeout - (Date.now() - dakdest));
    } else {
      if (msg.author.bot) return;
      if (msg.content.size > 32) {
        var embed = new Discord.MessageEmbed()
          .setAuthor(
            `TÜRK`,
            `${msg.author.avatarURL() || msg.author.displayAvatarURL()}`
          )
          .setDescription(
            `<a:hawli:784361628442427413> Hizzaya Geçin! Burada Bir Gold Üye Belirdi! <@${msg.author.id}>`
          )
          .setColor("GOLD");
        msg.channel
          .send(embed)
          .then(msg => {
            msg.delete({ timeout: 5000 });
          })
          .catch(console.error);
      }
    }
  } else if (i == undefined) {
  }
  if (!i) return;
});

// gold hg bitiş

client.on('message', msg => {
  if (msg.content.toLowerCase() === 'xyz!js') {  // İstediğiniz Komut
    
       msg.member.roles.add("787961664704086047") //Rolü bir yerde bahsedin sonra sağ tıklayıp İD'sini alın
    msg.reply('**:zap:Js Rolünü Başarıyla Aldın.**'); //Komutu Yazınca cevap ne yazsın?       
  }
});
client.on('message', msg => {
  if (msg.content.toLowerCase() === 'xyz!py') {  // İstediğiniz Komut
    
       msg.member.roles.add("787963744856702987") //Rolü bir yerde bahsedin sonra sağ tıklayıp İD'sini alın
    msg.reply('**:zap:Py Rolünü Başarıyla Aldın.**'); //Komutu Yazınca cevap ne yazsın?       
  }
});
client.on('message', msg => {   if (msg.author.bot) return;    
 if (msg.content.toLowerCase().includes('günaydın'))msg.reply('🌞 Günaydın :)');   if (msg.content.toLowerCase().includes('iyi geceler')) msg.reply(' 🌙 Sana da iyi geceler');  if (msg.content.toLowerCase().includes('iyi akşamlar')) msg.reply('🌓 sana da iyi akşamlar'); 
});

client.on('message', msg => {
  if (msg.content.toLowerCase() === 'xyz!html') {  // İstediğiniz Komut
    
       msg.member.roles.add("787969835069997086") //Rolü bir yerde bahsedin sonra sağ tıklayıp İD'sini alın
    msg.reply('**:loudspeaker:Html Rolünü Başarıyla Aldın.**'); //Komutu Yazınca cevap ne yazsın?       
  }
});
client.login(ayarlar.token);
