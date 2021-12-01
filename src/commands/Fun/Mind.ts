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
            category: 'fun',
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
           const buffer = await request.buffer(data.message).catch((e) => {
            return void M.reply(e.message)
        })
        while (true) {
            try {
                M.reply(
                    buffer || 'Could not fetch image. Please try again later',
                    MessageType.image,
                    undefined,
                    undefined,
                    `Meaw  😻\n`,
                    undefined
                ).catch((e) => {
                    console.log(`This error occurs when an image is sent via M.reply()\n Child Catch Block : \n${e}`)
                    // console.log('Failed')
                    M.reply(`Try again or use the link. Here's the URL: ${data.message}`)
                })
                break
            } catch (e) {
                // console.log('Failed2')
                M.reply(`Try again or use the link. Here's the URL : ${data.message}`)
                console.log(`This error occurs when an image is sent via M.reply()\n Parent Catch Block : \n${e}`)
            }
        }
        return void null
    }
}
