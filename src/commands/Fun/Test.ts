import MessageHandler from '../../Handlers/MessageHandler'
import BaseCommand from '../../lib/BaseCommand'
import WAClient from '../../lib/WAClient'
import { ISimplifiedMessage } from '../../typings'
import axios from 'axios'
import request from '../../lib/request'
import { MessageType } from '@adiwajshing/baileys'

export default class Command extends BaseCommand {
    constructor(client: WAClient, handler: MessageHandler) {
        super(client, handler, {
            command: 'test',
            description: 'Will send you a cute cat image.',
            aliases: ['Meaw'],
            category: 'fun',
            usage: `${client.config.prefix}catpic`
        })
    }

    run = async (M: ISimplifiedMessage): Promise<void> => {
        // fetch result of https://zxbott.herokuapp.com/husbu from the API using axios
       if (!joined) return void M.reply('Please provide me your name.')
        const place = joined.trim()
        const { data } = await axios.get('https://nekobot.xyz/api/imagegen?type=changemymind&text=${place}')
        const buffer = await request.buffer(data.message).catch((e) => {
            return void M.reply(e.message)
        })
        while (true) {
            try {
                M.reply(
                    buffer || 'code fucked isuru :-/',
                    MessageType.image,
                    undefined,
                    undefined,
                    ` code fucking works isuru 😻\n`,
                    undefined
                ).catch((e) => {
                    console.log(`This error occurs when an image is sent via M.reply()\n Child Catch Block : \n${e}`)
                    // console.log('Failed')
                    M.reply(`Try again or use the link. Here's the URL: ${data.file}`)
                })
                break
            } catch (e) {
                // console.log('Failed2')
                M.reply(`Try again or use the link. Here's the URL : ${data.file}`)
                console.log(`This error occurs when an image is sent via M.reply()\n Parent Catch Block : \n${e}`)
            }
        }
        return void null
    }
}
