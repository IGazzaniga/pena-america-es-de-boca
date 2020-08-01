import React, {Component} from 'react';
import {Button, Container, Jumbotron} from 'reactstrap'
import classes from './banner.module.css'
import { Link, animateScroll as scroll } from "react-scroll";


class Banner extends Component {
    render() {
        return(
            <div id="home">
              <Jumbotron className={classes.banner}>
                <Container>
                    <h1>Peña América es de Boca</h1>
                    <h2>Somos la única peña oficial de la ciudad, acercando toda la pasión xeneize a los bosteros del distrito.</h2>
                    <Button color="primary" size="lg">
                      <Link
                      to="nosotros"
                      spy={true}
                      smooth={true}
                      offset={-70}
                      duration={700}
                      delay={500}
                      >
                        Conocenos
                      </Link>
                    </Button>
                </Container>
              </Jumbotron>
            </div>
        )
    }
}
export default Banner;