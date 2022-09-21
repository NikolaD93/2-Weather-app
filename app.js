const locationTimezone = document.querySelector('.location-timezone');
const icon = document.querySelector('.icon');
const tempDegree = document.querySelector('.temp-degree');
const description = document.querySelector('.description');


window.addEventListener('load', () => {
    let long;
    let lat;

    if(navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(position => {
            long = position.coords.longitude;
            lat = position.coords.latitude;
            
     
            const API_KEY = `54d0dbead67c591b044a0e38a55f576a`;
            
            const api = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&units=metric&appid=${API_KEY}`;


            fetch(api)
             .then(response => {
                return response.json();
             })
             .then(data => {
                console.log(data);
                let currentIcon = data.weather[0].icon;
                locationTimezone.innerHTML = 'Location : ' + data.sys.country + ' / ' + data.name;
                icon.src = `http://openweathermap.org/img/wn/${currentIcon}@2x.png`;
                tempDegree.innerHTML = 'Temperature : ' + Math.floor( data.main.temp) + ' &#8451;';
                description.innerHTML = 'Weather condition : ' + data.weather[0].description;
                            
                
             })
        })

    } else {
        alert('Please enable your location!')
    }
});


