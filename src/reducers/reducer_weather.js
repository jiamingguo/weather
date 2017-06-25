/**
 * Created by gjm19_000 on 6/20/2017.
 */1
import { FETCH_WEATHER } from '../actions/index';

// here we want to store all weather data in an array
// so initial value of state is []
export default function (state = [], action ) {
    switch (action.type){
        case FETCH_WEATHER:
            // you can replace the state array with [ action.payload.data ]
            // or, you can add the new data to existing state, like below
            // return state.concat([action.payload.data]);
            // this is same as:
            return [action.payload.data, ...state];
    }
    return state;
}