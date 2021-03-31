import React, {Component} from 'react';
import '../styles.scss';
import { Container, Row, Col, Button } from 'react-bootstrap';
import Logo from '../resources/images/logo.png';
import ImageLanding from '../resources/images/image_landing.png';

export default class Landing extends Component {
  render() {
    return (
      <div className="landing-page-container">
            <Container>
        <img src={Logo} className="logo-image" />
        <Button className="btn-default connect-btn">
          Connect
        </Button>
        <img src={ImageLanding} className="landing-image" />
        </Container>
      </div>

    )
  }
}
