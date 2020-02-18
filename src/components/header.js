import React, { Component } from 'react'
import { Link } from 'gatsby'
import headerStyles from '../styles/header-module.css'
import NavigationButton from './navigationButton'
import NavigationMenu from './navigationMenu'

class Header extends Component {
   constructor(props, context) {
      super(props, context);

      this.state = {
         visible: false
      };

      this.handleMouseDown = this.handleMouseDown.bind(this);
      this.toggleMenu = this.toggleMenu.bind(this);
   }

   toggleMenu() {
      this.setState({
         visible: !this.state.visible
      });
   }

   handleMouseDown(e) {
      this.toggleMenu();
   }

   render() {
      return (
         <div className="navigation-bar-container">
            <NavigationMenu handleMouseDown={this.handleMouseDown} menuVisibility={this.state.visible} />
            <Link className={headerStyles.logoLink} to="/" id="logoLink">:</Link>
            <NavigationButton handleMouseDown={this.handleMouseDown} />
            <div id="theMenu"></div>
         </div>
      );
   }
}

export default Header