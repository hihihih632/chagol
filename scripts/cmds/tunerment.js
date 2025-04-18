const fs = require("fs-extra");
const path = __dirname + "/cache/tourney.json";

if (!fs.existsSync(path)) fs.writeFileSync(path, JSON.stringify({ active: false }));

module.exports = {
  config: {
    name: "tourney",
    version: "1.0",
    author: "Rana",
    category: "games",
    description: {
      en: "Mini tournament system for group"
    },
    guide: {
      en: "{pn} create | join | start | winner @user | status | end"
    }
  },

  onStart: async function ({ message, args, event }) {
    let data = JSON.parse(fs.readFileSync(path));
    const cmd = args[0];

    switch (cmd) {
      case "create":
        if (data.active) return message.reply("A tournament is already active!");
        data = { active: true, players: [], round: 0, matches: [], winner: null };
        fs.writeFileSync(path, JSON.stringify(data));
        return message.reply("✅ Tournament created! Use `tourney join` to enter.");

      case "join":
        if (!data.active) return message.reply("No tournament active.");
        if (data.players.includes(event.senderID)) return message.reply("You already joined.");
        data.players.push(event.senderID);
        fs.writeFileSync(path, JSON.stringify(data));
        return message.reply("✅ You've joined the tournament!");

      case "start":
        if (!data.active || data.players.length < 2) return message.reply("Need at least 2 players.");
        let shuffled = data.players.sort(() => 0.5 - Math.random());
        let matches = [];
        while (shuffled.length > 1) matches.push([shuffled.pop(), shuffled.pop()]);
        if (shuffled.length) matches.push([shuffled.pop()]); // odd player
        data.matches = matches;
        data.round += 1;
        fs.writeFileSync(path, JSON.stringify(data));

        let reply = `🎯 Round ${data.round} Matches:\n`;
        for (let i = 0; i < matches.length; i++) {
          reply += `Match ${i + 1}: ` + matches[i].map(id => `@${id}`).join(" vs ") + "\n";
        }
        return message.reply(reply, null, { mentions: matches.flat().map(id => ({ tag: `@${id}`, id })) });

      case "winner":
        if (!event.mentions || Object.keys(event.mentions).length === 0) return message.reply("Mention the winner of the match!");
        const winner = Object.keys(event.mentions)[0];
        if (!data.players.includes(winner)) return message.reply("They are not in the tournament.");

        // move winner to next round
        data.players = [winner];
        data.matches = [];
        data.winner = winner;
        fs.writeFileSync(path, JSON.stringify(data));
        return message.reply(`🏆 Champion is @${winner}`, null, { mentions: [{ tag: `@${winner}`, id: winner }] });

      case "status":
        if (!data.active) return message.reply("No tournament running.");
        return message.reply(`Tournament Status:\nPlayers: ${data.players.length}\nRound: ${data.round}`);

      case "end":
        data = { active: false };
        fs.writeFileSync(path, JSON.stringify(data));
        return message.reply("🛑 Tournament ended.");

      default:
        return message.reply("Invalid subcommand. Use `create`, `join`, `start`, `winner`, `status`, `end`.");
    }
  }
};