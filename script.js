var userForm = $('#user-form')
var cityName = $("#city-name");
var weatherBtn = $('#button-addon2');
var inputValue = $(".searchInput");
var temp = $("#temp");
var humidity = $("#humidity");
var windSpeed = $("#wind-speed");
var uvIndex = $("#uv-index");
var day1Date = $("#day1-date")
var day1IMG = $("#day1-img");
var day1Temp = $("#day1-temp")
var day1Humid = $("#day1-humid")
var day2Date = $("#day2-date")
var day2IMG = $("#day2-img");
var day2Temp = $("#day2-temp")
var day2Humid = $("#day2-humid")
var day3Date = $("#day3-date")
var day3IMG = $("#day3-img");
var day3Temp = $("#day3-temp")
var day3Humid = $("#day3-humid")
var day4Date = $("#day4-date")
var day4IMG = $("#day4-img");
var day4Temp = $("#day4-temp")
var day4Humid = $("#day4-humid")
var day5Date = $("#day5-date")
var day5IMG = $("#day5-img");
var day5Temp = $("#day5-temp")
var day5Humid = $("#day5-humid")

// declare empty array for local storage
var citiesSearched = [];
// get search string
var querySubmit = function (event) {
    event.preventDefault();

    var searchCity = inputValue.val().trim();

    if (searchCity) {
        getWeather(searchCity);
        getTodayWeather(searchCity);

        inputValue.value = '';
    } else {
        alert('Please enter a valid city.')
    }
}

var getWeather = function (query) {
    var apiUrl = "https://api.openweathermap.org/data/2.5/forecast?q=" + query + "&units=imperial&appid=eb5223f28d4380631ba895c1f6de4c48";

    fetch(apiUrl).then(function (response) {
        if (response.ok) {
            console.log(response);
            response.json().then(function (data) {
                console.log(data);
                renderWeather(data);
            });
        } else {
            alert('Error: ' + response.statusText);
        }
    })
        .catch(function (error) {
            alert('Unable to connect to OpenweatherAPI')
        })
};

function renderWeather(weather) {
    console.log(weather)

    // Day 1 Weather
    day1Date.append(`<span>${weather.list[3].dt_txt.slice(0, 10)}</span>`);
    day1IMG.append(`<span>${weather.list[3].weather[0].icon}</span>`);
    day1Temp.append(`<span>${weather.list[3].main.temp}</span>`);
    day1Humid.append(`<span>${weather.list[3].main.humidity}</span>`);
    // Day 2 Weather
    day2Date.append(`<span>${weather.list[11].dt_txt.slice(0, 10)}</span>`);
    day2IMG.append(`<span>${weather.list[11].weather[0].icon}</span>`);
    day2Temp.append(`<span>${weather.list[11].main.temp}</span>`);
    day2Humid.append(`<span>${weather.list[11].main.humidity}</span>`);
    // Day 3 Weather
    day3Date.append(`<span>${weather.list[19].dt_txt.slice(0, 10)}</span>`);
    day3IMG.append(`<span>${weather.list[19].weather[0].icon}</span>`);
    day3Temp.append(`<span>${weather.list[19].main.temp}</span>`);
    day3Humid.append(`<span>${weather.list[19].main.humidity}</span>`);
    // Day 4 Weather
    day4Date.append(`<span>${weather.list[27].dt_txt.slice(0, 10)}</span>`);
    day4IMG.append(`<span>${weather.list[27].weather[0].icon}</span>`);
    day4Temp.append(`<span>${weather.list[27].main.temp}</span>`);
    day4Humid.append(`<span>${weather.list[27].main.humidity}</span>`);
    // Day 5 Weather
    day5Date.append(`<span>${weather.list[35].dt_txt.slice(0, 10)}</span>`);
    day5IMG.append(`<span>${weather.list[35].weather[0].icon}</span>`);
    day5Temp.append(`<span>${weather.list[35].main.temp}</span>`);
    day5Humid.append(`<span>${weather.list[35].main.humidity}</span>`);
}
userForm.on('submit', querySubmit);

var getTodayWeather = function (query) {
    var apiUrlToday = "https://api.openweathermap.org/data/2.5/weather?q=" + query + "&units=imperial&appid=eb5223f28d4380631ba895c1f6de4c48";

    fetch(apiUrlToday).then(function (response) {
        if (response.ok) {
            console.log(response);
            response.json().then(function (data) {
                console.log(data);
                renderTodayWeather(data);
            });
        } else {
            alert('Error: ' + response.statusText);
        }
    })
        .catch(function (error) {
            alert('Unable to connect to OpenweatherAPI')
        })
};

function renderTodayWeather(weather) {
    console.log(weather);
    cityName.append(`<span>${weather.name}</span>`);
    temp.append(`<span>${weather.main.temp}</span>`);
    humidity.append(`<span>${weather.main.humidity}</span>`);
    windSpeed.append(`<span>${weather.wind.speed}</span>`);
    // find UV INDEX - this might require a separate pull from API
    uvIndex.append(`<span>${weather.main.humidity}</span>`);
}















// ########################### SECOND ATTEMPT WITH CODE FROM VIDEO ########################################
// function renderWeather(weather) {
//     var nameVal = weather.name.val()
//     console.log(nameVal)
// }

// // Fetch weather data for city
// function fetchWeather(query) {
//     var url = "https:api.openweathermap.org/data/2.5/forecast?q=" + query + "&units=imperial&appid=eb5223f28d4380631ba895c1f6de4c48";

//     fetch(url)
//         .then(response => response.json())
//         .then(data => console.log(data));
// }

// fetchWeather();



// // ###################### FIRST ATTEMPT ##############################################
// weatherBtn.on("click", function () {
//     fetch('https:api.openweathermap.org/data/2.5/forecast?q=' + inputValue.val() + '&units=imperial&appid=eb5223f28d4380631ba895c1f6de4c48')
//         .then(response => response.json())
//         .then(data => console.log(data))
//         .then(data => {
//             var city = document.createElement("h2");
//             city.textContent = data.city.name.val();
//             cityName.append(city)
//         })
//         .catch(alert('this is wrong'))
// })

// function to dispurse weather information

// function populateWeather() {
//     var tempVal = data.list.main.temp
//     console.log(tempVal)
// }
// populateWeather()

// fetch('api.openweathermap.org/data/2.5/forecast?q=' + inputValue.value + '&appid = eb5223f28d4380631ba895c1f6de4c48')
//     .then(response => response.json())
//     .then(data => console.log(data))
//     .catch(err => alert("Wrong city name!"))