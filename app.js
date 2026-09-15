(()=>{
  const addStyles=()=>{
    if(document.querySelector('link[href="enhancements.css"]')) return;
    const l=document.createElement('link'); l.rel='stylesheet'; l.href='enhancements.css'; document.head.appendChild(l);
  };
  addStyles();

  const favicon=document.querySelector('link[rel="icon"]');
  if(favicon){ favicon.href='assets/rs-icon.webp'; favicon.type='image/webp'; }

  document.querySelectorAll('.brand').forEach(brand=>{
    const first=brand.firstElementChild;
    if(first && first.tagName==='SPAN' && first.textContent.trim()==='RS'){
      const img=document.createElement('img'); img.src='assets/rs-icon.webp'; img.alt=''; img.setAttribute('aria-hidden','true'); img.className='brand-logo'; first.replaceWith(img);
    }
  });

  const nav=document.querySelector('.header nav');
  if(nav && !nav.querySelector('a[href*="about"]')){
    const support=[...nav.querySelectorAll('a')].find(a=>a.getAttribute('href')==='support.html');
    const a=document.createElement('a'); a.href=location.pathname.endsWith('index.html')||location.pathname==='/'?'#about':'about.html'; a.textContent='About us';
    nav.insertBefore(a,support||nav.querySelector('.navcta'));
  }

  const phone=document.querySelector('.hero-art .phone');
  if(phone){
    phone.classList.add('real-phone');
    phone.innerHTML='<div class="phone-top"></div><div class="real-app-screen"><img src="assets/app-map-real.webp" alt="Actual Roadside Strange app map showing nearby strange-case markers, search radius controls and app navigation"></div>';
  }

  const origin=document.querySelector('.origin.shell');
  if(origin){
    const section=document.createElement('section');
    section.className='about shell'; section.id='about';
    section.innerHTML=`
      <div class="about-heading reveal">
        <p class="eyebrow">WHO'S BEHIND THIS THING?</p>
        <h2>Small team.<br><em>Big map. Very weird interests.</em></h2>
        <p>Roadside Strange is an independent project from <b>DivineApps</b>, a small husband-and-wife operation based in Arizona.</p>
      </div>
      <div class="about-origin reveal">
        <div><p class="eyebrow">LONG BEFORE THE APP</p><h3>The paranormal was already part of our lives.</h3><blockquote>“What’s haunted near me?”</blockquote></div>
        <div><p>We lead our own paranormal investigation team, have investigated allegedly haunted locations, researched local legends and unexplained cases, and produced our own paranormal podcast.</p><p>That background is a big part of why Roadside Strange exists. We already knew how scattered this information could be, and how much digging it sometimes took just to answer one simple question.</p><p>So the first idea was simple: <b>put the stories on a map.</b></p></div>
      </div>
      <div class="about-cards">
        <article class="reveal"><span>01 / HOW IT GREW</span><h3>One haunted map became something much bigger.</h3><p>Ghost stories led to cryptids. Cryptids led to UAP reports. Then came strange history, local legends, unexplained events and all the odd stories that never fit neatly into one category.</p><p>Saved cases, achievements, community features and road-trip tools followed because exploring strange stories should feel like exploring, not homework.</p></article>
        <article class="reveal" data-delay="70"><span>02 / DIVINEAPPS</span><h3>Built small. Built hands-on.</h3><p><b>Nathan Wood</b> is the named developer behind DivineApps and the developer account associated with Roadside Strange.</p><p>Behind the name is a very small family operation. The app, its features, case collection and moderation are managed directly by the people behind it rather than a large studio or automated content operation.</p></article>
      </div>
      <div class="about-facts">
        <article class="reveal"><b>Not an automated case feed</b><p>Cases are chosen, reviewed, located and written for Roadside Strange. Nothing is automatically scraped and published straight onto the map.</p></article>
        <article class="reveal" data-delay="50"><b>Sources matter</b><p>Research can include public records, historical and newspaper material, official and local-history sources, location-specific folklore and eyewitness reporting. Different kinds of evidence are treated as different kinds of evidence.</p></article>
        <article class="reveal" data-delay="100"><b>Folklore stays folklore</b><p>A legend can be worth preserving without pretending it carries the same evidence as documented history. Reports, lore and established facts are treated differently.</p></article>
        <article class="reveal" data-delay="150"><b>Public access comes first</b><p>The app is built to point people toward public places, roads, towns and reasonable reference points, not private-property trespassing. Community submissions are reviewed before they become public.</p></article>
      </div>
      <div class="about-more reveal"><p>That is the short version. The full story covers where the idea came from, how cases are researched, why Nathan's name appears in developer records, how submissions work and the principles behind the map.</p><a class="outline" href="about.html">Read the full story ↗</a></div>`;
    origin.replaceWith(section);
  }

  const exploreFooter=[...document.querySelectorAll('footer>div')].find(d=>d.querySelector(':scope>b')?.textContent.trim()==='EXPLORE');
  if(exploreFooter && !exploreFooter.querySelector('a[href*="about"]')){ const a=document.createElement('a'); a.href='about.html'; a.textContent='About us'; exploreFooter.appendChild(a); }

  const menu=document.querySelector('.menu');
  const liveNav=document.querySelector('.header nav');
  if(menu&&liveNav){menu.addEventListener('click',()=>{const open=liveNav.classList.toggle('open');menu.setAttribute('aria-expanded',String(open))});liveNav.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{liveNav.classList.remove('open');menu.setAttribute('aria-expanded','false')}))}
  const reduced=matchMedia('(prefers-reduced-motion: reduce)').matches;
  const els=document.querySelectorAll('.reveal');
  if(!reduced&&'IntersectionObserver'in window){const io=new IntersectionObserver(entries=>entries.forEach(e=>{if(!e.isIntersecting)return;setTimeout(()=>e.target.classList.add('visible'),Number(e.target.dataset.delay||0));io.unobserve(e.target)}),{threshold:.1,rootMargin:'0px 0px -25px'});els.forEach(el=>io.observe(el))}else els.forEach(el=>el.classList.add('visible'));
  const bar=document.querySelector('.progress i');if(bar){const update=()=>{const d=document.documentElement,max=d.scrollHeight-d.clientHeight;bar.style.width=(max?d.scrollTop/max*100:0)+'%'};update();addEventListener('scroll',update,{passive:true})}
  document.querySelectorAll('[data-year]').forEach(el=>el.textContent=new Date().getFullYear());
})();