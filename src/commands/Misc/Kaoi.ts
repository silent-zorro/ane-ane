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
            usage: `Google Classroom`
        })
    }

    run = async (M: ISimplifiedMessage): Promise<void> => {
        return void M.reply(
            `šØš½āš« *AMT Classroom* šØš½āš«\n\nšØš½āš *Description:* Our Pvt Gclassroom\n\nš *Link:* https://classroom.google.com/c/MzgzNTY1OTAzNzA1?cjc=pincdao \n`
        ).catch((reason: any) => M.reply(`an error occupered, Reason: ${reason}`))
    }
}
