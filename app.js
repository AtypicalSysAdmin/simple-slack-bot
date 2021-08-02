import { RTMClient } from '@slack/rtm-api'
import { BOT_SPAM_CHANNEL, SLACK_OAUTH_TOKEN } from './constants.js'
import { WebClient } from '@slack/web-api'
const packageJson = require('../package.json')



const rtm = new RTMClient(SLACK_OAUTH_TOKEN); //OATH bot access token .env
const web = new WebClient(SLACK_OAUTH_TOKEN);

rtm.start()
    .catch(console.error);

rtm.on('ready', async () => {
    console.log('bot started')
    sendMessage(BOT_SPAM_CHANNEL, `Bot version ${packageJson.version} is online!`)

});

rtm.on('slack_event', async (eventType, event) => {

    
    if (event && eventType === 'message') {

        let messageText = event.text.toString()

        console.log(typeof (event.text))
        if (messageText.lastIndexOf('Hi how are you doing')!==-1) {


            hello(event.channel, event.user)
        }
    }
})



function hello(channelId, UserId) {

    sendMessage(channelId, `Heya <@${UserId}> I am good how about yourself?`)
}

async function sendMessage(channel, message) {
    await web.chat.postMessage({
        channel: channel,
        text: message,

    });
}