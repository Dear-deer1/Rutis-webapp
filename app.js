const TASKS=[
  {day:0,id:'t0',title:'Подготовь набор',pts:10,badge:0,
   desc:'Достань из коробки: лоток, агровату, семена и распылитель.',
   detail:'Положи агровату в лоток — она должна лежать ровно и плотно. Налей воду в распылитель (~150 мл). Убедись, что всё на месте прежде чем сеять.'},
  {day:0,id:'t1',title:'Намочи агровату',pts:15,badge:1,
   desc:'Равномерно смочи агровату из распылителя. Влажная — но без лужи.',
   detail:'Распыляй сверху равномерными движениями, пока агровата не потемнеет от влаги. Если перестаралась — наклони лоток, лишняя вода стечёт.',
   img:'img/День 1, задача 2 — Намочи агровату.png'},
  {day:0,id:'t1b',title:'Обработай раствором перекиси',pts:10,badge:1,optional:true,
   desc:'Разведи 6 мл перекиси 3% в 1 л воды и равномерно смочи семена и агровату.',
   detail:'Раствор перекиси защищает от плесени и ускоряет прорастание. Просто разведи в воде и используй вместо обычного полива при первом смачивании. В таком разведении полностью безопасно для растений.',
   img:'img/День 1, задача 3 (опциональная) — Перекись водорода.png'},
  {day:0,id:'t2',title:'Посей семена',pts:20,badge:0,
   desc:'Равномерно рассыпь семена по поверхности агроваты. Не засыпай сверху.',
   detail:'Высыпай тонким слоем, как сахар на блин. Важно: один слой. Слишком густо → плохая вентиляция → плесень. Не вдавливай и не засыпай.',
   img:'img/День 1, задача 4 — Посей семена.png'},
  {day:0,id:'t3',title:'Накрой и в темноту',pts:10,badge:0,
   desc:'Накрой лоток и поставь в тёмное тёплое место на 2–3 дня.',
   detail:'В темноте семена прорастают быстрее. Подойдёт шкаф или полка. Главное — не холодно и без прямого солнца.',
   img:'img/День 1, задача 5 — Накрой и в темноту.png'},
  {day:3,id:'t4',title:'Проверь первые ростки',pts:15,badge:2,
   desc:'Открой лоток — должны появиться ростки 1–2 см. Как они?',
   detail:'Нормально если ростки слегка желтоватые — позеленеют на свету. Нет ростков совсем — проверь влажность агроваты. Видишь плесень — напиши нам на help@rutis.ru.',
   img:'img/День 4, задача 1 — Проверь первые ростки.png'},
  {day:3,id:'t5',title:'Перенеси на свет',pts:15,badge:3,
   desc:'Открой крышку и поставь лоток на подоконник или под лампу.',
   detail:'Яркий рассеянный свет — идеал. Прямое летнее солнце может обжечь ростки. Поворачивай лоток раз в день — зелень вырастет ровной.',
   img:'img/День 4, задача 2 — Перенеси на свет.png'},
  {day:4,id:'t6',title:'Полей сегодня',pts:10,badge:1,
   desc:'Побрызгай из распылителя. Агровата должна быть чуть влажной.',
   detail:'Проверяй пальцем: слегка влажная — достаточно. Совсем сухая — поливай. Стоит вода — пропусти сегодня.',
   img:'img/Дни 5–8 — Полей/покрути лоток.png'},
  {day:5,id:'t7',title:'Полей и покрути лоток',pts:10,badge:1,
   desc:'Полей и поверни лоток на 180° — зелень вырастет ровной.',
   detail:'Ростки тянутся к источнику света. Один поворот в день создаёт равномерный красивый ковёр.',
   img:'img/Дни 5–8 — Полей/покрути лоток.png'},
  {day:6,id:'t8',title:'Замерь высоту ростков',pts:15,badge:4,
   desc:'Ростки должны быть 3–5 см с первыми листочками. Видишь?',
   detail:'Маленькие округлые листики на верхушках — отлично! Именно в них сейчас максимум витаминов.',
   img:'img/День 7 — Замерь высоту ростков.png'},
  {day:7,id:'t9',title:'Последний полив',pts:10,badge:1,
   desc:'Последний активный полив. Завтра можно не поливать — скоро срезка.',
   detail:'После этого полива агровата будет достаточно влажной до момента сбора. Лишний полив перед срезкой разводняет вкус.',
   img:'img/Дни 5–8 — Полей/покрути лоток.png'},
  {day:8,id:'t10',title:'Изучи рецепты 🍽️',pts:5,badge:4,
   desc:'Пока ждём — загляни, с чем можно есть кресс. Уже предвкушаем!',
   detail:'Кресс-салат — универсальная микрозелень. Острый бодрящий вкус делает его идеальным топпингом для тостов, яиц, супов. Нажми на карточку рецептов!',
   img:'img/День 9 — Рецепты.png'},
  {day:9,id:'t11',title:'🎉 Собери урожай!',pts:30,badge:5,
   desc:'Высота 5–8 см, листья раскрылись — срезай! Ножницами, чуть выше агроваты.',
   detail:'Срезай утром — в это время максимум питательных веществ. Промой холодной водой, обсуши и сразу используй. Хранить 2–3 дня в холодильнике. Поздравляем! 🌱',
   img:'img/День 10 — Собери урожай.png'}
];

