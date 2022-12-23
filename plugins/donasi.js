let handler =  m => m.reply(`
╭─「 Donasi • Pulsa 」
│ • XL [087870857446]
╰────

╭─「 Donasi • Non Pulsa 」
│ • https://saweria.co/najwanzaky
│ • Gopay [085773744917]
╰────
`.trim()) // Tambah sendiri kalo mau
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

export default handler
