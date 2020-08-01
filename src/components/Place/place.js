/* eslint-disable no-use-before-define */

import React, {Component} from 'react';
import {
  UncontrolledCarousel,
  Container,
  Col,
  Row
} from 'reactstrap'
import classes from './place.module.css'

const items = [
    {
      src: require("../../assets/sede-1.jpg"),
      altText: 'Slide 1',
      key: '1'
    },
    {
      src: require("../../assets/sede-2.jpg"),
      altText: 'Slide 2',
      key: '2'
    },
    {
      src: require("../../assets/sede-3.jpg"),
      altText: 'Slide 3',
      key: '3'
    },
    {
      src: require("../../assets/sede-4.jpg"),
      altText: 'Slide 3',
      key: '3'
    }
  ];

class Place extends Component {

    render() {
        return(
            <div id="place" className={classes.place}>
               <h2>La sede</h2>
                <Container>
                    <Row>
                      <Col lg="12">
                        <p>
                          Desde junio de 2020, la Peña cuenta con un lugar físico que sirve de sede, en la calle Comandante Hillcoat 580 de la
                          ciudad de América, lugar al que los afiliados pueden acercarse para la realización de las distintas actividades.
                        </p>
                        <UncontrolledCarousel className={classes.images} items={items}/>
                      </Col>
                    </Row>
                </Container>
            </div>
        )
    }
}
export default Place;
