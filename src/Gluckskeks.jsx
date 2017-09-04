import React from 'react';

class Gluckskeks extends React.Component {
  render() {

    return (
     <div className="card  cards"> 
       <img src="imgs/keks.png"/>
      <div className="card-body">
       <h4 className="card-title">Dein Glückskeksspruch des Tages</h4>
       <p className="card-text"> Mach Dir keine Sorgen darüber, dass die Menschen Dich nicht kennen, sondern darüber, 
         dass Du sie nicht kennst.</p>
       <p className="card-text"><small className="text-muted">(Konfuzius)</small></p>
     </div>
      
     </div>
    );
  }
}
export default Gluckskeks;