const BADGE_DEFS=[
  {icon:'🌰',name:'Первый шаг'},{icon:'💧',name:'Полив'},
  {icon:'🌱',name:'Первый росток'},{icon:'☀️',name:'К свету'},
  {icon:'🌿',name:'Листочки'},{icon:'✂️',name:'Урожай!'}
];

let S={currentScreen:'ob1',startDate:null,completed:[],points:0,badges:[],history:[]};

function load(){try{const s=localStorage.getItem('rutis3');if(s)S=Object.assign(S,JSON.parse(s));}catch(e){}}
function save(){try{localStorage.setItem('rutis3',JSON.stringify(S));}catch(e){}}
function daysSince(){if(!S.startDate)return 0;return Math.floor((Date.now()-new Date(S.startDate))/86400000);}

function showScreen(id){
  document.querySelectorAll('.screen').forEach(s=>s.classList.remove('active'));
  document.getElementById(id).classList.add('active');
  S.currentScreen=id;save();
}

function switchInstall(t){
  document.getElementById('steps-ios').style.display=t==='ios'?'flex':'none';
  document.getElementById('steps-android').style.display=t==='android'?'flex':'none';
  document.getElementById('btn-ios').classList.toggle('active',t==='ios');
  document.getElementById('btn-android').classList.toggle('active',t==='android');
}

function startApp(){
  if(!S.startDate)S.startDate=new Date().toISOString();
  showScreen('main-screen');
  renderAll();save();
}

function switchTab(tab){
  const map={main:'main-screen',points:'points-screen',community:'community-screen'};
  showScreen(map[tab]);
  ['main','points','community'].forEach(t=>{
    ['nav','nav2','nav3'].forEach(p=>{
      const id=p+'-'+(t==='community'?'comm':t);
      const el=document.getElementById(id);
      if(el)el.classList.toggle('active',t===tab);
    });
  });
  if(tab==='main')renderAll();
  if(tab==='points')renderPoints();
}

function renderAll(){renderTasks();updateProgress();}

function renderTasks(){
  const c=document.getElementById('tasks-container');
  if(!c)return;
  const today=daysSince();
  let html='',lastDay=-1;
  const dayLabels={0:'Посев',3:'Первые ростки',4:'',5:'На свет!',6:'',7:'',8:'',9:'Урожай!'};
  TASKS.forEach(task=>{
    if(task.day!==lastDay){
      lastDay=task.day;
      html+=`<div class="day-header"><div class="day-badge">День ${task.day+1}</div><span class="day-lbl">${dayLabels[task.day]||''}</span></div>`;
      if(task.day>=3&&today<task.day){
        const daysLeft=task.day-today;
        const when=daysLeft===1?'завтра':'через '+daysLeft+' дн.';
        html+=`<div class="day-locked-hint"><span class="day-locked-icon">⏱</span><span>Откроется ${when} — задания идут по порядку</span></div>`;
      }
    }
    const done=S.completed.includes(task.id);
    const avail=today>=task.day;
    html+=`<div class="section" style="margin-bottom:4px;">
      <div class="task-card${done?' completed':''}${!avail?' future-task':''}${task.optional?' task-optional':''}">
        <div class="task-inner">
          <div class="task-check${done?' done':''}" onclick="toggleComplete('${task.id}')"></div>
          <div class="task-body" onclick="toggleExpand('${task.id}')">
            <div class="task-title">
              <span style="flex:1;">${task.title}</span>
              <span class="task-detail-arrow" id="arr-${task.id}">▾</span>
              ${task.optional?`<button class="help-btn" onclick="event.stopPropagation();document.getElementById('h2o2-popup').classList.add('open')">?</button>`:''}
            </div>
            <div class="task-desc">${task.desc}</div>
            ${task.optional?`<div class="optional-badge">необязательно</div>`:''}
          </div>
        </div>
        <div id="exp-${task.id}" class="task-expand" style="display:none;">
          ${task.img?`<img class="task-img" src="${task.img}" alt="">`:''}
          <p>${task.detail}</p>
        </div>
      </div>
    </div>`;
  });
  c.innerHTML=html;
  const t=document.getElementById('recipe-teaser');
  if(t)t.style.display=today>=8?'block':'none';
}

function toggleExpand(id){
  const el=document.getElementById('exp-'+id);
  const arr=document.getElementById('arr-'+id);
  if(!el)return;
  const open=el.style.display!=='none';
  el.style.display=open?'none':'block';
  if(arr)arr.classList.toggle('open',!open);
}

