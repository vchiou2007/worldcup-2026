import json, urllib.request, urllib.parse, re, time

IMAGES_FILE = 'C:/Users/Vincent/worldcup-2026/data/player_images.js'
MISSING = [
    'Antoine Griezmann', 'Bernardo Silva', 'Bruno Fernandes', 'Bukayo Saka',
    'Cristiano Ronaldo', 'Cédric Bakambu', 'Darwin Núñez', 'David Alaba',
    'Enzo Fernández', 'Erling Haaland', 'Federico Valverde',
    'Harry Kane', 'Ivan Perišić', 'Iñaki Williams', 'James Rodríguez',
    'Jude Bellingham', 'Julián Álvarez', 'Kalidou Koulibaly',
    'Kylian Mbappé', 'Lamine Yamal', 'Lionel Messi',
    'Luis Díaz', 'Marcel Sabitzer', 'Marko Arnautović',
    'Martin Ødegaard', 'Mateo Kovačić', 'Mohammed Kudus',
    'Nico Williams', 'Pedri', 'Riyad Mahrez',
    'Ronald Araújo', 'Sadio Mané', 'Thomas Partey', 'William Saliba',
    'Ismaïla Sarr', 'Ismaël Bennacer', 'Chancel Mbemba',
    'Davinson Sánchez', 'Mousa Al-Tamari', 'Salem Al-Dawsari',
    'Adalberto Carrasquilla', 'Abdukodir Khusanov', 'Eldor Shomurodov',
    'Ali Adnan', 'Aymen Hussein', 'Fredrik Aursnes',
    'Fahad Al-Muwallad', 'Ryan Mendes', 'Yazan Al-Naimat', 'Livramento', 'Isac Díaz'
]

# Wikipedia: first search, then get image
def get_wiki_image(name):
    try:
        # Search
        search_term = name + ' football'
        params = {'action':'query','list':'search','srsearch':search_term,'srlimit':1,'format':'json'}
        url = 'https://en.wikipedia.org/w/api.php?' + urllib.parse.urlencode(params)
        req = urllib.request.Request(url, headers={'User-Agent':'WorldCupApp/1.0 (contact@example.com)'})
        with urllib.request.urlopen(req, timeout=10) as r:
            d = json.loads(r.read())
        if not d.get('query',{}).get('search'): return None
        title = d['query']['search'][0]['title']
        
        # Get image
        params2 = {'action':'query','titles':title,'prop':'pageimages','format':'json','pithumbsize':200}
        url2 = 'https://en.wikipedia.org/w/api.php?' + urllib.parse.urlencode(params2)
        req2 = urllib.request.Request(url2, headers={'User-Agent':'WorldCupApp/1.0'})
        with urllib.request.urlopen(req2, timeout=10) as r2:
            d2 = json.loads(r2.read())
        for pid, info in d2['query']['pages'].items():
            if pid != '-1' and 'thumbnail' in info:
                return info['thumbnail']['source']
    except: pass
    return None

# Also try TheSportsDB
def get_tsdb(name):
    try:
        u = f"https://www.thesportsdb.com/api/v1/json/3/searchplayers.php?p={urllib.parse.quote(name)}"
        req = urllib.request.Request(u, headers={'User-Agent':'WorldCupApp/1.0'})
        with urllib.request.urlopen(req, timeout=10) as r:
            d = json.loads(r.read())
        if d.get('player'):
            for p in d['player']:
                if p.get('strSport') == 'Soccer':
                    img = p.get('strThumb') or p.get('strCutout')
                    if img: return img.replace('\\/', '/')
    except: pass
    return None

# Read existing
with open(IMAGES_FILE, 'r') as f:
    existing_raw = f.read()
existing = dict(re.findall(r"'([^']+)':\s*'([^']+)'", existing_raw))

new_count = 0
for i, name in enumerate(MISSING):
    if name in existing:
        continue
    
    img = None
    
    # Try Wikipedia first (more reliable for famous players)
    img = get_wiki_image(name)
    if img:
        existing[name] = img
        new_count += 1
        print(f"  ✓ [wiki] {name}")
        time.sleep(1.0)  # Slow rate for Wikipedia
        continue
    
    # Try TheSportsDB
    img = get_tsdb(name)
    if img:
        existing[name] = img
        new_count += 1
        print(f"  ✓ [tsdb] {name}")
        time.sleep(0.5)
        continue
    
    # Try TheSportsDB with just last name
    last = name.split()[-1]
    if last != name:
        img = get_tsdb(last)
        if img:
            existing[name] = img
            new_count += 1
            print(f"  ~ [tsdb:{last}] {name}")
            time.sleep(0.5)
            continue
    
    print(f"  ✗ {name}")
    time.sleep(0.3)

print(f"\n=== NEW: {new_count} === TOTAL: {len(existing)} ===")

lines = sorted([f"  '{k}': '{v}'" for k,v in existing.items()])
with open(IMAGES_FILE, 'w') as f:
    f.write('const PLAYER_IMAGES = {\n')
    f.write(',\n'.join(lines))
    f.write('\n};\n')
print(f"Written to {IMAGES_FILE}")
