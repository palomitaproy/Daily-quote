import React from 'react';
import Footer from './Footer.jsx';
import Nav from './Nav.jsx';
import Gluckskeks from './Gluckskeks.jsx';

class App extends React.Component {
 
  render() {
    return (
      <div>
        <Nav/>
        <Gluckskeks/>
        <Footer/>
      </div>
      );
  }
}
export default App;
