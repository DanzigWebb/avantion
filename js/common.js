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

sidebar.init()


let slider = {
  sliderArea: document.querySelector('#my-slider'),
  sliderWrap: document.querySelector('.slider-wrap'),
  leftBtn: document.querySelector('#left'),
  rightBtn: document.querySelector('#right'),
  index: 0,
  init: function () {
    let thisHelper = this;
    for (let i = 0; i < this.sliderArea.children.length; i++) {
      this.sliderArea.children[i].classList.add('slider-item');
      this.sliderArea.children[0].classList.add('active');
    };
    let sliderItems = document.querySelectorAll('.slider-item');

    sliderItems.forEach(function (item, i, arr) {
      thisHelper.sliderArea.style.width = thisHelper.sliderWrap.offsetWidth * arr.length + 'px';
      item.style.width = thisHelper.sliderWrap.offsetWidth + 'px';
      step = item.style.width;
    });
    // события
    this.rightBtn.addEventListener('click', () => {
      this.right(this.index, sliderItems);
      console.log(this.index)
    })
    this.leftBtn.addEventListener('click', () => {
      this.left(this.index, sliderItems);
      console.log(this.index)
    })
  },



  // методы
  right: function (index, arr) {
    index++;
    this.sliderArea.style.transform = `translateX(-${index * arr[index].offsetWidth}px)`;
    this.index = index;
    // this.sliderArea[this.index].classList.add('active')
  },
  left: function (index, arr) {
    index--;
    this.sliderArea.style.transform = `translateX(-${index * arr[index].offsetWidth}px)`;
    this.index = index;
    // this.sliderArea[this.index].classList.add('active')
  }
}

slider.init()

let slslsl = function () {
  let slider = document.querySelector('#my-slider');
  let sliderWrap = document.querySelector('.slider-wrap')
  let left = document.querySelector('#left');
  let right = document.querySelector('#right');

  let index = 0;
  let step = 0;

  // разметка
  for (let i = 0; i < slider.children.length; i++) {
    slider.children[i].classList.add('slider-item');
    slider.children[index].classList.add('active');
  };
  let sliderItems = document.querySelectorAll('.slider-item');

  sliderItems.forEach(function (item, i, arr) {
    slider.style.width = sliderWrap.offsetWidth * arr.length + 'px';
    item.style.width = sliderWrap.offsetWidth + 'px';
    step = item.style.width;
  });



  // события
  left.addEventListener('click', () => {
    sliderLeft();
  })

  right.addEventListener('click', () => {
    sliderRight();
  })

  // методы
  let sliderLeft = function () {
    slider.style.transform = `translateX(-${index * step})`
  }

  let sliderRight = function () {
    slider.style.transform = `translateX(${index * step})`
  }
}



