// 2026 世界盃足球賽完整資料
// 可由每日 cron job 更新

const WC_DATA = {
  tournament: {
    name: '2026 FIFA World Cup',
    nameZh: '2026 年國際足協世界盃',
    hosts: ['美國', '加拿大', '墨西哥'],
    startDate: '2026-06-11',
    endDate: '2026-07-19',
    teamsCount: 48,
    matchesCount: 104,
    currentPhase: '32強賽 (Round of 32) — 全部16場完成！16強賽即將開打（7月4日：🇨🇦加拿大vs🇲🇦摩洛哥·休斯敦、🇵🇾巴拉圭vs🇫🇷法國·費城；7月5日：🇧🇷巴西vs🇳🇴挪威·休斯敦、🇲🇽墨西哥vs🇬🇧英格蘭·墨西哥城；7月6日：🇺🇸美國vs🇧🇪比利時·西雅圖、🇵🇹葡萄牙vs🇪🇸西班牙·達拉斯；7月7日：🇪🇬埃及vs🇦🇷阿根廷·亞特蘭大；7月8日：🇨🇭瑞士vs🇨🇴哥倫比亞·溫哥華） · 🇪🇬埃及PK 4-2淘汰🇦🇺澳大利亞（Ashour進球、Salah罰進Panenka，埃及史上首次世界盃淘汰賽勝利！）。今日（7/3）續賽：🇦🇷阿根廷vs🇨🇻維德角（22:00 ET）、🇨🇴哥倫比亞vs🇬🇭迦納（01:30 UTC 7/4）。16強對陣：🇫🇷法國vs🇵🇾巴拉圭（7/4費城）、🇨🇦加拿大vs🇲🇦摩洛哥（7/4休斯敦）、🇧🇷巴西vs🇳🇴挪威（7/5休斯敦）、🇲🇽墨西哥vs🇬🇧英格蘭（7/5墨西哥城）、🇺🇸美國vs🇧🇪比利時（7/6西雅圖）、🇵🇹葡萄牙vs🇪🇸西班牙（7/6達拉斯）、🇨🇭瑞士vsTBD（7/8溫哥華）、🇪🇬埃及vsTBD（7/7亞特蘭大）！',
  },

  // 國家旗幟對應 (Unicode 國旗 emoji)
  flags: {
    'Mexico': '🇲🇽', 'South Korea': '🇰🇷', 'South Africa': '🇿🇦', 'Czechia': '🇨🇿',
    'Canada': '🇨🇦', 'Switzerland': '🇨🇭', 'Qatar': '🇶🇦', 'Bosnia and Herzegovina': '🇧🇦',
    'Brazil': '🇧🇷', 'Morocco': '🇲🇦', 'Scotland': '🏴󠁧󠁢󠁳󠁣󠁴󠁿', 'Haiti': '🇭🇹',
    'USA': '🇺🇸', 'Paraguay': '🇵🇾', 'Australia': '🇦🇺', 'Turkey': '🇹🇷',
    'Germany': '🇩🇪', 'Ecuador': '🇪🇨', 'Ivory Coast': '🇨🇮', 'Curaçao': '🇨🇼',
    'Netherlands': '🇳🇱', 'Japan': '🇯🇵', 'Sweden': '🇸🇪', 'Tunisia': '🇹🇳',
    'Belgium': '🇧🇪', 'Iran': '🇮🇷', 'Egypt': '🇪🇬', 'New Zealand': '🇳🇿',
    'Spain': '🇪🇸', 'Uruguay': '🇺🇾', 'Saudi Arabia': '🇸🇦', 'Cape Verde': '🇨🇻',
    'France': '🇫🇷', 'Senegal': '🇸🇳', 'Norway': '🇳🇴', 'Iraq': '🇮🇶',
    'Argentina': '🇦🇷', 'Austria': '🇦🇹', 'Algeria': '🇩🇿', 'Jordan': '🇯🇴',
    'Portugal': '🇵🇹', 'Colombia': '🇨🇴', 'Uzbekistan': '🇺🇿', 'DR Congo': '🇨🇩',
    'England': '🇬🇧', 'Croatia': '🇭🇷', 'Ghana': '🇬🇭', 'Panama': '🇵🇦'
  },

  // 所有分組
  groups: [
    {
      id: 'A', name: 'A 組',
      teams: [
        { name: 'Mexico', nameZh: '墨西哥', rank: 16 },
        { name: 'South Korea', nameZh: '南韓', rank: 22 },
        { name: 'South Africa', nameZh: '南非', rank: 60 },
        { name: 'Czechia', nameZh: '捷克', rank: 43 }
      ]
    },
    {
      id: 'B', name: 'B 組',
      teams: [
        { name: 'Canada', nameZh: '加拿大', rank: 29 },
        { name: 'Switzerland', nameZh: '瑞士', rank: 18 },
        { name: 'Qatar', nameZh: '卡達', rank: 56 },
        { name: 'Bosnia and Herzegovina', nameZh: '波士尼亞與赫塞哥維納', rank: 71 }
      ]
    },
    {
      id: 'C', name: 'C 組',
      teams: [
        { name: 'Brazil', nameZh: '巴西', rank: 5 },
        { name: 'Morocco', nameZh: '摩洛哥', rank: 8 },
        { name: 'Scotland', nameZh: '蘇格蘭', rank: 38 },
        { name: 'Haiti', nameZh: '海地', rank: 83 }
      ]
    },
    {
      id: 'D', name: 'D 組',
      teams: [
        { name: 'USA', nameZh: '美國', rank: 15 },
        { name: 'Paraguay', nameZh: '巴拉圭', rank: 40 },
        { name: 'Australia', nameZh: '澳大利亞', rank: 27 },
        { name: 'Turkey', nameZh: '土耳其', rank: 25 }
      ]
    },
    {
      id: 'E', name: 'E 組',
      teams: [
        { name: 'Germany', nameZh: '德國', rank: 10 },
        { name: 'Ecuador', nameZh: '厄瓜多', rank: 35 },
        { name: 'Ivory Coast', nameZh: '象牙海岸', rank: 42 },
        { name: 'Curaçao', nameZh: '庫拉索', rank: 80 }
      ]
    },
    {
      id: 'F', name: 'F 組',
      teams: [
        { name: 'Netherlands', nameZh: '荷蘭', rank: 7 },
        { name: 'Japan', nameZh: '日本', rank: 19 },
        { name: 'Sweden', nameZh: '瑞典', rank: 28 },
        { name: 'Tunisia', nameZh: '突尼西亞', rank: 45 }
      ]
    },
    {
      id: 'G', name: 'G 組',
      teams: [
        { name: 'Belgium', nameZh: '比利時', rank: 6 },
        { name: 'Iran', nameZh: '伊朗', rank: 30 },
        { name: 'Egypt', nameZh: '埃及', rank: 34 },
        { name: 'New Zealand', nameZh: '紐西蘭', rank: 89 }
      ]
    },
    {
      id: 'H', name: 'H 組',
      teams: [
        { name: 'Spain', nameZh: '西班牙', rank: 3 },
        { name: 'Uruguay', nameZh: '烏拉圭', rank: 12 },
        { name: 'Saudi Arabia', nameZh: '沙烏地阿拉伯', rank: 55 },
        { name: 'Cape Verde', nameZh: '維德角', rank: 72 }
      ]
    },
    {
      id: 'I', name: 'I 組',
      teams: [
        { name: 'France', nameZh: '法國', rank: 2 },
        { name: 'Senegal', nameZh: '塞內加爾', rank: 21 },
        { name: 'Norway', nameZh: '挪威', rank: 36 },
        { name: 'Iraq', nameZh: '伊拉克', rank: 62 }
      ]
    },
    {
      id: 'J', name: 'J 組',
      teams: [
        { name: 'Argentina', nameZh: '阿根廷', rank: 1 },
        { name: 'Austria', nameZh: '奧地利', rank: 24 },
        { name: 'Algeria', nameZh: '阿爾及利亞', rank: 33 },
        { name: 'Jordan', nameZh: '約旦', rank: 64 }
      ]
    },
    {
      id: 'K', name: 'K 組',
      teams: [
        { name: 'Portugal', nameZh: '葡萄牙', rank: 4 },
        { name: 'Colombia', nameZh: '哥倫比亞', rank: 14 },
        { name: 'Uzbekistan', nameZh: '烏茲別克', rank: 58 },
        { name: 'DR Congo', nameZh: '剛果民主共和國', rank: 61 }
      ]
    },
    {
      id: 'L', name: 'L 組',
      teams: [
        { name: 'England', nameZh: '英格蘭', rank: 11 },
        { name: 'Croatia', nameZh: '克羅埃西亞', rank: 13 },
        { name: 'Ghana', nameZh: '迦納', rank: 49 },
        { name: 'Panama', nameZh: '巴拿馬', rank: 44 }
      ]
    }
  ],

  // 球星資料（中文 + 英文）
  stars: {
    'Mexico': [
      { name: '勞爾·希門尼斯', nameEn: 'Raúl Jiménez', position: '前鋒', club: '富勒姆 (Fulham)' },
      { name: '吉爾伯托·莫拉', nameEn: 'Gilberto Mora', position: '中場', club: '老虎隊 (Tigres)', note: '17歲新星' },
      { name: '朱利安·基尼奧內斯', nameEn: 'Julián Quiñones', position: '邊鋒', club: '美洲俱樂部 (Club América)' }
    ],
    'South Korea': [
      { name: '孫興慜', nameEn: 'Son Heung-min', position: '前鋒', club: '熱刺 (Tottenham)' },
      { name: '李剛仁', nameEn: 'Lee Kang-in', position: '中場', club: '巴黎聖日耳曼 (PSG)' },
      { name: '金玟哉', nameEn: 'Kim Min-jae', position: '後衛', club: '拜仁慕尼黑 (Bayern Munich)' }
    ],
    'South Africa': [
      { name: '羅恩文·威廉姆斯', nameEn: 'Ronwen Williams', position: '門將', club: '馬梅洛迪日落 (Mamelodi Sundowns)' },
      { name: '斯菲佩洛·西索萊', nameEn: 'Sphephelo Sithole', position: '中場', club: '貝倫人 (Belenenses)' },
      { name: '特姆巴·茲瓦內', nameEn: 'Themba Zwane', position: '中場', club: '馬梅洛迪日落 (Mamelodi Sundowns)' }
    ],
    'Czechia': [
      { name: '帕特里克·希克', nameEn: 'Patrik Schick', position: '前鋒', club: '勒沃庫森 (Bayer Leverkusen)' },
      { name: '托馬斯·索切克', nameEn: 'Tomáš Souček', position: '中場', club: '西漢姆聯 (West Ham)' },
      { name: '拉迪斯拉夫·克雷伊奇', nameEn: 'Ladislav Krejčí', position: '後衛', club: '布拉格斯拉維亞 (Slavia Prague)' }
    ],
    'Canada': [
      { name: '阿方索·戴維斯', nameEn: 'Alphonso Davies', position: '邊鋒/邊後衛', club: '拜仁慕尼黑 (Bayern Munich)' },
      { name: '喬納森·大衛', nameEn: 'Jonathan David', position: '前鋒', club: '里爾 (Lille)' },
      { name: '斯蒂芬·尤斯塔基奧', nameEn: 'Stephen Eustáquio', position: '中場', club: '波爾圖 (Porto)' }
    ],
    'Switzerland': [
      { name: '格蘭尼特·扎卡', nameEn: 'Granit Xhaka', position: '中場', club: '勒沃庫森 (Bayer Leverkusen)' },
      { name: '曼努埃爾·阿坎吉', nameEn: 'Manuel Akanji', position: '後衛', club: '曼城 (Manchester City)' },
      { name: '布雷爾·恩博洛', nameEn: 'Breel Embolo', position: '前鋒', club: '摩納哥 (Monaco)' }
    ],
    'Qatar': [
      { name: '阿克拉姆·阿菲夫', nameEn: 'Akram Afif', position: '前鋒', club: '薩德 (Al Sadd)' },
      { name: '阿爾莫埃茲·阿里', nameEn: 'Almoez Ali', position: '前鋒', club: '杜海勒 (Al Duhail)' }
    ],
    'Bosnia and Herzegovina': [
      { name: '埃丁·哲科', nameEn: 'Edin Džeko', position: '前鋒', club: '費內巴切 (Fenerbahçe)' },
      { name: '米拉勒姆·皮亞尼奇', nameEn: 'Miralem Pjanić', position: '中場', club: '沙迦 (Sharjah)' }
    ],
    'Brazil': [
      { name: '維尼修斯·儒尼奧爾', nameEn: 'Vinícius Júnior', position: '邊鋒', club: '皇家馬德里 (Real Madrid)' },
      { name: '羅德里戈', nameEn: 'Rodrygo', position: '邊鋒', club: '皇家馬德里 (Real Madrid)' },
      { name: '拉菲尼亞', nameEn: 'Raphinha', position: '邊鋒', club: '巴塞隆納 (Barcelona)' }
    ],
    'Morocco': [
      { name: '阿什拉夫·哈基米', nameEn: 'Achraf Hakimi', position: '邊後衛', club: '巴黎聖日耳曼 (PSG)' },
      { name: '哈基姆·齊耶赫', nameEn: 'Hakim Ziyech', position: '中場', club: '加拉塔薩雷 (Galatasaray)' },
      { name: '索菲揚·阿姆拉巴特', nameEn: 'Sofyan Amrabat', position: '中場', club: '費內巴切 (Fenerbahçe)' }
    ],
    'Scotland': [
      { name: '斯科特·麥克托米奈', nameEn: 'Scott McTominay', position: '中場', club: '拿坡里 (Napoli)' },
      { name: '安德魯·羅伯森', nameEn: 'Andrew Robertson', position: '邊後衛', club: '利物浦 (Liverpool)' },
      { name: '約翰·麥克金', nameEn: 'John McGinn', position: '中場', club: '阿斯頓維拉 (Aston Villa)' }
    ],
    'Haiti': [
      { name: '讓-里納·貝勒加德', nameEn: 'Jean-Ricner Bellegarde', position: '中場', club: '狼隊 (Wolves)' },
      { name: '杜肯斯·納宗', nameEn: 'Duckens Nazon', position: '前鋒', club: '聖艾蒂安 (Saint-Étienne)' }
    ],
    'USA': [
      { name: '克里斯蒂安·普利西奇', nameEn: 'Christian Pulisic', position: '邊鋒', club: 'AC 米蘭 (AC Milan)' },
      { name: '韋斯頓·麥肯尼', nameEn: 'Weston McKennie', position: '中場', club: '尤文圖斯 (Juventus)' },
      { name: '吉奧·雷納', nameEn: 'Gio Reyna', position: '中場', club: '多特蒙德 (Borussia Dortmund)' }
    ],
    'Paraguay': [
      { name: '米格爾·阿爾米隆', nameEn: 'Miguel Almirón', position: '邊鋒', club: '紐卡索聯 (Newcastle)' },
      { name: '胡利奧·恩西索', nameEn: 'Julio Enciso', position: '前鋒', club: '布萊頓 (Brighton)' }
    ],
    'Australia': [
      { name: '內斯托里·伊蘭昆達', nameEn: 'Nestory Irankunda', position: '邊鋒', club: '沃特福德 (Watford)', note: '2006年出生' },
      { name: '傑克遜·歐文', nameEn: 'Jackson Irvine', position: '中場', club: '聖保利 (St. Pauli)' },
      { name: '馬修·瑞安', nameEn: 'Mathew Ryan', position: '門將', club: 'AZ 阿爾克馬爾 (AZ Alkmaar)' }
    ],
    'Turkey': [
      { name: '阿爾達·居萊爾', nameEn: 'Arda Güler', position: '中場', club: '皇家馬德里 (Real Madrid)', note: '21歲天才' },
      { name: '哈坎·恰爾汗奧盧', nameEn: 'Hakan Çalhanoğlu', position: '中場', club: '國際米蘭 (Inter Milan)' },
      { name: '凱南·伊爾迪茲', nameEn: 'Kenan Yıldız', position: '前鋒', club: '尤文圖斯 (Juventus)' }
    ],
    'Germany': [
      { name: '弗洛里安·維爾茨', nameEn: 'Florian Wirtz', position: '中場', club: '勒沃庫森 (Bayer Leverkusen)' },
      { name: '賈馬爾·穆夏拉', nameEn: 'Jamal Musiala', position: '中場', club: '拜仁慕尼黑 (Bayern Munich)' },
      { name: '凱·哈弗茨', nameEn: 'Kai Havertz', position: '前鋒', club: '阿森納 (Arsenal)' }
    ],
    'Ecuador': [
      { name: '莫伊塞斯·凱塞多', nameEn: 'Moisés Caicedo', position: '中場', club: '切爾西 (Chelsea)' },
      { name: '恩納·瓦倫西亞', nameEn: 'Enner Valencia', position: '前鋒', club: '國際體育會 (Internacional)' },
      { name: '佩爾維斯·埃斯圖皮南', nameEn: 'Pervis Estupiñán', position: '邊後衛', club: '布萊頓 (Brighton)' }
    ],
    'Ivory Coast': [
      { name: '弗蘭克·凱西', nameEn: 'Franck Kessié', position: '中場', club: '阿爾阿赫利 (Al Ahli)' },
      { name: '塞巴斯蒂安·阿萊', nameEn: 'Sébastien Haller', position: '前鋒', club: '多特蒙德 (Borussia Dortmund)' },
      { name: '奧馬爾·迪亞凱特', nameEn: 'Oumar Diakité', position: '前鋒', club: '蘭斯 (Reims)' }
    ],
    'Curaçao': [
      { name: '于爾根·洛卡迪亞', nameEn: 'Jürgen Locadia', position: '前鋒', club: '邁阿密FC (Miami FC)' },
      { name: '萊安德羅·巴庫納', nameEn: 'Leandro Bacuna', position: '中場', club: '格羅寧根 (Groningen)' }
    ],
    'Netherlands': [
      { name: '弗蘭基·德容', nameEn: 'Frenkie de Jong', position: '中場', club: '巴塞隆納 (Barcelona)' },
      { name: '維吉爾·范迪克', nameEn: 'Virgil van Dijk', position: '後衛', club: '利物浦 (Liverpool)' },
      { name: '孟菲斯·德佩', nameEn: 'Memphis Depay', position: '前鋒', club: '馬德里競技 (Atlético Madrid)' }
    ],
    'Japan': [
      { name: '久保建英', nameEn: 'Takefusa Kubo', position: '邊鋒', club: '皇家社會 (Real Sociedad)' },
      { name: '遠藤航', nameEn: 'Wataru Endo', position: '中場', club: '利物浦 (Liverpool)' },
      { name: '三笘薰', nameEn: 'Kaoru Mitoma', position: '邊鋒', club: '布萊頓 (Brighton)', note: '因傷出戰成疑' }
    ],
    'Sweden': [
      { name: '維克托·吉奧克雷斯', nameEn: 'Viktor Gyökeres', position: '前鋒', club: '兵工廠 (Arsenal)' },
      { name: '亞歷山大·伊薩克', nameEn: 'Alexander Isak', position: '前鋒', club: '紐卡索聯 (Newcastle)' },
      { name: '德揚·庫盧塞夫斯基', nameEn: 'Dejan Kulusevski', position: '邊鋒', club: '熱刺 (Tottenham)' }
    ],
    'Tunisia': [
      { name: '漢尼拔·梅傑布里', nameEn: 'Hannibal Mejbri', position: '中場', club: '伯恩利 (Burnley)' },
      { name: '瓦赫比·哈茲里', nameEn: 'Wahbi Khazri', position: '前鋒', club: '蒙彼利埃 (Montpellier)' }
    ],
    'Belgium': [
      { name: '凱文·德布勞內', nameEn: 'Kevin De Bruyne', position: '中場', club: '曼城 (Manchester City)' },
      { name: '蒂博·庫爾圖瓦', nameEn: 'Thibaut Courtois', position: '門將', club: '皇家馬德里 (Real Madrid)' },
      { name: '羅梅盧·盧卡庫', nameEn: 'Romelu Lukaku', position: '前鋒', club: '拿坡里 (Napoli)' }
    ],
    'Iran': [
      { name: '邁赫迪·塔雷米', nameEn: 'Mehdi Taremi', position: '前鋒', club: '國際米蘭 (Inter Milan)' },
      { name: '薩達爾·阿茲蒙', nameEn: 'Sardar Azmoun', position: '前鋒', club: '羅馬 (Roma)' },
      { name: '阿里雷扎·賈漢巴赫什', nameEn: 'Alireza Jahanbakhsh', position: '邊鋒', club: '飛燕諾 (Feyenoord)' }
    ],
    'Egypt': [
      { name: '穆罕默德·薩拉赫', nameEn: 'Mohamed Salah', position: '前鋒', club: '利物浦 (Liverpool)' },
      { name: '穆罕默德·埃爾內尼', nameEn: 'Mohamed Elneny', position: '中場', club: '兵工廠 (Arsenal)' },
      { name: '奧馬爾·馬爾穆什', nameEn: 'Omar Marmoush', position: '前鋒', club: '法蘭克福 (Eintracht Frankfurt)' }
    ],
    'New Zealand': [
      { name: '克里斯·伍德', nameEn: 'Chris Wood', position: '前鋒', club: '諾丁漢森林 (Nottingham Forest)' },
      { name: '溫斯頓·里德', nameEn: 'Winston Reid', position: '後衛', club: '雅典AEK (AEK Athens)' }
    ],
    'Spain': [
      { name: '拉米內·亞馬爾', nameEn: 'Lamine Yamal', position: '邊鋒', club: '巴塞隆納 (Barcelona)' },
      { name: '佩德里', nameEn: 'Pedri', position: '中場', club: '巴塞隆納 (Barcelona)' },
      { name: '尼科·威廉斯', nameEn: 'Nico Williams', position: '邊鋒', club: '畢爾包競技 (Athletic Bilbao)' }
    ],
    'Uruguay': [
      { name: '費德里科·瓦爾韋德', nameEn: 'Federico Valverde', position: '中場', club: '皇家馬德里 (Real Madrid)' },
      { name: '羅納德·阿勞霍', nameEn: 'Ronald Araújo', position: '後衛', club: '巴塞隆納 (Barcelona)' },
      { name: '達爾文·努涅斯', nameEn: 'Darwin Núñez', position: '前鋒', club: '利物浦 (Liverpool)' }
    ],
    'Saudi Arabia': [
      { name: '薩勒姆·阿爾-達瓦薩里', nameEn: 'Salem Al-Dawsari', position: '邊鋒', club: '阿爾希拉爾 (Al Hilal)' },
      { name: '法赫德·穆瓦拉德', nameEn: 'Fahad Al-Muwallad', position: '前鋒', club: '阿爾沙巴布 (Al Shabab)' }
    ],
    'Cape Verde': [
      { name: '利夫拉門托', nameEn: 'Livramento', position: '中場', club: '聖克拉拉 (Santa Clara)' },
      { name: '瑞安·門德斯', nameEn: 'Ryan Mendes', position: '邊鋒', club: '法提赫卡拉古拉克 (Fatih Karagümrük)' }
    ],
    'France': [
      { name: '基利安·姆巴佩', nameEn: 'Kylian Mbappé', position: '前鋒', club: '皇家馬德里 (Real Madrid)' },
      { name: '安托萬·格里茲曼', nameEn: 'Antoine Griezmann', position: '前鋒', club: '馬德里競技 (Atlético Madrid)' },
      { name: '威廉·薩利巴', nameEn: 'William Saliba', position: '後衛', club: '兵工廠 (Arsenal)' }
    ],
    'Senegal': [
      { name: '薩迪奧·馬內', nameEn: 'Sadio Mané', position: '前鋒', club: '阿爾納斯爾 (Al Nassr)' },
      { name: '卡利杜·庫利巴利', nameEn: 'Kalidou Koulibaly', position: '後衛', club: '阿爾希拉爾 (Al Hilal)' },
      { name: '伊斯梅拉·薩爾', nameEn: 'Ismaïla Sarr', position: '邊鋒', club: '水晶宮 (Crystal Palace)' }
    ],
    'Norway': [
      { name: '埃爾林·哈蘭德', nameEn: 'Erling Haaland', position: '前鋒', club: '曼城 (Manchester City)', note: '首次世界盃' },
      { name: '馬丁·厄德高', nameEn: 'Martin Ødegaard', position: '中場', club: '兵工廠 (Arsenal)' },
      { name: '弗雷德里克·奧爾森', nameEn: 'Fredrik Aursnes', position: '中場', club: '本菲卡 (Benfica)' }
    ],
    'Iraq': [
      { name: '艾曼·海珊', nameEn: 'Aymen Hussein', position: '前鋒', club: '阿爾瓦克拉 (Al Wakrah)' },
      { name: '阿里·阿德南', nameEn: 'Ali Adnan', position: '邊後衛', club: '阿爾塔拉巴 (Al Talaba)' }
    ],
    'Argentina': [
      { name: '利昂內爾·梅西', nameEn: 'Lionel Messi', position: '前鋒', club: '邁阿密國際 (Inter Miami)', note: '第六屆世界盃' },
      { name: '朱利安·阿爾瓦雷斯', nameEn: 'Julián Álvarez', position: '前鋒', club: '曼城 (Manchester City)' },
      { name: '恩佐·費爾南德斯', nameEn: 'Enzo Fernández', position: '中場', club: '切爾西 (Chelsea)' }
    ],
    'Austria': [
      { name: '大衛·阿拉巴', nameEn: 'David Alaba', position: '後衛', club: '皇家馬德里 (Real Madrid)' },
      { name: '馬塞爾·薩比策', nameEn: 'Marcel Sabitzer', position: '中場', club: '多特蒙德 (Borussia Dortmund)' },
      { name: '馬可·阿瑙托維奇', nameEn: 'Marko Arnautović', position: '前鋒', club: '國際米蘭 (Inter Milan)' }
    ],
    'Algeria': [
      { name: '里亞德·馬赫雷斯', nameEn: 'Riyad Mahrez', position: '邊鋒', club: '阿爾阿赫利 (Al Ahli)', note: '最後一屆世界盃' },
      { name: '伊斯梅爾·本納塞爾', nameEn: 'Ismaël Bennacer', position: '中場', club: 'AC 米蘭 (AC Milan)' }
    ],
    'Jordan': [
      { name: '穆薩·阿爾-塔馬里', nameEn: 'Mousa Al-Tamari', position: '邊鋒', club: '雷恩 (Rennes)' },
      { name: '亞贊·阿爾-奈馬特', nameEn: 'Yazan Al-Naimat', position: '前鋒', club: '阿爾阿赫利 (Al Ahli)' }
    ],
    'Portugal': [
      { name: '克里斯蒂亞諾·羅納度', nameEn: 'Cristiano Ronaldo', position: '前鋒', club: '阿爾納斯爾 (Al Nassr)', note: '第六屆世界盃' },
      { name: '布魯諾·費爾南德斯', nameEn: 'Bruno Fernandes', position: '中場', club: '曼聯 (Manchester United)' },
      { name: '伯納多·席爾瓦', nameEn: 'Bernardo Silva', position: '中場', club: '曼城 (Manchester City)' }
    ],
    'Colombia': [
      { name: '路易斯·迪亞斯', nameEn: 'Luis Díaz', position: '邊鋒', club: '拜仁慕尼黑 (Bayern Munich)' },
      { name: '詹姆斯·羅德里格斯', nameEn: 'James Rodríguez', position: '中場', club: '聖保羅 (São Paulo)' },
      { name: '戴維森·桑切斯', nameEn: 'Davinson Sánchez', position: '後衛', club: '熱刺 (Tottenham)' }
    ],
    'Uzbekistan': [
      { name: '阿卜杜科迪爾·胡薩諾夫', nameEn: 'Abdukodir Khusanov', position: '後衛', club: '曼城 (Manchester City)' },
      { name: '埃爾多爾·肖穆羅多夫', nameEn: 'Eldor Shomurodov', position: '前鋒', club: '羅馬 (Roma)' }
    ],
    'DR Congo': [
      { name: '塞德里克·巴坎布', nameEn: 'Cédric Bakambu', position: '前鋒', club: '加拉塔薩雷 (Galatasaray)' },
      { name: '尚塞爾·姆本巴', nameEn: 'Chancel Mbemba', position: '後衛', club: '馬賽 (Marseille)' }
    ],
    'England': [
      { name: '裘德·貝林厄姆', nameEn: 'Jude Bellingham', position: '中場', club: '皇家馬德里 (Real Madrid)' },
      { name: '哈里·凱恩', nameEn: 'Harry Kane', position: '前鋒', club: '拜仁慕尼黑 (Bayern Munich)' },
      { name: '布卡約·薩卡', nameEn: 'Bukayo Saka', position: '邊鋒', club: '兵工廠 (Arsenal)' }
    ],
    'Croatia': [
      { name: '盧卡·莫德里奇', nameEn: 'Luka Modrić', position: '中場', club: '皇家馬德里 (Real Madrid)', note: '40歲·第五屆世界盃' },
      { name: '馬泰奧·科瓦西奇', nameEn: 'Mateo Kovačić', position: '中場', club: '曼城 (Manchester City)' },
      { name: '伊萬·佩里西奇', nameEn: 'Ivan Perišić', position: '邊鋒', club: '海杜克斯普利特 (Hajduk Split)' }
    ],
    'Ghana': [
      { name: '伊尼亞基·威廉斯', nameEn: 'Iñaki Williams', position: '前鋒', club: '畢爾包競技 (Athletic Bilbao)' },
      { name: '穆罕默德·庫杜斯', nameEn: 'Mohammed Kudus', position: '中場', club: '西漢姆聯 (West Ham)' },
      { name: '托馬斯·帕爾特伊', nameEn: 'Thomas Partey', position: '中場', club: '兵工廠 (Arsenal)' }
    ],
    'Panama': [
      { name: '阿達爾貝托·卡拉斯奎利亞', nameEn: 'Adalberto Carrasquilla', position: '中場', club: '休士頓發電機 (Houston Dynamo)' },
      { name: '伊薩克·迪亞斯', nameEn: 'Isac Díaz', position: '前鋒', club: '塔奇拉 (Deportivo Táchira)' }
    ]
  },

  // 比賽結果（開賽前為預定賽程，賽後更新比分）
  matches: [
    // === 6月11日 ===
    { date: '2026-06-11', time: '15:00 ET', group: 'A', team1: 'Mexico', score1: 2, team2: 'South Africa', score2: 0, venue: '墨西哥城·阿茲特克體育場', status: 'completed',
      goals: [
        { min: 9, team: 1, scorer: 'Julián Quiñones', assist: 'Erik Lira', detail: '禁區內射門穿檔' },
        { min: 67, team: 1, scorer: 'Raúl Jiménez', assist: 'Julián Quiñones', detail: '禁區內射門' }
      ],
      cards: [
        { min: 49, team: 2, player: 'Sphephelo Sithole', card: 'yellow' },
        { min: 62, team: 2, player: 'Themba Zwane', card: 'yellow' },
        { min: 72, team: 1, player: 'César Montes', card: 'red' },
        { min: 78, team: 2, player: 'Teboho Mokoena', card: 'red' },
        { min: 88, team: 2, player: 'Ime Okon', card: 'red' }
      ],
      stats: {
        possession: [58, 42],
        shots: [16, 3],
        shotsOnTarget: [4, 2],
        shotsOffTarget: [8, 1],
        shotsInsideBox: [9, 1],
        shotsOutsideBox: [7, 2],
        passes: [547, 351],
        passCompleted: [495, 290],
        passAccuracy: [90.5, 82.6],
        crosses: [13, 8],
        crossesCompleted: [3, 0],
        corners: [3, 1],
        freeKicks: [12, 13],
        fouls: [12, 11],
        offsides: [1, 1],
        yellowCards: [1, 2],
        redCards: [1, 2],
        forcedTurnovers: [31, 32],
        pressingApplied: [170, 306]
      }
    },
    { date: '2026-06-11', time: '22:00 ET', group: 'A', team1: 'South Korea', score1: 2, team2: 'Czechia', score2: 1, venue: '瓜達拉哈拉·阿克隆體育場', status: 'completed',
      goals: [
        { min: 59, team: 2, scorer: 'Ladislav Krejčí', assist: 'Vladimír Coufal', detail: '角球頭槌' },
        { min: 67, team: 1, scorer: '黃仁範 (Hwang In-beom)', assist: '李康仁 (Lee Kang-in)', detail: '禁區外遠射破門' },
        { min: 80, team: 1, scorer: '吳賢揆 (Oh Hyeon-gyu)', assist: '黃仁範 (Hwang In-beom)', detail: '禁區內接應射門' }
      ],
      cards: [
        { min: 90, team: 1, player: '李基赫 (Lee Gi-hyuk)', card: 'yellow', detail: '惡意犯規' }
      ],
      stats: {
        possession: [52, 48],
        shots: [15, 12],
        shotsOnTarget: [6, 5],
        shotsOffTarget: [6, 5],
        shotsInsideBox: [9, 7],
        shotsOutsideBox: [6, 5],
        passes: [480, 420],
        passCompleted: [410, 360],
        passAccuracy: [85.4, 85.7],
        crosses: [18, 22],
        crossesCompleted: [5, 6],
        corners: [7, 8],
        freeKicks: [14, 11],
        fouls: [11, 14],
        offsides: [2, 1],
        yellowCards: [1, 0],
        redCards: [0, 0],
        forcedTurnovers: [28, 35],
        pressingApplied: [250, 280]
      }
    },

    // === 6月12日 ===
    { date: '2026-06-12', time: '15:00 ET', group: 'B', team1: 'Canada', score1: 1, team2: 'Bosnia and Herzegovina', score2: 1, venue: '多倫多·BMO球場', status: 'completed',
      goals: [
        { min: 21, team: 2, scorer: 'Jovo Lukic', assist: 'Sead Kolašinac', detail: '角球頭槌' },
        { min: 78, team: 1, scorer: 'Cyle Larin', assist: 'Promise David', detail: '禁區內射門扳平' }
      ],
      cards: [
        { min: 38, team: 1, player: 'Richie Laryea', card: 'yellow' },
        { min: 55, team: 1, player: 'Ismaël Koné', card: 'yellow' },
        { min: 61, team: 2, player: 'Ivan Bašić', card: 'yellow' },
        { min: 73, team: 2, player: 'Benjamin Tahirović', card: 'yellow' }
      ],
      stats: {
        possession: [64, 36],
        shots: [12, 8],
        shotsOnTarget: [4, 3],
        shotsOffTarget: [5, 3],
        shotsInsideBox: [8, 5],
        shotsOutsideBox: [4, 3],
        passes: [520, 380],
        passCompleted: [430, 310],
        passAccuracy: [82.7, 81.6],
        crosses: [24, 14],
        crossesCompleted: [6, 5],
        corners: [9, 3],
        freeKicks: [13, 16],
        fouls: [13, 14],
        offsides: [2, 1],
        yellowCards: [2, 2],
        redCards: [0, 0],
        forcedTurnovers: [28, 32],
        pressingApplied: [210, 260]
      }
    },
    { date: '2026-06-12', time: '21:00 ET', group: 'D', team1: 'USA', score1: 4, team2: 'Paraguay', score2: 1, venue: '洛杉磯·SoFi體育場', status: 'completed',
      goals: [
        { min: 7, team: 1, scorer: 'Damian Bobadilla (OG)', detail: '巴拉圭後衛烏龍球' },
        { min: 31, team: 1, scorer: 'Folarin Balogun', assist: 'Christian Pulisic', detail: '禁區內射門入網' },
        { min: 45, team: 1, scorer: 'Folarin Balogun', assist: 'Malik Tillman', detail: '禁區弧頂抽射左上角' },
        { min: 73, team: 2, scorer: 'Mauricio', detail: '禁區內射門' },
        { min: 90, team: 1, scorer: 'Giovanni Reyna', detail: '禁區邊緣外腳背遠射' }
      ],
      cards: [
        { min: 32, team: 2, player: 'Miguel Almiron', card: 'yellow' },
        { min: 55, team: 2, player: 'Diego Gomez', card: 'yellow' },
        { min: 80, team: 2, player: 'Alex Arce', card: 'yellow' },
        { min: 88, team: 2, player: 'Junior Alonso', card: 'yellow' }
      ],
      stats: {
        possession: [63, 37],
        shots: [17, 8],
        shotsOnTarget: [6, 1],
        shotsOffTarget: [8, 3],
        shotsInsideBox: [11, 4],
        shotsOutsideBox: [6, 4],
        passes: [577, 282],
        passCompleted: [525, 209],
        passAccuracy: [91, 74],
        crosses: [18, 10],
        crossesCompleted: [6, 2],
        corners: [8, 2],
        freeKicks: [14, 16],
        fouls: [12, 14],
        offsides: [3, 2],
        yellowCards: [0, 4],
        redCards: [0, 0],
        forcedTurnovers: [30, 28],
        pressingApplied: [240, 220]
      }
    },

    // === 6月13日 ===
    { date: '2026-06-13', time: '15:00 ET', group: 'B', team1: 'Qatar', score1: 1, team2: 'Switzerland', score2: 1, venue: '舊金山·李維斯體育場', status: 'completed',
      goals: [
        { min: 17, team: 2, scorer: 'Breel Embolo', detail: '12碼罰球 — VAR確認犯規後判罰' },
        { min: 90, team: 1, scorer: 'Boualem Khoukhi', assist: 'Homam El Amin', detail: '左路傳中遠柱頭槌破門，卡達史上首個世界盃積分' }
      ],
      cards: [
        { min: 17, team: 1, player: 'Mahmoud Abunada', card: 'yellow', detail: '禁區內撲倒 Remo Freuler 犯規' },
        { min: 73, team: 1, player: 'Assim Madibo', card: 'yellow' },
        { min: 85, team: 2, player: 'Michel Aebischer', card: 'yellow' }
      ],
      stats: {
        possession: [32, 68],
        shots: [5, 22],
        shotsOnTarget: [3, 10],
        shotsOffTarget: [1, 7],
        shotsInsideBox: [3, 12],
        shotsOutsideBox: [2, 10],
        passes: [280, 580],
        passCompleted: [210, 510],
        passAccuracy: [75.0, 87.9],
        crosses: [8, 25],
        crossesCompleted: [2, 8],
        corners: [2, 9],
        freeKicks: [14, 10],
        fouls: [12, 14],
        offsides: [1, 3],
        yellowCards: [2, 1],
        redCards: [0, 0],
        forcedTurnovers: [24, 36],
        pressingApplied: [180, 240]
      }
    },
    { date: '2026-06-13', time: '18:00 ET', group: 'C', team1: 'Brazil', score1: 1, team2: 'Morocco', score2: 1, venue: '紐約/新澤西·大都會人壽體育場', status: 'completed',
      goals: [
        { min: 21, team: 2, scorer: 'Ismael Saibari', assist: 'Brahim Diaz', detail: '禁區內射門入網，摩洛哥領先' },
        { min: 32, team: 1, scorer: 'Vinícius Júnior', assist: 'Bruno Guimarães', detail: '禁區內轉身抽射扳平比分' }
      ],
      cards: [
        { min: 37, team: 1, player: 'Casemiro', card: 'yellow', detail: '戰術犯規阻止反擊' },
        { min: 43, team: 1, player: 'Roger Ibanez', card: 'yellow', detail: '鏟球犯規' }
      ],
      stats: {
        possession: [54, 46],
        shots: [15, 12],
        shotsOnTarget: [4, 5],
        shotsOffTarget: [7, 4],
        shotsInsideBox: [9, 6],
        shotsOutsideBox: [6, 6],
        passes: [520, 460],
        passCompleted: [465, 395],
        passAccuracy: [89.4, 85.9],
        crosses: [22, 14],
        crossesCompleted: [6, 4],
        corners: [7, 3],
        freeKicks: [12, 14],
        fouls: [14, 13],
        offsides: [1, 3],
        yellowCards: [2, 0],
        redCards: [0, 0],
        forcedTurnovers: [28, 32],
        pressingApplied: [195, 220]
      }
    },
    { date: '2026-06-13', time: '21:00 ET', group: 'C', team1: 'Haiti', score1: 0, team2: 'Scotland', score2: 1, venue: '波士頓·吉列體育場', status: 'completed',
      goals: [
        { min: 29, team: 2, scorer: 'John McGinn', assist: 'Ben Gannon-Doak', detail: '禁區邊緣射門，碰到海地球員折射入網' }
      ],
      cards: [
        { min: 58, team: 2, player: 'Scott McTominay', card: 'yellow', detail: '中場鏟球犯規' },
        { min: 72, team: 1, player: 'Jean-Ricner Bellegarde', card: 'yellow', detail: '戰術犯規' }
      ],
      stats: {
        possession: [38, 62],
        shots: [6, 14],
        shotsOnTarget: [1, 3],
        shotsOffTarget: [3, 8],
        shotsInsideBox: [2, 7],
        shotsOutsideBox: [4, 7],
        passes: [290, 510],
        passCompleted: [225, 440],
        passAccuracy: [77.6, 86.3],
        crosses: [7, 18],
        crossesCompleted: [1, 5],
        corners: [2, 6],
        freeKicks: [15, 12],
        fouls: [16, 10],
        offsides: [2, 1],
        yellowCards: [1, 1],
        redCards: [0, 0],
        forcedTurnovers: [22, 18],
        pressingApplied: [160, 200]
      }
    },
    { date: '2026-06-13', time: '00:00 ET', group: 'D', team1: 'Australia', score1: 2, team2: 'Turkey', score2: 0, venue: '溫哥華·BC Place', status: 'completed',
      goals: [
        { min: 27, team: 1, scorer: 'Nestory Irankunda', assist: 'Paul Okon-Engstler', detail: '反擊中左路切入禁區勁射入網，20歲125天成爲澳洲最年輕世界盃進球者' },
        { min: 75, team: 1, scorer: 'Connor Metcalfe', assist: null, detail: '禁區外20碼左腳低射入右下角，土耳其後場傳球失誤被截' }
      ],
      cards: [
        { min: 86, team: 2, player: 'Yunus Akgün', card: 'yellow', detail: '戰術犯規' }
      ],
      stats: {
        possession: [30, 57],
        shots: [9, 30],
        shotsOnTarget: [4, 8],
        shotsOffTarget: [5, 12],
        shotsInsideBox: [6, 16],
        shotsOutsideBox: [3, 14],
        passes: [292, 719],
        passCompleted: [217, 646],
        passAccuracy: [74.3, 89.8],
        crosses: [10, 28],
        crossesCompleted: [5, 3],
        corners: [5, 8],
        freeKicks: [7, 13],
        fouls: [12, 4],
        offsides: [1, 3],
        yellowCards: [0, 1],
        redCards: [0, 0],
        forcedTurnovers: [33, 24],
        pressingApplied: [210, 260]
      }
    },

    // === 6月14日 ===
    { date: '2026-06-14', time: '13:00 ET', group: 'E', team1: 'Germany', score1: 7, team2: 'Curaçao', score2: 1, venue: '休斯頓·NRG體育場', status: 'completed',
      goals: [
        { min: 6, team: 1, scorer: 'Felix Nmecha', assist: 'Florian Wirtz', detail: '禁區邊緣與Wirtz二過一配合後起腳射入遠角' },
        { min: 21, team: 2, scorer: 'Livano Comenencia', detail: '禁區邊緣勁射，庫拉索世界盃歷史首球' },
        { min: 38, team: 1, scorer: 'Nico Schlotterbeck', assist: 'Nathaniel Brown', detail: '角球頭槌破門' },
        { min: 45, team: 1, scorer: 'Kai Havertz', detail: '12碼罰球 — Nmecha禁區內被Bazoer絆倒' },
        { min: 47, team: 1, scorer: 'Jamal Musiala', assist: 'Kai Havertz', detail: '禁區內強力射門' },
        { min: 68, team: 1, scorer: 'Nathaniel Brown', assist: 'Deniz Undav', detail: '禁區內接應傳球後射遠角' },
        { min: 78, team: 1, scorer: 'Deniz Undav', assist: 'Nathaniel Brown', detail: '禁區內射門' },
        { min: 88, team: 1, scorer: 'Kai Havertz', assist: 'Jamal Musiala', detail: '禁區內接應射門，Havertz梅開二度' }
      ],
      cards: [
        { min: 55, team: 2, player: 'Juninho Bacuna', card: 'yellow' },
        { min: 63, team: 2, player: 'Riechedly Bazoer', card: 'yellow' }
      ],
      stats: {
        possession: [68, 32],
        shots: [28, 5],
        shotsOnTarget: [12, 2],
        shotsOffTarget: [12, 2],
        shotsInsideBox: [18, 3],
        shotsOutsideBox: [10, 2],
        passes: [680, 290],
        passCompleted: [618, 238],
        passAccuracy: [90.9, 82.1],
        crosses: [24, 10],
        crossesCompleted: [9, 2],
        corners: [12, 1],
        freeKicks: [8, 14],
        fouls: [12, 8],
        offsides: [3, 1],
        yellowCards: [0, 2],
        redCards: [0, 0],
        forcedTurnovers: [28, 34],
        pressingApplied: [200, 280]
      }
    },
    { date: '2026-06-14', time: '16:00 ET', group: 'F', team1: 'Netherlands', score1: 2, team2: 'Japan', score2: 2, venue: '達拉斯·AT&T體育場', status: 'completed',
      goals: [
        { min: 51, team: 1, scorer: 'Virgil van Dijk', assist: 'Ryan Gravenberch', detail: '角球頭槌破門，利物浦連線建功' },
        { min: 57, team: 2, scorer: 'Keito Nakamura', detail: '禁區弧頂射門碰 Jan Paul van Hecke 折射入網，日本迅速扳平' },
        { min: 64, team: 1, scorer: 'Crysencio Summerville', assist: 'Ryan Gravenberch', detail: '禁區左側內切後射遠角擊中內柱入網，荷蘭再度領先' },
        { min: 89, team: 2, scorer: 'Daichi Kamada', detail: '角球 Koki Ogawa 頭槌蹭到 Kamada 頭部折射入網，日本絕平！' }
      ],
      cards: [
      ],
      stats: {
        possession: [60, 40],
        shots: [14, 10],
        shotsOnTarget: [5, 4],
        shotsOffTarget: [6, 4],
        shotsInsideBox: [9, 5],
        shotsOutsideBox: [5, 5],
        passes: [580, 420],
        passCompleted: [520, 360],
        passAccuracy: [89.7, 85.7],
        crosses: [22, 16],
        crossesCompleted: [6, 4],
        corners: [7, 5],
        freeKicks: [12, 14],
        fouls: [13, 11],
        offsides: [2, 3],
        yellowCards: [0, 0],
        redCards: [0, 0],
        forcedTurnovers: [28, 32],
        pressingApplied: [220, 260]
      }
    },
    { date: '2026-06-14', time: '19:00 ET', group: 'E', team1: 'Ivory Coast', score1: 1, team2: 'Ecuador', score2: 0, venue: '費城·林肯金融球場', status: 'completed',
      goals: [
        { min: 90, team: 1, scorer: 'Amad Diallo', assist: 'Wilfried Singo', detail: 'Singo 右路長驅直入傳中，Diallo 禁區內左腳推射遠角入網，象牙海岸絕殺！' }
      ],
      cards: [
        { min: 27, team: 1, player: 'Seko Fofana', card: 'yellow', detail: '惡意犯規' }
      ],
      stats: {
        possession: [48, 52],
        shots: [10, 14],
        shotsOnTarget: [3, 3],
        shotsOffTarget: [4, 6],
        shotsInsideBox: [6, 8],
        shotsOutsideBox: [4, 6],
        passes: [410, 450],
        passCompleted: [350, 390],
        passAccuracy: [85.4, 86.7],
        crosses: [14, 20],
        crossesCompleted: [4, 5],
        corners: [4, 7],
        freeKicks: [15, 12],
        fouls: [14, 13],
        offsides: [1, 2],
        yellowCards: [1, 0],
        redCards: [0, 0],
        forcedTurnovers: [26, 30],
        pressingApplied: [190, 230]
      }
    },
    { date: '2026-06-14', time: '22:00 ET', group: 'F', team1: 'Sweden', score1: 5, team2: 'Tunisia', score2: 1, venue: '蒙特雷·BBVA球場', status: 'completed',
      goals: [
        { min: 7, team: 1, scorer: 'Yasin Ayari', assist: 'Viktor Gyökeres', detail: '禁區外弧線球射入左上角，刷新瑞典36年來世界盃最年輕進球紀錄，Ayari因父親為突尼西亞人而選擇不慶祝' },
        { min: 30, team: 1, scorer: 'Alexander Isak', assist: 'Viktor Gyökeres', detail: 'Gyökeres 中場直塞，Isak 禁區邊緣射門入網' },
        { min: 43, team: 2, scorer: 'Omar Rekik', assist: 'Hannibal Mejbri', detail: '角球頭槌破門，突尼西亞追回一球' },
        { min: 59, team: 1, scorer: 'Viktor Gyökeres', assist: 'Alexander Isak', detail: 'Isak 妙傳，Gyökeres 禁區內轉身射門入網，瑞典恢復兩球領先' },
        { min: 84, team: 1, scorer: 'Mattias Svanberg', detail: '替補上場僅18秒即破門，VAR確認後判定進球有效，Isak 在越位位置但未觸球' },
        { min: 90, team: 1, scorer: 'Yasin Ayari', detail: '禁區外遠射破網梅開二度，Ayari 以兩記世界波當選全場最佳' }
      ],
      cards: [
        { min: 54, team: 1, player: 'Isak Hien', card: 'yellow', detail: '戰術犯規' }
      ],
      stats: {
        possession: [57, 43],
        shots: [18, 8],
        shotsOnTarget: [8, 3],
        shotsOffTarget: [7, 3],
        shotsInsideBox: [12, 4],
        shotsOutsideBox: [6, 4],
        passes: [480, 340],
        passCompleted: [410, 270],
        passAccuracy: [85.4, 79.4],
        crosses: [16, 12],
        crossesCompleted: [5, 3],
        corners: [7, 3],
        freeKicks: [12, 15],
        fouls: [14, 12],
        offsides: [2, 3],
        yellowCards: [1, 0],
        redCards: [0, 0],
        forcedTurnovers: [30, 28],
        pressingApplied: [230, 250]
      }
    },

    // === 6月15日 ===
    { date: '2026-06-15', time: '12:00 ET', group: 'H', team1: 'Spain', score1: 0, team2: 'Cape Verde', score2: 0, venue: '亞特蘭大·梅賽德斯-賓士體育場', status: 'completed',
      goals: [],
      cards: [
        { min: 16, team: 2, player: 'Sidny Lopes Cabral', card: 'yellow', detail: '手部動作犯規' },
        { min: 90, team: 1, player: 'Pedri', card: 'yellow', detail: '拉倒對手阻止反擊' }
      ],
      stats: {
        possession: [74, 26],
        shots: [27, 6],
        shotsOnTarget: [7, 1],
        shotsOffTarget: [11, 3],
        shotsInsideBox: [16, 3],
        shotsOutsideBox: [11, 3],
        passes: [620, 210],
        passCompleted: [550, 150],
        passAccuracy: [88.7, 71.4],
        crosses: [25, 6],
        crossesCompleted: [7, 1],
        corners: [11, 1],
        freeKicks: [12, 14],
        fouls: [10, 14],
        offsides: [2, 3],
        yellowCards: [1, 1],
        redCards: [0, 0],
        forcedTurnovers: [28, 32],
        pressingApplied: [220, 280]
      }
    },
    { date: '2026-06-15', time: '15:00 ET', group: 'G', team1: 'Belgium', score1: 1, team2: 'Egypt', score2: 1, venue: '西雅圖·流明球場', status: 'completed',
      goals: [
        { min: 19, team: 2, scorer: 'Emam Ashour', assist: 'Mohamed Salah', detail: '禁區邊緣勁射破網，Ashour 國際賽首球！Salah 在34歲生日送出助攻，成為世界盃史上首位生日當天送出助攻的非洲球員' },
        { min: 66, team: 1, scorer: 'Mohamed Hany (OG)', detail: 'Lukaku 替補上場22秒即衝入禁區接 Meunier 傳中，Hany 解圍不慎將球碰入自家大門' }
      ],
      cards: [
        { min: 58, team: 1, player: 'Amadou Onana', card: 'yellow', detail: '中場戰術犯規阻止反擊' },
        { min: 72, team: 1, player: 'Maxim De Cuyper', card: 'yellow', detail: '犯規' },
        { min: 35, team: 2, player: 'Marwan Attia', card: 'yellow', detail: '中場犯規' },
        { min: 78, team: 2, player: 'Mohamed Hany', card: 'yellow', detail: '犯規' }
      ],
      stats: {
        possession: [53.5, 46.5],
        shots: [15, 14],
        shotsOnTarget: [3, 3],
        shotsOffTarget: [7, 3],
        shotsInsideBox: [8, 6],
        shotsOutsideBox: [7, 8],
        passes: [452, 397],
        passCompleted: [388, 322],
        passAccuracy: [85.8, 81.1],
        crosses: [16, 13],
        crossesCompleted: [6, 2],
        corners: [2, 7],
        freeKicks: [14, 15],
        fouls: [15, 15],
        offsides: [0, 1],
        yellowCards: [2, 2],
        redCards: [0, 0],
        forcedTurnovers: [49, 46],
        pressingApplied: [210, 230]
      }
    },
    { date: '2026-06-15', time: '18:00 ET', group: 'H', team1: 'Saudi Arabia', score1: 1, team2: 'Uruguay', score2: 1, venue: '邁阿密·硬石體育場', status: 'completed',
      goals: [
        { min: 41, team: 1, scorer: 'Abdulelah Al Amri', assist: 'Hassan Al Tambakti', detail: '角球 Hassan Al Tambakti 頭槌被撲，Al Amri 補射入網' },
        { min: 80, team: 2, scorer: 'Maxi Araujo', assist: 'Mathias Olivera', detail: 'Olivera 左路傳中，Vinas 頭槌被撲，Araujo 補射破門扳平' }
      ],
      cards: [
        { min: 34, team: 2, player: 'Rodrigo Bentancur', card: 'yellow', detail: '中場戰術犯規' },
        { min: 55, team: 1, player: 'Mohamed Kanno', card: 'yellow', detail: '犯規阻止反擊' },
        { min: 72, team: 1, player: 'Ali Al-Bulaihi', card: 'yellow', detail: '拉扯球衣犯規' },
        { min: 85, team: 2, player: 'Manuel Ugarte', card: 'yellow', detail: '中場鏟球犯規' }
      ],
      stats: {
        possession: [38, 62],
        shots: [7, 22],
        shotsOnTarget: [3, 10],
        shotsOffTarget: [2, 8],
        shotsInsideBox: [4, 14],
        shotsOutsideBox: [3, 8],
        passes: [320, 560],
        passCompleted: [250, 490],
        passAccuracy: [78.1, 87.5],
        crosses: [8, 22],
        crossesCompleted: [2, 6],
        corners: [4, 9],
        freeKicks: [12, 14],
        fouls: [14, 12],
        offsides: [2, 3],
        yellowCards: [2, 2],
        redCards: [0, 0],
        forcedTurnovers: [26, 30],
        pressingApplied: [200, 240]
      }
    },
    { date: '2026-06-15', time: '21:00 ET', group: 'G', team1: 'Iran', score1: 2, team2: 'New Zealand', score2: 2, venue: '洛杉磯·SoFi體育場', status: 'completed',
      goals: [
        { min: 7, team: 2, scorer: 'Elijah Just', assist: 'Chris Wood', detail: 'Wood 胸部停球後敲給 Just，禁區內勁射入網' },
        { min: 32, team: 1, scorer: 'Ramin Rezaeian', detail: '禁區內混戰中補射入網，伊朗扳平比分' },
        { min: 54, team: 2, scorer: 'Elijah Just', assist: 'Chris Wood', detail: 'Wood 與 Just 禁區二過一配合，Just 勁射梅開二度' },
        { min: 68, team: 1, scorer: 'Mohammad Mohebbi', assist: 'Ramin Rezaeian', detail: 'Rezaeian 左路傳中，Mohebbi 頭槌擊中門柱內側入網' }
      ],
      cards: [
        { min: 28, team: 2, player: 'Marko Stamenic', card: 'yellow', detail: '戰術犯規阻止反擊' },
        { min: 44, team: 1, player: 'Saman Ghoddos', card: 'yellow', detail: '中場犯規' },
        { min: 71, team: 1, player: 'Saeid Ezatolahi', card: 'yellow', detail: '鏟球犯規' },
        { min: 82, team: 2, player: 'Liberato Cacace', card: 'yellow', detail: '延誤比賽重新開始' }
      ],
      stats: {
        possession: [52, 48],
        shots: [14, 12],
        shotsOnTarget: [5, 5],
        shotsOffTarget: [6, 4],
        shotsInsideBox: [8, 7],
        shotsOutsideBox: [6, 5],
        passes: [430, 390],
        passCompleted: [365, 322],
        passAccuracy: [84.9, 82.6],
        crosses: [16, 14],
        crossesCompleted: [5, 4],
        corners: [6, 5],
        freeKicks: [14, 12],
        fouls: [14, 13],
        offsides: [2, 3],
        yellowCards: [2, 2],
        redCards: [0, 0],
        forcedTurnovers: [28, 32],
        pressingApplied: [220, 250]
      }
    },

    // === 6月16日 ===
    { date: '2026-06-16', time: '15:00 ET', group: 'I', team1: 'France', score1: 3, team2: 'Senegal', score2: 1, venue: '紐約/新澤西·大都會人壽體育場', status: 'completed',
      goals: [
        { min: 66, team: 1, scorer: 'Kylian Mbappé', assist: 'Michael Olise', detail: 'Olise 精準直塞，Mbappé 禁區內冷靜推射破門' },
        { min: 82, team: 1, scorer: 'Bradley Barcola', assist: null, detail: '禁區內接應射門入網，法國擴大領先' },
        { min: 90, team: 2, scorer: 'Ibrahim Mbaye', assist: null, detail: 'Senegal 替補前鋒禁區內射門得分' },
        { min: 90, team: 1, scorer: 'Kylian Mbappé', assist: null, detail: '禁區外遠射破網，Mbappé 梅開二度，以 58 球獨佔法國歷史射手王' }
      ],
      cards: [
      ],
      stats: {
        possession: [57, 43],
        shots: [14, 8],
        shotsOnTarget: [5, 2],
        shotsOffTarget: [6, 4],
        shotsInsideBox: [9, 5],
        shotsOutsideBox: [5, 3],
        passes: [530, 380],
        passCompleted: [470, 310],
        passAccuracy: [88.7, 81.6],
        crosses: [18, 14],
        crossesCompleted: [5, 3],
        corners: [6, 4],
        freeKicks: [12, 15],
        fouls: [13, 12],
        offsides: [3, 2],
        yellowCards: [0, 0],
        redCards: [0, 0],
        forcedTurnovers: [26, 30],
        pressingApplied: [210, 250]
      }
    },
    { date: '2026-06-16', time: '18:00 ET', group: 'I', team1: 'Iraq', score1: 1, team2: 'Norway', score2: 4, venue: '波士頓·吉列體育場', status: 'completed',
      goals: [
        { min: 29, team: 2, scorer: 'Erling Haaland', assist: 'Antonio Nusa', detail: 'Nusa 左路突破傳中，Haaland 禁區內搶點破門，世界盃首球' },
        { min: 39, team: 1, scorer: 'Aymen Hussein', assist: 'Amir Al-Ammari', detail: 'Al-Ammari 精確傳中，Hussein 禁區內頭槌扳平' },
        { min: 43, team: 2, scorer: 'Erling Haaland', assist: null, detail: '伊拉克後衛 Tahseen 回傳失誤，Haaland 斷球後冷靜破門，梅開二度' },
        { min: 76, team: 2, scorer: 'Leo Østigård', assist: 'Martin Ødegaard', detail: 'Ødegaard 角球開出，Østigård 後點頭槌破門' },
        { min: 90, team: 2, scorer: 'Aymen Hussein (OG)', detail: '挪威傳中造成禁區混亂，Hussein 解圍不慎自擺烏龍' }
      ],
      cards: [
      ],
      stats: {
        possession: [38, 62],
        shots: [8, 18],
        shotsOnTarget: [3, 8],
        shotsOffTarget: [3, 7],
        shotsInsideBox: [5, 11],
        shotsOutsideBox: [3, 7],
        passes: [310, 520],
        passCompleted: [240, 460],
        passAccuracy: [77.4, 88.5],
        crosses: [10, 22],
        crossesCompleted: [3, 7],
        corners: [2, 8],
        freeKicks: [14, 12],
        fouls: [14, 10],
        offsides: [1, 3],
        yellowCards: [0, 0],
        redCards: [0, 0],
        forcedTurnovers: [28, 34],
        pressingApplied: [190, 240]
      }
    },
    { date: '2026-06-16', time: '21:00 ET', group: 'J', team1: 'Argentina', score1: 3, team2: 'Algeria', score2: 0, venue: '堪薩斯城·箭頭體育場', status: 'completed',
      goals: [
        { min: 17, team: 1, scorer: 'Lionel Messi', assist: 'Rodrigo De Paul', detail: 'De Paul 直塞穿透防線，Messi 左腳弧線球射入遠角，200 場國家隊里程碑' },
        { min: 55, team: 1, scorer: 'Lionel Messi', assist: null, detail: 'Mac Allister 遠射被 Zidane 撲出，Messi 跟進補射破門，世界盃第 15 球超越 Mbappé' },
        { min: 76, team: 1, scorer: 'Lionel Messi', assist: 'Nicolás González', detail: 'González 切入禁區回傳，Messi 左腳弧線球破網，世界盃第 16 球追平 Klose 紀錄' }
      ],
      cards: [
      ],
      stats: {
        possession: [65, 35],
        shots: [16, 6],
        shotsOnTarget: [7, 1],
        shotsOffTarget: [6, 3],
        shotsInsideBox: [10, 3],
        shotsOutsideBox: [6, 3],
        passes: [580, 320],
        passCompleted: [520, 260],
        passAccuracy: [89.7, 81.3],
        crosses: [18, 10],
        crossesCompleted: [5, 2],
        corners: [8, 3],
        freeKicks: [12, 14],
        fouls: [12, 11],
        offsides: [2, 3],
        yellowCards: [0, 0],
        redCards: [0, 0],
        forcedTurnovers: [30, 28],
        pressingApplied: [220, 240]
      }
    },
    { date: '2026-06-16', time: '00:00 ET', group: 'J', team1: 'Austria', score1: 3, team2: 'Jordan', score2: 1, venue: '舊金山·李維斯體育場', status: 'completed',
      goals: [
        { min: 20, team: 1, scorer: 'Romano Schmid', assist: 'Xaver Schlager', detail: '22碼遠射右上角破門，奧地利重返世界盃首球' },
        { min: 50, team: 2, scorer: 'Ali Olwan', assist: 'Noor Al-Rawabdeh', detail: '接長傳切入禁區弧線球射入遠柱，約旦世界盃歷史首球' },
        { min: 76, team: 1, scorer: 'Yazan Alarab (OG)', detail: 'Sabitzer 角球，Nasib 頭槌碰到 Alarab 脖子折射入網，烏龍球' },
        { min: 90, team: 1, scorer: 'Marko Arnautović', detail: '12碼罰球 — Obeid 手球犯規，VAR 確認後判罰' }
      ],
      cards: [
        { min: 77, team: 1, player: 'Marcel Sabitzer', card: 'yellow', detail: '中場戰術犯規' }
      ],
      stats: {
        possession: [63, 37],
        shots: [11, 11],
        shotsOnTarget: [4, 4],
        shotsOffTarget: [7, 7],
        shotsInsideBox: [5, 7],
        shotsOutsideBox: [6, 4],
        passes: [580, 328],
        passCompleted: [489, 240],
        passAccuracy: [84.3, 73.2],
        crosses: [17, 15],
        crossesCompleted: [3, 3],
        corners: [4, 3],
        freeKicks: [7, 15],
        fouls: [12, 7],
        offsides: [3, 1],
        yellowCards: [1, 0],
        redCards: [0, 0],
        forcedTurnovers: [28, 32],
        pressingApplied: [200, 240]
      }
    },

    // === 6月17日 ===
    { date: '2026-06-17', time: '13:00 ET', group: 'K', team1: 'Portugal', score1: 1, team2: 'DR Congo', score2: 1, venue: '休斯頓·NRG體育場', status: 'completed',
      goals: [
        { min: 6, team: 1, scorer: 'João Neves', assist: 'Pedro Neto', detail: 'Pedro Neto 左路傳中，João Neves 禁區內頭槌破門' },
        { min: 45, team: 2, scorer: 'Yoane Wissa', assist: 'Arthur Masuaku', detail: '角球開出，Wissa 無人防守下頭槌入網，剛果取得世界盃歷史首分' }
      ],
      cards: [
        { min: 13, team: 1, player: 'Bernardo Silva', card: 'yellow', detail: '惡意犯規' },
        { min: 32, team: 2, player: 'Chancel Mbemba', card: 'yellow', detail: '惡意犯規' },
        { min: 88, team: 1, player: 'Nélson Semedo', card: 'yellow', detail: '阻止反擊戰術犯規' },
        { min: 90, team: 1, player: 'Tomás Araújo', card: 'yellow', detail: '拉倒 Wissa 犯規' }
      ],
      stats: {
        possession: [65, 35],
        shots: [16, 8],
        shotsOnTarget: [4, 3],
        shotsOffTarget: [8, 3],
        shotsInsideBox: [10, 5],
        shotsOutsideBox: [6, 3],
        passes: [540, 310],
        passCompleted: [480, 250],
        passAccuracy: [88.9, 80.6],
        crosses: [22, 10],
        crossesCompleted: [6, 3],
        corners: [7, 5],
        freeKicks: [14, 16],
        fouls: [15, 12],
        offsides: [1, 2],
        yellowCards: [3, 1],
        redCards: [0, 0],
        forcedTurnovers: [28, 32],
        pressingApplied: [200, 240]
      }
    },
    { date: '2026-06-17', time: '16:00 ET', group: 'L', team1: 'England', score1: 4, team2: 'Croatia', score2: 2, venue: '達拉斯·AT&T體育場', status: 'completed',
      goals: [
        { min: 12, team: 1, scorer: 'Harry Kane', detail: '12碼罰球 — Modrić 禁區內犯規，Kane 第一次罰球被撲出，因 Livaković 提前移動重罰，第二次冷靜射入左下角' },
        { min: 38, team: 2, scorer: 'Martin Baturina', assist: 'Ivan Perišić', detail: '禁區外20碼勁射左上角，Pickford 觸到球仍無法阻止入網' },
        { min: 44, team: 1, scorer: 'Harry Kane', assist: 'Declan Rice', detail: '角球開出後 Kane 禁區內頭槌破門，梅開二度' },
        { min: 45, team: 2, scorer: 'Petar Musa', detail: '半場最後一擊，禁區內凌空抽射入網，克羅埃西亞二度扳平' },
        { min: 47, team: 1, scorer: 'Jude Bellingham', assist: 'Elliot Anderson', detail: 'Anderson 傳球，Bellingham 帶球切入禁區推射遠角入網，下半場開場僅2分鐘' },
        { min: 85, team: 1, scorer: 'Marcus Rashford', assist: 'Bukayo Saka', detail: 'Saka 傳球，Rashford 禁區邊緣抽射入網鎖定勝局' }
      ],
      cards: [
      ],
      stats: {
        possession: [58, 42],
        shots: [18, 10],
        shotsOnTarget: [8, 4],
        shotsOffTarget: [7, 4],
        shotsInsideBox: [12, 6],
        shotsOutsideBox: [6, 4],
        passes: [520, 380],
        passCompleted: [460, 310],
        passAccuracy: [88.5, 81.6],
        crosses: [20, 14],
        crossesCompleted: [6, 4],
        corners: [8, 4],
        freeKicks: [12, 14],
        fouls: [12, 14],
        offsides: [2, 2],
        yellowCards: [0, 0],
        redCards: [0, 0],
        forcedTurnovers: [30, 28],
        pressingApplied: [220, 240]
      }
    },
    { date: '2026-06-17', time: '19:00 ET', group: 'L', team1: 'Ghana', score1: 1, team2: 'Panama', score2: 0, venue: '多倫多·BMO球場', status: 'completed',
      goals: [
        { min: 90, team: 1, scorer: 'Caleb Yirenkyi', assist: 'Brandon Thomas-Asante', detail: 'Thomas-Asante 禁區邊緣傳球，Yirenkyi 禁區內射門入網，傷停補時第5分鐘絕殺！' }
      ],
      cards: [
        { min: 16, team: 1, player: 'Caleb Yirenkyi', card: 'yellow', detail: '拉倒 Barcenas 阻止反擊' }
      ],
      stats: {
        possession: [52, 48],
        shots: [12, 9],
        shotsOnTarget: [4, 3],
        shotsOffTarget: [5, 4],
        shotsInsideBox: [7, 5],
        shotsOutsideBox: [5, 4],
        passes: [410, 380],
        passCompleted: [340, 310],
        passAccuracy: [82.9, 81.6],
        crosses: [16, 14],
        crossesCompleted: [4, 3],
        corners: [5, 4],
        freeKicks: [14, 13],
        fouls: [13, 14],
        offsides: [2, 1],
        yellowCards: [0, 0],
        redCards: [0, 0],
        forcedTurnovers: [26, 30],
        pressingApplied: [200, 240]
      }
    },
    { date: '2026-06-17', time: '22:00 ET', group: 'K', team1: 'Uzbekistan', score1: 1, team2: 'Colombia', score2: 3, venue: '墨西哥城·阿茲特克體育場', status: 'completed',
      goals: [
        { min: 40, team: 2, scorer: 'Daniel Muñoz', assist: 'Luis Díaz', detail: 'Díaz 精準過頂傳球，Muñoz 從右後衛位置斜插禁區凌空墊射破門' },
        { min: 60, team: 1, scorer: 'Abbosbek Fayzullaev', assist: 'Dostonbek Khamdamov', detail: 'Shomurodov 左路傳中，Khamdamov 凌空射門擊中門柱反彈，Fayzullaev 門前頭槌補射入網 — 烏茲別克世界盃歷史首球' },
        { min: 65, team: 2, scorer: 'Luis Díaz', assist: null, detail: '中場斷球後禁區內低射穿過門將十指關入網，Díaz 個人世界盃首球' },
        { min: 90, team: 2, scorer: 'Jaminton Campaz', assist: 'Cucho Hernández', detail: 'Hernández 右路斷球傳中，Campaz 禁區內強力頭槌破門' }
      ],
      cards: [
        { min: 7, team: 2, player: 'Johan Mojica', card: 'yellow', detail: '早期身體對抗犯規' },
        { min: 34, team: 1, player: 'Abdukodir Khusanov', card: 'yellow', detail: '阻止 Luis Díaz 反擊的戰術犯規' }
      ],
      stats: {
        possession: [33, 56],
        shots: [8, 15],
        shotsOnTarget: [2, 4],
        shotsOffTarget: [3, 7],
        shotsInsideBox: [4, 9],
        shotsOutsideBox: [4, 6],
        passes: [334, 534],
        passCompleted: [267, 469],
        passAccuracy: [79.9, 87.8],
        crosses: [11, 18],
        crossesCompleted: [2, 6],
        corners: [3, 4],
        freeKicks: [14, 14],
        fouls: [11, 14],
        offsides: [0, 3],
        yellowCards: [1, 1],
        redCards: [0, 0],
        forcedTurnovers: [32, 31],
        pressingApplied: [264, 160]
      }
    },

    // === 6月18日 ===
    { date: '2026-06-18', time: '12:00 ET', group: 'B', team1: 'Czechia', score1: 1, team2: 'South Africa', score2: 1, venue: '亞特蘭大·梅賽德斯-賓士體育場', status: 'completed',
      goals: [
        { min: 6, team: 1, scorer: 'Michal Sadílek', assist: 'Alexandr Sojka', detail: 'Sojka 禁區邊緣傳球，Sadílek 禁區中央右腳射門入網' },
        { min: 83, team: 2, scorer: 'Teboho Mokoena', detail: '12碼罰球 — Pavel Sulc 禁區內手球犯規，VAR 確認後判罰，Mokoena 騙過門將射入左下角' }
      ],
      cards: [
        { min: 33, team: 2, player: 'Teboho Mokoena', card: 'yellow', detail: '中場犯規' },
        { min: 40, team: 2, player: 'Thalente Mbatha', card: 'yellow', detail: '惡意犯規' },
        { min: 75, team: 1, player: 'Ladislav Krejčí', card: 'yellow', detail: '戰術犯規阻止反擊' }
      ],
      stats: {
        possession: [38, 62],
        shots: [14, 17],
        shotsOnTarget: [3, 4],
        shotsOffTarget: [11, 13],
        shotsInsideBox: [11, 6],
        shotsOutsideBox: [3, 11],
        passes: [339, 563],
        passCompleted: [271, 507],
        passAccuracy: [80.0, 90.0],
        crosses: [18, 14],
        crossesCompleted: [5, 4],
        corners: [5, 5],
        freeKicks: [14, 12],
        fouls: [12, 10],
        offsides: [2, 3],
        yellowCards: [1, 2],
        redCards: [0, 0],
        forcedTurnovers: [28, 32],
        pressingApplied: [200, 240]
      }
    },
    { date: '2026-06-18', time: '15:00 ET', group: 'B', team1: 'Switzerland', score1: 4, team2: 'Bosnia and Herzegovina', score2: 1, venue: '洛杉磯·SoFi體育場', status: 'completed',
      goals: [
        { min: 74, team: 1, scorer: 'Johan Manzambi', detail: '替補上場僅3分鐘，禁區內凌空抽射破網！Manzambi 世界盃首球' },
        { min: 84, team: 1, scorer: 'Rubén Vargas', detail: '禁區內低射入遠角擴大領先' },
        { min: 90, team: 1, scorer: 'Johan Manzambi', detail: '禁區內接應傳球冷靜推射，Manzambi 替補梅開二度' },
        { min: 93, team: 2, scorer: 'Ermin Mahmić', detail: '禁區內強力射門入網，波赫挽回顏面' },
        { min: 97, team: 1, scorer: 'Granit Xhaka', detail: '12碼罰球 — Sow 禁區內被犯規，Xhaka 冷靜射入，瑞士4-1鎖定勝局' }
      ],
      cards: [
        { min: 59, team: 2, player: 'Amar Dedić', card: 'yellow', detail: '犯規' },
        { min: 61, team: 2, player: 'Edin Džeko', card: 'yellow', detail: '爭搶犯規' },
        { min: 65, team: 1, player: 'Nico Elvedi', card: 'yellow', detail: '戰術犯規' },
        { min: 80, team: 2, player: 'Tarik Muharemovic', card: 'red', detail: '破壞明顯得分機會，直接紅牌' }
      ],
      stats: {
        possession: [62, 38],
        shots: [13, 5],
        shotsOnTarget: [7, 3],
        shotsOffTarget: [4, 2],
        shotsInsideBox: [9, 3],
        shotsOutsideBox: [4, 2],
        passes: [480, 310],
        passCompleted: [410, 240],
        passAccuracy: [85.4, 77.4],
        crosses: [20, 12],
        crossesCompleted: [6, 3],
        corners: [7, 3],
        freeKicks: [14, 16],
        fouls: [12, 16],
        offsides: [2, 2],
        yellowCards: [1, 2],
        redCards: [0, 1],
        forcedTurnovers: [28, 32],
        pressingApplied: [200, 240]
      }
    },
    { date: '2026-06-18', time: '18:00 ET', group: 'B', team1: 'Canada', score1: 6, team2: 'Qatar', score2: 0, venue: '溫哥華·BC Place', status: 'completed',
      goals: [
        { min: 16, team: 1, scorer: 'Cyle Larin', detail: 'David 射門被撲出，Larin 門前兩碼補射入網，加拿大世界盃史上首勝開端' },
        { min: 29, team: 1, scorer: 'Jonathan David', detail: 'Buchanan 遠射後 David 禁區內轉身凌空抽射得分，2-0' },
        { min: 48, team: 1, scorer: 'Jonathan David', detail: 'Larin 射門被撲，David 門前頭槌補射入網，David 梅開二度' },
        { min: 64, team: 1, scorer: 'Nathan Saliba', detail: '自由球直接彎過人牆入網！Saliba 舉起 Kone 球衣致敬受傷隊友' },
        { min: 75, team: 2, scorer: 'Mohamed Al Manai (OG)', detail: 'Shaffelburg 射門擊中 Mannai 折射入網，烏龍球' },
        { min: 92, team: 1, scorer: 'Jonathan David', detail: 'David 門前補射入空門，完成帽子戲法！加拿大史上首位世界盃戴帽球員' }
      ],
      cards: [
        { min: 32, team: 2, player: 'Homam Ahmed', card: 'red', detail: '禁區內拉倒 Buchanan，直接紅牌' },
        { min: 52, team: 2, player: 'Assim Madibo', card: 'red', detail: '危險鏟球導致 Ismaël Koné 重傷離場，直接紅牌' },
        { min: 55, team: 2, player: 'Mohamed Al Manai', card: 'yellow', detail: '犯規' }
      ],
      stats: {
        possession: [67, 33],
        shots: [20, 3],
        shotsOnTarget: [10, 0],
        shotsOffTarget: [7, 2],
        shotsInsideBox: [14, 1],
        shotsOutsideBox: [6, 2],
        passes: [580, 280],
        passCompleted: [520, 210],
        passAccuracy: [89.7, 75.0],
        crosses: [24, 8],
        crossesCompleted: [8, 1],
        corners: [10, 1],
        freeKicks: [14, 12],
        fouls: [12, 16],
        offsides: [3, 1],
        yellowCards: [0, 1],
        redCards: [0, 2],
        forcedTurnovers: [30, 28],
        pressingApplied: [220, 260]
      }
    },
    { date: '2026-06-18', time: '21:00 ET', group: 'A', team1: 'Mexico', score1: 1, team2: 'South Korea', score2: 0, venue: '瓜達拉哈拉·阿克隆體育場', status: 'completed',
      goals: [
        { min: 50, team: 1, scorer: 'Luis Romo', detail: '韓國門將 Kim Seunggyu 與後衛 Lee Gihyuk 溝通失誤，Romo 輕鬆推入空門，墨西哥晉級32強' }
      ],
      cards: [
        { min: 3, team: 2, player: 'Lee Kang-in', card: 'yellow', detail: '過激鏟球犯規' },
        { min: 63, team: 1, player: 'Jesús Gallardo', card: 'yellow', detail: '戰術犯規' },
        { min: 75, team: 1, player: 'Edson Álvarez', card: 'yellow', detail: '拖延比賽時間' }
      ],
      stats: {
        possession: [51, 49],
        shots: [12, 10],
        shotsOnTarget: [4, 3],
        shotsOffTarget: [5, 5],
        shotsInsideBox: [7, 5],
        shotsOutsideBox: [5, 5],
        passes: [420, 400],
        passCompleted: [360, 340],
        passAccuracy: [85.7, 85.0],
        crosses: [16, 18],
        crossesCompleted: [4, 5],
        corners: [5, 4],
        freeKicks: [14, 13],
        fouls: [14, 13],
        offsides: [2, 4],
        yellowCards: [2, 1],
        redCards: [0, 0],
        forcedTurnovers: [28, 30],
        pressingApplied: [220, 250]
      }
    },

    // === 6月19日 ===
    { date: '2026-06-19', time: '15:00 ET', group: 'D', team1: 'USA', score1: 2, team2: 'Australia', score2: 0, venue: '西雅圖·流明球場', status: 'completed',
      goals: [
        { min: 11, team: 1, scorer: 'Cameron Burgess (OG)', detail: 'Balogun 左路突破傳中，Burgess 解圍不慎將球碰入自家大門，烏龍球' },
        { min: 43, team: 1, scorer: 'Alex Freeman', assist: 'Antonee Robinson', detail: 'Robinson 勁射後球反彈，Freeman 門前頭槌破門，VAR 確認越位無效後改判進球有效' }
      ],
      cards: [
        { min: 16, team: 2, player: 'Jordan Bos', card: 'yellow', detail: '戰術犯規' },
        { min: 32, team: 2, player: 'Alessandro Circati', card: 'yellow', detail: '犯規' },
        { min: 56, team: 1, player: 'Antonee Robinson', card: 'yellow', detail: '犯規' },
        { min: 89, team: 1, player: 'Folarin Balogun', card: 'yellow', detail: '爭搶犯規' },
        { min: 89, team: 2, player: 'Harry Souttar', card: 'yellow', detail: '犯規' },
        { min: 93, team: 1, player: 'Chris Richards', card: 'yellow', detail: '拖延時間' }
      ],
      stats: {
        possession: [62, 38],
        shots: [10, 5],
        shotsOnTarget: [2, 2],
        shotsOffTarget: [5, 2],
        shotsInsideBox: [6, 3],
        shotsOutsideBox: [4, 2],
        passes: [490, 310],
        passCompleted: [440, 260],
        passAccuracy: [89.8, 83.9],
        crosses: [18, 10],
        crossesCompleted: [5, 2],
        corners: [7, 4],
        freeKicks: [14, 16],
        fouls: [14, 15],
        offsides: [3, 2],
        yellowCards: [3, 3],
        redCards: [0, 0],
        forcedTurnovers: [28, 32],
        pressingApplied: [220, 240]
      }
    },
    { date: '2026-06-19', time: '18:00 ET', group: 'C', team1: 'Scotland', score1: 0, team2: 'Morocco', score2: 1, venue: '波士頓·吉列體育場', status: 'completed',
      goals: [
        { min: 2, team: 2, scorer: 'Ismael Saibari', assist: 'Brahim Diaz', detail: 'Brahim Diaz 過頂傳球，Saibari 禁區內冷靜推射入網，本屆世界盃最快進球（70秒）' }
      ],
      cards: [
        { min: 23, team: 2, player: 'Issa Diop', card: 'yellow', detail: '犯規' },
        { min: 65, team: 1, player: 'Andy Robertson', card: 'yellow', detail: '戰術犯規' }
      ],
      stats: {
        possession: [46, 54],
        shots: [8, 12],
        shotsOnTarget: [2, 4],
        shotsOffTarget: [4, 5],
        shotsInsideBox: [4, 7],
        shotsOutsideBox: [4, 5],
        passes: [380, 460],
        passCompleted: [310, 400],
        passAccuracy: [81.6, 87.0],
        crosses: [14, 18],
        crossesCompleted: [3, 5],
        corners: [3, 6],
        freeKicks: [14, 12],
        fouls: [14, 13],
        offsides: [2, 3],
        yellowCards: [1, 1],
        redCards: [0, 0],
        forcedTurnovers: [26, 30],
        pressingApplied: [200, 240]
      }
    },
    { date: '2026-06-19', time: '21:00 ET', group: 'C', team1: 'Brazil', score1: 3, team2: 'Haiti', score2: 0, venue: '費城·林肯金融球場', status: 'completed',
      goals: [
        { min: 23, team: 1, scorer: 'Matheus Cunha', assist: 'Vinícius Júnior', detail: 'Vinícius Júnior 射門被撲出，Cunha 跟進補射入網，個人世界盃首球' },
        { min: 36, team: 1, scorer: 'Matheus Cunha', assist: 'Vinícius Júnior', detail: 'Vinícius Júnior 快速反擊傳中，Cunha 左腳射入左上角，梅開二度' },
        { min: 45, team: 1, scorer: 'Vinícius Júnior', assist: 'Lucas Paquetá', detail: 'Paquetá 直傳穿越防線，Vinícius Júnior 禁區內推射破門，3-0' }
      ],
      cards: [
        { min: 4, team: 2, player: 'Carlens Arcus', card: 'yellow', detail: '惡意犯規' },
        { min: 45, team: 2, player: 'Frantzdy Pierrot', card: 'yellow', detail: '犯規' },
        { min: 65, team: 1, player: 'Douglas Santos', card: 'yellow', detail: '犯規' },
        { min: 72, team: 2, player: 'Danley Jean Jacques', card: 'yellow', detail: '犯規' }
      ],
      stats: {
        possession: [63, 37],
        shots: [16, 4],
        shotsOnTarget: [6, 1],
        shotsOffTarget: [7, 2],
        shotsInsideBox: [10, 2],
        shotsOutsideBox: [6, 2],
        passes: [520, 330],
        passCompleted: [470, 270],
        passAccuracy: [90.4, 81.8],
        crosses: [15, 9],
        crossesCompleted: [4, 1],
        corners: [8, 1],
        freeKicks: [11, 14],
        fouls: [12, 13],
        offsides: [3, 0],
        yellowCards: [1, 3],
        redCards: [0, 0],
        forcedTurnovers: [30, 28],
        pressingApplied: [230, 220]
      }
    },

    // === 6月20日 ===
    { date: '2026-06-20', time: '06:00 ET', group: 'D', team1: 'Turkey', score1: 0, team2: 'Paraguay', score2: 1, venue: '舊金山·李維斯體育場', status: 'completed',
      goals: [
        { min: 2, team: 2, scorer: 'Matías Galarza', assist: 'Julio Enciso', detail: 'Enciso 中場直塞，Galarza 禁區外左腳遠射入右下角，開賽僅2分鐘閃電進球' }
      ],
      cards: [
        { min: 34, team: 2, player: 'Diego Gómez', card: 'yellow', detail: '中場犯規' },
        { min: 45, team: 1, player: 'Merih Demiral', card: 'yellow', detail: '犯規' },
        { min: 52, team: 2, player: 'Júnior Alonso', card: 'yellow', detail: '戰術犯規' },
        { min: 67, team: 1, player: 'Orkun Kökçü', card: 'yellow', detail: '犯規' },
        { min: 72, team: 2, player: 'Gustavo Gómez', card: 'red', detail: '破壞明顯得分機會，直接紅牌，巴拉圭十人應戰' },
        { min: 85, team: 1, player: 'Hakan Çalhanoğlu', card: 'yellow', detail: '爭搶犯規' }
      ],
      stats: {
        possession: [62, 38],
        shots: [18, 4],
        shotsOnTarget: [5, 2],
        shotsOffTarget: [9, 1],
        shotsInsideBox: [11, 2],
        shotsOutsideBox: [7, 2],
        passes: [580, 310],
        passCompleted: [520, 240],
        passAccuracy: [89.7, 77.4],
        crosses: [22, 8],
        crossesCompleted: [7, 1],
        corners: [9, 2],
        freeKicks: [14, 16],
        fouls: [14, 15],
        offsides: [2, 3],
        yellowCards: [3, 2],
        redCards: [0, 1],
        forcedTurnovers: [30, 28],
        pressingApplied: [240, 200]
      }
    },
    { date: '2026-06-20', time: '13:00 ET', group: 'F', team1: 'Netherlands', score1: 5, team2: 'Sweden', score2: 1, venue: '休斯頓·NRG體育場', status: 'completed',
      goals: [
        { min: 5, team: 1, scorer: 'Brian Brobbey', assist: 'Cody Gakpo', detail: 'Gakpo 右路傳中，Brobbey 門前近距離搶點破門，荷蘭夢幻開局' },
        { min: 17, team: 1, scorer: 'Brian Brobbey', assist: 'Denzel Dumfries', detail: 'Dumfries 右路傳中，Brobbey 禁區中央再次破門梅開二度' },
        { min: 47, team: 1, scorer: 'Cody Gakpo', assist: 'Denzel Dumfries', detail: 'Dumfries 再次右路傳中，Gakpo 禁區內近距離射門入網，下半場開場即破門' },
        { min: 54, team: 1, scorer: 'Cody Gakpo', assist: 'Crysencio Summerville', detail: 'Summerville 反擊中傳球，Gakpo 禁區內冷靜推射梅開二度' },
        { min: 59, team: 2, scorer: 'Anthony Elanga', assist: 'Alexander Isak', detail: 'Isak 精準直塞，Elanga 禁區內低射破網，瑞典扳回一城' },
        { min: 89, team: 1, scorer: 'Crysencio Summerville', assist: 'Memphis Depay', detail: 'Depay 禁區外傳球，Summerville 禁區外低射入網，荷蘭鎖定5-1勝局' }
      ],
      cards: [
        { min: 75, team: 2, player: 'Yasin Ayari', card: 'yellow', detail: '惡意犯規' },
        { min: 80, team: 2, player: 'Lucas Bergvall', card: 'yellow', detail: '惡意犯規' }
      ],
      stats: {
        possession: [58, 42],
        shots: [18, 10],
        shotsOnTarget: [8, 3],
        shotsOffTarget: [7, 5],
        shotsInsideBox: [12, 6],
        shotsOutsideBox: [6, 4],
        passes: [530, 380],
        passCompleted: [475, 310],
        passAccuracy: [89.6, 81.6],
        crosses: [22, 16],
        crossesCompleted: [8, 4],
        corners: [8, 4],
        freeKicks: [12, 14],
        fouls: [10, 14],
        offsides: [2, 3],
        yellowCards: [0, 2],
        redCards: [0, 0],
        forcedTurnovers: [30, 28],
        pressingApplied: [220, 250]
      }
    },
    { date: '2026-06-20', time: '16:00 ET', group: 'E', team1: 'Germany', score1: 2, team2: 'Ivory Coast', score2: 1, venue: '多倫多·BMO球場', status: 'completed',
      goals: [
        { min: 30, team: 2, scorer: 'Franck Kessié', assist: 'Yan Diomande', detail: 'Diomande 左路低平球傳中，Kessié 禁區中央推射入網，象牙海岸領先' },
        { min: 68, team: 1, scorer: 'Deniz Undav', assist: 'Nadiem Amiri', detail: 'Amiri 右路精準傳中，Undav 禁區內凌空抽射扳平比分' },
        { min: 90, team: 1, scorer: 'Deniz Undav', assist: 'Felix Nmecha', detail: '傷停補時第4分鐘，Nmecha 傳球，Undav 禁區內射門入網，德國絕殺逆轉！' }
      ],
      cards: [
        { min: 45, team: 2, player: 'Odilon Kossounou', card: 'yellow', detail: '犯規' },
        { min: 62, team: 1, player: 'Antonio Rüdiger', card: 'yellow', detail: '戰術犯規' },
        { min: 78, team: 2, player: 'Seko Fofana', card: 'yellow', detail: '犯規' }
      ],
      stats: {
        possession: [59, 41],
        shots: [16, 6],
        shotsOnTarget: [5, 3],
        shotsOffTarget: [8, 2],
        shotsInsideBox: [10, 4],
        shotsOutsideBox: [6, 2],
        passes: [510, 350],
        passCompleted: [450, 280],
        passAccuracy: [88.2, 80.0],
        crosses: [20, 12],
        crossesCompleted: [5, 3],
        corners: [7, 3],
        freeKicks: [14, 16],
        fouls: [14, 12],
        offsides: [3, 1],
        yellowCards: [1, 2],
        redCards: [0, 0],
        forcedTurnovers: [28, 32],
        pressingApplied: [210, 250]
      }
    },
    { date: '2026-06-20', time: '20:00 ET', group: 'E', team1: 'Ecuador', score1: 0, team2: 'Curaçao', score2: 0, venue: '堪薩斯城·箭頭體育場', status: 'completed',
      goals: [],
      cards: [
        { min: 55, team: 1, player: 'Pervis Estupiñán', card: 'yellow', detail: '戰術犯規' },
        { min: 72, team: 2, player: 'Juriën Gaari', card: 'yellow', detail: '犯規' }
      ],
      stats: {
        possession: [68, 32],
        shots: [22, 5],
        shotsOnTarget: [5, 1],
        shotsOffTarget: [11, 2],
        shotsInsideBox: [14, 2],
        shotsOutsideBox: [8, 3],
        passes: [620, 280],
        passCompleted: [550, 210],
        passAccuracy: [88.7, 75.0],
        crosses: [24, 8],
        crossesCompleted: [7, 1],
        corners: [10, 2],
        freeKicks: [12, 14],
        fouls: [13, 12],
        offsides: [3, 1],
        yellowCards: [1, 1],
        redCards: [0, 0],
        forcedTurnovers: [30, 28],
        pressingApplied: [240, 200]
      }
    },

    // === 6月21日 ===
    { date: '2026-06-21', time: '00:00 ET', group: 'F', team1: 'Tunisia', score1: 0, team2: 'Japan', score2: 4, venue: '蒙特雷·BBVA球場', status: 'completed',
      goals: [
        { min: 4, team: 2, scorer: 'Daichi Kamada', assist: 'Keito Nakamura', detail: 'Nakamura 左路低平球傳中，Kamada 禁區內輕鬆推射入網，世界盃第1000場比賽先馳得點' },
        { min: 31, team: 2, scorer: 'Ayase Ueda', assist: 'Ko Itakura', detail: 'Itakura 精準傳球，Ueda 禁區外強力低射入遠角，2-0' },
        { min: 69, team: 2, scorer: 'Junya Ito', assist: 'Ayase Ueda', detail: 'Ueda 過頂傳球，Ito 禁區內冷靜推射破門，3-0' },
        { min: 82, team: 2, scorer: 'Ayase Ueda', assist: 'Kaishu Sano', detail: 'Sano 右路傳中，Ueda 禁區中央強力頭槌破網梅開二度，4-0' }
      ],
      cards: [
      ],
      stats: {
        possession: [32, 68],
        shots: [6, 22],
        shotsOnTarget: [1, 8],
        shotsOffTarget: [3, 10],
        shotsInsideBox: [3, 14],
        shotsOutsideBox: [3, 8],
        passes: [280, 580],
        passCompleted: [210, 510],
        passAccuracy: [75.0, 87.9],
        crosses: [8, 24],
        crossesCompleted: [2, 8],
        corners: [3, 9],
        freeKicks: [12, 10],
        fouls: [8, 6],
        offsides: [1, 3],
        yellowCards: [0, 0],
        redCards: [0, 0],
        forcedTurnovers: [28, 32],
        pressingApplied: [200, 240]
      }
    },
    { date: '2026-06-21', time: '12:00 ET', group: 'H', team1: 'Spain', score1: 4, team2: 'Saudi Arabia', score2: 0, venue: '亞特蘭大·梅賽德斯-賓士體育場', status: 'completed',
      goals: [
        { min: 10, team: 1, scorer: 'Lamine Yamal', assist: 'Mikel Oyarzabal', detail: 'Oyarzabal 右路精準傳中，Yamal 禁區內滑行鏟射入網，個人世界盃首球，18歲343天' },
        { min: 21, team: 1, scorer: 'Mikel Oyarzabal', assist: 'Lamine Yamal', detail: 'Yamal 突破後射門被撲出，Oyarzabal 門前補射入網' },
        { min: 24, team: 1, scorer: 'Mikel Oyarzabal', assist: 'Pedri', detail: 'Pedri 禁區邊緣傳球，Oyarzabal 禁區內轉身射門破網，梅開二度' },
        { min: 49, team: 1, scorer: 'Hassan Altambakti (OG)', detail: 'Cucurella 禁區外凌空抽射被 Alowais 撲出，Altambakti 不慎將球擋入自家大門' }
      ],
      cards: [
        { min: 62, team: 2, player: 'Ali Lajami', card: 'yellow', detail: '戰術犯規阻止反擊' }
      ],
      stats: {
        possession: [72, 28],
        shots: [17, 2],
        shotsOnTarget: [5, 0],
        shotsOffTarget: [8, 1],
        shotsInsideBox: [10, 1],
        shotsOutsideBox: [7, 1],
        passes: [620, 210],
        passCompleted: [565, 150],
        passAccuracy: [91.1, 71.4],
        crosses: [28, 6],
        crossesCompleted: [9, 1],
        corners: [4, 1],
        freeKicks: [8, 12],
        fouls: [6, 10],
        offsides: [1, 3],
        yellowCards: [0, 1],
        redCards: [0, 0],
        forcedTurnovers: [30, 28],
        pressingApplied: [220, 260]
      }
    },
    { date: '2026-06-21', time: '15:00 ET', group: 'G', team1: 'Belgium', score1: 0, team2: 'Iran', score2: 0, venue: '洛杉磯·SoFi體育場', status: 'completed',
      goals: [
      ],
      cards: [
        { min: 3, team: 1, player: 'Romelu Lukaku', card: 'yellow', detail: '惡意犯規' },
        { min: 33, team: 2, player: 'Saeid Ezatolahi', card: 'yellow', detail: '惡意犯規' },
        { min: 66, team: 1, player: 'Nathan Ngoy', card: 'red', detail: '破壞明顯得分機會，後腳跟踢球失誤後拉倒 Mehdi Taremi，直接紅牌' }
      ],
      stats: {
        possession: [65, 35],
        shots: [16, 8],
        shotsOnTarget: [5, 3],
        shotsOffTarget: [7, 3],
        shotsInsideBox: [9, 5],
        shotsOutsideBox: [7, 3],
        passes: [560, 310],
        passCompleted: [500, 240],
        passAccuracy: [89.3, 77.4],
        crosses: [22, 10],
        crossesCompleted: [7, 2],
        corners: [8, 3],
        freeKicks: [14, 16],
        fouls: [14, 13],
        offsides: [2, 3],
        yellowCards: [1, 1],
        redCards: [1, 0],
        forcedTurnovers: [28, 32],
        pressingApplied: [220, 250]
      }
    },
    { date: '2026-06-21', time: '18:00 ET', group: 'H', team1: 'Uruguay', score1: 2, team2: 'Cape Verde', score2: 2, venue: '邁阿密·硬石體育場', status: 'completed',
      goals: [
        { min: 21, team: 2, scorer: 'Kevin Pina', detail: '自由球直接破門，維德角世界盃歷史首球！Pina 在禁區外25碼開出自由球越過人牆，Muslera 撲救不及。Cape Verde 1-0 領先' },
        { min: 40, team: 1, scorer: 'Maxi Araujo', assist: null, detail: 'Uruguay 自由球開入禁區，Vozinha 撲出 Valverde 射門，Araujo 門前補射入網扳平比分' },
        { min: 43, team: 1, scorer: 'Agustín Canobbio', assist: 'Federico Valverde', detail: 'Valverde 禁區邊緣妙傳，Canobbio 轉身抽射入網，Uruguay 2-1 反超' },
        { min: 60, team: 2, scorer: 'Helio Varela', assist: null, detail: 'Olivera 後場傳球失誤，Varela 斷球後在禁區內冷靜推射入網，2-2 扳平！Varela 個人國際賽首球' }
      ],
      cards: [
        { min: 5, team: 2, player: 'Sidny Lopes Cabral', card: 'yellow', detail: '惡意犯規' },
        { min: 20, team: 1, player: 'Rodrigo Bentancur', card: 'yellow', detail: '惡意犯規' }
      ],
      stats: {
        possession: [64, 36],
        shots: [16, 8],
        shotsOnTarget: [5, 3],
        shotsOffTarget: [7, 3],
        shotsInsideBox: [10, 4],
        shotsOutsideBox: [6, 4],
        passes: [540, 310],
        passCompleted: [480, 240],
        passAccuracy: [88.9, 77.4],
        crosses: [22, 10],
        crossesCompleted: [7, 2],
        corners: [8, 3],
        freeKicks: [14, 16],
        fouls: [14, 13],
        offsides: [2, 3],
        yellowCards: [1, 1],
        redCards: [0, 0],
        forcedTurnovers: [28, 32],
        pressingApplied: [220, 250]
      }
    },
    { date: '2026-06-21', time: '21:00 ET', group: 'G', team1: 'New Zealand', score1: 1, team2: 'Egypt', score2: 3, venue: '溫哥華·BC Place', status: 'completed',
      goals: [
        { min: 15, team: 1, scorer: 'Finn Surman', assist: 'Tim Payne', detail: 'Payne 角球開出，Surman 禁區內頭槌破門，個人第3顆國際賽進球' },
        { min: 58, team: 2, scorer: 'Mostafa Ziko', assist: 'Mohamed Hany', detail: 'Hany 右路傳中，Ziko 頭槌入網，埃及扳平比分' },
        { min: 67, team: 2, scorer: 'Mohamed Salah', assist: 'Mostafa Ziko', detail: 'Ziko 與 Salah 一過二配合，Salah 禁區內精準射門入網，埃及反超' },
        { min: 82, team: 2, scorer: 'Mahmoud Trezeguet', assist: 'Mohamed Salah', detail: 'Salah 角球開出，Trezeguet 頭槌破門，埃及鎖定勝局' }
      ],
      cards: [
        { min: 40, team: 1, player: 'Marko Stamenic', card: 'yellow', detail: '中場戰術犯規' },
        { min: 55, team: 1, player: 'Joe Bell', card: 'yellow', detail: '阻止反擊犯規' },
        { min: 70, team: 2, player: 'Marwan Attia', card: 'yellow', detail: '中場犯規' }
      ],
      stats: {
        possession: [39, 61],
        shots: [9, 16],
        shotsOnTarget: [4, 5],
        shotsOffTarget: [3, 7],
        shotsInsideBox: [5, 10],
        shotsOutsideBox: [4, 6],
        passes: [330, 560],
        passCompleted: [250, 490],
        passAccuracy: [75.8, 87.5],
        crosses: [12, 22],
        crossesCompleted: [3, 7],
        corners: [2, 3],
        freeKicks: [14, 12],
        fouls: [14, 8],
        offsides: [2, 1],
        yellowCards: [2, 1],
        redCards: [0, 0],
        forcedTurnovers: [28, 32],
        pressingApplied: [200, 250]
      }
    },

    // === 6月22日 ===
    { date: '2026-06-22', time: '13:00 ET', group: 'J', team1: 'Argentina', score1: 2, team2: 'Austria', score2: 0, venue: '達拉斯·AT&T體育場', status: 'completed',
      goals: [
        { min: 38, team: 1, scorer: 'Lionel Messi', assist: 'Facundo Medina', detail: 'Medina 助攻，Messi 禁區內左腳弧線球射入遠角，以第17顆世界盃進球超越 Klose 成為史上進球王！' },
        { min: 90, team: 1, scorer: 'Lionel Messi', detail: '傷停補時第5分鐘，Messi 禁區外射門入網，梅開二度，個人世界盃進球數達到18球，阿根廷2-0鎖定勝局並晉級32強！' }
      ],
      cards: [
        { min: 40, team: 2, player: 'Stefan Posch', card: 'yellow', detail: '戰術犯規阻止反擊' },
        { min: 76, team: 1, player: 'Facundo Medina', card: 'yellow', detail: '犯規' },
        { min: 76, team: 2, player: 'Konrad Laimer', card: 'yellow', detail: '戰術犯規' },
        { min: 90, team: 1, player: 'Leandro Paredes', card: 'yellow', detail: '拖延比賽時間' }
      ],
      stats: {
        possession: [56, 44],
        shots: [14, 7],
        shotsOnTarget: [5, 1],
        shotsOffTarget: [6, 4],
        shotsInsideBox: [8, 4],
        shotsOutsideBox: [6, 3],
        passes: [480, 360],
        passCompleted: [420, 290],
        passAccuracy: [87.5, 80.6],
        crosses: [18, 14],
        crossesCompleted: [5, 3],
        corners: [5, 4],
        freeKicks: [14, 16],
        fouls: [12, 14],
        offsides: [3, 1],
        yellowCards: [2, 2],
        redCards: [0, 0],
        forcedTurnovers: [28, 32],
        pressingApplied: [220, 250]
      }
    },
    { date: '2026-06-22', time: '17:00 ET', group: 'I', team1: 'France', score1: 3, team2: 'Iraq', score2: 0, venue: '費城·林肯金融球場', status: 'completed',
      goals: [
        { min: 14, team: 1, scorer: 'Kylian Mbappé', assist: 'Michael Olise', detail: 'Olise 精準直塞，Mbappé 禁區內冷靜推射破門，法國1-0領先' },
        { min: 54, team: 1, scorer: 'Kylian Mbappé', assist: null, detail: 'Mbappé 禁區外遠射入網，梅開二度，個人世界盃第4球，法國2-0' },
        { min: 66, team: 1, scorer: 'Ousmane Dembélé', assist: null, detail: 'Dembélé 禁區內接應射門入網，個人世界盃首球，法國3-0鎖定勝局' }
      ],
      cards: [
        { min: 6, team: 2, player: 'Amir Al-Ammari', card: 'yellow', detail: '惡意犯規' }
      ],
      stats: {
        possession: [63, 37],
        shots: [16, 5],
        shotsOnTarget: [7, 1],
        shotsOffTarget: [6, 3],
        shotsInsideBox: [10, 3],
        shotsOutsideBox: [6, 2],
        passes: [540, 310],
        passCompleted: [485, 240],
        passAccuracy: [89.8, 77.4],
        crosses: [20, 10],
        crossesCompleted: [6, 2],
        corners: [8, 2],
        freeKicks: [12, 14],
        fouls: [12, 13],
        offsides: [3, 1],
        yellowCards: [0, 1],
        redCards: [0, 0],
        forcedTurnovers: [30, 28],
        pressingApplied: [220, 250]
      }
    },
    { date: '2026-06-22', time: '20:00 ET', group: 'I', team1: 'Norway', score1: 3, team2: 'Senegal', score2: 2, venue: '紐約/新澤西·大都會人壽體育場', status: 'completed',
      goals: [
        { min: 43, team: 1, scorer: 'Marcus Holmgren Pedersen', assist: null, detail: 'Koulibaly 清球失誤，Pedersen 禁區內勁射破門，替補上場後建功' },
        { min: 48, team: 1, scorer: 'Erling Haaland', assist: 'Martin Ødegaard', detail: 'Ødegaard 精準直塞，Haaland 禁區內冷靜射入上角，世界盃第3球' },
        { min: 53, team: 2, scorer: 'Ismaila Sarr', assist: 'Sadio Mané', detail: 'Mané 妙傳撕裂防線，Sarr 禁區內射門入網，塞內加爾追回一球' },
        { min: 58, team: 1, scorer: 'Erling Haaland', assist: 'Patrick Berg', detail: 'Berg 助攻，Haaland 禁區內凌空抽射碰橫樑入網，梅開二度！世界盃第4球' },
        { min: 90, team: 2, scorer: 'Ismaila Sarr', assist: null, detail: '傷停補時階段 Sarr 梅開二度，塞內加爾追成3-2，但挪威守住勝局晉級32強' }
      ],
      cards: [
      ],
      stats: {
        possession: [48, 52],
        shots: [9, 7],
        shotsOnTarget: [5, 2],
        shotsOffTarget: [3, 4],
        shotsInsideBox: [6, 4],
        shotsOutsideBox: [3, 3],
        passes: [410, 450],
        passCompleted: [350, 380],
        passAccuracy: [85.4, 84.4],
        crosses: [14, 16],
        crossesCompleted: [4, 3],
        corners: [4, 1],
        freeKicks: [12, 14],
        fouls: [7, 1],
        offsides: [0, 3],
        yellowCards: [0, 0],
        redCards: [0, 0],
        forcedTurnovers: [28, 32],
        pressingApplied: [220, 260]
      }
    },
    { date: '2026-06-22', time: '23:00 ET', group: 'J', team1: 'Jordan', score1: 1, team2: 'Algeria', score2: 2, venue: '舊金山·李維斯體育場', status: 'completed',
      goals: [
        { min: 36, team: 1, scorer: 'Nizar Al-Rashdan', assist: 'Mousa Al-Tamari', detail: '左路反擊傳中，Al-Rashdan 禁區內推射入網，約旦率先破門' },
        { min: 69, team: 2, scorer: 'Nadhir Benbouali', assist: 'Fares Chaibi', detail: 'Chaibi 右路傳中，Benbouali 禁區中央頭槌破門扳平比分' },
        { min: 82, team: 2, scorer: 'Amine Gouiri', assist: 'Anis Hadj Moussa', detail: '角球開出後禁區混戰，Gouiri 跟進射門入網，VAR 確認進球有效，阿爾及利亞反超' }
      ],
      cards: [
        { min: 44, team: 1, player: 'Husam Abu Dahab', card: 'yellow', detail: '犯規' },
        { min: 64, team: 2, player: 'Ibrahim Maza', card: 'yellow', detail: '惡意犯規' }
      ],
      stats: {
        possession: [27, 73],
        shots: [8, 15],
        shotsOnTarget: [4, 8],
        shotsOffTarget: [3, 5],
        shotsInsideBox: [4, 10],
        shotsOutsideBox: [4, 5],
        passes: [260, 540],
        passCompleted: [190, 480],
        passAccuracy: [73.1, 88.9],
        crosses: [6, 18],
        crossesCompleted: [1, 5],
        corners: [1, 10],
        freeKicks: [14, 10],
        fouls: [11, 6],
        offsides: [1, 0],
        yellowCards: [1, 1],
        redCards: [0, 0],
        forcedTurnovers: [24, 36],
        pressingApplied: [180, 240]
      }
    },

    // === 6月23日 ===
    { date: '2026-06-23', time: '13:00 ET', group: 'K', team1: 'Portugal', score1: 5, team2: 'Uzbekistan', score2: 0, venue: '休斯頓·NRG體育場', status: 'completed',
      goals: [
        { min: 6, team: 1, scorer: 'Cristiano Ronaldo', assist: 'João Cancelo', detail: 'Cancelo 右路低平球傳中，Ronaldo 禁區內第一時間射近角入網，成為首個在6屆世界盃進球的球員' },
        { min: 17, team: 1, scorer: 'Nuno Mendes', assist: null, detail: '禁區外自由球低射穿過人牆入網，Ronaldo 擔任誘餌佯裝射門' },
        { min: 39, team: 1, scorer: 'Cristiano Ronaldo', assist: 'Bruno Fernandes', detail: 'Fernandes 精準直塞，Ronaldo 禁區內冷靜射入遠角，梅開二度！世界盃第10球，超越 Eusébio 成為葡萄牙世界盃歷史射手王' },
        { min: 60, team: 2, scorer: 'Abduvokhid Nematov (OG)', detail: '烏茲別克門將 Nematov 撲救時將球碰入自家大門' },
        { min: 87, team: 1, scorer: 'Rafael Leão', assist: null, detail: '替補上場4分鐘後禁區內射門入網，葡萄牙5-0鎖定勝局' }
      ],
      cards: [
        { min: 14, team: 2, player: 'Odildzhon Khamrobekov', card: 'yellow', detail: '犯規' },
        { min: 68, team: 1, player: 'Renato Veiga', card: 'yellow', detail: '犯規' }
      ],
      stats: {
        possession: [66, 34],
        shots: [17, 7],
        shotsOnTarget: [9, 2],
        shotsOffTarget: [5, 2],
        shotsInsideBox: [12, 4],
        shotsOutsideBox: [5, 3],
        passes: [616, 319],
        passCompleted: [555, 257],
        passAccuracy: [90.1, 80.6],
        crosses: [18, 10],
        crossesCompleted: [6, 2],
        corners: [3, 2],
        freeKicks: [14, 16],
        fouls: [13, 15],
        offsides: [1, 2],
        yellowCards: [1, 1],
        redCards: [0, 0],
        forcedTurnovers: [30, 28],
        pressingApplied: [240, 200]
      }
    },
    { date: '2026-06-23', time: '16:00 ET', group: 'L', team1: 'England', score1: 0, team2: 'Ghana', score2: 0, venue: '波士頓·吉列體育場', status: 'completed',
      goals: [],
      cards: [
        { min: 42, team: 2, player: 'Alexander Djiku', card: 'yellow', detail: '犯規' },
        { min: 63, team: 1, player: 'Marc Guéhi', card: 'yellow', detail: '戰術犯規' },
        { min: 74, team: 2, player: 'Caleb Yirenkyi', card: 'yellow', detail: '犯規' }
      ],
      stats: {
        possession: [62, 38],
        shots: [12, 5],
        shotsOnTarget: [3, 1],
        shotsOffTarget: [6, 3],
        shotsInsideBox: [7, 3],
        shotsOutsideBox: [5, 2],
        passes: [520, 310],
        passCompleted: [465, 250],
        passAccuracy: [89.4, 80.6],
        crosses: [20, 10],
        crossesCompleted: [5, 2],
        corners: [7, 2],
        freeKicks: [12, 14],
        fouls: [10, 12],
        offsides: [2, 1],
        yellowCards: [1, 2],
        redCards: [0, 0],
        forcedTurnovers: [28, 30],
        pressingApplied: [210, 240]
      }
    },
    { date: '2026-06-23', time: '19:00 ET', group: 'L', team1: 'Panama', score1: 0, team2: 'Croatia', score2: 1, venue: '多倫多·BMO球場', status: 'completed',
      goals: [
        { min: 54, team: 2, scorer: 'Ante Budimir', assist: 'Josip Stanišić', detail: 'Stanišić 右路傳中，Budimir 下半場替補上陣54分鐘禁區內推射入網，以34歲之齡成爲克羅埃西亞世界盃史上最年長進球者。Luka Modrić 以200場國家隊出賽成爲史上第4位達此里程碑的球員' }
      ],
      cards: [
        { min: 61, team: 1, player: 'Yoel Bárcenas', card: 'yellow', detail: '犯規' },
        { min: 90, team: 2, player: 'Petar Sučić', card: 'yellow', detail: '拖延比賽時間' }
      ],
      stats: {
        possession: [49, 51],
        shots: [8, 12],
        shotsOnTarget: [3, 4],
        shotsOffTarget: [3, 5],
        shotsInsideBox: [5, 7],
        shotsOutsideBox: [3, 5],
        passes: [380, 460],
        passCompleted: [310, 400],
        passAccuracy: [81.6, 87.0],
        crosses: [14, 18],
        crossesCompleted: [3, 5],
        corners: [4, 5],
        freeKicks: [14, 12],
        fouls: [14, 11],
        offsides: [2, 3],
        yellowCards: [1, 1],
        redCards: [0, 0],
        forcedTurnovers: [28, 32],
        pressingApplied: [220, 260]
      }
    },
    { date: '2026-06-23', time: '22:00 ET', group: 'K', team1: 'Colombia', score1: 1, team2: 'DR Congo', score2: 0, venue: '瓜達拉哈拉·阿克隆體育場', status: 'completed',
      goals: [
        { min: 76, team: 1, scorer: 'Daniel Muñoz', assist: 'Luis Díaz', detail: 'Córdoba 禁區內做牆，Muñoz 右路插上禁區內勁射入網，哥倫比亞1-0打破僵局！哥倫比亞2連勝晉級32強' }
      ],
      cards: [
        { min: 56, team: 1, player: 'Jhon Lucumi', card: 'yellow', detail: 'serious foul play' }
      ],
      stats: {
        possession: [64, 36],
        shots: [20, 8],
        shotsOnTarget: [9, 1],
        shotsOffTarget: [5, 5],
        shotsInsideBox: [11, 4],
        shotsOutsideBox: [9, 4],
        passes: [540, 298],
        passCompleted: [473, 224],
        passAccuracy: [87.6, 75.2],
        crosses: [18, 10],
        crossesCompleted: [5, 2],
        corners: [5, 4],
        freeKicks: [14, 16],
        fouls: [12, 16],
        offsides: [7, 0],
        yellowCards: [2, 1],
        redCards: [0, 0],
        forcedTurnovers: [28, 32],
        pressingApplied: [220, 250]
      }
    },

    // === 6月24日 ===
    { date: '2026-06-24', time: '15:00 ET', group: 'B', team1: 'Switzerland', score1: 2, team2: 'Canada', score2: 1, venue: '溫哥華·BC Place', status: 'completed',
      goals: [
        { min: 46, team: 1, scorer: 'Ruben Vargas', assist: 'Johan Manzambi', detail: '下半場開場46秒，Vargas 禁區內接 Manzambi 妙傳推射入網，瑞士1-0領先' },
        { min: 57, team: 1, scorer: 'Johan Manzambi', assist: 'Breel Embolo', detail: 'Embolo 左路突破傳中，Manzambi 禁區中央推射破門，瑞士2-0' },
        { min: 76, team: 2, scorer: 'Promise David', assist: 'Nathan Saliba', detail: 'Saliba 右路傳中，David 禁區內搶點射門入網，加拿大追回一球' }
      ],
      cards: [
        { min: 31, team: 1, player: 'Granit Xhaka', card: 'yellow', detail: 'unsporting behavior' },
        { min: 31, team: 2, player: 'Cyle Larin', card: 'yellow', detail: 'unsporting behavior' },
        { min: 87, team: 2, player: 'Liam Millar', card: 'yellow', detail: 'serious foul play' }
      ],
      stats: {
        possession: [62, 38],
        shots: [14, 10],
        shotsOnTarget: [5, 4],
        shotsOffTarget: [6, 4],
        shotsInsideBox: [8, 6],
        shotsOutsideBox: [6, 4],
        passes: [510, 340],
        passCompleted: [450, 270],
        passAccuracy: [88.2, 79.4],
        crosses: [18, 16],
        crossesCompleted: [5, 4],
        corners: [6, 5],
        freeKicks: [14, 16],
        fouls: [14, 15],
        offsides: [2, 3],
        yellowCards: [1, 2],
        redCards: [0, 0],
        forcedTurnovers: [28, 32],
        pressingApplied: [220, 260]
      }
    },
    { date: '2026-06-24', time: '15:00 ET', group: 'B', team1: 'Bosnia and Herzegovina', score1: 3, team2: 'Qatar', score2: 1, venue: '西雅圖·流明球場', status: 'completed',
      goals: [
        { min: 29, team: 1, scorer: 'Kerim Alajbegovic', assist: 'Ivan Basic', detail: 'Basic 右路低平球傳中，Alajbegovic 禁區中央推射入網，波赫1-0' },
        { min: 34, team: 1, scorer: 'Sultan Al Brake (OG)', detail: 'Basic 角球開出，Al Brake 頭球解圍不慎頂入自家大門，波赫2-0' },
        { min: 42, team: 2, scorer: 'Hassan Al-Haydos', assist: 'Edmilson Junior', detail: 'Junior 斜傳禁區，Al-Haydos 禁區內射門入網，卡達追回一球' },
        { min: 80, team: 1, scorer: 'Ermin Mahmić', assist: 'Dennis Hadžikadunić', detail: 'Hadžikadunić 助攻，Mahmić 禁區內射門入網，波赫3-1鎖定勝局' }
      ],
      cards: [
        { min: 78, team: 2, player: 'Ahmed Fathy', card: 'yellow', detail: 'serious foul play' },
        { min: 82, team: 1, player: 'Ermin Mahmić', card: 'yellow', detail: '犯規' }
      ],
      stats: {
        possession: [55, 45],
        shots: [14, 10],
        shotsOnTarget: [5, 3],
        shotsOffTarget: [6, 4],
        shotsInsideBox: [8, 5],
        shotsOutsideBox: [6, 5],
        passes: [420, 360],
        passCompleted: [350, 290],
        passAccuracy: [83.3, 80.6],
        crosses: [16, 14],
        crossesCompleted: [4, 3],
        corners: [7, 5],
        freeKicks: [14, 16],
        fouls: [14, 13],
        offsides: [2, 3],
        yellowCards: [1, 1],
        redCards: [0, 0],
        forcedTurnovers: [28, 32],
        pressingApplied: [230, 240]
      }
    },
    { date: '2026-06-24', time: '18:00 ET', group: 'C', team1: 'Scotland', score1: 0, team2: 'Brazil', score2: 3, venue: '邁阿密·硬石體育場', status: 'completed',
      goals: [
        { min: 7, team: 2, scorer: 'Vinícius Júnior', assist: 'Rayan', detail: 'Rayan 攔截 McKenna 傳球，Vinicius 過掉門將 Gunn 後輕鬆推射空門入網' },
        { min: 45, team: 2, scorer: 'Vinícius Júnior', assist: 'Bruno Guimarães', detail: 'Guimarães 右路傳中，Vinicius 禁區內頭槌破門梅開二度，成為24年來首位世界盃前三場皆有進球的巴西球員' },
        { min: 60, team: 2, scorer: 'Matheus Cunha', assist: 'Bruno Guimarães', detail: 'Guimarães 禁區邊緣短傳，Cunha 第一時間射入右下角，個人本屆第3球' }
      ],
      cards: [
        { min: 39, team: 1, player: 'Andy Robertson', card: 'yellow', detail: '拉倒 Vinícius 阻止反擊' },
        { min: 55, team: 1, player: 'Scott McKenna', card: 'yellow', detail: '犯規' }
      ],
      stats: {
        possession: [38, 62],
        shots: [13, 20],
        shotsOnTarget: [4, 7],
        shotsOffTarget: [6, 9],
        shotsInsideBox: [7, 13],
        shotsOutsideBox: [6, 7],
        passes: [320, 560],
        passCompleted: [250, 500],
        passAccuracy: [78.1, 89.3],
        crosses: [12, 22],
        crossesCompleted: [3, 7],
        corners: [3, 8],
        freeKicks: [14, 12],
        fouls: [14, 10],
        offsides: [1, 3],
        yellowCards: [2, 0],
        redCards: [0, 0],
        forcedTurnovers: [28, 32],
        pressingApplied: [220, 250]
      }
    },
    { date: '2026-06-24', time: '18:00 ET', group: 'C', team1: 'Morocco', score1: 4, team2: 'Haiti', score2: 2, venue: '亞特蘭大·梅賽德斯-賓士體育場', status: 'completed',
      goals: [
        { min: 10, team: 2, scorer: 'Yassine Bounou (OG)', detail: 'Bounou 烏龍球，Haiti 意外領先' },
        { min: 39, team: 1, scorer: 'Achraf Hakimi', detail: '禁區內射門入網，摩洛哥扳平比分' },
        { min: 43, team: 2, scorer: 'Wilson Isidor', assist: 'Jean Duverne', detail: 'Duverne 助攻，禁區內射門，Haiti 再度領先' },
        { min: 45, team: 1, scorer: 'Ismael Saibari', assist: 'Achraf Hakimi', detail: 'Hakimi 助攻，Saibari 禁區內推射入網，上半場傷停補時扳平 2-2' },
        { min: 78, team: 1, scorer: 'Soufiane Rahimi', assist: 'Chadi Riad', detail: 'Riad 助攻，Rahimi 禁區內射門入網，摩洛哥 3-2 反超' },
        { min: 89, team: 1, scorer: 'Yassine G.', assist: 'Soufiane Rahimi', detail: 'Rahimi 助攻，Yassine 禁區內射門入網，摩洛哥 4-2 鎖定勝局' }
      ],
      cards: [
        { min: 79, team: 2, player: 'Duckens Nazon', card: 'yellow', detail: '犯規' },
        { min: 79, team: 2, player: 'Johny Placide', card: 'yellow', detail: '犯規' },
        { min: 94, team: 2, player: 'J. Casimir', card: 'yellow', detail: '犯規' }
      ],
      stats: {
        possession: [58, 42],
        shots: [16, 9],
        shotsOnTarget: [7, 4],
        shotsOffTarget: [6, 3],
        shotsInsideBox: [10, 5],
        shotsOutsideBox: [6, 4],
        passes: [480, 340],
        passCompleted: [420, 270],
        passAccuracy: [87.5, 79.4],
        crosses: [20, 12],
        crossesCompleted: [6, 3],
        corners: [7, 3],
        freeKicks: [14, 16],
        fouls: [12, 16],
        offsides: [2, 3],
        yellowCards: [0, 3],
        redCards: [0, 0],
        forcedTurnovers: [30, 28],
        pressingApplied: [230, 240]
      }
    },
    { date: '2026-06-24', time: '21:00 ET', group: 'A', team1: 'Czechia', score1: 0, team2: 'Mexico', score2: 3, venue: '墨西哥城·阿茲特克體育場', status: 'completed',
      goals: [
        { min: 55, team: 2, scorer: 'Mateo Chávez', assist: 'Luis Romo', detail: '左後衛切入右路禁區推射破門' },
        { min: 61, team: 2, scorer: 'Julián Quiñones', assist: 'Jorge Sánchez', detail: '流暢配合中禁區內射門，Quiñones 本屆第二球' },
        { min: 90, team: 2, scorer: 'Álvaro Fidalgo', assist: 'Roberto Alvarado', detail: '禁區內補射入網，個人墨西哥國家隊首球' }
      ],
      cards: [
        { min: 64, team: 2, player: 'Edson Álvarez', card: 'yellow', detail: '犯規' }
      ],
      stats: {
        possession: [51, 49],
        shots: [13, 11],
        shotsOnTarget: [1, 5],
        shotsOffTarget: [8, 4],
        shotsInsideBox: [7, 6],
        shotsOutsideBox: [6, 5],
        passes: [637, 671],
        passCompleted: [325, 329],
        passAccuracy: [51.0, 49.0],
        crosses: [14, 12],
        crossesCompleted: [3, 4],
        corners: [5, 1],
        freeKicks: [12, 14],
        fouls: [9, 13],
        offsides: [1, 0],
        yellowCards: [0, 1],
        redCards: [0, 0],
        forcedTurnovers: [28, 32],
        pressingApplied: [210, 240]
      }
    },
    { date: '2026-06-24', time: '21:00 ET', group: 'A', team1: 'South Africa', score1: 1, team2: 'South Korea', score2: 0, venue: '蒙特雷·BBVA球場', status: 'completed',
      goals: [
        { min: 63, team: 1, scorer: 'Thapelo Maseko', assist: 'Tshepang Moremi', detail: 'Moremi 左路突破傳入禁區，Maseko 調整後左腳射入近柱，南非世界盃史上首次晉級淘汰賽' }
      ],
      cards: [
        { min: 40, team: 2, player: 'Jens Castrop', card: 'yellow', detail: '犯規' },
        { min: 78, team: 1, player: 'Ime Okon', card: 'yellow', detail: '戰術犯規阻止反擊' }
      ],
      stats: {
        possession: [42, 58],
        shots: [11, 13],
        shotsOnTarget: [4, 3],
        shotsOffTarget: [5, 7],
        shotsInsideBox: [6, 7],
        shotsOutsideBox: [5, 6],
        passes: [320, 480],
        passCompleted: [240, 400],
        passAccuracy: [75.0, 83.3],
        crosses: [12, 18],
        crossesCompleted: [3, 5],
        corners: [4, 6],
        freeKicks: [14, 12],
        fouls: [13, 11],
        offsides: [2, 3],
        yellowCards: [1, 1],
        redCards: [0, 0],
        forcedTurnovers: [30, 28],
        pressingApplied: [230, 200]
      }
    },

    // === 6月25日 ===
    { date: '2026-06-25', time: '16:00 ET', group: 'E', team1: 'Ecuador', score1: 2, team2: 'Germany', score2: 1, venue: '紐約/新澤西·大都會人壽體育場', status: 'completed',
      goals: [
        { min: 2, team: 2, scorer: 'Leroy Sané', assist: 'Florian Wirtz', detail: 'Wirtz 禁區左側傳球，Sané 禁區內左腳弧線球射入左下角，德國夢幻開局' },
        { min: 9, team: 1, scorer: 'Nilson Angulo', assist: 'Pedro Vite', detail: 'Vite 禁區邊緣傳球，Angulo 禁區外右腳遠射入右下角，厄瓜多迅速扳平' },
        { min: 77, team: 1, scorer: 'Gonzalo Plata', assist: 'Kevin Rodriguez', detail: '角球開出 Kevin Rodriguez 頭槌被 Neuer 撲出，Plata 跟進補射破門，厄瓜多反超！' }
      ],
      cards: [
        { min: 89, team: 2, player: 'Joshua Kimmich', card: 'yellow', detail: '戰術犯規阻止反擊' }
      ],
      stats: {
        possession: [42, 58],
        shots: [12, 14],
        shotsOnTarget: [4, 5],
        shotsOffTarget: [5, 6],
        shotsInsideBox: [7, 8],
        shotsOutsideBox: [5, 6],
        passes: [350, 520],
        passCompleted: [280, 460],
        passAccuracy: [80.0, 88.5],
        crosses: [14, 20],
        crossesCompleted: [4, 6],
        corners: [5, 7],
        freeKicks: [14, 12],
        fouls: [12, 10],
        offsides: [2, 3],
        yellowCards: [0, 1],
        redCards: [0, 0],
        forcedTurnovers: [30, 28],
        pressingApplied: [240, 220]
      }
    },
    { date: '2026-06-25', time: '16:00 ET', group: 'E', team1: 'Curaçao', score1: 0, team2: 'Ivory Coast', score2: 2, venue: '費城·林肯金融球場', status: 'completed',
      goals: [
        { min: 7, team: 2, scorer: 'Nicolas Pépé', assist: 'Yan Diomande', detail: 'Diomande 左路精準傳球，Pépé 禁區內推射入網，象牙海岸早早領先' },
        { min: 64, team: 2, scorer: 'Nicolas Pépé', assist: 'Ibrahim Sangaré', detail: 'Sangaré 助攻，Pépé 禁區內冷靜射門梅開二度，象牙海岸鎖定勝局' }
      ],
      cards: [
        { min: 35, team: 2, player: 'Nicolas Pépé', card: 'yellow', detail: '犯規' },
        { min: 75, team: 1, player: 'Juninho Bacuna', card: 'yellow', detail: '犯規' }
      ],
      stats: {
        possession: [35, 65],
        shots: [5, 14],
        shotsOnTarget: [2, 5],
        shotsOffTarget: [2, 6],
        shotsInsideBox: [3, 9],
        shotsOutsideBox: [2, 5],
        passes: [280, 540],
        passCompleted: [210, 480],
        passAccuracy: [75.0, 88.9],
        crosses: [8, 20],
        crossesCompleted: [2, 6],
        corners: [2, 7],
        freeKicks: [14, 10],
        fouls: [11, 5],
        offsides: [1, 3],
        yellowCards: [1, 1],
        redCards: [0, 0],
        forcedTurnovers: [28, 36],
        pressingApplied: [180, 240]
      }
    },
    { date: '2026-06-25', time: '19:00 ET', group: 'F', team1: 'Japan', score1: 1, team2: 'Sweden', score2: 1, venue: '達拉斯·AT&T體育場', status: 'completed',
      goals: [
        { min: 36, team: 1, scorer: 'Daizen Maeda', assist: 'Keito Nakamura', detail: 'Nakamura 左路突破傳中，Maeda 禁區內搶點推射入網，日本率先破門' },
        { min: 72, team: 2, scorer: 'Anthony Elanga', assist: 'Alexander Isak', detail: 'Isak 禁區邊緣妙傳，Elanga 禁區內低射遠角入網，瑞典扳平比分' }
      ],
      cards: [
      ],
      stats: {
        possession: [50, 50],
        shots: [12, 10],
        shotsOnTarget: [4, 3],
        shotsOffTarget: [5, 4],
        shotsInsideBox: [7, 6],
        shotsOutsideBox: [5, 4],
        passes: [420, 380],
        passCompleted: [360, 310],
        passAccuracy: [85.7, 81.6],
        crosses: [14, 16],
        crossesCompleted: [4, 3],
        corners: [5, 6],
        freeKicks: [14, 12],
        fouls: [12, 10],
        offsides: [2, 1],
        yellowCards: [0, 0],
        redCards: [0, 0],
        forcedTurnovers: [28, 32],
        pressingApplied: [220, 250]
      }
    },
    { date: '2026-06-25', time: '19:00 ET', group: 'F', team1: 'Tunisia', score1: 1, team2: 'Netherlands', score2: 3, venue: '堪薩斯城·箭頭體育場', status: 'completed',
      goals: [
        { min: 3, team: 2, scorer: 'Ellyes Skhiri (OG)', detail: 'Ellyes Skhiri 左腳解圍不慎將球踢入自家大門，荷蘭早早領先' },
        { min: 7, team: 2, scorer: 'Brian Brobbey', assist: 'Cody Gakpo', detail: 'Gakpo 禁區邊緣傳球，Brobbey 禁區中央推射入網，荷蘭2-0' },
        { min: 83, team: 2, scorer: 'Jan van Hecke', assist: 'Denzel Dumfries', detail: 'Dumfries 角球開出，van Hecke 禁區內頭槌破門，荷蘭3-0鎖定勝局' },
        { min: 89, team: 1, scorer: 'Hazem Mastouri', assist: 'Hannibal Mejbri', detail: 'Mejbri 妙傳，Mastouri 禁區內轉身射門入網，突尼西亞追回一球' }
      ],
      cards: [
      ],
      stats: {
        possession: [29, 71],
        shots: [10, 21],
        shotsOnTarget: [4, 8],
        shotsOffTarget: [3, 7],
        shotsInsideBox: [6, 12],
        shotsOutsideBox: [4, 9],
        passes: [280, 630],
        passCompleted: [210, 560],
        passAccuracy: [75.0, 88.9],
        crosses: [8, 22],
        crossesCompleted: [2, 8],
        corners: [4, 6],
        freeKicks: [12, 10],
        fouls: [11, 9],
        offsides: [2, 1],
        yellowCards: [0, 0],
        redCards: [0, 0],
        forcedTurnovers: [24, 36],
        pressingApplied: [180, 240]
      }
    },
    { date: '2026-06-25', time: '22:00 ET', group: 'D', team1: 'Paraguay', score1: 0, team2: 'Australia', score2: 0, venue: '舊金山·李維斯體育場', status: 'completed',
      goals: [],
      cards: [
        { min: 38, team: 1, player: 'Júnior Alonso', card: 'yellow', detail: '戰術犯規' },
        { min: 62, team: 2, player: 'Jordan Bos', card: 'yellow', detail: '犯規' },
        { min: 78, team: 1, player: 'Diego Gómez', card: 'yellow', detail: '犯規' }
      ],
      stats: {
        possession: [48, 52],
        shots: [8, 10],
        shotsOnTarget: [2, 3],
        shotsOffTarget: [4, 5],
        shotsInsideBox: [4, 6],
        shotsOutsideBox: [4, 4],
        passes: [360, 420],
        passCompleted: [290, 350],
        passAccuracy: [80.6, 83.3],
        crosses: [12, 16],
        crossesCompleted: [3, 4],
        corners: [3, 5],
        freeKicks: [14, 12],
        fouls: [14, 12],
        offsides: [2, 1],
        yellowCards: [2, 1],
        redCards: [0, 0],
        forcedTurnovers: [28, 32],
        pressingApplied: [200, 240]
      }
    },
    { date: '2026-06-25', time: '22:00 ET', group: 'D', team1: 'Turkey', score1: 3, team2: 'USA', score2: 2, venue: '洛杉磯·SoFi體育場', status: 'completed',
      goals: [
        { min: 3, team: 2, scorer: 'Auston Trusty', assist: 'Sebastian Berhalter', detail: '角球二點機會，Trusty 遠柱第一時間射門入網，個人國家隊首球' },
        { min: 10, team: 1, scorer: 'Arda Güler', assist: 'Barış Yılmaz', detail: 'McKenzie 防守失誤被 Yılmaz 突破，Güler 14碼處射門入網，土耳其世界盃首球' },
        { min: 31, team: 1, scorer: 'Orkun Kökçü', assist: 'Kenan Yıldız', detail: '禁區邊緣接 Yıldız 傳球後起腳射門入網，土耳其反超比分' },
        { min: 49, team: 2, scorer: 'Sebastian Berhalter', assist: 'Gio Reyna', detail: '角球開出後禁區混戰，Berhalter 射門入網扳平比分' },
        { min: 90, team: 1, scorer: 'Kaan Ayhan', assist: 'Can Uzun', detail: '傷停補時第8分鐘，Uzun 禁區邊緣傳球，Ayhan 門前推射入網絕殺！' }
      ],
      cards: [
        { min: 19, team: 2, player: 'Sebastian Berhalter', card: 'yellow', detail: '對 Özcan 犯規' }
      ],
      stats: {
        possession: [47, 53],
        shots: [9, 18],
        shotsOnTarget: [4, 7],
        shotsOffTarget: [3, 8],
        shotsInsideBox: [5, 11],
        shotsOutsideBox: [4, 7],
        passes: [433, 471],
        passCompleted: [333, 400],
        passAccuracy: [77.0, 85.0],
        crosses: [10, 22],
        crossesCompleted: [3, 7],
        corners: [2, 9],
        freeKicks: [12, 14],
        fouls: [13, 13],
        offsides: [2, 5],
        yellowCards: [0, 1],
        redCards: [0, 0],
        forcedTurnovers: [32, 28],
        pressingApplied: [240, 200]
      }
    },

    // === 6月26日 ===
    { date: '2026-06-26', time: '15:00 ET', group: 'I', team1: 'Norway', score1: 1, team2: 'France', score2: 4, venue: '波士頓·吉列體育場', status: 'completed',
      goals: [
        { min: 7, team: 2, scorer: 'Ousmane Dembélé', detail: '禁區內射門入網，法國夢幻開局' },
        { min: 20, team: 2, scorer: 'Ousmane Dembélé', assist: 'Kylian Mbappé', detail: 'Mbappé 禁區邊緣傳球，Dembélé 禁區左側射門得分梅開二度' },
        { min: 21, team: 1, scorer: 'Thelo Aasgaard', assist: 'Andreas Schjelderup', detail: 'Schjelderup 禁區邊緣傳球，Aasgaard 禁區內射入左下角，挪威迅速追回一球' },
        { min: 32, team: 2, scorer: 'Ousmane Dembélé', assist: 'Aurélien Tchouaméni', detail: 'Tchouaméni 傳球，Dembélé 禁區內射門入網完成帽子戲法' },
        { min: 90, team: 2, scorer: 'Désiré Doué', assist: 'Bradley Barcola', detail: 'Barcola 左路傳中，Doué 禁區內頭槌破門鎖定勝局' }
      ],
      cards: [
      ],
      stats: {
        possession: [43, 57],
        shots: [20, 28],
        shotsOnTarget: [4, 9],
        shotsOffTarget: [8, 12],
        shotsInsideBox: [10, 14],
        shotsOutsideBox: [10, 14],
        passes: [419, 558],
        passCompleted: [344, 480],
        passAccuracy: [82.1, 86.0],
        crosses: [12, 20],
        crossesCompleted: [3, 7],
        corners: [4, 8],
        freeKicks: [12, 14],
        fouls: [9, 11],
        offsides: [2, 3],
        yellowCards: [0, 0],
        redCards: [0, 0],
        forcedTurnovers: [28, 32],
        pressingApplied: [220, 240]
      }
    },
    { date: '2026-06-26', time: '15:00 ET', group: 'I', team1: 'Senegal', score1: 5, team2: 'Iraq', score2: 0, venue: '多倫多·BMO球場', status: 'completed',
      goals: [
        { min: 4, team: 1, scorer: 'Habib Diarra', assist: 'Abdoulaye Seck', detail: '角球開出，Seck 頭槌被擋，Diarra 門前補射入網' },
        { min: 56, team: 1, scorer: 'Ismaila Sarr', detail: 'Zidane Iqbal 後場失誤，Sarr 斷球後輕鬆推射入網，個人本屆第3球' },
        { min: 59, team: 1, scorer: 'Pape Gueye', detail: '替補上場僅89秒，禁區外遠射弧線球破網' },
        { min: 71, team: 1, scorer: 'Pape Gueye', detail: '禁區內凌空半射門得分，Gueye 梅開二度' },
        { min: 82, team: 1, scorer: 'Iliman Ndiaye', detail: '禁區外勁射入網，塞內加爾5-0鎖定勝局' }
      ],
      cards: [
        { min: 13, team: 2, player: 'Rebin Sulaka', card: 'red', detail: '禁區內拉倒 Sadio Mané 破壞明顯得分機會，VAR 確認後直接紅牌' }
      ],
      stats: {
        possession: [42, 58],
        shots: [16, 5],
        shotsOnTarget: [7, 0],
        shotsOffTarget: [5, 2],
        shotsInsideBox: [9, 2],
        shotsOutsideBox: [7, 3],
        passes: [350, 480],
        passCompleted: [280, 410],
        passAccuracy: [80.0, 85.4],
        crosses: [14, 10],
        crossesCompleted: [4, 2],
        corners: [7, 2],
        freeKicks: [12, 14],
        fouls: [10, 14],
        offsides: [2, 1],
        yellowCards: [0, 0],
        redCards: [0, 1],
        forcedTurnovers: [32, 28],
        pressingApplied: [240, 200]
      }
    },
    { date: '2026-06-26', time: '20:00 ET', group: 'H', team1: 'Cape Verde', score1: 0, team2: 'Saudi Arabia', score2: 0, venue: '休斯頓·NRG體育場', status: 'completed',
      goals: [],
      cards: [
        { min: 81, team: 2, player: 'Firas Al Buraikan', card: 'yellow', detail: '犯規' },
        { min: 90, team: 2, player: 'Moteb Al Harbi', card: 'yellow', detail: '犯規' },
        { min: 90, team: 2, player: 'Nawaf Bu Washl', card: 'yellow', detail: '犯規' },
        { min: 90, team: 1, player: 'Steven Moreira', card: 'yellow', detail: '犯規' },
        { min: 90, team: 1, player: 'Wagner Pina', card: 'yellow', detail: '犯規' }
      ],
      stats: {
        possession: [51, 49],
        shots: [15, 7],
        shotsOnTarget: [2, 3],
        shotsOffTarget: [8, 3],
        shotsInsideBox: [8, 4],
        shotsOutsideBox: [7, 3],
        passes: [320, 310],
        passCompleted: [250, 240],
        passAccuracy: [78.1, 77.4],
        crosses: [14, 10],
        crossesCompleted: [3, 2],
        corners: [4, 2],
        freeKicks: [12, 16],
        fouls: [10, 16],
        offsides: [2, 0],
        yellowCards: [2, 3],
        redCards: [0, 0],
        forcedTurnovers: [28, 32],
        pressingApplied: [200, 240]
      }
    },
    { date: '2026-06-26', time: '20:00 ET', group: 'H', team1: 'Uruguay', score1: 0, team2: 'Spain', score2: 1, venue: '瓜達拉哈拉·阿克隆體育場', status: 'completed',
      goals: [
        { min: 42, team: 2, scorer: 'Alex Baena', assist: 'Marcos Llorente', detail: 'Muslera 撲救失誤，球滾入遠角，西班牙打破僵局' }
      ],
      cards: [
        { min: 90, team: 1, player: 'Nicolás De La Cruz', card: 'yellow', detail: '犯規' },
        { min: 90, team: 1, player: 'Agustín Canobbio', card: 'red', detail: '惡意鏟球犯規，直接紅牌' }
      ],
      stats: {
        possession: [33, 67],
        shots: [5, 6],
        shotsOnTarget: [1, 1],
        shotsOffTarget: [3, 4],
        shotsInsideBox: [3, 4],
        shotsOutsideBox: [2, 2],
        passes: [301, 623],
        passCompleted: [228, 553],
        passAccuracy: [75.7, 88.8],
        crosses: [16, 12],
        crossesCompleted: [1, 3],
        corners: [1, 6],
        freeKicks: [14, 14],
        fouls: [14, 14],
        offsides: [5, 2],
        yellowCards: [3, 1],
        redCards: [1, 0],
        forcedTurnovers: [28, 32],
        pressingApplied: [220, 240]
      }
    },
    { date: '2026-06-26', time: '23:00 ET', group: 'G', team1: 'Egypt', score1: 1, team2: 'Iran', score2: 1, venue: '西雅圖·流明球場', status: 'completed',
      goals: [
        { min: 5, team: 1, scorer: 'Mahmoud Saber', assist: 'Mohamed Salah', detail: 'Salah 禁區內強勢表現，Saber 射門穿過 Beiranvand 雙腿入網，埃及早早領先「同志驕傲之戰」' },
        { min: 14, team: 2, scorer: 'Ramin Rezaeian', assist: null, detail: '禁區內冷靜射門入網，伊朗迅速扳平比分' }
      ],
      cards: [
        { min: 14, team: 1, player: 'Mohamed Abdelmonem', card: 'yellow', detail: '犯規' },
        { min: 19, team: 2, player: 'Hossein Kanaani', card: 'yellow', detail: '犯規' },
        { min: 42, team: 1, player: 'Yasser Ibrahim', card: 'yellow', detail: '犯規' },
        { min: 43, team: 2, player: 'Ali Nemati', card: 'yellow', detail: '犯規' },
        { min: 90, team: 2, player: 'Shoja Khalilzadeh', card: 'yellow', detail: 'VAR 確認越位後進球無效' }
      ],
      stats: {
        possession: [45, 55],
        shots: [8, 12],
        shotsOnTarget: [3, 4],
        shotsOffTarget: [3, 5],
        shotsInsideBox: [5, 7],
        shotsOutsideBox: [3, 5],
        passes: [380, 460],
        passCompleted: [310, 400],
        passAccuracy: [81.6, 87.0],
        crosses: [12, 18],
        crossesCompleted: [3, 5],
        corners: [4, 6],
        freeKicks: [14, 12],
        fouls: [12, 14],
        offsides: [2, 3],
        yellowCards: [2, 3],
        redCards: [0, 0],
        forcedTurnovers: [26, 30],
        pressingApplied: [200, 240]
      }
    },
    { date: '2026-06-26', time: '23:00 ET', group: 'G', team1: 'New Zealand', score1: 1, team2: 'Belgium', score2: 5, venue: '溫哥華·BC Place', status: 'completed',
      goals: [
        { min: 28, team: 2, scorer: 'Leandro Trossard', assist: 'Kevin De Bruyne', detail: 'De Bruyne 傳中，Trossard 門前近距離搶點破門，比利時世界盃近四年首個非烏龍進球' },
        { min: 50, team: 2, scorer: 'Leandro Trossard', assist: 'Hans Vanaken', detail: '胸部停球後凌空抽射入網，Trossard 梅開二度' },
        { min: 66, team: 2, scorer: 'Kevin De Bruyne', assist: 'Leandro Trossard', detail: '禁區邊緣低射入左下角，34歲成爲比利時世界盃史上最年長進球者' },
        { min: 84, team: 1, scorer: 'Elijah Just', assist: null, detail: '角球混戰中門前射門入網，Just 本屆世界盃第3球' },
        { min: 86, team: 2, scorer: 'Romelu Lukaku', assist: 'Nicolas Raskin', detail: 'Raskin 精準傳中，Lukaku 頭槌破門，以世界盃第6球成爲比利時世界盃歷史射手王' },
        { min: 90, team: 2, scorer: 'Alexis Saelemaekers', assist: 'Romelu Lukaku', detail: '傷停補時低射入網，比利時5-1鎖定勝局' }
      ],
      cards: [
        { min: 46, team: 1, player: 'Marko Stamenic', card: 'yellow', detail: '絆倒犯規' },
        { min: 56, team: 1, player: 'Elijah Just', card: 'yellow', detail: '拉人犯規' }
      ],
      stats: {
        possession: [28, 72],
        shots: [6, 25],
        shotsOnTarget: [2, 12],
        shotsOffTarget: [3, 8],
        shotsInsideBox: [3, 16],
        shotsOutsideBox: [3, 9],
        passes: [260, 680],
        passCompleted: [190, 610],
        passAccuracy: [73.1, 89.7],
        crosses: [8, 28],
        crossesCompleted: [2, 9],
        corners: [2, 10],
        freeKicks: [14, 12],
        fouls: [14, 10],
        offsides: [1, 3],
        yellowCards: [2, 0],
        redCards: [0, 0],
        forcedTurnovers: [28, 32],
        pressingApplied: [200, 260]
      }
    },

    // === 6月27日 ===
    { date: '2026-06-27', time: '17:00 ET', group: 'L', team1: 'Panama', score1: 0, team2: 'England', score2: 2, venue: '東盧瑟福·大都會人壽體育場', status: 'completed',
      goals: [
        { min: 62, team: 2, scorer: 'Jude Bellingham', assist: 'Bukayo Saka', detail: 'Saka 開出角球，Bellingham 繞過防守球員近距離破門，英格蘭1-0打破僵局' },
        { min: 67, team: 2, scorer: 'Harry Kane', assist: 'Jude Bellingham', detail: 'Bellingham 左路切入傳中，Kane 頭槌頂入左上角，以11球超越 Gary Lineker 成爲英格蘭世界盃歷史射手王' }
      ],
      cards: [
        { min: 53, team: 1, player: 'José Fajardo', card: 'yellow', detail: 'unsporting behavior' },
        { min: 60, team: 2, player: 'Jarell Quansah', card: 'yellow', detail: 'serious foul play' },
        { min: 83, team: 1, player: 'Andrés Andrade', card: 'yellow', detail: 'unsporting behavior' },
        { min: 84, team: 1, player: 'Andrés Andrade', card: 'red', detail: 'second yellow card — unsporting behavior' }
      ],
      stats: {
        possession: [33, 67],
        shots: [13, 17],
        shotsOnTarget: [2, 6],
        shotsOffTarget: [7, 7],
        shotsInsideBox: [6, 10],
        shotsOutsideBox: [7, 7],
        passes: [280, 620],
        passCompleted: [210, 540],
        passAccuracy: [75.0, 87.1],
        crosses: [10, 22],
        crossesCompleted: [2, 7],
        corners: [3, 7],
        freeKicks: [16, 14],
        fouls: [16, 13],
        offsides: [2, 3],
        yellowCards: [2, 1],
        redCards: [1, 0],
        forcedTurnovers: [26, 30],
        pressingApplied: [200, 240]
      }
    },
    { date: '2026-06-27', time: '17:00 ET', group: 'L', team1: 'Croatia', score1: 2, team2: 'Ghana', score2: 1, venue: '費城·林肯金融體育場', status: 'completed',
      goals: [
        { min: 31, team: 1, scorer: 'Petar Sučić', assist: null, detail: '禁區外遠射破門，世界波！Sučić 爲克羅埃西亞首開紀錄' },
        { min: 73, team: 2, scorer: 'Derrick Luckassen', assist: 'Ernest Nuamah', detail: 'Nuamah 自由球開出，Luckassen 禁區內凌空抽射扳平比分，經 VAR 確認進球有效' },
        { min: 83, team: 1, scorer: 'Nikola Vlašić', assist: 'Luka Modrić', detail: 'Modrić 精準傳中，Vlašić 頭槌破門，克羅埃西亞2-1再次領先！Modrić 以200場國家隊出賽成為史上最年長助攻者' }
      ],
      cards: [
        { min: 60, team: 1, player: 'Marin Pongračić', card: 'yellow', detail: 'serious foul play' },
        { min: 75, team: 2, player: 'Jonas Adjetey', card: 'yellow', detail: 'unsporting behavior' }
      ],
      stats: {
        possession: [53, 47],
        shots: [8, 6],
        shotsOnTarget: [4, 1],
        shotsOffTarget: [3, 4],
        shotsInsideBox: [5, 3],
        shotsOutsideBox: [3, 3],
        passes: [420, 360],
        passCompleted: [370, 290],
        passAccuracy: [88.1, 80.6],
        crosses: [12, 14],
        crossesCompleted: [3, 3],
        corners: [3, 2],
        freeKicks: [12, 16],
        fouls: [9, 13],
        offsides: [1, 2],
        yellowCards: [1, 1],
        redCards: [0, 0],
        forcedTurnovers: [28, 30],
        pressingApplied: [220, 240]
      }
    },
    { date: '2026-06-27', time: '19:30 ET', group: 'K', team1: 'Colombia', score1: 0, team2: 'Portugal', score2: 0, venue: '邁阿密·硬石體育場', status: 'completed',
      goals: [],
      cards: [
        { min: 54, team: 1, player: 'Daniel Muñoz', card: 'yellow', detail: '中場戰術犯規' },
        { min: 72, team: 1, player: 'Santiago Arias', card: 'yellow', detail: '阻止反擊犯規' }
      ],
      stats: {
        possession: [55, 45],
        shots: [24, 13],
        shotsOnTarget: [6, 2],
        shotsOffTarget: [12, 7],
        shotsInsideBox: [14, 7],
        shotsOutsideBox: [10, 6],
        passes: [480, 400],
        passCompleted: [420, 340],
        passAccuracy: [87.5, 85.0],
        crosses: [22, 14],
        crossesCompleted: [6, 4],
        corners: [5, 2],
        freeKicks: [14, 10],
        fouls: [12, 6],
        offsides: [3, 2],
        yellowCards: [2, 0],
        redCards: [0, 0],
        forcedTurnovers: [30, 28],
        pressingApplied: [220, 240]
      }
    },
    { date: '2026-06-27', time: '19:30 ET', group: 'K', team1: 'DR Congo', score1: 3, team2: 'Uzbekistan', score2: 1, venue: '休斯頓·NRG體育場', status: 'completed',
      goals: [
        { min: 10, team: 2, scorer: 'Eldor Shomurodov', detail: 'Uzbekistan 後場長傳，Shomurodov 挑射越過門將入網，DR Congo 後防失誤導致丟球' },
        { min: 68, team: 1, scorer: 'Yoane Wissa', detail: '12碼罰球 — Abdukodir Khusanov 禁區內犯規絆倒 Wissa，Wissa 親自操刀射入左下角，門將撲錯方向' },
        { min: 78, team: 1, scorer: 'Fiston Mayele', assist: 'Chancel Mbemba', detail: '禁區內混戰中 Mayele 捅射入網，DR Congo 反超比分' },
        { min: 90, team: 1, scorer: 'Yoane Wissa', assist: 'Theo Bongonda', detail: '禁區邊緣勁射遠角入網，Wissa 梅開二度鎖定勝局' }
      ],
      cards: [
        { min: 65, team: 2, player: 'Abdukodir Khusanov', card: 'yellow', detail: '禁區內絆倒 Wissa 犯規導致罰球' }
      ],
      stats: {
        possession: [45, 55],
        shots: [11, 9],
        shotsOnTarget: [5, 3],
        shotsOffTarget: [4, 4],
        shotsInsideBox: [7, 5],
        shotsOutsideBox: [4, 4],
        passes: [380, 460],
        passCompleted: [310, 390],
        passAccuracy: [81.6, 84.8],
        crosses: [14, 16],
        crossesCompleted: [4, 5],
        corners: [4, 5],
        freeKicks: [14, 12],
        fouls: [12, 14],
        offsides: [2, 3],
        yellowCards: [0, 1],
        redCards: [0, 0],
        forcedTurnovers: [28, 32],
        pressingApplied: [210, 250]
      }
    },
    { date: '2026-06-27', time: '22:00 ET', group: 'J', team1: 'Algeria', score1: 2, team2: 'Austria', score2: 2, venue: '堪薩斯城·箭頭體育場', status: 'completed',
      goals: [
        { min: 28, team: 2, scorer: 'Marko Arnautović', detail: '禁區邊緣接到傳球後轉身抽射入網，奧地利率先破門' },
        { min: 45, team: 1, scorer: 'Rafik Belghali', assist: 'Riyad Mahrez', detail: 'Belghali 禁區內接 Mahrez 傳球後勁射入網，阿爾及利亞扳平' },
        { min: 55, team: 2, scorer: 'Marcel Sabitzer', assist: 'David Alaba', detail: 'Alaba 角球傳中，Sabitzer 頭槌破門，奧地利再度領先' },
        { min: 60, team: 1, scorer: 'Riyad Mahrez', detail: '禁區外自由球直接射門入死角，阿爾及利亞再次扳平' }
      ],
      cards: [
        { min: 17, team: 2, player: 'Konrad Laimer', card: 'yellow', detail: '中場戰術犯規' }
      ],
      stats: {
        possession: [48, 52],
        shots: [10, 12],
        shotsOnTarget: [4, 5],
        shotsOffTarget: [4, 4],
        shotsInsideBox: [5, 7],
        shotsOutsideBox: [5, 5],
        passes: [420, 470],
        passCompleted: [350, 400],
        passAccuracy: [83.3, 85.1],
        crosses: [14, 18],
        crossesCompleted: [4, 5],
        corners: [4, 6],
        freeKicks: [14, 12],
        fouls: [12, 14],
        offsides: [1, 2],
        yellowCards: [0, 1],
        redCards: [0, 0],
        forcedTurnovers: [28, 30],
        pressingApplied: [200, 240]
      }
    },
    { date: '2026-06-27', time: '22:00 ET', group: 'J', team1: 'Jordan', score1: 1, team2: 'Argentina', score2: 3, venue: '達拉斯·AT&T體育場', status: 'completed',
      goals: [
        { min: 19, team: 2, scorer: 'Giovani Lo Celso', detail: '禁區外自由球直接射入遠柱上角，Jordan 門將站位失誤' },
        { min: 31, team: 2, scorer: 'Lautaro Martínez', detail: '12碼罰球 — VAR 確認後判罰，Martínez 冷靜射入左下角，世界盃首球' },
        { min: 79, team: 2, scorer: 'Lionel Messi', detail: '禁區內接球後左腳弧線球射入遠角，Messi 成爲史上首位連續7場世界盃進球的球員！世界盃生涯第19球' },
        { min: 90, team: 1, scorer: 'Mousa Tamari', assist: 'Mohammad Abu Zrayq', detail: 'Zrayq 左路傳中，Tamari 禁區內射門入網，Jordan 扳回一球' }
      ],
      cards: [
        { min: 18, team: 1, player: 'Mohannad Abu Taha', card: 'yellow', detail: '中場犯規' },
        { min: 44, team: 1, player: 'Ali Azaizeh', card: 'yellow', detail: '戰術犯規' },
        { min: 67, team: 1, player: 'Nizar Al-Rashdan', card: 'yellow', detail: '阻止反擊犯規' }
      ],
      stats: {
        possession: [27, 73],
        shots: [5, 12],
        shotsOnTarget: [1, 4],
        shotsOffTarget: [3, 5],
        shotsInsideBox: [3, 7],
        shotsOutsideBox: [2, 5],
        passes: [210, 580],
        passCompleted: [150, 520],
        passAccuracy: [71.4, 89.7],
        crosses: [6, 18],
        crossesCompleted: [1, 6],
        corners: [2, 5],
        freeKicks: [16, 10],
        fouls: [13, 6],
        offsides: [1, 3],
        yellowCards: [3, 0],
        redCards: [0, 0],
        forcedTurnovers: [30, 28],
        pressingApplied: [200, 220]
      }
    },

    // ===== 32強賽 (Round of 32) =====

    // === 6月28日 ===
    { date: '2026-06-28', time: '19:00 ET', group: 'R32', team1: 'South Africa', score1: 0, team2: 'Canada', score2: 1, venue: '洛杉磯·SoFi體育場', status: 'completed',
      goals: [
        { min: 90, team: 2, scorer: 'Stephen Eustáquio', assist: null, detail: '90+2分鐘禁區外凌空抽射入網！效力於洛杉磯FC的 Eustáquio 在主場球迷面前完成絕殺，加拿大史上首次晉級世界盃16強' }
      ],
      cards: [
      ],
      stats: {
        possession: [42, 58],
        shots: [9, 16],
        shotsOnTarget: [3, 5],
        shotsOffTarget: [4, 7],
        shotsInsideBox: [5, 9],
        shotsOutsideBox: [4, 7],
        passes: [310, 490],
        passCompleted: [240, 430],
        passAccuracy: [77.4, 87.8],
        crosses: [12, 22],
        crossesCompleted: [3, 6],
        corners: [2, 7],
        freeKicks: [16, 14],
        fouls: [14, 12],
        offsides: [2, 3],
        yellowCards: [0, 1],
        redCards: [0, 0],
        forcedTurnovers: [30, 28],
        pressingApplied: [240, 220]
      }
    },

    // === 6月29日 ===
    { date: '2026-06-29', time: '13:00 ET', group: 'R32', team1: 'Brazil', score1: 2, team2: 'Japan', score2: 1, venue: '休斯頓·NRG體育場', status: 'completed',
      goals: [
        { min: 29, team: 2, scorer: 'Kaishu Sano', detail: '禁區邊緣射門入網，Danilo 傳球失誤被攔截，Casemiro 防守慢半拍，Sano 輕鬆破門' },
        { min: 56, team: 1, scorer: 'Casemiro', assist: 'Gabriel Magalhães', detail: 'Gabriel 左路傳中，Casemiro 遠柱頭槌破門扳平比分' },
        { min: 90, team: 1, scorer: 'Gabriel Martinelli', assist: 'Bruno Guimarães', detail: 'Bruno Guimarães 禁區邊緣傳球，Martinelli 門前推射入網絕殺，95分鐘致勝球' }
      ],
      cards: [
        { min: 23, team: 2, player: 'Kaishu Sano', card: 'yellow', detail: '危險鏟球犯規' },
        { min: 35, team: 1, player: 'Casemiro', card: 'yellow', detail: '戰術犯規阻止反擊' },
        { min: 72, team: 2, player: 'Shogo Taniguchi', card: 'yellow', detail: '犯規' },
        { min: 82, team: 1, player: 'Douglas Santos', card: 'yellow', detail: '拖延比賽時間' },
        { min: 90, team: 2, player: 'Koki Ogawa', card: 'yellow', detail: '犯規' }
      ],
      stats: {
        possession: [68, 32],
        shots: [19, 5],
        shotsOnTarget: [6, 2],
        shotsOffTarget: [9, 2],
        shotsInsideBox: [12, 3],
        shotsOutsideBox: [7, 2],
        passes: [580, 310],
        passCompleted: [520, 240],
        passAccuracy: [89.7, 77.4],
        crosses: [22, 10],
        crossesCompleted: [7, 2],
        corners: [6, 2],
        freeKicks: [12, 14],
        fouls: [4, 13],
        offsides: [1, 0],
        yellowCards: [2, 3],
        redCards: [0, 0],
        forcedTurnovers: [30, 28],
        pressingApplied: [220, 250]
      }
    },
    { date: '2026-06-29', time: '16:30 ET', group: 'R32', team1: 'Germany', score1: 1, team2: 'Paraguay', score2: 1, venue: '波士頓·吉列體育場', status: 'completed',
      note: '巴拉圭 PK 4-3 獲勝晉級16強！德國四大世界盃冠軍在32強賽爆冷出局',
      goals: [
        { min: 42, team: 2, scorer: 'Julio Enciso', assist: 'Matías Galarza', detail: 'Galarza 右路傳中，Enciso 禁區中央頭槌破門，巴拉圭1-0領先' },
        { min: 54, team: 1, scorer: 'Kai Havertz', assist: 'Florian Wirtz', detail: 'Wirtz 左路傳中，Havertz 禁區內高難度頭槌彈地入網扳平比分' }
      ],
      cards: [
        { min: 35, team: 1, player: 'Antonio Rüdiger', card: 'yellow', detail: '戰術犯規阻止反擊' },
        { min: 60, team: 2, player: 'Diego Gómez', card: 'yellow', detail: '中場犯規' },
        { min: 78, team: 2, player: 'Júnior Alonso', card: 'yellow', detail: '戰術犯規' },
        { min: 85, team: 1, player: 'Waldemar Anton', card: 'yellow', detail: '犯規' },
        { min: 105, team: 1, player: 'Jonathan Tah', card: 'yellow', detail: '爭搶犯規' },
        { min: 110, team: 2, player: 'Gustavo Gómez', card: 'yellow', detail: '拖延時間' }
      ],
      stats: {
        possession: [65, 35],
        shots: [22, 7],
        shotsOnTarget: [6, 3],
        shotsOffTarget: [10, 2],
        shotsInsideBox: [14, 4],
        shotsOutsideBox: [8, 3],
        passes: [620, 310],
        passCompleted: [550, 240],
        passAccuracy: [88.7, 77.4],
        crosses: [24, 10],
        crossesCompleted: [7, 2],
        corners: [9, 3],
        freeKicks: [14, 16],
        fouls: [16, 14],
        offsides: [3, 2],
        yellowCards: [3, 3],
        redCards: [0, 0],
        forcedTurnovers: [30, 32],
        pressingApplied: [240, 280]
      }
    },
    { date: '2026-06-29', time: '21:00 ET', group: 'R32', team1: 'Netherlands', score1: 1, team2: 'Morocco', score2: 1, venue: '蒙特雷·BBVA球場', status: 'completed',
      note: '摩洛哥 PK 3-2 獲勝晉級16強！將在7月4日於休斯敦對陣加拿大。Cody Gakpo第72分鐘進球後情緒潰堤（紀念未出世的孩子），Issa Diop第90+1分鐘頭槌絕平。PK大戰：Saibari踢進致勝12碼',
      goals: [
        { min: 72, team: 1, scorer: 'Cody Gakpo', assist: 'Crysencio Summerville', detail: 'Summerville 左路突破傳中，Gakpo 禁區中央推射入網。Gakpo 進球後淚流滿面，紀念上週末失去的未出世孩子，隊友全體上前擁抱安慰' },
        { min: 90, team: 2, scorer: 'Issa Diop', assist: 'Chemsdine Talbi', detail: 'Talbi 右路傳中，Diop 禁區中央強力頭槌入網，個人國際賽首球！傷停補時第1分鐘絕平，摩洛哥將比賽拖入延長賽和PK大戰' }
      ],
      cards: [
        { min: 47, team: 2, player: 'Issa Diop', card: 'yellow', detail: '惡意犯規' }
      ],
      stats: {
        possession: [58, 42],
        shots: [14, 10],
        shotsOnTarget: [5, 4],
        shotsOffTarget: [6, 4],
        shotsInsideBox: [9, 6],
        shotsOutsideBox: [5, 4],
        passes: [520, 380],
        passCompleted: [460, 310],
        passAccuracy: [88.5, 81.6],
        crosses: [22, 14],
        crossesCompleted: [6, 4],
        corners: [7, 4],
        freeKicks: [14, 16],
        fouls: [14, 13],
        offsides: [2, 3],
        yellowCards: [0, 1],
        redCards: [0, 0],
        forcedTurnovers: [28, 32],
        pressingApplied: [220, 260]
      }
    },

    // === 6月30日 ===
    { date: '2026-06-30', time: '17:00 ET', group: 'R32', team1: 'France', score1: 3, team2: 'Sweden', score2: 0, venue: '東盧瑟福·大都會人壽體育場', status: 'completed',
      note: '法國晉級16強！Mbappe梅開二度以18球世界盃進球超越Klose，僅次於Messi的19球。將在7月4日費城對陣巴拉圭',
      goals: [
        { min: 45, team: 1, scorer: 'Kylian Mbappé', detail: '短角球戰術後左路內切禁區，強力射入遠角，法國1-0領先' },
        { min: 53, team: 1, scorer: 'Bradley Barcola', assist: 'Michael Olise', detail: 'Olise 妙傳禁區，Barcola 強力射門入網，2-0' },
        { min: 74, team: 1, scorer: 'Kylian Mbappé', assist: 'Michael Olise', detail: 'Olise 再次助攻，Mbappé 禁區內掃射入網梅開二度，世界盃第18球！' }
      ],
      cards: [
      ],
      stats: {
        possession: [60, 40],
        shots: [18, 6],
        shotsOnTarget: [7, 1],
        shotsOffTarget: [8, 3],
        shotsInsideBox: [11, 4],
        shotsOutsideBox: [7, 2],
        passes: [530, 380],
        passCompleted: [470, 310],
        passAccuracy: [88.7, 81.6],
        crosses: [18, 12],
        crossesCompleted: [6, 3],
        corners: [7, 2],
        freeKicks: [12, 14],
        fouls: [12, 10],
        offsides: [2, 3],
        yellowCards: [0, 0],
        redCards: [0, 0],
        forcedTurnovers: [30, 28],
        pressingApplied: [220, 250]
      }
    },
    { date: '2026-06-30', time: '17:00 ET', group: 'R32', team1: 'Ivory Coast', score1: 1, team2: 'Norway', score2: 2, venue: '達拉斯·AT&T體育場', status: 'completed',
      note: '挪威晉級16強！Haaland第86分鐘絕殺，將在7月5日於休斯敦對陣巴西',
      goals: [
        { min: 39, team: 2, scorer: 'Antonio Nusa', assist: null, detail: '禁區外弧線球射入左上角，挪威面對劣勢先馳得點' },
        { min: 74, team: 1, scorer: 'Amad Diallo', assist: null, detail: '替補上場！個人盤帶突破數人後禁區內勁射入網，象牙海岸扳平比分' },
        { min: 86, team: 2, scorer: 'Erling Haaland', assist: 'Sander Berge', detail: 'Oscar Bobb斷球後交給Berge，Berge右路傳中，Haaland門前推射入網，連續三場世界盃進球！Haaland以60球創最快達標紀錄' }
      ],
      cards: [],
      stats: {
        possession: [58, 42],
        shots: [14, 12],
        shotsOnTarget: [4, 5],
        shotsOffTarget: [6, 5],
        shotsInsideBox: [8, 7],
        shotsOutsideBox: [6, 5],
        passes: [480, 380],
        passCompleted: [410, 310],
        passAccuracy: [85.4, 81.6],
        crosses: [18, 16],
        crossesCompleted: [5, 5],
        corners: [6, 5],
        freeKicks: [14, 12],
        fouls: [13, 11],
        offsides: [2, 3],
        yellowCards: [0, 0],
        redCards: [0, 0],
        forcedTurnovers: [28, 32],
        pressingApplied: [220, 250]
      }
    },
    { date: '2026-06-30', time: '20:00 ET', group: 'R32', team1: 'Mexico', score1: 2, team2: 'Ecuador', score2: 0, venue: '墨西哥城·阿茲特克體育場', status: 'completed',
      note: '因暴風雨延遲開賽約1小時。墨西哥40年來首次在世界盃淘汰賽獲勝！Quiñones連三場進球創紀錄，Jiménez錦上添花。墨西哥將在16強賽對陣英格蘭/DR Congo勝方',
      goals: [
        { min: 22, team: 1, scorer: 'Julián Quiñones', detail: '從中場帶球長驅直入，禁區內強力射門入網，個人連續三場世界盃進球創墨西哥紀錄' },
        { min: 31, team: 1, scorer: 'Raúl Jiménez', assist: 'Julián Quiñones', detail: 'Quiñones 妙傳，Jiménez 禁區內果斷射門入網擴大領先，墨西哥世界盃淘汰賽40年來首勝' }
      ],
      cards: [
        { min: 55, team: 2, player: 'Piero Hincapié', card: 'yellow', detail: '戰術犯規' },
        { min: 78, team: 2, player: 'Gonzalo Plata', card: 'yellow', detail: '犯規' },
        { min: 85, team: 2, player: 'Jackson Porozo', card: 'red', detail: '惡意犯規，直接紅牌' }
      ],
      stats: {
        possession: [44, 56],
        shots: [15, 8],
        shotsOnTarget: [3, 1],
        shotsOffTarget: [12, 7],
        shotsInsideBox: [9, 4],
        shotsOutsideBox: [6, 4],
        passes: [420, 540],
        passCompleted: [353, 459],
        passAccuracy: [84, 85],
        crosses: [12, 32],
        crossesCompleted: [6, 2],
        corners: [3, 8],
        freeKicks: [10, 13],
        fouls: [9, 12],
        offsides: [0, 1],
        yellowCards: [0, 2],
        redCards: [0, 1],
        forcedTurnovers: [28, 32],
        pressingApplied: [220, 260]
      }
    },

    // === 7月1日 ===
    { date: '2026-07-01', time: '12:00 ET', group: 'R32', team1: 'England', score1: 2, team2: 'DR Congo', score2: 1, venue: '亞特蘭大·梅賽德斯-賓士體育場', status: 'completed',
      note: '英格蘭晉級16強！Harry Kane第75分鐘頭槌扳平、第86分鐘勁射梅開二度，以13球超越Pelé。Brian Cipenga第7分鐘為DR Congo首開紀錄。英格蘭將在7月6日於墨西哥城阿茲特克體育場對陣🇲🇽墨西哥',
      goals: [
        { min: 7, team: 2, scorer: 'Brian Cipenga', detail: 'Chancel Mbemba 頭球後蹭，Cipenga 禁區左側無人防守下低射破門，個人國際賽首球！DR Congo 世界盃淘汰賽歷史首球' },
        { min: 75, team: 1, scorer: 'Harry Kane', assist: 'Anthony Gordon', detail: 'Gordon 左路傳中，Kane 禁區中央頭槌頂入左上角，英格蘭扳平比分！Kane 世界盃第12球' },
        { min: 86, team: 1, scorer: 'Harry Kane', assist: 'Elliot Anderson', detail: 'Anderson 直塞，Kane 禁區右側右腳勁射入網！Kane 梅開二度，世界盃累計13球超越 Pelé（12球）' }
      ],
      cards: [
      ],
      stats: {
        possession: [60, 40],
        shots: [16, 7],
        shotsOnTarget: [7, 2],
        shotsOffTarget: [6, 3],
        shotsInsideBox: [13, 2],
        shotsOutsideBox: [3, 5],
        passes: [517, 365],
        passCompleted: [468, 299],
        passAccuracy: [90.5, 81.9],
        crosses: [43, 13],
        crossesCompleted: [9, 2],
        corners: [5, 3],
        freeKicks: [16, 10],
        fouls: [10, 12],
        offsides: [0, 4],
        yellowCards: [1, 1],
        redCards: [0, 0],
        forcedTurnovers: [30, 28],
        pressingApplied: [220, 240]
      }
    },
    { date: '2026-07-01', time: '20:00 ET', group: 'R32', team1: 'USA', score1: 2, team2: 'Bosnia and Herzegovina', score2: 0, venue: '舊金山·李維斯體育場', status: 'completed',
      note: '美國晉級16強！Folarin Balogun第45分鐘得分後第64分鐘紅牌被罰下，Malik Tillman第82分鐘自由球直接破門。美國10人應戰守住勝局，將在7月6日於西雅圖對陣比利時',
      goals: [
        { min: 45, team: 1, scorer: 'Folarin Balogun', assist: 'Malik Tillman', detail: 'Tillman 直塞球經折射後 Balogun 禁區內左腳穿檔破門，做出 LeBron James Silencer 慶祝動作' },
        { min: 82, team: 1, scorer: 'Malik Tillman', detail: '禁區外自由球直接彎過人牆入網，Vasilj 碰到球仍無法阻止進球' }
      ],
      cards: [
        { min: 64, team: 1, player: 'Folarin Balogun', card: 'red', detail: 'VAR 審查後判定 serious foul play — 落地時踩到 Tarik Muharemovic，直接紅牌，將缺席16強賽對陣比利時' }
      ],
      stats: {
        possession: [48, 52],
        shots: [10, 14],
        shotsOnTarget: [4, 5],
        shotsOffTarget: [4, 6],
        shotsInsideBox: [6, 8],
        shotsOutsideBox: [4, 6],
        passes: [410, 450],
        passCompleted: [350, 390],
        passAccuracy: [85.4, 86.7],
        crosses: [14, 20],
        crossesCompleted: [4, 5],
        corners: [4, 7],
        freeKicks: [15, 12],
        fouls: [14, 13],
        offsides: [1, 2],
        yellowCards: [0, 0],
        redCards: [1, 0],
        forcedTurnovers: [26, 30],
        pressingApplied: [190, 230]
      }
    },
    { date: '2026-07-01', time: '20:00 ET', group: 'R32', team1: 'Belgium', score1: 3, team2: 'Senegal', score2: 2, venue: '西雅圖·流明球場', status: 'completed',
      note: '比利時晉級16強！Youri Tielemans在120+5分鐘罰進12碼完成驚天逆轉！Senegal第24分鐘Diarra、第51分鐘Sarr兩球領先，Lukaku第86分鐘追回一球，Tielemans第89分鐘頭槌扳平。比利時將在16強賽對陣🇺🇸美國或🇧🇦波赫勝方',
      goals: [
        { min: 24, team: 2, scorer: 'Habib Diarra', detail: '禁區內射門入網，Senegal率先破門' },
        { min: 51, team: 2, scorer: 'Ismaila Sarr', assist: 'Sadio Mané', detail: 'Mané妙傳，Sarr禁區內冷靜推射入網，2-0' },
        { min: 86, team: 1, scorer: 'Romelu Lukaku', assist: 'Leandro Trossard', detail: 'Trossard禁區邊緣傳球，Lukaku門前搶點破門追回一球' },
        { min: 89, team: 1, scorer: 'Youri Tielemans', assist: 'Leandro Trossard', detail: 'Trossard開出角球，Tielemans禁區中央頭槌破網扳平比分！' },
        { min: 120, team: 1, scorer: 'Youri Tielemans', detail: '12碼罰球 — Lamine Camara禁區內犯規，VAR確認後判罰，Tielemans冷靜射入左下角絕殺！' }
      ],
      cards: [
        { min: 64, team: 1, player: 'Brandon Mechele', card: 'yellow', detail: '戰術犯規阻止反擊' },
        { min: 109, team: 1, player: 'Leandro Trossard', card: 'yellow', detail: '犯規' },
        { min: 120, team: 2, player: 'Lamine Camara', card: 'yellow', detail: '禁區內犯規導致罰球' }
      ],
      stats: {
        possession: [52, 48],
        shots: [19, 19],
        shotsOnTarget: [5, 5],
        shotsOffTarget: [14, 14],
        shotsInsideBox: [12, 12],
        shotsOutsideBox: [7, 7],
        passes: [699, 639],
        passCompleted: [602, 536],
        passAccuracy: [86.1, 83.9],
        crosses: [26, 22],
        crossesCompleted: [7, 5],
        corners: [4, 2],
        freeKicks: [14, 12],
        fouls: [22, 12],
        offsides: [2, 2],
        yellowCards: [2, 1],
        redCards: [0, 0],
        forcedTurnovers: [30, 28],
        pressingApplied: [230, 250]
      }
    },

    // === 7月2日 ===
    { date: '2026-07-02', time: '17:00 ET', group: 'R32', team1: 'Portugal', score1: 2, team2: 'Croatia', score2: 1, venue: '多倫多·BMO球場', status: 'completed',
      note: '葡萄牙晉級16強！Gonçalo Ramos在90+4分鐘頭槌絕殺！Perišić第53分鐘為克羅埃西亞先馳得點，Ronaldo第68分鐘12碼罰球扳平（生涯首顆世界盃淘汰賽進球！），Ramos補時階段頭槌破門完成逆轉。葡萄牙將在16強賽對陣🇪🇸西班牙！',
      goals: [
        { min: 53, team: 2, scorer: 'Ivan Perišić', detail: '禁區內射門入網，克羅埃西亞率先破門' },
        { min: 68, team: 1, scorer: 'Cristiano Ronaldo', detail: '12碼罰球 — VAR確認Penalty後，Ronaldo冷靜射入左下角，生涯首顆世界盃淘汰賽進球！' },
        { min: 90, team: 1, scorer: 'Gonçalo Ramos', assist: 'Bruno Fernandes', detail: 'Fernandes開出角球，Ramos遠柱頭槌破門，補時階段絕殺！' }
      ],
      cards: [
        { min: 42, team: 2, player: 'Martin Baturina', card: 'yellow', detail: '戰術犯規' },
        { min: 66, team: 2, player: 'Marin Pongračić', card: 'yellow', detail: '禁區內犯規導致罰球' },
        { min: 75, team: 1, player: 'Rúben Dias', card: 'yellow', detail: '犯規阻止反擊' },
        { min: 88, team: 2, player: 'Josip Šutalo', card: 'yellow', detail: '爭搶犯規' }
      ],
      stats: {
        possession: [53, 47],
        shots: [17, 13],
        shotsOnTarget: [5, 4],
        shotsOffTarget: [9, 6],
        shotsInsideBox: [11, 7],
        shotsOutsideBox: [6, 6],
        passes: [540, 460],
        passCompleted: [470, 390],
        passAccuracy: [87.0, 84.8],
        crosses: [28, 18],
        crossesCompleted: [9, 5],
        corners: [8, 4],
        freeKicks: [13, 14],
        fouls: [12, 15],
        offsides: [3, 1],
        yellowCards: [1, 3],
        redCards: [0, 0],
        forcedTurnovers: [28, 32],
        pressingApplied: [220, 250]
      }
    },
    { date: '2026-07-02', time: '19:00 ET', group: 'R32', team1: 'Spain', score1: 3, team2: 'Austria', score2: 0, venue: '洛杉磯·SoFi體育場', status: 'completed',
      note: '西班牙晉級16強！終結16年世界盃淘汰賽不勝魔咒！Mikel Oyarzabal梅開二度（37\'、89\'），Pedro Porro頭槌破門（66\'）取得國際賽首球。Cucurella進球被吹爭議。西班牙將在16強賽對陣🇵🇹葡萄牙！',
      goals: [
        { min: 37, team: 1, scorer: 'Mikel Oyarzabal', detail: '禁區內冷靜射門入網，西班牙1-0領先' },
        { min: 66, team: 1, scorer: 'Pedro Porro', assist: 'Álex Baena', detail: 'Baena開出定位球，Porro禁區中央頭槌入網，擴大領先' },
        { min: 89, team: 1, scorer: 'Mikel Oyarzabal', assist: 'Marc Cucurella', detail: 'Cucurella左路傳中，Oyarzabal禁區內接應梅開二度' }
      ],
      cards: [
        { min: 28, team: 2, player: 'Nicolas Seiwald', card: 'yellow', detail: '鏟球犯規' },
        { min: 38, team: 2, player: 'Konrad Laimer', card: 'yellow', detail: '戰術犯規' },
        { min: 71, team: 1, player: 'Pau Cubarsí', card: 'yellow', detail: '阻止反擊犯規' }
      ],
      stats: {
        possession: [62, 38],
        shots: [18, 9],
        shotsOnTarget: [8, 2],
        shotsOffTarget: [7, 5],
        shotsInsideBox: [12, 5],
        shotsOutsideBox: [6, 4],
        passes: [620, 380],
        passCompleted: [565, 320],
        passAccuracy: [91.1, 84.2],
        crosses: [22, 14],
        crossesCompleted: [8, 3],
        corners: [9, 2],
        freeKicks: [12, 14],
        fouls: [10, 14],
        offsides: [2, 1],
        yellowCards: [1, 2],
        redCards: [0, 0],
        forcedTurnovers: [28, 30],
        pressingApplied: [240, 220]
      }
    },
    { date: '2026-07-02', time: '20:00 ET', group: 'R32', team1: 'Switzerland', score1: 2, team2: 'Algeria', score2: 0, venue: '溫哥華·BC Place', status: 'completed',
      note: '瑞士晉級16強！1938年以來首次在世界盃淘汰賽贏球。Breel Embolo第10分鐘接Manzambi傳中首開紀錄，Dan Ndoye第46分鐘禁區外勁射破門鎖定勝局。瑞士將在7/8溫哥華對陣哥倫比亞vs迦納勝方',
      goals: [
        { min: 10, team: 1, scorer: 'Breel Embolo', assist: 'Johan Manzambi', detail: 'Manzambi右路突破傳中，Embolo門前搶點推射入網，個人第26顆國際賽進球' },
        { min: 46, team: 1, scorer: 'Dan Ndoye', detail: '下半場開場不到1分鐘，禁區外強力遠射入網，Algeria門將Luca Zidane撲救不及' }
      ],
      cards: [
        { min: 35, team: 2, player: 'Farès Chaïbi', card: 'yellow', detail: '惡意犯規' }
      ],
      stats: {
        possession: [54, 46],
        shots: [14, 10],
        shotsOnTarget: [5, 3],
        shotsOffTarget: [6, 4],
        shotsInsideBox: [8, 5],
        shotsOutsideBox: [6, 5],
        passes: [480, 420],
        passCompleted: [420, 350],
        passAccuracy: [87.5, 83.3],
        crosses: [22, 16],
        crossesCompleted: [7, 4],
        corners: [6, 4],
        freeKicks: [12, 14],
        fouls: [12, 14],
        offsides: [2, 3],
        yellowCards: [0, 1],
        redCards: [0, 0],
        forcedTurnovers: [28, 32],
        pressingApplied: [220, 250]
      }
    },

    // === 7月3日 ===
    { date: '2026-07-03', time: '16:00 ET', group: 'R32', team1: 'Argentina', score1: 3, team2: 'Cape Verde', score2: 2, venue: '邁阿密·硬石體育場', status: 'completed',
      note: '阿根廷延長賽驚險晉級16強！Lionel Messi第29分鐘先馳得點，Cape Verde憑Deroy Duarte（59\'）和Sidny Lopes Cabral第99分鐘世界波兩度追平，Lisandro Martinez第92分鐘頭槌建功，Diney Borges第111分鐘自擺烏龍致勝。阿根廷將在16強賽對陣埃及！',
      goals: [
        { min: 29, team: 1, scorer: 'Lionel Messi', assist: 'Lisandro Martinez', detail: 'Lisandro Martinez長傳禁區，Messi胸部停球後抽射入網，連續第8場世界盃進球！' },
        { min: 59, team: 2, scorer: 'Deroy Duarte', assist: 'Ryan Mendes', detail: 'Mendes傳球，Duarte禁區內低射從Lisandro Martinez雙腿間穿過入網，1-1' },
        { min: 92, team: 1, scorer: 'Lisandro Martinez', assist: 'Rodrigo De Paul', detail: 'De Paul開出角球，Martinez禁區中央頭槌破門，阿根廷2-1再度領先' },
        { min: 99, team: 2, scorer: 'Sidny Lopes Cabral', detail: 'Lopes Cabral左路禁區外世界波弧線射門入遠角，本屆賽事最佳進球之一！2-2' },
        { min: 111, team: 1, scorer: 'Diney Borges', detail: 'own goal — Messi開出角球，Borges在壓力下頭球誤入自家大門，阿根廷3-2絕殺！' }
      ],
      cards: [
        { min: 35, team: 2, player: 'Kevin Pina', card: 'yellow', detail: '犯規阻止反擊' },
        { min: 68, team: 1, player: 'Rodrigo De Paul', card: 'yellow', detail: '戰術犯規' },
        { min: 78, team: 2, player: 'Diney Borges', card: 'yellow', detail: '爭搶犯規' },
        { min: 102, team: 1, player: 'Cristian Romero', card: 'yellow', detail: '延遲比賽' },
        { min: 115, team: 2, player: 'Jamiro Monteiro', card: 'yellow', detail: '抗議判決' }
      ],
      stats: {
        possession: [58, 42], shots: [22, 10], shotsOnTarget: [8, 4],
        shotsOffTarget: [10, 5], shotsInsideBox: [15, 5], shotsOutsideBox: [7, 5],
        passes: [620, 420], passCompleted: [545, 350], passAccuracy: [87.9, 83.3],
        crosses: [28, 14], crossesCompleted: [8, 4], corners: [10, 3],
        freeKicks: [14, 16], fouls: [14, 16], offsides: [3, 2],
        yellowCards: [2, 3], redCards: [0, 0],
        forcedTurnovers: [28, 32], pressingApplied: [240, 220]
      }
    },
    { date: '2026-07-03', time: '19:00 ET', group: 'R32', team1: 'Colombia', score1: 1, team2: 'Ghana', score2: 0, venue: '堪薩斯城·箭頭體育場', status: 'completed',
      note: '哥倫比亞1-0擊敗迦納晉級16強！Jhon Arias第14分鐘接Luis Suarez右路傳中門前推射破網，全場唯一進球。哥倫比亞零封對手延續不敗紀錄，將在7/8溫哥華BC Place對陣瑞士！',
      goals: [
        { min: 14, team: 1, scorer: 'Jhon Arias', assist: 'Luis Suarez', detail: 'Suarez右路傳中，Arias門前搶點推射入網，個人世界盃首球！' }
      ],
      cards: [
        { min: 27, team: 2, player: 'Alidu Seidu', card: 'yellow', detail: '戰術犯規' },
        { min: 45, team: 1, player: 'Jefferson Lerma', card: 'yellow', detail: '鏟球犯規' },
        { min: 62, team: 2, player: 'Thomas Partey', card: 'yellow', detail: '犯規阻止反擊' },
        { min: 78, team: 1, player: 'Davinson Sanchez', card: 'yellow', detail: '爭搶犯規' }
      ],
      stats: {
        possession: [61, 39], shots: [16, 7], shotsOnTarget: [5, 2],
        shotsOffTarget: [8, 4], shotsInsideBox: [10, 3], shotsOutsideBox: [6, 4],
        passes: [540, 360], passCompleted: [475, 295], passAccuracy: [88.0, 81.9],
        crosses: [24, 12], crossesCompleted: [7, 3], corners: [7, 3],
        freeKicks: [12, 14], fouls: [11, 14], offsides: [2, 1],
        yellowCards: [2, 2], redCards: [0, 0],
        forcedTurnovers: [25, 30], pressingApplied: [210, 230]
      }
    },
    { date: '2026-07-03', time: '19:00 ET', group: 'R32', team1: 'Australia', team2: 'Egypt', venue: '達拉斯·AT&T體育場', status: 'completed',
      score1: 1, score2: 1,
      penalty: { winner: 'Egypt', score: '4-2', team1score: 2, team2score: 4 },
      goals: [
        { min: 13, team: 2, scorer: 'Emam Ashour', assist: 'Karim Hafez', detail: '頭球攻門，Hafez自由球傳中，Ashour在門前強力頭槌破網' },
        { min: 54, team: 1, scorer: 'Mohamed Hany', assist: null, detail: 'own goal — Aiden O\'Neill自由球傳中造成禁區混亂，Hany在Circati壓力下頭球誤入自家大門' }
      ],
      cards: [],
      stats: {
        possession: [45, 55], shots: [7, 4], shotsOnTarget: [1, 1],
        shotsOffTarget: [5, 2], shotsInsideBox: [4, 3], shotsOutsideBox: [3, 1],
        passes: [420, 510], passCompleted: [345, 430], passAccuracy: [82, 84],
        crosses: [18, 12], crossesCompleted: [5, 4], corners: [4, 3],
        freeKicks: [12, 14], fouls: [11, 13], offsides: [2, 3],
        yellowCards: [0, 0], redCards: [0, 0],
        forcedTurnovers: [22, 28], pressingApplied: [180, 210]
      }
    },
  ],

  // 分組積分（賽後更新）
  standings: {
    'A': [
      { team: 'Mexico', played: 3, won: 3, drawn: 0, lost: 0, gf: 6, ga: 0, gd: 6, pts: 9 },
      { team: 'South Africa', played: 3, won: 1, drawn: 1, lost: 1, gf: 2, ga: 3, gd: -1, pts: 4 },
      { team: 'South Korea', played: 3, won: 1, drawn: 0, lost: 2, gf: 2, ga: 3, gd: -1, pts: 3 },
      { team: 'Czechia', played: 3, won: 0, drawn: 1, lost: 2, gf: 2, ga: 6, gd: -4, pts: 1 }
    ],
    'B': [
      { team: 'Switzerland', played: 3, won: 2, drawn: 1, lost: 0, gf: 7, ga: 3, gd: 4, pts: 7 },
      { team: 'Canada', played: 3, won: 1, drawn: 1, lost: 1, gf: 8, ga: 3, gd: 5, pts: 4 },
      { team: 'Bosnia and Herzegovina', played: 3, won: 1, drawn: 1, lost: 1, gf: 5, ga: 6, gd: -1, pts: 4 },
      { team: 'Qatar', played: 3, won: 0, drawn: 1, lost: 2, gf: 2, ga: 10, gd: -8, pts: 1 }
    ],
    'C': [
      { team: 'Brazil', played: 3, won: 2, drawn: 1, lost: 0, gf: 7, ga: 1, gd: 6, pts: 7 },
      { team: 'Morocco', played: 3, won: 2, drawn: 1, lost: 0, gf: 6, ga: 3, gd: 3, pts: 7 },
      { team: 'Scotland', played: 3, won: 1, drawn: 0, lost: 2, gf: 1, ga: 4, gd: -3, pts: 3 },
      { team: 'Haiti', played: 3, won: 0, drawn: 0, lost: 3, gf: 2, ga: 8, gd: -6, pts: 0 }
    ],
    'D': [
      { team: 'USA', played: 3, won: 2, drawn: 0, lost: 1, gf: 8, ga: 4, gd: 4, pts: 6 },
      { team: 'Australia', played: 3, won: 1, drawn: 1, lost: 1, gf: 2, ga: 2, gd: 0, pts: 4 },
      { team: 'Paraguay', played: 3, won: 1, drawn: 1, lost: 1, gf: 2, ga: 4, gd: -2, pts: 4 },
      { team: 'Turkey', played: 3, won: 1, drawn: 0, lost: 2, gf: 3, ga: 5, gd: -2, pts: 3 }
    ],
    'E': [
      { team: 'Germany', played: 3, won: 2, drawn: 0, lost: 1, gf: 10, ga: 4, gd: 6, pts: 6 },
      { team: 'Ivory Coast', played: 3, won: 2, drawn: 0, lost: 1, gf: 4, ga: 2, gd: 2, pts: 6 },
      { team: 'Ecuador', played: 3, won: 1, drawn: 1, lost: 1, gf: 2, ga: 2, gd: 0, pts: 4 },
      { team: 'Curaçao', played: 3, won: 0, drawn: 1, lost: 2, gf: 1, ga: 9, gd: -8, pts: 1 }
    ],
    'F': [
      { team: 'Netherlands', played: 3, won: 2, drawn: 1, lost: 0, gf: 10, ga: 4, gd: 6, pts: 7 },
      { team: 'Japan', played: 3, won: 1, drawn: 2, lost: 0, gf: 7, ga: 3, gd: 4, pts: 5 },
      { team: 'Sweden', played: 3, won: 1, drawn: 1, lost: 1, gf: 7, ga: 7, gd: 0, pts: 4 },
      { team: 'Tunisia', played: 3, won: 0, drawn: 0, lost: 3, gf: 2, ga: 12, gd: -10, pts: 0 }
    ],
    'G': [
      { team: 'Belgium', played: 3, won: 1, drawn: 2, lost: 0, gf: 6, ga: 2, gd: 4, pts: 5 },
      { team: 'Egypt', played: 3, won: 1, drawn: 2, lost: 0, gf: 5, ga: 3, gd: 2, pts: 5 },
      { team: 'Iran', played: 3, won: 0, drawn: 3, lost: 0, gf: 3, ga: 3, gd: 0, pts: 3 },
      { team: 'New Zealand', played: 3, won: 0, drawn: 1, lost: 2, gf: 4, ga: 10, gd: -6, pts: 1 }
    ],
    'H': [
      { team: 'Spain', played: 3, won: 2, drawn: 1, lost: 0, gf: 5, ga: 0, gd: 5, pts: 7 },
      { team: 'Cape Verde', played: 3, won: 0, drawn: 3, lost: 0, gf: 2, ga: 2, gd: 0, pts: 3 },
      { team: 'Uruguay', played: 3, won: 0, drawn: 2, lost: 1, gf: 3, ga: 4, gd: -1, pts: 2 },
      { team: 'Saudi Arabia', played: 3, won: 0, drawn: 2, lost: 1, gf: 1, ga: 5, gd: -4, pts: 2 }
    ],
    'I': [
      { team: 'France', played: 3, won: 3, drawn: 0, lost: 0, gf: 10, ga: 2, gd: 8, pts: 9 },
      { team: 'Norway', played: 3, won: 2, drawn: 0, lost: 1, gf: 8, ga: 7, gd: 1, pts: 6 },
      { team: 'Senegal', played: 3, won: 1, drawn: 0, lost: 2, gf: 8, ga: 6, gd: 2, pts: 3 },
      { team: 'Iraq', played: 3, won: 0, drawn: 0, lost: 3, gf: 1, ga: 12, gd: -11, pts: 0 }
    ],
    'J': [
      { team: 'Argentina', played: 3, won: 3, drawn: 0, lost: 0, gf: 8, ga: 1, gd: 7, pts: 9 },
      { team: 'Austria', played: 3, won: 1, drawn: 1, lost: 1, gf: 5, ga: 5, gd: 0, pts: 4 },
      { team: 'Algeria', played: 3, won: 1, drawn: 1, lost: 1, gf: 4, ga: 6, gd: -2, pts: 4 },
      { team: 'Jordan', played: 3, won: 0, drawn: 0, lost: 3, gf: 3, ga: 8, gd: -5, pts: 0 }
    ],
    'K': [
      { team: 'Colombia', played: 3, won: 2, drawn: 1, lost: 0, gf: 4, ga: 1, gd: 3, pts: 7 },
      { team: 'Portugal', played: 3, won: 1, drawn: 2, lost: 0, gf: 6, ga: 1, gd: 5, pts: 5 },
      { team: 'DR Congo', played: 3, won: 1, drawn: 1, lost: 1, gf: 4, ga: 3, gd: 1, pts: 4 },
      { team: 'Uzbekistan', played: 3, won: 0, drawn: 0, lost: 3, gf: 2, ga: 11, gd: -9, pts: 0 }
    ],
    'L': [
      { team: 'England', played: 3, won: 2, drawn: 1, lost: 0, gf: 6, ga: 2, gd: 4, pts: 7 },
      { team: 'Croatia', played: 3, won: 2, drawn: 0, lost: 1, gf: 5, ga: 5, gd: 0, pts: 6 },
      { team: 'Ghana', played: 3, won: 1, drawn: 1, lost: 1, gf: 2, ga: 2, gd: 0, pts: 4 },
      { team: 'Panama', played: 3, won: 0, drawn: 0, lost: 3, gf: 0, ga: 4, gd: -4, pts: 0 }
    ]
  },

  // ===== 淘汰賽階段 =====
  knockout: {
    summary: '32強賽全部16場完成 ✅  🇨🇦加拿大、🇧🇷巴西、🇵🇾巴拉圭、🇲🇦摩洛哥、🇳🇴挪威、🇫🇷法國、🇲🇽墨西哥、🇬🇧英格蘭、🇧🇪比利時、🇺🇸美國、🇪🇸西班牙、🇵🇹葡萄牙、🇨🇭瑞士、🇪🇬埃及、🇦🇷阿根廷、🇨🇴哥倫比亞晉級16強 ｜ ❌ 淘汰：🇿🇦南非、🇯🇵日本、🇩🇪德國、🇳🇱荷蘭、🇨🇮象牙海岸、🇸🇪瑞典、🇪🇨厄瓜多、🇨🇩DR Congo、🇸🇳塞內加爾、🇧🇦波赫、🇦🇹奧地利、🇭🇷克羅埃西亞、🇩🇿阿爾及利亞、🇦🇺澳大利亞、🇨🇻維德角、🇬🇭迦納 ｜ 今日（7/4）16強賽開打：🇨🇦加拿大vs🇲🇦摩洛哥、🇵🇾巴拉圭vs🇫🇷法國 ✅  🇨🇦加拿大、🇧🇷巴西、🇵🇾巴拉圭、🇲🇦摩洛哥、🇳🇴挪威、🇫🇷法國、🇲🇽墨西哥、🇬🇧英格蘭、🇧🇪比利時、🇺🇸美國、🇪🇸西班牙、🇵🇹葡萄牙、🇨🇭瑞士、🇪🇬埃及晉級16強 ｜ ❌ 淘汰：🇿🇦南非、🇯🇵日本、🇩🇪德國、🇳🇱荷蘭、🇨🇮象牙海岸、🇸🇪瑞典、🇪🇨厄瓜多、🇨🇩DR Congo、🇸🇳塞內加爾、🇧🇦波赫、🇦🇹奧地利、🇭🇷克羅埃西亞、🇩🇿阿爾及利亞、🇦🇺澳大利亞 ｜ 今日（7/3）續賽：🇦🇷阿根廷vs🇨🇻維德角、🇨🇴哥倫比亞vs🇬🇭迦納',
    
    // PK 大戰結果
    penalties: {
      'Germany-vs-Paraguay': { winner: 'Paraguay', score: '4-3', loser: 'Germany' },
      'Netherlands-vs-Morocco': { winner: 'Morocco', score: '3-2', loser: 'Netherlands' },
      'Australia-vs-Egypt': { winner: 'Egypt', score: '4-2', loser: 'Australia' }
    },

    // 各輪次資訊
    rounds: {
      R32: {
        order: 1,
        name: '32強賽', nameEn: 'Round of 32',
        status: 'in_progress',
        totalMatches: 16,
        completedCount: 16,
        dateRange: '6月28日 — 7月3日',
        eliminated: ['South Africa', 'Japan', 'Germany', 'Netherlands', 'Ivory Coast', 'Sweden', 'Ecuador', 'DR Congo', 'Senegal', 'Bosnia and Herzegovina', 'Austria', 'Croatia', 'Algeria', 'Australia', 'Cape Verde', 'Ghana'],
        advanced: ['Canada', 'Brazil', 'Paraguay', 'Morocco', 'Norway', 'France', 'Mexico', 'England', 'Belgium', 'USA', 'Spain', 'Portugal', 'Switzerland', 'Egypt', 'Argentina', 'Colombia']
      },
      R16: {
        order: 2,
        name: '16強賽', nameEn: 'Round of 16',
        status: 'in_progress',
        totalMatches: 8,
        completedCount: 0,
        dateRange: '7月4日 — 7月8日',
        matchups: [
          { team1: 'Morocco', team2: 'Canada', date: '2026-07-04', venue: '休斯敦·NRG體育場', time: 'TBD' },
          { team1: 'Paraguay', team2: 'France', date: '2026-07-04', venue: '費城·林肯金融球場', time: 'TBD' },
          { team1: 'Norway', team2: 'Brazil', date: '2026-07-05', venue: '休斯敦·NRG體育場', time: 'TBD' },
          { team1: 'Mexico', team2: 'England', date: '2026-07-05', venue: '墨西哥城·阿茲特克體育場', time: 'TBD' },
          { team1: 'USA', team2: 'Belgium', date: '2026-07-06', venue: '西雅圖·流明球場', time: 'TBD' },
          { team1: 'Portugal', team2: 'Spain', date: '2026-07-06', venue: '達拉斯·AT&T體育場', time: 'TBD' },
          { team1: 'Switzerland', team2: 'Colombia', date: '2026-07-08', venue: '溫哥華·BC Place', time: 'TBD' },
          { team1: 'Egypt', team2: 'Argentina', date: '2026-07-07', venue: '亞特蘭大·梅賽德斯-賓士體育場', time: 'TBD' }
        ]
      },
      QF: {
        order: 3,
        name: '8強賽', nameEn: 'Quarter-Finals',
        status: 'upcoming',
        totalMatches: 4,
        completedCount: 0,
        dateRange: '7月10日 — 7月11日'
      },
      SF: {
        order: 4,
        name: '準決賽', nameEn: 'Semi-Finals',
        status: 'upcoming',
        totalMatches: 2,
        completedCount: 0,
        dateRange: '7月14日 — 7月15日'
      },
      Final: {
        order: 5,
        name: '決賽', nameEn: 'Final',
        status: 'upcoming',
        totalMatches: 1,
        completedCount: 0,
        dateRange: '7月19日',
        venue: '東盧瑟福·大都會人壽體育場'
      }
    }
  }
};