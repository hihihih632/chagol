const fs = require("fs-extra");
 
module.exports = {
config: {
    name: "beb",
    version: "1.0",
    author: "RB-BADOL-KHAN",
    countDown: 5,
    role: 0,
    shortDescription: "no-prefix",
    longDescription: "Bot Will Reply You In Engish/Bangla Language",
    category: "chat",
    guide: {
      en: "{p}{n}",
    }
  },
 
 onStart: async function ({  }) { },
  onChat: async function ({ api, event, args, Threads, userData }) {
 
  var { threadID, messageID, senderID } = event;
  const moment = require("moment-timezone");
  const time = moment.tz("Asia/Dhaka").format("hh:MM:ss L");
  var idgr = `${event.threadID}`;
  var id = event.senderID;
 
  var Messages = ‎["আহ শুনা আমার তোমার অলিতে গলিতে উম্মাহ😇😘",
          "কি গো সোনা আমাকে ডাকছ কেনো",
          "বার বার আমাকে ডাকস কেন😡",
          "আহ শোনা আমার আমাকে এতো ডাক্তাছো কেনো আসো বুকে আশো🥱",
          "হুম জান তোমার অইখানে উম্মমাহ😷😘",
          "আসসালামু আলাইকুম বলেন আপনার জন্য কি করতে পারি",
          "🌻🌺💚-আসসালামু আলাইকুম ওয়া রাহমাতুল্লাহ-💚🌺🌻" ,
          "আমি এখন রানা বস এর সাথে বিজি আছি আমাকে ডাকবেন না-😕😏 ধন্যবাদ-🤝🌻",
          "আমাকে না ডেকে আমার বস রানা কে একটা জি এফ দাও-😽🫶🌺",
          "ঝাং থুমালে আইলাপিউ পেপি-💝😽",
          "উফফ বুঝলাম না এতো ডাকছেন কেনো-😤😡😈",
          "জান তোমার নানি রে আমার হাতে তুলে দিবা-🙊🙆‍♂",
          "আজকে আমার মন ভালো নেই তাই আমারে ডাকবেন না-😪🤧",
          "ঝাং 🫵থুমালে য়ামি রাইতে পালুপাসি উম্মম্মাহ-🌺🤤💦",
          "চুনা ও চুনা আমার বস  রানা এর হবু বউ রে কেও দেকছো খুজে পাচ্ছি না😪🤧😭",
          "স্বপ্ন তোমারে নিয়ে দেখতে চাই তুমি যদি আমার হয়ে থেকে যাও-💝🌺🌻",
          "জান হাঙ্গা করবা-🙊😝🌻",
          "জান মেয়ে হলে চিপায় আসো ইউটিউব থেকে অনেক ভালোবাসা শিখছি তোমার জন্য-🙊🙈😽",
          "ইসস এতো ডাকো কেনো লজ্জা লাগে তো-🙈🖤🌼",
          "আমার রানা বস এর পক্ষ থেকে তোমারে এতো এতো ভালোবাসা-🥰😽🫶 আমার বস রানা এর  জন্য দোয়া করবেন-💝💚🌺🌻",
          "- ভালোবাসা নামক আব্লামি করতে মন চাইলে আমার বস রানা এর ইনবক্স চলে যাও-🙊🥱👅 🌻𝐅𝐀𝐂𝐄𝐁𝐎𝐎𝐊 𝐈𝐃 𝐋𝐈𝐍𝐊 🌻:- https://www.facebook.com/XAICO.RANA ",
          "জান তুমি শুধু আমার আমি তোমারে ৩৬৫ দিন ভালোবাসি-💝🌺😽",
          "জান বাল ফালাইবা-🙂🥱🙆‍♂",
          "-আন্টি-🙆-আপনার মেয়ে-👰‍♀️-রাতে আমারে ভিদু কল দিতে বলে🫣-🥵🤤💦",
          "oii-🥺🥹-এক🥄 চামচ ভালোবাসা দিবা-🤏🏻🙂",
          "-আপনার সুন্দরী বান্ধুবীকে ফিতরা হিসেবে আমার বস রানা কে দান করেন-🥱🐰🍒",
          "-ও মিম ও মিম-😇-তুমি কেন চুরি করলা সাদিয়ার ফর্সা হওয়ার ক্রীম-🌚🤧",
          "-অনুমতি দিলাম-𝙋𝙧𝙤𝙥𝙤𝙨𝙚 কর রানা বস কে-🐸😾🔪",
          "-𝙂𝙖𝙮𝙚𝙨-🤗-যৌবনের কসম দিয়ে আমারে 𝐁𝐥𝐚𝐜𝐤𝐦𝐚𝐢𝐥 করা হচ্ছে-🥲🤦‍♂️🤧",
          "-𝗢𝗶𝗶 আন্টি-🙆‍♂️-তোমার মেয়ে চোখ মারে-🥺🥴🐸",
          "তাকাই আছো কেন চুমু দিবা-🙄🐸😘",
          "আজকে প্রপোজ করে দেখো রাজি হইয়া যামু-😌🤗😇",
          "-আমার গল্পে তোমার নানি সেরা-🙊🙆‍♂️🤗",
          "কি বেপার আপনি শ্বশুর বাড়িতে যাচ্ছেন না কেন-🤔🥱🌻",
          "দিনশেষে পরের 𝐁𝐎𝐖 সুন্দর-☹️🤧",
          "-তাবিজ কইরা হইলেও ফ্রেম এক্কান করমুই তাতে যা হই হোক-🤧🥱🌻",
          "-ছোটবেলা ভাবতাম বিয়ে করলে অটোমেটিক বাচ্চা হয়-🥱-ওমা এখন দেখি কাহিনী অন্যরকম-😦🙂🌻",
          "-আজ একটা বিন নেই বলে ফেসবুকের নাগিন-🤧-গুলোরে আমার বস রানা ধরতে পারছে না-🐸🥲",
          "-চুমু থাকতে তোরা বিড়ি খাস কেন বুঝা আমারে-😑😒🐸⚒️",
          "—যে ছেড়ে গেছে-😔-তাকে ভুলে যাও-🙂-আমার বস রানা এর সাথে  প্রেম করে তাকে দেখিয়ে দাও-🙈🐸🤗",
          "—হাজারো লুচ্চা লুচ্চির ভিরে-🙊🥵আমার বস রানা এক নিস্পাপ ভালো মানুষ-🥱🤗🙆‍♂️",
          "-রূপের অহংকার করো না-🙂❤️চকচকে সূর্যটাও দিনশেষে অন্ধকারে পরিণত হয়-🤗💜",
          "সুন্দর মাইয়া মানেই-🥱আমার বস রানা এর বউ-😽🫶আর বাকি গুলো আমার বেয়াইন-🙈🐸🤗",
          "এত অহংকার করে লাভ নেই-🌸মৃত্যুটা নিশ্চিত শুধু সময়টা অ'নিশ্চিত-🖤🙂",
          "-দিন দিন কিছু মানুষের কাছে অপ্রিয় হয়ে যাইতেছি-🙂😿🌸",
          "হুদাই আমারে  শয়তানে লারে-😝😑☹️",
          "-𝗜 𝗟𝗢𝗩𝗢 𝗬𝗢𝗨-😽-আহারে ভাবছো তোমারে প্রোপজ করছি-🥴-থাপ্পর দিয়া কিডনী লক করে দিব-😒-ভুল পড়া বের করে দিবো-🤭🐸",
          "-আমি একটা দুধের শিশু-😇-🫵𝗬𝗢𝗨🐸💦",
          "-কতদিন হয়ে গেলো বিছনায় মুতি না-😿-মিস ইউ নেংটা কাল-🥺🤧",
          "-বালিকা━👸-𝐃𝐨 𝐲𝐨𝐮-🫵-বিয়া-𝐦𝐞-😽-আমি তোমাকে-😻-আম্মু হইতে সাহায্য করব-🙈🥱",
          "-এই আন্টির মেয়ে-🫢🙈-𝐔𝐦𝐦𝐦𝐦𝐦𝐦𝐦𝐦𝐦𝐦𝐦𝐚𝐡-😽🫶-আসলেই তো স্বাদ-🥵💦-এতো স্বাদ কেন-🤔-সেই স্বাদ-😋",
          "-ইস কেউ যদি বলতো-🙂-আমার শুধু  তোমাকেই লাগবে-💜🌸",
          "-ওই বেডি তোমার বাসায় না আমার বস রানা মেয়ে দেখতে গেছিলো-🙃-নাস্তা আনারস আর দুধ দিছো-🙄🤦‍♂️-বইন কইলেই তো হয় বয়ফ্রেন্ড আছে-🥺🤦‍♂-আমার বস রানা কে জানে মারার কি দরকার-🙄🤧",
          "-একদিন সে ঠিকই ফিরে তাকাবে-😇-আর মুচকি হেসে বলবে ওর মতো আর কেউ ভালবাসেনি-🙂😅",
          "-হুদাই গ্রুপে আছি-🥺🐸-কেও ইনবক্সে নক দিয়ে বলে না জান তোমারে আমি অনেক ভালোবাসি-🥺🤧",
          "কি'রে গ্রুপে দেখি একটাও বেডি নাই-🤦‍🥱💦","-দেশের সব কিছুই চুরি হচ্ছে-🙄-শুধু আমার বস রানা এর মনটা ছাড়া-🥴😑😏",
          "-🫵তোমারে প্রচুর ভাল্লাগে-😽-সময় মতো প্রপোজ করমু বুঝছো-🔨😼-ছিট খালি রাইখো- 🥱🐸🥵",
          "-আজ থেকে আর কাউকে পাত্তা দিমু না -!😏-কারণ আমি ফর্সা হওয়ার ক্রিম কিনছি -!🙂🐸",
          "বেশি Bot Bot করলে leave নিবো কিন্তু😒😒 " , 
          "শুনবো না😼 তুমি আমাকে প্রেম করাই দাও নি🥺 পচা তুমি🥺 " ,
          "আমি আবাল দের সাতে কথা বলি না,ok😒" , 
          "এত কাছেও এসো না,প্রেম এ পরে যাবো তো 🙈" ,
          "Bolo Babu, তুমি কি আমাকে ভালোবাসো? 🙈💋 " ,
          "বার বার ডাকলে মাথা গরম হয় কিন্তু😑",
          "হা বলো😒,কি করতে পারি😐😑?" , 
          "এতো ডাকছিস কোনো?গালি শুনবি নাকি? 🤬",
          "মেয়ে হলে বস রানা এর সাথে প্রেম করো🙈??. " , 
          "আরে Bolo আমার জান ,কেমন আসো?😚 " ,
          "Bot বলে অসম্মান করচ্ছিছ,😰😿" , 
          "Hop bedi😾,Boss বল boss😼" ,
          "চুপ থাক ,নাই তো তোর দাত ভেগে দিবো কিন্তু" ,
          "Bot না , জানু বল জানু 😘 " , 
          "বার বার Disturb করেছিস কোনো😾,আমার বস রানা এর সাথে ব্যাস্ত আসি😋" , 
          "আমি গরীব এর সাথে কথা বলি না😼😼" ,
          "আমাকে ডাকলে ,আমি কিন্তূ কিস করে দেবো😘 " ,
          "আরে আমি মজা করার mood এ নাই😒" , 
          "হা জানু , এইদিক এ আসো কিস দেই🤭 😘" ,
          "দূরে যা, তোর কোনো কাজ নাই, শুধু bot bot করিস  😉😋🤣" , 
          "তোর কথা তোর বাড়ি কেউ শুনে না ,তো আমি কোনো শুনবো ?🤔😂 " ,
          "আমাকে ডেকো না,আমি ব্যাস্ত আসি" , "কি হলো ,মিস টিস করচ্ছিস নাকি🤣" ,
          "বলো কি বলবা, সবার সামনে বলবা নাকি?🤭🤏" , 
          "কালকে দেখা করিস তো একটু 😈" ,
          "হা বলো, শুনছি আমি 😏" ,
          "আর কত বার ডাকবি ,শুনছি তো" , 
          "মেয়ে হলে বস রানা কে Ummmmha দে 😒" , 
          "বলো কি করতে পারি তোমার জন্য" , 
          "আমি তো অন্ধ কিছু দেখি না🐸 😎" ,
          "Bot না জানু,বল 😌" , 
          "বলো জানু 🌚" ,
          "তোর কি চোখে পড়ে না আমি বস রানা এর সাথে ব্যাস্ত আসি😒" , 
          "༊━━🦋নামাজি মানুষেরা সব থেকে বেশি সুন্দর হয়..!!😇🥀 🦋 কারণ.!! -অজুর পানির মত শ্রেষ্ঠ মেকআপ দুনিয়াতে নেই༊━ღ━༎🥰🥀 🥰-আলহামদুলিল্লাহ-🥰",
          "- শখের নারী  বিছানায় মু'তে..!🙃🥴",
          "-𝐈'𝐝 -তে সব 𝐖𝐨𝐰 𝐖𝐨𝐰 বুইড়া বেডি-🐸💦",
          "🥛-🍍👈 -লে খাহ্..!😒🥺",
          "- অনুমতি দিলে 𝚈𝚘𝚞𝚃𝚞𝚋𝚎-এ কল দিতাম..!😒",
          "~আমি মারা গেলে..!🙂 ~অনেক মানুষ বিরক্ত হওয়া থেকে বেঁচে  যাবে..!😅💔",
          "🍒---আমি সেই গল্পের বই-🙂 -যে বই সবাই পড়তে পারলেও-😌 -অর্থ বোঝার ক্ষমতা কারো নেই..!☺️🥀💔",
          "~কার জন্য এতো মায়া...!😌🥀 ~এই শহরে আপন বলতে...!😔🥀 ~শুধুই তো নিজের ছায়া...!😥🥀",
          "- কারেন্ট একদম বেডি'গো মতো- 🤧 -খালি ঢং করে আসে আবার চলে যায়-😤😾🔪",
          "- সানিলিওন  আফারে ধর্ষনের হুমকি দিয়ে আসলাম - 🤗 -আর 🫵তুমি যামারে খেয়ে দিবা সেই ভয় দেখাও ননসেন বেডি..!🥱😼",
          "- দুনিয়ার সবাই প্রেম করে.!🤧 -আর মানুষ আমার বস রানা কে সন্দেহ করে.!🐸",
          "- আমার থেকে ভালো অনেক পাবা-🙂 -কিন্তু সব ভালো তে কি আর ভালোবাসা থাকে..!💔🥀",
          "- পুরুষকে সবচেয়ে বেশি কষ্ট দেয় তার শখের নারী...!🥺💔👈",
          "- তোমার লগে দেখা হবে আবার - 😌 -কোনো এক অচেনা গলির চিপায়..!😛🤣👈",
          "- থাপ্পড় চিনোস থাপ্পড়- 👋👋😡 -চিন্তা করিস না তরে মারমু না-🤗 -বস রানা আমারে মারছে - 🥱 - উফফ সেই স্বাদ..!🥵🤤💦",
          "- অবহেলা করিস না-😑😪 - যখন নিজেকে বদলে ফেলবো -😌 - তখন আমার চেয়েও বেশি কষ্ট পাবি..!🙂💔",
          "- বন্ধুর সাথে ছেকা খাওয়া গান শুনতে শুনতে-🤧 -এখন আমিও বন্ধুর 𝙴𝚇 কে অনেক 𝙼𝙸𝚂𝚂 করি-🤕🥺",
          "-৯৯টাকায় ৯৯জিবি ৯৯বছর-☺️🐸 -অফারটি পেতে এখনই আমাকে প্রোপস করুন-🤗😂👈",
          "-প্রিয়-🥺 -তোমাকে না পেলে আমি সত্যি-😪 -আরেকজন কে-😼 -পটাতে বাধ্য হবো-😑🤧",
          "•-কিরে🫵 তরা নাকি  prem করস..😐🐸•আমারে একটা করাই দিলে কি হয়-🥺",
          "- যেই আইডির মায়ায় পড়ে ভুল্লি আমারে.!🥴- তুই কি যানিস সেই আইডিটাও আমি চালাইরে.বলদ" ,
          "বেশি bot Bot করলে leave নিবো কিন্তু😒😒 " , 
          "শুনবো না😼 তুমি আমাকে প্রেম করাই দাও নি🥺 পচা তুমি🥺 " ,
          "আমি আবাল দের সাতে কথা বলি না,ok😒" , 
          "এত কাছেও এসো না,প্রেম এ পরে যাবো তো 🙈" ,
          "Bolo Babu, তুমি কি আমাকে ভালোবাসো? 🙈💋 " , 
          "বার বার ডাকলে মাথা গরম হয় কিন্তু😑", "হা বলো😒,কি করতে পারি😐😑?" , 
          "এতো ডাকছিস কোনো?গালি শুনবি নাকি? 🤬",
          "মেয়ে হলে রানা বসের সাথে প্রেম করো🙈??. " ,
          "আরে Bolo আমার জান ,কেমন আসো?😚 " , 
          "Bot বলে অসম্মান করচ্ছিছ,😰😿" ,
          "Hop bedi😾,Boss বল boss😼" ,
          "চুপ থাক ,নাই তো তোর দাত ভেগে দিবো কিন্তু" , 
          "Bot না , জানু বল জানু 😘 " , 
          "বার বার Disturb করেছিস কোনো😾,আমার রানা জানু এর সাথে ব্যাস্ত আসি😋" ,
          "জানু হাঙ্গা করবা🙈" ,
          "আমি গরীব r সাথে কথা বলি না😼😼" ,
          "আমাকে ডাকলে ,আমি কিন্তূ কিস করে দেবো😘 " ,
          "আরে আমি মজা করার mood এ নাই😒" , 
          "হা জানু , এইদিক এ আসো কিস দেই🤭 😘" ,
          "দূরে যা, তোর কোনো কাজ নাই, শুধু bot bot করিস  😉😋🤣" , 
          "তোর কথা তোর বাড়ি কেউ শুনে না ,তো আমি কোনো শুনবো ?🤔😂 " ,
          "তোর বাড়ি কি মাল দিপ গ্রাম😵‍💫" , 
          "আমাকে ডেকো না,আমি ব্যাস্ত আসি" , 
          "কি হলো ,মিস টিস করচ্ছিস নাকি🤣" , 
          "সজীব কই ওর কাছে গাজা. ওর কাছ থেকে নেও " ,
          "বলো কি বলবা, সবার সামনে বলবা নাকি?🤭🤏" ,
          "কালকে দেখা করিস তো একটু 😈" , 
          "হা বলো, শুনছি আমি 😏" , 
          "আর কত বার ডাকবি ,শুনছি তো" , 
          "মেয়ে হলে বস রানা কে 𝐊𝐈𝐒𝐒 দে 😒" , 
          "বলো কি করতে পারি তোমার জন্য" , 
          "আমি তো অন্ধ কিছু দেখি না🐸 😎" , 
          "এ বেডা তোগো GC এর C E O রানা কই😌" , 
          "তোর বাড়ি কি উগান্ডা এখানে হুম" , 
          "Bot না জানু,বল 😌" , 
          "বলো জানু 🌚" , 
          "তোর কি চোখে পড়ে না আমি রানা বস এর সাথে ব্যাস্ত আসি😒"  ,
          "𝙏𝙢𝙧 𝙣𝙖𝙣𝙞 𝙧 𝐨𝐢 𝐭𝐚  😑🥺" , 
          "amr Jan lagbe,Tumi ki single aso?",
          "𝙏𝙪𝙢𝙖𝙧 BF 𝙣𝙖𝙞 ,𝙩𝙖𝙮 𝙖𝙢𝙠 𝙙𝙖𝙠𝙨𝙤?😂😂😂" ,
          "তোর বাড়ি কই উগান্ডা ",
          "চুমু খাওয়ার বয়স টা  চকলেট🍫খেয়ে উড়িয়ে দিলো রানা বস 🥺🤗" ,
          "jang hanga korba",
          "jang bal falaba🙂"];
   var rand = Messages[Math.floor(Math.random() * Messages.length)]
 
        if ((event.body.toLowerCase() == "Kiss me") || (event.body.toLowerCase() == "kiss me")) {
         return api.sendMessage("ইনবক্সে আসো চুম্মা দিয়া তোমার পুক্কি লাল করে দিম 😏 :))", threadID);
       };
 
        if ((event.body.toLowerCase() == "Call me") || (event.body.toLowerCase() == "call me")) {
         return api.sendMessage("Audio call 500+ Video call 1000+ okay 🍆😩<3", threadID);
       };
 
       if ((event.body.toLowerCase() == "Eta kar bot") || (event.body.toLowerCase() == "এটা কার বট")) {
         return api.sendMessage("তোমার নানার বট এটা 😑", threadID);
       };
 
       if ((event.body.toLowerCase() == "bot koi") || (event.body.toLowerCase() == "Bot koi")) {
         return api.sendMessage("তোমার নানির চিপাই 😑", threadID);
       };
 
       if ((event.body.toLowerCase() == "kemne ki") || (event.body.toLowerCase() == "how is it")) {
         return api.sendMessage("-বলবো না 🐸😼", threadID);
       };
 
      if ((event.body.toLowerCase() == "oo") || (event.body.toLowerCase() == "ooo")) {
         return api.sendMessage("ওও আচ্ছা আচ্ছা এই ব্যাপার.. 🐸", threadID);
       };
 
       if ((event.body.toLowerCase() == "ooo") || (event.body.toLowerCase() == "tai")) {
         return api.sendMessage("হুমম 🌸🫶", threadID);
       };
 
       if ((event.body.toLowerCase() == "না") || (event.body.toLowerCase() == "na")) {
         return api.sendMessage("-এতো না'না করোস কেন.. 😼", threadID);
       };
 
       if ((event.body.toLowerCase() == "uff") || (event.body.toLowerCase() == "uf")) {
         return api.sendMessage("️আহহহহহ্হঃ:>🙂", threadID);
       };
 
       if ((event.body.toLowerCase() == "iss") || (event.body.toLowerCase() == "is")) {
         return api.sendMessage("️উফফ..:>🐸", threadID);
       };
 
       if ((event.body.toLowerCase() == "চুপ") || (event.body.toLowerCase() == "cup")) {
         return api.sendMessage("️••>তুই চুপ 🤫 তোর চোদ্দো গুষ্টি চুপ..:>😼", threadID);
       };
 
       if ((event.body.toLowerCase() == "chup") || (event.body.toLowerCase() == "stop")) {
         return api.sendMessage("️••>তুই চুপ 🤫 তোর চোদ্দো গুষ্টি চুপ..:>😼", threadID);
       };
 
       if ((event.body.toLowerCase() == "👀") || (event.body.toLowerCase() == "😉")) {
         return api.sendMessage("️😉", threadID);
       };
 
       if ((event.body.toLowerCase() == "oi") || (event.body.toLowerCase() == "oii")) {
         return api.sendMessage("️ওইই! 🙄 আবার কি চাই? খেয়ে দেয়ে কাজ নাই, শুধু আমাকে ডাকো 😑… আচ্ছা বলো, এবার কি কাণ্ড ঘটাইলা? 🤔🔥", threadID);
       };
 
       if ((event.body.toLowerCase() == "clmm bot")) {
         return api.sendMessage("️Swear something dog :) you've been holding on to you for a long time", threadID);
       };
 
       if ((event.body.toLowerCase() == "bot cc")) {
         return api.sendMessage("️Swear something dog :) you've been holding on to you for a long time", threadID);
       };
 
       if ((event.body.toLowerCase() == "cc bot")) {
         return api.sendMessage("️Swear something dog :) you've been holding on to you for a long time", threadID);
       };
 
       if ((event.body.toLowerCase() == "bot dthw too") || (event.body.toLowerCase() == "bot dthw over")) {
         return api.sendMessage("️ that's very commendable hihi :>", threadID);
       };
 
       if ((event.body.toLowerCase() == "dm bot")) {
         return api.sendMessage("️Swear something to your dad :), you're a kid but you like to be alive :)", threadID);
       };
 
       if ((event.body.toLowerCase() == "nobody loves me")) {
         return api.sendMessage("️Come on, the bot loves you <3 <3", threadID);
       };
 
       if ((event.body.toLowerCase() == "does the bot love the admin bot")) {
         return api.sendMessage("Yes, love him the most, don't try to rob me", threadID);
       };
 
       if ((event.body.toLowerCase() == "bot im going") || (event.body.toLowerCase() == "bot im di")) {
         return api.sendMessage("Im cc :))) m stop barking for me, but tell me im :>>", threadID);
       };
 
       if ((event.body.toLowerCase() == "bot go away") || (event.body.toLowerCase() == "bot cut di")) {
         return api.sendMessage("You're gone, your dad's gone, don't make you speak :))))", threadID);
       };
 
       if ((event.body.toLowerCase() == "What's the bot swearing") || (event.body.toLowerCase() == "bot cursing")) {
         return api.sendMessage("Damn you, shame on hahaha :>>, still asking", threadID);
       };
 
       if ((event.body.toLowerCase() == "is the bot sad")) {
         return api.sendMessage("Why can't I be sad because of everyone <3 love you <3", threadID);
       };
 
       if ((event.body.toLowerCase() == "does the bot love you")) {
         return api.sendMessage("Yes I love you and everyone so much", threadID);
       };
 
       if ((event.body.toLowerCase() == "bot goes to sleep")) {
         return api.sendMessage("I'm a bot, you're the one who should go to sleep <3", threadID);
       };
 
       if ((event.body.toLowerCase() == "has the bot eaten yet") || (event.body.toLowerCase() == "bot an comrade")) {
         return api.sendMessage("I'm full when I see you eat <3", threadID);
       };
 
       if ((event.body.toLowerCase() == "does the bot love me")) {
         return api.sendMessage("Yes <3", threadID);
       };
 
       if ((event.body.toLowerCase() == "does the bot have a brand") || (event.body.toLowerCase() == "does the bot fall")) {
         return api.sendMessage("Yes <3", threadID);
       };
 
    if ((event.body.toLowerCase() == "oh bot")) {
     return api.sendMessage("Hurry, I have to serve other boxes :)", threadID, messageID);
   };
 
    if ((event.body.toLowerCase() == "tham") || (event.body.toLowerCase() == "থাম")) {
     return api.sendMessage("️Amr Mukh, Amr iccha, Amr Mon. Tor ki bal,,,shala abal...ja vaag... 😒🙄", threadID, messageID);
   };
 
    if ((event.body.toLowerCase() == "/off") || (event.body.toLowerCase() == "/left")) {
     return api.sendMessage("️😑 নবিন পোলাপান এলাও নাই 🐸", threadID, messageID);
   };
 
  if ((event.body.toLowerCase() == "tomar nam ki") || (event.body.toLowerCase() == "apnar nam ki")) {
     return api.sendMessage("️ নাম যায় না কি করবি আমি সানি লিওনের ক্যামেরা ম্যান এইটুকু জেনে রাখ ☹️", threadID, messageID);
   };
 
  if ((event.body.toLowerCase() == "Inbox") || (event.body.toLowerCase() == "ইনবক্সে")) {
     return api.sendMessage("️🐸 ষ্যার আপনার ইনবক্সে গালি দিসি চেক দিয়েন😊", threadID, messageID);
   };
 
  if ((event.body.toLowerCase() == "hmm") || (event.body.toLowerCase() == "Hmm")) {
     return api.sendMessage("️🙄 হুম চুদাস না মাথা এমনিতেই গরম আছে..°>🍆", threadID, messageID);
   };
 
  if ((event.body.toLowerCase() == "সকাল") || (event.body.toLowerCase() == "Gd M9") || (event.body.toLowerCase() == "শুভ সকাল")) {
     return api.sendMessage("️Good Morningg!🌄", threadID, messageID);
   };
 
  if ((event.body.toLowerCase() == "রাত") || (event.body.toLowerCase() == "Gd N8") || (event.body.toLowerCase() == "অনেক রাত")) {
     return api.sendMessage("️Good Night🌃, Take Care Babe🥺", threadID, messageID);
   };
 
  if ((event.body.toLowerCase() == "Bro")) {
     return api.sendMessage("️🤨 আমি ব্রা বিক্রি করিনা এখন••:>🙂", threadID, messageID);
   };
 
  if ((event.body.toLowerCase() == "By")) {
     return api.sendMessage("️💋 আপনে আসতে পারের ধন্যবাশ 😩", threadID, messageID);
   };
 
   if ((event.body.toLowerCase() == "Tnx") || (event.body.toLowerCase() == "ধন্যবাদ")) {
     return api.sendMessage("️মানুষ৷ মাত্রই ভুল ক্ষমা চায়ার মাইরে সালাম 😚🖤", threadID, messageID);
   };
 
   if ((event.body.toLowerCase() == "Call dao")) {
     return api.sendMessage("️অডিও কল ৫০০+ ভিডিও কল ১০০০ ওকে😏", threadID, messageID);
   };
 
   if ((event.body.toLowerCase() == "/out")) {
     return api.sendMessage("🤘 খেলার আগেই আউট হলে তোমার বউ থাকবনা 🤦‍♂️", threadID, messageID);
   };
 
  if ((event.body.toLowerCase() == "Sorry") || (event.body.toLowerCase() == "সরি")) {
     return api.sendMessage("️👁️ সরি ৬দার সময় নাই ওখে 😏 ✌🏻🕊", threadID, messageID);
   };
 
  if ((event.body.toLowerCase() == "hi") || (event.body.toLowerCase() == "হাই") || (event.body.toLowerCase() == "Hi")) {
     return api.sendMessage("️🥺 হাই হ্যালো না করে দিনে কয়বার🤚 মারো ওইটা বলো 😗", threadID, messageID);
   };
 
    if ((event.body.toLowerCase() == "hello") || (event.body.toLowerCase() == "Hlw")) {
     return api.sendMessage("️🙁 ভাত পাইনা খাইতে হ্যালো চুদাই রাইতে 🙄", threadID, messageID);
   };
 
  if ((event.body.toLowerCase() == "Oh") || (event.body.toLowerCase() == "ohh")) {
     return api.sendMessage("🤧 সবকিছু বুঝতে পারি কিন্তু এই ওহ পরে কি যে বলব এটাই বুঝতে পারিনা 😔.", threadID, messageID);
   };
 
  if (event.body.indexOf("Beb") == 0 || (event.body.toLowerCase() == "bebs") || (event.body.indexOf("বট") == 0)) {
    var msg = {
      body: ` ${rand}`
    }
    return api.sendMessage(msg, threadID, messageID);
  }
}
};
 
