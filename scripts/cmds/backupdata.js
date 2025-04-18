const fs = require("fs-extra");

module.exports = {
	config: {
		name: "backupdata",
		version: "1.3",
		author: "NTKhang",
		countDown: 5,
		role: 2,
		description: {
			vi: "Sao lưu dữ liệu của bot (threads, users, dashboard, globalData)",
			en: "Backup data of bot (threads, users, dashboard, globalData)"
		},
		category: "owner",
		guide: {
			en: "   {pn}"
		}
	},

	langs: {
		vi: {
			backedUp: "Đã sao lưu dữ liệu của bot vào thư mục scripts/cmds/RANA-BACKUP"
		},
		en: {
			backedUp: "Bot data has been backed up to the scripts/cmds/RANA-BACKUP folder"
		}
	},

	onStart: async function ({ message, getLang, threadsData, usersData, dashBoardData, globalData }) {
		const [globalDataBackup, threadsDataBackup, usersDataBackup, dashBoardDataBackup] = await Promise.all([
			globalData.getAll(),
			threadsData.getAll(),
			usersData.getAll(),
			dashBoardData.getAll()
		]);

		const pathThreads = `${__dirname}/RANA-BACKUP/threadsData.json`;
		const pathUsers = `${__dirname}/RANA-BACKUP/usersData.json`;
		const pathDashBoard = `${__dirname}/RANA-BACKUP/dashBoardData.json`;
		const pathGlobal = `${__dirname}/RANA-BACKUP/globalData.json`;

		fs.writeFileSync(pathThreads, JSON.stringify(threadsDataBackup, null, 2));
		fs.writeFileSync(pathUsers, JSON.stringify(usersDataBackup, null, 2));
		fs.writeFileSync(pathDashBoard, JSON.stringify(dashBoardDataBackup, null, 2));
		fs.writeFileSync(pathGlobal, JSON.stringify(globalDataBackup, null, 2));

		message.reply({
			body: getLang("backedUp"),
			attachment: [
				fs.createReadStream(pathThreads),
				fs.createReadStream(pathUsers),
				fs.createReadStream(pathDashBoard),
				fs.createReadStream(pathGlobal)
			]
		});
	}
};