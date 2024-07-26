//- Создайте функцию makeOne, которая выполняет GET-запрос по адресу https://catfact.ninja/fact, используя функцию fetch().- Затем из полученного объекта нужно извлечь свойство "status"- Результат должен быть выведен в элемент <p> с id "practicum" в DOM-дерево.
function makeOne() {
    fetch('https://api.catfact.ninja/fact')
    .then((res) => {
      document.querySelector('#practicum').textContent = res.status;
    })
    .catch((err) => {
      document.querySelector('#practicum').textContent =  'Произошла ошибка';
    });
  }
  
  makeOne();

  //Создайте функцию makeTwo, которая выполняет следующие действия:- Функция makeTwo должна сделать GET-запрос по адресу https://emojihub.yurace.pro/api/random/group/face-positive с помощью функции fetch()- Полученный ответ должен быть преобразован в формат JSON с помощью метода response.json()- Затем из полученного JSON-объекта нужно извлечь свойство "name"- Полученное значение вставьте в элемент с id "practicum" в DOM-дерево- В случае ошибки выведите сообщение 'Произошла ошибка'
  function makeTwo() {
    const paragraph = document.getElementById('practicum')
    fetch('https://emojihub.yurace.pro/api/random/group/face-positive')
    .then((res) => {
      return res.json()
    })
    .then((data) => {
      paragraph.innerHTML = data.name
    })
    .catch((err) => {
      paragraph.innerHTML ='Ошибка. Запрос не выполнен'
    });
  }
  makeTwo();

  //Создайте функцию makeThree, которая выполняет GET-запрос по адресу https://www.boredapi.com/api/activity, используя функцию fetch(). Выведите в <p> свойство statusText полученного объекта. В случае ошибки выведите сообщение 'Ошибка. Запрос не выполнен'
  function makeThree() {
    fetch('https://www.boredapi.com/api/activity')
 .then((res) => {
   document.querySelector('#practicum').textContent = res.statusText;
 })
 .catch((err) => {
   document.querySelector('#practicum').textContent =  'Ошибка. Запрос не выполнен';
 });
}

makeThree();

//Создайте функцию makeFour, которая выполняет следующие действия:- Функция makeFour должна сделать GET-запрос по адресу https://www.boredapi.com/api/activity с помощью функции fetch()- Полученный ответ должен быть преобразован в формат JSON с помощью метода response.json()- Затем из полученного JSON-объекта нужно извлечь свойство "activity", которое содержит описание активности- Вывести полученную активность в формате 'Activity: описание активности' в <p>- В случае ошибки выведите сообщение 'Ошибка. Запрос не выполнен'

function makeFour() {
	fetch('https://www.boredapi.com/api/activity ')
  .then((response) => {
      return response.json();
  })
  .then((activ) => {
    document.querySelector('#practicum').textContent = activ.activity;
  })
   .catch((err) => {
   document.querySelector('#practicum').textContent =  'Ошибка. Запрос не выполнен';
 });
}

makeFour();

//Создайте функцию makeSix, которая выполняет GET-запрос по адресу https://www.boredapi.com/api/activity, используя функцию fetch(). Выведите в <p> свойства из полученного объекта, такие как activity, type, price и accessibility.- В случае ошибки выведите сообщение 'Ошибка. Запрос не выполнен'
function makeSix() {
    fetch('https://www.boredapi.com/api/activity')
        .then((response) => {
  return response.json();
})
.then((activ) => {
document.querySelector('#practicum').textContent = `${activ.activity},${activ.type},${activ.price},${activ.accessibility}`
})
.catch((err) => {
document.querySelector('#practicum').textContent =  'Ошибка. Запрос не выполнен';
});
}

makeSix();

//Создайте функцию makeSeven, которая выполняет GET-запрос по адресу https://api.agify.io/, используя функцию fetch(). Выведите в <p> ответ с сервера (не забудь преобразовать его к строке с помощью JSON.stringify()), чтобы убедиться, что получили данные.В случае ошибки выведите сообщение 'Ошибка. Запрос не выполнен'
function makeSeven() {
    fetch('https://api.agify.io/')
.then((response) => {
  return response.json();
})
.then((activ) => {
document.querySelector('#practicum').textContent = JSON.stringify(activ);
})
.catch((err) => {
document.querySelector('#practicum').textContent =  'Ошибка. Запрос не выполнен';
});
}

