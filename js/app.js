// 2026 世界盃足球賽 — 頁面渲染引擎

document.addEventListener('DOMContentLoaded', function() {
  const page = document.body.dataset.page || 'home';
  switch(page) {
    case 'home': renderHome(); break;
    case 'groups': renderGroups(); break;
    case 'teams': renderTeams(); break;
    case 'matches': renderMatches(); break;
    case 'knockout': renderKnockout(); break;
    case 'team-detail': renderTeamDetail(); break;
  }
  renderHeader();
});

function renderHeader() {
  const currentPath = window.location.pathname;
  document.querySelectorAll('.main-nav a').forEach(a => {
    if (currentPath.includes(a.getAttribute('href')) && !(currentPath === '/' && a.getAttribute('href') !== '/')) {
      a.classList.add('active');
    }
  });
}

// ==================== 輔助函數 ====================

function getFlag(teamName) {
  return WC_DATA.flags[teamName] || '🏳️';
}

function getTeamZh(teamName) {
  for (const g of WC_DATA.groups) {
    for (const t of g.teams) {
      if (t.name === teamName) return t.nameZh;
    }
  }
  return teamName;
}

function getTeamGroup(teamName) {
  for (const g of WC_DATA.groups) {
    for (const t of g.teams) {
      if (t.name === teamName) return g.id;
    }
  }
  return '';
}

function getTeamRank(teamName) {
  for (const g of WC_DATA.groups) {
    for (const t of g.teams) {
      if (t.name === teamName) return t.rank;
    }
  }
  return '';
}

function getStars(teamName) {
  return WC_DATA.stars[teamName] || [];
}

function getStandings(groupId) {
  return WC_DATA.standings[groupId] || [];
}

function formatDate(dateStr) {
  const d = new Date(dateStr + 'T12:00:00');
  const months = ['一月','二月','三月','四月','五月','六月','七月','八月','九月','十月','十一月','十二月'];
  return `${d.getMonth()+1}月${d.getDate()}日`;
}

function formatDateFull(dateStr) {
  const d = new Date(dateStr + 'T12:00:00');
  const weekdays = ['日','一','二','三','四','五','六'];
  return `${formatDate(dateStr)} (週${weekdays[d.getDay()]})`;
}

function todayStr() {
  const now = new Date();
  return now.toISOString().slice(0, 10);
}

function yesterdayStr() {
  const d = new Date();
  d.setDate(d.getDate() - 1);
  return d.toISOString().slice(0, 10);
}

// ==================== 主頁渲染 ====================

function renderHome() {
  renderHero();
  renderTodayMatches();
  renderAllGroupsMini();
  renderYesterdayResults();
}

function renderHero() {
  const el = document.getElementById('hero-container');
  if (!el) return;
  const totalMatches = WC_DATA.matches.length;
  const completed = WC_DATA.matches.filter(m => m.status === 'completed').length;
  el.innerHTML = `
    <div class="hero-content">
      <h1>⚽ 2026 世界盃</h1>
      <p class="hero-subtitle">美國 · 加拿大 · 墨西哥 ｜ 6月11日 — 7月19日</p>
      <div class="hero-stats">
        <div class="hero-stat">
          <div class="hero-stat-number">48</div>
          <div class="hero-stat-label">參賽隊伍</div>
        </div>
        <div class="hero-stat">
          <div class="hero-stat-number">${totalMatches}</div>
          <div class="hero-stat-label">總場次</div>
        </div>
        <div class="hero-stat">
          <div class="hero-stat-number">${completed}</div>
          <div class="hero-stat-label">已賽場次</div>
        </div>
        <div class="hero-stat">
          <div class="hero-stat-number">16</div>
          <div class="hero-stat-label">主辦城市</div>
        </div>
      </div>
    </div>
  `;
}

function renderTodayMatches() {
  const el = document.getElementById('today-matches');
  if (!el) return;
  const today = todayStr();
  const todayMatches = WC_DATA.matches.filter(m => m.date === today);
  
  let html = `
    <h2 class="section-title"><span class="emoji">📅</span> 今日比賽 — ${formatDateFull(today)}</h2>
    <div class="matches-grid">
  `;
  
  if (todayMatches.length === 0) {
    html += `<p style="color: var(--text-muted); padding: 20px;">今日無賽事</p>`;
  } else {
    for (const m of todayMatches) {
      html += renderMatchCard(m);
    }
  }
  
  html += `</div>`;
  el.innerHTML = html;
}

