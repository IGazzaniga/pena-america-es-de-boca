import React, {Component} from 'react';
import {Button, Container, Col, Row} from 'reactstrap'
import classes from './us.module.css'

class Us extends Component {
    render() {
        return(
            <div id="nosotros" className={classes.us}>
               <h2>La Peña</h2> 
                <Container>
                    <Row>
                      <Col sm="12" lg="6">
                        <img
                        transitionTime={1.0}
                        className="img-fluid"
                        containerStyles="smooth-container"
                        src={require('../../assets/escudo-1.png')}
                        alt="escudo-peña"/>
                      </Col>
                      <Col sm="12" lg="6">
                        <p>
                          Luego de varios años sin la presencia de una peña oficial de Boca Juniors en la localidad de América ni en el partido de Rivadavia,
                          a principios del año 2019, un grupo de hinchas comienza a organizarse para darle forma a la Peña que hoy en día se encuentra 
                          plenamente conformada.
                        </p>
                        <p>
                          A partir de dicho momento, más de 100 socios y socias activos y adherentes de Boca, deciden formar parte de la peña,
                          colaborando en las diferentes tareas que lleva adelante y alimentando la pasión xeneize en el rincón
                          noroeste de la provincia de Buenos Aires.
                        </p>

                      </Col>
                    </Row>
                </Container>
            </div>
        )
    }
}
export default Us;