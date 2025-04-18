module.exports = {
  config: {
    name: "active",
    version: "1.0",
    author: "RANA",//Don't change the credit because I made it. Any problems to contact me. https://facebook.com/100063487970328
    countDown: 5,
    role: 0,
    category: "group",
    description: {
      en: "Show recent active users in the group"
    },
    guide: {
      en: "{pn}"
    }
  },

  onStart: async function ({ event, usersData, message }) {
    const participants = event.participantIDs;
    let actives = [];

    for (const id of participants) {
      const userData = await usersData.get(id);
      if (userData && userData.lastActive) {
        actives.push({
          name: userData.name,
          uid: id,
          time: userData.lastActive
        });
      }
    }

    actives.sort((a, b) => b.time - a.time);
    actives = actives.slice(0, 10);

    if (actives.length === 0) return message.reply("No recent activity found!");

    let msg = "🟢 𝐓𝐨𝐩 𝟏𝟎 𝐀𝐜𝐭𝐢𝐯𝐞 𝐌𝐞𝐦𝐛𝐞𝐫𝐬:\n\n";
    for (let i = 0; i < actives.length; i++) {
      const t = new Date(actives[i].time).toLocaleString();
      msg += `${i + 1}. ${actives[i].name} (${actives[i].uid})\nLast Active: ${t}\n\n`;
    }

    return message.reply(msg);
  }
};