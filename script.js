document.addEventListener('DOMContentLoaded', function() {
    const infoBtn = document.getElementById('info-btn');
    const infoBox = document.getElementById('info-box');

    infoBtn.addEventListener('click', function(event) {
        // Detiene la propagación del evento para evitar que otros listeners se activen.
        // En este caso, previene que un posible clic en el contenedor interfiera.
        event.stopPropagation(); 
        
        // Alterna la clase 'show' para mostrar u ocultar el cuadro de información.
        // La animación es manejada puramente por CSS.
        infoBox.classList.toggle('show');
    });
});
