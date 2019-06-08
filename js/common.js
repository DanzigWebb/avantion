let animTitle = document.querySelector('#anim-title');
let worldArr = animTitle.innerHTML.split('');
let newTitle = document.createElement('div');
let animTime = 0;
worldArr.forEach(world => {
  let titleWorld = document.createElement('span');
  
  titleWorld.style.animationDelay = `${(animTime +=100) + 200}ms`;
  titleWorld.innerHTML = `${world}`;
  newTitle.appendChild(titleWorld);
  animTime+=100
});


animTitle.innerHTML = newTitle.innerHTML
// console.log(newTitle)
