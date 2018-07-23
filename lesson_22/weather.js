export default class WeatherApi {
    constructor () {
        this.my_api_key = "";
        this.city = document.getElementById("city");
        this.country = document.getElementById("country");
        this.clouds = document.getElementById("clouds");
        this.temp = document.getElementById("temp");
    }

    getOpenWeather(city) {
        if (this.cache[city]) {
            if (Date.now() - this.cache[city].timestamp < 1000 * 60 * 10) {
            return Promise.resolve(cache[city].data);
        } else {
            cache[city] = null;
            localStorage.setItem('cache', JSON.stringify(cache));
        }
    }
        return fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${this.my_api_key}`)
        .then(resolve => {
            if(resolve.status === 200) {
                return resolve.json();
            } else {
               throw new Error('error');
          }
      })
      .then((data) => {
          cache[city] = {
              timestamp: Date.now(),
              data,
          }
      })
      setOpenWeather(data) {
        this.kTemp = data.main.temp;
        this.city.innerHTML = data.name;
        this.country.innerHTML = data.sys.country;
        this.clouds.innerHTML = data.weather[0].description;
        this.temp.innerHTML = (this.kTemp-273.15).toFixed(0);       
    }
