import MessageHandler from '../../Handlers/MessageHandler'
import BaseCommand from '../../lib/BaseCommand'
import WAClient from '../../lib/WAClient'
import { ISimplifiedMessage } from '../../typings'

export default class Command extends BaseCommand {
    constructor(client: WAClient, handler: MessageHandler) {
        super(client, handler, {
            command: 'mods',
            description: "Displays the Moderators' contact info",
            category: 'general',
            usage: `${client.config.prefix}mods`,
            aliases: ['moderators', 'mod', 'owner']
        })
    }

    run = async (M: ISimplifiedMessage): Promise<void> => {
        if (!this.client.config.mods || !this.client.config.mods[0]) return void M.reply('*[UNMODERATED]*')
        const filteredMap = this.client.config.mods.map((mod) => this.client.getContact(mod)).filter((user) => user)
        let text = '🔥 *Moderator* 🔥\n\n'
        filteredMap.forEach(
            (user, index) =>
                (text += `#${index + 1}\n🎫 *Developer: ${
                    user.notify || user.vname || user.name || 'Isuru Anuradha'
                }*\n💎 *Contact: https://wa.me/qr/ZIH3OADTMVQLP1*\n\n`)
        )
        text += `\nTo Contact me via Facebook🖤\nSend a Request : https://www.facebook.com/isuru.anuradha.Iz.Silent.Zorro `
        return void M.reply(text)
    }
}
