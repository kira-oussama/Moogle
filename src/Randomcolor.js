import React from 'react';
import 'materialize-css/dist/css/materialize.min.css';

function Randomcolor(Wrappedcomponent) {

    const colorlist = ['blueviolet' , 'red' , 'indigo' , 'coral' , 'pink' , 'blue' , 'brown' , "black"];
    const randomcolor = colorlist[Math.floor(Math.random() * 8)];
    const className = `${randomcolor}-text`;

    return(props) =>{
        return (
            <div className={className}>
                <Wrappedcomponent {...props} />
            </div>
        );
    } 
}

export default Randomcolor;
