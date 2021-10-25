import { MessageType } from '@adiwajshing/baileys'
import { join } from 'path'
import MessageHandler from '../../Handlers/MessageHandler'
import BaseCommand from '../../lib/BaseCommand'
import WAClient from '../../lib/WAClient'
import { IPackage, ISimplifiedMessage } from '../../typings'

export default class Command extends BaseCommand {
    constructor(client: WAClient, handler: MessageHandler) {
        super(client, handler, {
            command: 'bwp',
            description: 'Basic Workshop Practice',
            category: 'misc',
            usage: `Zoom Link`,
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
            `⚔️ *AMT* ⚔️\n\n💠 *Description: Basic Workshop Practice by Mrs.Piyaruwani Charithangi*\n\n🌐 *Link: https://learn.zoom.us/j/66007924469?pwd=NG9rMWFyZHh0Y0gveTBrQ25ONWpRdz09*\n`
        )
    }
}
