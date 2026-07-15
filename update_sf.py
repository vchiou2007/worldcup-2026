#!/usr/bin/env python3
"""Update SF result: France 0-2 Spain"""
import re

path = r"C:\Users\Vincent\worldcup-2026\data\worldcup-data.js"
with open(path, 'r', encoding='utf-8') as f:
    content = f.read()

# 1. Update tournament.currentPhase
content = content.replace(
    'currentPhase: "🔥 8強賽全數戰果🔥 ｜ 🏆 🇦🇷阿根廷延長賽3-1🇨🇭瑞士晉級4強！Alvarez第112分鐘世界波絕殺🔥 ｜ 📅 7/12 更新：📍 準決賽對陣出爐！🇫🇷法國vs🇪🇸西班牙（7/14·達拉斯）🔥 · 🇬🇧英格蘭vs🇦🇷阿根廷（7/15·亞特蘭大）🔥 ｜ 🥇 Messi 8球領先金靴 · Mbappé 8球 · Haaland 7球 ｜ ❌ 已淘汰：🇨🇦🇵🇾🇧🇷🇲🇽🇵🇹🇺🇸🇪🇬🇨🇴🇲🇦🇧🇪🇳🇴🇨🇭｜ 🏆 8強賽全部結束！史上首次世界排名前4球隊同時晉級4強！🔥"',
    'currentPhase: "🔥 準決賽戰果🔥 ｜ 🇪🇸西班牙2-0🇫🇷法國晉級決賽！時隔16年重返榮耀🔥 ｜ 📅 7/14 更新：📍 第二場準決賽：🇬🇧英格蘭vs🇦🇷阿根廷（7/15·亞特蘭大）🔥 ｜ 🥇 Messi 8球 · Mbappé 8球 · Haaland 7球 ｜ ❌ 已淘汰：🇫🇷🇨🇦🇵🇾🇧🇷🇲🇽🇵🇹🇺🇸🇪🇬🇨🇴🇲🇦🇧🇪🇳🇴🇨🇭｜ 🏆 西班牙完美防守零封法國！Mbappé全場零射正⚡"'
)

# 2. Update knockout summary
content = content.replace(
    'summary: "🔥 8強賽全數戰果！阿根廷延長賽3-1瑞士晉級4強🔥 ｜ 準決賽對陣出爐！🇫🇷法國vs🇪🇸西班牙（7/14·達拉斯）·🇬🇧英格蘭vs🇦🇷阿根廷（7/15·亞特蘭大）🔥 ｜ 🥇 Messi 8球領先金靴｜ 8強賽全部結束！史上首次世界排名前4球隊同時晉級4強！🔥"',
    'summary: "🔥 準決賽戰果！🇪🇸西班牙 2-0 🇫🇷法國重返決賽🔥 ｜ Oyarzabal點球+Porro進球，西班牙完美防守零封法國！Mbappé全場零射正⚡ ｜ 另一場準決賽：🇬🇧英格蘭 vs 🇦🇷阿根廷（7/15·亞特蘭大）🔥 Messi vs Bellingham！🥇 Messi 8球 · Mbappé 8球 · Haaland 7球 ｜ 🏆 西班牙時隔16年重返世界盃決賽！史上首次歐洲冠軍=世界盃冠軍候選🔥｜ ❌ 已淘汰：🇫🇷🇨🇦🇵🇾🇧🇷🇲🇽🇵🇹🇺🇸🇪🇬🇨🇴🇲🇦🇧🇪🇳🇴🇨🇭"'
)

# 3. Update SF round status
content = content.replace(
    "        status: 'upcoming',\n        totalMatches: 2,\n        completedCount: 0,\n        dateRange: '7月14日 — 7月15日',\n        matchups: [\n          { team1: 'France', team2: 'Spain'",
    "        status: 'in_progress',\n        totalMatches: 2,\n        completedCount: 1,\n        dateRange: '7月14日 — 7月15日',\n        matchups: [\n          { team1: 'France', score1: 0, team2: 'Spain', score2: 2"
)

# 4. Update France vs Spain match in SF
content = content.replace(
    "{ team1: 'France', team2: 'Spain', date: '2026-07-14', venue: '達拉斯·AT&T體育場', time: '20:00 ET', note: '🇫🇷法國 vs 🇪🇸西班牙 — 兩支歐洲最強防守球隊的對決！Mbappé vs Yamal🔥 Merino連兩場淘汰賽絕殺' }",
    "{ team1: 'France', score1: 0, team2: 'Spain', score2: 2, date: '2026-07-14', venue: '達拉斯·AT&T體育場', time: '20:00 ET', status: 'completed', winner: 'Spain', note: '🇪🇸西班牙 2-0 🇫🇷法國！Oyarzabal 22分鐘點球破門，Porro 58分鐘擴大領先！西班牙完美限制Mbappé全場零射正，時隔16年重返世界盃決賽🔥' }"
)

# 5. Update Final section to include Spain as team1
old_final = '''      Final: {
        order: 5,
        name: '決賽', nameEn: 'Final',
        status: 'upcoming',
        totalMatches: 1,
        completedCount: 0,
        dateRange: '7月19日',
        venue: '東盧瑟福·大都會人壽體育場'
      }'''

new_final = '''      Final: {
        order: 5,
        name: '決賽', nameEn: 'Final',
        status: 'upcoming',
        totalMatches: 1,
        completedCount: 0,
        dateRange: '7月19日',
        venue: '東盧瑟福·大都會人壽體育場',
        matchups: [
          { team1: 'Spain', team2: 'TBD', date: '2026-07-19', venue: '東盧瑟福·大都會人壽體育場', time: '15:00 ET', note: '🇪🇸西班牙 vs 待定 — 2026世界盃決賽！西班牙時隔16年重返決賽舞台🔥' }
        ]
      }'''

content = content.replace(old_final, new_final)

with open(path, 'w', encoding='utf-8') as f:
    f.write(content)

print("✅ SF result updated: France 0-2 Spain")
print("✅ Final section updated with Spain")
