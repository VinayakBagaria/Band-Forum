import React from "react";

export default class Band extends React.Component{
    constructor(){
        super();
        this.state={
          bio:''
        };
    }

    componentWillMount() {
      var biography=this.props.data.bio;
      if(biography)
      {
        this.setState({
          bio:biography
        });
      }
      else {
        this.setState({
          bio:"<Bio Not Available>"
        });
      }
    }




    render(){
        return(
        <div className="col-md-4" >
        <div className="column">
          <div className="post-module">
            <div className="thumbnail">
              <img src={this.props.data.image}/>
            </div>
            <div className="post-content">
              <div className="category">Music</div>
              <h1 className="title">{this.props.data.name}</h1>
              <h2 className="sub_title">{this.state.bio}</h2>
            </div>
          </div>
        </div>
    </div>

        );
    }
}
