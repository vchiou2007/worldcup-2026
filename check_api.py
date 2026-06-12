import subprocess, json, re

# 先從 FIFA 頁面找出 API 端點
url = 'https://www.fifa.com/en/tournaments/mens/worldcup/canadamexicousa2026/scores-fixtures'
result = subprocess.run(['curl', '-s', '--max-time', '30', '-L', url,
    '-H', 'User-Agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36'],
    capture_output=True, text=True, timeout=35)
html = result.stdout

# 找 API endpoints
api_patterns = re.findall(r'https?://[^"\'\s]+api[^"\'\s]+', html)
for p in api_patterns[:20]:
    print(p)

print('---')
# 找其他 JSON 或數據端點
for m in re.finditer(r'(https?://[^"\'\s]+(?:json|data|graphql)[^"\'\s]*)', html):
    print(m.group())

print('---')
print(f'HTML 總長度: {len(html)}')

# 也試試看 backup URLs
backup_urls = [
    "https://wc26.app/schedule",
    "https://worldcupliveschedule.com/fifa-world-cup-2026-group-stage-schedule-and-fixtures"
]
for burl in backup_urls:
    try:
        r = subprocess.run(['curl', '-s', '--max-time', '15', burl,
            '-H', 'User-Agent: Mozilla/5.0'],
            capture_output=True, text=True, timeout=20)
        print(f'Backup {burl}: {len(r.stdout)} 字元')
        if 'Korea' in r.stdout or '2-1' in r.stdout:
            print(f'  含 Korea 片段: ...{r.stdout[r.stdout.find("Korea")-50:r.stdout.find("Korea")+100]}...')
    except:
        print(f'Backup {burl}: 失敗')
