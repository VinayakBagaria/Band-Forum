import React from "react";

export default class InsertBand extends React.Component{

  handleClick(e){
    e.preventDefault();
    var name=document.getElementById("inputName").value;
    var image=document.getElementById("inputImage").value;
    var bio=document.getElementById("inputBio").value;

    var myHeaders = new Headers({
       "Content-Type": "application/x-www-form-urlencoded"
     });

    fetch("/band/insertNew/",
      {
        method:'POST',
        headers: myHeaders,
        body:"name="+name+"&image="+image+"&bio="+bio
      }
    )
    .then(function(response){
      return response.json();
    })
    .then(function(response){
      if(response.error=="True")
      {
        alert("Cant insert. Band already exists");
      }
      else
      {
        alert("Done");
      }
      document.getElementById("inputName").value="";
      document.getElementById("inputImage").value="";
      document.getElementById("inputBio").value="";
    });

  }

  render(){
    return(
      <div  className="container-fluid">
        <form>
          <div className="form-group">
            <label htmlFor="labelInputName">Name of the band</label>
            <input type="text" className="form-control" id="inputName" placeholder="Band Name"/>
          </div>
          <div className="form-group">
            <label htmlFor="labelInputImage">Image URL here</label>
            <input type="text" className="form-control" id="inputImage" placeholder="Image URL"/>
          </div>
          <div className="form-group">
            <label htmlFor="labelInputBio">Give some Bio here</label>
            <br/>
            <textarea className="form-control" id="inputBio" rows="3"></textarea>
          </div>
          <button className="btn btn-success" onClick={this.handleClick.bind(this)}>Submit</button>
        </form>
      </div>
    );
  }
}