function renderYesterdayResults() {
  const el = document.getElementById('yesterday-results');
  if (!el) return;
  const yesterday = yesterdayStr();
  const yesterdayMatches = WC_DATA.matches.filter(m => m.date === yesterday);
  
  if (yesterdayMatches.length === 0) {
    el.style.display = 'none';
    return;
  }
  
  let html = `
    <h2 class="section-title"><span class="emoji">📋</span> 昨日賽果 — ${formatDateFull(yesterday)}</h2>
    <div class="matches-grid">
  `;
  
  for (const m of yesterdayMatches) {
    html += renderMatchCard(m);
  }
  
  html += `</div>`;
  el.innerHTML = html;
}

function renderMatchCard(m) {
  const t1Flag = getFlag(m.team1);
  const t2Flag = getFlag(m.team2);
  const t1Zh = getTeamZh(m.team1);
  const t2Zh = getTeamZh(m.team2);
  
  let scoreHtml, scoreClass;
  if (m.status === 'completed') {
    scoreHtml = `${m.score1} - ${m.score2}`;
    scoreClass = 'final';
  } else if (m.status === 'live') {
    scoreHtml = `${m.score1 || 0} - ${m.score2 || 0}`;
    scoreClass = 'live';
  } else {
    scoreHtml = 'vs';
    scoreClass = 'upcoming';
  }
  
  const statusText = m.status === 'completed' ? '已完賽' : m.status === 'live' ? 'LIVE' : '未開始';
  
  return `
    <div class="match-card">
      <div class="match-header">
        <span class="match-group-badge">${m.group} 組</span>
        <span class="match-status ${m.status}">${statusText}</span>
      </div>
      <div class="match-teams">
        <div class="match-team home">
          <span class="flag">${t1Flag}</span>
          <div class="team-info">
            <div class="team-name">${m.team1}</div>
            <div class="team-name-zh">${t1Zh}</div>
          </div>
        </div>
        <div class="match-score ${scoreClass}">${scoreHtml}</div>
        <div class="match-team away">
          <div class="team-info">
            <div class="team-name">${m.team2}</div>
            <div class="team-name-zh">${t2Zh}</div>
          </div>
          <span class="flag">${t2Flag}</span>
        </div>
      </div>
      <div class="match-venue">${m.venue} ｜ ${m.time}</div>
      ${m.details ? `<div class="match-details">${m.details}</div>` : ''}
    </div>
  `;
}

function renderAllGroupsMini() {
  const el = document.getElementById('all-groups-mini');
  if (!el) return;
  
  let html = `<h2 class="section-title"><span class="emoji">🏆</span> 分組積分一覽</h2>
    <div class="groups-mini-grid">`;
  
  for (const group of WC_DATA.groups) {
    const standings = getStandings(group.id);
    html += `
      <div class="group-mini-card">
        <a href="groups.html#group-${group.id}" style="text-decoration:none;color:inherit;">
          <div class="group-title-sm">${group.id} 組</div>
        </a>
    `;
    
    for (let i = 0; i < standings.length; i++) {
      const s = standings[i];
      const rankClass = `rank-${i+1}`;
      html += `
        <div class="group-mini-team">
          <span class="rank-sm ${rankClass}">${i+1}</span>
          <span class="flag">${getFlag(s.team)}</span>
          <span>${s.team}</span>
          <span class="pts-sm" style="color:var(--accent-gold)">${s.pts}</span>
        </div>
      `;
    }
    
    html += `</div>`;
  }
  
  html += `</div>`;
  el.innerHTML = html;
}

// ==================== 分組頁面 ====================

