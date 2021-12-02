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
            aliases: ['dic'],
            description: 'Gives you the definition of the given word 😂 ',
            category: 'fun',
            usage: `${client.config.prefix}ur [Word you want to search about]`,
            baseXp: 50
        })
    }

    run = async (M: ISimplifiedMessage, { joined }: IParsedArgs): Promise<void> => {
        if (!joined) return void M.reply('Please provide a word .')
        const term = joined.trim()
        console.log(term,joined)
        await axios
            .get(
                `https://nekobot.xyz/api/imagegen?type=changemymind&text=${term}`
            )
           .then((response) => {
                // console.log(response);
                const image = `${response.data.message`
          M.reply(image)
                })
    }
}
