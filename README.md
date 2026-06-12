# ⚽ 2026 世界盃足球賽 — 即時資訊站

一個漂亮、即時更新的 2026 世界盃資訊網站，包含：

- **🏠 首頁** — 今日賽程、昨日賽果、分組概覽
- **🏆 分組積分** — 12 組完整積分表與小組賽程
- **🌍 48 隊介紹** — 每隊國旗、FIFA排名、球星（中英文雙語）
- **📅 賽程** — 按日期瀏覽所有 72 場小組賽
- **🏅 淘汰賽** — 淘汰賽階段資訊

## 特色

- 🎨 北歐現代風格設計（深色主題）
- 🇺🇳 所有 48 隊使用國旗 emoji 標示
- ⭐ 球星姓名同時顯示中文與英文
- 📱 響應式設計（電腦／平板／手機）
- 🔄 每日自動更新比賽結果

## 技術架構

```
worldcup-2026/
├── index.html          # 首頁
├── groups.html         # 分組積分
├── teams.html          # 48 隊介紹
├── matches.html        # 賽程
├── knockout.html       # 淘汰賽
├── css/
│   └── style.css       # 主題樣式
├── js/
│   └── app.js          # 渲染引擎
├── data/
│   └── worldcup-data.js # 完整賽事資料
├── update_data.py      # 每日自動更新腳本
└── README.md
```

## 資料來源

- [FIFA 官方網站](https://www.fifa.com/en/tournaments/mens/worldcup/canadamexicousa2026)
- 球星資料來自各主流體育媒體

## 每日更新

網站使用 GitHub Pages 託管，透過 Hermes Agent cron job 每日自動抓取最新賽果並更新。

## 授權

非官方網站，僅供個人使用。
