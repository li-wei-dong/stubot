
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

function randomNum(scriptures) {
	var num = Math.floor(Math.random() * scriptureCount(scriptures))
	return num
}

function getScripture(scriptures) {
	var num = Math.floor(Math.random() * scriptureCount(scriptures))
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

let attachments = [
  {
    title: 'Stubot will retrieve a random scriptural thought for you.',
    color: '#2FA44F',
    text: randomNum(scriptures.scriptures),//getScripture(scriptures.scriptures),
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
