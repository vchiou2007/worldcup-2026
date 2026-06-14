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
    currentPhase: '小組賽'
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
    'England': '🏴󠁧󠁢󠁥󠁮󠁧󠁿', 'Croatia': '🇭🇷', 'Ghana': '🇬🇭', 'Panama': '🇵🇦'
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
    { date: '2026-06-14', time: '13:00 ET', group: 'E', team1: 'Germany', score1: null, team2: 'Curaçao', score2: null, venue: '休斯頓·NRG體育場', status: 'scheduled' },
    { date: '2026-06-14', time: '16:00 ET', group: 'F', team1: 'Netherlands', score1: null, team2: 'Japan', score2: null, venue: '達拉斯·AT&T體育場', status: 'scheduled' },
    { date: '2026-06-14', time: '19:00 ET', group: 'E', team1: 'Ivory Coast', score1: null, team2: 'Ecuador', score2: null, venue: '費城·林肯金融球場', status: 'scheduled' },
    { date: '2026-06-14', time: '22:00 ET', group: 'F', team1: 'Sweden', score1: null, team2: 'Tunisia', score2: null, venue: '蒙特雷·BBVA球場', status: 'scheduled' },

    // === 6月15日 ===
    { date: '2026-06-15', time: '12:00 ET', group: 'H', team1: 'Spain', score1: null, team2: 'Cape Verde', score2: null, venue: '亞特蘭大·梅賽德斯-賓士體育場', status: 'scheduled' },
    { date: '2026-06-15', time: '15:00 ET', group: 'G', team1: 'Belgium', score1: null, team2: 'Egypt', score2: null, venue: '西雅圖·流明球場', status: 'scheduled' },
    { date: '2026-06-15', time: '18:00 ET', group: 'H', team1: 'Saudi Arabia', score1: null, team2: 'Uruguay', score2: null, venue: '邁阿密·硬石體育場', status: 'scheduled' },
    { date: '2026-06-15', time: '21:00 ET', group: 'G', team1: 'Iran', score1: null, team2: 'New Zealand', score2: null, venue: '洛杉磯·SoFi體育場', status: 'scheduled' },

    // === 6月16日 ===
    { date: '2026-06-16', time: '15:00 ET', group: 'I', team1: 'France', score1: null, team2: 'Senegal', score2: null, venue: '紐約/新澤西·大都會人壽體育場', status: 'scheduled' },
    { date: '2026-06-16', time: '18:00 ET', group: 'I', team1: 'Iraq', score1: null, team2: 'Norway', score2: null, venue: '波士頓·吉列體育場', status: 'scheduled' },
    { date: '2026-06-16', time: '21:00 ET', group: 'J', team1: 'Argentina', score1: null, team2: 'Algeria', score2: null, venue: '堪薩斯城·箭頭體育場', status: 'scheduled' },
    { date: '2026-06-16', time: '00:00 ET', group: 'J', team1: 'Austria', score1: null, team2: 'Jordan', score2: null, venue: '舊金山·李維斯體育場', status: 'scheduled' },

    // === 6月17日 ===
    { date: '2026-06-17', time: '13:00 ET', group: 'K', team1: 'Portugal', score1: null, team2: 'DR Congo', score2: null, venue: '休斯頓·NRG體育場', status: 'scheduled' },
    { date: '2026-06-17', time: '16:00 ET', group: 'L', team1: 'England', score1: null, team2: 'Croatia', score2: null, venue: '達拉斯·AT&T體育場', status: 'scheduled' },
    { date: '2026-06-17', time: '19:00 ET', group: 'L', team1: 'Ghana', score1: null, team2: 'Panama', score2: null, venue: '多倫多·BMO球場', status: 'scheduled' },
    { date: '2026-06-17', time: '22:00 ET', group: 'K', team1: 'Uzbekistan', score1: null, team2: 'Colombia', score2: null, venue: '墨西哥城·阿茲特克體育場', status: 'scheduled' },

    // === 6月18日 ===
    { date: '2026-06-18', time: '12:00 ET', group: 'A', team1: 'Czechia', score1: null, team2: 'South Africa', score2: null, venue: '亞特蘭大·梅賽德斯-賓士體育場', status: 'scheduled' },
    { date: '2026-06-18', time: '15:00 ET', group: 'B', team1: 'Switzerland', score1: null, team2: 'Bosnia and Herzegovina', score2: null, venue: '洛杉磯·SoFi體育場', status: 'scheduled' },
    { date: '2026-06-18', time: '18:00 ET', group: 'B', team1: 'Canada', score1: null, team2: 'Qatar', score2: null, venue: '溫哥華·BC Place', status: 'scheduled' },
    { date: '2026-06-18', time: '21:00 ET', group: 'A', team1: 'Mexico', score1: null, team2: 'South Korea', score2: null, venue: '瓜達拉哈拉·阿克隆體育場', status: 'scheduled' },

    // === 6月19日 ===
    { date: '2026-06-19', time: '00:00 ET', group: 'D', team1: 'Turkey', score1: null, team2: 'Paraguay', score2: null, venue: '舊金山·李維斯體育場', status: 'scheduled' },
    { date: '2026-06-19', time: '15:00 ET', group: 'D', team1: 'USA', score1: null, team2: 'Australia', score2: null, venue: '西雅圖·流明球場', status: 'scheduled' },
    { date: '2026-06-19', time: '18:00 ET', group: 'C', team1: 'Scotland', score1: null, team2: 'Morocco', score2: null, venue: '波士頓·吉列體育場', status: 'scheduled' },
    { date: '2026-06-19', time: '21:00 ET', group: 'C', team1: 'Brazil', score1: null, team2: 'Haiti', score2: null, venue: '費城·林肯金融球場', status: 'scheduled' },

    // === 6月20日 ===
    { date: '2026-06-20', time: '13:00 ET', group: 'F', team1: 'Netherlands', score1: null, team2: 'Sweden', score2: null, venue: '休斯頓·NRG體育場', status: 'scheduled' },
    { date: '2026-06-20', time: '00:00 ET', group: 'F', team1: 'Tunisia', score1: null, team2: 'Japan', score2: null, venue: '蒙特雷·BBVA球場', status: 'scheduled' },
    { date: '2026-06-20', time: '16:00 ET', group: 'E', team1: 'Germany', score1: null, team2: 'Ivory Coast', score2: null, venue: '多倫多·BMO球場', status: 'scheduled' },
    { date: '2026-06-20', time: '20:00 ET', group: 'E', team1: 'Ecuador', score1: null, team2: 'Curaçao', score2: null, venue: '堪薩斯城·箭頭體育場', status: 'scheduled' },

    // === 6月21日 ===
    { date: '2026-06-21', time: '12:00 ET', group: 'H', team1: 'Spain', score1: null, team2: 'Saudi Arabia', score2: null, venue: '亞特蘭大·梅賽德斯-賓士體育場', status: 'scheduled' },
    { date: '2026-06-21', time: '15:00 ET', group: 'G', team1: 'Belgium', score1: null, team2: 'Iran', score2: null, venue: '洛杉磯·SoFi體育場', status: 'scheduled' },
    { date: '2026-06-21', time: '18:00 ET', group: 'H', team1: 'Uruguay', score1: null, team2: 'Cape Verde', score2: null, venue: '邁阿密·硬石體育場', status: 'scheduled' },
    { date: '2026-06-21', time: '21:00 ET', group: 'G', team1: 'New Zealand', score1: null, team2: 'Egypt', score2: null, venue: '溫哥華·BC Place', status: 'scheduled' },

    // === 6月22日 ===
    { date: '2026-06-22', time: '13:00 ET', group: 'J', team1: 'Argentina', score1: null, team2: 'Austria', score2: null, venue: '達拉斯·AT&T體育場', status: 'scheduled' },
    { date: '2026-06-22', time: '17:00 ET', group: 'I', team1: 'France', score1: null, team2: 'Iraq', score2: null, venue: '費城·林肯金融球場', status: 'scheduled' },
    { date: '2026-06-22', time: '20:00 ET', group: 'I', team1: 'Norway', score1: null, team2: 'Senegal', score2: null, venue: '紐約/新澤西·大都會人壽體育場', status: 'scheduled' },
    { date: '2026-06-22', time: '23:00 ET', group: 'J', team1: 'Jordan', score1: null, team2: 'Algeria', score2: null, venue: '舊金山·李維斯體育場', status: 'scheduled' },

    // === 6月23日 ===
    { date: '2026-06-23', time: '13:00 ET', group: 'K', team1: 'Portugal', score1: null, team2: 'Uzbekistan', score2: null, venue: '休斯頓·NRG體育場', status: 'scheduled' },
    { date: '2026-06-23', time: '22:00 ET', group: 'K', team1: 'Colombia', score1: null, team2: 'DR Congo', score2: null, venue: '瓜達拉哈拉·阿克隆體育場', status: 'scheduled' },

    // === 6月24日 ===
    { date: '2026-06-24', time: '15:00 ET', group: 'B', team1: 'Switzerland', score1: null, team2: 'Canada', score2: null, venue: '溫哥華·BC Place', status: 'scheduled' },
    { date: '2026-06-24', time: '15:00 ET', group: 'B', team1: 'Bosnia and Herzegovina', score1: null, team2: 'Qatar', score2: null, venue: '西雅圖·流明球場', status: 'scheduled' },
    { date: '2026-06-24', time: '18:00 ET', group: 'C', team1: 'Scotland', score1: null, team2: 'Brazil', score2: null, venue: '邁阿密·硬石體育場', status: 'scheduled' },
    { date: '2026-06-24', time: '18:00 ET', group: 'C', team1: 'Morocco', score1: null, team2: 'Haiti', score2: null, venue: '亞特蘭大·梅賽德斯-賓士體育場', status: 'scheduled' },
    { date: '2026-06-24', time: '21:00 ET', group: 'A', team1: 'Czechia', score1: null, team2: 'Mexico', score2: null, venue: '墨西哥城·阿茲特克體育場', status: 'scheduled' },
    { date: '2026-06-24', time: '21:00 ET', group: 'A', team1: 'South Africa', score1: null, team2: 'South Korea', score2: null, venue: '蒙特雷·BBVA球場', status: 'scheduled' },

    // === 6月25日 ===
    { date: '2026-06-25', time: '16:00 ET', group: 'E', team1: 'Ecuador', score1: null, team2: 'Germany', score2: null, venue: '紐約/新澤西·大都會人壽體育場', status: 'scheduled' },
    { date: '2026-06-25', time: '16:00 ET', group: 'E', team1: 'Curaçao', score1: null, team2: 'Ivory Coast', score2: null, venue: '費城·林肯金融球場', status: 'scheduled' },
    { date: '2026-06-25', time: '19:00 ET', group: 'F', team1: 'Japan', score1: null, team2: 'Sweden', score2: null, venue: '達拉斯·AT&T體育場', status: 'scheduled' },
    { date: '2026-06-25', time: '19:00 ET', group: 'F', team1: 'Tunisia', score1: null, team2: 'Netherlands', score2: null, venue: '堪薩斯城·箭頭體育場', status: 'scheduled' },
    { date: '2026-06-25', time: '22:00 ET', group: 'D', team1: 'Turkey', score1: null, team2: 'USA', score2: null, venue: '洛杉磯·SoFi體育場', status: 'scheduled' },
    { date: '2026-06-25', time: '22:00 ET', group: 'D', team1: 'Paraguay', score1: null, team2: 'Australia', score2: null, venue: '舊金山·李維斯體育場', status: 'scheduled' },

    // === 6月26日 ===
    { date: '2026-06-26', time: '15:00 ET', group: 'I', team1: 'Norway', score1: null, team2: 'France', score2: null, venue: '波士頓·吉列體育場', status: 'scheduled' },
    { date: '2026-06-26', time: '15:00 ET', group: 'I', team1: 'Senegal', score1: null, team2: 'Iraq', score2: null, venue: '多倫多·BMO球場', status: 'scheduled' },
    { date: '2026-06-26', time: '20:00 ET', group: 'H', team1: 'Cape Verde', score1: null, team2: 'Saudi Arabia', score2: null, venue: '休斯頓·NRG體育場', status: 'scheduled' },
    { date: '2026-06-26', time: '20:00 ET', group: 'H', team1: 'Uruguay', score1: null, team2: 'Spain', score2: null, venue: '瓜達拉哈拉·阿克隆體育場', status: 'scheduled' },
    { date: '2026-06-26', time: '23:00 ET', group: 'G', team1: 'Egypt', score1: null, team2: 'Iran', score2: null, venue: '西雅圖·流明球場', status: 'scheduled' },
    { date: '2026-06-26', time: '23:00 ET', group: 'G', team1: 'New Zealand', score1: null, team2: 'Belgium', score2: null, venue: '溫哥華·BC Place', status: 'scheduled' },

    // === 6月27日 ===
    { date: '2026-06-27', time: '19:30 ET', group: 'K', team1: 'Colombia', score1: null, team2: 'Portugal', score2: null, venue: '邁阿密·硬石體育場', status: 'scheduled' },
    { date: '2026-06-27', time: '19:30 ET', group: 'K', team1: 'DR Congo', score1: null, team2: 'Uzbekistan', score2: null, venue: '休斯頓·NRG體育場', status: 'scheduled' },
    { date: '2026-06-27', time: '22:00 ET', group: 'J', team1: 'Algeria', score1: null, team2: 'Austria', score2: null, venue: '堪薩斯城·箭頭體育場', status: 'scheduled' },
    { date: '2026-06-27', time: '22:00 ET', group: 'J', team1: 'Jordan', score1: null, team2: 'Argentina', score2: null, venue: '達拉斯·AT&T體育場', status: 'scheduled' },
  ],

  // 分組積分（賽後更新）
  standings: {
    'A': [
      { team: 'Mexico', played: 1, won: 1, drawn: 0, lost: 0, gf: 2, ga: 0, gd: 2, pts: 3 },
      { team: 'South Korea', played: 1, won: 1, drawn: 0, lost: 0, gf: 2, ga: 1, gd: 1, pts: 3 },
      { team: 'Czechia', played: 1, won: 0, drawn: 0, lost: 1, gf: 1, ga: 2, gd: -1, pts: 0 },
      { team: 'South Africa', played: 1, won: 0, drawn: 0, lost: 1, gf: 0, ga: 2, gd: -2, pts: 0 }
    ],
    'B': [
      { team: 'Canada', played: 1, won: 0, drawn: 1, lost: 0, gf: 1, ga: 1, gd: 0, pts: 1 },
      { team: 'Switzerland', played: 1, won: 0, drawn: 1, lost: 0, gf: 1, ga: 1, gd: 0, pts: 1 },
      { team: 'Qatar', played: 1, won: 0, drawn: 1, lost: 0, gf: 1, ga: 1, gd: 0, pts: 1 },
      { team: 'Bosnia and Herzegovina', played: 1, won: 0, drawn: 1, lost: 0, gf: 1, ga: 1, gd: 0, pts: 1 }
    ],
    'C': [
      { team: 'Scotland', played: 1, won: 1, drawn: 0, lost: 0, gf: 1, ga: 0, gd: 1, pts: 3 },
      { team: 'Brazil', played: 1, won: 0, drawn: 1, lost: 0, gf: 1, ga: 1, gd: 0, pts: 1 },
      { team: 'Morocco', played: 1, won: 0, drawn: 1, lost: 0, gf: 1, ga: 1, gd: 0, pts: 1 },
      { team: 'Haiti', played: 1, won: 0, drawn: 0, lost: 1, gf: 0, ga: 1, gd: -1, pts: 0 }
    ],
    'D': [
      { team: 'USA', played: 1, won: 1, drawn: 0, lost: 0, gf: 4, ga: 1, gd: 3, pts: 3 },
      { team: 'Australia', played: 1, won: 1, drawn: 0, lost: 0, gf: 2, ga: 0, gd: 2, pts: 3 },
      { team: 'Turkey', played: 1, won: 0, drawn: 0, lost: 1, gf: 0, ga: 2, gd: -2, pts: 0 },
      { team: 'Paraguay', played: 1, won: 0, drawn: 0, lost: 1, gf: 1, ga: 4, gd: -3, pts: 0 }
    ],
    'E': [
      { team: 'Germany', played: 0, won: 0, drawn: 0, lost: 0, gf: 0, ga: 0, gd: 0, pts: 0 },
      { team: 'Ecuador', played: 0, won: 0, drawn: 0, lost: 0, gf: 0, ga: 0, gd: 0, pts: 0 },
      { team: 'Ivory Coast', played: 0, won: 0, drawn: 0, lost: 0, gf: 0, ga: 0, gd: 0, pts: 0 },
      { team: 'Curaçao', played: 0, won: 0, drawn: 0, lost: 0, gf: 0, ga: 0, gd: 0, pts: 0 }
    ],
    'F': [
      { team: 'Netherlands', played: 0, won: 0, drawn: 0, lost: 0, gf: 0, ga: 0, gd: 0, pts: 0 },
      { team: 'Japan', played: 0, won: 0, drawn: 0, lost: 0, gf: 0, ga: 0, gd: 0, pts: 0 },
      { team: 'Sweden', played: 0, won: 0, drawn: 0, lost: 0, gf: 0, ga: 0, gd: 0, pts: 0 },
      { team: 'Tunisia', played: 0, won: 0, drawn: 0, lost: 0, gf: 0, ga: 0, gd: 0, pts: 0 }
    ],
    'G': [
      { team: 'Belgium', played: 0, won: 0, drawn: 0, lost: 0, gf: 0, ga: 0, gd: 0, pts: 0 },
      { team: 'Iran', played: 0, won: 0, drawn: 0, lost: 0, gf: 0, ga: 0, gd: 0, pts: 0 },
      { team: 'Egypt', played: 0, won: 0, drawn: 0, lost: 0, gf: 0, ga: 0, gd: 0, pts: 0 },
      { team: 'New Zealand', played: 0, won: 0, drawn: 0, lost: 0, gf: 0, ga: 0, gd: 0, pts: 0 }
    ],
    'H': [
      { team: 'Spain', played: 0, won: 0, drawn: 0, lost: 0, gf: 0, ga: 0, gd: 0, pts: 0 },
      { team: 'Uruguay', played: 0, won: 0, drawn: 0, lost: 0, gf: 0, ga: 0, gd: 0, pts: 0 },
      { team: 'Saudi Arabia', played: 0, won: 0, drawn: 0, lost: 0, gf: 0, ga: 0, gd: 0, pts: 0 },
      { team: 'Cape Verde', played: 0, won: 0, drawn: 0, lost: 0, gf: 0, ga: 0, gd: 0, pts: 0 }
    ],
    'I': [
      { team: 'France', played: 0, won: 0, drawn: 0, lost: 0, gf: 0, ga: 0, gd: 0, pts: 0 },
      { team: 'Senegal', played: 0, won: 0, drawn: 0, lost: 0, gf: 0, ga: 0, gd: 0, pts: 0 },
      { team: 'Norway', played: 0, won: 0, drawn: 0, lost: 0, gf: 0, ga: 0, gd: 0, pts: 0 },
      { team: 'Iraq', played: 0, won: 0, drawn: 0, lost: 0, gf: 0, ga: 0, gd: 0, pts: 0 }
    ],
    'J': [
      { team: 'Argentina', played: 0, won: 0, drawn: 0, lost: 0, gf: 0, ga: 0, gd: 0, pts: 0 },
      { team: 'Austria', played: 0, won: 0, drawn: 0, lost: 0, gf: 0, ga: 0, gd: 0, pts: 0 },
      { team: 'Algeria', played: 0, won: 0, drawn: 0, lost: 0, gf: 0, ga: 0, gd: 0, pts: 0 },
      { team: 'Jordan', played: 0, won: 0, drawn: 0, lost: 0, gf: 0, ga: 0, gd: 0, pts: 0 }
    ],
    'K': [
      { team: 'Portugal', played: 0, won: 0, drawn: 0, lost: 0, gf: 0, ga: 0, gd: 0, pts: 0 },
      { team: 'Colombia', played: 0, won: 0, drawn: 0, lost: 0, gf: 0, ga: 0, gd: 0, pts: 0 },
      { team: 'Uzbekistan', played: 0, won: 0, drawn: 0, lost: 0, gf: 0, ga: 0, gd: 0, pts: 0 },
      { team: 'DR Congo', played: 0, won: 0, drawn: 0, lost: 0, gf: 0, ga: 0, gd: 0, pts: 0 }
    ],
    'L': [
      { team: 'England', played: 0, won: 0, drawn: 0, lost: 0, gf: 0, ga: 0, gd: 0, pts: 0 },
      { team: 'Croatia', played: 0, won: 0, drawn: 0, lost: 0, gf: 0, ga: 0, gd: 0, pts: 0 },
      { team: 'Ghana', played: 0, won: 0, drawn: 0, lost: 0, gf: 0, ga: 0, gd: 0, pts: 0 },
      { team: 'Panama', played: 0, won: 0, drawn: 0, lost: 0, gf: 0, ga: 0, gd: 0, pts: 0 }
    ]
  }
};
