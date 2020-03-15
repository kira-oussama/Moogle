import React, { Component } from 'react';
import 'materialize-css/dist/js/materialize';
import './../app.css';
import axios from 'axios';
import Profile from './Profile'
import Tracks from './Tracks';

class Searchbox extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             value: '',
             response : null,
             isseaching : false
        }
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange = (event) =>{
        this.setState({
            value : event.target.value
        })
    }   
       
    render() {

        const search = (event) =>{
            this.setState({
                isseaching : true
            })
            event.preventDefault();
            axios.get(`https://deezerdevs-deezer.p.rapidapi.com/search?q=${this.state.value}`,{
                "method": "GET",
                "headers": {"x-rapidapi-host": "deezerdevs-deezer.p.rapidapi.com",
                            "x-rapidapi-key": "0368c42caemsh556d4e8c5c158d9p18e486jsn01ed5db22a6b" }
            })
            .then(response => {
                this.setState({response , isseaching : false});
            })
        }

        return (
            <div>
                <form>
                    <div className="input-field">
                        <input type="text" className='validate' id="asearch" value={this.state.value} onChange={this.handleChange} />
                        <label htmlFor="asearch">Artist</label>
                        <button className='btn large' onClick={search.bind(this)}>Search</button>
                    </div>
                </form>
                <Profile response={this.state.response} />
                <Tracks response={this.state.response} />
            </div>
        )
    }
}

export default Searchbox;
