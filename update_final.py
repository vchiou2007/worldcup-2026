#!/usr/bin/env python3
"""Update the World Cup 2026 final result in the data file."""

data_file = 'C:/Users/Vincent/worldcup-2026/data/worldcup-data.js'

with open(data_file, 'r', encoding='utf-8') as f:
    content = f.read()

changes = 0

# 1. Update currentPhase
old_phase = content.find('currentPhase:')
if old_phase != -1:
    line_start = content.rfind('\n', 0, old_phase) + 1
    line_end = content.find('\n', old_phase)
    old_line = content[line_start:line_end]
    new_phase = '    currentPhase: "🏆 2026 世界盃圓滿落幕🏆 ｜ 🏆🇪🇸西班牙 1-0 🇦🇷阿根廷（AET）Ferran Torres加時絕殺！西班牙第二座世界盃冠軍🔥 ｜ 🥉🇫🇷法國 4-6 🇬🇧英格蘭 Saka帽子戲法⚡ ｜ 🥇 Messi 9球金靴·Mbappé 8球·Ferran Torres 4球 ｜ 📅 7/19 更新🔥 西班牙封王！🇪🇸🏆",'
    content = content.replace(old_line, new_phase)
    changes += 1
    print(f"✅ Updated currentPhase")

# 2. Update knockout summary
old_summary = content.find('summary:')
if old_summary != -1:
    line_start = content.rfind('\n', 0, old_summary) + 1
    line_end = content.find('\n', old_summary)
    old_line2 = content[line_start:line_end]
    new_summary = '    summary: "🏆 西班牙 1-0 阿根廷（AET）🇪🇸🏆 ｜ Ferran Torres加時絕殺！西班牙第二座世界盃冠軍🔥 ｜ 🥉英格蘭 6-4 法國奪銅牌！Saka帽子戲法⚡ ｜ 🥇 Messi 9球金靴·Mbappé 8球 ｜ ❌ 已淘汰：🇦🇷🇫🇷🇬🇧🇨🇦🇵🇾🇧🇷🇲🇽🇵🇹🇺🇸🇪🇬🇨🇴🇲🇦🇧🇪🇳🇴🇨🇭",'
    content = content.replace(old_line2, new_summary)
    changes += 1
    print(f"✅ Updated knockout summary")

# 3. Update Final section
old_final_status = "        status: 'upcoming',\n        totalMatches: 1,\n        completedCount: 0,\n        dateRange: '7月19日',\n        venue: '東盧瑟福·大都會人壽體育場',\n        matchups: [\n          { team1: 'Spain', team2: 'Argentina', date: '2026-07-19', venue: '東盧瑟福·大都會人壽體育場', time: '15:00 ET', note: '🏆🇪🇸西班牙 vs 🇦🇷阿根廷 — 2026世界盃決賽！西班牙時隔16年重返決賽舞台⚡阿根廷挑戰連霸🔥 Messi vs Yamal！球王傳承之戰！' }"

new_final_status = "        status: 'completed',\n        totalMatches: 1,\n        completedCount: 1,\n        dateRange: '7月19日',\n        venue: '東盧瑟福·大都會人壽體育場',\n        matchups: [\n          { team1: 'Spain', score1: 1, team2: 'Argentina', score2: 0, date: '2026-07-19', venue: '東盧瑟福·大都會人壽體育場', time: '15:00 ET', status: 'completed', winner: 'Spain', note: '🏆🇪🇸西班牙 1-0 🇦🇷阿根廷（AET）— 2026世界盃決賽！Ferran Torres加時賽第98分鐘補射破門，Enzo Fernández第90+5分鐘兩黃變一紅！西班牙第二座世界盃冠軍🔥' }"

if old_final_status in content:
    content = content.replace(old_final_status, new_final_status)
    changes += 1
    print(f"✅ Updated Final match details")
else:
    print(f"⚠ Could not find Final section text")

with open(data_file, 'w', encoding='utf-8') as f:
    f.write(content)

print(f"\n📊 Total changes made: {changes}")
if changes == 0:
    print("❌ No changes were made!")
else:
    print("✅ Data file updated successfully!")
