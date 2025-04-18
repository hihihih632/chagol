module.exports = {
	config: {
		name: "sleepcheck",
		version: "1.0",
		author: "RANA",//Don't change the credit because I made it. Any problems to contact me. https://facebook.com/100063487970328
		description: {
			en: "Check how sleepy someone is"
		},
		category: "fun",
		guide: {
			en: "{pn} @user"
		}
	},

	onStart: async function ({ message, event }) {
		const uids = Object.keys(event.mentions);
		if (uids.length === 0) return message.reply("Mention someone to check their sleepiness!");

		let results = "";
		for (const uid of uids) {
			const percent = Math.floor(Math.random() * 101);
			let state = "Wide Awake";
			if (percent > 80) state = "Coma Incoming";
			else if (percent > 60) state = "Very Sleepy";
			else if (percent > 30) state = "A bit tired";
			
			const name = event.mentions[uid];
			results += `💤 ${name}: ${percent}% sleepy - ${state}\n`;
		}

		return message.reply(results.trim());
	}
};