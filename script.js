var userForm = $('#user-form')
var cityName = $("#city-name");
var weatherBtn = $('#button-addon2');
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


// get search string
var querySubmit = function (event) {
    event.preventDefault();

    var searchCity = inputValue.val().trim();

    if (searchCity) {
        getWeather(searchCity);

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
    cityName.append(`<span>${weather.city.name}</span>`);
    console.log(test)
    // var city = cityName.createElement('span');
    // console.log(city)
    // city.textContent = weather.city.name;
    // cityName.append(city);
}




userForm.on('submit', querySubmit);









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