let animTitle = document.querySelector('#anim-title');
let worldArr = animTitle.innerHTML.split('');
let newTitle = document.createElement('div');
let animTime = 0;

worldArr.forEach(world => {
  let titleWorld = document.createElement('span');

  titleWorld.style.animationDelay = `${Math.ceil(Math.random() * 1200) + 50}ms`;
  titleWorld.innerHTML = `${world}`;
  newTitle.appendChild(titleWorld);
});
animTitle.innerHTML = newTitle.innerHTML

// let humburger = document.getElementById('hamburger');
// humburger.addEventListener('click', () => {
//   humburger.classList.toggle('is-active')
// })
sidebar.init()