import MessageHandler from '../../Handlers/MessageHandler'
import BaseCommand from '../../lib/BaseCommand'
import WAClient from '../../lib/WAClient'
import { IParsedArgs, ISimplifiedMessage } from '../../typings'
import axios from 'axios'
export default class Command extends BaseCommand {
    constructor(client: WAClient, handler: MessageHandler) {
        super(client, handler, {
            command: 'test',
            description: 'get the covid-19 info of the current place',
            aliases: ['COVID'],
            category: 'fun',
            usage: `${client.config.prefix}covid [name]`
        })
    }
    run = async (M: ISimplifiedMessage, { joined }: IParsedArgs): Promise<void> => {



        if (!joined) return void M.reply('🔎 Provide a place name')
        const term = joined.trim()
        return void M.reply(
            await request.buffer(
                `https://nekobot.xyz/api/imagegen?type=changemymind&text=${term}`
            ),
            MessageType.image,
            undefined,
            undefined,
            `🧐 This is the preview 🧐\n`,
            undefined
        ).catch((reason: any) => M.reply(`✖ An error occurred with cortana server. Please try again later. ${reason}`))
    }
}
