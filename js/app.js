// 2026 世界盃 — 北歐現代渲染引擎（flagcdn 國旗圖片）

document.addEventListener('DOMContentLoaded',()=>{
  switch(document.body.dataset.page){
    case'home':renderHome();break;
    case'groups':renderGroups();break;
    case'teams':renderTeams();break;
    case'matches':renderMatches();break;
    case'knockout':renderKnockout();break;
  }
  const u=document.getElementById('update-time');
  if(u)u.textContent=new Date().toLocaleString('zh-TW',{timeZone:'America/Toronto'});
});

// ========== FLAGCDN 國旗圖片 ==========
const FLAG_MAP = {
  'Mexico':'mx','South Korea':'kr','South Africa':'za','Czechia':'cz',
  'Canada':'ca','Switzerland':'ch','Qatar':'qa','Bosnia and Herzegovina':'ba',
  'Brazil':'br','Morocco':'ma','Scotland':'gb-sct','Haiti':'ht',
  'USA':'us','Paraguay':'py','Australia':'au','Turkey':'tr',
  'Germany':'de','Ecuador':'ec','Ivory Coast':'ci','Curaçao':'cw',
  'Netherlands':'nl','Japan':'jp','Sweden':'se','Tunisia':'tn',
  'Belgium':'be','Iran':'ir','Egypt':'eg','New Zealand':'nz',
  'Spain':'es','Uruguay':'uy','Saudi Arabia':'sa','Cape Verde':'cv',
  'France':'fr','Senegal':'sn','Norway':'no','Iraq':'iq',
  'Argentina':'ar','Austria':'at','Algeria':'dz','Jordan':'jo',
  'Portugal':'pt','Colombia':'co','Uzbekistan':'uz','DR Congo':'cd',
  'England':'gb-eng','Croatia':'hr','Ghana':'gh','Panama':'pa'
};

function fimg(t,size='32x24',cls='fimg'){
  const code=FLAG_MAP[t]||'un';
  return `<img class="${cls}" src="https://flagcdn.com/${size}/${code}.png" alt="${t}" loading="lazy" onerror="this.outerHTML='🏳️'">`;
}
function fimgSm(t){return fimg(t,'24x18','fimg fimg-sm');}
function fimgMd(t){return fimg(t,'32x24','fimg');}
function fimgLg(t){return fimg(t,'48x36','fimg fimg-lg');}
function fimgXl(t){return fimg(t,'64x48','fimg fimg-xl');}
function fi(t,s,c){return `<span class="fi">${fimg(t,s,c)} ${t}</span>`;}

// ========== 輔助 ==========
function zh(t){
  for(const g of WC_DATA.groups)for(const tm of g.teams)if(tm.name===t)return tm.nameZh;
  return t;
}
function grp(t){
  for(const g of WC_DATA.groups)for(const tm of g.teams)if(tm.name===t)return g.id;
  return'';
}
function rnk(t){
  for(const g of WC_DATA.groups)for(const tm of g.teams)if(tm.name===t)return tm.rank;
  return'';
}
function stars(t){return WC_DATA.stars[t]||[];}
function stnd(g){return WC_DATA.standings[g]||[];}
function fd(d){const dt=new Date(d+'T12:00:00');return`${dt.getMonth()+1}月${dt.getDate()}日`;}
function fdFull(d){const dt=new Date(d+'T12:00:00');const wd=['日','一','二','三','四','五','六'];return`${fd(d)}（週${wd[dt.getDay()]}）`;}
function td(){return new Date().toISOString().slice(0,10);}
function yd(){const d=new Date();d.setDate(d.getDate()-1);return d.toISOString().slice(0,10);}
function gf(gid){const g=WC_DATA.groups.find(x=>x.id===gid);return g?g.teams.map(t=>fimgSm(t.name)).join(' '):'';}

