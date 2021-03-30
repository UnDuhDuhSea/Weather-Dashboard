var weatherIcon = $('weather-icon');
var searchInput = $('#search-input');
var pastCities = $('#past-cities');
var userForm = $('#user-form');
var cityName = $("#city-name");
var weatherBtn = $('#button-addon2');
var inputValue = $(".searchInput");
var temp = $("#temp");
var humidity = $("#humidity");
var windSpeed = $("#wind-speed");
var uvIndex = $("#uv-index");
var day1Date = $("#day1-date")
var day1IMG = $("#day1-img");
var day1Temp = $("#day1-temp");
var day1Humid = $("#day1-humid");
var day2Date = $("#day2-date");
var day2IMG = $("#day2-img");
var day2Temp = $("#day2-temp");
var day2Humid = $("#day2-humid");
var day3Date = $("#day3-date");
var day3IMG = $("#day3-img");
var day3Temp = $("#day3-temp");
var day3Humid = $("#day3-humid");
var day4Date = $("#day4-date");
var day4IMG = $("#day4-img");
var day4Temp = $("#day4-temp");
var day4Humid = $("#day4-humid");
var day5Date = $("#day5-date");
var day5IMG = $("#day5-img");
var day5Temp = $("#day5-temp");
var day5Humid = $("#day5-humid");

// declare empty array for local storage
var citiesSearched = [];

// #################### Local Storage ##########################
function renderCities() {
    pastCities.html("");
    // - clear out all li items in ul before rendering buttons
    for (var i = 0; i < citiesSearched.length; i++) {
        var city = citiesSearched[i];

        var li = document.createElement("button");
        li.textContent = city;

        li.setAttribute("data-index", i);

        // var button = document.createElement("button");
        // button.textContent = "Complete ✔️";
        pastCities.append(li);
        // pastiCities.li.addClass('list-group-item');
    }
}

function init() {
    // Get stored todos from localStorage
    var storedCities = JSON.parse(localStorage.getItem("cities"));

    // If todos were retrieved from localStorage, update the todos array to it
    if (storedCities !== null) {
        citiesSearched = storedCities;
    }

    // This is a helper function that will render todos to the DOM
    renderCities();
}

pastCities.on("click", (event) => {
    event.preventDefault();
    var cityButton = $(event.target).text()
    getWeather(cityButton);
    getTodayWeather(cityButton);
})

function saveLocalStorage(searchCity) {
    citiesSearched.push(searchCity);
    searchInput.val("");
    // console.log(citiesSearched)
    localStorage.setItem("cities", JSON.stringify(citiesSearched));
    renderCities();
}


// get search string
var querySubmit = function (event) {
    // function for clearing everything on the webpage. Possibly use something like .innerHTML = "";
    var searchCity = inputValue.val().trim();

    if (searchCity) {
        getWeather(searchCity);
        getTodayWeather(searchCity);
        saveLocalStorage(searchCity);
    } else {
        alert('Please enter a valid city.')
    }

}

