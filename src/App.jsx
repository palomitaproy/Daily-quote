import React from 'react';
//import Footer from './Footer.jsx';
//import Nav from './Nav.jsx';

import Gluckskeks from './Gluckskeks.jsx';
import  Spruch from './Spruch.jsx';


class App extends React.Component {
 
  render() {
    return (
      <div>
        <Gluckskeks/>
        <Spruch subreddit="?format=json"/>
      </div>

      );
  }
}
export default App;
