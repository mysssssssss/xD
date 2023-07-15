document.addEventListener('DOMContentLoaded', function() {
    var dateElement = document.getElementById('date');
    var timeElement = document.getElementById('time');
    var rsvpButton = document.getElementById('rsvpButton');

    // Obtener la fecha y hora actual
    var currentDate = new Date();

    // Formatear la fecha y hora como cadena legible
    var formattedDate = formatDate(currentDate);
    var formattedTime = formatTime(currentDate);

    // Mostrar la fecha y hora en la página
    dateElement.textContent = formattedDate;
    timeElement.textContent = formattedTime;

    // Manejar el evento de clic del botón de confirmación de asistencia
    rsvpButton.addEventListener('click', function() {
        alert('¡Gracias por confirmar tu asistencia!');
    });

    // Función para formatear la fecha como DD/MM/AAAA
    function formatDate(date) {
        var day = date.getDate();
        var month = date.getMonth() + 1;
        var year = date.getFullYear();

        return day + '/' + month + '/' + year;
    }

    // Función para formatear la hora como HH:MM AM/PM
    function formatTime(date) {
        var hours = date.getHours();
        var minutes = date.getMinutes();
        var ampm = hours >= 12 ? 'PM' : 'AM';

        hours = hours % 12;
        hours = hours ? hours : 12;
        minutes = minutes < 10 ? '0' + minutes : minutes;

        return hours + ':' + minutes + ' ' + ampm;
    }
});
