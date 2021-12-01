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
            description: 'get the covid-19 info of the current place',
            aliases: ['COVID'],
            category: 'fun',
            usage: `${client.config.prefix}covid [name]`
        })
    }
    run = async (M: ISimplifiedMessage, { joined }: IParsedArgs): Promise<void> => {



        if (!joined) return void M.reply('🔎 Provide a place name')
        const term = joined.trim()
        const { data } = await axios.get('https://nekobot.xyz/api/imagegen?type=changemymind&text=${term}')
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
