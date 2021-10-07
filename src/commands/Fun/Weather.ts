import MessageHandler from '../../Handlers/MessageHandler'
import BaseCommand from '../../lib/BaseCommand'
import WAClient from '../../lib/WAClient'
import { IParsedArgs, ISimplifiedMessage } from '../../typings'
import axios from 'axios'

export default class Command extends BaseCommand {
    constructor(client: WAClient, handler: MessageHandler) {
        super(client, handler, {
            command: 'weather',
            aliases: ['g', 'search'],
            description: 'Search on the web ',
            category: 'fun',
            dm: true,
            usage: `${client.config.prefix}google [query]`
        })
    }
    // static count = 0
    run = async (M: ISimplifiedMessage, { joined }: IParsedArgs): Promise<void> => {
        // Adds mod check
        // if (!this.client.config.mods?.includes(M.sender.jid)) return void null
        if (!joined) return void M.reply('🔎 Provide a search term')
        // if (Command.count > 75) return void M.reply('🔎 Search limit reached')
        // Command.count += 1
        const term = joined.trim()
        await axios
            .get(
                `https://api.openweathermap.org/data/2.5/weather?q=${term}&units=metric&appid=060a6bcfa19809c2cd4d97a212b19273&language=tr`
            )
            .then((res) => {
                // console.log(res);
                if (res.status !== 200) return void M.reply(`🔍 Error: ${res.status}`)
                let result = ``
                let index = 1
                for (const item of res.data?.items) {
                    result += `*👾${index}.Title* : ${item.country}\n*🔗Link* : ${item.link}\n*📖Snippet* : ${item.snippet}\n\n`
                    index++
                }
                // return void M.reply(`🔍Command Used : ${Command.count} times\n Result for *${term}*\n\n\n ${result}`)
                return void M.reply(`🔍 Result for *${term}*\n\n\n ${result}`)
            })
            .catch((err) => {
                M.reply(`🔍 Error: ${err}`)
            })
    }
}
