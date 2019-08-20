import React from 'react';

const Testimony = (prop) => {
    return (
        <div className="Avatar">
            <img src={prop.img}/>
            <p className="title">{prop.title}</p>
            <p className="caption">{prop.caption}</p>
        </div>
    );
}



export default Testimony;