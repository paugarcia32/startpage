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

  

  
  fetch('https://api.openweathermap.org/data/2.5/weather?q=Barcelona,España&appid=dba306998ebe631bfd796148d0ff7a9b&units=metric')
  .then(function(response) {
    return response.json();
  })
  .then(function(data) {
    // Obtener la temperatura en grados Celsius
    var temperature = data.main.temp;

    // Actualizar el elemento HTML con la temperatura
    document.getElementById('weather').innerHTML = temperature + ' ºC';
  });