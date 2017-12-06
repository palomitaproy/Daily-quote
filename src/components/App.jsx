import React from "react";
import Spruch from "./Spruch.jsx";
import { Container, Row, Col } from "reactstrap";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import About from "./About.jsx";

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Container className="text-center">
        <Router>
          <Row>
            <Col sm={{ size: 6, push: 2, pull: 2, offset: 1 }}>
           <Route exact path="/" render={props => <Link to="/qoute">
                <h1 id="intro_text">Your daily quote</h1>
              </Link> } />


                <Route exact path="/qoute" render={props => <Spruch />} />
                <Route exact path="/about" render={props => <About />} />

            </Col>
          </Row>
        </Router>
      </Container>
    );
  }
}
export default App;
