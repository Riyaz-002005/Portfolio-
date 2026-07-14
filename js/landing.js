// Landing page interactions: counters, observers, back-to-top, simple carousel
document.addEventListener('DOMContentLoaded',()=>{
  // Intersection observer for reveal
  const io=new IntersectionObserver((entries)=>{entries.forEach(e=>{if(e.isIntersecting){e.target.classList.add('inview');io.unobserve(e.target)}}),{threshold:0.12});
  document.querySelectorAll('.game-card,.service,.counter').forEach(el=>io.observe(el));

  // Counters
  document.querySelectorAll('.counter span').forEach(span=>{
    const target=parseInt(span.dataset.target,10)||0;let cur=0;const step=Math.max(1,Math.floor(target/120));
    const upd=()=>{cur+=step; if(cur>target) cur=target; span.textContent=cur.toLocaleString(); if(cur<target) requestAnimationFrame(upd)}; upd();
  });

  // Back to top
  const back=document.getElementById('backTop');window.addEventListener('scroll',()=>{if(window.scrollY>600) back.style.display='block'; else back.style.display='none'});
  back.addEventListener('click',()=>window.scrollTo({top:0,behavior:'smooth'}));

  // Simple testimonials carousel (if present)
  // Play trailer button (placeholder)
  const trailer=document.getElementById('playTrailer'); if(trailer) trailer.addEventListener('click',()=>alert('Trailer would play (placeholder)'));

  // contact form stub
  const contact=document.getElementById('contactForm'); if(contact) contact.addEventListener('submit',e=>{e.preventDefault();alert('Message sent — thank you!')});
});
