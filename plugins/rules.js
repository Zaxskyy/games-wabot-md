let handler =  m => m.reply(`
-Dilarang Spam Bot

-Dilarang Kirim Virtex Ke Bot

-Dilarang Spam Owner

Melanggar Rules Akan Kita Ban Selamanya
`.trim()) // Tambah sendiri kalo mau
handler.help = ['rules']
handler.tags = ['info']
handler.command = /^(rules)$/i

export default handler
