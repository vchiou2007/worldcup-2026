#!/usr/bin/env python3
with open('data/worldcup-data.js', 'r', encoding='utf-8') as f:
    content = f.read()

# Fix Isak goal
old1 = "{ min: 30, team: 1, scorer: 'Alexander Isak', assist: 'Benjamin Nygren', detail: '反擊中禁區邊緣射門入網' }"
new1 = "{ min: 30, team: 1, scorer: 'Alexander Isak', assist: 'Viktor Gyökeres', detail: 'Gyökeres 中場直塞，Isak 禁區邊緣射門入網' }"
if old1 in content:
    content = content.replace(old1, new1)
    print("Isak: REPLACED")
else:
    print("Isak: MISS")

# Fix Gyökeres goal
old2 = "{ min: 87, team: 1, scorer: 'Viktor Gyökeres', assist: 'Alexander Bernhardsson', detail: '禁區內接應傳球後轉身射門入網' }"
new2 = "{ min: 59, team: 1, scorer: 'Viktor Gyökeres', assist: 'Alexander Isak', detail: 'Isak 妙傳，Gyökeres 禁區內轉身射門入網，瑞典恢復兩球領先' }"
if old2 in content:
    content = content.replace(old2, new2)
    print("Gyokeres: REPLACED")
else:
    print("Gyokeres: MISS")

# Fix Elanga -> Ayari
old3 = "{ min: 90, team: 1, scorer: 'Anthony Elanga', assist: 'Mattias Svanberg', detail: '禁區內補射入網，瑞典5-1鎖定勝局' }"
new3 = "{ min: 90, team: 1, scorer: 'Yasin Ayari', detail: '禁區外遠射破網梅開二度，Ayari 以兩記世界波當選全場最佳' }"
if old3 in content:
    content = content.replace(old3, new3)
    print("Elanga: REPLACED")
else:
    print("Elanga: MISS")
    idx = content.find("Anthony Elanga")
    if idx > 0:
        print(f"  Found at idx {idx}: {repr(content[idx-5:idx+80])}")

with open('data/worldcup-data.js', 'w', encoding='utf-8') as f:
    f.write(content)
print("Done")
