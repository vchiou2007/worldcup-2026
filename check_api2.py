import subprocess, json

api_base = 'https://cxm-api.fifa.com/fifaplusweb/api'

# Common FIFA API endpoints for 2026 World Cup
endpoints = [
    '/tournament/2026',
    '/tournament/2026/matches',
    '/tournament/2026/fixtures',
    '/tournament/2026/season/285073',
    '/tournament/2026/season/285073/matches',
    '/tournament/2026/seasons',
    '/tournaments?year=2026',
    '/matches?tournamentId=2026',
    '/matches?tournamentId=285073',
    '/matches?seasonId=285073',
    '/fixtures?tournamentId=2026',
    '/fixtures?seasonId=285073',
    '/tournament/285073',
    '/tournament/285073/matches',
]

for ep in endpoints:
    url = api_base + ep + '?language=en'
    try:
        result = subprocess.run(['curl', '-s', '--max-time', '10', url,
            '-H', 'User-Agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36',
            '-H', 'Accept: application/json',
            '-H', 'Referer: https://www.fifa.com/'],
            capture_output=True, text=True, timeout=15)
        data = result.stdout.strip()
        if data and data != 'null':
            try:
                j = json.loads(data)
                print(f'✓ {ep}: {len(data)} chars - Keys: {list(j.keys()) if isinstance(j, dict) else type(j).__name__}')
                if isinstance(j, list):
                    print(f'  Array of {len(j)} items')
                    if j and isinstance(j[0], dict):
                        print(f'  First item keys: {list(j[0].keys())[:10]}')
                elif isinstance(j, dict):
                    for k in list(j.keys())[:5]:
                        v = j[k]
                        print(f'  {k}: {type(v).__name__} (len={len(v) if isinstance(v, (list,str,dict)) else "N/A"})')
            except:
                print(f'? {ep}: {len(data)} chars (non-JSON)')
        else:
            print(f'✗ {ep}: empty/null')
    except Exception as e:
        print(f'✗ {ep}: {e}')
