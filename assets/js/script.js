document.addEventListener('DOMContentLoaded', () => {
    // 1. Obtiene el botón y el menú
    const menuToggle = document.querySelector('.menu-toggle');
    const mainMenu = document.getElementById('mainMenu');

    if (menuToggle && mainMenu) {
        // 2. Escucha el evento 'click' en el botón
        menuToggle.addEventListener('click', () => {
            // 3. Alterna la clase 'active' en el menú
            // Esto hace que el menú pase de display: none a display: block (o viceversa)
            mainMenu.classList.toggle('active');
            
            // Opcional: Cambia el texto del botón de ☰ a X
            if (mainMenu.classList.contains('active')) {
                menuToggle.innerHTML = '✕'; 
            } else {
                menuToggle.innerHTML = '☰';
            }
        });
    }
});

