// взаимодействия на главной страинце

window.onload = function() {
  setTimeout(() => {
    let preloader = document.getElementById('preload');
    preloader.style.display = 'none';
  }, 1500); // Устанавливаем задержку в 2 секунды
};



const group1 = document.querySelector('.group1')
//const plate = document.querySelector('.plate')
const items = document.querySelectorAll('.item')


const Posuda = document.querySelector('.Posuda')
items.forEach(item => {
  item.addEventListener('mouseenter', function () {
    let name = item.getAttribute('data-pic');
    item.setAttribute('src', `image/${name} цвет.png`)
  })

  item.addEventListener('mouseleave', function () {
    let name = item.getAttribute('data-pic');
    item.setAttribute('src', `image/${name}.png`);
  })


})

// Функция для открытия модального окна с соответствующим текстом
function openModal(textClass) {
  // Получаем модальное окно и текстовые блоки
  const modal = document.getElementById('my-modal');
  const textBlocks = modal.querySelectorAll('[class^="text_"]');

  // Скрываем все текстовые блоки
  textBlocks.forEach(block => {
    block.style.display = 'none';
  });

  // Отображаем нужный текстовый блок
  const textBlockToShow = modal.querySelector('.' + textClass);
  if (textBlockToShow) {
    textBlockToShow.style.display = 'block';
  }

  // Отображаем модальное окно
  modal.classList.add('open');
}

// Функция для закрытия модального окна
function closeModal() {
  const modal = document.getElementById('my-modal');
  modal.classList.remove('open');
}

document.addEventListener('DOMContentLoaded', () => {
  // Получаем все элементы с классом 'item' внутри 'Posuda'
  const items = document.querySelectorAll('#form .item');

  // Добавляем обработчик события клика для каждого элемента
  items.forEach(item => {
    item.addEventListener('click', () => {
      // Определяем, какой текстовый блок должен быть показан
      const textClass = 'text_' + item.className.split(' ')[0];
      openModal(textClass);
    });
  });

  // Добавляем обработчик события клика для кнопки закрытия модального окна
  const closeButton = document.getElementById('close-my-modal-btn');
  closeButton.addEventListener('click', closeModal);

  // Закрыть модальное окно при клике вне его
  document.querySelector("#my-modal .modal__box").addEventListener('click', event => {
    event._isClickWithInModal = true;
  });
  document.getElementById("my-modal").addEventListener('click', event => {
    if (event._isClickWithInModal) return;
    event.currentTarget.classList.remove('open');
  });

});




