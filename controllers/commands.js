const { Markup } = require('telegraf')

const { on_start_command, on_roadmap_command, on_introduction_action, on_orders_action, on_testnets_action, on_arbitrage_action, on_useful_action, on_faq_action, on_help_command } = require('../utils/constants')

const { orders_inline_button, testnets_inline_button, arbitrage_inline_button, roadmap_inline_buttons } = require('../utils/buttons')

const start = async ctx => await ctx.replyWithHTML(on_start_command.replyText)
const help = async ctx => await ctx.replyWithHTML(on_help_command.replyText)

const roadmapCommand = async ctx => await ctx.replyWithHTML(on_roadmap_command.replyText, { ...roadmap_inline_buttons })
const feedbackCommand = async ctx => await ctx.scene.enter('feedbackSceneWizard')

const introductionInlineAction = async ctx => {
    await ctx.answerCbQuery()
    await ctx.replyWithHTML(on_introduction_action.replyText, { ...Markup.inlineKeyboard([orders_inline_button]) })
}
const ordersInlineAction = async ctx => {
    await ctx.answerCbQuery()
    await ctx.replyWithHTML(on_orders_action.replyText, { ...Markup.inlineKeyboard([testnets_inline_button]) })
}
const testnetsInlineAction = async ctx => {
    await ctx.answerCbQuery()
    await ctx.replyWithHTML(on_testnets_action.replyText, { ...Markup.inlineKeyboard([arbitrage_inline_button]) })
}
const arbitrageInlineAction = async ctx => {
    await ctx.answerCbQuery()
    await ctx.replyWithHTML(on_arbitrage_action.replyText)
}
const usefulInlineAction = async ctx => {
    await ctx.answerCbQuery()
    await ctx.replyWithHTML(on_useful_action.replyText)
}
const faqInlineAction = async ctx => {
    await ctx.answerCbQuery()
    await ctx.replyWithHTML(on_faq_action.replyText)
}

module.exports = {
    start,
    help,
    roadmapCommand,
    feedbackCommand,
    introductionInlineAction,
    ordersInlineAction,
    testnetsInlineAction,
    arbitrageInlineAction,
    usefulInlineAction,
    faqInlineAction,
}
