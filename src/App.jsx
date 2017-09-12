import React from 'react';
import  Spruch from './Spruch.jsx';
var ReactDOM = require('react-dom');

class App extends React.Component {
 constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
    
  }

  handleClick() {
   ReactDOM.render(<Spruch />, document.getElementById('inhalt'));
    
  }

  render() {
    return (<div  className="text-center keks" > 
        <h1>Dein Glückskeksspruch</h1>
       <img onClick={this.handleClick} src="imgs/img2.jpg" 
        className="img-fluid" alt="Glückskeks"/>
       <h3 id="inhalt"></h3>
    
      </div>
      );
  }
}
export default App;
