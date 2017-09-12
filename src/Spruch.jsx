import React from "react";
import $ from "jquery";

class Spruch extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      existenQuote: []
    };
  }

  componentDidMount() {
    let data = require("./proverbs.json");
    let r_quote = Math.floor(Math.random() * data.length) + 1;

    let quote = data[r_quote].quote;
    let author = data[r_quote].author;

    let date = new Date();
    let day = date.getDate();

    var object = { quote: quote, author: author, day: day };
    var existenQuote = JSON.parse(localStorage.getItem("quote"));

    if (existenQuote == null || day !== existenQuote["day"]) {
      localStorage.setItem("quote", JSON.stringify(object));
      var existenQuote = object;
    }

    console.log(existenQuote);

    this.setState({ existenQuote });

    $("#intro_text").hide();
   $("blockquote").addClass("quote_animation")

  }

  render() {
    let existenQuote = this.state.existenQuote;
    return (
      
      <blockquote className="blockquote">
      <p className="quotation-mark opening">&ldquo;</p>
        <h2 className="quote">{existenQuote["quote"]}</h2>
        <p className="quotation-mark closing"> &rdquo;</p>
        <hr  />
        <p>{existenQuote["author"]}</p>
      </blockquote>
      
    );
  }
}

export default Spruch;
