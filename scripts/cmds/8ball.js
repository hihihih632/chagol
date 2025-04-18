module.exports = {
	config: {
		name: "8ball",
		version: "1.0",
		author: "RANA",//Don't change the credit because I made it. Any problems to contact me. https://facebook.com/100063487970328
		description: {
			en: "Ask the magic 8-ball a question"
		},
		category: "chat",
		guide: {
			en: "{pn} <your question>"
		}
	},

	onStart: async function ({ message, args }) {
		if (!args[0]) return message.reply("Ask me a question!");

		const replies = [
			"Yes!", "No.", "Maybe...", "Ask again later.",
			"Absolutely!", "I doubt it.", "Not likely.", "Definitely!",
			"100% yes!", "Better not tell you now..."
		];

		const response = replies[Math.floor(Math.random() * replies.length)];
		return message.reply(`🎱 ${response}`);
	}
};