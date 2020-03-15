import React, { Component } from 'react';
import './../app.css';

class Tracks extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             song_url : '',
             audio : '',
             ispalying : false
        }
    }
    
    
    render() {
        

        let topten = [];
        let response = this.props.response;

        const playsong = (song_url) => {
            let song = new Audio(song_url);
            if(!this.state.ispalying){
                song.play();
                this.setState({
                    song_url,
                    audio : song ,
                    ispalying : true
                })
            }else if(this.state.song_url === song_url){
                this.state.audio.pause();
                this.setState({
                    ispalying: false
                })
            }else{
                this.state.audio.pause();
                song.play();
                this.setState({
                    ispalying:true,
                    audio : song,
                    song_url 
                })
            }
        }

        if(response !==null){
            for(let i=0 ; i<10 ; i++){
                topten.push(response.data.data[i]);
            }
        }

        return (
            <div className='row'>
               {
                   topten.map(item => {
                    if(item){
                        return (
                            <div key={item.rank} onClick={() => playsong(item.preview)}>
                                    <div className="col s12 m4">
                                        <div className="card">
                                            <div className="card-image">
                                                <img src={item.album.cover_medium} alt=""/>
                                                <span className="indigo-text">{item.title_short}</span>
                                            </div>
                                            <div className="playfield">
                                                <div className="playbutton">
                                                    &#9654;
                                                </div>
                                            </div>
                                            <div className="card-content">
                                                <p>Album Title : {item.album.title}</p>
                                                <p>Title : {item.title}</p>
                                                <p>Song Rank : {item.rank}</p>
                                            </div>
                                        </div>
                                    </div>
                            </div>
                        );
                    }else{
                        return(<h1>There is not tracks !!</h1>);
                    }
                        
                    })
               }
            </div>
        )
    }
}

export default Tracks
