window.onload = function (){
  let iValue = document.querySelector('#text-input');
  let iImage = document.querySelector('#meme-insert');
  let divMeme = document.querySelector('#meme-image-container'); 
  let memeImg = document.querySelector('#meme-image');

  function addText(){
    if (iValue.value.length <= 60) {
      let memeTxt = document.querySelector('#meme-text');
        memeTxt.innerText = iValue.value;
    }
  }

  function addImg (e){
      memeImg.src = URL.createObjectURL(e.target.files[0]);
      memeImg.onload = function () {
        URL.revokeObjectURL(memeImg.src);
      };
  }

  let fire = document.querySelector('#fire');
  function bFire() {
    divMeme.style.border = '3px dashed red';
  }

  let water = document.querySelector('#water');
  function bWater() {
    divMeme.style.border = '5px double blue';
  }

  let earth = document.querySelector('#earth');
  function bEarth() {
    divMeme.style.border = '6px groove green';
  }

  let mini1 = document.querySelector('#meme-1');
  function addMini1(event) {
    memeImg.src = event.target.src;
  }

  let mini2 = document.querySelector('#meme-2');
  function addMini2(event) {
    memeImg.src = event.target.src;
  }

  let mini3 = document.querySelector('#meme-3');
  function addMini3(event) {
    memeImg.src = event.target.src;
  }

  let mini4 = document.querySelector('#meme-4');
  function addMini4(event) {
    memeImg.src = event.target.src;
  }

  mini1.addEventListener('click', addMini1);
  mini2.addEventListener('click', addMini2);
  mini3.addEventListener('click', addMini3);
  mini4.addEventListener('click', addMini4);

  earth.addEventListener('click', bEarth);
  water.addEventListener('click', bWater);
  fire.addEventListener('click', bFire);
  iImage.addEventListener('change', addImg);
  iValue.addEventListener('input', addText);

}