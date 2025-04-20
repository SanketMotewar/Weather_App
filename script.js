async function getWeather() {
    const city = document.getElementById("cityInput").value;
    const apiKey ="cab65fa1baec8fb460d2abf574d6d306"
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`

    try {
        const response = await fetch(url);
        if(!response.ok) throw new Error("City not found");
        const data = await response.json();
        const result = `
            <h2>${data.name}, ${data.sys.country}</h2> 
            <p><strong>Temperature : </strong> ${data.main.temp} degree</p> 
            <p><strong>Weather : </strong> ${data.weather[0].main}</p> 
            <p><strong>Wind : </strong> ${data.wind.speed} m/s</p> 
            <img src="https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png" alt="" />
        `
        ;
        document.getElementById("weatherResult").innerHTML = result;
    } catch (error) {
        document.getElementById("weatherResult").innerHTML = `<p style='color:red;'>${error.message}</p>`;
    }   
}   