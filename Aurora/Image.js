/*COPYRIGHT (C) 2022 CODED BY NOIZE */
const _0x5a5fe9=_0x26e0;(function(_0x3368d5,_0x2634b6){const _0x14001e=_0x26e0,_0x54f91d=_0x3368d5();while(!![]){try{const _0x4ccfa1=-parseInt(_0x14001e(0xf5))/0x1+parseInt(_0x14001e(0xf8))/0x2*(-parseInt(_0x14001e(0xea))/0x3)+parseInt(_0x14001e(0xe1))/0x4*(parseInt(_0x14001e(0xf4))/0x5)+-parseInt(_0x14001e(0xed))/0x6+parseInt(_0x14001e(0xfd))/0x7*(parseInt(_0x14001e(0x10a))/0x8)+-parseInt(_0x14001e(0xf2))/0x9+parseInt(_0x14001e(0xe9))/0xa;if(_0x4ccfa1===_0x2634b6)break;else _0x54f91d['push'](_0x54f91d['shift']());}catch(_0x326fb6){_0x54f91d['push'](_0x54f91d['shift']());}}}(_0x324c,0x58c02));const {MessageType,Presence,MessageOptions}=require(_0x5a5fe9(0x108)),Base=require(_0x5a5fe9(0xef)),Message=require(_0x5a5fe9(0x101)),ReplyMessage=require(_0x5a5fe9(0xe8));function _0x26e0(_0x1fcb3f,_0x420389){const _0x324cfb=_0x324c();return _0x26e0=function(_0x26e026,_0x131174){_0x26e026=_0x26e026-0xe1;let _0x440ab3=_0x324cfb[_0x26e026];return _0x440ab3;},_0x26e0(_0x1fcb3f,_0x420389);}class Image extends Base{constructor(_0xa9b528,_0x3527f4){const _0x294b01=_0x5a5fe9;super(_0xa9b528);if(_0x3527f4)this[_0x294b01(0xe3)](_0x3527f4);}[_0x5a5fe9(0xe3)](_0x2313b6){const _0x10dc10=_0x5a5fe9;return this['id']=_0x2313b6['key']['id']===undefined?undefined:_0x2313b6[_0x10dc10(0x10c)]['id'],this[_0x10dc10(0xff)]=_0x2313b6[_0x10dc10(0x10c)][_0x10dc10(0xfa)],this['fromMe']=_0x2313b6[_0x10dc10(0x10c)][_0x10dc10(0xe5)],this['caption']=_0x2313b6['message'][_0x10dc10(0x103)]['caption']===null?_0x2313b6[_0x10dc10(0xf0)][_0x10dc10(0x103)][_0x10dc10(0xeb)]:'',this[_0x10dc10(0x100)]=_0x2313b6['message'][_0x10dc10(0x103)][_0x10dc10(0x100)],this['timestamp']=typeof _0x2313b6[_0x10dc10(0xee)]==='object'?_0x2313b6['messageTimestamp'][_0x10dc10(0xe7)]:_0x2313b6[_0x10dc10(0xee)],this[_0x10dc10(0x102)]=_0x2313b6[_0x10dc10(0xf0)][_0x10dc10(0x103)]['mimetype'],this[_0x10dc10(0xf7)]=_0x2313b6[_0x10dc10(0xf0)]['imageMessage'][_0x10dc10(0xf7)],this[_0x10dc10(0xe2)]=_0x2313b6[_0x10dc10(0xf0)][_0x10dc10(0x103)][_0x10dc10(0xe2)],this[_0x10dc10(0xf9)]=_0x2313b6[_0x10dc10(0xf0)][_0x10dc10(0x103)][_0x10dc10(0xf9)],this['data']=_0x2313b6,_0x2313b6['message'][_0x10dc10(0x103)][_0x10dc10(0x10b)](_0x10dc10(0xe6))&&_0x2313b6['message'][_0x10dc10(0xe6)][_0x10dc10(0xec)]?this[_0x10dc10(0xe4)]=new ReplyMessage(this[_0x10dc10(0xf6)],_0x2313b6['message']['imageMessage'][_0x10dc10(0xe6)]):this[_0x10dc10(0xe4)]=![],super[_0x10dc10(0xe3)](_0x2313b6);}async[_0x5a5fe9(0xfb)](){const _0x4e123a=_0x5a5fe9;return await this[_0x4e123a(0xf6)]['deleteMessage'](this[_0x4e123a(0xff)],{'id':this['id'],'remoteJid':this[_0x4e123a(0xff)],'fromMe':!![]});}async['reply'](_0x112248){const _0x55c1ee=_0x5a5fe9;var _0x421a95=await this['client']['sendMessage'](this[_0x55c1ee(0xff)],_0x112248,MessageType[_0x55c1ee(0x107)],{'quoted':this[_0x55c1ee(0x104)]});return new Message(this['client'],_0x421a95);}async[_0x5a5fe9(0x109)](_0x4b4bda,_0x141a3e,_0x21ea79){const _0x318b5a=_0x5a5fe9;return await this[_0x318b5a(0xf6)][_0x318b5a(0x109)](this[_0x318b5a(0xff)],_0x4b4bda,_0x141a3e,_0x21ea79);}async[_0x5a5fe9(0xfe)](){const _0x120207=_0x5a5fe9;return await this[_0x120207(0xf6)][_0x120207(0x105)](this[_0x120207(0xff)],Presence['composing']);}async[_0x5a5fe9(0xf3)](){const _0x335ae9=_0x5a5fe9;return await this[_0x335ae9(0xf6)][_0x335ae9(0xf1)](this['jid']);}async[_0x5a5fe9(0x106)](_0x385c4b=this['id']){const _0x596379=_0x5a5fe9;return await this[_0x596379(0xf6)][_0x596379(0xfc)](this[_0x596379(0x104)],_0x385c4b),this['id']+'.'+this[_0x596379(0x102)]['split']('/')[0x1];}};module['exports']=Image;function _0x324c(){const _0x4dbd41=['_patch','reply_message','fromMe','contextInfo','low','./ReplyMessage','110710EBfWOH','5637hJXgos','caption','quotedMessage','2352978Rrwcql','messageTimestamp','./Base','message','chatRead','771552mXNLHX','sendRead','1697295qfbPpx','74884MeqwXr','client','height','62zVApnI','mediaKey','remoteJid','delete','downloadAndSaveMediaMessage','2408vNIdeN','sendTyping','jid','url','./Message','mimetype','imageMessage','data','updatePresence','download','text','@adiwajshing/baileys','sendMessage','14512kcNfUY','hasOwnProperty','key','4cRUiKM','width'];_0x324c=function(){return _0x4dbd41;};return _0x324c();}