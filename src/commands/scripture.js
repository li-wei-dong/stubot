
'use strict'

const _ = require('lodash')
const fs = require('fs')
const config = require('../config')
const scriptures = require("../data/scriptures")

function scriptureCount(scriptures) {
	var scripture
	var count = 0

	for(scripture in scriptures) {
		count++
	}
	return count
}

function getScripture(scriptures) {
	var num
	num = Math.floor(Math.random() * scriptureCount(scriptures))
	console.log(num)

	var scripture = scriptures[num]
	console.log(scripture);
	
	return scripture.passage + "\n -" + scripture.location
}

const msgDefaults = {
  response_type: 'in_channel',
  username: 'Stubot',
  icon_emoji: config('ICON_EMOJI')
}

const handler = (payload, res) => {
	let attachments = [
	  {
	  	fallback: getScripture(scriptures.scriptures),
		title: 'Stubot: Here is your scripture',
		color: '#2FA44F',
		text: getScripture(scriptures.scriptures),
		mrkdwn_in: ['text']
	  },
	]

  let msg = _.defaults({
    channel: payload.channel_name,
    attachments: attachments
  }, msgDefaults)

  res.set('content-type', 'application/json')
  res.status(200).json(msg)
  return
}

module.exports = { pattern: /scripture/ig, handler: handler }
