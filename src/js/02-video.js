// Напиши скрипт который будет сохранять текущее время воспроизведения видео в
// локальное хранилище и, при перезагрузке страницы, продолжать воспроизводить
// видео с этого времени.

// 1. Ознакомься с документацией библиотеки Vimeo плеера.
// 2) Добавь библиотеку как зависимость проекта через npm.
// 3) Инициализируй плеер в файле скрипта как это описано в секции
// pre - existing player, но учти что у тебя плеер добавлен как npm пакет,
//     а не через CDN.

import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);

// 4. Разбери документацию метода on() и начни отслеживать событие
// timeupdate - обновление времени воспроизведения.
const onPlay = function (data) {
  console.log('Идет воспроизведение видео');
};

player.on('play', onPlay);
// 5. Сохраняй время воспроизведения в локальное хранилище.
// Пусть ключом для хранилища будет строка "videoplayer-current-time".
player.on('timeupdate', throttle(uppdatingTime, 1000));

function uppdatingTime(data) {
  const option = data.seconds;
  localStorage.setItem('videoplayer-current-time', JSON.stringify(option));
}
// 6. При перезагрузке страницы воспользуйся методом setCurrentTime()
// для того чтобы возобновить воспроизведение с сохраненной позиции.
addEventListener('DOMContentLoaded', currentTime);

function currentTime() {
  const timeForContinue = localStorage.getItem('videoplayer-current-time');
  console.log(`CurrentTime is ${timeForContinue} sec`);
  player.setCurrentTime(timeForContinue);
}

// 7. Добавь в проект бибилотеку lodash.throttle и сделай так,
// чтобы время воспроизведения обновлялось в хранилище не чаще чем раз в секунду.
