/* # TeenuhX
*/

const Asena = require('../events');
const { MessageType, MessageOptions, Mimetype } = require('@adiwajshing/baileys');
const fs = require('fs');
const axios = require('axios');
const Config = require('../config');

const Language = require('../language');
const Lang = Language.getString('ttp');
const Desk = "*◁❁❁❁❁ᎠᎪҬᎪ ᏞᎾᏉᎬᏒ ★ ᏞᎾᎶᎾ ᏢᎪᏟᏦ✧༝┉┉┉┉┉˚❋විශේශ ලෝගෝ ගොනුව❋˚┉┉┉┉┉༝✧▷*\n\n*🧞‍♀️විධානය* : .mug\n*💠විස්තරය* : ```It Sends a candle Mug image of the text provided```\n\n*🧞‍♀️විධානය* : .naruto\n*💠විස්තරය* : ```Write the provided text on a Naruto Banner```\n\n*🧞‍♀️විධානය* : .love\n*💠විස්තරය* : ```It Sends a Love message image of the text provided```\n\n*🧞‍♀️විධානය* : .leaves\n*💠විස්තරය* : ```It Sends a  paperonglass image of the text provided```\n\n*🌀විධානය* : .pubg\n*💠විස්තරය* : ```Write the provided text on a Pubg logo```\n\n*🧞‍♀️විධානය* : .cuf\n*💠විස්තරය* : ```It Sends a coffeecup of the text provided```\n\n*🧞‍♀️විධානය* : .sky\n*💠විස්තරය* : ```Write the provided text on sky with shadow```\n\n*🧞‍♀️විධානය* : .neon\n*💠විස්තරය* : ```Write the provided text on  glowneoen image```"

if (Config.WORKTYPE == 'private') {


    Asena.addCommand({ pattern: 'logoc ?(.*)', fromMe: true,dontAddCommandList: true }, (async (message, match) => {
        await message.sendMessage(Desk);
        
    }));

    Asena.addCommand({ pattern: 'mug ?(.*)', fromMe: true,dontAddCommandList: true }, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(Lang.NEED_WORD);

        var ttinullimage = await axios.get(`https://videfikri.com/api/textmaker/candlemug/?text=${encodeURIComponent(match[1])}`, { responseType: 'arraybuffer' })

        await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: '*░▒▓█►─═ Ćн𝕒𝐌Ꭵy𝕒  𝒷𝕆Ŧ═─◄█▓▒*' })

    }));

    Asena.addCommand({ pattern: 'love ?(.*)', fromMe: true,dontAddCommandList: true }, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(Lang.NEED_WORD);

        var ttinullimage = await axios.get(`https://videfikri.com/api/textmaker/lovemsg/?text=${encodeURIComponent(match[1])}`, { responseType: 'arraybuffer' })

        await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: '░▒▓█►─═ Ćн𝕒𝐌Ꭵy𝕒  𝒷𝕆Ŧ═─◄█▓▒*' })

    }));

    Asena.addCommand({ pattern: 'naruto ?(.*)', fromMe: true,dontAddCommandList: true }, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(Lang.NEED_WORD);

        var ttinullimage = await axios.get(`https://videfikri.com/api/textmaker/narutobanner/?text=${encodeURIComponent(match[1])}`, { responseType: 'arraybuffer' })

        await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: '*░▒▓█►─═ Ćн𝕒𝐌Ꭵy𝕒  𝒷𝕆Ŧ═─◄█▓▒*' })

    }));

    Asena.addCommand({ pattern: 'leaves ?(.*)', fromMe: true,dontAddCommandList: true }, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(Lang.NEED_WORD);

        var ttinullimage = await axios.get(`https://videfikri.com/api/textmaker/paperonglass/?text=${encodeURIComponent(match[1])}`, { responseType: 'arraybuffer' })

        await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: '*░▒▓█►─═ Ćн𝕒𝐌Ꭵy𝕒  𝒷𝕆Ŧ═─◄█▓▒*' })

    }));

    Asena.addCommand({ pattern: 'sky ?(.*)', fromMe: true,dontAddCommandList: true }, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(Lang.NEED_WORD);

        var ttinullimage = await axios.get(`https://videfikri.com/api/textmaker/shadowtext/?text=${encodeURIComponent(match[1])}`, { responseType: 'arraybuffer' })

        await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: '*░▒▓█►─═ Ćн𝕒𝐌Ꭵy𝕒  𝒷𝕆Ŧ═─◄█▓▒*' })

    }));

    Asena.addCommand({ pattern: 'cofe ?(.*)', fromMe: true,dontAddCommandList: true }, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(Lang.NEED_WORD);

        var ttinullimage = await axios.get(`https://videfikri.com/api/textmaker/coffeecup/?text=${encodeURIComponent(match[1])}`, { responseType: 'arraybuffer' })

        await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: '*░▒▓█►─═ Ćн𝕒𝐌Ꭵy𝕒  𝒷𝕆Ŧ═─◄█▓▒*' })

    }));

    Asena.addCommand({ pattern: 'neon ?(.*)', fromMe: true,dontAddCommandList: true }, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(Lang.NEED_WORD);

        var ttinullimage = await axios.get(`https://videfikri.com/api/textmaker/glowingneon/?text=${encodeURIComponent(match[1])}`, { responseType: 'arraybuffer' })

        await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: '*░▒▓█►─═ Ćн𝕒𝐌Ꭵy𝕒  𝒷𝕆Ŧ═─◄█▓▒*' })

    }));

    Asena.addCommand({ pattern: 'pubg ?(.*)', fromMe: true,dontAddCommandList: true }, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(Lang.NEED_WORD);

        var ttinullimage = await axios.get(`https://videfikri.com/api/textmaker/pubgmlogo/?text1=NeotroX&text1=${encodeURIComponent(match[1])}`, { responseType: 'arraybuffer' })

        await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: '*░▒▓█►─═ Ćн𝕒𝐌Ꭵy𝕒  𝒷𝕆Ŧ═─◄█▓▒*' })

    }));


    Asena.addCommand({pattern: 'bit ?(.*)', fromMe: true, dontAddCommandList: true}, (async (message, match) => {

        if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD);
      
      var topText, bottomText;
        if (match[1].includes(',')) {
            var split = match[1].split(',');
            bottomText = split[1];
            topText = split[0];
    }
    
        var webimage = await axios.get(`https://videfikri.com/api/textmaker/8bit/?text1=${topText}&text2=${bottomText}`, { responseType: 'arraybuffer' })
    
        await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: '*░▒▓█►─═ Ćн𝕒𝐌Ꭵy𝕒  𝒷𝕆Ŧ═─◄█▓▒*' })
    
        }));

        Asena.addCommand({pattern: 'bt ?(.*)', fromMe: true, dontAddCommandList: true}, (async (message, match) => {

            if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD);
          
          var topText, bottomText;
            if (match[1].includes(',')) {
                var split = match[1].split(',');
                bottomText = split[1];
                topText = split[0];
        }
        
            var webimage = await axios.get(`https://videfikri.com/api/textmaker/bf4/?text1=${topText}&text2=${bottomText}`, { responseType: 'arraybuffer' })
        
            await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: '*░▒▓█►─═ Ćн𝕒𝐌Ꭵy𝕒  𝒷𝕆Ŧ═─◄█▓▒*' })
        
            }));




}
