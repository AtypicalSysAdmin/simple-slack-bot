# simple-slack-bot
a simple slack bot

Create user-->invite people-->email address



1 Create a classic slack app

The issue is releated with the new granular permissions app in slack, use the legacy bot on this url:  https://api.slack.com/apps?new_classic_app=1 and then in Bots you can add legacy bot user and generate correct token





mkdir
npm init
npm I -g yarn
yarn add esm
yarn add @slack/rtm-api
yarn add @slack/web-api

you can create a src folder and put all js files in there and change your start point in package.json to src folder instead of the default option which is index.js

here is how the code in your package.json file should look like in that case;



{
  "name": "simple-slack-bot",
  "version": "0.0.0",
  "description": "A simple slack bot",
  "main": "src",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "start": "node ."
  },
  "author": "Mo",
  "license": "ISC",
  "dependencies": {
    "@slack/rtm-api": "^6.0.0",
    "@slack/web-api": "^6.3.0",
    "esm": "^3.2.25"
  }
}

