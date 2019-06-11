let animTitle = function () {
  let animTitle = document.querySelector('#anim-title');
  let worldArr = animTitle.innerHTML.split('');
  let newTitle = document.createElement('div');

  worldArr.forEach(world => {
    let titleWorld = document.createElement('span');

    titleWorld.style.animationDelay = `${Math.ceil(Math.random() * 1200) + 50}ms`;
    titleWorld.innerHTML = `${world}`;
    newTitle.appendChild(titleWorld);
  });
  animTitle.innerHTML = newTitle.innerHTML
}
animTitle()


sidebar.init()

slider.init()
