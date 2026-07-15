#!/usr/bin/env python3
"""Fix SF match line to add status and winner"""
path = r"C:\Users\Vincent\worldcup-2026\data\worldcup-data.js"
with open(path, 'r', encoding='utf-8') as f:
    content = f.read()

old = "{ team1: 'France', score1: 0, team2: 'Spain', score2: 2, date: '2026-07-14', venue: '達拉斯·AT&T體育場', time: '20:00 ET', note: '🇫🇷法國 vs 🇪🇸西班牙 — 兩支歐洲最強防守球隊的對決！Mbappé vs Yamal🔥 Merino連兩場淘汰賽絕殺' }"
new = "{ team1: 'France', score1: 0, team2: 'Spain', score2: 2, date: '2026-07-14', venue: '達拉斯·AT&T體育場', time: '20:00 ET', status: 'completed', winner: 'Spain', note: '🇪🇸西班牙 2-0 🇫🇷法國！Oyarzabal 22分鐘點球破門，Porro 58分鐘擴大領先！西班牙完美限制Mbappé全場零射正，時隔16年重返世界盃決賽🔥' }"

if old in content:
    content = content.replace(old, new)
    with open(path, 'w', encoding='utf-8') as f:
        f.write(content)
    print("✅ SF match fully updated with status, winner, and new note")
else:
    print("⚠ Pattern not found!")
    # Show what's on line 3789
    lines = content.split('\n')
    for i, line in enumerate(lines):
        if 'France' in line and 'Spain' in line and 'score1' in line:
            print(f"Line {i+1}: {line}")
