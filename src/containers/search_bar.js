/**
 * Created by gjm19_000 on 6/20/2017.
 */
import React , { Component } from 'React';

export default class SearchBar extends Component {
    render(){
        return (
            <form className="input-group">
                <input />
                <span className="input-group-btn">
                    <button type="submit" className="btn btn-secondary">Submit</button>
                </span>
            </form>

        )

    }

}