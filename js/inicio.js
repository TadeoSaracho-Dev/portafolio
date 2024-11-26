const themeToggle = document.getElementById('theme-toggle');
const body = document.body;

themeToggle.addEventListener('click',()=> {
    body.classList.toggle('dark-theme');
    if(body.classList.contains('dark-them'))
        {
            themeToggle.textContent = 'Modo Claro';
    } 
    else {
        themeToggle.textContent = 'Modo Oscuro'
    }
});