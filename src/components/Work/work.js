import React, {Component} from 'react';
import {
  UncontrolledCarousel,
  Container,
  Col,
  Row
} from 'reactstrap'
import classes from './work.module.css'
const items = [
  {
    src: require("../../assets/chango-solidario.jpg"),
    altText: 'Slide 1',
    key: '1'
  },
  {
    src: require("../../assets/chango-solidario-1.jpg"),
    altText: 'Slide 2',
    key: '2'
  },
  {
    src: require("../../assets/chango-solidario-2.jpg"),
    altText: 'Slide 3',
    key: '3'
  },
  {
    src: require("../../assets/chango-solidario-3.jpg"),
    altText: 'Slide 4',
    key: '4'
  },
  {
    src: require("../../assets/chango-solidario-4.jpg"),
    altText: 'Slide 5',
    key: '5'
  },
  {
    src: require("../../assets/colecta-escuela-6.jpg"),
    altText: 'Slide 6',
    key: '6'
  },
  {
    src: require("../../assets/colecta-escuela-6-2.jpg"),
    altText: 'Slide 7',
    key: '7'
  },
  {
    src: require("../../assets/colecta-escuela-6-3.jpg"),
    altText: 'Slide 8',
    key: '8'
  }
];
class Work extends Component {
    render() {
        return(
            <div id="work" className={classes.work}>
               <h2>Trabajo social</h2> 
                <Container>
                    <Row>
                      <Col lg="12">
                        <p>
                          En Argentina, los clubes cumplen un importantísimo rol social, y Boca, al ser el club más grande del país,
                          no está excento de ello. Es por eso que, a través de sus peñas, filiales y consulados, 
                          este rol se extiende a todo el territorio nacional e internacional. 
                        </p>
                        <p>
                          Desde nuestra Peña, acompañados y apoyados por el Departamento de Interior y Exterior del Club,
                          desarrollamos actividades cuyo fin es ayudar a toda la comunidad de nuestro distrito. En nuestro caso,
                          llevamos realizadas 2 colectas de alimentos para instituciones educativas de la ciudad cabecera, así como también
                          para escuelas rurales de otras localidades del partido de Rivadavia.
                        </p>
                        <p>
                          Gracias a la gran difusión y al enorme sentido solidario de la comunidad, las campañas tuvieron una gran adhesión,
                          permitiéndonos así ayudar a muchos niños y niñas que lo necesitaban.
                        </p>
                        <UncontrolledCarousel className={classes.images} items={items}/>
                      </Col>
                    </Row>
                </Container>
            </div>
        )
    }
}
export default Work;