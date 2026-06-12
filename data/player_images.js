// ===== 2026 世界盃球星照片資料庫 =====
// 來源：TheSportsDB + Wikipedia
const PLAYER_IMAGES = {
  'Achraf Hakimi': 'https://r2.thesportsdb.com/images/media/player/thumb/lwhwh71770216476.jpg',
  'Akram Afif': 'https://r2.thesportsdb.com/images/media/player/thumb/pkfve31707592229.jpg',
  'Almoez Ali': 'https://r2.thesportsdb.com/images/media/player/thumb/gj5c9p1668605507.jpg',
  'Alphonso Davies': 'https://r2.thesportsdb.com/images/media/player/thumb/0p7ekk1660764614.jpg',
  'Andrew Robertson': 'https://r2.thesportsdb.com/images/media/player/thumb/mvmpbc1710165540.jpg',
  'Breel Embolo': 'https://r2.thesportsdb.com/images/media/player/thumb/oy06lq1578119132.jpg',
  'Christian Pulisic': 'https://r2.thesportsdb.com/images/media/player/thumb/40pxda1669799830.jpg',
  'Duckens Nazon': 'https://www.thesportsdb.com/images/media/player/thumb/pbk3oj1779131435.jpg',
  'Edin Džeko': 'https://r2.thesportsdb.com/images/media/player/thumb/sml4xg1710662840.jpg',
  'Gilberto Mora': 'https://upload.wikimedia.org/wikipedia/commons/e/e9/Gilberto_Mora.png',
  'Granit Xhaka': 'https://r2.thesportsdb.com/images/media/player/thumb/xhgqbw1678275167.jpg',
  'Hakim Ziyech': 'https://r2.thesportsdb.com/images/media/player/thumb/josg2h1629290801.jpg',
  'Jean-Ricner Bellegarde': 'https://r2.thesportsdb.com/images/media/player/thumb/4raydv1772032154.jpg',
  'John McGinn': 'https://r2.thesportsdb.com/images/media/player/thumb/msafxs1770201393.jpg',
  'Jonathan David': 'https://r2.thesportsdb.com/images/media/player/thumb/hnv78h1742289489.jpg',
  'Julián Quiñones': 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/Juli%C3%A1n_Qui%C3%B1ones.png/250px-Juli%C3%A1n_Qui%C3%B1ones.png',
  'Kim Min-jae': 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/80/FC_Red_Bull_Salzburg_gegen_Bayern_M%C3%BCnchen_%282025-01-06_Testspiel%29_26.jpg/250px-FC_Red_Bull_Salzburg_gegen_Bayern_M%C3%BCnchen_%282025-01-06_Testspiel%29_26.jpg',
  'Ladislav Krejčí': 'https://r2.thesportsdb.com/images/media/player/thumb/xgnzth1772026135.jpg',
  'Lee Kang-in': 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/13/Lee_Kang-in_-_2022_%2852551771501%29_%28cropped%29.jpg/250px-Lee_Kang-in_-_2022_%2852551771501%29_%28cropped%29.jpg',
  'Manuel Akanji': 'https://r2.thesportsdb.com/images/media/player/thumb/rkw8nb1703327216.jpg',
  'Miralem Pjanić': 'https://r2.thesportsdb.com/images/media/player/thumb/ao24uu1515954560.jpg',
  'Patrik Schick': 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/71/2020-03-10_Fu%C3%9Fball%2C_M%C3%A4nner%2C_UEFA_Champions_League_Achtelfinale%2C_RB_Leipzig_-_Tottenham_Hotspur_1DX_3672_by_Stepro.jpg/250px-2020-03-10_Fu%C3%9Fball%2C_M%C3%A4nner%2C_UEFA_Champions_League_Achtelfinale%2C_RB_Leipzig_-_Tottenham_Hotspur_1DX_3672_by_Stepro.jpg',
  'Raphinha': 'https://r2.thesportsdb.com/images/media/player/thumb/14kuzy1771260047.jpg',
  'Raúl Jiménez': 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/de/Ra%C3%BAl_Jim%C3%A9nez_04032026_%281%29.jpg/250px-Ra%C3%BAl_Jim%C3%A9nez_04032026_%281%29.jpg',
  'Rodrygo': 'https://r2.thesportsdb.com/images/media/player/thumb/81sef31771265827.jpg',
  'Ronwen Williams': 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/89/Ronwen_Williams_AFCON2025Q_35.jpg/250px-Ronwen_Williams_AFCON2025Q_35.jpg',
  'Scott McTominay': 'https://r2.thesportsdb.com/images/media/player/thumb/vjfgf21771246923.jpg',
  'Sofyan Amrabat': 'https://www.thesportsdb.com/images/media/player/thumb/h3p1o91779839033.jpg',
  'Son Heung-min': 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b0/BFA_2023_-2_Heung-Min_Son_%28cropped%29.jpg/250px-BFA_2023_-2_Heung-Min_Son_%28cropped%29.jpg',
  'Sphephelo Sithole': 'https://www.thesportsdb.com/images/media/player/thumb/bmss7o1779926063.jpg',
  'Stephen Eustáquio': 'https://r2.thesportsdb.com/images/media/player/thumb/1ifbip1523975738.jpg',
  'Themba Zwane': 'https://r2.thesportsdb.com/images/media/player/thumb/j9i4hk1706095566.jpg',
  'Tomáš Souček': 'https://r2.thesportsdb.com/images/media/player/thumb/mbulbs1772133886.jpg',
  'Vinícius Júnior': 'https://r2.thesportsdb.com/images/media/player/thumb/lxf1he1771264845.jpg',
  'Weston McKennie': 'https://r2.thesportsdb.com/images/media/player/thumb/k5lx3p1621545726.jpg'
};

// ===== 輪播牆圖片 =====
const HERO_IMAGES = [
  'https://www.dailypress.com/wp-content/uploads/2026/06/AP26162729655983-1.jpg',
  'https://www.dailypress.com/wp-content/uploads/2026/06/AP26162635668484.jpg',
  'https://www.dailypress.com/wp-content/uploads/2026/06/AP26162724799876.jpg',
  'https://www.dailypress.com/wp-content/uploads/2026/06/AP26162779340073.jpg',
  'https://www.dailypress.com/wp-content/uploads/2026/06/AP26162735903816.jpg'
];

const HERO_CAPTIONS = [
  '🇲🇽 墨西哥 vs 🇿🇦 南非 — 2026 世界盃揭幕戰 @ 阿茲特克體育場',
  '🌎 全球球迷齊聚墨西哥城，迎接世界盃開幕',
  '⚽ 墨西哥球迷熱情高漲，慶祝主場開幕戰',
  '🏟️ 阿茲特克體育場 — 史上首座三度舉辦世界盃的球場',
  '🎊 開幕式盛大登場，Shakira 與 Burna Boy 聯袂演出'
];
