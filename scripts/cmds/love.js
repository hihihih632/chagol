module.exports = {
	config: {
		name: "love",
		version: "1.0",
		author: "RANA",//Don't change the credit because I made it. Any problems to contact me. https://facebook.com/100063487970328
		description: {
			en: "Check love percentage between two users"
		},
		category: "love",
		guide: {
			en: "{pn} @User1 @User2 or {pn} Name1 Name2"
		}
	},

	onStart: async function ({ message, args, event, usersData }) {
		let [uid1, uid2] = Object.keys(event.mentions);
		let name1, name2;

		if (uid1 && uid2) {
			name1 = await usersData.getName(uid1);
			name2 = await usersData.getName(uid2);
		} else if (args.length >= 2) {
			name1 = args[0];
			name2 = args[1];
		} else {
			return message.reply("Please mention two users or provide two names.");
		}

		const lovePercent = Math.floor(Math.random() * 101);
		let comment = "Hmm... could work.!🙂👍";
		if (lovePercent > 80) comment = "Perfect couple..!😍🥰";
		else if (lovePercent < 30) comment = "Just friends maybe.?🙂";
		
		return message.reply(`❤️ 𝙻𝚘𝚟𝚎 𝙼𝚎𝚝𝚎𝚛 𝙱𝚎𝚝𝚠𝚎𝚎𝚗  ${name1} 𝙰𝚗𝚍 ${name2} 🎀\n‎◆━━━━━━━━━━━━━◆\n${lovePercent}%\n\n${comment}`);
	}
};