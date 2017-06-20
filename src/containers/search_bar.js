/**
 * Created by gjm19_000 on 6/20/2017.
 */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import {bindActionCreators} from 'redux';
import { fetchWeather } from '../actions/index';

export default class SearchBar extends Component {
    constructor(props){
        super(props);

        this.state = {term: ''};

        // bind the 'this' in the 'onInputChange' function as this class
        // otherwise the 'this' in 'onInputChange' will refer to an unknown thing
        this.onInputChange = this.onInputChange.bind(this);
    }


    render(){
        return (
            <form onSubmit={this.onFormSubmit} className="input-group">
                <input
                    placeholder="Get a five-day forecast in your favorite cities"
                    className="form-control"
                    value={this.state.term}
                    onChange={this.onInputChange}
                />
                <span className="input-group-btn">
                    <button type="submit" className="btn btn-secondary">Submit</button>
                </span>
            </form>

        )

    }

    // all DOM event handler, say onChange, onHover... will all come with this 'event' param
    onInputChange(event){
        console.log(event.target.value);
        // remember to bind the context! otherwise 'this' will refer to unknown thing
        this.setState({term : event.target.value})
    }

    onFormSubmit(event){
        event.preventDefault();

        // go and fetch data
    }

}