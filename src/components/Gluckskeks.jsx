import React from 'react';
import Spruch from './Spruch.jsx';

class Gluckskeks extends React.Component {
constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
     this.state = { spruch: []};
  }

  handleClick(e) {
    e.preventDefault();
    console.log('The link was clicked.');
  }


  render() {

    return (
     <div  className="text-center keks" > 
        <h1>Dein Glückskeksspruch</h1>
       <img onClick={this.handleClick} src="imgs/keks.png"  className="img-fluid" alt="Glückskeks"/>
        
     </div>
    );
  }
}
//export default Gluckskeks;