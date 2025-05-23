// ! асинхронность в js
// мы писали до этого синхронный код
// он срабатывает последовательно по порядку сверху вниз
// но в js мы имеем возможность работать с кодам, выполнение которого будет откладываться
// ниже рассмотрим примеры асинхронности в js

// ? setTimeout()

// откладывает выполнение кода на заданное времени
// принимает два аргумента:
// 1. функцию с кодом, которая сработает после истечения заданного времени
// 2. время в миллисекундах

// console.log('начало!')

setTimeout(() => {
    // console.log('Прошло 5 секунд!')
  }, 5000);
  
  // console.log('конец!')
  
  // ! любой асинхронный код сработает позже синхронного кода
  // даже если в setTimeout указать 0 секунд
  
  // ? setInterval()
  
  // задает повторное выполнение кода
  
  // первым аргументом принимает функцию с описанием действия
  // вторым аргументом значение времени через которое действие сработает в миллисекундах
  
  // интервал будет повторяться до тех пор пока мы его не остановим
  // для того чтобы его остановить в будущем мы кладем ссылку на него в переменную
  
  const interval = setInterval(() => {
    // console.log('Tick!')
  }, 2000);
  
  // чтобы остановить interval мы применяем к нему метод clearInterval()
  
  setTimeout(() => {
    clearInterval(interval);
  }, 7000);
  
  // это действие синхронное поэтому оно сработаем раньше, чем setTimeout и setInterval()
  // console.log('P.S.')
  
  // ! async requests & promises
  
  // API - Application Programming Interface
  // набор правил позволяющий одним программам понимать другие программы, общаться друг с другом и обмениваться данными
  
  // часто когда мы работаем с API мы хотим сделать запрос за данными чтобы обработать их в своем коде и отобразить на странице
  
  // * если я хочу получить удаленные данные по запросу - то используем ключевое слово fetch() (в переводе 'принеси')
  
  // в ответ на запрос мне приходят данные в виде объекта Promise
  
  // Promise - это особый вид данных в JS который нуждается в асинхронной обработке. У него есть три состояния:
  
  // 1. <Pending> - ожидание данных
  // 2. <Fulfilled> - данные успешно пришли
  // 3. <Rejected> - данные пришли с ошибкой
  
  // ? запрос не получится обработать синхронно
  
  // const data = fetch('https://dog.ceo/api/breeds/image/random')
  
  fetch("https://dog.ceo/api/breeds/image/random")
    .then((res) => res.json())
    .then(data => {
      const img = document.createElement('img')
      img.src = data.message
      document.body.append(img)
    });