makeSeven();

//Создайте функцию makeNine, которая выполняет GET-запрос по адресу `https://api.agify.io/` с параметром ?name=vadim, используя функцию fetch(), и выведет полученные данные в элемент с id practicum.В случае ошибки выведите сообщение 'Ошибка. Запрос не выполнен'
const resultElement = document.getElementById('practicum')

function makeNine() {
  fetch('https://api.agify.io/?name=vadim')
    .then((response) => response.json())
    .then((data) => {
      document.querySelector('#practicum').textContent = JSON.stringify(data);
    })
    .catch((error) => {
      document.querySelector('#practicum').textContent =  'Ошибка. Запрос не выполнен';
    })
}

makeNine();

//Создайте функцию makeTen, которая выполняет следующие действия:- Функция makeTen должна сделать GET-запрос по адресу https://dog.ceo/api/breeds/image/random с помощью функции fetch()- Полученный ответ должен быть преобразован в формат JSON с помощью метода response.json()- Затем из полученного JSON-объекта нужно извлечь свойство "message", которое содержит ссылку на случайное изображение собаки- Далее нужно создать элемент <img> и установить его атрибут "src" равным значению из свойства "message" (ссылке на изображение)- Добавьте элементу <img> класс 'html-img'- Созданный элемент <img> должен быть вставлен после элемента с id "practicum" в DOM-структуре страницыПосле выполнения этих шагов будет загружено случайное изображение собаки, которое будет отображено под <p>.- В случае ошибки выведите в <p> сообщение 'Ошибка. Запрос не выполнен'
function makeTen() {
    fetch('https://dog.ceo/api/breeds/image/random')
   .then((response) => response.json())
   .then((data) => {
      const imageDog = document.createElement('img')
     imageDog.classList.add('html-img')
     imageDog.src = data.message
     const section = document.querySelector('.html')
     section.append(imageDog)
   })
   .catch((error) => {
     document.querySelector('#practicum').textContent =  'Ошибка. Запрос не выполнен';
   })
}

makeTen();

//Нужно создать функцию makeEleven, которая выполняет следующие действия:Функция makeEleven должна сделать GET-запрос на адрес https://api.ipify.org?format=json с помощью функции fetch() Полученный ответ должен быть преобразован в формат JSON с помощью метода response.json() Затем из полученного JSON-объекта нужно извлечь свойство "ip", которое содержит текущий IP-адрес Полученный IP-адрес нужно вывести в элемент с id "practicum" В случае ошибки выведите `Ошибка: ${error}`

function makeEleven() {
  fetch('https://api.ipify.org?format=json')
    .then((response) => response.json())
    .then((data) => {
    document.querySelector('#practicum').textContent = JSON.stringify(data.ip);
    })
    .catch((error) => {
      document.getElementById('practicum').textContent = `Ошибка: ${error}`
    })
}

makeEleven();

//"89.109.51.107"

//Введите в поле ввода IP-адрес из задания 11 в поле ниже для получения его гео-позиции. Используйте функцию fetch() для выполнения GET-запроса по адресу https://api.ipgeolocationapi.com/geolocate/{ipAddress}. Замените {ipAddress} на фактический IP-адрес, который вы получите из текстового поля.Подсказка: используйте свойство textContent для вывода данных о гео-позиции в виде строки.В случае ошибки выведите `Ошибка: ${error}`

function makeTwelve() {
  const paragraph = document.getElementById('practicum')
  const ipAddress = document.getElementById('ipAddress').value
  fetch(`https://api.ipgeolocationapi.com/geolocate/${ipAddress}`)
    .then((response) => response.json())
    .then((data) => {
      paragraph.textContent = JSON.stringify(data)
    })
    .catch((error) => {
      paragraph.textContent = `Ошибка: ${error}`
    })
}
makeTwelve();

