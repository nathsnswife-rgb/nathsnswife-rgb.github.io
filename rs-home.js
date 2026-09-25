(() => {
  const img=document.getElementById('heroImage');
  const loader=document.getElementById('heroLoading');
  const files=Array.from({length:15},(_,i)=>'assets/hero-chunks/'+String(i).padStart(2,'0')+'.txt?v=20260925c');
  Promise.all(files.map(async url=>{
    const r=await fetch(url,{cache:'force-cache'});
    if(!r.ok) throw new Error(url+' '+r.status);
    return (await r.text()).trim();
  })).then(parts=>{
    img.onload=()=>{if(loader) loader.remove();};
    img.src='data:image/webp;base64,'+parts.join('');
  }).catch(err=>{
    console.error(err);
    if(loader) loader.textContent='ROADSIDE STRANGE';
  });
})();