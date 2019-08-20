import React, {useState} from 'react';



const Jumbotron = (prop) => {

      return (
      <div className="Jumbotron-down jumbotron"
      style={{backgroundImage: `url('${prop.img}')` }}>
        <div className="container">
            <div className="row">
                <div className="col-xl-7 mx-auto jtext">
                Let Kids Explore


                  

              


                  
          </div>
          </div>
        </div>
        </div>
      
    )
  }



export default Jumbotron;