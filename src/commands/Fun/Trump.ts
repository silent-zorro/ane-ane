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
            command: 'trump',
            aliases: ['tsay', 'trump'],
            description: 'Trump tweet. Exclusive from ISURU ',
            category: 'fun',
            usage: `${client.config.prefix}trump [word]`,
            baseXp: 30
        })
    }

    run = async (M: ISimplifiedMessage, { joined }: IParsedArgs): Promise<void> => {
        if (!joined) return void (await M.reply(`Please provide the url`))
        const url = joined.trim()
        return void M.reply(
            await request.buffer(
                `https://nekobot.xyz/api/imagegen?type=trumptweet&text=${url}`
            ),
            MessageType.image,
            undefined,
            undefined,
            `😄 Go Trump Go 😄\n`,
            undefined
        ).catch((reason: any) => M.reply(`✖ An error occurred with cortana server. Please try again later. ${reason}`))
    }
}
