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
            command: 'ipinfo',
            aliases: ['IP'],
            description: 'Gives you the info of the given IP address. ',
            category: 'misc',
            usage: `${client.config.prefix}ipinfo [ip]`,
            baseXp: 50
        })
    }

    run = async (M: ISimplifiedMessage, { joined }: IParsedArgs): Promise<void> => {
        if (!joined) return void M.reply('Please provide me the ip address.')
        const place = joined.trim()
        await axios.get(`https://freegeoip.app/json/${place}`)
/* Note
  If you want to add some response, we'd recommend you to explore the json itself which provided link returns.
  This stability of the url and API KEY is not guaranteed.
  Regards: Team Kaoi
 */
        .then((response) => {
                // console.log(response);
                const text = `🔎 Info for the IP *${place}* found\n\n🌌 *IP:* ${response.data.ip}\n*🌍 Country:* ${response.data.country_name}\n✨ *Country code:* ${response.data.country_code}\n🌟 *Region code:* ${response.data.region_code}\n🗺 *Province:* ${response.data.region_name}\n🗽 *City:* ${response.data.city}\n💫 *ZIP Code:* ${response.data.zip_code}\n⏰ *Time Zone:* ${response.data.time_zone}\n`
                M.reply(text);
            }).catch(err => {
                M.reply(`Sorry, couldn't find any Data related to *${place}*.`)
            }
            )
    };
}
