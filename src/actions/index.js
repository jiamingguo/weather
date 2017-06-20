import axios from 'axios';

const API_KEY = 'bee052e9f576c3e481b49a479aca037f';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export const FETCH_WEATHER = 'FETCH_WEATHER';

// use AXIOS to make AJAX request. Pretty identical to JQuery
export function fetchWeather(city){
    const url = `${ROOT_URL}&q=${city},us`;
    const request = axios.get(url);

    // debug
    console.log('Request:', request);

    // return the 'promise'
    // the redux-promise middleware will notice this payload as a 'promise' before sent to reducer
    // So the middleware will un-wrap the request, take out the object, then create a same action and send it to reducer
    // except the request (promise) is changed(unwrapped) to objects
    return {
        type: FETCH_WEATHER,
        payload: request
    };
}