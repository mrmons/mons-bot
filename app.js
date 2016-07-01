'use strict'
const http = require('http')
const Bot = require('messenger-bot')

let bot = new Bot({
  token: 'EAACZB9QJfU0QBAPjr0V0hF4a8aGeHIF0gAvxYttmCWF0wq4ZB9ZC9zyM4HQUG3jXq7IkZBZC2Dt6hqARmpVb1M6DDrOMbx2bQfJk5a8AOoQJZCLxlrxNFGZA4ZA5EPy7HZBGNG5xGRZCJUIvGrRrnlAqIm3pnDa9EXCg4ejc9ed4fx4QZDZD',
  verify: 'verify_token'
})

bot.on('error', (err) => {
  console.log(err.message)
})

bot.on('message', (payload, reply) => {
  let text = payload.message.text

  bot.getProfile(payload.sender.id, (err, profile) => {
    if (err) throw err

    reply({ text }, (err) => {
      if (err) throw err

      console.log(`Echoed back to ${profile.first_name} ${profile.last_name}: ${text}`)
    })
  })
})

http.createServer(bot.middleware()).listen(process.env.PORT || 5000)