function renderGroups() {
  const el = document.getElementById('groups-container');
  if (!el) return;
  
  let html = '';
  const letters = 'ABCDEFGHIJKL';
  
  for (const group of WC_DATA.groups) {
    const standings = getStandings(group.id);
    
    html += `
      <div class="group-section" id="group-${group.id}">
        <h2 class="group-title">${group.id} 組</h2>
        <table class="standings-table">
          <thead>
            <tr>
              <th>#</th>
              <th>球隊</th>
              <th style="text-align:center">賽</th>
              <th style="text-align:center">勝</th>
              <th style="text-align:center">和</th>
              <th style="text-align:center">負</th>
              <th style="text-align:center">進球</th>
              <th style="text-align:center">失球</th>
              <th style="text-align:center">淨勝球</th>
              <th style="text-align:center">積分</th>
            </tr>
          </thead>
          <tbody>
    `;
    
    for (let i = 0; i < standings.length; i++) {
      const s = standings[i];
      const rankClass = `rank-${i+1}`;
      const gdClass = s.gd > 0 ? 'gd-positive' : s.gd < 0 ? 'gd-negative' : 'gd-zero';
      const gdDisplay = s.gd > 0 ? `+${s.gd}` : s.gd;
      
      html += `
        <tr>
          <td><span class="rank-badge ${rankClass}">${i+1}</span></td>
          <td>
            <div class="team-cell">
              <span class="flag">${getFlag(s.team)}</span>
              <div>
                <div>${s.team}</div>
                <div class="name-zh">${getTeamZh(s.team)}</div>
              </div>
            </div>
          </td>
          <td style="text-align:center">${s.played}</td>
          <td style="text-align:center">${s.won}</td>
          <td style="text-align:center">${s.drawn}</td>
          <td style="text-align:center">${s.lost}</td>
          <td style="text-align:center">${s.gf}</td>
          <td style="text-align:center">${s.ga}</td>
          <td style="text-align:center" class="${gdClass}">${gdDisplay}</td>
          <td style="text-align:center"><span class="pts">${s.pts}</span></td>
        </tr>
      `;
    }
    
    html += `
          </tbody>
        </table>
        
        <div style="margin-top: 12px;">
          <h3 style="font-size:0.95rem;color:var(--text-secondary);margin-bottom:8px;">${group.id} 組賽程</h3>
          <div style="display:grid;grid-template-columns:repeat(auto-fill,minmax(320px,1fr));gap:10px;">
    `;
    
    const groupMatches = WC_DATA.matches.filter(m => m.group === group.id);
    for (const m of groupMatches) {
      const t1Flag = getFlag(m.team1);
      const t2Flag = getFlag(m.team2);
      
      let scoreHtml, scoreClass;
      if (m.status === 'completed') {
        scoreHtml = `${m.score1} - ${m.score2}`;
        scoreClass = 'final';
      } else if (m.status === 'live') {
        scoreHtml = `${m.score1 || 0} - ${m.score2 || 0}`;
        scoreClass = 'live';
      } else {
        scoreHtml = 'vs';
        scoreClass = 'upcoming';
      }
      
      html += `
        <div class="match-card" style="padding:12px 16px;">
          <div style="display:flex;align-items:center;justify-content:space-between;gap:8px;font-size:0.85rem;">
            <span>${t1Flag} ${m.team1}</span>
            <span class="match-score ${scoreClass}" style="font-size:1.1rem;min-width:40px;">${scoreHtml}</span>
            <span>${m.team2} ${t2Flag}</span>
          </div>
          <div style="font-size:0.7rem;color:var(--text-muted);text-align:center;margin-top:6px;">
            ${formatDate(m.date)} ｜ ${m.time} ｜ ${m.venue}
          </div>
        </div>
      `;
    }
    
    html += `</div></div></div>`;
  }
  
  el.innerHTML = html;
  
  // Handle anchor from hash
  if (window.location.hash) {
    const target = document.querySelector(window.location.hash);
    if (target) {
      setTimeout(() => target.scrollIntoView({ behavior: 'smooth' }), 200);
    }
  }
}

// ==================== 球隊頁面 ====================

function renderTeams() {
  const el = document.getElementById('teams-container');
  if (!el) return;
  
  let html = `<h2 class="section-title"><span class="emoji">🌍</span> 全部 48 支參賽隊伍</h2>
    <p style="color:var(--text-secondary);margin-bottom:24px;">點擊隊伍名稱查看詳細資訊｜每隊顯示主要球星（中文／英文）</p>
    <div class="teams-grid">`;
  
  for (const group of WC_DATA.groups) {
    for (const team of group.teams) {
      const stars = getStars(team.name);
      const flag = getFlag(team.name);
      
      let starsHtml = '<ul class="stars-list">';
      for (const star of stars) {
        starsHtml += `
          <li class="star-item">
            <span class="star-icon">⭐</span>
            <div>
              <div class="star-name-zh">${star.name}</div>
              <div class="star-name-en">${star.nameEn}</div>
              <div>
                <span class="star-position">${star.position}</span>
                <span style="color:var(--text-muted);margin:0 4px;">｜</span>
                <span class="star-club">${star.club}</span>
                ${star.note ? `<span style="color:var(--accent-gold);margin-left:4px;">★ ${star.note}</span>` : ''}
              </div>
            </div>
          </li>
        `;
      }
      starsHtml += '</ul>';
      
      const groupName = `${group.id} 組`;
      
      html += `
        <div class="team-card">
          <div class="team-card-header">
            <span class="flag">${flag}</span>
            <div class="team-info">
              <div style="font-weight:700;font-size:1.1rem;">${team.name}</div>
              <div class="name-zh">${team.nameZh}</div>
              <span class="group-badge-sm">${groupName}</span>
            </div>
            <span class="fifa-rank">FIFA #${team.rank}</span>
          </div>
          ${starsHtml}
        </div>
      `;
    }
  }
  
  html += `</div>`;
  el.innerHTML = html;
}

