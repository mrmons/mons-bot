'use strict'
const http = require('http')
const Bot = require('messenger-bot')

let bot = new Bot({
  token: 'EAACZB9QJfU0QBAPqTJZAgr1PicDxZBOCUWKZB6ZBNdqtikLLIKkIMc0TJzTRDSVcbWdQdx02ZC3qurTJMCWLPHmWZB8FVK1qqfTIXnY1VoDjks6WiqrZAMa1tRQaZCifaylztFB4jFfqWkZAqpxjPeYNXe2QoxL6dQFlBPZCMSCkfqj2AZDZD',
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