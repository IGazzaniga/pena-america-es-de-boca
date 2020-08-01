import React, {Component} from 'react';
import classes from './footer.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMapMarkerAlt, faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faTwitter, faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons'
import {Col, Container, Row} from 'reactstrap'


class Footer extends Component {
    render() {
        return(
            <footer className={classes.footer}>
                <Container fluid={true}>
                <Row>
                  <Col sm="12" md="4">
                    <img src={require('../../assets/escudo-footer.png')} alt="Logo Peña"/>
                    <p>Toda la pasión xeneize en América.</p>
                  </Col>
                  <Col sm="12" md="4">
                      <div>
                        <h6 className={classes.whereTitle}>Dónde encontrarnos</h6>
                        <hr></hr>
                        <div className={classes.iconList}>
                            <a href="https://goo.gl/maps/aGAeY2p4oBQERqG5A"><p><FontAwesomeIcon icon={faMapMarkerAlt}/> Cte. Hillcoat 580, América, Bs.As, Argentina</p></a>
                            <a href="mailto:penaamericaesdeboca@gmail.com"><p><FontAwesomeIcon icon={faEnvelope}/> penaamericaesdeboca@gmail.com</p></a>
                        </div>
                      </div> 
                  </Col>
                  <Col sm="12" md="4">
                    <div>
                        <h6 className={classes.whereTitle}>Redes sociales</h6>
                        <hr></hr>
                        <div className={classes.iconList}>
                            <a href="https://www.facebook.com/americaesdeboca"><FontAwesomeIcon size='2x'icon={faFacebook}/></a>
                            <a href="https://www.instagram.com/penaamericaesdeboca/"><FontAwesomeIcon size='2x'icon={faInstagram}/></a>
                        </div>
                    </div> 
                  </Col>
                </Row>
                </Container>
            </footer>
        )
    }
}
export default Footer;