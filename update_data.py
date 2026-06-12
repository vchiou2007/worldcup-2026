#!/usr/bin/env python3
"""
2026 世界盃每日自動更新腳本
每天早上執行，從 FIFA 官方網站抓取最新賽果並更新 data/worldcup-data.js

使用方式：
  python update_data.py

部署在伺服器上搭配 cron 每天執行：
  0 8 * * * cd /path/to/worldcup-2026 && python update_data.py
"""

import json
import re
import os
import sys
from datetime import datetime, timezone, timedelta

TORONTO_TZ = timezone(timedelta(hours=-4))  # EDT (夏令時間)

def fetch_url(url):
    """使用 curl 抓取網頁內容"""
    import subprocess
    try:
        result = subprocess.run(
            ['curl', '-s', '--max-time', '30', url],
            capture_output=True, text=True, timeout=35
        )
        return result.stdout if result.returncode == 0 else ''
    except Exception:
        return ''

def parse_scores_from_html(html):
    """從網頁 HTML 中解析比分"""
    scores = {}

    # 模式: "Mexico 2-0 South Africa" 或 "Mexico 2 - 0 South Africa"
    patterns = [
        r'([A-Z][A-Za-z\s]+?)\s+(\d+)\s*[-–]\s*(\d+)\s+([A-Z][A-Za-z\s]+)',
        r'(\w+)\s+(\d+)\s*:\s*(\d+)\s+(\w+)',
    ]

    for pattern in patterns:
        for m in re.finditer(pattern, html):
            t1 = m.group(1).strip()
            s1 = int(m.group(2))
            s2 = int(m.group(3))
            t2 = m.group(4).strip()
            if len(t1) < 30 and len(t2) < 30 and t1 != t2:
                key = "|".join(sorted([t1, t2]))
                scores[key] = (t1, s1, t2, s2)

    return scores

def update_data_file(data_file_path):
    """更新 data/worldcup-data.js 中的比賽結果"""

    fifa_url = "https://www.fifa.com/en/tournaments/mens/worldcup/canadamexicousa2026/scores-fixtures"
    html = fetch_url(fifa_url)

    if not html:
        print("⚠ 無法從 FIFA 官網取得資料")
        backup_urls = [
            "https://wc26.app/schedule",
            "https://worldcupliveschedule.com/fifa-world-cup-2026-group-stage-schedule-and-fixtures"
        ]
        for url in backup_urls:
            html = fetch_url(url)
            if html:
                break

    if not html:
        print("✗ 所有資料來源皆無法連線")
        return False

    parsed = parse_scores_from_html(html)

    if not parsed:
        print("⚠ 無法從網頁解析出比賽結果")
        return False

    with open(data_file_path, 'r', encoding='utf-8') as f:
        content = f.read()

    update_count = 0
    for key, (t1, s1, t2, s2) in parsed.items():
        # 在 JS 中找到 team1 包含 t1 的比賽
        for actual_t1, actual_t2 in [(t1, t2), (t2, t1)]:
            # 尋找匹配的比賽條目
            search = f"team1: '{actual_t1}'"
            if search not in content:
                continue

            # 找到這個比賽區塊
            idx = content.index(search)
            # 找到此比賽區塊的結束
            block_end = content.find('},', idx)
            if block_end == -1:
                block_end = content.find('}', idx)
            block = content[idx:block_end + 1]

            # 檢查 team2 是否匹配
            if f"team2: '{actual_t2}'" not in block:
                continue

            # 更新 score1
            old_score = f"score1: null"
            if old_score in block:
                new_score = f"score1: {s1 if actual_t1 == t1 else s2}"
                content = content.replace(old_score, new_score, 1)
                update_count += 1

            # 更新 score2
            old_score2 = f"score2: null"
            if old_score2 in block:
                new_score2 = f"score2: {s2 if actual_t1 == t1 else s1}"
                content = content.replace(old_score2, new_score2, 1)
                update_count += 1

            # 更新 status
            old_status = "status: 'scheduled'"
            if old_status in block:
                content = content.replace(old_status, "status: 'completed'", 1)

            break  # 已找到匹配，跳出內層迴圈

    with open(data_file_path, 'w', encoding='utf-8') as f:
        f.write(content)

    print("✓ 成功更新 {} 場比賽".format(update_count // 2))
    return True

def main():
    script_dir = os.path.dirname(os.path.abspath(__file__))
    data_file = os.path.join(script_dir, 'data', 'worldcup-data.js')

    if not os.path.exists(data_file):
        print("✗ 找不到資料檔案: {}".format(data_file))
        sys.exit(1)

    now = datetime.now(TORONTO_TZ)
    print("🕐 更新時間: {} ET".format(now.strftime('%Y-%m-%d %H:%M')))
    print("📂 資料檔案: {}".format(data_file))

    success = update_data_file(data_file)

    if success:
        print("✓ 資料更新完成")
        # 提示 Git 操作
        print("")
        print("執行以下指令以部署更新：")
        print("  cd {}".format(script_dir))
        print("  git add -A")
        print('  git commit -m "每日更新 {}"'.format(now.strftime('%Y-%m-%d')))
        print("  git push")
    else:
        print("⚠ 資料未更新（維持現有資料）")

if __name__ == '__main__':
    main()
