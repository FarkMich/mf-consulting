/* Workshop: consent checkbox gates the Stripe buy button. */
(function(){
  function init(){
    var c=document.getElementById('agree'),b=document.getElementById('buyBtn');
    if(c&&b){
      c.addEventListener('change',function(){
        var on=c.checked;
        b.style.opacity=on?'1':'.45';
        b.style.pointerEvents=on?'auto':'none';
        b.setAttribute('aria-disabled',on?'false':'true');
      });
    }
    if(b){
      b.addEventListener('click',function(){
        if(window.gtag){
          gtag('event','purchase_initiated',{
            currency:'EUR',
            value:29,
            item_name:'Workshop: Optimalizuj e-shop a marketing pomocou AI'
          });
        }
      });
    }
  }
  if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',init);else init();
})();
