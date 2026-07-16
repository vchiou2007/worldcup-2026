#!/usr/bin/env python3
"""Fetch ALL remaining player images - better strategy"""
import json, urllib.request, urllib.parse, re, os, time, random

DATA_FILE = 'C:/Users/Vincent/worldcup-2026/data/worldcup-data.js'
OUTPUT_FILE = 'C:/Users/Vincent/worldcup-2026/data/player_images.js'

with open(DATA_FILE, 'r', encoding='utf-8') as f:
    content = f.read()

# Read existing images
existing = {}
try:
    with open(OUTPUT_FILE, 'r', encoding='utf-8') as f:
        existing_raw = f.read()
    for m in re.finditer(r"'([^']+)':\s*'([^']+)'", existing_raw):
        existing[m.group(1)] = m.group(2)
except: pass

print(f"Existing images: {len(existing)}")

# All players
pattern = r"\{\s*name:\s*'([^']+)'\s*,\s*nameEn:\s*'([^']+)'"
matches = re.findall(pattern, content)
total = len(matches)
print(f"Total players: {total}")

missing = [(zh, en) for zh, en in matches if en not in existing]
print(f"Missing: {len(missing)}")

# Wikipedia search + image
def wiki_search_get_image(name):
    """Search Wikipedia, then get page image"""
    try:
        # Step 1: Search
        params = {'action':'query','list':'search','srsearch':name+' footballer','srlimit':3,'format':'json'}
        url = 'https://en.wikipedia.org/w/api.php?' + urllib.parse.urlencode(params)
        req = urllib.request.Request(url, headers={'User-Agent':'WorldCup/1.0'})
        with urllib.request.urlopen(req, timeout=10) as resp:
            data = json.loads(resp.read())
        titles = [r['title'] for r in data['query']['search'][:3]]
        
        # Step 2: Get images for each title
        for title in titles:
            params2 = {'action':'query','titles':title,'prop':'pageimages','format':'json','pithumbsize':200}
            url2 = 'https://en.wikipedia.org/w/api.php?' + urllib.parse.urlencode(params2)
            req2 = urllib.request.Request(url2, headers={'User-Agent':'WorldCup/1.0'})
            with urllib.request.urlopen(req2, timeout=10) as resp2:
                data2 = json.loads(resp2.read())
            for pid, info in data2['query']['pages'].items():
                if pid != '-1' and 'thumbnail' in info:
                    return info['thumbnail']['source']
    except: pass
    return None

# TheSportsDB search
SPORTSDB = "https://www.thesportsdb.com/api/v1/json/3"
def tsdb_search(name):
    """Search TheSportsDB for player"""
    try:
        url = f"{SPORTSDB}/searchplayers.php?p={urllib.parse.quote(name)}"
        req = urllib.request.Request(url, headers={'User-Agent':'WorldCup/1.0'})
        with urllib.request.urlopen(req, timeout=10) as resp:
            data = json.loads(resp.read())
        if data.get('player'):
            for p in data['player']:
                if p.get('strSport') == 'Soccer':
                    img = p.get('strThumb') or p.get('strCutout') or p.get('strRender')
                    if img:
                        return img.replace('\\/', '/')
    except: pass
    return None

# Process missing players
new_found = 0
for idx, (name_zh, name_en) in enumerate(missing):
    if idx % 5 == 0:
        print(f"Progress: {idx}/{len(missing)} - new found: {new_found}")
    
    img = None
    
    # Strategy 1: Search Wikipedia for full name + footballer
    if random.random() < 0.3:  # Only try Wikipedia occasionally (it's slow)
        img = wiki_search_get_image(name_en)
        if img:
            existing[name_en] = img
            new_found += 1
            print(f"  ✓ [wiki] {name_en}")
            time.sleep(0.5)
            continue
    
    # Strategy 2: TheSportsDB
    img = tsdb_search(name_en)
    if img:
        existing[name_en] = img
        new_found += 1
        print(f"  ✓ [tsdb] {name_en}")
        time.sleep(0.3)
        continue
    
    # Strategy 3: Just last name on TheSportsDB
    last = name_en.split()[-1]
    if last != name_en:
        img = tsdb_search(last)
        if img:
            existing[name_en] = img
            new_found += 1
            print(f"  ~ [tsdb:{last}] {name_en}")
            time.sleep(0.3)
            continue
    
    time.sleep(0.1)

print(f"\n=== NEW FOUND: {new_found} ===")
print(f"=== TOTAL: {len(existing)}/{total} ===")

# Write final output
lines = []
for name, url in sorted(existing.items()):
    safe_url = url.replace("'", "\\'")
    lines.append(f"  '{name}': '{safe_url}'")

with open(OUTPUT_FILE, 'w', encoding='utf-8') as f:
    f.write('// Auto-generated player images\n')
    f.write('const PLAYER_IMAGES = {\n')
    f.write(',\n'.join(lines))
    f.write('\n};\n')
    # Preserve HERO_IMAGES and HERO_CAPTIONS if they exist
    f.write("""
// ===== 輪播牆圖片 =====
var HERO_IMAGES = [
  'https://www.dailypress.com/wp-content/uploads/2026/06/AP26162729655983-1.jpg',
  'https://www.dailypress.com/wp-content/uploads/2026/06/AP26162635668484.jpg',
  'https://www.dailypress.com/wp-content/uploads/2026/06/AP26162724799876.jpg',
  'https://www.dailypress.com/wp-content/uploads/2026/06/AP26162779340073.jpg',
  'https://www.dailypress.com/wp-content/uploads/2026/06/AP26162735903816.jpg'
];

var HERO_CAPTIONS = [
  '🇲🇽 墨西哥 vs 🇿🇦 南非 — 2026 世界盃揭幕戰 @ 阿茲特克體育場',
  '🌎 全球球迷齊聚墨西哥城，迎接世界盃開幕',
  '⚽ 墨西哥球迷熱情高漲，慶祝主場開幕戰',
  '🏟️ 阿茲特克體育場 — 史上首座三度舉辦世界盃的球場',
  '🎊 開幕式盛大登場，Shakira 與 Burna Boy 聯袂演出'
];
""")

print(f"Written to {OUTPUT_FILE}")
