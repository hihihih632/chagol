module.exports = {
	config: {
		name: "ghostping",
		version: "1.0",
		author: "RANA",//Don't change the credit because I made it. Any problems to contact me. https://facebook.com/100063487970328
		description: {
			en: "Mention someone and delete the message"
		},
		category: "fun",
		guide: {
			en: "{pn} @User"
		}
	},

	onStart: async function ({ message, event }) {
		const mentionUIDs = Object.keys(event.mentions);
		if (mentionUIDs.length === 0) return message.reply("Please mention someone!");

		const sent = await message.reply({ body: "Hey!", mentions: [{ id: mentionUIDs[0], tag: "Hey" }] });
		setTimeout(() => {
			message.unsend(sent.messageID);
		}, 1000); // delete after 1 second
	}
};