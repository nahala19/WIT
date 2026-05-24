// Shared time-based greeting utility for student pages
(function(){
  function timeBasedGreeting(now){
    const h = now.getHours();
    if(h < 5) return 'Good night';
    if(h < 12) return 'Good morning';
    if(h < 17) return 'Good afternoon';
    if(h < 21) return 'Good evening';
    return 'Good night';
  }

  function getNameFromEl(el){
    if(!el) return 'Student';
    if(el.dataset.greetingName) return el.dataset.greetingName;
    const text = (el.textContent || '').trim();
    const parts = text.split(',');
    if(parts.length > 1){
      return parts.slice(1).join(',').trim();
    }
    // try to read from nearby avatar URL (ui-avatars)
    const header = el.closest('header');
    if(header){
      const img = header.querySelector('img');
      if(img && img.src){
        const m = img.src.match(/[?&]name=([^&]+)/);
        if(m && m[1]) return decodeURIComponent(m[1]).replace(/\+/g,' ');
      }
    }
    return 'Student';
  }

  function updateAllGreetings(){
    const els = Array.from(document.querySelectorAll('[data-greeting], #greeting'));
    els.forEach(el => {
      const name = getNameFromEl(el);
      const greet = timeBasedGreeting(new Date());
      el.textContent = `${greet}, ${name}`;
    });
  }

  if(typeof window !== 'undefined'){
    window.addEventListener('load', function(){
      updateAllGreetings();
      setInterval(updateAllGreetings, 60*1000);
    });
  }
})();
