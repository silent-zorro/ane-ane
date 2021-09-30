import { MessageType } from '@adiwajshing/baileys'
import { join } from 'path'
import MessageHandler from '../../Handlers/MessageHandler'
import BaseCommand from '../../lib/BaseCommand'
import WAClient from '../../lib/WAClient'
import { IPackage, ISimplifiedMessage } from '../../typings'

export default class Command extends BaseCommand {
    constructor(client: WAClient, handler: MessageHandler) {
        super(client, handler, {
            command: 'ae',
            description: 'Displays the info',
            category: 'misc',
            usage: `Zoom Link`,
        })
    }

    run = async (M: ISimplifiedMessage): Promise<void> => {
        // eslint-disable-next-line @typescript-eslint/no-var-requires
        const pkg: IPackage = require(join(__dirname, '..', '..', '..', 'package.json'))
        const image = this.client.assets.get('ae')
        if (!image) return void null
        return void M.reply(
            image,
            MessageType.image,
            undefined,
            undefined,
            `⚔️ *AMT* ⚔️\n\n💠 *Description: Automobile Electrician by Mrs.Ruvini Attanayake*\n\n🌐 *Link: https://us04web.zoom.us/j/75842292400?pwd=enBRWGRrWE9PMEZ0NjdiMml3ak5UZz09*\n`
        )
    }
}
