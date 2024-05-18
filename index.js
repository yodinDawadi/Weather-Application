const apiKey="dda4885ba2806523d5a6c0ff28b81e46";
const apiUrl="https://api.openweathermap.org/data/2.5/weather?units=metric";
let cityName = document.querySelector(".p2");
let btn = document.querySelector("#searchimg");
let srch= document.querySelector("#srch");
let tmpindx= document.querySelector(".p1");
let humi = document.querySelector("#humi");
let wind = document.querySelector("#wind");
let imgHumi =document.querySelector("#imghumi");
let imgWind =document.querySelector("#imgwind");
let wthImg = document.querySelector(".wthimg");

const checkTemp=async()=>{
    const response = await fetch(apiUrl+`&q=${srch.value}`+`&appid=${apiKey}`);
    const data = await response.json();
    console.log(data);
    console.log(data.weather[0].main);
    getData(data);
}

const getData= async(data)=>{
    cityName.innerHTML=await data.name
    tmpindx.innerHTML=Math.floor(data.main.temp)+"°C";
    humi.innerHTML =await `Humidity: ${data.main.humidity}%`;
    wind.innerHTML =await `Wind: ${data.wind.speed} Km/h`;
        imgHumi.style.display ="block";
        imgWind.style.display ="block";

        if(data.weather[0].main=="Clear"){
            wthImg.src ="images/clear.png"
            wthImg.style.display="block";
        }
        else if(data.weather[0].main=="Clouds"){
            wthImg.src ="images/clouds.png"
            wthImg.style.display="block";
        }
        else if(data.weather[0].main=="Rain"){
            wthImg.src ="images/rain.png"
            wthImg.style.display="block";
        }
        else if(data.weather[0].main=="Drizzle"){
            wthImg.src ="images/drizzle.png"
            wthImg.style.display="block";
        }
        else if(data.weather[0].main=="Snow"){
            wthImg.src ="images/snow.png"
            wthImg.style.display="block";
        }
        else if(data.weather[0].main=="Mist"){
            wthImg.src ="images/mist.png"
            wthImg.style.display="block";
        }
}

btn.addEventListener("click",()=>{
    checkTemp();
   

});


