const { Markup } = require('telegraf')

const { on_introduction_action, on_orders_action, on_testnets_action, on_arbitrage_action, on_useful_action, on_faq_action } = require('./constants')

const introduction_inline_button = Markup.button.callback(on_introduction_action.btnText, on_introduction_action.id)
const orders_inline_button = Markup.button.callback(on_orders_action.btnText, on_orders_action.id)
const testnets_inline_button = Markup.button.callback(on_testnets_action.btnText, on_testnets_action.id)
const arbitrage_inline_button = Markup.button.callback(on_arbitrage_action.btnText, on_arbitrage_action.id)
const useful_inline_button = Markup.button.callback(on_useful_action.btnText, on_useful_action.id)
const faq_inline_button = Markup.button.callback(on_faq_action.btnText, on_faq_action.id)

const roadmap_inline_buttons = Markup.inlineKeyboard([[introduction_inline_button], [orders_inline_button], [testnets_inline_button], [arbitrage_inline_button], [useful_inline_button], [faq_inline_button]])

module.exports = {
    introduction_inline_button,
    orders_inline_button,
    testnets_inline_button,
    arbitrage_inline_button,
    useful_inline_button,
    faq_inline_button,
    roadmap_inline_buttons,
}