// ========== 比賽卡片 ==========
function mCard(m){
  const done=m.status==='completed',live=m.status==='live';
  const sc=done?`${m.score1}-${m.score2}`:live?`${m.score1||0}-${m.score2||0}`:'VS';
  const scCls=done?'final':live?'live':'upcoming';
  const stLbl=done?'已完賽':live?'●LIVE':'未開賽';
  return`
<div class="match-card">
  <div class="match-header">
    <span class="match-group-badge">${m.group}組 ${gf(m.group)}</span>
    <span class="match-status-badge ${m.status}">${stLbl}</span>
  </div>
  <div class="match-body">
    <div class="match-team-block">${fimgLg(m.team1)}<div><div class="tn-en">${m.team1}</div><div class="tn-zh">${zh(m.team1)}</div></div></div>
    <div class="score-block"><div class="score-display ${scCls}">${sc}</div></div>
    <div class="match-team-block right"><div><div class="tn-en">${m.team2}</div><div class="tn-zh">${zh(m.team2)}</div></div>${fimgLg(m.team2)}</div>
  </div>
  <div class="match-footer">
    <span>📍 ${m.venue}</span><span>🕐 ${m.time}</span>
  </div>
  ${m.details?`<div class="match-highlights">⚡ ${m.details}</div>`:''}
</div>`;
}

// ========== 主頁 ==========
function renderHome(){
  const hero=document.getElementById('hero');
  if(hero){
    const total=WC_DATA.matches.length,done=WC_DATA.matches.filter(m=>m.status==='completed').length;
    hero.innerHTML=`
<div class="hero-content">
  <div class="hero-badge">⚽ FIFA WORLD CUP 2026</div>
  <h1>2026 世界盃</h1>
  <p class="hero-subtitle">${fimgSm('USA')} 美國 · ${fimgSm('Canada')} 加拿大 · ${fimgSm('Mexico')} 墨西哥 ｜ 6.11 — 7.19</p>
  <div class="hero-stats">
    <div class="hero-stat"><div class="hero-stat-number">48</div><div class="hero-stat-label">參賽隊伍</div></div>
    <div class="hero-stat"><div class="hero-stat-number">${total}</div><div class="hero-stat-label">總場次</div></div>
    <div class="hero-stat"><div class="hero-stat-number">${done}</div><div class="hero-stat-label">已賽</div></div>
    <div class="hero-stat"><div class="hero-stat-number">16</div><div class="hero-stat-label">主辦城市</div></div>
  </div>
</div>`;
  }
  const t=td();
  // 今日
  const el1=document.getElementById('today-matches');
  if(el1){
    const ms=WC_DATA.matches.filter(m=>m.date===t);
    let h=`<h2 class="section-title">📅 今日比賽 — ${fdFull(t)}</h2>`;
    if(!ms.length)h+=`<p style="color:var(--text-muted);padding:12px;">今日無賽事</p>`;
    else{h+=`<div class="matches-grid two-cols">`;for(const m of ms)h+=mCard(m);h+=`</div>`;}
    el1.innerHTML=h;
  }
  // 昨日
  const y=yd();
  const el2=document.getElementById('yesterday-matches');
  if(el2){
    const ms=WC_DATA.matches.filter(m=>m.date===y);
    if(!ms.length)el2.style.display='none';
    else{
      let h=`<h2 class="section-title">📋 昨日賽果 — ${fdFull(y)}</h2><div class="matches-grid two-cols">`;
      for(const m of ms)h+=mCard(m);h+=`</div>`;
      el2.innerHTML=h;
    }
  }
  // 分組
  const el3=document.getElementById('groups-mini');
  if(el3){
    let h=`<h2 class="section-title">🏆 分組積分一覽</h2><div class="gm-grid">`;
    for(const g of WC_DATA.groups){
      const st=stnd(g.id);
      h+=`<div class="gm-card"><a href="groups.html#group-${g.id}" style="text-decoration:none;color:inherit;"><div class="gm-title">${g.id}組 ${gf(g.id)}</div></a>`;
      for(let i=0;i<st.length;i++){
        const s=st[i];
        h+=`<div class="gm-row"><span class="gm-rank rank-${Math.min(i+1,4)}">${i+1}</span>${fimgSm(s.team)}<span style="flex:1;">${s.team}</span><span class="gm-pts">${s.pts}</span></div>`;
      }
      h+=`</div>`;
    }
    h+=`</div>`;
    el3.innerHTML=h;
  }
}

