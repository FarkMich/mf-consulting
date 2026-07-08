/* Homepage: countdown, use-case modal, newsletter -> Brevo (double opt-in). */
(function(){
  /* countdown */
  var target=new Date("2026-07-16T18:30:00+02:00").getTime();
  function pad(n){return String(n).padStart(2,'0');}
  function tick(){
    var t=target-Date.now();if(t<0)t=0;
    var d=document.getElementById('d'),h=document.getElementById('h'),m=document.getElementById('m'),s=document.getElementById('s');
    if(d)d.textContent=pad(Math.floor(t/86400000));
    if(h)h.textContent=pad(Math.floor(t/3600000)%24);
    if(m)m.textContent=pad(Math.floor(t/60000)%60);
    if(s)s.textContent=pad(Math.floor(t/1000)%60);
  }
  tick();setInterval(tick,1000);

  /* use-case detail modal */
  function openModal(el){
    document.getElementById('mTitle').textContent=el.getAttribute('data-title');
    document.getElementById('mDetail').textContent=el.getAttribute('data-detail');
    document.getElementById('detailModal').classList.add('open');
  }
  function closeModal(){var m=document.getElementById('detailModal');if(m)m.classList.remove('open');}

  /* newsletter -> Brevo (double opt-in cez automation) */
  function subSubmit(e){
    if(e&&e.preventDefault)e.preventDefault();
    var el=document.getElementById('subemail');
    var email=(el&&el.value||'').trim();
    if(!email)return false;
    var body='EMAIL='+encodeURIComponent(email)+'&email_address_check=&locale=sk';
    try{
      fetch('https://285540ba.sibforms.com/serve/MUIFAMJq5y6d0BTJduRuBuWU7fbAugcMqWBMFrMFdu9gYY0xYNfBrl_sQ8LyxsauInO7LdObRfIEnG53nsj47XANfgLZESDPBBEld2x-Ln68nt39g2noLTdTOHrYqtSsNUlHoQmYVLKs1ip3TN_lZby-rKWc3nZtROfKaDgDmieYL6JPRfYwNwGFPz4jCk6-eKHd1FIwLFH5kRRrsw==',{method:'POST',mode:'no-cors',headers:{'Content-Type':'application/x-www-form-urlencoded'},body:body});
    }catch(err){}
    var n=document.getElementById('subnote');
    if(n){n.textContent='Skoro hotovo - poslal som ti potvrdzovací e-mail. Klikni v ňom na tlačidlo a potvrď odber.';n.style.color='var(--violet)';}
    var f=document.getElementById('subform');if(f)f.reset();
    return false;
  }

  function wire(){
    var cards=document.querySelectorAll('.scard');
    for(var i=0;i<cards.length;i++){cards[i].addEventListener('click',function(){openModal(this);});}
    var modal=document.getElementById('detailModal');
    if(modal)modal.addEventListener('click',function(e){if(e.target===this)closeModal();});
    var x=document.getElementById('modalClose');
    if(x)x.addEventListener('click',closeModal);
    document.addEventListener('keydown',function(e){if(e.key==='Escape')closeModal();});
    var form=document.getElementById('subform');
    if(form)form.addEventListener('submit',subSubmit);
  }
  if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',wire);else wire();
})();
