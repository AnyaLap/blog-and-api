function createPosts() {

    //Находим элементы на странице
    const title = document.getElementById('title').value;
    const body = document.getElementById('body').value;

    //Делаем POST-запрос
    fetch('https://jsonplaceholder.typicode.com/posts', {
      method: 'POST',
      headers: {
          'Content-Type': 'application/json',
      },
      body: JSON.stringify({
      title, body
      })
    })
      .then((response) => response.json())
      .then((data) => {
        const postContainer = document.getElementById('post-container');
        const postElement = document.createElement('div');//Добавление блока поста
        postElement.classList.add('post');
        postElement.innerHTML = `<h2>${data.title}</h2><p>${data.body}</p>`;
        postContainer.appendChild(postElement);
      })
      .catch((error) => {
        const postContainer = document.getElementById('post-container');
        const postElement = document.createElement('div');
        postElement.innerHTML = `Ошибка: ${error}`;
        postContainer.appendChild(postElement);
      });

      //Очищаем поле ввода
      document.getElementById("title").value = '';
      document.getElementById("body").value = '';
    }
  createPosts();

  //Обработчик событий при нажатии на кнопку
  const addButton = document.getElementById('btn');
  addButton.addEventListener('click',createPosts);


    //Обработчики событий focus и blur
const inputFields = document.querySelectorAll('input');

inputFields.forEach(function(input) {
  input.addEventListener('focus', function () {
    input.style.border = '1px solid rgb(226, 93, 175)'; //Изменение границы при фокусе
    input.style.backgroundColor = 'rgb(241, 196, 224)'; //Изменение фона при фокусе
  });

  input.addEventListener('blur', function () {
    input.style.border = ''; //Восстановление стандартной границы после потери фокуса
    input.style.backgroundColor = ''; //Восстановление стандартного фона после потери фокуса
  });
})