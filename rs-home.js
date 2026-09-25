const header = document.querySelector('.site-header');
const toggle = document.querySelector('.nav-toggle');
if (toggle) toggle.addEventListener('click', () => header.classList.toggle('open'));
document.querySelectorAll('.site-header nav a').forEach(a => a.addEventListener('click', () => header.classList.remove('open')));