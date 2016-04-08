
'use strict'

const dotenv = require('dotenv')
const ENV = process.env.NODE_ENV || 'development'

if (ENV === 'development') dotenv.load()

const config = {
  ENV: process.env.NODE_ENV,
  PORT: process.env.PORT,
  PROXY_URI: process.env.PROXY_URI,
  WEBHOOK_URL: process.env.WEBHOOK_URL,
  STUBOT_COMMAND_TOKEN: process.env.STUBOT_COMMAND_TOKEN,
  SLACK_TOKEN: process.env.SLACK_TOKEN,
  ICON_EMOJI: ':robot_face:',
  ICON_URL: 'https://avatars.slack-edge.com/2016-03-30/30698608357_e72c39323797e0e1a274_48.jpg'
}

module.exports = (key) => {
  if (!key) return config

  return config[key]
}
