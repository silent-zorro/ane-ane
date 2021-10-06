import MessageHandler from '../../Handlers/MessageHandler'
import BaseCommand from '../../lib/BaseCommand'
import WAClient from '../../lib/WAClient'
import { ISimplifiedMessage } from '../../typings'
import axios from 'axios'

export default class Command extends BaseCommand {
    constructor(client: WAClient, handler: MessageHandler) {
        super(client, handler, {
            command: 'ip',
            description: 'Your ip details.',
            aliases: ['What you know about your ip?'],
            category: 'fun',
            usage: `${client.config.prefix}ip`
        })
    }

    run = async (M: ISimplifiedMessage): Promise<void> => {
        await axios
            .get(`https://api.ipify.org/?format=json`)
            .then((response) => {
                // console.log(response);
                const text = `👨‍💻 *Ip:* ${response.data.ip}\n\n*🗺 Contry code:* ${response.data.country_code}\n\n*🌎 Country name:* ${response.data.country_name}\n\n*🌍 Region name:* ${response.data.region_name}\n\n*🌏 City name:* ${response.data.city}\n\n*⌚️ Time zone:* ${response.data.time_zone}`
                M.reply(text)
            })
            .catch((err) => {
                M.reply(`🔍 Error: ${err}`)
            })
    }
}