function toggleComplete(id){
  const task=TASKS.find(t=>t.id===id);
  if(!task||daysSince()<task.day)return;
  if(S.completed.includes(id)){
    S.completed=S.completed.filter(x=>x!==id);
    S.points=Math.max(0,S.points-task.pts);
    S.history=S.history.filter(h=>h.id!==id);
    save();renderAll();renderPoints();showToast('Отменено');
  } else {
    S.completed.push(id);
    S.points+=task.pts;
    if(typeof task.badge!=='undefined'&&!S.badges.includes(task.badge))S.badges.push(task.badge);
    S.history.unshift({id,title:task.title,pts:task.pts,date:new Date().toLocaleDateString('ru-RU',{day:'numeric',month:'long'})});
    save();renderAll();renderPoints();
    showToast('+'+task.pts+' очков! 🌱');
    if(id==='t11')setTimeout(()=>document.getElementById('feedback-modal').classList.add('open'),900);
  }
}

function updateProgress(){
  const total=TASKS.length,done=S.completed.length,pct=Math.round(done/total*100),today=daysSince();
  const pb=document.getElementById('pb-fill');if(pb)pb.style.width=pct+'%';
  const pd=document.getElementById('prog-day');if(pd)pd.textContent='День '+Math.min(today+1,10)+' из 10';
  const cap=document.getElementById('pb-caption');
  if(cap)cap.textContent=done===0?'Выполни первое задание!':done===total?'Урожай собран! 🎉':done+' из '+total+' выполнено';
  const hp=document.getElementById('header-pts');if(hp)hp.textContent=S.points+' очков';
  ['m1','m2','m3','m4'].forEach((mid,i)=>{
    const el=document.getElementById(mid);if(el)el.classList.toggle('done',done>=[1,4,8,12][i]);
  });
}

function renderPoints(){
  const pb=document.getElementById('pts-big');if(pb)pb.textContent=S.points;
  const lv=document.getElementById('pts-level');
  if(lv){const lvls=[[0,'🌰 Начинающий садовод'],[50,'🌱 Юный огородник'],[100,'🌿 Опытный садовод'],[150,'🏡 Мастер балконного огорода']];let l=lvls[0][1];for(const[t,n]of lvls)if(S.points>=t)l=n;lv.textContent=l;}
  const bg=document.getElementById('badges-grid');
  if(bg)bg.innerHTML=BADGE_DEFS.map((b,i)=>{const e=S.badges.includes(i);return`<div class="badge-item${e?' earned':''}"><span class="badge-icon${e?'':' locked'}">${b.icon}</span><span class="badge-name">${b.name}</span></div>`;}).join('');
  const hl=document.getElementById('history-list');
  if(hl&&S.history.length>0)hl.innerHTML=S.history.map(h=>`<div class="history-item"><div><div class="hi-title">${h.title}</div><div class="hi-date">${h.date}</div></div><div class="hi-pts">+${h.pts}</div></div>`).join('');
}

function openModal(id){document.getElementById(id).classList.add('open');}
function closeModal(id){document.getElementById(id).classList.remove('open');}


function showToast(msg){
  const t=document.getElementById('toast');t.textContent=msg;t.classList.add('show');
  setTimeout(()=>t.classList.remove('show'),2500);
}

// init
load();
if(/android/i.test(navigator.userAgent))switchInstall('android');
if(S.startDate&&S.currentScreen==='main-screen'){startApp();}
else if(S.currentScreen&&S.currentScreen!=='ob1'){
  showScreen(S.currentScreen);
  if(S.currentScreen==='main-screen')renderAll();
  if(S.currentScreen==='points-screen')renderPoints();
}

// modal close on backdrop click
document.querySelectorAll('.modal-overlay').forEach(m=>{m.addEventListener('click',function(e){if(e.target===this)this.classList.remove('open');});});
document.getElementById('h2o2-popup').addEventListener('click',function(e){if(e.target===this)this.classList.remove('open');});

// свайп на онбординге
(function(){
  const screens=['ob1','ob2','ob3'];
  const actions=[
    ()=>showScreen('ob2'),
    ()=>showScreen('ob3'),
    ()=>startApp()
  ];
  let startX=0,startY=0;
  document.getElementById('app').addEventListener('touchstart',function(e){
    startX=e.touches[0].clientX;
    startY=e.touches[0].clientY;
  },{passive:true});
  document.getElementById('app').addEventListener('touchend',function(e){
    const cur=S.currentScreen;
    if(!screens.includes(cur))return;
    const dx=e.changedTouches[0].clientX-startX;
    const dy=Math.abs(e.changedTouches[0].clientY-startY);
    if(Math.abs(dx)>50&&dy<60){
      const idx=screens.indexOf(cur);
      if(dx<0&&idx<screens.length-1)actions[idx]();
      if(dx>0&&idx>0)showScreen(screens[idx-1]);
    }
  },{passive:true});
})();
