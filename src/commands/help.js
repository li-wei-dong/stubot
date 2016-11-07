
'use strict'

const _ = require('lodash')
const config = require('../config')
const commands = reqire('./')

const msgDefaults = {
  response_type: 'in_channel',
  username: 'Stubot',
  icon_emoji: config('ICON_EMOJI')
}

/*var getCommands(commands) {
	let cmdString = _.reduce(commands, (string, cmd) => {
		return string + cmd + ', ';
	}, "");

	return cmdString;
}*/


let attachments = [
  /*{
  	title: 'List of commands',
	text: getCommands(commands),
	mrkdwn_in: ['text']
  },*/
  {
    title: 'Stubot will help you find the flyest repos on GitHub',
    color: '#2FA44F',
    text: '`/stubot repos` returns hip repos \n`/stubot javascript` returns hip JavaScript repos',
    mrkdwn_in: ['text']
  },
  {
    title: 'Configuring Stubot',
    color: '#E3E4E6',
    text: '`/stubot help` ... you\'re lookin at it! \n',
    mrkdwn_in: ['text']
  }
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

module.exports = { pattern: /help/ig, handler: handler }
