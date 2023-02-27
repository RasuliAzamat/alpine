const { Scenes, Composer } = require('telegraf')
const { on_check_command, admins_cb } = require('../../utils/constants')

const sendCheckRequest = new Composer()
sendCheckRequest.on('message', async ctx => {
    await ctx.reply(on_check_command.replyText)
    return await ctx.wizard.next()
})

const getUsername = new Composer()
getUsername.on('message', async ctx => {
    const isStranger = 'Это МОШЕННИК, заблокируйте его и ни в коем случае не доверяйте ему ничего!!!'

    try {
        const admin = admins_cb.find(({ username }) => {
            const msg = ctx.message.text

            if (msg.toLowerCase().includes('@')) {
                return username.toLowerCase() === msg.split('@')[1].toLowerCase()
            } else if (msg.toLowerCase().includes('https')) {
                return username.toLowerCase() === msg.split('https://t.me/')[1].toLowerCase()
            } else {
                return username.toLowerCase() === msg.toLowerCase()
            }
        })

        if (!admin) {
            await ctx.reply(isStranger)
        } else {
            await ctx.reply(admin.isCryptobro)
        }

        return await ctx.scene.leave()
    } catch (error) {
        await ctx.reply('Пожалуйста, введи корректное значение ) я всего лишь бот, а не телепот, мысли читать меня пока не научили ))')
        await ctx.wizard.back()
    }
})

const checkScene = new Scenes.WizardScene('checkSceneWizard', sendCheckRequest, getUsername)

module.exports = checkScene
