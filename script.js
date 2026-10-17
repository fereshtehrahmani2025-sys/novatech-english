document.addEventListener('DOMContentLoaded',()=>{
 const b=document.querySelector('.menu'),n=document.querySelector('.links');
 b?.addEventListener('click',()=>{const open=n.classList.toggle('open');b.setAttribute('aria-expanded',String(open));});
 document.querySelectorAll('.links a').forEach(a=>a.addEventListener('click',()=>{n?.classList.remove('open');b?.setAttribute('aria-expanded','false')}));

});

// Portfolio category filters, keyboard-accessible native buttons
document.querySelectorAll('[data-filter]').forEach(button=>{button.addEventListener('click',()=>{const selected=button.dataset.filter;document.querySelectorAll('[data-filter]').forEach(b=>b.setAttribute('aria-pressed',String(b===button)));document.querySelectorAll('[data-category]').forEach(card=>{card.hidden=selected!=='all'&&card.dataset.category!==selected;});});});

// Close the mobile menu with Escape or a click outside the navigation.
document.addEventListener('keydown', e => {
 if(e.key !== 'Escape') return;
 const nav=document.querySelector('.links'), toggle=document.querySelector('.menu');
 if(nav?.classList.contains('open')) { nav.classList.remove('open');toggle?.setAttribute('aria-expanded','false');toggle?.focus(); }
});
document.addEventListener('click',e=>{
 const nav=document.querySelector('.links'),toggle=document.querySelector('.menu');
 if(nav?.classList.contains('open')&&!nav.contains(e.target)&&!toggle?.contains(e.target)){nav.classList.remove('open');toggle?.setAttribute('aria-expanded','false');}
});
