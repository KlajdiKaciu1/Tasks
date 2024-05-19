const weatherSources = [
    { source: 1, temperature: 30 },
    { source: 2, temperature: 25 },
    { source: 3, temperature: 27 },
    { source: 4, temperature: 28 }
];

function getWeatherFromSource1(sources) {
    return new Promise((resolve) => {
        setTimeout(() => {
            const weatherData = sources.find(weather => weather.source === 1);
            resolve(weatherData.temperature);
        }, 3000);
    });
}

function getWeatherFromSource2(sources) {
    return new Promise((resolve) => {
        setTimeout(() => {
            const weatherData = sources.find(weather => weather.source === 2);
            resolve(weatherData.temperature);
        }, 3000);
    });
}

function getWeatherFromSource3(sources) {
    return new Promise((resolve) => {
        setTimeout(() => {
            const weatherData = sources.find(weather => weather.source === 3);
            resolve(weatherData.temperature);
        }, 3000);
    });
}

function getWeatherFromSource4(sources) {
    return new Promise((resolve) => {
        setTimeout(() => {
            const weatherData = sources.find(weather => weather.source === 4);
            resolve(weatherData.temperature);
        }, 3000);
    });
}

function getAllWeatherData(temperatures) {
    const averageTemperature = temperatures.reduce((sum, currentValue) => sum + currentValue, 0) / temperatures.length;
    console.log('Average Temperature:', averageTemperature);
}

let temperatures = [];
getWeatherFromSource1(weatherSources)
    .then(temp1 => {
        temperatures.push(temp1);
        return getWeatherFromSource2(weatherSources);
    })
    .then(temp2 => {
        temperatures.push(temp2);
        return getWeatherFromSource3(weatherSources);
    })
    .then(temp3 => {
        temperatures.push(temp3);
        return getWeatherFromSource4(weatherSources);
    })
    .then(temp4 => {
        temperatures.push(temp4);
        getAllWeatherData(temperatures);
    });
