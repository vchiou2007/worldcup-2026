#!/usr/bin/env python3
"""Fetch all player images from TheSportsDB API"""
import json, urllib.request, urllib.parse, re, os, time

DATA_FILE = 'C:/Users/Vincent/worldcup-2026/data/worldcup-data.js'

with open(DATA_FILE, 'r', encoding='utf-8') as f:
    content = f.read()

pattern = r"\{\s*name:\s*'([^']+)'\s*,\s*nameEn:\s*'([^']+)'"
matches = re.findall(pattern, content)
print(f"Total players: {len(matches)}")

API_BASE = "https://www.thesportsdb.com/api/v1/json/3"

def search_player(name):
    try:
        url = f"{API_BASE}/searchplayers.php?p={urllib.parse.quote(name)}"
        req = urllib.request.Request(url, headers={'User-Agent': 'WorldCup2026/1.0'})
        with urllib.request.urlopen(req, timeout=10) as resp:
            data = json.loads(resp.read())
        if data.get('player'):
            for p in data['player']:
                if p.get('strSport') == 'Soccer':
                    thumb = p.get('strThumb') or p.get('strCutout') or p.get('strRender')
                    if thumb:
                        return thumb
    except: pass
    return None

def search_team_players(team, player_name):
    """Try searching by team first"""
    try:
        # Search for team
        url = f"{API_BASE}/searchteams.php?t={urllib.parse.quote(team)}"
        req = urllib.request.Request(url, headers={'User-Agent': 'WorldCup2026/1.0'})
        with urllib.request.urlopen(req, timeout=10) as resp:
            data = json.loads(resp.read())
        if data.get('teams'):
            team_id = data['teams'][0].get('idTeam')
            if team_id:
                # Get team players
                url2 = f"{API_BASE}/lookup_all_players.php?id={team_id}"
                req2 = urllib.request.Request(url2, headers={'User-Agent': 'WorldCup2026/1.0'})
                with urllib.request.urlopen(req2, timeout=10) as resp2:
                    data2 = json.loads(resp2.read())
                if data2.get('player'):
                    for p in data2['player']:
                        pname = p.get('strPlayer','').lower()
                        if player_name.lower() in pname:
                            return p.get('strThumb') or p.get('strCutout')
    except: pass
    return None

# Team name mapping for TheSportsDB
TEAM_MAP = {
    'Mexico': 'Mexico', 'South Korea': 'South_Korea', 'South Africa': 'South_Africa', 
    'Czechia': 'Czech_Republic', 'Canada': 'Canada', 'Switzerland': 'Switzerland',
    'Qatar': 'Qatar', 'Bosnia and Herzegovina': 'Bosnia_Herzegovina',
    'Brazil': 'Brazil', 'Morocco': 'Morocco', 'Scotland': 'Scotland', 'Haiti': 'Haiti',
    'USA': 'United_States', 'Paraguay': 'Paraguay', 'Australia': 'Australia', 'Turkey': 'Turkey',
    'Germany': 'Germany', 'Ecuador': 'Ecuador', 'Ivory Coast': 'Ivory_Coast', 'Curaçao': 'Curacao',
    'Netherlands': 'Netherlands', 'Japan': 'Japan', 'Sweden': 'Sweden', 'Tunisia': 'Tunisia',
    'Belgium': 'Belgium', 'Iran': 'Iran', 'Egypt': 'Egypt', 'New Zealand': 'New_Zealand',
    'Spain': 'Spain', 'Uruguay': 'Uruguay', 'Saudi Arabia': 'Saudi_Arabia', 'Cape Verde': 'Cape_Verde',
    'France': 'France', 'Senegal': 'Senegal', 'Norway': 'Norway', 'Iraq': 'Iraq',
    'Argentina': 'Argentina', 'Austria': 'Austria', 'Algeria': 'Algeria', 'Jordan': 'Jordan',
    'Portugal': 'Portugal', 'Colombia': 'Colombia', 'Uzbekistan': 'Uzbekistan', 'DR Congo': 'DR_Congo',
    'England': 'England', 'Croatia': 'Croatia', 'Ghana': 'Ghana', 'Panama': 'Panama'
}

