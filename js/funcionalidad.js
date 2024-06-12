// header y footer dinamicos
// document.addEventListener('DOMContentLoaded', () => {
//     fetch('/components/nav/nav.html')
//         .then(response => response.text())
//         .then(data => {
//             document.querySelector('header').innerHTML = data;
//         })
//         .catch(error => console.error('Error al cargar el contenido del nav:', error));
// });

// document.addEventListener('DOMContentLoaded', () => {
//     fetch('/components/footer/footer.html')
//         .then(response => response.text())
//         .then(data => {
//             document.querySelector('footer').innerHTML = data;
//         })
//         .catch(error => console.error('Error al cargar el contenido del footer:', error));
// });

document.addEventListener('DOMContentLoaded', () => {
    fetch('/components/nav/nav.html')
        .then(response => response.text())
        .then(data => {
            document.querySelector('header').innerHTML = data;
            // Cargar el script de nav.js después de insertar el contenido del header
            const script = document.createElement('script');
            script.src = '/components/nav/nav.js';
            document.body.appendChild(script);
        })
        .catch(error => console.error('Error al cargar el contenido del nav:', error));
});

document.addEventListener('DOMContentLoaded', () => {
    fetch('/components/footer/footer.html')
        .then(response => response.text())
        .then(data => {
            document.querySelector('footer').innerHTML = data;
        })
        .catch(error => console.error('Error al cargar el contenido del footer:', error));
});
