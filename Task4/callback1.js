const weatherSources = [
    { source: 1, temperature: 30 },
    { source: 2, temperature: 25 },
    { source: 3, temperature: 27 },
    { source: 4, temperature: 28 }
];

function getWeatherFromSource1(sources, callback) {
    setTimeout(() => {
        const weatherData = sources.find(weather => weather.source === 1);
        callback(weatherData.temperature);
    }, 3000); 
}

function getWeatherFromSource2(sources, callback) {
    setTimeout(() => {
        const weatherData = sources.find(weather => weather.source === 2);
        callback(weatherData.temperature);
    }, 3000); 
}

function getWeatherFromSource3(sources, callback) {
    setTimeout(() => {
        const weatherData = sources.find(weather => weather.source === 3);
        callback(weatherData.temperature);
    }, 3000); 
}

function getWeatherFromSource4(sources, callback) {
    setTimeout(() => {
        const weatherData = sources.find(weather => weather.source === 4);  
        callback(weatherData.temperature);
    }, 3000); 
}

function getAllWeatherData(temp, temperatures) {
    temperatures.push(temp);
    if (temperatures.length === 4) {
        const averageTemperature = temperatures.reduce((sum, currentValue) => sum + currentValue,0) / temperatures.length;
        console.log('Average Temperature:', averageTemperature);
    }
}


    let temperatures = [];
    getWeatherFromSource1(weatherSources, (temp) => {
        getAllWeatherData(temp, temperatures);
    });
    getWeatherFromSource2(weatherSources, (temp) => {
        getAllWeatherData(temp, temperatures);
    });
    getWeatherFromSource3(weatherSources, (temp) => {
        getAllWeatherData(temp, temperatures);
    });
    getWeatherFromSource4(weatherSources, (temp) => {
        getAllWeatherData(temp, temperatures);
    });



