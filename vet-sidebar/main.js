const button = document.querySelector('#menuToggle');
const sidebar = document.querySelector('.sidebar');
const searchButton = document.querySelector('.search');

button.addEventListener('click', () => {
    sidebar.classList.toggle('active');
});

searchButton.addEventListener('click', () => {
    sidebar.classList.add('active');
});