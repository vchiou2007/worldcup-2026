// 世界盃歷史成績渲染器

// ========== 歷史國家國旗輔助 ==========
function hfimg(country, size = '32x24', cls = 'fimg') {
  // 優先從 FLAG_MAP（現有48國）查找
  if (FLAG_MAP[country]) {
    const c = FLAG_MAP[country];
    return `<img class="${cls}" src="https://flagcdn.com/${size}/${c}.png" alt="${country}" loading="lazy" onerror="this.outerHTML='🏳️'">`;
  }
  // 從歷史額外國旗查找
  const codes = WC_HISTORY.extraFlagCodes;
  if (codes[country]) {
    return `<img class="${cls}" src="https://flagcdn.com/${size}/${codes[country]}.png" alt="${country}" loading="lazy" onerror="this.outerHTML='${WC_HISTORY.extraFlags[country] || '🏳️'}'">`;
  }
  // Fallback emoji
  return `<span style="font-size:1.1rem;">${WC_HISTORY.extraFlags[country] || '🏳️'}</span>`;
}

function hfimgSm(c) { return hfimg(c, '28x21', 'fimg fimg-sm'); }
function hfimgMd(c) { return hfimg(c, '32x24', 'fimg'); }
function hfimgLg(c) { return hfimg(c, '48x36', 'fimg fimg-lg'); }

function hnameZh(c) { return WC_HISTORY.getNameZh(c); }

// ========== 渲染顏色層級 ==========
function getScoreTier(score) {
  if (score >= 80) return { label: '🏆 傳奇級', cls: 'st-s', color: '#f59e0b' };
  if (score >= 50) return { label: '🥇 頂尖級', cls: 'st-a', color: '#0d9488' };
  if (score >= 30) return { label: '🥈 強國級', cls: 'st-b', color: '#0891b2' };
  if (score >= 15) return { label: '🥉 中堅級', cls: 'st-c', color: '#6366f1' };
  if (score >= 5)  return { label: '⚪ 新興級', cls: 'st-d', color: '#64748b' };
  return { label: '🔘 潛力級', cls: 'st-e', color: '#94a3b8' };
}

// ========== 主渲染函數 ==========
function renderHistory() {
  const el = document.getElementById('history-container');
  if (!el) return;

  const rankings = WC_HISTORY.getRankings();
  const tournaments = WC_HISTORY.tournaments;

  // ===== 檢視切換按鈕 =====
  let html = `
<div class="history-page-header">
  <div class="hp-icon">📜</div>
  <h1>世界盃歷史成績總覽</h1>
  <p class="hp-sub">1930 — 2026 · 共 23 屆 · 歷屆前八名積分總排名</p>
</div>

<div class="history-view-toggle">
  <button class="hv-btn active" onclick="switchHistoryView('tournaments')" id="hv-tournaments">
    📋 依屆次瀏覽
  </button>
  <button class="hv-btn" onclick="switchHistoryView('rankings')" id="hv-rankings">
    🏆 依國家積分排名
  </button>
</div>

<div id="history-view-tournaments" class="history-view active">
  ${renderTournamentsView(tournaments)}
</div>

<div id="history-view-rankings" class="history-view">
  ${renderRankingsView(rankings)}
</div>

<div class="history-scoring-note">
  <div class="hsn-title">📊 積分計算方式</div>
  <div class="hsn-grid">
    <span class="hsn-item"><span class="hsn-badge" style="background:#f59e0b;">8分</span> 冠軍</span>
    <span class="hsn-item"><span class="hsn-badge" style="background:#94a3b8;">7分</span> 亞軍</span>
    <span class="hsn-item"><span class="hsn-badge" style="background:#cd7f32;">6分</span> 季軍</span>
    <span class="hsn-item"><span class="hsn-badge" style="background:#64748b;">5分</span> 第四名</span>
    <span class="hsn-item"><span class="hsn-badge" style="background:#0d9488;">2分</span> 八強</span>
  </div>
</div>`;

  el.innerHTML = html;
}

