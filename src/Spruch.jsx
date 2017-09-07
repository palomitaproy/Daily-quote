import React from 'react';
import axios from 'axios';

class  Spruch extends React.Component {
  constructor(props) {
    super(props);
 
    this.state = {
      posts: []
    };
  }

  componentDidMount() {

    axios.get(`https://taeglicheszit.at/zitat-api.php?format=json`)
     .then(response => {
      
        const posts = response.data.zitat;
        this.setState({ posts });
    
  })
  .catch(function (error) {
    console.log(error);
  });

}

  render() {
    return (
      <div>
        <h1>{`${this.state.posts}`}</h1>
        
      </div>
    );
  }
}

export default Spruch;