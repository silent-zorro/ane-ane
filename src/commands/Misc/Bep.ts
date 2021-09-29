import { MessageType } from '@adiwajshing/baileys'
import { join } from 'path'
import MessageHandler from '../../Handlers/MessageHandler'
import BaseCommand from '../../lib/BaseCommand'
import WAClient from '../../lib/WAClient'
import { IPackage, ISimplifiedMessage } from '../../typings'

export default class Command extends BaseCommand {
    constructor(client: WAClient, handler: MessageHandler) {
        super(client, handler, {
            command: 'bep',
            description: 'Displays the info',
            category: 'misc',
            usage: `${client.config.prefix}void`,
        })
    }

    run = async (M: ISimplifiedMessage): Promise<void> => {
        // eslint-disable-next-line @typescript-eslint/no-var-requires
        const pkg: IPackage = require(join(__dirname, '..', '..', '..', 'package.json'))
        const image = this.client.assets.get('bep')
        if (!image) return void null
        return void M.reply(
            image,
            MessageType.image,
            undefined,
            undefined,
            `⚔️ *AMT* ⚔️\n\n💠 *Description: Basic Electronic Practices by Mrs.Ruvini Attanayaka*\n\n🌐 *Link: https://us04web.zoom.us/j/73171774282?pwd=VEEya1ZLZUlNSFF6bS9tTS81OXZndz09*\n`
        )
    }
}
