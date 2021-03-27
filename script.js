var weatherBtn = $('#button-addon2')
var inputValue = $(".searchInput");
var temp = $("#temperature");
var humidity = $("#humidity");
var windSpeed = $("#wind-speed");
var uvIndex = $("#uv-index");
var day1IMG = $("#day1-img");
var day1Temp = $("#day1-temp")
var day1Humid = $("#day1-humid")
var day1IMG = $("#day2-img");
var day1Temp = $("#day2-temp")
var day1Humid = $("#day2-humid")
var day1IMG = $("#day3-img");
var day1Temp = $("#day3-temp")
var day1Humid = $("#day3-humid")
var day1IMG = $("#day4-img");
var day1Temp = $("#day4-temp")
var day1Humid = $("#day4-humid")
var day1IMG = $("#day5-img");
var day1Temp = $("#day5-temp")
var day1Humid = $("#day5-humid")


weatherBtn.on("click", function () {
    fetch('http://api.openweathermap.org/data/2.5/forecast?q=' + inputValue.val() + '&appid=eb5223f28d4380631ba895c1f6de4c48')
        .then(response => response.json())
        .then(data => console.log(data))
        .then(data => populateWeather)
        .catch(err => alert("Wrong city name!"))
})

// function to dispurse weather information

function populateWeather() {
    var tempValue = 
}


// fetch('api.openweathermap.org/data/2.5/forecast?q=' + inputValue.value + '&appid = eb5223f28d4380631ba895c1f6de4c48')
//     .then(response => response.json())
//     .then(data => console.log(data))
//     .catch(err => alert("Wrong city name!"))