require('dotenv').config({ path: './config/.env' })
const { setupBot } = require('./bot')

;(async () => {
    try {
        await setupBot().launch()
        process.once('SIGINT', () => bot.stop('SIGINT'))
        process.once('SIGTERM', () => bot.stop('SIGTERM'))
    } catch (error) {
        console.log(error)
    }
})()
