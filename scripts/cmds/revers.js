module.exports = {
	config: {
		name: "reverse",
		version: "1.0",
		author: "RANA",//Don't change the credit because I made it. Any problems to contact me. https://facebook.com/100063487970328
		description: {
			en: "Reverse any given text"
		},
		category: "fun",
		guide: {
			en: "{pn} <text>"
		}
	},

	onStart: async function ({ message, args }) {
		if (!args[0]) return message.reply("Please provide text to reverse!");
		const reversed = args.join(" ").split("").reverse().join("");
		return message.reply(reversed);
	}
};