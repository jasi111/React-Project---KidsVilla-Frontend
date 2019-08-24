
import React from 'react';
import jumbotron from 'react-bootstrap';


const Video = () => {

  return (
    <div className="Jumbotron" >
        
 <video className="main-video" loop="true" autoplay="true" muted="true"
        preload="true">
            <source src="videos/kidsvillavideo.mp4" type="video/mp4"/>
            </video>
    </div>
    
      
    )
  }



export default Video;