const weatherSources=[
    {source: 1,temperature: 30},
    {source: 2, temperature: 25},
    {source: 3, temperature: 27},
    {source: 4,temperature:28}  
];

function getWeatherFromSource1(sources,callback)
{
    setTimeout(() => {
        const weatherData=sources.find(weather=>weather.source===1);
        callback(weatherData.temperature);
    }, 3000); 
}
function getWeatherFromSource2(sources,callback)
{
    setTimeout(() => {
        const weatherData=sources.find(weather=>weather.source===2);
        callback(weatherData.temperature);
    }, 3000); 
}
function getWeatherFromSource3(sources,callback)
{
    setTimeout(() => {
        const weatherData=sources.find(weather=>weather.source===3);
        callback(weatherData.temperature);
    }, 3000); 
}
function getWeatherFromSource4(sources,callback)
{
    setTimeout(() => {
        const weatherData=sources.find(weather=>weather.source===4);  
        callback(weatherData.temperature);
    }, 3000); 
}
function getAllWeatherData() {
    let temperatures = [];
    
    getWeatherFromSource1(weatherSources, (temp1) => {
        temperatures.push(temp1);
        getWeatherFromSource2(weatherSources, (temp2) => {
            temperatures.push(temp2);
            getWeatherFromSource3(weatherSources, (temp3) => {
                temperatures.push(temp3);
                getWeatherFromSource4(weatherSources, (temp4) => {
                    temperatures.push(temp4);
                    const averageTemperature = temperatures.reduce((sum, currentValue) => sum + currentValue,0) / temperatures.length;
                    console.log('Average Temperature:', averageTemperature);
                });
            });
        });
    });
}
getAllWeatherData();