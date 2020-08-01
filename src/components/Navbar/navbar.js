import React, {Component} from 'react';
import {Navbar, Nav, NavItem, Collapse, NavbarToggler} from 'reactstrap';
import Escudo from '../Escudo/escudo'
import classes from './navbar.module.css'
import { Link, animateScroll as scroll } from "react-scroll";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome } from '@fortawesome/free-solid-svg-icons';

class Menu extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isOpen: false
        }
    }
    toggle=() => {
        this.setState({
            isOpen: !this.state.isOpen
        })
    }

    render() {
        return (
            <Navbar className={classes.Navbar} expand='lg' fixed="top">
                <Link
                    to="home"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={700}
                    delay={500}>
                    <Escudo/>
                </Link>
                <NavbarToggler className={classes.NavbarToggler} onClick={this.toggle}/>
                <Collapse isOpen={this.state.isOpen} navbar>
                    <Nav className='ml-auto' navbar>
                        <NavItem>
                        <Link
                            className={classes.links}
                            to="home"
                            spy={true}
                            smooth={true}
                            offset={-70}
                            duration={700}
                            delay={500}>
                            <FontAwesomeIcon icon={faHome}/>
                        </Link>
                        </NavItem>
                        <NavItem>
                        <Link
                            className={classes.links}
                            to="nosotros"
                            spy={true}
                            smooth={true}
                            offset={-70}
                            duration={700}
                            delay={500}>
                            La peña
                        </Link>
                        </NavItem>

                        <NavItem>
                        <Link
                            className={classes.links}
                            to="work"
                            spy={true}
                            smooth={true}
                            offset={-70}
                            duration={700}
                            delay={500}>
                            Trabajo social
                        </Link>
                        </NavItem>
                        <NavItem>
                        <Link
                            className={classes.links}
                            to="join"
                            spy={true}
                            smooth={true}
                            offset={-70}
                            duration={700}
                            delay={500}>
                            Sumate
                        </Link>
                        </NavItem>
                    </Nav>
                </Collapse>
            </Navbar>
        )
    }
}
export default Menu;
