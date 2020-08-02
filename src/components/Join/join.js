import React, {Component} from 'react';
import {Container, Col, Row} from 'reactstrap'
import classes from './join.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitter, faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons'

class Join extends Component {
    render() {
        return(
            <div id="join" className={classes.join}>
               <h2>SUMATE A NUESTRA PEÑA</h2> 
                <Container fluid>
                    <Row>
                      <Col sm="12">
                        <h3>Si querés formar parte de nuestra peña, contactanos por redes sociales, ¡y te contamos como hacer para formar parte!</h3>
                        <div className="rrss">
                            <a target="_blank" rel="noopener noreferrer" href="https://www.facebook.com/americaesdeboca"><FontAwesomeIcon size='3x'icon={faFacebook}/></a>
                            <a target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/penaamericaesdeboca/"><FontAwesomeIcon size='3x'icon={faInstagram}/></a>
                        </div>
                      </Col>
                    </Row>
                </Container>
            </div>
        )
    }
}
export default Join;