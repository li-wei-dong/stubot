
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
  ICON_URL: 'http://informationtechnologysystems.com/wp-content/uploads/2016/01/cute-807306_960_720.png'
}

module.exports = (key) => {
  if (!key) return config

  return config[key]
}
