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
            command: 'country',
            aliases: ['Country'],
            description: 'I can tell your Country. ',
            category: 'misc',
            usage: `${client.config.prefix}country [your_name]`,
            baseXp: 50
        })
    }

    run = async (M: ISimplifiedMessage, { joined }: IParsedArgs): Promise<void> => {
        if (!joined) return void M.reply('Please provide me your name.')
        const place = joined.trim()
        await axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${place}&units=metric&appid=060a6bcfa19809c2cd4d97a212b19273&language=tr`)
/* Note
  If you want to add some response, we'd recommend you to explore the json itself which provided link returns.
  This stability of the url and API KEY is not guaranteed.
  Regards: Team Kaoi
 */
        .then((response) => {
                // console.log(response);
                const text = `🔎 Info for the Name *${place}* found\n\n🕸 *Name:* ${response.data.name}\n*🌍 Country:* ${response.data.country_id}\n`
                M.reply(text);
            }).catch(err => {
                M.reply(`Sorry, couldn't find any data related to *${place}*.`)
            }
            )
    };
}
