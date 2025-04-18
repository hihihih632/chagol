module.exports = {
  config: {
    name: "rps",
    version: "1.0",
    author: "RANA",//Don't change the credit because I made it. Any problems to contact me. https://facebook.com/100063487970328
    countDown: 5,
    role: 0,
    category: "game",
    description: {
      en: "Rock Paper Scissors game"
    },
    guide: {
      en: "{pn} <rock|paper|scissors>"
    }
  },

  onStart: async function ({ args, message }) {
    const userChoice = args[0]?.toLowerCase();
    if (!["rock", "paper", "scissors"].includes(userChoice))
      return message.reply("Choose one: rock, paper, or scissors");

    const choices = ["rock", "paper", "scissors"];
    const botChoice = choices[Math.floor(Math.random() * 3)];

    let result;
    if (userChoice === botChoice) result = "It's a tie!";
    else if (
      (userChoice === "rock" && botChoice === "scissors") ||
      (userChoice === "scissors" && botChoice === "paper") ||
      (userChoice === "paper" && botChoice === "rock")
    ) result = "You win!";
    else result = "You lose!";

    return message.reply(`You chose: ${userChoice}\nBot chose: ${botChoice}\nResult: ${result}`);
  }
};