//Нужно создать функцию makeFifteen, которая делает следующие действия:Функция makeFifteen должна сделать POST-запрос на адрес https://jsonplaceholder.typicode.com/posts с помощью функции fetch()В теле запроса отправьте JSON-объект с полями title и body, например:{ "title": "Заголовок", "body": "Текст поста" }Укажите заголовок "Content-Type" как "application/json" для запроса Полученный ответ от сервера должен быть преобразован в формат JSON с помощью метода response.json()Выведите ответ от сервера в <p> В случае ошибки выведите `Ошибка: ${error}` Подсказка: использование JSON.stringify() позволит преобразовать объект в строку.

function makeFifteen() {
  const paragraph = document.getElementById('practicum')
  const postData = {
    title: 'Заголовок',
    body: 'Текст поста',
  };

  fetch('https://jsonplaceholder.typicode.com/posts', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
    },
    body: JSON.stringify(postData)
  })
    .then((response) => response.json())
    .then((data) => {
        paragraph.textContent = JSON.stringify(data)
      })
    .catch((error) => paragraph.textContent = `Ошибка: ${error}`)
}

makeFifteen();

//Создайте функцию makeSeventeen, которая делает следующие действия:Функция makeSeventeen должна сделать DELETE-запрос на адрес https://jsonplaceholder.typicode.com/posts/1 с помощью функции fetch()Полученный ответ с сервера должен быть выведен в <p> В случае ошибки выведите `Ошибка: ${error}`

const paragraph = document.getElementById('practicum')

const makeSeventeen = () => {

  fetch('https://jsonplaceholder.typicode.com/posts/1', {
    method: 'DELETE',
  })
    .then((response) => response.json())
    .then((data) => {
        paragraph.textContent = JSON.stringify(data)
      })
    .catch((error) => paragraph.textContent = `Ошибка: ${error}`)
}

makeSeventeen();

//Создайте функцию makeEighteen, которая делает следующие действия:- Функция makeSeventeen должна сделать POST-запрос на адрес https://jsonplaceholder.typicode.com/photos с помощью функции fetch()- Укажите заголовок "Content-Type" как "application/json" для запроса- В теле запроса отправьте JSON-объект с полями title и url, например:{ "title": "Название изображения", "url": "https://example.com/image.jpg" }- Полученный ответ с сервера должен быть преобразован в формат JSON с помощью метода response.json()Выведите ответ с сервера в <p> В случае ошибки выведите `Ошибка: ${error}`

function makeEighteen() {
  const paragraph = document.getElementById('practicum')
  fetch('https://jsonplaceholder.typicode.com/posts', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
    },
    body: JSON.stringify({
    title: "Название изображения", 
    url: "https://example.com/image.jpg" 
    })
  })
    .then((response) => response.json())
    .then((data) => paragraph.textContent = JSON.stringify(data))
    .catch((error) => paragraph.textContent = `Ошибка: ${error}`)
}
makeEighteen();

//Создайте функцию makeNineteen, которая делает следующие действия:Функция makeNineteen должна сделать POST-запрос на адрес https://jsonplaceholder.typicode.com/users с помощью функции fetch()В теле запроса отправьте JSON-объект с полями name, username, email и phone, например:{ "name": "Кот Учёный", "username": "kitty", "email": "kitty@example.com", "phone": "123-456-7890" }Укажите заголовок "Content-Type" как "application/json" для запросаПолученный ответ с сервера должен быть преобразован в формат JSON с помощью метода response.json()Выведите ответ с сервера в <p>В случае ошибки выведите `Ошибка: ${error}`

const paragraph = document.getElementById('practicum')
function makeNineteen() {
  fetch('https://jsonplaceholder.typicode.com/users', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      "name": "Кот Учёный",
      "username": "kitty",
      "email": "kitty@example.com",
      "phone": "123-456-7890"
    })
  })
    .then((response) => response.json())
    .then((data) => paragraph.textContent = JSON.stringify(data))
    .catch((error) => paragraph.textContent = `Ошибка: ${error}`)
}
makeNineteen();

