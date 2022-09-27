import throttle from 'lodash.throttle';
// 1. Отслеживай на форме событие input, и каждый раз записывай в локальное
// хранилище объект с полями email и message, в которых сохраняй текущие значения
// полей формы. Пусть ключом для хранилища будет строка "feedback-form-state".
const refs = {
  form: document.querySelector('.feedback-form'),
  textarea: document.querySelector('.feedback-form textarea'),
  email: document.querySelector('.feedback-form input'),
};

const STORAGE_KEY = 'feedback-form-state';
const formData = {};

refs.form.addEventListener('submit', onFormSubmit);
refs.textarea.addEventListener('input', throttle(onTextInput, 500));
refs.email.addEventListener('input', throttle(onTextInput, 500));

populateTextarea();

function onTextInput(event) {
  // console.log((formData[event.target.name] = event.target.value));
  localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
}

// 2. При загрузке страницы проверяй состояние хранилища, и если там есть сохраненные
// данные, заполняй ими поля формы.В противном случае поля должны быть пустыми.
function populateTextarea() {
  const savedMessage = localStorage.getItem(STORAGE_KEY);
  const textMessage = JSON.parse(savedMessage);
  console.log(textMessage);
  // const savedMail = localStorage.getItem('feedback-form-mail');
  // const mailAddress = JSON.parse(savedMail);

  if (savedMessage) {
    refs.email.value = textMessage.email;
    refs.textarea.value = textMessage.message;
  }
}
// 3. При сабмите формы очищай хранилище и поля формы, а также выводи объект с
// полями email, message и текущими их значениями в консоль.
function onFormSubmit(event) {
  event.preventDefault();
  console.log('Отправляем форму');

  event.currentTarget.reset();
  console.log(JSON.parse(localStorage.getItem(STORAGE_KEY)));
  localStorage.removeItem(STORAGE_KEY);
}

// 4. Сделай так, чтобы хранилище обновлялось не чаще чем раз в 500 миллисекунд.
// Для этого добавь в проект и используй библиотеку lodash.throttle.
