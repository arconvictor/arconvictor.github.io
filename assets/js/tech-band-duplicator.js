document.addEventListener('DOMContentLoaded', function() {
    
    const totalCopies = 3;
    
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
    }
});