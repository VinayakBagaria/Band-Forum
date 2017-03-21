import React from "react";

export default class Article extends React.Component{
  render(){
    const {title}=this.props;
    return(
      <div className="col-md-4 archive" >
        <h4>{title}</h4>
        <p>Some paragraph tags here. Lorem ipsum dolor sit amet.</p>
        <a href="#" className="btn btn-primary">More Info</a>
      </div>
    );
  }
}
