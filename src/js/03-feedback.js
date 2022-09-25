// 1. Отслеживай на форме событие input, и каждый раз записывай в локальное
// хранилище объект с полями email и message, в которых сохраняй текущие значения
// полей формы. Пусть ключом для хранилища будет строка "feedback-form-state".
const input = document.querySelector('input');
console.log(input);
const textArea = document.querySelector('textarea');
console.log(textArea);

input.addEventListener('input', inputEmailHandler);

function inputEmailHandler(event) {
  console.log(input.value);
  //   console.log(event.target.textContent);
  //   console.log(input.textContent);
  //сохранение вводимых данных
  const inputDataEmail = {
    input: '${input.value}',
  };
  localStorage.setItem('inputDataEmail', JSON.stringify(inputDataEmail));
  return console.log(inputDataEmail);
}

textArea.addEventListener('input', inputTextAreaHandler);

function inputTextAreaHandler(event) {
  //сохранение вводимых данных
  const inputDataText = {
    input: '${textArea.value}',
  };
  localStorage.setItem('inputDataText', JSON.stringify(inputDataText));
  return console.log(inputDataText);
}

// 2. При загрузке страницы проверяй состояние хранилища, и если там есть сохраненные
// данные, заполняй ими поля формы.В противном случае поля должны быть пустыми.
const savedData = localStorage.getItem('inputDataEmail');
const parsedData = JSON.parse(savedData);
console.log(parsedData); // data object

// 3. При сабмите формы очищай хранилище и поля формы, а также выводи объект с
// полями email, message и текущими их значениями в консоль.
const btn = document.querySelector('button');
console.log(btn);
btn.addEventListener('click', clickHandler);

function clickHandler(event) {
  localStorage.clear();
  input.textContent = '';
  textArea.textContent = '';
  console.log(savedData);
}
// 4. Сделай так, чтобы хранилище обновлялось не чаще чем раз в 500 миллисекунд.
// Для этого добавь в проект и используй библиотеку lodash.throttle.
