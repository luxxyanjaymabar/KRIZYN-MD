//=============『 Utama 』================== //
global.owner = ['6288210072756'] 
global.mods = [6288210072756] 
global.prems = [6288210072756] 

//=============『 Info Owner 』============== //
global.nameowner = 'LuxxyVFX'
global.numberowner = '6288210072756'
global.instagram = 'https://instagram.com/luxxyxyz'
global.github = 'https://github.com/luxxyanjaymabar'
global.dana = '088210072756'
global.pulsa = '088210072756'
global.gopay = '088210072756'

//=============『 Info Bot 』=================//
global.namebot = 'LuccyBot'
global.gc = 'https://chat.whatsapp.com/CIv0mTBUteK8zy7crxdOj7'
global.web = 'https://linktr.ee/luxxyxyz' //ubah jadi website lu, bisa link ig, link github, link yt, klo link gc ntr beda tampilan lagi. 
global.price1 = 'NIH KAK LIST SEWA NYA\n\n》1 MINGGU Rp 10.000\nMAKSIMAL 1 GRUP\n》1 BULAN  Rp 15.000\nMAKSIMAL 1 GRUP \n》3 BULAN Rp 20.000\nMAKSIMAL 1 GRUP + PREMIUM\n》PERMANEN Rp 30.000\nMAKSIMAL 3 GRUP\n》4 BULAN  Rp 25.000\nMAKSIMAL 2 GRUP + PREMIUM\n\nMAU NAMBAH GRUP LAGI \nPERMANEN Rp 25.000\nMAKSIMAL 2 GRUP'

//=======『 Tampilan Dan Lainnya 』============//
global.fotonya1 = 'https://telegra.ph/file/04dbaf876a5639829e46a.jpg' //ganti jadi foto bot mu
global.fotonya2 = 'https://telegra.ph/file/04dbaf876a5639829e46a.jpg' //ini juga ganti 
global.lolkey = 'Papah-Chan' //biar mudah ngegantinya semisal apikeynya expired:v
global.zenzkey = 'BagasPrdn' //ganti jadi apikey lu kalau expired
global.wm = '↻Luccy 𝙱𝙾𝚃 𝚆𝙷𝙰𝚃𝚂𝙰𝙿𝙿 𝙼𝙳'
global.watermark = wm
global.wm2 = ' ⊙────────❲ ᯤ LuccyBot'
global.wm3 = 'ᯤ LuccyBot'
global.htki = '––––––『' 
global.htka = '』––––––'
global.media = 'https://telegra.ph/file/72168c6f1aaa90315c369.jpg'
global.fla = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=smurfs-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.wait = '⏳Tunggu Sedang Proses...'
global.eror = '_*🚨 Server Bot Sedang Error*_'
global.benar = 'Benar ✅\n'
global.salah = 'Salah ❌\n'
global.stiker_wait = '⏳ Stiker sedang Proses'
global.packname = 'LuccyBot'
global.author = 'By LuxxyVFX'

//=============『 Apikey 』================== //
global.APIs = { // API Prefix
  // name: 'https://website'
  amel: 'https://melcanz.com',
    bx: 'https://bx-hunter.herokuapp.com',
  dhnjing: 'https://dhnjing.xyz',
  hardianto: 'https://hardianto-chan.herokuapp.com',
  jonaz: 'https://jonaz-api-v2.herokuapp.com',
  neoxr: 'https://neoxr-api.herokuapp.com',
  nrtm: 'https://nurutomo.herokuapp.com',
  xteam: 'https://api.xteam.xyz',
  nzcha: 'http://nzcha-apii.herokuapp.com',
  bg: 'http://bochil.ddns.net',
  fdci: 'https://api.fdci.se',
  dzx: 'https://api.dhamzxploit.my.id',
  bsbt: 'https://bsbt-api-rest.herokuapp.com',
  zahir: 'https://zahirr-web.herokuapp.com',
  zeks: 'https://api.zeks.xyz',
  zekais: 'http://zekais-api.herokuapp.com',
  hardianto: 'https://hardianto-chan.herokuapp.com',
  pencarikode: 'https://pencarikode.xyz', 
  erdwepe: 'https://erdwpe-api.herokuapp.com',
  lolhuman: 'https://api.lolhuman.xyz',
  LeysCoder: 'https://leyscoders-api.herokuapp.com',
  rey: 'https://server-api-rey.herokuapp.com'
}
global.APIKeys = { // APIKey Here
  // 'https://website': 'apikey'
  'https://melcanz.com': 'elaina',
  'https://server-api-rey.herokuapp.com': 'apirey',
  'https://api.xteam.xyz': 'd37372311698ed1d',
  'https://zahirr-web.herokuapp.com': 'zahirgans',
  'https://bsbt-api-rest.herokuapp.com': 'benniismael',
  'https://api.zeks.xyz': 'apivinz',
  'https://hardianto-chan.herokuapp.com': 'hardianto',
  'https://pencarikode.xyz': 'pais', 
  'https://leyscoders-api.herokuapp.com': 'dappakntlll',
  'https://zekais-api.herokuapp.com': 'apikeymu',
  'https://api.lolhuman.xyz': 'Deffbotz',
}

//=============『 RPG GAMES 』================== //
global.multiplier = 69 // The higher, The harder levelup
global.rpg = {
  emoticon(string) {
    string = string.toLowerCase()
    let emot = {
      exp: '✉️',
      money: '💵',
      potion: '🥤',
      diamond: '💎',
      common: '📦',
      uncommon: '🎁',
      mythic: '🗳️',
      legendary: '🗃️',
      pet: '🎁',
      sampah: '🗑',
      armor: '🥼',
      sword: '⚔️',
      kayu: '🪵',
      batu: '🪨',
      string: '🕸️',
      kuda: '🐎',
      kucing: '🐈' ,
      anjing: '🐕',
      petFood: '🍖',
      gold: '👑',
      emerald: '💚'
    }
    let results = Object.keys(emot).map(v => [v, new RegExp(v, 'gi')]).filter(v => v[1].test(string))
    if (!results.length) return ''
    else return emot[results[0][0]]
  }
}

//===========『 Jangan Di Ubah 』================ //
let fs = require('fs')
let chalk = require('chalk')
let file = require.resolve(__filename)
fs.watchFile(file, () => {
  fs.unwatchFile(file)
  console.log(chalk.redBright("Update 'config.js'"))
  delete require.cache[file]
  require(file)
})
