// visitor-counter.js
function initVisitorCounter() {
    // Crear el elemento del contador
    const counterDiv = document.createElement('div');
    counterDiv.className = 'visitor-counter';
    
    // Obtener el contador del localStorage
    let visitorCount = localStorage.getItem('visitorCount') || 0;
    
    // Incrementar solo si es una nueva sesión
    if (!sessionStorage.getItem('counted')) {
        visitorCount = Number(visitorCount) + 1;
        localStorage.setItem('visitorCount', visitorCount);
        sessionStorage.setItem('counted', 'true');
    }
    
    // Agregar el contenido del contador
    counterDiv.innerHTML = `
        <span class="visitor-icon">👥</span>
        <span>Visitantes: <span class="visitor-count">${visitorCount}</span></span>
    `;
    
    // Agregar el contador al documento
    document.body.appendChild(counterDiv);
}

// Inicializar el contador cuando se carga la página
document.addEventListener('DOMContentLoaded', initVisitorCounter);