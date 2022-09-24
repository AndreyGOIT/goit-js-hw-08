// Напиши скрипт который будет сохранять текущее время воспроизведения видео в
// локальное хранилище и, при перезагрузке страницы, продолжать воспроизводить
// видео с этого времени.

// 1. Ознакомься с документацией библиотеки Vimeo плеера.
// 2) Добавь библиотеку как зависимость проекта через npm.
// 3) Инициализируй плеер в файле скрипта как это описано в секции
// pre - existing player, но учти что у тебя плеер добавлен как npm пакет,
//     а не через CDN.
import Player from '@vimeo/player';

const iframe = document.querySelector('iframe');
const player = new Vimeo.Player(iframe);

// 4. Разбери документацию метода on() и начни отслеживать событие
// timeupdate - обновление времени воспроизведения.
const onPlay = function (data) {
  console.log('Идет воспроизведение видео');
  // data is an object containing properties specific to that event
};

player.on('play', onPlay);

player.on('timeupdate', function (data) {
  {
    duration: 61.857;
    percent: 0.049;
    seconds: 3.034;
  }
  // data is an object containing properties specific to that event
});

// 5. Сохраняй время воспроизведения в локальное хранилище.
// Пусть ключом для хранилища будет строка "videoplayer-current-time".
// 6. При перезагрузке страницы воспользуйся методом setCurrentTime()
// для того чтобы возобновить воспроизведение с сохраненной позиции.
player
  .setCurrentTime(30.456)
  .then(function (seconds) {
    // seconds = the actual time that the player seeked to
  })
  .catch(function (error) {
    switch (error.name) {
      case 'RangeError':
        // the time was less than 0 or greater than the video’s duration
        break;

      default:
        // some other error occurred
        break;
    }
  });
// 7. Добавь в проект бибилотеку lodash.throttle и сделай так,
// чтобы время воспроизведения обновлялось в хранилище не чаще чем раз в секунду.
// document.addEventListener(
//   'scroll',
//   _.throttle(() => {
//     console.log('Timeupdate handler update every 1000ms');
//   }, 1000)
// );