# Get all team→players mapping
players_by_team = {}
for name_zh, name_en in matches:
    # Find which team this player belongs to
    for g in ['A','B','C','D','E','F','G','H','I','J','K','L']:
        # We need to parse the JS more carefully to get the team
        pass
    
    # Just do simple search for now
    if name_en not in players_by_team:
        players_by_team[name_en] = name_en.split()[-1] if len(name_en.split()) > 1 else name_en

results = {}
# Use the 6 we already have from Wikipedia
results['Raúl Jiménez'] = 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/de/Ra%C3%BAl_Jim%C3%A9nez_04032026_%281%29.jpg/250px-Ra%C3%BAl_Jim%C3%A9nez_04032026_%281%29.jpg'
results['Gilberto Mora'] = 'https://upload.wikimedia.org/wikipedia/commons/e/e9/Gilberto_Mora.png'
results['Julián Quiñones'] = 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/Juli%C3%A1n_Qui%C3%B1ones.png/250px-Juli%C3%A1n_Qui%C3%B1ones.png'
results['Son Heung-min'] = 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b0/BFA_2023_-2_Heung-Min_Son_%28cropped%29.jpg/250px-BFA_2023_-2_Heung-Min_Son_%28cropped%29.jpg'
results['Lee Kang-in'] = 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/13/Lee_Kang-in_-_2022_%2852551771501%29_%28cropped%29.jpg/250px-Lee_Kang-in_-_2022_%2852551771501%29_%28cropped%29.jpg'
results['Kim Min-jae'] = 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/80/FC_Red_Bull_Salzburg_gegen_Bayern_M%C3%BCnchen_%282025-01-06_Testspiel%29_26.jpg/250px-FC_Red_Bull_Salzburg_gegen_Bayern_M%C3%BCnchen_%282025-01-06_Testspiel%29_26.jpg'
results['Patrik Schick'] = 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/71/2020-03-10_Fu%C3%9Fball%2C_M%C3%A4nner%2C_UEFA_Champions_League_Achtelfinale%2C_RB_Leipzig_-_Tottenham_Hotspur_1DX_3672_by_Stepro.jpg/250px-2020-03-10_Fu%C3%9Fball%2C_M%C3%A4nner%2C_UEFA_Champions_League_Achtelfinale%2C_RB_Leipzig_-_Tottenham_Hotspur_1DX_3672_by_Stepro.jpg'
results['Ronwen Williams'] = 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/89/Ronwen_Williams_AFCON2025Q_35.jpg/250px-Ronwen_Williams_AFCON2025Q_35.jpg'

# Now query TheSportsDB for ALL players
for idx, (name_zh, name_en) in enumerate(matches):
    if name_en in results:
        continue
    
    if idx % 10 == 0:
        print(f"Progress: {idx}/{len(matches)} - found {len(results)} so far")
    
    # Try direct player search
    img = search_player(name_en)
    if img:
        results[name_en] = img.replace('\\/', '/')
        print(f"  ✓ {name_en}")
        continue
    
    # Try with just last name
    last = name_en.split()[-1]
    if last != name_en:
        img = search_player(last)
        if img:
            results[name_en] = img.replace('\\/', '/')
            print(f"  ~ {name_en}")
            continue
    
    time.sleep(0.05)

print(f"\n=== TOTAL: {len(results)}/{len(matches)} ===")

# Output JS
lines = []
for name, url in sorted(results.items()):
    safe_url = url.replace("'", "\\'")
    lines.append(f"  '{name}': '{safe_url}'")

with open('C:/Users/Vincent/worldcup-2026/data/player_images.js', 'w', encoding='utf-8') as f:
    f.write('// Auto-generated player images from TheSportsDB + Wikipedia\n')
    f.write('const PLAYER_IMAGES = {\n')
    f.write(',\n'.join(lines))
    f.write('\n};\n')

print(f"Written to data/player_images.js with {len(results)} entries")
