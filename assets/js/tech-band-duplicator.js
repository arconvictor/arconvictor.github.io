document.addEventListener('DOMContentLoaded', function() {
    // 1. Define CUÁNTAS VECES quieres que se repita el contenido
    const totalCopies = 3; // Puedes cambiar 3 por 2 (duplicar) o 4 (cuadruplicar), etc.
    
    const originalList = document.getElementById('tech-list-original');
    
    if (originalList) {
        // Almacena el contenido HTML original (la primera copia)
        const originalContent = originalList.innerHTML;
        
        // Limpia el contenido para reconstruirlo con las repeticiones
        originalList.innerHTML = originalContent; // Asegura que la primera copia esté allí

        // 2. Ejecuta el bucle para agregar las copias adicionales
        // Comenzamos desde i=1 porque la copia original (i=0) ya está en el HTML
        for (let i = 1; i < totalCopies; i++) {
            originalList.innerHTML += originalContent;
        }

        // 3. Ajuste de Estilo CSS: Ajusta el ancho de la banda
        // Si duplicas (2), el ancho en CSS debe ser 200%.
        // Si triplicas (3), el ancho DEBE ser ajustado en CSS a 300%.
        // Si cuadruplicas (4), el ancho DEBE ser ajustado en CSS a 400%.
        
        // ¡Importante! También debes ajustar el transform: translateX(-X%) en tu CSS:
        // transform: translateX(-100% / totalCopies); 
        // Si es 3 copias, entonces transform: translateX(-33.333%);
        
        // Por la simplicidad de la animación continua, te recomiendo mantener
        // el número de copias entre 2 y 4, y hacer el ajuste en CSS.
    }
});