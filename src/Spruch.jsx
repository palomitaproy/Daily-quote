import React from "react";
import $ from "jquery";
import ReactCSSTransitionGroup from "react-addons-css-transition-group";

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
    
  }

  render() {
    let existenQuote = this.state.existenQuote;
    return (
    <ReactCSSTransitionGroup
      transitionName="blockquote"
      transitionAppear={true}
      transitionAppearTimeout={500}
      transitionEnter={false}
      transitionLeave={true}>
        <blockquote className="blockquote">
          <p className="quotation-mark opening">&ldquo;</p>
          <h2 className="quote">{existenQuote["quote"]}</h2>
          <p className="quotation-mark closing"> &rdquo;</p>
          <hr />
          <p>{existenQuote["author"]}</p>
        </blockquote>
      </ReactCSSTransitionGroup>
    );
  }
}

export default Spruch;
