// 2026 世界盃 — 全新渲染引擎（國旗全顯示 + 金牌設計）

document.addEventListener('DOMContentLoaded', function() {
  const page = document.body.dataset.page || 'home';
  switch(page) {
    case 'home': renderHome(); break;
    case 'groups': renderGroups(); break;
    case 'teams': renderTeams(); break;
    case 'matches': renderMatches(); break;
    case 'knockout': renderKnockout(); break;
  }
  renderUpdateTime();
});

// ==================== 輔助函數 ====================

function flag(t) { return WC_DATA.flags[t] || '🏳️'; }

function nameZh(t) {
  for (const g of WC_DATA.groups)
    for (const tm of g.teams)
      if (tm.name === t) return tm.nameZh;
  return t;
}

function groupOf(t) {
  for (const g of WC_DATA.groups)
    for (const tm of g.teams)
      if (tm.name === t) return g.id;
  return '';
}

function rankOf(t) {
  for (const g of WC_DATA.groups)
    for (const tm of g.teams)
      if (tm.name === t) return tm.rank;
  return '';
}

function starsOf(t) { return WC_DATA.stars[t] || []; }
function standingsOf(g) { return WC_DATA.standings[g] || []; }

function fmtDate(d) {
  const dt = new Date(d + 'T12:00:00');
  const mo = ['一月','二月','三月','四月','五月','六月','七月','八月','九月','十月','十一月','十二月'];
  return `${dt.getMonth()+1}月${dt.getDate()}日`;
}

function fmtDateFull(d) {
  const dt = new Date(d + 'T12:00:00');
  const wd = ['日','一','二','三','四','五','六'];
  return `${fmtDate(d)}（週${wd[dt.getDay()]}）`;
}

function today() { return new Date().toISOString().slice(0,10); }
function yesterday() { const d = new Date(); d.setDate(d.getDate()-1); return d.toISOString().slice(0,10); }

function renderUpdateTime() {
  const el = document.getElementById('update-time');
  if (el) el.textContent = new Date().toLocaleString('zh-TW', { timeZone: 'America/Toronto' });
}

// ==================== 帶國旗的隊伍名稱 ====================

function teamWithFlag(t, size='1.5rem') {
  return `<span class="flag">${flag(t)}</span>`;
}

function teamBlock(t, side='left') {
  const cls = side === 'right' ? 'match-team-block right' : 'match-team-block';
  return `
    <div class="${cls}">
      ${teamWithFlag(t)}
      <div>
        <div class="team-name-line">${t}</div>
        <div class="team-name-zh">${nameZh(t)}</div>
      </div>
    </div>
  `;
}

function teamNameWithFlag(t) {
  return `${flag(t)} ${t}`;
}

function teamCell(t) {
  return `
    <div class="team-cell">
      ${teamWithFlag(t, '1.6rem')}
      <div class="team-name-group">
        <div class="en">${t}</div>
        <div class="zh">${nameZh(t)}</div>
      </div>
    </div>
  `;
}

function groupTeamFlags(gid) {
  const g = WC_DATA.groups.find(x => x.id === gid);
  if (!g) return '';
  return g.teams.map(t => flag(t.name)).join(' ');
}

// ==================== 比賽卡片 ====================

function matchCard(m) {
  const isCompleted = m.status === 'completed';
  const isLive = m.status === 'live';
  const cls = isCompleted ? 'completed' : isLive ? 'live' : 'scheduled';

  let scoreText, scClass;
  if (isCompleted) { scoreText = `${m.score1} - ${m.score2}`; scClass = 'final'; }
  else if (isLive) { scoreText = `${m.score1||0} - ${m.score2||0}`; scClass = 'live'; }
  else { scoreText = 'VS'; scClass = 'upcoming'; }

  const statusLabel = isCompleted ? '已完賽' : isLive ? '● LIVE' : '未開賽';

  let detailsHtml = '';
  if (m.details) {
    detailsHtml = `<div class="match-highlights">⚡ ${m.details}</div>`;
  }

  return `
    <div class="match-card ${cls}">
      <div class="match-header">
        <span class="match-group-badge">${m.group} 組 ${groupTeamFlags(m.group)}</span>
        <span class="match-status-badge ${m.status}">${statusLabel}</span>
      </div>
      <div class="match-body">
        ${teamBlock(m.team1, 'left')}
        <div class="score-block">
          <div class="score-display ${scClass}">${scoreText}</div>
        </div>
        ${teamBlock(m.team2, 'right')}
      </div>
      <div class="match-footer">
        <span class="match-venue">📍 ${m.venue}</span>
        <span class="match-time">🕐 ${m.time}</span>
      </div>
      ${detailsHtml}
    </div>
  `;
}

