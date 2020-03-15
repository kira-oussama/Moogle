import React from 'react'

function Profile({response}) {
    var artistname = '';
    var artistimage = '';
    var className = '';

    if(response !== null){
        try {
            artistimage = response.data.data[0].artist.picture;
            artistname = response.data.data[0].artist.name;
            className = 'profile';    
        } catch (error) {
            artistname = 'Artist Not Found !'
        }
    }
    
    return (
        <div>
            <div className={className}>
                <img src={artistimage} alt=''/>
                <h3>{artistname}</h3>
            </div>
        </div>
    )
}

export default Profile