// ==================== 賽程頁面 ====================

function renderMatches() {
  const el = document.getElementById('matches-container');
  if (!el) return;
  
  // 收集所有日期
  const dates = [...new Set(WC_DATA.matches.map(m => m.date))].sort();
  
  // 日期導航
  let dateNavHtml = '<div class="date-nav">';
  for (const d of dates) {
    const isToday = d === todayStr();
    const active = isToday ? 'active' : '';
    dateNavHtml += `<button class="date-btn ${active}" onclick="showDate('${d}')">${formatDate(d)}</button>`;
  }
  dateNavHtml += '</div>';
  
  el.innerHTML = dateNavHtml + '<div id="date-matches"></div>';
  
  // 顯示今天或最近的比賽
  const targetDate = dates.includes(todayStr()) ? todayStr() : dates[0];
  showDate(targetDate);
}

function showDate(dateStr) {
  const el = document.getElementById('date-matches');
  if (!el) return;
  
  const matches = WC_DATA.matches.filter(m => m.date === dateStr);
  
  // 更新 active 狀態
  document.querySelectorAll('.date-btn').forEach(btn => {
    btn.classList.toggle('active', btn.textContent.includes(formatDate(dateStr)));
  });
  
  if (matches.length === 0) {
    el.innerHTML = `<p style="color:var(--text-muted);padding:20px;">${formatDateFull(dateStr)} 無賽事</p>`;
    return;
  }
  
  let html = `<h2 class="section-title" style="margin-bottom:16px;">${formatDateFull(dateStr)} 的比賽</h2>
    <div class="matches-grid">`;
  
  for (const m of matches) {
    html += renderMatchCard(m);
  }
  
  html += `</div>`;
  el.innerHTML = html;
}

// ==================== 淘汰賽頁面 ====================

function renderKnockout() {
  const el = document.getElementById('knockout-container');
  if (!el) return;
  
  el.innerHTML = `
    <h2 class="section-title"><span class="emoji">🏆</span> 淘汰賽階段</h2>
    <p style="color:var(--text-secondary);margin-bottom:16px;">
      48 強 → 32 強淘汰賽（小組前 2 名 + 最佳 8 個第 3 名）→ 16 強 → 8 強 → 4 強 → 決賽
    </p>
    <div style="background:var(--bg-card);border:1px solid var(--border-color);border-radius:var(--radius);padding:40px;text-align:center;">
      <div style="font-size:3rem;margin-bottom:16px;">🏆</div>
      <h3 style="margin-bottom:8px;">淘汰賽賽程將於小組賽結束後產生</h3>
      <p style="color:var(--text-muted);">小組賽進行時間：6月11日 — 6月27日</p>
      <p style="color:var(--text-muted);">32 強淘汰賽：6月28日開始</p>
      <p style="color:var(--text-muted);">決賽：7月19日 @ 大都會人壽體育場（紐約/新澤西）</p>
      
      <div style="margin-top:32px;display:grid;grid-template-columns:repeat(auto-fill,minmax(150px,1fr));gap:16px;">
        <div style="background:var(--bg-primary);border-radius:var(--radius-sm);padding:16px;">
          <div style="font-size:1.1rem;font-weight:700;color:var(--accent-green);">6月28日</div>
          <div style="font-size:0.8rem;color:var(--text-muted);">32 強開賽</div>
        </div>
        <div style="background:var(--bg-primary);border-radius:var(--radius-sm);padding:16px;">
          <div style="font-size:1.1rem;font-weight:700;color:var(--accent-blue);">7月3日</div>
          <div style="font-size:0.8rem;color:var(--text-muted);">16 強開賽</div>
        </div>
        <div style="background:var(--bg-primary);border-radius:var(--radius-sm);padding:16px;">
          <div style="font-size:1.1rem;font-weight:700;color:var(--accent-purple);">7月10日</div>
          <div style="font-size:0.8rem;color:var(--text-muted);">8 強開賽</div>
        </div>
        <div style="background:var(--bg-primary);border-radius:var(--radius-sm);padding:16px;">
          <div style="font-size:1.1rem;font-weight:700;color:var(--accent-gold);">7月14日</div>
          <div style="font-size:0.8rem;color:var(--text-muted);">準決賽</div>
        </div>
        <div style="background:var(--bg-primary);border-radius:var(--radius-sm);padding:16px;">
          <div style="font-size:1.1rem;font-weight:700;color:var(--accent-red);">7月19日</div>
          <div style="font-size:0.8rem;color:var(--text-muted);">🎊 決賽</div>
        </div>
      </div>
    </div>
  `;
}
