// 2026 世界盃 — 完整渲染引擎 v3（輪播牆 + 球星照片 + 星期幾）

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
  const c=FLAG_MAP[t]||'un';
  return `<img class="${cls}" src="https://flagcdn.com/${size}/${c}.png" alt="${t}" loading="lazy" onerror="this.outerHTML='🏳️'">`;
}
function fimgSm(t){return fimg(t,'28x21','fimg fimg-sm');}
function fimgMd(t){return fimg(t,'32x24','fimg');}
function fimgLg(t){return fimg(t,'48x36','fimg fimg-lg');}
function fimgXl(t){return fimg(t,'64x48','fimg fimg-xl');}

// ========== 輔助 ==========
function zh(t){for(const g of WC_DATA.groups)for(const tm of g.teams)if(tm.name===t)return tm.nameZh;return t;}
function grp(t){for(const g of WC_DATA.groups)for(const tm of g.teams)if(tm.name===t)return g.id;return'';}
function rnk(t){for(const g of WC_DATA.groups)for(const tm of g.teams)if(tm.name===t)return tm.rank;return'';}
function stars(t){return WC_DATA.stars[t]||[];}
function stnd(g){return WC_DATA.standings[g]||[];}

// ===== 星期幾 — 永遠顯示 =====
const WD=['日','一','二','三','四','五','六'];
function clockTick(){
  const el=document.getElementById('live-clock');
  if(!el)return;
  const now=new Date();
  const timeStr=now.toLocaleString('zh-TW',{timeZone:'America/Toronto',hour:'2-digit',minute:'2-digit',hour12:false});
  const dateStr=now.toLocaleString('zh-TW',{timeZone:'America/Toronto',month:'numeric',day:'numeric'});
  const dow=WD[now.getDay()];
  el.innerHTML=`🕐 加拿大時間 ${dateStr}（${dow}） ${timeStr}`;
}
function initLiveClock(){
  clockTick();
  setInterval(clockTick,10000);
}
function fd(d){const dt=new Date(d+'T12:00:00');return`${dt.getMonth()+1}月${dt.getDate()}日`;}
function fdFull(d){const dt=new Date(d+'T12:00:00');return`${fd(d)}（週${WD[dt.getDay()]}）`;}

// ===== 加拿大時間（多倫多/美東 EDT）=====
function nowToronto(){
  const s=new Date().toLocaleString('en-CA',{timeZone:'America/Toronto',hour12:false});
  // Returns "2026-06-11, 15:30:00" - just take the date part
  return s.split(',')[0].trim();
}
function td(){return nowToronto();}
function yd(){const d=new Date(nowToronto()+'T12:00:00');d.setDate(d.getDate()-1);return d.toISOString().slice(0,10);}
function gf(gid){const g=WC_DATA.groups.find(x=>x.id===gid);return g?g.teams.map(t=>fimgSm(t.name)).join(' '):'';}

