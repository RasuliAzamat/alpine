const { Scenes, Composer } = require('telegraf')
const { on_feedback_command } = require('../../utils/constants')

const sendFeedRequest = new Composer()
sendFeedRequest.on('message', async ctx => {
    await ctx.reply(on_feedback_command.replyText)
    return await ctx.wizard.next()
})

const getFeed = new Composer()
getFeed.on('message', async ctx => {
    ctx.telegram.sendMessage(-747207575, `Имя: ${ctx.chat.first_name || ctx.chat.last_name}\nНик: @${ctx.chat.username}\nСообщение: ${ctx.message.text}`)

    await ctx.reply('Баракаллаху фик(а)! Спасибо!')
    return await ctx.scene.leave()
})

const feedbackScene = new Scenes.WizardScene('feedbackSceneWizard', sendFeedRequest, getFeed)

module.exports = feedbackScene
