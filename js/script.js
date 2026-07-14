// Main login page interactivity and particles
document.addEventListener('DOMContentLoaded',()=>{
  // hide loader
  const loader=document.getElementById('loader');setTimeout(()=>loader.style.display='none',600);

  // Toggle password
  const pass=document.getElementById('password');
  const toggle=document.getElementById('togglePass');
  toggle.addEventListener('click',()=>{
    if(pass.type==='password'){pass.type='text';toggle.textContent='Hide'}else{pass.type='password';toggle.textContent='Show'}
  });

  // Simulated login
  const form=document.getElementById('login-form');
  form.addEventListener('submit',e=>{
    e.preventDefault();
    // brief animation then redirect
    document.querySelector('.login-card').style.transform='scale(.98)';
    setTimeout(()=>{window.location.href='landing.html'},550);
  });

  document.getElementById('guestBtn').addEventListener('click',()=>{window.location.href='landing.html'});

  // Particles canvas (subtle)
  const canvas=document.getElementById('particles');
  const ctx=canvas.getContext('2d');
  let w,h,particles=[];
  function resize(){w=canvas.width=innerWidth;h=canvas.height=innerHeight}
  window.addEventListener('resize',resize);resize();
  function rand(min,max){return Math.random()*(max-min)+min}
  for(let i=0;i<90;i++){particles.push({x:rand(0,w),y:rand(0,h),r:rand(0.4,2.4),vx:rand(-0.2,0.6),vy:rand(-0.1,0.2)})}
  function draw(){ctx.clearRect(0,0,w,h);particles.forEach(p=>{p.x+=p.vx;p.y+=p.vy; if(p.x> w) p.x=0; if(p.y>h) p.y=0; ctx.beginPath(); ctx.arc(p.x,p.y,p.r,0,Math.PI*2); ctx.fillStyle='rgba(154,120,255,0.06)'; ctx.fill();}); requestAnimationFrame(draw)}
  draw();
});
