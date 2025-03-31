// // ! Counter

// // * 1. объявление переменных
// // подумаем какие элементы будут интерактивными
// // находим их DOM методами и кладем в переменные

// const minus = document.querySelector("#btn-minus");
// const plus = document.querySelector("#btn-plus");
// const value = document.querySelector("#value");

// // * 2. описали логику работы с данными

// let counter = 0;

// const handlePlus = () => {
//   // увеличиваем counter на 1
//   // * counter++
//   counter = counter + 100
//   // перезаписываем текстовое значение value
//   value.innerText = counter;
// };

// const handleMinus = () => {
//   // * counter--
//   counter = counter - 10
//   value.innerText = counter;
// };

// // * 3. добавили данные интерактивным элементам через слушатели событий

// plus.addEventListener("click", handlePlus);
// minus.addEventListener("click", handleMinus);

// ! Todo list

const form = document.getElementById('form-todo')
const ul = document.getElementById('list-todo')

// заводим массив под список задач
const taskList = [
  {
    where: "home",
    what: "coding"
  },
  {
    where: "room",
    what: "cleaning"
  },
  {
    where: "shop",
    what: "buy products"
  },
]

form.addEventListener('submit', (event) => {
  // предотвращаем отправку формы и перезагрузку страницы по умолчанию
  event.preventDefault()

  // создаем для удобства объект со значениями из формы
  let task = {
    where: event.target.where.value.toLowerCase(),
    what: event.target.what.value.toLowerCase()
  }

  taskList.push(task)

  // очищаем значения в форме
  event.target.where.value = ''
  event.target.what.value = ''

  console.log(taskList)

  // итерируемся по элементам списка задач

  taskList.map(el => {
    const li = document.createElement('li')
    li.innerText = `${el.what}: ${el.where}`
    ul.append(li)
  })

})

function clearList(){
    taskList.map(el => {
        const li = document.createElement('li')
        li.innerText = `${el.what}: ${el.where}`
        ul.append(li)
      })
}

function clearList(){
    while(ul.hasChildNodes()){
        ul.firstChild.remove()
    }
}
    

