//special thanks black amda- queen amdi
//blank page
// coded BY sisula welgamage
/*blank page__________________________________________________________________________________
s
o
u
n
d
c
l
o
u
d
s
o
n
g
d
o
w
n
l
o
a
d
e
r
b
y
s
i
s
u
l
a
w
e
l
g
a
m
a
g
e





















































































































































































































































































































































*/
const Asena = require('../events')
const { MessageType } = require('@adiwajshing/baileys')
const axios = require('axios')
const cn = require('../config');

const Language = require('../language')
const { errorMessage, infoMessage } = require('../helpers')
const Lang = Language.getString('instagram')
const Tlang = Language.getString('tiktok')
const SCDESC = "Download Facebook videos"
const NEED_WORD = "Need to enter a link."
const DWLOAD_VID = "*♣️ Downloading soundcloud songs*"

if (cn.WORKTYPE == 'private') {
Asena.addCommand({ pattern: 'soundcloud ?(.*)', fromMe: true, desc: SCDESC}, (async (message, match) => {

		const sclink = match[1]

		if (!sclink) return await message.client.sendMessage(message.jid,NEED_WORD, MessageType.text);

		await message.client.sendMessage(message.jid,DWLOAD_VID,MessageType.text);

		await axios
		  .get(`http://lolhuman.herokuapp.com/api/soundcloud?apikey=a776a857c5afc5855e0eb023&url=${sclink}`)
		  .then(async (response) => {
		    const {
		      result,
		    } = response.data

		    const profileBuffer = await axios.get(result, {responseType: 'arraybuffer'})

	      await message.sendMessage(Buffer.from(profileBuffer.data), MessageType.audio, {quoted: message.data}, {caption: "🐍COBRABOT🐍 2021"})}
		  )
    })); // SOUND CLOUD added ceb5ace3________thanks for blackamda
}
