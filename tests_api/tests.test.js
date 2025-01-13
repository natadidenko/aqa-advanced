const axios = require('axios');

// Налаштування інтерсепторів
axios.interceptors.request.use((request) => {
  console.log(`Запит: ${request.method.toUpperCase()} ${request.url}`);
  if (request.data) {
    console.log('Тіло запиту:', request.data);
  }
  return request;
}, (error) => {
  console.error('Помилка запиту:', error.message);
  return Promise.reject(error);
});

axios.interceptors.response.use((response) => {
  console.log(`Респонс: ${response.status} ${response.statusText}`);
  console.log('Дані:', response.data);
  return response;
}, (error) => {
  console.error('Помилка респонсу:', error.message);
  return Promise.reject(error);
});

// Виконання запитів
describe('Тести для JSONPlaceholder API', () => {
  const baseURL = 'https://jsonplaceholder.typicode.com';

  test('GET /posts/1 - Отримати пост з id=1', async () => {
    const response = await axios.get(`${baseURL}/posts/1`);
    expect(response.status).toBe(200);
    expect(response.data).toHaveProperty('id', 1);
  });

  test('GET /users - Отримати список користувачів', async () => {
    const response = await axios.get(`${baseURL}/users`);
    expect(response.status).toBe(200);
    expect(Array.isArray(response.data)).toBe(true);
  });

  test('GET /comments - Отримати список коментарів', async () => {
    const response = await axios.get(`${baseURL}/comments`);
    expect(response.status).toBe(200);
    expect(Array.isArray(response.data)).toBe(true);
  });

  test('POST /posts - Створити новий пост', async () => {
    const newPost = {
      title: 'foo',
      body: 'bar',
      userId: 1
    };
    const response = await axios.post(`${baseURL}/posts`, newPost);
    expect(response.status).toBe(201);
    expect(response.data).toMatchObject(newPost);
  });

  test('POST /comments - Додати новий коментар', async () => {
    const newComment = {
      postId: 1,
      name: 'Test User',
      email: 'test@example.com',
      body: 'This is a test comment.'
    };
    const response = await axios.post(`${baseURL}/comments`, newComment);
    expect(response.status).toBe(201);
    expect(response.data).toMatchObject(newComment);
  });
});
