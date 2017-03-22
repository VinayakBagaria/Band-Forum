import React from "react";
import { IndexLink, Link } from "react-router";

export default class Navbar extends React.Component{
  constructor(){
    super();
    this.state={
      collapsed:true
    };
  }

  toggleCollapse(){
    const collapsed=!this.state.collapsed;
    this.setState({collapsed});
  }

  render(){
    const { location }=this.props;
    const { collapsed }=this.state;
    const featuredClass = location.pathname === "/" ? "active" : "";
    const archivesClass = location.pathname.match(/^\/archives/) ? "active" : "";
    const settingsClass = location.pathname.match(/^\/settings/) ? "active" : "";
    const insertClass = location.pathname.match(/^\/insert/) ? "active" : "";
    const navClass = collapsed ? "collapse" : "";
    return(

      <nav className="navbar navbar-inverse  navbar-fixed-top">
        <div className="container-fluid">
          <div className="navbar-header">
            <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
              <span className="sr-only">Toggle navigation</span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
            </button>
            <a className="navbar-brand" href="#">React with django</a>
          </div>

          <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
            <ul className="nav navbar-nav">
              <li className={featuredClass}>
                <IndexLink to="/" onClick={this.toggleCollapse.bind(this)}>Grid</IndexLink>
              </li>
              <li className={insertClass}>
                <Link to="insert" onClick={this.toggleCollapse.bind(this)}>Insert New Band</Link>
              </li>
              <li className={settingsClass}>
                <Link to="settings" onClick={this.toggleCollapse.bind(this)}>Band Images</Link>
              </li>
              <li className={archivesClass}>
                <Link to="archives" onClick={this.toggleCollapse.bind(this)}>Archives</Link>
              </li>
            </ul>

          </div>
        </div>
      </nav>
    );
  }
}

/*
Here there is the straight up bootstrap nav-code.
Note : Try shrinking down the screen size width-wise. Inspect element on the toggle button which then appears.
Try toggling it and see the change that happens in div tag below the button definition in HTML.
Class for div changes from navbar-collapse collapse (which signifies closed navigation bar) to navbar-collapse.
This is what is implemented in line 35.
We implemented this by setting the state of collapsed as True or False whenever the toggle button was clicked.
Check that we called the function there and then tried to set the state. Then did inline class name change.
*/

/*
li className=active denotes whether or not that particular thing is selected or not.
console.log(location); check how the path changes in the console.
featuredClass,archivesClass,settingsClass just matches the location.pathname and correspondingly makes the variable
active or empty. After that when the page is re-rendered, the given variable is spitted to the corresponding class to
show active.
*/


/*
<nav className="navbar navbar-inverse navbar-fixed-top" role="navigation">
  <div className="container">
    <div className="navbar-header">
      <button className="navbar-toggle" type="button" onClick={this.toggleCollapse.bind(this)} data-toggle="collapse">
        <span className="sr-only">Toggle Navigation</span>
        <span className="icon-bar"></span>
        <span className="icon-bar"></span>
        <span className="icon-bar"></span>
      </button>
    </div>
    <div className={"navbar-collapse " + navClass} id="bs-example-navbar-collapse-1">
      <ul className="nav navbar-nav">
        <li className={insertClass}>
          <Link to="insert" onClick={this.toggleCollapse.bind(this)}>Insert New Band</Link>
        </li>
        <li className={settingsClass}>
          <Link to="settings" onClick={this.toggleCollapse.bind(this)}>Band Images</Link>
        </li>
        <li className={featuredClass}>
          <IndexLink to="/" onClick={this.toggleCollapse.bind(this)}>Grid</IndexLink>
        </li>
        <li className={archivesClass}>
          <Link to="archives" onClick={this.toggleCollapse.bind(this)}>Archives</Link>
        </li>
      </ul>
    </div>
  </div>
</nav>
*/
