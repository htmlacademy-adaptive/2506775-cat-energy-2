/* в этот файл добавляет скрипты*/
const menuToggle = document.querySelector('.main-header__toggle');
const navMenu = document.querySelector('.main-nav');

menuToggle.addEventListener('click',() =>{
  navMenu.classList.toggle('main-nav--closed');
  if(menuToggle.classList.contains('main-header__toggle--closed')){
    menuToggle.classList.remove('main-header__toggle--closed');
    menuToggle.classList.add('main-header__toggle--opened');
  } else{
    menuToggle.classList.remove('main-header__toggle--opened');
    menuToggle.classList.add('main-header__toggle--closed');
  }
});

// if(menuToggle.classList.contains('main-header__toggle--opened')){
//   menuToggle.addEventListener('click', () =>{
//     menuToggle.classList.remove('main-header__toggle--opened');
//     menuToggle.classList.add('main-header__toggle--closed');
//     navMenu.classList.add('main-nav--closed');
//   });
// }

// if(menuToggle.classList.contains('main-header__toggle--closed')){
//   menuToggle.addEventListener('click', () =>{
//     menuToggle.classList.remove('main-header__toggle--closed');
//     menuToggle.classList.add('main-header__toggle--opened');
//     navMenu.classList.remove('main-nav--closed');
//   });
// }

