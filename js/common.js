let animTitle = document.querySelector('#anim-title');
let worldArr = animTitle.innerHTML.split('');
let newTitle = document.createElement('div');

worldArr.forEach(world => {
  let titleWorld = document.createElement('span');
  titleWorld.style.animationDelay = `${Math.ceil(Math.random() * 1000) + 400}ms`;
  // titleWorld.style.opacity = `1`;
  titleWorld.innerHTML = `${world}`;
  newTitle.appendChild(titleWorld);
});


animTitle.innerHTML = newTitle.innerHTML
// console.log(newTitle)
