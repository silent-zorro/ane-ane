import MessageHandler from '../../Handlers/MessageHandler'
import BaseCommand from '../../lib/BaseCommand'
import WAClient from '../../lib/WAClient'
import { ISimplifiedMessage } from '../../typings'
import axios from 'axios'

export default class Command extends BaseCommand {
    constructor(client: WAClient, handler: MessageHandler) {
        super(client, handler, {
            command: 'dogf',
            description: 'random dog fact.',
            aliases: ['Do you know'],
            category: 'fun',
            usage: `${client.config.prefix}fquote`
        })
    }

    run = async (M: ISimplifiedMessage): Promise<void> => {
        await axios
            .get(`https://dog-facts-api.herokuapp.com/api/v1/resources/dogs?number=1`)
            .then((response) => {
                // console.log(response);
                const text = `🐶 *Fact:* ${response.data.fact}`
                M.reply(text)
            })
            .catch((err) => {
                M.reply(`🔍 Error: ${err}`)
            })
    }
}