// ========== 比賽卡片（含星期幾 + 詳細統計） ==========
function mCard(m){
  const done=m.status==='completed',live=m.status==='live';
  const sc=done?`${m.score1}-${m.score2}`:live?`${m.score1||0}-${m.score2||0}`:'VS';
  const scCls=done?'final':live?'live':'upcoming';
  const stLbl=done?'已完賽':live?'●LIVE':'未開賽';

  // 進球時間軸（含國旗）
  let goalsHtml='';
  if(m.goals&&m.goals.length){
    goalsHtml='<div class="match-goals"><div class="match-goals-title">⚽ 進球記錄</div>';
    for(const g of m.goals){
      const side=g.team===1?'goal-team1':'goal-team2';
      const teamName=g.team===1?m.team1:m.team2;
      goalsHtml+=`<div class="goal-event ${side}">
        <span class="goal-min">${g.min}'</span>
        <span class="goal-icon">⚽</span>
        <span>${fimgSm(teamName)} <span class="goal-scorer">${g.scorer}</span>
        ${g.assist?`<span class="goal-assist">（助攻：${g.assist}）</span>`:''}
        ${g.detail?`<span class="goal-detail">— ${g.detail}</span>`:''}</span>
      </div>`;
    }
    goalsHtml+='</div>';
  }

  // 卡片（含國旗）
  let cardsHtml='';
  if(m.cards&&m.cards.length){
    cardsHtml='<div class="match-cards">';
    for(const c of m.cards){
      const cName=c.card==='red'?'🔴 ':'🟨 ';
      const teamName=c.team===1?m.team1:m.team2;
      cardsHtml+=`<span class="card-badge ${c.card}">${cName}${c.min}' ${fimgSm(teamName)} ${c.player}${c.detail?`（${c.detail}）`:''}</span>`;
    }
    cardsHtml+='</div>';
  }

  // 統計比較表（v2：單一條狀圖、兩邊都有百分比、贏家深色輸家淺色）
  let statsHtml='';
  if(m.stats){
    const statsDef = [
      {key:'possession',label:'持球率',unit:'%',suffix:'%',importance:'critical',desc:'哪隊掌控比賽節奏'},
      {key:'shotsOnTarget',label:'射正',unit:'',suffix:'',importance:'critical',desc:'最有威脅的進攻次數'},
      {key:'shots',label:'射門',unit:'',suffix:'',importance:'high',desc:'總射門次數'},
      {key:'passAccuracy',label:'傳球成功率',unit:'%',suffix:'%',importance:'high',desc:'傳球品質指標'},
      {key:'fouls',label:'犯規',unit:'',suffix:'',importance:'high',desc:'犯規次數'},
      {key:'yellowCards',label:'黃牌',unit:'',suffix:'',importance:'high',desc:'警告次數'},
      {key:'redCards',label:'紅牌',unit:'',suffix:'',importance:'high',desc:'驅逐出場'},
      {key:'shotsOffTarget',label:'射偏',unit:'',suffix:'',importance:'normal',desc:'未命中目標的射門'},
      {key:'shotsInsideBox',label:'禁區射門',unit:'',suffix:'',importance:'normal',desc:'禁區內威脅'},
      {key:'shotsOutsideBox',label:'禁區外射門',unit:'',suffix:'',importance:'normal',desc:'遠距離嘗試'},
      {key:'corners',label:'角球',unit:'',suffix:'',importance:'normal',desc:'定位球機會'},
      {key:'offsides',label:'越位',unit:'',suffix:'',importance:'normal',desc:'越位次數'},
      {key:'freeKicks',label:'自由球',unit:'',suffix:'',importance:'low',desc:'自由球機會'},
      {key:'passes',label:'傳球次數',unit:'',suffix:'',importance:'low',desc:'總傳球'},
      {key:'crosses',label:'傳中',unit:'',suffix:'',importance:'low',desc:'邊路傳中'},
      {key:'crossesCompleted',label:'傳中成功',unit:'',suffix:'',importance:'low',desc:'成功傳中'},
      {key:'forcedTurnovers',label:'逼搶成功',unit:'',suffix:'',importance:'low',desc:'壓迫造成失誤'},
      {key:'pressingApplied',label:'壓迫次數',unit:'',suffix:'',importance:'low',desc:'高位壓迫'}
    ];
    const hueMap = {
      critical:{dark:'#0d9488',light:'#5cb9b0',cls:'stats-label-critical',star:'⭐ '},
      high:{dark:'#0891b2',light:'#5ba8c0',cls:'stats-label-high',star:''},
      normal:{dark:'#64748b',light:'#94a3b8',cls:'stats-label-normal',star:''},
      low:{dark:'#94a3b8',light:'#cbd5e1',cls:'stats-label-low',star:''}
    };
    const lowerBetter = new Set(['fouls','yellowCards','redCards','offsides']);
    statsHtml='<div class="stats-comparison">';
    for(const s of statsDef){
      const v=m.stats[s.key];
      if(!v||v.length<2)continue;
      const v1=parseFloat(v[0])||0, v2=parseFloat(v[1])||0;
      const total=v1+v2;
      const pct1=total>0?(v1/total*100):50;
      const pct2=100-pct1;
      const val1=s.suffix?`${v1}${s.suffix}`:v1;
      const val2=s.suffix?`${v2}${s.suffix}`:v2;
      const h=hueMap[s.importance]||hueMap.normal;

      const isTied=v1===v2;
      const t1Wins=lowerBetter.has(s.key)?(v1<v2):(v1>v2);
      const t2Wins=lowerBetter.has(s.key)?(v2<v1):(v2>v1);

      // 贏家=深色粗體，輸家=淺色正常，平手=灰色
      const c1=isTied?'#94a3b8':(t1Wins?h.dark:h.light);
      const c2=isTied?'#94a3b8':(t2Wins?h.dark:h.light);
      const w1=isTied?'500':(t1Wins?'800':'500');
      const w2=isTied?'500':(t2Wins?'800':'500');
      const b1=isTied?'0.5':(t1Wins?'0.8':'0.3');
      const b2=isTied?'0.5':(t2Wins?'0.8':'0.3');

      statsHtml+=`<div class="stats-row">
        <span class="stats-val" style="color:${c1};font-weight:${w1};">${val1}</span>
        <div class="stats-bar-single"><div class="stats-bar-bg-single">
          <div class="stats-bar-t1" style="width:${pct1}%;background:${h.dark};opacity:${b1}"></div>
          <div class="stats-bar-t2" style="width:${pct2}%;background:${h.dark};opacity:${b2}"></div>
        </div></div>
        <span class="${h.cls}">${h.star}${s.label}</span>
        <div class="stats-bar-single"><div class="stats-bar-bg-single">
          <div class="stats-bar-t2" style="width:${pct2}%;background:${h.dark};opacity:${b2}"></div>
          <div class="stats-bar-t1" style="width:${pct1}%;background:${h.dark};opacity:${b1}"></div>
        </div></div>
        <span class="stats-val" style="color:${c2};font-weight:${w2};">${val2}</span>
      </div>`;
    }
    statsHtml+='</div>';

    // 圖例說明
    statsHtml+=`<div style="margin-top:10px;padding-top:8px;border-top:1px solid var(--card-border);display:flex;gap:12px;flex-wrap:wrap;font-size:0.65rem;color:var(--text-muted);">
      <span>⭐ <span style="color:#0d9488;font-weight:600;">核心數據</span> — 最重要的比賽指標</span>
      <span>🔵 <span style="color:#0891b2;font-weight:600;">重要數據</span> — 輔助分析</span>
      <span>⚪ <span style="color:#64748b;">一般數據</span> — 參考資訊</span>
    </div>`;

    // 加入展開/收合按鈕
    statsHtml=`<div class="match-stats-toggle" onclick="this.classList.toggle('open');this.nextElementSibling.classList.toggle('open')">
      📊 詳細數據 <span class="arrow">▼</span>
    </div>
    <div class="match-stats-panel">
      ${goalsHtml}
      ${cardsHtml}
      ${statsHtml}
    </div>`;
  }

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
    <span>📍 ${m.venue}</span><span>🕐 ${fdFull(m.date)} ${m.time}</span>
  </div>
  ${m.details?`<div class="match-highlights">⚡ ${m.details}</div>`:''}
  ${statsHtml}
</div>`;
}

// ========== 球星照片 ==========
function playerPhoto(nameEn){
  const url = PLAYER_IMAGES && PLAYER_IMAGES[nameEn];
  if(url){
    return `<img class="star-photo" src="${url}" alt="${nameEn}" loading="lazy" onerror="this.outerHTML='<span class=\\'star-photo-placeholder\\'>⭐</span>'">`;
  }
  // Get first letter of first name for placeholder
  const initial = nameEn.charAt(0);
  return `<span class="star-photo-placeholder">${initial}</span>`;
}

// ========== 輪播牆 ==========
let slideInterval = null;

function initSlideshow(){
  if(!document.getElementById('hero-slideshow')) return;
  
  function showSlide(idx){
    document.querySelectorAll('.hero-slide').forEach(s=>s.classList.remove('active'));
    document.querySelectorAll('.hero-dot').forEach(d=>d.classList.remove('active'));
    const slides = document.querySelectorAll('.hero-slide');
    const dots = document.querySelectorAll('.hero-dot');
    if(slides[idx]){
      slides[idx].classList.add('active');
      if(dots[idx]) dots[idx].classList.add('active');
    }
    const cap = document.querySelector('.hero-caption');
    if(cap && HERO_CAPTIONS && HERO_CAPTIONS[idx]){
      cap.textContent = HERO_CAPTIONS[idx];
    }
  }
  
  let current = 0;
  const total = document.querySelectorAll('.hero-slide').length;
  
  if(slideInterval) clearInterval(slideInterval);
  slideInterval = setInterval(() => {
    current = (current + 1) % total;
    showSlide(current);
  }, 4000);
  
  // Dot clicks
  document.querySelectorAll('.hero-dot').forEach((dot, i) => {
    dot.addEventListener('click', () => {
      current = i;
      showSlide(i);
      if(slideInterval){ clearInterval(slideInterval); slideInterval=null; }
      slideInterval = setInterval(() => {
        current = (current + 1) % total;
        showSlide(current);
      }, 4000);
    });
  });
  
  showSlide(0);
}

function renderSlideshow(){
  const el = document.getElementById('hero');
  if(!el || !HERO_IMAGES) return;
  
  let slides = '';
  for(let i=0; i<HERO_IMAGES.length; i++){
    slides += `<div class="hero-slide" style="background-image:url('${HERO_IMAGES[i]}')"></div>`;
  }
  
  let dots = '';
  for(let i=0; i<HERO_IMAGES.length; i++){
    dots += `<button class="hero-dot" aria-label="Slide ${i+1}"></button>`;
  }
  
  el.innerHTML = `
    <div class="hero-slideshow" id="hero-slideshow">${slides}</div>
    <div class="hero-overlay">
      <div class="hero-content">
        <div class="hero-badge" style="color:#fff;border-color:rgba(255,255,255,0.2);background:rgba(255,255,255,0.08);">⚽ FIFA WORLD CUP 2026</div>
        <h1 style="color:#fff;">2026 世界盃</h1>
        <p class="hero-subtitle" style="color:rgba(255,255,255,0.65);">${fimgSm('USA')} 美國 · ${fimgSm('Canada')} 加拿大 · ${fimgSm('Mexico')} 墨西哥 ｜ 6.11 — 7.19</p>
        <div id="live-clock" style="font-size:0.9rem;font-weight:600;color:rgba(255,255,255,0.7);margin-bottom:20px;font-variant-numeric:tabular-nums;">🕐 載入中...</div>
        <div class="hero-stats">
          <div class="hero-stat"><div class="hero-stat-number" style="color:#fff;">48</div><div class="hero-stat-label" style="color:rgba(255,255,255,0.5);">參賽隊伍</div></div>
          <div class="hero-stat"><div class="hero-stat-number" style="color:#fff;">${WC_DATA.matches.length}</div><div class="hero-stat-label" style="color:rgba(255,255,255,0.5);">總場次</div></div>
          <div class="hero-stat"><div class="hero-stat-number" style="color:#fff;">${WC_DATA.matches.filter(m=>m.status==='completed').length}</div><div class="hero-stat-label" style="color:rgba(255,255,255,0.5);">已賽</div></div>
          <div class="hero-stat"><div class="hero-stat-number" style="color:#fff;">16</div><div class="hero-stat-label" style="color:rgba(255,255,255,0.5);">主辦城市</div></div>
        </div>
      </div>
    </div>
    <div class="hero-dots">${dots}</div>
    <div class="hero-caption">${HERO_CAPTIONS?HERO_CAPTIONS[0]:''}</div>`;
  
  setTimeout(initSlideshow, 100);
}

// ========== 主頁 ==========
function renderHome(){
  renderSlideshow();
  initLiveClock();
  const t=td();
  const el1=document.getElementById('today-matches');
  if(el1){
    const ms=WC_DATA.matches.filter(m=>m.date===t);
    let h=`<h2 class="section-title">📅 今日比賽 — ${fdFull(t)}</h2>`;
    if(!ms.length)h+=`<p style="color:var(--text-muted);padding:12px;">今日無賽事</p>`;
    else{h+=`<div class="matches-grid two-cols">`;for(const m of ms)h+=mCard(m);h+=`</div>`;}
    el1.innerHTML=h;
  }
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
  const el3=document.getElementById('groups-mini');
  if(el3){
    let h=`<h2 class="section-title">🏆 分組積分一覽</h2><div class="gm-grid">`;
    for(const g of WC_DATA.groups){
      const st=stnd(g.id);
      h+=`<div class="gm-card"><a href="groups.html#group-${g.id}" style="text-decoration:none;color:inherit;"><div class="gm-title">${g.id}組 ${gf(g.id)}</div></a>`;
      for(let i=0;i<st.length;i++){const s=st[i];
        h+=`<div class="gm-row"><span class="gm-rank rank-${Math.min(i+1,4)}">${i+1}</span>${fimgSm(s.team)}<span style="flex:1;">${s.team}</span><span class="gm-pts">${s.pts}</span></div>`;}
      h+=`</div>`;
    }h+=`</div>`;el3.innerHTML=h;
  }
}

// ========== 分組頁 ==========
function renderGroups(){
  const el=document.getElementById('groups-container');if(!el)return;
  let h=`<h2 class="section-title">🏆 完整分組積分表</h2><p class="section-subtitle">小組前2名 + 最佳8個第3名晉級32強淘汰賽</p>`;
  for(const g of WC_DATA.groups){
    const st=stnd(g.id),ms=WC_DATA.matches.filter(m=>m.group===g.id);
    h+=`<div class="group-section" id="group-${g.id}"><div class="group-title-bar"><h2>${g.id}組 <span class="group-flags">${gf(g.id)}</span></h2></div>
<div class="table-wrapper"><table class="standings-table"><thead><tr><th>#</th><th>球隊</th><th class="stat-cell">賽</th><th class="stat-cell">勝</th><th class="stat-cell">和</th><th class="stat-cell">負</th><th class="stat-cell">進球</th><th class="stat-cell">失球</th><th class="stat-cell">淨勝球</th><th class="stat-cell">積分</th></tr></thead><tbody>`;
    for(let i=0;i<st.length;i++){const s=st[i];const gc=s.gd>0?'gd-pos':'gd-neg';const gd=s.gd>0?`+${s.gd}`:s.gd;
      h+=`<tr><td><span class="rank-num rank-${Math.min(i+1,4)}">${i+1}</span></td><td><div class="team-cell">${fimgMd(s.team)}<div><div style="font-weight:600;font-size:0.88rem;">${s.team}</div><div style="font-size:0.65rem;color:var(--text-muted);">${zh(s.team)}</div></div></div></td>
<td class="stat-cell">${s.played}</td><td class="stat-cell">${s.won}</td><td class="stat-cell">${s.drawn}</td><td class="stat-cell">${s.lost}</td>
<td class="stat-cell">${s.gf}</td><td class="stat-cell">${s.ga}</td><td class="stat-cell ${gc}">${gd}</td><td class="pts-cell">${s.pts}</td></tr>`;}
    h+=`</tbody></table></div>`;
    if(ms.length){h+=`<div class="group-matches">`;
      for(const m of ms){const d=m.status==='completed';
        h+=`<div class="group-match-item"><div>${fimgSm(m.team1)} ${m.team1}</div>
<div style="text-align:center;"><span class="gm-score ${d?'final':'upcoming'}">${d?`${m.score1}-${m.score2}`:'VS'}</span><div class="gm-info">${fdFull(m.date)} ${m.time}</div></div>
<div style="text-align:right;">${m.team2} ${fimgSm(m.team2)}</div></div>`;}
      h+=`</div>`;}
    h+=`</div>`;
  }
  el.innerHTML=h;
  if(window.location.hash){const t=document.querySelector(window.location.hash);if(t)setTimeout(()=>t.scrollIntoView({behavior:'smooth'}),200);}
}

