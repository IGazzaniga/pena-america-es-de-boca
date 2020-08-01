import React, {Component} from 'react'


class Escudo extends Component {
    render(){
      return(
        <img style={{cursor: 'pointer'}} alt="Escudo peña" src={require('../../assets/escudo-navbar.png')}></img>
      )
    }
}

export default Escudo;