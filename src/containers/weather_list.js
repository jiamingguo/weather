/**
 * Created by gjm19_000 on 6/25/2017.
 */
import React, {Component} from 'react';
import { connect } from 'react-redux';


export default class WeatherList extends Component {
    render(){
        return (
            <table className="table table-hover">
                <thread>
                    <tr>
                        <th>City</th>
                        <th>Temperature</th>
                        <th>Pressure</th>
                        <th>Humidity</th>
                    </tr>

                </thread>
                <tbody>


                </tbody>
            </table>


        )

    }

}

// this is same as passing 'state' to this function and return {weather: state.weather}
// pass {weather} is same as 'const weather = state.weather'
// return {weather} is same as return {weather: weather} because both key and value have the same name
function mapStateToProps( {weather} ){
    return {weather};
}
