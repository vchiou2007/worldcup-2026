import re
f=open('C:/Users/Vincent/worldcup-2026/data/player_images.js')
c=f.read()
found=set(re.findall(r"'([^']+)':", c))
f2=open('C:/Users/Vincent/worldcup-2026/data/worldcup-data.js')
c2=f2.read()
players=set(re.findall(r"nameEn: '([^']+)'", c2))
missing=players-found
print(f'Total: {len(players)}, Found: {len(found)}, Missing: {len(missing)}')
for p in sorted(missing):
    print(p)
