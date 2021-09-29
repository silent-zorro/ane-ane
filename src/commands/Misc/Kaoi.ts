import { MessageType } from '@adiwajshing/baileys'
import { join } from 'path'
import MessageHandler from '../../Handlers/MessageHandler'
import BaseCommand from '../../lib/BaseCommand'
import WAClient from '../../lib/WAClient'
import { ISimplifiedMessage } from '../../typings'

export default class Command extends BaseCommand {
    constructor(client: WAClient, handler: MessageHandler) {
        super(client, handler, {
            command: 'gcr',
            description: 'Displays the info',
            category: 'misc',
            usage: `${client.config.prefix}kaoi`
        })
    }

    run = async (M: ISimplifiedMessage): Promise<void> => {
        return void M.reply(
            `👨🏽‍🏫 *AMT Classroom* 👨🏽‍🏫\n\n👨🏽‍🎓 *Description:* Our Pvt Gclassroom\n\n🌐 *Link:* https://classroom.google.com/c/MzgzNTY1OTAzNzA1?cjc=pincdao \n`
        ).catch((reason: any) => M.reply(`an error occupered, Reason: ${reason}`))
    }
}
