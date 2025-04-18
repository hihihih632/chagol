module.exports = {
  config: {
    name: "typebattle",
    version: "1.0",
    author: "RANA",//Don't change the credit because I made it. Any problems to contact me. https://facebook.com/100063487970328
    countDown: 5,
    role: 0,
    category: "games",
    description: {
      en: "Who types the fastest?"
    },
    guide: {
      en: "{pn}"
    }
  },

  onStart: async function ({ message }) {
    const words = ["elephant", "messenger", "javascript", "banana", "champion", "butterfly"];
    const randomWord = words[Math.floor(Math.random() * words.length)];

    message.reply(`⚡ First one to type this word wins:\n\n"${randomWord}"`);

    const listener = async ({ body, senderID, threadID }) => {
      if (body.toLowerCase() === randomWord.toLowerCase()) {
        message.reply(`🏆 ${senderID} typed it first and wins!`);
        global.GoatBot.onMessage.delete(listener);
      }
    };

    global.GoatBot.onMessage.set(listener, listener);
  }
};