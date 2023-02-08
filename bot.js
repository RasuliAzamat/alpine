const { Telegraf, session, Scenes } = require('telegraf')
const { start, help, roadmapCommand, feedbackCommand, introductionInlineAction, ordersInlineAction, testnetsInlineAction, arbitrageInlineAction, usefulInlineAction, faqInlineAction } = require('./controllers/commands')
const { on_roadmap_command, on_introduction_action, on_orders_action, on_testnets_action, on_arbitrage_action, on_useful_action, on_faq_action, on_feedback_command } = require('./utils/constants')

const bot = new Telegraf(process.env.BOT_TOKEN)

const feedbackScene = require('./controllers/scenes/feedback')

const stage = new Scenes.Stage([feedbackScene])

const setupBot = () => {
    bot.use(session())
    bot.use(stage.middleware())

    bot.start(start)
    bot.help(help)

    bot.command(on_roadmap_command.id, roadmapCommand)
    bot.command(on_feedback_command.id, feedbackCommand)

    bot.action(on_introduction_action.id, introductionInlineAction)
    bot.action(on_orders_action.id, ordersInlineAction)
    bot.action(on_testnets_action.id, testnetsInlineAction)
    bot.action(on_arbitrage_action.id, arbitrageInlineAction)
    bot.action(on_useful_action.id, usefulInlineAction)
    bot.action(on_faq_action.id, faqInlineAction)

    return bot
}

module.exports = { setupBot }