// ==================== 主頁 ====================

function renderHome() {
  renderHero();
  renderMatchesToday();
  renderYesterdayMatches();
  renderGroupsMini();
}

function renderHero() {
  const el = document.getElementById('hero');
  if (!el) return;
  const total = WC_DATA.matches.length;
  const done = WC_DATA.matches.filter(m => m.status === 'completed').length;
  el.innerHTML = `
    <div class="hero-content">
      <div class="hero-badge">FIFA World Cup 2026</div>
      <h1>⚽ 2026 世界盃</h1>
      <p class="hero-subtitle">🇺🇸 美國 · 🇨🇦 加拿大 · 🇲🇽 墨西哥 ｜ 6.11 — 7.19</p>
      <div class="hero-stats">
        <div class="hero-stat"><div class="hero-stat-number">48</div><div class="hero-stat-label">參賽隊伍</div></div>
        <div class="hero-stat"><div class="hero-stat-number">${total}</div><div class="hero-stat-label">總場次</div></div>
        <div class="hero-stat"><div class="hero-stat-number">${done}</div><div class="hero-stat-label">已賽</div></div>
        <div class="hero-stat"><div class="hero-stat-number">16</div><div class="hero-stat-label">主辦城市</div></div>
      </div>
    </div>
  `;
}

function renderMatchesToday() {
  const el = document.getElementById('today-matches');
  if (!el) return;
  const t = today();
  const ms = WC_DATA.matches.filter(m => m.date === t);
  let html = `<h2 class="section-title"><span class="icon">📅</span> 今日比賽 — ${fmtDateFull(t)}</h2>`;
  if (ms.length === 0) {
    html += `<p style="color:var(--text-muted);padding:16px;">今日無賽事</p>`;
  } else {
    html += `<div class="matches-grid two-cols">`;
    for (const m of ms) html += matchCard(m);
    html += `</div>`;
  }
  el.innerHTML = html;
}

function renderYesterdayMatches() {
  const el = document.getElementById('yesterday-matches');
  if (!el) return;
  const y = yesterday();
  const ms = WC_DATA.matches.filter(m => m.date === y);
  if (ms.length === 0) { el.style.display = 'none'; return; }
  let html = `<h2 class="section-title"><span class="icon">📋</span> 昨日賽果 — ${fmtDateFull(y)}</h2>
    <div class="matches-grid two-cols">`;
  for (const m of ms) html += matchCard(m);
  html += `</div>`;
  el.innerHTML = html;
}

function renderGroupsMini() {
  const el = document.getElementById('groups-mini');
  if (!el) return;
  let html = `<h2 class="section-title"><span class="icon">🏆</span> 分組積分一覽</h2>
    <div class="groups-mini-grid" style="display:grid;grid-template-columns:repeat(auto-fill,minmax(280px,1fr));gap:14px;">`;

  for (const g of WC_DATA.groups) {
    const st = standingsOf(g.id);
    html += `
      <div style="background:var(--bg-card);border:1px solid var(--border);border-radius:var(--radius);padding:14px 16px;">
        <a href="groups.html#group-${g.id}" style="text-decoration:none;color:inherit;">
          <div style="font-size:0.85rem;font-weight:700;color:var(--blue);margin-bottom:8px;display:flex;align-items:center;gap:8px;">
            ${g.id} 組 ${groupTeamFlags(g.id)}
          </div>
        </a>`;
    for (let i = 0; i < st.length; i++) {
      const s = st[i];
      const rc = `rank-${Math.min(i+1,4)}`;
      html += `
        <div style="display:flex;align-items:center;gap:8px;padding:5px 0;font-size:0.82rem;">
          <span style="width:22px;height:22px;display:inline-flex;align-items:center;justify-content:center;border-radius:6px;font-weight:700;font-size:0.7rem;" class="${rc}">${i+1}</span>
          <span>${flag(s.team)}</span>
          <span style="flex:1;">${s.team}</span>
          <span style="font-weight:800;color:var(--gold-light);">${s.pts}</span>
        </div>`;
    }
    html += `</div>`;
  }

  html += `</div>`;
  el.innerHTML = html;
}

// ==================== 分組頁 ====================