// ========== 球隊頁（含照片） ==========
function renderTeams(){
  const el=document.getElementById('teams-container');if(!el)return;
  let h=`<h2 class="section-title">🌍 全部 48 支參賽隊伍</h2>
<p class="section-subtitle">每隊以 <img src="https://flagcdn.com/24x18/mx.png" style="width:20px;height:14px;border-radius:2px;vertical-align:middle;"> 國旗標示 ｜ 球星照片 + 中英雙語</p>
<div class="teams-grid">`;
  for(const g of WC_DATA.groups){for(const tm of g.teams){
    const st=stars(tm.name);
    let sh='';
    for(const s of st){
      sh+=`<div class="star-row">${playerPhoto(s.nameEn)}<div>
<div class="n-zh">${s.name}</div><div class="n-en">${s.nameEn}</div>
<div class="meta"><span class="pos">${s.position}</span><span style="color:var(--text-muted);margin:0 3px;">｜</span><span>${s.club}</span>${s.note?`<span style="color:var(--text-muted);margin:0 3px;">｜</span><span style="color:var(--gold-light);font-weight:600;">★ ${s.note}</span>`:''}</div>
</div></div>`;
    }
    h+=`<div class="team-card"><div class="team-card-top">${fimgXl(tm.name)}
<div class="tinfo"><div class="en">${tm.name}</div><div class="zh">${tm.nameZh}</div><span class="badge">${g.id}組</span></div>
<div class="fifa-badge">FIFA<span class="num">#${rnk(tm.name)}</span></div></div>
<div class="team-card-stars"><div class="slabel">⭐ 主力球星</div>${sh||'<div style="color:var(--text-muted);font-size:0.78rem;">資料整理中</div>'}</div></div>`;
  }}h+=`</div>`;el.innerHTML=h;
}

