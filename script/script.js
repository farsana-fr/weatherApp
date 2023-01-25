function constructFetch() {
  storedLoc = loctn.value;
  console.log(storedLoc);
  fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${storedLoc}&appid=5b4bee0ba241d092159faf007e166080`
  )
    .then((e) => e.json())
    .then((e) => displayData(e));
}
function displayData(data) {
  place = data.name;
  icon = data.weather[0].icon;

  condtn = data.weather[0].main;
  feelsLike = data.main.feels_like;
  temp = data.main.temp;
  wind = data.wind.speed;
  humid = data.main.humidity;
  visible = data.visibility;
  pressure = data.main.pressure;
  console.log(visible, pressure);
  temp = Math.round(temp - 273.15);
  feelsLike = Math.round(feelsLike - 273.15);
  console.log(typeof condtn);

  var vid = document.getElementById("myVideo");
  vid.playbackRate = 0.5;
  html = `
     <div class="center mt-4">
             <h1 class="text-center">${place}</h1>
         </div>
         <div class="today container border text-center rounded-5 p-3 mt-2">
         <img src="http://openweathermap.org/img/wn/${icon}@4x.png" alt="showWeather" class="w-25">
             <h1 class=" mt-3 fs-1 fw-bold">${temp}<sup>°C</sup><h6 class=" mt-5 fs-4">${condtn}</h6><h6 class="">Feels Like ${feelsLike}<sup>°C</sup></h6></h1>
             <div class="row mt-5">
                 <h6 class="col-lg-3 col-md-3 col-sm-3"><i class="fa-solid fa-wind ms-2 me-1"></i>WIND :${wind}kmph</h6>
                 <h6 class="col-lg-3 col-md-3 col-sm-3"><i class="fa-solid fa-droplet me-1"></i>HUMIDITY : ${humid}%</h6>
                 <h6 class="col-lg-3 col-md-3 col-sm-3"><i class="fa-solid fa-eye me-1"></i>VISIBILITY : ${
                   visible / 1000
                 }km</h6>
                 <h6 class="col-lg-3 col-md-3 col-sm-3"><i class="fa-solid fa-gauge-high me-1"></i>PRESSURE : ${pressure}hPa</h6>
             </div>
         </div>
     `;

  resultData.innerHTML = html;
  if (temp > 30) {
    document.querySelector(".today").style.backgroundImage =
      "linear-gradient(rgba(241, 101, 20,0.8), rgba(245, 229, 10,0.7))";
  }
}
