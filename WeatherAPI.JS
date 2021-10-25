//time
function startTime(){
    var hours = document.getElementById("hours");
    var minutes = document.getElementById("minutes");
    var seconds = document.getElementById("seconds");


    var h = new Date().getHours();
    var m = new Date().getMinutes();
    var s = new Date().getSeconds();

    hours.innerHTML = h+":";
    minutes.innerHTML = m+":";
    seconds.innerHTML = s;

    if(h<10){
        h="0"+h;
    }
    if(m<10){
        minutes.innerHTML="0"+minutes.innerHTML
    }
    if(s<10){
        seconds.innerHTML="0"+seconds.innerHTML
    }
}

var interval = setInterval(startTime,500);


//call weather API for today's weather info for lehi UT
//the below key is not valid, for display/practice only

try{
  fetch("https://api.weatherapi.com/v1/forecast.json?key=9642c3d9394a4d6a834211240210307&q=84043&days=1&aqi=no&alerts=no")  //API call for Lehi UT
      .then(res => res.json())
      .then((data) => {
            console.log(data);
            todayDate.innerHTML = (data.forecast.forecastday[0].date); //today's date
            cityName.innerHTML = (data.location.name); //Lehi
            regionName.innerHTML = (data.location.region); //Utah
            currentTemp.innerHTML = (data.current.temp_f).toFixed(); //current temp F
            minTemp.innerHTML = (data.forecast.forecastday[0].day.mintemp_f).toFixed(); //daily low F
            maxTemp.innerHTML = (data.forecast.forecastday[0].day.maxtemp_f).toFixed(); //daily high F
            description.innerHTML = (data.current.condition.text); //description of weather
     

//event listener for toggle F to C on hover//
      maxTemp.addEventListener('mouseover', function(){
          maxTemp.innerHTML = (data.forecast.forecastday[0].day.maxtemp_c).toFixed(); //daily high C
          maxDegree.innerHTML = "&#8451;";
      });
      maxTemp.addEventListener('mouseout', function(){
          maxTemp.innerHTML = (data.forecast.forecastday[0].day.maxtemp_f).toFixed(); //daily high back to F
          maxDegree.innerHTML = "&#8457;";
      });
      minTemp.addEventListener('mouseover', function(){
          minTemp.innerHTML = (data.forecast.forecastday[0].day.mintemp_c).toFixed(); //daily low C
          minDegree.innerHTML = "&#8451;";
      });
      minTemp.addEventListener('mouseout', function(){
          minTemp.innerHTML = (data.forecast.forecastday[0].day.mintemp_f).toFixed(); //daily low back to F
          minDegree.innerHTML = "&#8457;";
      });
      currentTemp.addEventListener('mouseover', function(){
          currentTemp.innerHTML = (data.current.temp_c).toFixed(); //current C
          currentDegree.innerHTML = "&#8451;";
      });
      currentTemp.addEventListener('mouseout', function(){
          currentTemp.innerHTML = (data.current.temp_f).toFixed(); //current back to F
          currentDegree.innerHTML = "&#8457;";
      });            

  
   // TODO: functionality for weather icon generation in JS
    
//weather icon options:
const iconArray = [
    {
        name: 'ClearNight',
        img: 'https://i.postimg.cc/PJTtpQwx/Clear-Night.jpg'
    },

    {
        name: 'Cloudy',
        img: 'https://i.postimg.cc/ydF18bWt/Cloudy.jpg'
    },

    {
        name: 'Fog',
        img: 'https://i.postimg.cc/zDFDm6sR/Fog.jpg'
    },

    {
        name: 'Hail',
        img: 'https://i.postimg.cc/X72VqF7j/Hail.jpg'
    },

    {
        name: 'LightRain',
        img: 'https://i.postimg.cc/YCZMfHWT/Light-Rain.jpg'
    },

    {
        name: 'PartlyCloudyDay',
        img: 'https://i.postimg.cc/T3pTDwpr/Partly-Cloudy-Day.jpg'
    },

    {
        name: 'PartlyCloudyNight',
        img: 'https://i.postimg.cc/qqwp86sG/Partly-Cloudy-Night.jpg'
    },

    {
        name: 'PlaceHolder',
        img: 'https://i.postimg.cc/qMBJpQrD/Place-Holder.jpg'
    },

    {
        name: 'ScatteredShowerDay',
        img: 'https://i.postimg.cc/MGBx9F0H/Scattered-Shower-Day.jpg'
    },

    {
        name: 'ScatteredShowerNight',
        img: 'https://i.postimg.cc/QtkD3Kyr/Scattered-Shower-Night.jpg'
    },

    {
        name: 'Snow',
        img: 'https://i.postimg.cc/zB1N6Fpj/Snow.jpg'
    },

    {
        name: 'SunnyClearDay',
        img: 'https://i.postimg.cc/L59p64cg/Sunny-Clear-Day.jpg'
    },

    {
        name: 'ThunderNoRain',
        img: 'https://i.postimg.cc/fy8h3ns2/Thunder-No-Rain.jpg'
    },

    {
        name: 'ThunderShower',
        img: 'https://i.postimg.cc/59gJKvzB/Thunder-Shower.jpg'
    },

    {
        name: 'Windy',
        img: 'https://i.postimg.cc/c4JSpH7V/Windy.jpg'
    }
    ];

    //TODO: functionality for geolocation look up for weather.
    
})
}

catch(err) {
    console.log("Unable to load weather details.")
  }