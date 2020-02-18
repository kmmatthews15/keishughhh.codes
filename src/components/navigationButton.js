import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import '../styles/navButton.css';

class NavigationButton extends Component {
   render() {
      return (
         <button id="roundButton" onMouseDown={this.props.handleMouseDown}>
            <FontAwesomeIcon icon="robot" />
         </button>
      );
   }
}

export default NavigationButton;