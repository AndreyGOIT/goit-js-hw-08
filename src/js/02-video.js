// Напиши скрипт который будет сохранять текущее время воспроизведения видео в
// локальное хранилище и, при перезагрузке страницы, продолжать воспроизводить
// видео с этого времени.

// 1. Ознакомься с документацией библиотеки Vimeo плеера.
// 2) Добавь библиотеку как зависимость проекта через npm.
// 3) Инициализируй плеер в файле скрипта как это описано в секции
// pre - existing player, но учти что у тебя плеер добавлен как npm пакет,
//     а не через CDN.
<script>
      const iframe = document.querySelector('iframe');
      const player = new Vimeo.Player(iframe);

      player.on('play', function () {
        console.log('played the video!');
      });

      player.getVideoTitle().then(function (title) {
        console.log('title:', title);
      });
    </script>
// 4. Разбери документацию метода on() и начни отслеживать событие
// timeupdate - обновление времени воспроизведения.
const onPlay = function (data) {
  // data is an object containing properties specific to that event
};

player.on('play', onPlay);

player.on('eventName', function (data) {
  // data is an object containing properties specific to that event
});

// 5. Сохраняй время воспроизведения в локальное хранилище.
// Пусть ключом для хранилища будет строка "videoplayer-current-time".
// 6. При перезагрузке страницы воспользуйся методом setCurrentTime()
// для того чтобы возобновить воспроизведение с сохраненной позиции.
// 7. Добавь в проект бибилотеку lodash.throttle и сделай так,
// чтобы время воспроизведения обновлялось в хранилище не чаще чем раз в секунду.