function renderGroups() {
  const el = document.getElementById('groups-container');
  if (!el) return;
  let html = `<h2 class="section-title"><span class="icon">🏆</span> 完整分組積分表</h2>
    <p class="section-subtitle">小組前 2 名 + 最佳 8 個第 3 名晉級 32 強淘汰賽</p>`;

  for (const g of WC_DATA.groups) {
    const st = standingsOf(g.id);
    const ms = WC_DATA.matches.filter(m => m.group === g.id);
    html += `
      <div class="group-section" id="group-${g.id}">
        <div class="group-title-bar">
          <h2>${g.id} 組 <span style="font-size:1.2rem;display:flex;gap:3px;">${groupTeamFlags(g.id)}</span></h2>
        </div>
        <div class="table-wrapper">
          <table class="standings-table">
            <thead><tr>
              <th>#</th><th>球隊</th><th class="stat-cell">賽</th><th class="stat-cell">勝</th>
              <th class="stat-cell">和</th><th class="stat-cell">負</th><th class="stat-cell">進球</th>
              <th class="stat-cell">失球</th><th class="stat-cell">淨勝球</th><th class="stat-cell">積分</th>
            </tr></thead>
            <tbody>`;
    for (let i = 0; i < st.length; i++) {
      const s = st[i];
      const gc = s.gd > 0 ? 'gd-pos' : s.gd < 0 ? 'gd-neg' : 'gd-zero';
      const gd = s.gd > 0 ? `+${s.gd}` : s.gd;
      html += `<tr>
        <td><span class="rank-num rank-${Math.min(i+1,4)}">${i+1}</span></td>
        <td>${teamCell(s.team)}</td>
        <td class="stat-cell">${s.played}</td>
        <td class="stat-cell">${s.won}</td>
        <td class="stat-cell">${s.drawn}</td>
        <td class="stat-cell">${s.lost}</td>
        <td class="stat-cell">${s.gf}</td>
        <td class="stat-cell">${s.ga}</td>
        <td class="stat-cell ${gc}">${gd}</td>
        <td class="pts-cell">${s.pts}</td>
      </tr>`;
    }
    html += `</tbody></table></div>`;

    // 各組賽程
    if (ms.length > 0) {
      html += `<div class="group-matches">`;
      for (const m of ms) {
        const done = m.status === 'completed';
        const sc = done ? `${m.score1} - ${m.score2}` : 'VS';
        const scls = done ? 'final' : 'upcoming';
        html += `
          <div class="group-match-item">
            <div style="display:flex;flex-direction:column;align-items:center;flex:1;">
              <span>${flag(m.team1)} ${m.team1}</span>
            </div>
            <div style="text-align:center;">
              <span class="score-sm ${scls}">${sc}</span>
              <div class="gm-info">${fmtDate(m.date)} ${m.time}</div>
            </div>
            <div style="display:flex;flex-direction:column;align-items:center;flex:1;text-align:right;">
              <span>${m.team2} ${flag(m.team2)}</span>
            </div>
          </div>`;
      }
      html += `</div>`;
    }
    html += `</div>`;
  }

  el.innerHTML = html;

  if (window.location.hash) {
    const t = document.querySelector(window.location.hash);
    if (t) setTimeout(() => t.scrollIntoView({ behavior: 'smooth' }), 200);
  }
}

// ==================== 球隊頁 ====================

function renderTeams() {
  const el = document.getElementById('teams-container');
  if (!el) return;

  let html = `<h2 class="section-title"><span class="icon">🌍</span> 全部 48 支參賽隊伍</h2>
    <p class="section-subtitle">每隊皆以 🇺🇳 國旗標示 ｜ 球星姓名以中文／英文雙語顯示</p>
    <div class="teams-grid">`;

  for (const g of WC_DATA.groups) {
    for (const tm of g.teams) {
      const st = starsOf(tm.name);
      let starsHtml = '';
      for (const s of st) {
        starsHtml += `
          <div class="star-row">
            <span class="star-icon">⭐</span>
            <div>
              <div class="sname-zh">${s.name}</div>
              <div class="sname-en">${s.nameEn}</div>
              <div class="smeta">
                <span class="pos">${s.position}</span>
                <span class="sep">｜</span>
                <span>${s.club}</span>
                ${s.note ? `<span class="sep">｜</span><span class="note">★ ${s.note}</span>` : ''}
              </div>
            </div>
          </div>`;
      }

      html += `
        <div class="team-card">
          <div class="team-card-top">
            <span class="flag">${flag(tm.name)}</span>
            <div class="tinfo">
              <div class="name-en">${tm.name}</div>
              <div class="name-zh">${tm.nameZh}</div>
              <span class="tbadge">${g.id} 組</span>
            </div>
            <div class="fifa-badge">FIFA <span class="num">#${tm.rank}</span></div>
          </div>
          <div class="team-card-stars">
            <div class="stars-label">⭐ 主力球星</div>
            ${starsHtml || '<div style="color:var(--text-muted);font-size:0.8rem;">資料整理中</div>'}
          </div>
        </div>`;
    }
  }

  html += `</div>`;
  el.innerHTML = html;
}

