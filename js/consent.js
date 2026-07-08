/* Cookie consent + Google Analytics (gated by consent). Shared across all pages. */
(function(){
  var GA='G-F3B3XEBRGL';
  function loadGA(){
    if(window.__ga)return;window.__ga=1;
    var s=document.createElement('script');s.async=1;s.src='https://www.googletagmanager.com/gtag/js?id='+GA;document.head.appendChild(s);
    window.dataLayer=window.dataLayer||[];function g(){dataLayer.push(arguments);}window.gtag=g;
    g('js',new Date());g('config',GA,{anonymize_ip:true});
    var ev=document.body&&document.body.getAttribute('data-ga-event');
    if(ev){var p={};var m=document.body.getAttribute('data-ga-method');if(m)p.method=m;g('event',ev,p);}
  }
  function ckSet(ok){
    try{localStorage.setItem('cookieConsent',ok?'accepted':'declined');}catch(e){}
    var b=document.getElementById('ckb');if(b)b.style.display='none';
    if(ok)loadGA();
  }
  function init(){
    var a=document.getElementById('ck-accept'),d=document.getElementById('ck-decline');
    if(a)a.addEventListener('click',function(){ckSet(true);});
    if(d)d.addEventListener('click',function(){ckSet(false);});
    var c;try{c=localStorage.getItem('cookieConsent');}catch(e){}
    if(c==='accepted'){loadGA();}
    else if(c!=='declined'){var b=document.getElementById('ckb');if(b)b.style.display='block';}
  }
  if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',init);else init();
})();
