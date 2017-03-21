import React from "react";
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, hashHistory } from "react-router";

import Layout from "./pages/Layout.jsx";
import Featured from "./pages/Featured.jsx";
import Archives from "./pages/Archives.jsx";
import Settings from "./pages/Settings.jsx";
import InsertBand from "./pages/InsertBand.js";



/*
var bands=[
    {name:"Chainsmokers",image:"https://i.ytimg.com/vi/DRi9gdtkTxI/hqdefault.jpg"},
    {name:"Taylor Swift",image:"http://www.feelthenoise.com.au/images/taylorswift2.jpg"},
    {name:"Ed Sheeran",image:"https://upload.wikimedia.org/wikipedia/en/3/3f/Ed_Sheeran_%2B_cover.png"}
];
*/


ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/" component={Layout}>
      <IndexRoute component={Featured}></IndexRoute>
      <Route path="archives(/:article)" component={Archives}></Route>
      <Route path="settings" component={Settings}></Route>
      <Route path="insert" component={InsertBand}></Route>
    </Route>
  </Router>
  ,document.getElementById('app'));


/*
Router component is a part of Router API. Its job is to deal with the routing-related logic our app will need.
Inside the component,we specify the "routing configuration". That is what is used to map between URL and the views. The
specifics of that are handled by Route. Route says :
    If the URL we are on contains the path, then display the respective component.
When we want to display the Settings component for example, we can either click the button or type the URl in the
address bar. React basically routes to this page, checks where is the settings path, retrieves the data from the
corresponding component, checks for the main Route, goes to that page and spits the content.
IndexRoute dictates what to show when the page initially loads.
*/
