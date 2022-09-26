import throttle from 'lodash.throttle';
// 1. Отслеживай на форме событие input, и каждый раз записывай в локальное
// хранилище объект с полями email и message, в которых сохраняй текущие значения
// полей формы. Пусть ключом для хранилища будет строка "feedback-form-state".
const refs = {
  form: document.querySelector('.feedback-form'),
  textarea: document.querySelector('.feedback-form textarea'),
};

const STORAGE_KEY = 'feedback-form-state';

refs.form.addEventListener('submit', onFormSubmit);
refs.textarea.addEventListener('input', throttle(onTextAreaInput, 500));

populateTextarea();

function onTextAreaInput(event) {
  const message = event.target.value;

  localStorage.setItem(STORAGE_KEY, message);
}

// 2. При загрузке страницы проверяй состояние хранилища, и если там есть сохраненные
// данные, заполняй ими поля формы.В противном случае поля должны быть пустыми.
function populateTextarea() {
  const savedMessage = localStorage.getItem(STORAGE_KEY);

  if (savedMessage) {
    console.log(savedMessage);
    refs.textarea.value = savedMessage;
  }
}

// 3. При сабмите формы очищай хранилище и поля формы, а также выводи объект с
// полями email, message и текущими их значениями в консоль.
function onFormSubmit(event) {
  event.preventDefault();
  console.log('Отправляем форму');

  event.currentTarget.reset();
  console.log(localStorage.getItem(STORAGE_KEY));
  localStorage.removeItem(STORAGE_KEY);
}

// 4. Сделай так, чтобы хранилище обновлялось не чаще чем раз в 500 миллисекунд.
// Для этого добавь в проект и используй библиотеку lodash.throttle.
