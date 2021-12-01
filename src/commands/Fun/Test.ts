import MessageHandler from '../../Handlers/MessageHandler'
import BaseCommand from '../../lib/BaseCommand'
import WAClient from '../../lib/WAClient'
import { IParsedArgs, ISimplifiedMessage } from '../../typings'
import axios from 'axios'
import request from '../../lib/request'
import { MessageType } from '@adiwajshing/baileys'

export default class Command extends BaseCommand {
    constructor(client: WAClient, handler: MessageHandler) {
        super(client, handler, {
            command: 'test',
            aliases: ['ss', 'ssweb'],
            description: 'Gives you the screenshot of the given url. ',
            category: 'fun',
            usage: `${client.config.prefix}screenshot [url]`,
            baseXp: 30
        })
    }

    run = async (M: ISimplifiedMessage, { joined }: IParsedArgs): Promise<void> => {
        if (!joined) return void (await M.reply(`Please provide the url`))
        const url = joined.trim()
        
        return void M.reply(response.data.message)
            await request.buffer(`https://nekobot.xyz/api/imagegen?type=changemymind&text=${url}`),

            MessageType.image,
            undefined,
            undefined,

            `*Niko Niko Ni*`
        )
    }
}
