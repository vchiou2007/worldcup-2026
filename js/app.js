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
// plain=true → 無詳細數據（賽程頁用），false→含完整數據（首頁用）
function mCard(m, plain){
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
      critical:{dark:'#065f46',light:'#0d9488',cls:'stats-label-critical',star:'⭐ '},
      high:{dark:'#075985',light:'#0891b2',cls:'stats-label-high',star:''},
      normal:{dark:'#334155',light:'#64748b',cls:'stats-label-normal',star:''},
      low:{dark:'#64748b',light:'#94a3b8',cls:'stats-label-low',star:''}
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

      // 贏家：深色底色 + 白色粗體字 + 圓角標籤
      // 輸家：正常文字顏色
      const valStyle1=isTied?`color:#94a3b8;font-weight:500`:(t1Wins?`background:${h.dark};color:#fff;padding:2px 6px;border-radius:4px;font-weight:800`:`color:${h.light};font-weight:500`);
      const valStyle2=isTied?`color:#94a3b8;font-weight:500`:(t2Wins?`background:${h.dark};color:#fff;padding:2px 6px;border-radius:4px;font-weight:800`:`color:${h.light};font-weight:500`);
      // 條狀圖：贏家用深色實色，輸家用淺色實色
      const bar1=isTied?h.light:(t1Wins?h.dark:h.light);
      const bar2=isTied?h.light:(t2Wins?h.dark:h.light);

      statsHtml+=`<div class="stats-row">
        <span class="stats-val" style="${valStyle1}">${val1}</span>
        <div class="stats-bar-single"><div class="stats-bar-bg-single">
          <div class="stats-bar-t1" style="width:${pct1}%;background:${bar1}"></div>
          <div class="stats-bar-t2" style="width:${pct2}%;background:${bar2}"></div>
        </div></div>
        <span class="${h.cls}">${h.star}${s.label}</span>
        <div class="stats-bar-single"><div class="stats-bar-bg-single">
          <div class="stats-bar-t2" style="width:${pct2}%;background:${bar2}"></div>
          <div class="stats-bar-t1" style="width:${pct1}%;background:${bar1}"></div>
        </div></div>
        <span class="stats-val" style="${valStyle2}">${val2}</span>
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
    statsHtml=`<div class="match-stats-toggle open" onclick="this.classList.toggle('open');this.nextElementSibling.classList.toggle('open')">
      📊 詳細數據 <span class="arrow">▼</span>
    </div>
    <div class="match-stats-panel open">
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
  ${!plain && statsHtml}
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

// ========== 首頁淘汰賽摘要 ==========
function renderHomeKnockout(){
  const el = document.getElementById('knockout-summary');
  if(!el) return;
  const ko = WC_DATA.knockout;
  if(!ko) { el.style.display='none'; return; }
  
  const r32 = ko.rounds.R32;
  const r32matches = WC_DATA.matches.filter(m => m.group === 'R32' && m.status === 'completed');
  
  // 晉級/淘汰列表（一行一列）
  let advRows = '', eliRows = '';
  if(r32.advanced) for(const t of r32.advanced) advRows += `<div class="hs-team-row advanced">${fimgMd(t)} <span>${t}</span></div>`;
  if(r32.eliminated) for(const t of r32.eliminated) eliRows += `<div class="hs-team-row eliminated">${fimgMd(t)} <span>${t}</span></div>`;
  
  // 已完賽簡潔列表
  let matchSummary = '';
  for(const m of r32matches){
    const adv = getAdvanceInfo(m);
    const pk = getPK(m.team1, m.team2);
    const scoreStr = pk ? `${m.score1}-${m.score2}（PK ${pk.score}）` : `${m.score1}-${m.score2}`;
    matchSummary += `<div class="hs-match">
      <span class="hs-winner">${fimgSm(adv.winner)} ${adv.winner}</span>
      <span class="hs-score">${scoreStr}</span>
      <span class="hs-loser">${fimgSm(adv.loser)} ${adv.loser}</span>
    </div>`;
  }
  
  // 下一場關鍵對決
  let nextHtml = '';
  const r16 = ko.rounds.R16;
  if(r16.matchups && r16.matchups.length){
    nextHtml = `<div class="hs-next">
      <div class="hs-next-title">🔮 下一輪已知對決</div>`;
    for(const mu of r16.matchups){
      nextHtml += `<div class="hs-next-match">
        <span>${fimgMd(mu.team1)} ${mu.team1}</span>
        <span class="hs-vs">VS</span>
        <span>${fimgMd(mu.team2)} ${mu.team2}</span>
        <div class="hs-next-date">📅 ${fdFull(mu.date)}</div>
      </div>`;
    }
    nextHtml += `</div>`;
  }

  el.innerHTML = `<div class="home-knockout-card">
    <div class="home-knockout-header">
      <div class="home-knockout-title">🏆 淘汰賽即時動態</div>
      <a href="knockout.html" class="home-knockout-link">完整淘汰賽 →</a>
    </div>
    <p class="home-knockout-summary">${ko.summary}</p>
    <div class="home-knockout-progress">
      <div class="home-knockout-progress-label">${r32.name}：${r32.completedCount}/${r32.totalMatches} 場已賽</div>
      <div class="ko-progress-bar"><div class="ko-progress-fill" style="width:${r32.totalMatches > 0 ? (r32.completedCount / r32.totalMatches * 100) : 0}%"></div></div>
    </div>
    <div class="home-knockout-body">
      <div class="home-knockout-matches">
        <div class="hs-section-label">✅ 已完賽</div>
        ${matchSummary || '<div style="color:var(--text-muted);font-size:0.82rem;">尚無淘汰賽</div>'}
      </div>
      <div class="home-knockout-teams">
        <div class="hs-section-label">✅ 晉級</div>
        <div class="hs-team-rows">${advRows}</div>
        <div class="hs-section-label" style="margin-top:10px;">❌ 淘汰</div>
        <div class="hs-team-rows">${eliRows}</div>
      </div>
    </div>
    ${nextHtml}
  </div>`;
  el.style.display = '';
}

// ========== 🏆 淘汰賽經典樹狀圖 (Classic Bracket Tree) ==========
// 獨立頁面 bracket.html 專用渲染器
// 經典 7 欄布局：R16_L → QF_L → SF_L || Final || SF_R → QF_R → R16_R
function renderBracketTree(){
  const el = document.getElementById('bracket-tree');
  if(!el) return;
  const ko = WC_DATA.knockout;
  const r16m = ko.rounds.R16.matchups;
  const qfm = ko.rounds.QF.matchups;
  const sfm = ko.rounds.SF.matchups;
  const pen = ko.penalties || {};

  // 輔助：建構隊伍卡片 HTML
  function tm(t, score, isWinner, cls){
    const c = isWinner ? 'winner' : (cls||'loser');
    const s = (score!==undefined && score!==null) ? `<span class="b-score">${score}</span>` : `<span class="b-vs">VS</span>`;
    return `<div class="b-team ${c}">${fimgSm(t)} ${t}${s}</div>`;
  }
  function tbd(){ return `<div class="b-team tbd">🤷 待定</div>`; }
  function pkStr(t1,t2){
    const k=t1+'-vs-'+t2;
    return pen[k] ? `（PK ${pen[k].score}）` : '';
  }

  // 建立單一回合欄的隊伍卡
  // matches: 比賽陣列, multi: 是否要多層間距
  function buildCol(matches, half){
    let h = '';
    for(const m of matches){
      const done = m.status === 'completed';
      const t1 = m.team1, t2 = m.team2;
      if(t1 === 'TBD' || t2 === 'TBD'){
        h += `<div class="bracket-slot">${tbd()}${tbd()}</div>`;
      } else {
        const w = done ? m.winner : null;
        h += `<div class="bracket-slot">${tm(t1, m.score1, done && w === t1)}${tm(t2, m.score2, done && w===t2)}</div>`;
      }
    }
    return h;
  }

  // R16 左半：上半區 4 場 (indices 0,1 — QF0) + (indices 4,5 — QF1)
  // R16 右半：下半區 4 場 (indices 2,3 — QF2) + (indices 6,7 — QF3)
  const r16L = [r16m[0], r16m[1], r16m[4], r16m[5]];
  const r16R = [r16m[2], r16m[3], r16m[6], r16m[7]];
  const qfL = [qfm[0], qfm[1]];
  const qfR = [qfm[2], qfm[3]];
  const sfL = [sfm[0]];

  // ⚠️ 下半區 SF 要看 sfm[1] 是否存在
  // 因 WC_DATA.knockout.rounds.SF.matchups 只有 2 個 match 或 1 個
  const sfR_has2 = sfm.length > 1 && sfm[1];
  const sfR = sfR_has2 ? [sfm[1]] : [];

  // 決賽資訊
  const fin = ko.rounds.Final;
  const finVenue = fin.venue || '東盧瑟福';

  // 上半區 SF 對手 (SF finalists)
  const sf1t1 = sfL[0].team1;
  const sf1t2 = sfL[0].team2;
  const sf2t1 = sfR_has2 ? sfR[0].team1 : 'TBD';
  const sf2t2 = sfR_has2 ? sfR[0].team2 : 'TBD';

  const sf1done = sfL[0].status === 'completed';
  const sf1w = sf1done ? sfL[0].winner : null;
  const sf2done = sfR_has2 && sfR[0].status === 'completed';
  const sf2w = sf2done ? sfR[0].winner : null;

  const champion1 = sf1done ? sfL[0].winner : null;
  const champion2 = sfR_has2 && sf2done ? sfR[0].winner : null;
  const champion = (sf1done && sf2done) ? '🏆 冠軍尚未決定' :
    (sf1done ? sfL[0].winner : (sf2done ? sfR[0].winner : null));

  el.innerHTML = `
    <div class="bracket-tree">
      <!-- ===== 左半：16強 ===== -->
      <div class="bracket-col left-half">
        <div class="bracket-col-header">16 強賽</div>
        ${buildCol(r16L)}
      </div>
      <!-- ===== 左半：8強 ===== -->
      <div class="bracket-col left-half">
        <div class="bracket-col-header">8 強賽</div>
        ${buildCol(qfL)}
      </div>
      <!-- ===== 左半：準決賽 ===== -->
      <div class="bracket-col left-half">
        <div class="bracket-col-header">準決賽</div>
        <div class="bracket-slot quad">
          ${sf1t1 !== 'TBD' ? tm(sf1t1, sfL[0].score1, sf1done && sf1w === sf1t1) : tbd()}
          ${sf1t2 !== 'TBD' ? tm(sf1t2, sfL[0].score2, sf1done && sf1w === sf1t2) : tbd()}
        </div>
      </div>

      <!-- ===== 分隔線 ===== -->
      <div class="bracket-divider"></div>

      <!-- ===== 決賽 + 冠軍 ===== -->
      <div class="bracket-final-col">
        <div class="bracket-col-header">決賽</div>
        <div class="bracket-final-team ${sf1t1 !== 'TBD' && sf1w ? 'finalist' : 'tbd-finalist'}">
          ${sf1t1 !== 'TBD' && sf1w ? '🏆 ' + sf1w : '🤷 待定'}
        </div>
        <div class="bracket-vs-line">VS</div>
        <div class="bracket-final-team ${sf2t1 !== 'TBD' && sf2w ? 'finalist' : 'tbd-finalist'}">
          ${sf2t1 !== 'TBD' && sf2w ? '🏆 ' + sf2w : '🤷 待定'}
        </div>
        <div class="bracket-vs-line" style="margin-top:8px;">—</div>
        <div class="bracket-final-team champion">
          <span class="trophy-icon">🏆</span>
          ${champion || '冠軍尚未產生'}
          <div style="font-size:0.6rem;font-weight:400;margin-top:2px;opacity:0.7;">${finVenue}</div>
        </div>
      </div>

      <!-- ===== 分隔線 ===== -->
      <div class="bracket-divider"></div>

      <!-- ===== 右半：準決賽 ===== -->
      <div class="bracket-col right-half">
        <div class="bracket-col-header">準決賽</div>
        <div class="bracket-slot quad">
          ${sf2t1 !== 'TBD' ? tm(sf2t1, sfR_has2 ? sfR[0].score1 : null, sf2done && sf2w === sf2t1) : tbd()}
          ${sf2t2 !== 'TBD' ? tm(sf2t2, sfR_has2 ? sfR[0].score2 : null, sf2done && sf2w === sf2t2) : tbd()}
        </div>
      </div>
      <!-- ===== 右半：8強 ===== -->
      <div class="bracket-col right-half">
        <div class="bracket-col-header">8 強賽</div>
        ${buildCol(qfR)}
      </div>
      <!-- ===== 右半：16強 ===== -->
      <div class="bracket-col right-half">
        <div class="bracket-col-header">16 強賽</div>
        ${buildCol(r16R)}
      </div>
    </div>
  `;
}

// ========== 🏆 淘汰賽樹狀圖 (Bracket) — 首頁精簡版 ==========
function renderBracket(){
  const el = document.getElementById('bracket-section');
  if(!el) return;
  const ko = WC_DATA.knockout;
  const r16 = ko.rounds.R16;
  const qf = ko.rounds.QF;
  const sf = ko.rounds.SF;
  const fin = ko.rounds.Final;
  const pen = ko.penalties || {};

  // 輔助：取得 PK 比分字串
  function pkStr(t1, t2){
    const key = t1+'-vs-'+t2;
    const r = pen[key];
    return r ? `（PK ${r.score}）` : '';
  }
  // 輔助：渲染單一隊伍列
  function teamRow(t, score, isWinner, isTbd){
    if(isTbd) return `<div class="bracket-team tbd">🤷 待定</div>`;
    const fs = isWinner ? 'winner' : 'loser';
    const sc = score !== undefined && score !== null ? `<span class="b-score">${score}</span>` : `<span class="b-vs">VS</span>`;
    return `<div class="bracket-team ${fs}">${fimgSm(t)} ${t}${sc}</div>`;
  }

  // ---- R16 配對（按 QF 分組排列）----
  // QF1: France vs Morocco  ← R16(2)Paraguay/France, R16(1)Morocco/Canada
  // QF2: Spain vs Belgium    ← R16(5)Portugal/Spain, R16(6)USA/Belgium
  // QF3: Norway vs England   ← R16(3)Brazil/Norway, R16(4)Mexico/England
  // QF4: Argentina/Switzerland ← R16(7)Egypt/Argentina, R16(8)Switzerland/Colombia
  const r16m = r16.matchups;
  const r16Pairs = [
    [r16m[1], r16m[0]], // QF1 feed
    [r16m[4], r16m[5]], // QF2 feed
    [r16m[2], r16m[3]], // QF3 feed
    [r16m[6], r16m[7]], // QF4 feed
  ];

  // ---- QF matchups ----
  const qfm = qf.matchups;

  // ---- SF matchups ----
  const sfm = sf.matchups;

  // ---- 建構各欄 ----
  function r16Col(){
    let h = '';
    for(const pair of r16Pairs){
      for(const m of pair){
        const done = m.status === 'completed';
        const t1 = m.team1, t2 = m.team2;
        const w = done ? m.winner : null;
        h += teamRow(t1, m.score1, done && w === t1);
        h += teamRow(t2, m.score2, done && w === t2);
      }
      h += `<div class="bracket-spacer"></div>`;
    }
    return h;
  }

  function qfCol(){
    let h = '';
    for(const m of qfm){
      const done = m.status === 'completed';
      const t1 = m.team1, t2 = m.team2;
      const w = done ? m.winner : null;
      const pk = pkStr(t1, t2);
      h += teamRow(t1, m.score1, done && w === t1);
      h += teamRow(t2, m.score2, done && w === t2);
      h += `<div class="bracket-spacer" style="min-height:28px;"></div>`;
    }
    return h;
  }

  function sfCol(){
    let h = '';
    for(const m of sfm){
      const done = m.status === 'completed';
      const t1 = m.team1, t2 = m.team2;
      if(t1 === 'TBD'){
        h += `<div class="bracket-team tbd">🤷 待定</div>`;
        h += `<div class="bracket-team tbd">🤷 待定</div>`;
      } else {
        const w = done ? m.winner : null;
        h += teamRow(t1, m.score1, done && w === t1);
        h += teamRow(t2, m.score2, done && w === t2);
      }
      h += `<div class="bracket-spacer" style="min-height:76px;"></div>`;
    }
    return h;
  }

  function finalCol(){
    const hasFinal = fin.venue && fin.venue !== '';
    return `<div class="bracket-match">
      <div class="bracket-team bracket-final ${sfm[0].team1 === 'TBD' ? 'empty' : ''}">
        ${sfm[0].team1 !== 'TBD' ? '🏆 ' + sfm[0].team1 : '🏆 尚未產生'}
      </div>
      <div class="bracket-spacer" style="min-height:8px;"></div>
      <div class="bracket-team bracket-final ${sfm[1].team1 === 'TBD' ? 'empty' : ''}">
        ${sfm[1].team1 !== 'TBD' ? '🏆 ' + sfm[1].team1 : '🏆 尚未產生'}
      </div>
      <div class="bracket-spacer" style="min-height:8px;"></div>
      <div class="bracket-match" style="margin-top:12px;">
        <div class="bracket-team bracket-final" style="background:linear-gradient(135deg,#fbbf24,#f59e0b);">
          🏆 冠軍<br><span style="font-size:0.65rem;font-weight:400;">7/19 東盧瑟福</span>
        </div>
      </div>
    </div>`;
  }

  el.innerHTML = `<div class="bracket-container">
    <div class="bracket-title">🏆 淘汰賽樹狀圖</div>
    <div class="bracket-grid">
      <div class="bracket-col">
        <div class="bracket-col-header">16 強賽</div>
        ${r16Col()}
      </div>
      <div class="bracket-col">
        <div class="bracket-col-header">8 強賽</div>
        ${qfCol()}
      </div>
      <div class="bracket-col">
        <div class="bracket-col-header">準決賽</div>
        ${sfCol()}
      </div>
      <div class="bracket-col">
        <div class="bracket-col-header">決賽</div>
        ${finalCol()}
      </div>
    </div>
  </div>`;
}

// ========== 主頁 ==========
// 收集指定日期的淘汰賽比賽（從 bracket rounds）
function koMatchesForDate(dateStr){
  if(!WC_DATA.knockout) return [];
  const out=[];
  for(const key of Object.keys(WC_DATA.knockout.rounds)){
    const rd=WC_DATA.knockout.rounds[key];
    if(rd.matchups) for(const mu of rd.matchups){
      if(mu.date===dateStr) out.push(mu);
    }
  }
  return out;
}
// 淘汰賽比賽 → 簡化卡片 HTML（不依賴 goals/cards 等欄位）
function koCard(mu){
  const done=mu.status==='completed';
  const live=mu.status==='live';
  const sc=done?`${mu.score1||0}-${mu.score2||0}`:live?`${mu.score1||0}-${mu.score2||0}`:'VS';
  const scCls=done?'final':live?'live':'upcoming';
  const stLbl=done?'已完賽':live?'●LIVE':'未開賽';
  const t1Cls=done&&mu.winner===mu.team1?'ko-winner':'';
  const t2Cls=done&&mu.winner===mu.team2?'ko-winner':'';
  return `<div class="match-card">
    <div class="match-status"><span class="match-status-badge ${scCls}">${stLbl}</span><span class="match-stage-badge">🏆 ${mu.round||'淘汰賽'}</span></div>
    <div class="match-teams"><div class="match-team ${t1Cls}">${fimgMd(mu.team1)}<span>${mu.team1}</span></div><div class="match-score ${scCls}">${sc}</div><div class="match-team ${t2Cls}">${fimgMd(mu.team2)}<span>${mu.team2}</span></div></div>
    <div class="match-meta"><span>${mu.venue||''}</span><span>${mu.time||''}</span></div>
  </div>`;
}
function renderHome(){
  renderSlideshow();
  initLiveClock();
  const t=td();
  const el1=document.getElementById('today-matches');
  if(el1){
    let ms=WC_DATA.matches.filter(m=>m.date===t);
    const ko=koMatchesForDate(t);
    // 為淘汰賽比賽附加 round 資訊
    for(const mu of ko) mu.round=WC_DATA.knockout.rounds[Object.keys(WC_DATA.knockout.rounds).find(k=>WC_DATA.knockout.rounds[k].matchups&&WC_DATA.knockout.rounds[k].matchups.includes(mu))]?.name||'';
    let h=`<h2 class="section-title">📅 今日比賽 — ${fdFull(t)}</h2>`;
    if(!ms.length&&!ko.length)h+=`<p style="color:var(--text-muted);padding:12px;">今日無賽事</p>`;
    else{
      if(ms.length){h+=`<div class="matches-grid two-cols">`;for(const m of ms)h+=mCard(m);h+=`</div>`;}
      if(ko.length){h+=`<div class="matches-grid two-cols">`;for(const m of ko)h+=koCard(m);h+=`</div>`;}
    }
    el1.innerHTML=h;
  }
  const y=yd();
  const el2=document.getElementById('yesterday-matches');
  if(el2){
    let ms=WC_DATA.matches.filter(m=>m.date===y);
    const ko=koMatchesForDate(y);
    for(const mu of ko) mu.round=WC_DATA.knockout.rounds[Object.keys(WC_DATA.knockout.rounds).find(k=>WC_DATA.knockout.rounds[k].matchups&&WC_DATA.knockout.rounds[k].matchups.includes(mu))]?.name||'';
    if(!ms.length&&!ko.length)el2.style.display='none';
    else{
      let h=`<h2 class="section-title">📋 昨日賽果 — ${fdFull(y)}</h2>`;
      if(ms.length){h+=`<div class="matches-grid two-cols">`;for(const m of ms)h+=mCard(m);h+=`</div>`;}
      if(ko.length){h+=`<div class="matches-grid two-cols">`;for(const m of ko)h+=koCard(m);h+=`</div>`;}
      el2.innerHTML=h;
    }
  }
  const el3=document.getElementById('groups-mini');
  renderHomeKnockout();
  if(el3){
    let h=`<h2 class="section-title">🏆 分組積分一覽</h2><div class="gm-grid">`;
    for(const g of WC_DATA.groups){
      const st=stnd(g.id);
      h+=`<div class="gm-card"><a href="groups.html#group-${g.id}" style="text-decoration:none;color:inherit;"><div class="gm-title">${g.id}組 ${gf(g.id)}</div></a>`;
      for(let i=0;i<st.length;i++){const s=st[i];
        const isTop=i===0||i===1;
        const rankStyle=isTop?`font-weight:800;color:#0d9488;`:`font-weight:500;color:var(--text-muted);`;
        const nameStyle=isTop?`font-weight:700;font-size:0.88rem;`:`font-weight:500;font-size:0.85rem;`;
        const ptsStyle=isTop?`background:#0d9488;color:#fff;font-weight:800;padding:2px 8px;border-radius:6px;font-size:0.85rem;`:`font-weight:700;color:var(--text-muted);font-size:0.82rem;`;
        const rowBg=isTop?`background:rgba(13,148,136,0.06);border-radius:6px;margin:1px 0;`:'';
        h+=`<div class="gm-row" style="${rowBg}"><span class="gm-rank" style="${rankStyle}">${i+1}</span>${fimgSm(s.team)}<span style="flex:1;${nameStyle}">${s.team}</span><span style="${ptsStyle}">${s.pts}</span></div>`;}
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

// ========== 淘汰賽輔助函數 ==========

// 取得 PK 結果（如有）
function getPK(team1, team2){
  const k = WC_DATA.knockout;
  if(!k || !k.penalties) return null;
  const key1 = team1+'-vs-'+team2, key2 = team2+'-vs-'+team1;
  return k.penalties[key1] || k.penalties[key2] || null;
}

// 取得某場比賽的晉級 / 淘汰資訊
function getAdvanceInfo(m){
  if(m.status !== 'completed') return null;
  const ko = WC_DATA.knockout;
  if(!ko) return null;
  const pk = getPK(m.team1, m.team2);
  if(pk) return { winner: pk.winner, loser: pk.loser, pkScore: pk.score, isPK: true };
  // No PK — winner is the team with more goals
  const winner = m.score1 > m.score2 ? m.team1 : m.team2;
  const loser = m.score1 > m.score2 ? m.team2 : m.team1;
  return { winner, loser, isPK: false };
}

// 淘汰賽輪次狀態標籤
function koStatusBadge(status){
  const map = {
    completed: '<span class="ko-status-badge completed">✅ 已完賽</span>',
    in_progress: '<span class="ko-status-badge in-progress">🔴 進行中</span>',
    upcoming: '<span class="ko-status-badge upcoming">⏳ 即將到來</span>'
  };
  return map[status] || '';
}

// Render 單場淘汰賽卡片（比 mCard 簡潔，重點在晉級/淘汰資訊）
function koMatchCard(m){
  const done = m.status === 'completed';
  const live = m.status === 'live';
  const score = done ? `${m.score1}-${m.score2}` : (live ? `${m.score1||0}-${m.score2||0}` : 'VS');
  const pk = done ? getPK(m.team1, m.team2) : null;
  const adv = done ? getAdvanceInfo(m) : null;

  // 進球摘要（簡潔版）
  let goalsStr = '';
  if(m.goals && m.goals.length){
    const gs = m.goals.map(g => {
      const t = g.team === 1 ? m.team1 : m.team2;
      return `${g.min}' ${fimgSm(t)} ${g.scorer}`;
    }).join(' · ');
    goalsStr = `<div class="ko-goals">⚽ ${gs}</div>`;
  }

  // 晉級/淘汰 徽章
  let advHtml = '';
  if(adv){
    const pkLabel = pk ? `<span class="ko-pk-label">PK ${pk.score}</span>` : '';
    advHtml = `<div class="ko-adv-row">
      <div class="ko-advance">${fimgSm(adv.winner)} ${adv.winner} 晉級 ${pkLabel}</div>
      <div class="ko-eliminate">❌ ${adv.loser} 淘汰</div>
    </div>`;
  }

  return `<div class="ko-match-card">
    <div class="ko-match-main">
      <div class="ko-team ${adv && adv.winner === m.team1 ? 'ko-winner' : ''}">
        ${fimgMd(m.team1)}<div class="ko-tn">${zh(m.team1)}</div>
      </div>
      <div class="ko-score-col">
        <div class="ko-score ${done?'ko-done':live?'ko-live':'ko-upcoming'}">${score}</div>
        <div class="ko-time">${fdFull(m.date)} ${m.time}</div>
      </div>
      <div class="ko-team right ${adv && adv.winner === m.team2 ? 'ko-winner' : ''}">
        <div class="ko-tn">${zh(m.team2)}</div>${fimgMd(m.team2)}
      </div>
    </div>
    ${goalsStr}
    ${advHtml}
    <div class="ko-venue">📍 ${m.venue}</div>
    ${m.note ? `<div class="ko-note">⚡ ${m.note}</div>` : ''}
  </div>`;
}

// ========== 淘汰賽頁 ==========
function renderKnockout(){
  const el=document.getElementById('knockout-container');if(!el)return;
  const ko = WC_DATA.knockout;
  if(!ko) { el.innerHTML='<p style="padding:20px;color:var(--text-muted);">淘汰賽資料載入中...</p>'; return; }

  const rounds = ko.rounds;
  const r32matches = WC_DATA.matches.filter(m => m.group === 'R32');
  const completed = r32matches.filter(m => m.status === 'completed');
  const upcoming = r32matches.filter(m => m.status !== 'completed');

  // ===== 1. Phase navigation =====
  const roundKeys = ['R32','R16','QF','SF','Final'];
  let phaseNav = '<div class="ko-phase-nav">';
  for(const rk of roundKeys){
    const r = rounds[rk];
    const active = r.status === 'in_progress' ? ' active' : (r.status === 'completed' ? ' completed' : '');
    phaseNav += `<div class="ko-phase-step${active}">
      <div class="ko-phase-icon">${rk==='Final'?'🏆':rk}</div>
      <div class="ko-phase-name">${r.name}</div>
      <div class="ko-phase-status">${r.dateRange}</div>
    </div>`;
  }
  phaseNav += '</div>';

  // ===== 2. Current Phase Summary =====
  const r32 = rounds.R32;
  const progressPct = r32.totalMatches > 0 ? (r32.completedCount / r32.totalMatches * 100) : 0;
  let html = `
<h2 class="section-title">🏆 淘汰賽階段</h2>
<p class="section-subtitle">48強 → 32強（小組前2名+最佳8個第3名）→ 16強 → 8強 → 4強 → 🏆決賽</p>

<!-- 即時總結 — 國旗表示 -->
<div class="ko-summary-bar">
  <div class="ko-summary-section">
    <div class="ko-summary-label">🔴 ${r32.name}</div>
    <div class="ko-summary-progress">${r32.completedCount}/${r32.totalMatches} 場已賽</div>
  </div>
  <div class="ko-summary-divider"></div>
  <div class="ko-summary-section">
    <div class="ko-summary-label">✅ 已晉級</div>
    <div class="ko-summary-flags">${r32.advanced.map(t => fimgMd(t)).join('')}</div>
  </div>
  <div class="ko-summary-divider"></div>
  <div class="ko-summary-section">
    <div class="ko-summary-label">❌ 淘汰</div>
    <div class="ko-summary-flags">${r32.eliminated.map(t => fimgMd(t)).join('')}</div>
  </div>
</div>

${phaseNav}
<div class="ko-current-round">
  <div class="ko-round-header">
    <div class="ko-round-title">🔴 ${r32.name}（${r32.nameEn}）</div>
    <div class="ko-round-stats">${koStatusBadge(r32.status)} 已賽 ${r32.completedCount}/${r32.totalMatches} 場</div>
  </div>
  <div class="ko-progress-bar"><div class="ko-progress-fill" style="width:${progressPct}%"></div></div>`;

  // ===== 3. Completed matches =====
  if(completed.length){
    html += `<div class="ko-section-title">✅ 已完賽（${completed.length}場）</div>
    <div class="ko-matches-list">`;
    for(const m of completed) html += koMatchCard(m);
    html += `</div>`;
  }

  // ===== 4. Advanced / Eliminated Teams (一行一列) =====
  if(r32.advanced && r32.advanced.length){
    html += `<div class="ko-teams-row">
      <div class="ko-advanced-box">
        <div class="ko-box-title">✅ 已晉級 16 強</div>
        <div class="ko-team-list-rows">`;
    for(const t of r32.advanced){
      html += `<div class="ko-team-row advanced">${fimgMd(t)} <span class="ko-row-name">${t}</span></div>`;
    }
    html += `</div></div>
      <div class="ko-eliminated-box">
        <div class="ko-box-title">❌ 已淘汰</div>
        <div class="ko-team-list-rows">`;
    for(const t of r32.eliminated){
      html += `<div class="ko-team-row eliminated">${fimgMd(t)} <span class="ko-row-name">${t}</span></div>`;
    }
    html += `</div></div></div>`;
  }

  // ===== 5. Upcoming matches =====
  if(upcoming.length){
    html += `<div class="ko-section-title">📅 剩餘賽程（${upcoming.length}場）</div>
    <div class="ko-matches-list">`;
    for(const m of upcoming) html += koMatchCard(m);
    html += `</div>`;
  }

  // ===== 6. Next round preview =====
  const r16 = rounds.R16;
  if(r16.matchups && r16.matchups.length){
    html += `<div class="ko-section-title">🔮 下一輪：${r16.name}（${r16.dateRange}）</div>
    <div class="ko-next-round-grid">`;
    for(const mu of r16.matchups){
      html += `<div class="ko-next-match">
        <div class="ko-next-teams">
          <span>${fimgSm(mu.team1)} ${mu.team1}</span>
          <span class="ko-vs">VS</span>
          <span>${fimgSm(mu.team2)} ${mu.team2}</span>
        </div>
        <div class="ko-next-info">📅 ${fdFull(mu.date)} ${mu.time} ｜ 📍 ${mu.venue}</div>
      </div>`;
    }
    html += `</div>`;
  }

  html += `</div>`;

  // ===== 7. All rounds overview =====
  html += `<div class="ko-all-rounds">
    <div class="ko-section-title">📊 淘汰賽各輪次一覽</div>
    <div class="ko-rounds-grid">`;
  for(const rk of roundKeys){
    const r = rounds[rk];
    const dot = r.status === 'completed' ? '✅' : (r.status === 'in_progress' ? '🔴' : '⏳');
    html += `<div class="ko-round-card ${r.status}">
      <div class="ko-round-card-title">${dot} ${r.name}</div>
      <div class="ko-round-card-meta">${r.dateRange} ｜ ${r.completedCount}/${r.totalMatches} 場</div>
    </div>`;
  }
  html += `</div></div>`;

  // ===== 8. Host cities =====
  html += `<div class="ko-cities-section">
    <div class="ko-section-title">🏟️ 主辦城市 16 座</div>
    <div class="city-grid">
      <div>${fimgSm('USA')} 紐約/新澤西</div><div>${fimgSm('USA')} 洛杉磯</div><div>${fimgSm('USA')} 達拉斯</div><div>${fimgSm('USA')} 休斯頓</div>
      <div>${fimgSm('USA')} 亞特蘭大</div><div>${fimgSm('USA')} 西雅圖</div><div>${fimgSm('USA')} 舊金山</div><div>${fimgSm('USA')} 費城</div>
      <div>${fimgSm('USA')} 邁阿密</div><div>${fimgSm('USA')} 波士頓</div><div>${fimgSm('USA')} 堪薩斯城</div>
      <div>${fimgSm('Mexico')} 墨西哥城</div><div>${fimgSm('Mexico')} 瓜達拉哈拉</div><div>${fimgSm('Mexico')} 蒙特雷</div>
      <div>${fimgSm('Canada')} 多倫多</div><div>${fimgSm('Canada')} 溫哥華</div>
    </div>
  </div>`;

  el.innerHTML = html;
}
