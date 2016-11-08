
'use strict'

const _ = require('lodash')
const config = require('../config')
const scriptures = require(".\scriptures")

function getScripture(scriptures) {
	let num = Math.floor(Math.random() * scriptures.length)
	return scriptures.length
}

const msgDefaults = {
  response_type: 'in_channel',
  username: 'Stubot',
  icon_emoji: config('ICON_EMOJI')
}

let attachments = [
  {
    title: 'Stubot will retrieve a random scriptural thought for you.',
    color: '#2FA44F',
    text: getScripture(scriptures),
    mrkdwn_in: ['text']
  },
]

const handler = (payload, res) => {
  let msg = _.defaults({
    channel: payload.channel_name,
    attachments: attachments
  }, msgDefaults)

  res.set('content-type', 'application/json')
  res.status(200).json(msg)
  return
}

module.exports = { pattern: /scripture/ig, handler: handler }
