/* Cookie consent + GA4 with Consent Mode v2. Shared across all pages.
   GA loads for everyone; analytics_storage is DENIED by default (cookieless
   pings / modeled data) and upgraded to GRANTED only after the user accepts. */
(function(){
  var GA='G-F3B3XEBRGL';
  window.dataLayer=window.dataLayer||[];
  function gtag(){dataLayer.push(arguments);}
  window.gtag=gtag;

  /* Consent Mode v2 defaults - denied until the user accepts.
     Ad signals stay denied (no ads); only analytics_storage is toggled. */
  gtag('consent','default',{
    ad_storage:'denied',
    ad_user_data:'denied',
    ad_personalization:'denied',
    analytics_storage:'denied',
    wait_for_update:500
  });

  /* Load gtag.js for all visitors (cookieless pings while denied). */
  var s=document.createElement('script');s.async=1;
  s.src='https://www.googletagmanager.com/gtag/js?id='+GA;
  document.head.appendChild(s);
  gtag('js',new Date());
  gtag('config',GA,{anonymize_ip:true});

  /* Page-level event via <body data-ga-event="..." data-ga-method="..."> */
  var ev=document.body&&document.body.getAttribute('data-ga-event');
  if(ev){var p={};var m=document.body.getAttribute('data-ga-method');if(m)p.method=m;gtag('event',ev,p);}

  function grant(){gtag('consent','update',{analytics_storage:'granted'});}

  function ckSet(ok){
    try{localStorage.setItem('cookieConsent',ok?'accepted':'declined');}catch(e){}
    var b=document.getElementById('ckb');if(b)b.style.display='none';
    if(ok)grant();
  }

  function init(){
    var a=document.getElementById('ck-accept'),d=document.getElementById('ck-decline');
    if(a)a.addEventListener('click',function(){ckSet(true);});
    if(d)d.addEventListener('click',function(){ckSet(false);});
    var c;try{c=localStorage.getItem('cookieConsent');}catch(e){}
    if(c==='accepted'){grant();}
    else if(c!=='declined'){var b=document.getElementById('ckb');if(b)b.style.display='block';}
  }
  if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',init);else init();
})();
