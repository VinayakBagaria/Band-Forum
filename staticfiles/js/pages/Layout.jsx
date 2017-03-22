import React from "react";
import { Link } from "react-router";

import Footer from "../components/layout/Footer.jsx";
import Navbar from "../components/layout/Navbar.jsx";

export default class Layout extends React.Component {
  render() {
    const { location } = this.props;
    const containerStyle = {
      marginTop: "60px"
    };
    return (
      <div>
        <Navbar location={location} />
        <div style={containerStyle}>
        {this.props.children}
        </div>

      </div>
    );
  }
}


/* React automatically puts a hypen(-) in between a camel case syntax. Here its for marginTop*/
