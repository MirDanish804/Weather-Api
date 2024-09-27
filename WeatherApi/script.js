function weatherApp() {
  let userInput = document.getElementById('userInput').value.trim();
  let resultWeather = document.querySelector('.result-weather');
  let icon = document.getElementById('icon');


  resultWeather.classList.remove('show');
  icon.style.display = 'none';

  axios.get(`http://api.weatherapi.com/v1/current.json?key=702ba59b34324984a5e101927223112&q=${userInput}`)
  .then(function (response) {
      let data = response.data;

      document.getElementById('temp-c').innerHTML = `${data.current.temp_c}°C`;
      document.getElementById('temp-f').innerHTML = `${data.current.temp_f}°F`;
      document.getElementById('humidity').innerHTML = `Humidity: ${data.current.humidity}%`;
      document.getElementById('wind-dir').innerHTML = `Wind Dir: ${data.current.wind_dir}`;
      document.getElementById('wind-speed').innerHTML = `Wind Speed: ${data.current.wind_kph} kph`;
      document.getElementById('pressure').innerHTML = `Pressure: ${data.current.pressure_in} in`;
      document.getElementById('precipitation').innerHTML = `Precipitation: ${data.current.precip_in} in`;
      document.getElementById('condition').innerHTML = data.current.condition.text;
      document.getElementById('country').innerHTML = data.location.country;
      document.getElementById('name').innerHTML = data.location.name;
      document.getElementById('region').innerHTML = data.location.region;
      document.getElementById('icon').src = `https:${data.current.condition.icon}`;
      icon.style.display = 'block';

    
      resultWeather.classList.add('show');
  })
  .catch(function (error) {
      console.log(error);
      alert("Unable to retrieve weather data. Please check your input.");
      loading.style.display = 'none';
  });
}
