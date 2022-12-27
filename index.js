/*
setInterval(function() {
    // Obtener la hora actual
    var date = new Date();
    var hours = date.getHours();
    var minutes = date.getMinutes();
    var seconds = date.getSeconds();
  
    // Formatear la hora como 00:00:00
    var formattedTime = `${hours}:${minutes}:${seconds}`;
  
    // Actualizar el elemento HTML con la hora formateada
    document.getElementById('clock').innerHTML = formattedTime;
  }, 200); // Actualizar cada 1000 milisegundos (cada segundo)
*/



// Obtener una referencia al elemento p con id "hora"
const horaElement = document.getElementById("clock");

// Actualizar el contenido del elemento p con la hora actual cada segundo
setInterval(function() {
  // Obtener la hora actual
  const horaActual = new Date();

  // Formatear la hora con dos dígitos y mostrarla en el elemento p
  horaElement.textContent = horaActual.toLocaleTimeString([], {hour: '2-digit', minute: '2-digit', second: '2-digit'});
}, 200);

  



  
  fetch('https://api.openweathermap.org/data/2.5/weather?q=Barcelona,España&appid=dba306998ebe631bfd796148d0ff7a9b&units=metric')
  .then(function(response) {
    return response.json();
  })
  .then(function(data) {
    // Obtener la temperatura en grados Celsius
    var temperature = data.main.temp;

    // Redondear la temperatura a un número entero
    temperature = Math.round(temperature);

    // Actualizar el elemento HTML con la temperatura
    document.getElementById('weather').innerHTML = temperature + ' ºC';
  });