var getWeather = function (query) {
    var apiUrl = "HTTPS://api.openweathermap.org/data/2.5/forecast?q=" + query + "&units=imperial&appid=eb5223f28d4380631ba895c1f6de4c48";

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

function createIcon(weather) {
    var iconUrl = `https://openweathermap.org/img/wn/${weather.list[3].weather[0].icon}.png`;
    var icon = document.createElement("img");
    icon.setAttribute("src", iconUrl);
    cityWeather.append(icon);
}

function renderWeather(weather) {
    console.log(weather)
    //Render icons
    // Day 1 Weather
    day1Date.html(`${weather.list[3].dt_txt.slice(0, 10)}`);
    day1IMG.html(`${weather.list[3].weather[0].icon}`);
    day1Temp.html(`Temp: ${weather.list[3].main.temp}`);
    day1Humid.html(`Humidity: ${weather.list[3].main.humidity}`);
    // Day 2 Weather
    day2Date.html(`${weather.list[11].dt_txt.slice(0, 10)}`);
    day2IMG.html(`${weather.list[11].weather[0].icon}`);
    day2Temp.html(`Temp: ${weather.list[11].main.temp}`);
    day2Humid.html(`Humidity: ${weather.list[11].main.humidity}`);
    // Day 3 Weather
    day3Date.html(`${weather.list[19].dt_txt.slice(0, 10)}`);
    day3IMG.html(`${weather.list[19].weather[0].icon}`);
    day3Temp.html(`Temp: ${weather.list[19].main.temp}`);
    day3Humid.html(`Humidity: ${weather.list[19].main.humidity}`);
    // Day 4 Weather
    day4Date.html(`${weather.list[27].dt_txt.slice(0, 10)}`);
    day4IMG.html(`${weather.list[27].weather[0].icon}`);
    day4Temp.html(`Temp: ${weather.list[27].main.temp}`);
    day4Humid.html(`Humidity: ${weather.list[27].main.humidity}`);
    // Day 5 Weather
    day5Date.html(`${weather.list[35].dt_txt.slice(0, 10)}`);
    day5IMG.html(`${weather.list[35].weather[0].icon}`);
    day5Temp.html(`Temp: ${weather.list[35].main.temp}`);
    day5Humid.html(`Humidity: ${weather.list[35].main.humidity}`);
}


var getTodayWeather = function (query) {
    var apiUrlToday = "HTTPS://api.openweathermap.org/data/2.5/weather?q=" + query + "&units=imperial&appid=eb5223f28d4380631ba895c1f6de4c48";

    fetch(apiUrlToday).then(function (response) {
        if (response.ok) {
            console.log(response);
            response.json().then(function (data) {
                // pull out of function if needed
                var apiUrlUvi = "https://api.openweathermap.org/data/2.5/onecall?lat=" + data.coord.lat + "&lon=" + data.coord.lon + "&exclude=daily,hourly,minutely&units=imperial&appid=eb5223f28d4380631ba895c1f6de4c48";

                fetch(apiUrlUvi).then(function (response) {
                    if (response.ok) {
                        console.log(response);
                        response.json().then(function (data) {
                            console.log(data);
                            renderUvi(data);
                        });
                    } else {
                        alert('Error: ' + response.statusText);
                    }
                })
                    .catch(function (error) {
                        alert('Unable to connect to OpenweatherAPI')
                    })
                console.log(data);
                // end of function
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

function renderUvi(data) {
    uvIndex.html('');
    uvIndex.html(`${data.current.uvi}`);
}

function renderTodayWeather(weather) {
    console.log(weather);
    cityName.html(`${weather.name}`);
    temp.html(`Temperature:: ${weather.main.temp}`);
    humidity.html(`Humidity: ${weather.main.humidity}`);
    windSpeed.html(`Wind Speed: ${weather.wind.speed}`);
    weatherIcon.html(`Testing: ${weather.weather[0].icon}`);
    console.log(weather.weather[0].icon);
    // find UV INDEX - this might require a separate pull from API  ---------------------------------------------

}


userForm.on('submit', function (event) {
    event.preventDefault();
    querySubmit();
});
init();


















// ############### UVI CALC
// function getLatAndLon(lat, lon) {

//     var lat1 = 
//     var lat2 = 
// }

// var getTodayWeather = function (query, lat, lon) {
// var apiUrlUvi = "https://api.openweathermap.org/data/2.5/onecall?lat=" + lat + "&lon=" + lon + "&exclude=hourly,daily,current,minutely,alerts&units=imperial&appid=eb5223f28d4380631ba895c1f6de4c48";

// fetch(apiUrlUvi).then(function (response) {
//     if (response.ok) {
//         console.log(response);
//         response.json().then(function (data) {
//             console.log(data);
//             renderTodayWeather(data);
//         });
//     } else {
//         alert('Error: ' + response.statusText);
//     }
// })
//     .catch(function (error) {
//         alert('Unable to connect to OpenweatherAPI')
//     })
// };















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