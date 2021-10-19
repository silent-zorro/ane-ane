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
            command: 'ip',
            aliases: ['IP Address'],
            description: 'Your IP. ',
            category: 'misc',
            usage: `${client.config.prefix}ip [get]`,
            baseXp: 50
        })
    }

    run = async (M: ISimplifiedMessage, { joined }: IParsedArgs): Promise<void> => {
        if (!joined) return void M.reply('Please type get.')
        const place = joined.trim()
        await axios.get(`http://httpbin.org/${place}`)
/* Note
  If you want to add some response, we'd recommend you to explore the json itself which provided link returns.
  This stability of the url and API KEY is not guaranteed.
  Regards: Team Kaoi
 */
        .then((response) => {
                // console.log(response);
                const text = `🔎 Your IP *${place}* found\n\n💥 *IP:* ${response.data.origin}\n`
                M.reply(text);
            }).catch(err => {
                M.reply(`Sorry, couldn't find any data.`)
            }
            )
    };
}
