
const postsContainer = document.getElementById('posts-container');

// Функция, которая получает на вход объект поста и возвращает строку HTML-разметки
function createPostHtml(post) {
    return `
      <div class="post">
        <h2>Заголовок: ${post.title}</h2>
        <p>Статья: ${post.body}</p>
      </div>
    `;
  }
  
  // Функция, которая добавляет HTML-разметку поста в контейнер
  function appendPostToContainer(container, postHtml) {
    container.innerHTML += postHtml;
  }
  
  // Функция, которая загружает список постов с сервера и добавляет их на страницу
  function loadPostsAndRender(containerElement) {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(posts => {
        posts.forEach(post => {
          appendPostToContainer(containerElement, createPostHtml(post));
        });
      })
      .catch(error => console.error('Error loading posts:', error));
  }

  loadPostsAndRender(postsContainer);