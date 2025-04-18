const fs = require('fs');
module.exports = {
	config: {
		name: "audio",
		version: "1.0",
		author: "RANA", //Don't change the credit because I made it. Any problems to contact me. https://facebook.com/100063487970328
		countDown: 5,
		role: 0,
		shortDescription: "no prefix",
		longDescription: "no prefix",
		category: "no prefix",
	},
	onStart: async function(){},
	onChat: async function({ event, message, getLang }) {
		if (event.body) {
			const word = event.body.toLowerCase();
			switch (word) {
				case "lojja":
					return message.reply({
						body: " oo 🐸",
						attachment: fs.createReadStream("scripts/cmds/RANA/lojja.mp3"),
          });
				case "yamate":
					return message.reply({
						body: "Yamate 🥵 ",
			            attachment: fs.createReadStream("scripts/cmds/RANA/lojja.mp3"),
					});
					case "ahh":
					return message.reply({
						body: "ahhh~ ",
						attachment: fs.createReadStream("scripts/cmds/RANA/lojja.mp3"),
					});
				case "ara":
					return message.reply({
						body: "ara ara ",
						attachment: fs.createReadStream("scripts/cmds/RANA/lojja.mp3"),
					});
				case "good night":
					return message.reply({
						body: " Good Night 🌉 ",
				    	attachment: fs.createReadStream("scripts/cmds/RANA/lojja.mp3"),
					});
				case "sus":
					return message.reply({
						body: "「 ඞ 」",
						attachment: fs.createReadStream("scripts/cmds/RANA/lojja.mp3"),
					});
				case "good morning":
					return message.reply({
						body: "「 Good Morning 🌄 」",
				    	attachment: fs.createReadStream("scripts/cmds/RANA/lojja.mp3"),
					});
				case "yourmom":
					return message.reply({
						body: "「 Bujis ki nai? 」",
						attachment: fs.createReadStream("scripts/cmds/RANA/lojja.mp3"),
					});
				case "machikney":
					return message.reply({
						body: "「 Machikney 」",
						attachment: fs.createReadStream("scripts/cmds/RANA/lojja.mp3"),
					});
				case "randi":
					return message.reply({
						body: "「 Randi ko Chora 」",
						attachment: fs.createReadStream("scripts/cmds/RANA/lojja.mp3"),
					});
					case "sachiin":
					 return message.reply({
						 body: " 「 GAYY 」",
						 attachment: fs.createReadStream("scripts/cmds/RANA/lojja.mp3"),
							});
				case "omg":
					return message.reply({
						body: "「 OMG WoW 😳 」",
						attachment: fs.createReadStream("scripts/cmds/RANA/lojja.mp3"),
					});
				default:
					return; 
			}
		}
	}
};