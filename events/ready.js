const chalk = require('chalk')
const moment = require('moment')
const ayarlar = require("../ayarlar.json")
const prefix = ayarlar.prefix;
const kanal = '784344427992449045'
const log = message => {
  
    console.log(`${message}`)
}

module.exports = async client => {
    client.user.setPresence({activity:{name:`${prefix}yardım | V.01 Güncellemesi Çok Yakında !`}, status: 'idle'})
    log(chalk.green(`[Melka] KOMUTLAR YÜKLENDI KULLANIMA HAZIR\n[Melka] BOT BAĞLANDI. ${client.user.tag} | ${client.user.id}`))
  }