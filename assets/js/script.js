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



function copiarCodigo(elementoId, boton) {
    // 1. Obtiene el contenido del elemento por su ID.
    const codigoElemento = document.getElementById(elementoId);
    
    // 2. Obtiene el texto exacto (sin HTML).
    const textoACopiar = codigoElemento.innerText;

    // 3. Usa la API de Portapapeles (asíncrona).
    navigator.clipboard.writeText(textoACopiar)
        .then(() => {
            // Éxito: Cambiar el texto y estilo del botón
            const textoOriginal = boton.textContent;
            const colorOriginal = boton.style.backgroundColor;

            boton.textContent = '¡Copiado!';
            boton.style.backgroundColor = '#25D366'; // Verde WhatsApp

            // Vuelve al texto y color original después de 2 segundos
            setTimeout(() => {
                boton.textContent = textoOriginal;
                boton.style.backgroundColor = colorOriginal; // Vuelve al color azul
            }, 2000);

        })
        .catch(err => {
            // Fallo de copia (raro, pero sucede en algunos entornos de seguridad)
            console.error('Error al copiar: ', err);
            alert('Error: No se pudo copiar. Por favor, selecciona y copia manualmente.');
        });
}