// ========== 分組頁 ==========
function renderGroups(){
  const el=document.getElementById('groups-container');
  if(!el)return;
  let h=`<h2 class="section-title">🏆 完整分組積分表</h2><p class="section-subtitle">小組前 2 名 + 最佳 8 個第 3 名晉級 32 強淘汰賽</p>`;
  for(const g of WC_DATA.groups){
    const st=stnd(g.id),ms=WC_DATA.matches.filter(m=>m.group===g.id);
    h+=`<div class="group-section" id="group-${g.id}">
<div class="group-title-bar"><h2>${g.id}組 <span class="group-flags">${gf(g.id)}</span></h2></div>
<div class="table-wrapper"><table class="standings-table">
<thead><tr><th>#</th><th>球隊</th><th class="stat-cell">賽</th><th class="stat-cell">勝</th><th class="stat-cell">和</th><th class="stat-cell">負</th><th class="stat-cell">進球</th><th class="stat-cell">失球</th><th class="stat-cell">淨勝球</th><th class="stat-cell">積分</th></tr></thead>
<tbody>`;
    for(let i=0;i<st.length;i++){
      const s=st[i];
      const gc=s.gd>0?'gd-pos':'gd-neg';
      const gd=s.gd>0?`+${s.gd}`:s.gd;
      h+=`<tr><td><span class="rank-num rank-${Math.min(i+1,4)}">${i+1}</span></td>
<td><div class="team-cell">${fimgMd(s.team)}<div><div style="font-weight:600;font-size:0.88rem;">${s.team}</div><div style="font-size:0.65rem;color:var(--text-muted);">${zh(s.team)}</div></div></div></td>
<td class="stat-cell">${s.played}</td><td class="stat-cell">${s.won}</td><td class="stat-cell">${s.drawn}</td><td class="stat-cell">${s.lost}</td>
<td class="stat-cell">${s.gf}</td><td class="stat-cell">${s.ga}</td><td class="stat-cell ${gc}">${gd}</td><td class="pts-cell">${s.pts}</td></tr>`;
    }
    h+=`</tbody></table></div>`;
    if(ms.length){
      h+=`<div class="group-matches">`;
      for(const m of ms){
        const d=m.status==='completed';
        h+=`<div class="group-match-item"><div>${fimgSm(m.team1)} ${m.team1}</div>
<div style="text-align:center;"><span class="gm-score ${d?'final':'upcoming'}">${d?`${m.score1}-${m.score2}`:'VS'}</span><div class="gm-info">${fd(m.date)} ${m.time}</div></div>
<div style="text-align:right;">${m.team2} ${fimgSm(m.team2)}</div></div>`;
      }
      h+=`</div>`;
    }
    h+=`</div>`;
  }
  el.innerHTML=h;
  if(window.location.hash){const t=document.querySelector(window.location.hash);if(t)setTimeout(()=>t.scrollIntoView({behavior:'smooth'}),200);}
}

// ========== 球隊頁 ==========
function renderTeams(){
  const el=document.getElementById('teams-container');
  if(!el)return;
  let h=`<h2 class="section-title">🌍 全部 48 支參賽隊伍</h2>
<p class="section-subtitle">每隊以 <img src="https://flagcdn.com/24x18/mx.png" style="width:20px;height:14px;border-radius:2px;vertical-align:middle;"> 國旗圖片標示 ｜ 球星中英雙語</p>
<div class="teams-grid">`;
  for(const g of WC_DATA.groups){
    for(const tm of g.teams){
      const st=stars(tm.name);
      let sh='';
      for(const s of st){
        sh+=`<div class="star-row"><span class="s-icon">⭐</span><div>
<div class="n-zh">${s.name}</div><div class="n-en">${s.nameEn}</div>
<div class="meta"><span class="pos">${s.position}</span><span style="color:var(--text-muted);margin:0 3px;">｜</span><span>${s.club}</span>${s.note?`<span style="color:var(--text-muted);margin:0 3px;">｜</span><span class="nm">★ ${s.note}</span>`:''}</div>
</div></div>`;
      }
      h+=`<div class="team-card"><div class="team-card-top">
${fimgXl(tm.name)}
<div class="tinfo"><div class="en">${tm.name}</div><div class="zh">${tm.nameZh}</div><span class="badge">${g.id}組</span></div>
<div class="fifa-badge">FIFA<span class="num">#${tm.rank}</span></div>
</div>
<div class="team-card-stars"><div class="slabel">⭐ 主力球星</div>${sh||'<div style="color:var(--text-muted);font-size:0.78rem;">資料整理中</div>'}</div></div>`;
    }
  }
  h+=`</div>`;
  el.innerHTML=h;
}

