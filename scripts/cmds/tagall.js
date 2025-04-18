module.exports = {
  config: {
    name: "tagall",
    version: "1.0",
    author: "Rana",
    countDown: 5,
    role: 0,
    category: "group",
    description: {
      en: "Tag all members in group"
    },
    guide: {
      en: "{pn} [message]"
    }
  },

  onStart: async function ({ message, event, usersData, args }) {
    const allUserIDs = event.participantIDs.filter(id => id != message.senderID);
    const allUserMentions = await Promise.all(
      allUserIDs.map(async uid => {
        const name = await usersData.getName(uid);
        return { tag: name, id: uid };
      })
    );

    const customMessage = args.join(" ") || "Tagging everyone!";
    return message.reply(customMessage, null, { mentions: allUserMentions });
  }
};