//Создайте функцию makePromiseAllOne, которая делает следующие действия:Функция makePromiseAllOne должна делать два GET-запроса на адреса:
https://jsonplaceholder.typicode.com/posts/1
https://jsonplaceholder.typicode.com/comments/1 Используйте `.then()` для обработки результатов. Выведите оба ответа с сервера в <p> В случае ошибки выведите 'Ошибка. Запрос не выполнен'

const paragraph = document.getElementById('practicum')
function makePromiseAllOne() {
  const postUrl = 'https://jsonplaceholder.typicode.com/posts/1'
  const commentUrl = 'https://jsonplaceholder.typicode.com/comments/1'
  const postPromise = fetch(postUrl)
    .then(response => response.json())
    .then(data => {
      return JSON.stringify(data)
    })
  const commentPromise = fetch(commentUrl)
    .then(response => response.json())
    .then(data => {
      return JSON.stringify(data)
    })
  Promise.all([postPromise, commentPromise])
    .then(results => {
      paragraph.textContent = results
    })
    .catch(error => {
      paragraph.textContent = 'Ошибка. Запрос не выполнен'
    });
}
makePromiseAllOne();

//Создайте функцию makePromiseAllTwo, которая делает следующие действия:- Функция makePromiseAllTwo должна делать три GET-запроса на адреса:https://jsonplaceholder.typicode.com/users/1 https://jsonplaceholder.typicode.com/posts/1 https://jsonplaceholder.typicode.com/comments/1- Используйте `async/await` для обработки результатов.- Выведите все ответы с сервера в <p>В случае ошибки выведите 'Ошибка. Запрос не выполнен'
const paragraph = document.getElementById('practicum')
async function makePromiseAllTwo() {
  let result
  try {
    const response1 = await fetch(
      'https://jsonplaceholder.typicode.com/users/1'
    )
    const data1 = await response1.json()
    result = JSON.stringify(data1)
    const response2 = await fetch(
      'https://jsonplaceholder.typicode.com/posts/1'
    )
    const data2 = await response2.json()
    result += JSON.stringify(data2)
    const response3 = await fetch(
      'https://jsonplaceholder.typicode.com/comments/1'
    )
    const data3 = await response3.json()
    result +=  JSON.stringify(data3)
    paragraph.textContent = result
  } catch (error) {
    paragraph.textContent = 'Ошибка. Запрос не выполнен'
  }
}
makePromiseAllTwo();

//document.getElementById('practicum').textContent = 1;setTimeout(function () {document.getElementById('practicum').textContent = 2;}, 0);document.getElementById('practicum').textContent = 3;В каком порядке числа выведутся в <p>?
function makeTwentyFive() {
  const paragraph = document.getElementById('practicum')
    let result = ''
    result += '1, '
    //запишите в paragraph число 1
    //все числа должны быть выведены через запятую 
    //Cтавим таймер на 0 миллисекунд
    setTimeout(function () {
      result += '2, ';
      paragraph.textContent = result;
    }, 0)
  
    //допишите в paragraph число 3
      result += '3, ';
    paragraph.textContent = result;
  }
  makeTwentyFive();

  //Создайте функцию makeTwentySix, должна использовать setTimeout для отображения в <p> сообщения "Прошло 5 секунд" через 5 секунд.

function makeTwentySix() {
	 const paragraph = document.getElementById('practicum')
    setTimeout(function () {
      paragraph.textContent = "Прошло 5 секунд";
    }, 5000)
}

makeTwentySix();

//Создайте функцию makeTwentyEight, которая использует setInterval для отображения в <p> сообщения "Прошло 3 секунды" каждые 3 секунды.
function makeTwentyEight() {
  let result = ''
  
  const id = setInterval(() => {
    if(result === '') {
      result += 'Прошло 3 секунды'
    } else {
      result += ' Прошло 3 секунды'
    }
    document.getElementById('practicum').textContent = result
  }, 3000)
    
  setTimeout(() => clearInterval(id), 7000)
}
makeTwentyEight();












