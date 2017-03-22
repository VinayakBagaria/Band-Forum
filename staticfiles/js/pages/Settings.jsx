import React from "react";
import Band from "../containers/Band.jsx";

export default class Settings extends React.Component{

  constructor(){
      super();
      this.state={
        text:[]
      };
  }

  componentWillMount(){
    this.handleClick();
  }

  handleClick(){
    var that=this;
    fetch("/band/api/all/")
    .then(function(response){
      return response.json();
    })
    .then(function(response){
        that.setState({
          text:response
        });
    });
  }

  render(){
    return(
        <div className="row">
          {this.state.text.map((band, i) => <Band key = {i} data = {band} />)}
        </div>

     );
  }
}
