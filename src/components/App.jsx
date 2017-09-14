import React from "react";
import Spruch from "./Spruch.jsx";

//import $ from "jquery";

import { Container, Row, Col } from "reactstrap";

var ReactDOM = require("react-dom");


class App extends React.Component {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {

    ReactDOM.render(<Spruch />, document.getElementById("inhalt"));
  }

  render() {
    return (
      <Container className="text-center">
        <Row>
          <Col sm={{ size: 6, push: 2, pull: 2, offset: 1 }}>
            <h1 onClick={this.handleClick} id="intro_text" >
              click me to reveal your future
            </h1>
            <h2 id="inhalt" />
          </Col>
        </Row>

      </Container>
    );
  }
}
export default App;