// ========== 依屆次瀏覽 ==========
function renderTournamentsView(tournaments) {
  let h = '<div class="ht-tournaments">';
  
  // 反向顯示（最新的在前面）
  const reversed = [...tournaments].reverse();
  
  for (const t of reversed) {
    const final4 = t.top4 || (t.top8 ? t.top8.slice(0, 4) : []);
    const qf = t.qf || [];
    const top8 = t.top8 || [];
    
    // 前四名
    const rankLabels = ['🏆 冠軍', '🥈 亞軍', '🥉 季軍', '4. 第四名'];
    let top4Html = '';
    for (let i = 0; i < final4.length && i < 4; i++) {
      const team = final4[i];
      if (!team) continue;
      const isChamp = i === 0;
      top4Html += `<div class="ht-team-row ${isChamp ? 'ht-champ' : ''}">
        <span class="ht-rank-label" style="color:${['#f59e0b','#94a3b8','#cd7f32','#64748b'][i]};">${rankLabels[i]}</span>
        ${hfimgMd(team)}
        <span class="ht-team-name">${team}</span>
        <span class="ht-team-zh">${hnameZh(team)}</span>
        ${isChamp ? '<span class="ht-crown">🏆</span>' : ''}
      </div>`;
    }
    
    // 八強
    let qfHtml = '';
    if (qf.length) {
      qfHtml = '<div class="ht-qf-section"><div class="ht-qf-title">八強（5–8名）</div><div class="ht-qf-grid">';
      for (const team of qf) {
        qfHtml += `<div class="ht-qf-team">${hfimgSm(team)} ${team}</div>`;
      }
      qfHtml += '</div></div>';
    }
    
    // 無八強但有 top8 且只有前四名
    if (!qfHtml && top8.length <= 4 && final4.length <= 4) {
      // 可能就只有前四（如1930/1950）
    }
    
    h += `<div class="ht-card">
      <div class="ht-card-header" style="border-left:4px solid #f59e0b;">
        <div class="ht-year">${t.year}</div>
        <div class="ht-host">📍 ${t.host}</div>
        <div class="ht-champion-badge">🏆 ${t.champion}</div>
        ${t.note ? `<div class="ht-note">${t.note}</div>` : ''}
      </div>
      <div class="ht-card-body">
        ${top4Html}
        ${qfHtml}
      </div>
    </div>`;
  }
  
  h += '</div>';
  return h;
}

// ========== 依國家積分排名 ==========
function renderRankingsView(rankings) {
  // 分層級
  const tiered = {};
  for (const r of rankings) {
    const tier = getScoreTier(r.score);
    if (!tiered[tier.label]) tiered[tier.label] = { ...tier, teams: [] };
    tiered[tier.label].teams.push(r);
  }
  
  // 定義層級順序
  const tierOrder = ['🏆 傳奇級', '🥇 頂尖級', '🥈 強國級', '🥉 中堅級', '⚪ 新興級', '🔘 潛力級'];
  
  let h = '<div class="hr-rankings">';
  
  let rank = 0;
  for (const tierLabel of tierOrder) {
    const tier = tiered[tierLabel];
    if (!tier || !tier.teams.length) continue;
    
    h += `<div class="hr-tier-card" data-tier="${tier.cls}">
      <div class="hr-tier-header" style="background:${tier.color}11; border-left:4px solid ${tier.color};">
        <span class="hr-tier-icon">${tier.label.split(' ')[0]}</span>
        <span class="hr-tier-label">${tier.label}</span>
        <span class="hr-tier-count">${tier.teams.length} 國</span>
      </div>
      <div class="hr-tier-body">`;
    
    for (const r of tier.teams) {
      rank++;
      const scoreColor = r.score >= 80 ? '#f59e0b' : r.score >= 50 ? '#0d9488' : r.score >= 30 ? '#0891b2' : r.score >= 15 ? '#6366f1' : r.score >= 5 ? '#64748b' : '#94a3b8';
      h += `<div class="hr-team-row">
        <span class="hr-rank">#${rank}</span>
        ${hfimgMd(r.country)}
        <span class="hr-team-name">${r.country}</span>
        <span class="hr-team-zh">${hnameZh(r.country)}</span>
        <span class="hr-score" style="background:${scoreColor};color:#fff;">${r.score}<span class="hr-score-unit">分</span></span>
      </div>`;
    }
    
    h += `</div></div>`;
  }
  
  h += '</div>';
  
  // 傳奇國家徽章牆
  h += '<div class="hr-legend-wall"><div class="hrl-title">🏛️ 世界盃傳奇俱樂部</div><div class="hrl-sub">積分 30 分以上國家</div><div class="hrl-grid">';
  for (const r of rankings) {
    if (r.score >= 30) {
      h += `<div class="hrl-item">
        ${hfimgLg(r.country)}
        <div class="hrl-name">${r.country}</div>
        <div class="hrl-score">${r.score}<span>分</span></div>
      </div>`;
    }
  }
  h += '</div></div>';
  
  return h;
}

// ========== 檢視切換 ==========
function switchHistoryView(view) {
  // 切換按鈕
  document.querySelectorAll('.hv-btn').forEach(b => b.classList.remove('active'));
  document.getElementById(`hv-${view}`).classList.add('active');
  
  // 切換內容
  document.querySelectorAll('.history-view').forEach(v => v.classList.remove('active'));
  document.getElementById(`history-view-${view}`).classList.add('active');
}

// 註冊到全域
window.renderHistory = renderHistory;
window.switchHistoryView = switchHistoryView;
