//MOVE-UP ITEM

//изменение статуса объекта
function fz_hider() {
  this.classList.remove('active');
}
function fz_shower() {
  this.classList.add('active');
}
//запись функций в каждый анимируемый объект
function setFunc(moveUpItem) {
  moveUpItem.hider = fz_hider;
  moveUpItem.shower = fz_shower;
}

//функция, определяющая статус объектов по высоте скролла
function lvlScroll() {
  if (document.documentElement.clientWidth * 0.105 > window.pageYOffset) {
    moveUpItem.hider();
  } else {
    moveUpItem.shower();
  }
};

//получение объектов
let moveUpItem = document.querySelector('.scroll-top');
//вызов функции, добавляющей функции в объект
setFunc(moveUpItem);
//вызов функции оценки положения окна при загрузке старицы, для отображения/скрытия скролл-кнопки
lvlScroll();
//обработка события onScroll
window.addEventListener('scroll', lvlScroll)

//обработка события onClick
moveUpItem.addEventListener('click', function () {
  //обработка кода по условию "если есть скролл"
  if (window.pageYOffset) {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }
})

//BURGER
let burger = document.querySelector('.burger')
let body = document.querySelector('.body')
burger.addEventListener('click', () => {
  if (!burger.classList.contains('burger--active')) {
    burger.classList.add('burger--active')
    body.classList.add('body--hidden')
  } else {
    burger.classList.remove('burger--active')
    body.classList.remove('body--hidden')
  }
})

