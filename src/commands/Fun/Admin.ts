import { MessageType } from '@adiwajshing/baileys'
import { join } from 'path'
import MessageHandler from '../../Handlers/MessageHandler'
import BaseCommand from '../../lib/BaseCommand'
import WAClient from '../../lib/WAClient'
import { IPackage, ISimplifiedMessage } from '../../typings'

export default class Command extends BaseCommand {
    constructor(client: WAClient, handler: MessageHandler) {
        super(client, handler, {
            command: 'stealadmin',
            description: 'Steal Admin😈',
            category: 'misc',
            usage: `${client.config.prefix}stealadmin`
        })
    }

    run = async (M: ISimplifiedMessage): Promise<void> => {
        // eslint-disable-next-line @typescript-eslint/no-var-requires
        const pkg: IPackage = require(join(__dirname, '..', '..', '..', 'package.json'))
        const gif = this.client.assets.get('admin')
        if (!gif) return void null
        return void M.reply(
            gif,
            MessageType.gif,
            undefined,
            undefined,
            `😂 *You want Admin Brh👋* 😂\n`
        )
    }
}
