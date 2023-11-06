
const weather_icon=document.querySelector(".weather-icon");
const search_box=document.querySelector(".search input");
const search_button=document.querySelector(".search button");
async function weather_update(city){
    let url=`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=f98107120590c309309032c029200bbc`;
    let res=await fetch(url);
    let data=await res.json();
    console.log(data);
    if(res.status==404){
        document.querySelector(".invalid").classList.remove("deactive");
        document.querySelector(".weather").classList.add("deactive");

    }else{
        document.querySelector(".temp").innerHTML=Math.floor(data.main.temp)+"°C";
        document.querySelector(".city").innerHTML=data.name;
        document.querySelector(".humidity").innerHTML=data.main.humidity +"%";
        document.querySelector(".wind").innerHTML=data.wind.speed +"km/h";

        if(data.weather[0].main=="Cloud"){
            weather_icon.src="images/clouds.png"
        }else if(data.weather[0].main=="Clear"){
            weather_icon.src="images/clear.png"            
        }else if(data.weather[0].main=="Rain"){
            weather_icon.src="images/rain.png"
        }else if(data.weather[0].main=="Mist"){
            weather_icon.src="images/mist.png"
        }else if(data.weather[0].main=="Drizzle"){
            weather_icon.src="images/drizzle.png"
        }else if(data.weather[0].main=="Snow"){
            weather_icon.src="images/snow.png"
        }else{
            weather_icon.src="images/clouds.png"
        }
        document.querySelector(".invalid").classList.add("deactive");
        document.querySelector(".weather").classList.remove("deactive");
    }       

};

search_button.addEventListener("click",()=>weather_update(search_box.value));


