// 世界盃歷史成績 — 歷屆前八名
// 積分：冠軍8分、亞軍7分、季軍6分、第四名5分、八強2分

const WC_HISTORY = {
  // 額外國旗對應（歷史國家）
  extraFlags: {
    'Italy': '🇮🇹', 'Hungary': '🇭🇺', 'USSR': '🇷🇺', 'Yugoslavia': '🇷🇸',
    'Czechoslovakia': '🇨🇿', 'Chile': '🇨🇱', 'Cuba': '🇨🇺', 'Poland': '🇵🇱',
    'Bulgaria': '🇧🇬', 'Cameroon': '🇨🇲', 'Denmark': '🇩🇰', 'Nigeria': '🇳🇬',
    'Romania': '🇷🇴', 'Republic of Ireland': '🇮🇪', 'Costa Rica': '🇨🇷',
    'Serbia and Montenegro': '🇷🇸', 'East Germany': '🇩🇪',
    'United States': '🇺🇸', 'West Germany': '🇩🇪', 'Northern Ireland': '🇬🇧',
    'Wales': '🏴󠁧󠁢󠁷󠁬󠁳󠁿', 'Peru': '🇵🇪', 'Ukraine': '🇺🇦',
    'North Korea': '🇰🇵', 'Russia': '🇷🇺'
  },
  // flagcdn 代碼（歷史國家）
  extraFlagCodes: {
    'Italy': 'it', 'Hungary': 'hu', 'USSR': 'ru', 'Yugoslavia': 'rs',
    'Czechoslovakia': 'cz', 'Chile': 'cl', 'Cuba': 'cu', 'Poland': 'pl',
    'Bulgaria': 'bg', 'Cameroon': 'cm', 'Denmark': 'dk', 'Nigeria': 'ng',
    'Romania': 'ro', 'Republic of Ireland': 'ie', 'Costa Rica': 'cr',
    'Serbia and Montenegro': 'rs', 'East Germany': 'de',
    'United States': 'us', 'West Germany': 'de', 'Northern Ireland': 'gb-nir',
    'Wales': 'gb-wls', 'Peru': 'pe', 'Ukraine': 'ua', 'North Korea': 'kp',
    'Russia': 'ru'
  },
  // 中文名稱對應
  nameZh: {
    'Italy': '義大利', 'Hungary': '匈牙利', 'USSR': '蘇聯', 'Yugoslavia': '南斯拉夫',
    'Czechoslovakia': '捷克斯洛伐克', 'Chile': '智利', 'Cuba': '古巴', 'Poland': '波蘭',
    'Bulgaria': '保加利亞', 'Cameroon': '喀麥隆', 'Denmark': '丹麥', 'Nigeria': '奈及利亞',
    'Romania': '羅馬尼亞', 'Republic of Ireland': '愛爾蘭', 'Costa Rica': '哥斯大黎加',
    'Serbia and Montenegro': '塞蒙', 'East Germany': '東德', 'United States': '美國',
    'West Germany': '西德', 'Northern Ireland': '北愛爾蘭', 'Wales': '威爾斯',
    'Peru': '祕魯', 'Ukraine': '烏克蘭', 'North Korea': '北韓', 'Russia': '俄羅斯',
    'South Korea': '南韓', 'Sweden': '瑞典', 'Spain': '西班牙', 'Brazil': '巴西',
    'Argentina': '阿根廷', 'Uruguay': '烏拉圭', 'Netherlands': '荷蘭', 'France': '法國',
    'England': '英格蘭', 'Germany': '德國', 'Portugal': '葡萄牙', 'Belgium': '比利時',
    'Croatia': '克羅埃西亞', 'Turkey': '土耳其', 'Morocco': '摩洛哥', 'Senegal': '塞內加爾',
    'Switzerland': '瑞士', 'Austria': '奧地利', 'Australia': '澳洲', 'Japan': '日本',
    'Paraguay': '巴拉圭', 'Ghana': '迦納', 'Colombia': '哥倫比亞', 'Norway': '挪威',
    'Saudi Arabia': '沙烏地阿拉伯'
  },

  // 歷屆世界盃資料
  tournaments: [
    {
      year: 1930, host: '烏拉圭', champion: 'Uruguay',
      top8: ['Uruguay', 'Argentina', 'United States', 'Yugoslavia'],
      note: '13隊參賽，僅前四名'
    },
    {
      year: 1934, host: '義大利', champion: 'Italy',
      top4: ['Italy', 'Czechoslovakia', 'Germany', 'Austria'],
      qf: ['Spain', 'Sweden', 'Switzerland', 'Hungary'],
      note: '16隊全程淘汰制'
    },
    {
      year: 1938, host: '法國', champion: 'Italy',
      top4: ['Italy', 'Hungary', 'Brazil', 'Sweden'],
      qf: ['France', 'Czechoslovakia', 'Switzerland', 'Cuba'],
      note: '15隊參賽'
    },
    {
      year: 1950, host: '巴西', champion: 'Uruguay',
      top8: ['Uruguay', 'Brazil', 'Sweden', 'Spain'],
      note: '13隊，決賽循環制，僅取前四名'
    },
    {
      year: 1954, host: '瑞士', champion: 'West Germany',
      top4: ['West Germany', 'Hungary', 'Austria', 'Uruguay'],
      qf: ['Switzerland', 'Brazil', 'England', 'Yugoslavia'],
      note: '16隊，小組+淘汰賽'
    },
    {
      year: 1958, host: '瑞典', champion: 'Brazil',
      top4: ['Brazil', 'Sweden', 'France', 'West Germany'],
      qf: ['Wales', 'USSR', 'Northern Ireland', 'Yugoslavia'],
      note: '🇸🇪Pele 17歲首秀'
    },
    {
      year: 1962, host: '智利', champion: 'Brazil',
      top4: ['Brazil', 'Czechoslovakia', 'Chile', 'Yugoslavia'],
      qf: ['England', 'USSR', 'Hungary', 'West Germany'],
      note: '🇧🇷Brazil 二連冠'
    },
    {
      year: 1966, host: '英格蘭', champion: 'England',
      top4: ['England', 'West Germany', 'Portugal', 'USSR'],
      qf: ['Argentina', 'Hungary', 'Uruguay', 'North Korea'],
      note: '🏴󠁧󠁢󠁥󠁮󠁧󠁿英格蘭唯一冠軍'
    },
    {
      year: 1970, host: '墨西哥', champion: 'Brazil',
      top4: ['Brazil', 'Italy', 'West Germany', 'Uruguay'],
      qf: ['Peru', 'Sweden', 'USSR', 'Mexico'],
      note: '🇧🇷三冠王永久保留雷米金盃'
    },
    {
      year: 1974, host: '西德', champion: 'West Germany',
      top4: ['West Germany', 'Netherlands', 'Poland', 'Brazil'],
      qf: ['Sweden', 'East Germany', 'Yugoslavia', 'Argentina'],
      note: '全新大力神盃·荷蘭全能足球'
    },
    {
      year: 1978, host: '阿根廷', champion: 'Argentina',
      top4: ['Argentina', 'Netherlands', 'Brazil', 'Italy'],
      qf: ['Poland', 'West Germany', 'Austria', 'Peru'],
      note: '🇦🇷阿根廷首冠'
    },
    {
      year: 1982, host: '西班牙', champion: 'Italy',
      top4: ['Italy', 'West Germany', 'Poland', 'France'],
      qf: ['Belgium', 'England', 'Spain', 'Brazil'],
      note: '24隊擴編·義大利第三冠'
    },
    {
      year: 1986, host: '墨西哥', champion: 'Argentina',
      top4: ['Argentina', 'West Germany', 'France', 'Belgium'],
      qf: ['Brazil', 'England', 'Spain', 'Mexico'],
      note: '🇦🇷馬拉度納上帝之手+世紀進球'
    },
    {
      year: 1990, host: '義大利', champion: 'West Germany',
      top4: ['West Germany', 'Argentina', 'Italy', 'England'],
      qf: ['Yugoslavia', 'Czechoslovakia', 'Cameroon', 'Republic of Ireland'],
      note: '🇩🇪西德統一前最後一冠'
    },
    {
      year: 1994, host: '美國', champion: 'Brazil',
      top4: ['Brazil', 'Italy', 'Sweden', 'Bulgaria'],
      qf: ['Germany', 'Romania', 'Netherlands', 'Spain'],
      note: '🇧🇷四冠·首屆決賽PK·Baggio失點'
    },
    {
      year: 1998, host: '法國', champion: 'France',
      top4: ['France', 'Brazil', 'Croatia', 'Netherlands'],
      qf: ['Italy', 'Germany', 'Argentina', 'Denmark'],
      note: '🇫🇷法國首冠·32隊·Zidane 2頭槌'
    },
    {
      year: 2002, host: '韓國/日本', champion: 'Brazil',
      top4: ['Brazil', 'Germany', 'Turkey', 'South Korea'],
      qf: ['England', 'Senegal', 'Spain', 'USA'],
      note: '🇧🇷五冠·Ronaldo決賽2球'
    },
    {
      year: 2006, host: '德國', champion: 'Italy',
      top4: ['Italy', 'France', 'Germany', 'Portugal'],
      qf: ['Argentina', 'England', 'Brazil', 'Ukraine'],
      note: '🇮🇹義大利四冠·Zidane頭槌事件'
    },
    {
      year: 2010, host: '南非', champion: 'Spain',
      top4: ['Spain', 'Netherlands', 'Germany', 'Uruguay'],
      qf: ['Argentina', 'Brazil', 'Paraguay', 'Ghana'],
      note: '🇪🇸西班牙首冠·Iniesta116分鐘絕殺'
    },
    {
      year: 2014, host: '巴西', champion: 'Germany',
      top4: ['Germany', 'Argentina', 'Netherlands', 'Brazil'],
      qf: ['France', 'Belgium', 'Costa Rica', 'Colombia'],
      note: '🇩🇪德國四冠·7-1巴西·Messi金球'
    },
    {
      year: 2018, host: '俄羅斯', champion: 'France',
      top4: ['France', 'Croatia', 'Belgium', 'England'],
      qf: ['Uruguay', 'Brazil', 'Sweden', 'Russia'],
      note: '🇫🇷法國二冠·Mbappé決賽進球·VAR啟用'
    },
    {
      year: 2022, host: '卡達', champion: 'Argentina',
      top4: ['Argentina', 'France', 'Croatia', 'Morocco'],
      qf: ['Netherlands', 'England', 'Brazil', 'Portugal'],
      note: '🇦🇷阿根廷三冠·Messi封神·Mbappé帽子戲法'
    },
    {
      year: 2026, host: '美國/加拿大/墨西哥', champion: 'Spain',
      top4: ['Spain', 'Argentina', 'England', 'France'],
      qf: ['Morocco', 'Belgium', 'Norway', 'Switzerland'],
      note: '🇪🇸西班牙二冠·48隊·Ferran Torres絕殺'
    }
  ],

  // 計算各國歷史積分
  getRankings() {
    const pts = {};
    
    for (const t of this.tournaments) {
      const final4 = t.top4 || (t.top8 ? t.top8.slice(0, 4) : []);
      const qf = t.qf || [];
      
      // 冠軍 8分
      if (final4[0]) pts[final4[0]] = (pts[final4[0]] || 0) + 8;
      // 亞軍 7分
      if (final4[1]) pts[final4[1]] = (pts[final4[1]] || 0) + 7;
      // 季軍 6分
      if (final4[2]) pts[final4[2]] = (pts[final4[2]] || 0) + 6;
      // 第四名 5分
      if (final4[3]) pts[final4[3]] = (pts[final4[3]] || 0) + 5;
      
      // 八強（5-8名）各 2分
      if (qf.length) {
        for (const team of qf) {
          pts[team] = (pts[team] || 0) + 2;
        }
      }
      
      // top8 但無 qf 欄位（如1930/1950），多出的隊伍給2分
      if (t.top8 && t.top8.length > 4 && !qf.length && !t.top4) {
        for (let i = 4; i < t.top8.length; i++) {
          pts[t.top8[i]] = (pts[t.top8[i]] || 0) + 2;
        }
      }
    }
    
    // 排序輸出
    return Object.entries(pts)
      .map(([country, score]) => ({ country, score }))
      .sort((a, b) => b.score - a.score);
  },

  // 獲取國家中文名（優先從 history，其次從 WC_DATA）
  getNameZh(country) {
    if (this.nameZh[country]) return this.nameZh[country];
    if (typeof WC_DATA !== 'undefined') {
      for (const g of WC_DATA.groups) {
        for (const tm of g.teams) {
          if (tm.name === country) return tm.nameZh;
        }
      }
    }
    return country;
  }
};

if (typeof window !== 'undefined') {
  window.WC_HISTORY = WC_HISTORY;
}
