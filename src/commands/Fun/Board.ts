import MessageHandler from '../../Handlers/MessageHandler'
import BaseCommand from '../../lib/BaseCommand'
import WAClient from '../../lib/WAClient'
import { ISimplifiedMessage } from '../../typings'
import axios from 'axios'

export default class Command extends BaseCommand {
    constructor(client: WAClient, handler: MessageHandler) {
        super(client, handler, {
            command: 'quote',
            description: 'random quote.',
            aliases: ['q'],
            category: 'fun',
            usage: `${client.config.prefix}quote`
        })
    }

    run = async (M: ISimplifiedMessage): Promise<void> => {
        await axios.get(`https://www.boredapi.com/api/activity`)
        .then((response) => {
                // console.log(response);
                const text = `🏋🏽 *Activity:* ${response.data.content}\n\n*💫 Type:* ${response.data.author}`
                M.reply(text);
            }).catch(err => {
                M.reply(`🔍 Error: ${err}`)
            }
            )
    };
}