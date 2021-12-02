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
            command: 'cat',
            aliases: ['meaw', 'cute'],
            description: 'Cat with words. Exclusive from ISURU ',
            category: 'fun',
            usage: `${client.config.prefix}cat word`,
            baseXp: 30
        })
    }

    run = async (M: ISimplifiedMessage, { joined }: IParsedArgs): Promise<void> => {
        if (!joined) return void (await M.reply(`Please provide the word`))
        const url = joined.trim()
        return void M.reply(
            await request.buffer(
                `https://cataas.com/cat/cute/says/${url}`
            ),
            MessageType.image,
            undefined,
            undefined,
            `😻 Meaw 😻\n`,
            undefined
        ).catch((reason: any) => M.reply(`✖ An error occurred with cortana server. Please try again later. ${reason}`))
    }
}