// ==================== 賽程頁 ====================

function renderMatches() {
  const el = document.getElementById('matches-container');
  if (!el) return;

  const dates = [...new Set(WC_DATA.matches.map(m => m.date))].sort();

  let nav = '<div class="date-nav">';
  for (const d of dates) {
    const act = d === today() ? 'active' : '';
    nav += `<button class="date-btn ${act}" onclick="showMatchDate('${d}')">${fmtDate(d)}</button>`;
  }
  nav += '</div>';

  el.innerHTML = nav + '<div id="date-matches-list"></div>';

  const target = dates.includes(today()) ? today() : dates[0];
  showMatchDate(target);
}

function showMatchDate(d) {
  const el = document.getElementById('date-matches-list');
  if (!el) return;
  const ms = WC_DATA.matches.filter(m => m.date === d);
  document.querySelectorAll('.date-btn').forEach(b => {
    b.classList.toggle('active', b.textContent.includes(d.slice(-5)));
  });
  if (ms.length === 0) {
    el.innerHTML = `<p style="color:var(--text-muted);padding:20px;">${fmtDateFull(d)} 無賽事</p>`;
    return;
  }
  let html = `<h2 class="section-title" style="margin-bottom:16px;">📅 ${fmtDateFull(d)}</h2>
    <div class="matches-grid two-cols">`;
  for (const m of ms) html += matchCard(m);
  html += `</div>`;
  el.innerHTML = html;
}

// ==================== 淘汰賽頁 ====================

function renderKnockout() {
  const el = document.getElementById('knockout-container');
  if (!el) return;
  el.innerHTML = `
    <h2 class="section-title"><span class="icon">🏆</span> 淘汰賽階段</h2>
    <p class="section-subtitle">48 強 → 32 強（小組前 2 名 + 最佳 8 個第 3 名）→ 16 強 → 8 強 → 4 強 → 🏆 決賽</p>

    <div style="background:var(--bg-card);border:1px solid var(--border);border-radius:var(--radius);padding:48px 32px;text-align:center;">
      <div style="font-size:4rem;margin-bottom:16px;">🏆</div>
      <h3 style="font-size:1.4rem;margin-bottom:6px;color:var(--gold-light);">淘汰賽對戰組合將於小組賽結束後產生</h3>
      <p style="color:var(--text-muted);font-size:0.9rem;">
        小組賽：6月11日 — 6月27日 ｜ 32 強：6月28日起 ｜ 決賽：7月19日 @ 大都會人壽體育場
      </p>

      <div class="knockout-grid">
        <div class="knockout-step step-r32">
          <div class="step-date">6/28</div>
          <div class="step-label">🔵 32 強開賽</div>
        </div>
        <div class="knockout-step step-r16">
          <div class="step-date">7/3</div>
          <div class="step-label">🟢 16 強</div>
        </div>
        <div class="knockout-step step-qf">
          <div class="step-date">7/10</div>
          <div class="step-label">🟣 8 強</div>
        </div>
        <div class="knockout-step step-sf">
          <div class="step-date">7/14</div>
          <div class="step-label">🟡 準決賽</div>
        </div>
        <div class="knockout-step step-final">
          <div class="step-date">7/19</div>
          <div class="step-label">🔴 🏆 決賽</div>
        </div>
      </div>
    </div>

    <div style="margin-top:24px;background:var(--bg-card);border:1px solid var(--border);border-radius:var(--radius);padding:24px;">
      <h3 style="font-size:1rem;font-weight:700;margin-bottom:14px;">🇺🇸 主辦城市 16 座</h3>
      <div style="display:grid;grid-template-columns:repeat(auto-fill,minmax(180px,1fr));gap:8px;font-size:0.82rem;color:var(--text-secondary);">
        <div>🇺🇸 紐約/新澤西</div><div>🇺🇸 洛杉磯</div><div>🇺🇸 達拉斯</div><div>🇺🇸 休斯頓</div>
        <div>🇺🇸 亞特蘭大</div><div>🇺🇸 西雅圖</div><div>🇺🇸 舊金山</div><div>🇺🇸 費城</div>
        <div>🇺🇸 邁阿密</div><div>🇺🇸 波士頓</div><div>🇺🇸 堪薩斯城</div>
        <div>🇲🇽 墨西哥城</div><div>🇲🇽 瓜達拉哈拉</div><div>🇲🇽 蒙特雷</div>
        <div>🇨🇦 多倫多</div><div>🇨🇦 溫哥華</div>
      </div>
    </div>
  `;
}