// ========== 賽程頁 ==========
function renderMatches(){
  const el=document.getElementById('matches-container');if(!el)return;
  const dates=[...new Set(WC_DATA.matches.map(m=>m.date))].sort();
  let nav='<div class="date-nav">';
  for(const d of dates)nav+=`<button class="date-btn ${d===td()?'active':''}" onclick="showMD('${d}')">${fdFull(d)}</button>`;
  nav+='</div><div id="md-list"></div>';el.innerHTML=nav;
  showMD(dates.includes(td())?td():dates[0]);
}
function showMD(d){
  const el=document.getElementById('md-list');if(!el)return;
  const ms=WC_DATA.matches.filter(m=>m.date===d);
  document.querySelectorAll('.date-btn').forEach(b=>b.classList.toggle('active',b.textContent.includes(d.slice(-5))));
  if(!ms.length){el.innerHTML=`<p style="color:var(--text-muted);padding:16px;">${fdFull(d)} 無賽事</p>`;return;}
  let h=`<h2 class="section-title" style="margin-bottom:14px;">📅 ${fdFull(d)}</h2><div class="matches-grid two-cols">`;
  for(const m of ms)h+=mCard(m);h+=`</div>`;el.innerHTML=h;
}

// ========== 淘汰賽頁 ==========
function renderKnockout(){
  const el=document.getElementById('knockout-container');if(!el)return;
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
