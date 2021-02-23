/** @format */
/**  moving pageMove    */
let pageMove = document.getElementById('card-content');
let pageSize = document.getElementById('content');
let arrowDown = document.getElementsByClassName('arrow-down');
let arrowUp = document.getElementsByClassName('arrow-up');
let move = 0;
arrowDown[0].addEventListener('click', function () {
   move += pageMove.offsetHeight / 2 - 10;
   pageMove.style.transform = 'translateY(' + -move + 'px)';
   checPositionArraw(move);
});

arrowUp[0].addEventListener('click', function () {
   move -= Math.abs(pageSize.offsetHeight / 2 - 10);
   pageMove.style.transform = 'translateY(' + -move + 'px)';
   checPositionArraw(move);
});

function checPositionArraw(m) {
   if (m <= 0) {
      arrowUp[0].style.display = 'none';
      arrowDown[0].style.display = 'block';
   } else if (m >= ((pageMove.offsetHeight / 2 - 10) * (n - 4)) / 2) {
      arrowDown[0].style.display = 'none';
      arrowUp[0].style.display = 'block';
   } else {
      arrowDown[0].style.display = 'block';
      arrowUp[0].style.display = 'block';
   }
}

function updateNumberCards(count) {
   n = count;
   move = 0;
   blockCardContent.style.transform = 'translateY(0px)';
   checPositionArraw(move);
}

document.getElementById('menu_button_tel').addEventListener('click', function () {
   const buttomMenu = document.getElementById('menu__close');
   let menu = document.getElementById('menu__left');
   console.log('dfadfa');
   //menu.style.display = 'block';
   menu.style.transform = 'translateX(0)';

   buttomMenu.addEventListener('click', function () {
      console.log('dfadfa');
      menu.style.transform = 'translateX(-100%)';
      // menu.style.display = 'none';
   });
});

// function closeMenu() {
//    // console.log('dfadfa');
//    // document.getElementById('menu__left').style.transform = 'translateX(-100%)';
//    let menu = document.getElementById('menu__left');
//    const menuSize = menu.offsetWidth;
//    console.log('dfadfa');
//    menu.style.transform = 'translateX(-100%)';
// }