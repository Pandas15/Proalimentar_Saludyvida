// countdown.js
function crearContador(fechaLimite) {
    const contenedor = document.createElement('div');
    contenedor.className = 'countdown-container';
    
    contenedor.innerHTML = `
        <h3>Tiempo restante para postularse:</h3>
        <div class="countdown-timer">
            <div class="time-unit">
                <div class="time-number" id="dias">00</div>
                <div class="time-label">Días</div>
            </div>
            <div class="time-unit">
                <div class="time-number" id="horas">00</div>
                <div class="time-label">Horas</div>
            </div>
            <div class="time-unit">
                <div class="time-number" id="minutos">00</div>
                <div class="time-label">Minutos</div>
            </div>
            <div class="time-unit">
                <div class="time-number" id="segundos">00</div>
                <div class="time-label">Segundos</div>
            </div>
        </div>
        <div class="convocatoria-finalizada" id="finalizado">
            ¡La convocatoria ha finalizado!
        </div>
    `;

    const timer = contenedor.querySelector('.countdown-timer');
    const mensajeFinal = contenedor.querySelector('#finalizado');

    function actualizarContador() {
        const ahora = new Date().getTime();
        const diferencia = fechaLimite - ahora;

        if (diferencia > 0) {
            timer.style.display = 'flex';
            mensajeFinal.style.display = 'none';
            
            const dias = Math.floor(diferencia / (1000 * 60 * 60 * 24));
            const horas = Math.floor((diferencia % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutos = Math.floor((diferencia % (1000 * 60 * 60)) / (1000 * 60));
            const segundos = Math.floor((diferencia % (1000 * 60)) / 1000);

            contenedor.querySelector('#dias').textContent = dias.toString().padStart(2, '0');
            contenedor.querySelector('#horas').textContent = horas.toString().padStart(2, '0');
            contenedor.querySelector('#minutos').textContent = minutos.toString().padStart(2, '0');
            contenedor.querySelector('#segundos').textContent = segundos.toString().padStart(2, '0');
        } else {
            timer.style.display = 'none';
            mensajeFinal.style.display = 'block';
            clearInterval(intervalo);
        }
    }

    const intervalo = setInterval(actualizarContador, 1000);
    actualizarContador(); // Ejecutar inmediatamente

    return contenedor;
}
