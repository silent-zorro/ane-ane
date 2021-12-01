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
            command: 'mind',
            aliases: ['change', 'mind'],
            description: 'Change my Mind. Exclusive from ISURU ',
            category: 'media',
            usage: `${client.config.prefix}mind [word]`,
            baseXp: 30
        })
    }

    run = async (M: ISimplifiedMessage, { joined }: IParsedArgs): Promise<void> => {
        if (!joined) return void (await M.reply(`Please provide the word`))
        const url = joined.trim()
        return void M.reply(
            await request.buffer(
                `https://nekobot.xyz/api/imagegen?type=changemymind&text=${url}`
            ),
            MessageType.image,
            undefined,
            undefined,
            `😄 Chane His Mind 😄\n`,
            undefined
        ).catch((reason: any) => M.reply(`✖ An error occurred with cortana server. Please try again later. ${reason}`))
    }
}