// ========== 賽程頁 ==========
function renderMatches(){
  const el=document.getElementById('matches-container');
  if(!el)return;
  const dates=[...new Set(WC_DATA.matches.map(m=>m.date))].sort();
  let nav='<div class="date-nav">';
  for(const d of dates)nav+=`<button class="date-btn ${d===td()?'active':''}" onclick="showMD('${d}')">${fd(d)}</button>`;
  nav+='</div><div id="md-list"></div>';
  el.innerHTML=nav;
  showMD(dates.includes(td())?td():dates[0]);
}
function showMD(d){
  const el=document.getElementById('md-list');
  if(!el)return;
  const ms=WC_DATA.matches.filter(m=>m.date===d);
  document.querySelectorAll('.date-btn').forEach(b=>b.classList.toggle('active',b.textContent.includes(d.slice(-5))));
  if(!ms.length){el.innerHTML=`<p style="color:var(--text-muted);padding:16px;">${fdFull(d)} 無賽事</p>`;return;}
  let h=`<h2 class="section-title" style="margin-bottom:14px;">📅 ${fdFull(d)}</h2><div class="matches-grid two-cols">`;
  for(const m of ms)h+=mCard(m);
  h+=`</div>`;el.innerHTML=h;
}

// ========== 淘汰賽頁 ==========
function renderKnockout(){
  const el=document.getElementById('knockout-container');
  if(!el)return;
  el.innerHTML=`
<h2 class="section-title">🏆 淘汰賽階段</h2>
<p class="section-subtitle">48強 → 32強（小組前2名+最佳8個第3名）→ 16強 → 8強 → 4強 → 🏆決賽</p>
<div style="background:var(--card);border:1px solid var(--card-border);border-radius:var(--radius);padding:40px 24px;text-align:center;box-shadow:var(--card-shadow);">
  <div style="font-size:3.5rem;margin-bottom:14px;">🏆</div>
  <h3 style="font-size:1.2rem;font-weight:700;color:var(--teal);margin-bottom:4px;">淘汰賽對戰組合將於小組賽結束後產生</h3>
  <p style="color:var(--text-muted);font-size:0.85rem;">小組賽：6.11 — 6.27 ｜ 32強：6.28起 ｜ 決賽：7.19 @ 大都會人壽體育場</p>
  <div class="knockout-grid">
    <div class="knockout-step step-r32"><div class="kd">6/28</div><div class="kl">32強開賽</div></div>
    <div class="knockout-step step-r16"><div class="kd">7/3</div><div class="kl">16強</div></div>
    <div class="knockout-step step-qf"><div class="kd">7/10</div><div class="kl">8強</div></div>
    <div class="knockout-step step-sf"><div class="kd">7/14</div><div class="kl">準決賽</div></div>
    <div class="knockout-step step-final"><div class="kd">7/19</div><div class="kl">🏆決賽</div></div>
  </div>
</div>
<div style="margin-top:20px;background:var(--card);border:1px solid var(--card-border);border-radius:var(--radius);padding:20px 24px;box-shadow:var(--card-shadow);">
  <h3 style="font-size:0.95rem;font-weight:700;margin-bottom:10px;">🏟️ 主辦城市 16 座</h3>
  <div class="city-grid">
    <div>${fimgSm('USA')} 紐約/新澤西</div><div>${fimgSm('USA')} 洛杉磯</div><div>${fimgSm('USA')} 達拉斯</div><div>${fimgSm('USA')} 休斯頓</div>
    <div>${fimgSm('USA')} 亞特蘭大</div><div>${fimgSm('USA')} 西雅圖</div><div>${fimgSm('USA')} 舊金山</div><div>${fimgSm('USA')} 費城</div>
    <div>${fimgSm('USA')} 邁阿密</div><div>${fimgSm('USA')} 波士頓</div><div>${fimgSm('USA')} 堪薩斯城</div>
    <div>${fimgSm('Mexico')} 墨西哥城</div><div>${fimgSm('Mexico')} 瓜達拉哈拉</div><div>${fimgSm('Mexico')} 蒙特雷</div>
    <div>${fimgSm('Canada')} 多倫多</div><div>${fimgSm('Canada')} 溫哥華</div>
  </div>
</div>`;
}
