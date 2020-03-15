import React, { Component } from 'react';
import Moogle from './Moogle';
import './app.css';
import Searchbox from './Components/Searchbox';

class App extends Component {



    render() {
        return (
            <div className='center container'>
                <Moogle />
                <Searchbox />
            </div>
        )
    }
}

export default App
