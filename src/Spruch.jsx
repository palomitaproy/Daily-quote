import React from 'react';
//import axios from 'axios';

class  Spruch extends React.Component {
  constructor(props) {
    super(props);
 
    this.state = {
      existenQuote: []
    };
  }

  componentDidMount() {
  let data = require('./proverbs.json')
  let r_quote = Math.floor(Math.random() * (data.length )) + 1;

  let quote = data[r_quote].quote;
  let author = data[r_quote].author;
 
  let date = new Date();
  let day = date.getDate();


  var object= {'quote':quote,'author':author,'day':day}
  var existenQuote=JSON.parse(localStorage.getItem('quote'))

  if(existenQuote == null || day !== existenQuote["day"]){

  localStorage.setItem('quote',JSON.stringify(object));
   var existenQuote= object;

  }
 


console.log(existenQuote);

  this.setState({existenQuote});


}

  render() {

    let existenQuote=this.state.existenQuote;
    return (
      <div>
        <h2>{existenQuote["quote"]}</h2>
         <h2>{existenQuote["author"]}</h2>
      </div>
    );
  }
}

export default Spruch;

 /* axios.get(`https://taeglicheszit.at/zitat-api.php?format=json`)
     .then(response => {
      
        const posts = response.data.zitat;
        this.setState({ posts });
      })
  .catch(function (error) {
    console.log(error);
  });*/