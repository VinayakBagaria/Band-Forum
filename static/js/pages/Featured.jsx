import React from "react";
import Article from "../components/Article";

export default class Featured extends React.Component {
  render() {

    /*
    Here we make an array of titles to be passed as a prop to Article.jsx. Since we are making an array, React needs
    us to assign an unique key(can be text or number) so that it can differentiate it. Without it also does the web app
    renders but this is not an error pops up in console. Instead of this, we can do "map" which is more concise and also
    is used when we want to get multiple data from database.
    */
    /*
    const arrays=[
      <Article key={1} title={"Some title 6"}/>,
      <Article key={4} title={"Some title 3"}/>,
      <Article key={2} title={"Some title 2"}/>,
      <Article key={3} title={"Some title 5"}/>,
      <Article key={5} title={"Some title 4"}/>
    ]
    */

    /*
    This is just the better way to arrange data in array for passing it as prop to some other file. Even here
    the key needs to be generated for each level.
    */

    const arrays = [
      "chakru",
      "Some Article",
      "Some Other Article",
      "Yet Another Article",
      "Still More",
      "Some Article",
      "Some Other Article",
      "Yet Another Article",
      "Still More",
      "Some Article",
      "Some Other Article",
      "Yet Another Article",
      "Still More",
    ].map((title, i) => <Article key={i} title={title}/> );



    const adText = [
      "Ad spot #1",
      "Ad spot #2",
      "Ad spot #3",
      "Ad spot #4",
      "Ad spot #5",
    ];


    const randomAd = adText[Math.round( Math.random() * (adText.length-1) )];
    return (
    <div className="container-fluid">

      <div id="multi-item-example" className="carousel slide" data-ride="carousel">

        <ol className="carousel-indicators">
            <li data-target="#multi-item-example" data-slide-to="0" className="active"></li>
            <li data-target="#multi-item-example" data-slide-to="1"></li>
            <li data-target="#multi-item-example" data-slide-to="2"></li>
        </ol>
        <div className="carousel-inner" role="listbox">
          <div className="item active">
            <div className="col-md-4">
                    <div className="card">
                        <img className="img-fluid" src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(51).jpg" alt="Card image cap" />
                        <div className="card-block">
                            <h4 className="card-title">Card title</h4>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        </div>
                    </div>
              </div>

              <div className="col-md-4 hidden-sm-down">
                    <div className="card">
                        <img className="img-fluid" src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(23).jpg" alt="Card image cap"/>
                        <div className="card-block">
                            <h4 className="card-title">Card title</h4>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <a href="#" className="btn btn-primary">Button</a>
                        </div>
                    </div>
                </div>

                <div className="col-md-4 hidden-sm-down">
                    <div className="card">
                        <img className="img-fluid" src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(66).jpg" alt="Card image cap"/>
                        <div className="card-block">
                            <h4 className="card-title">Card title</h4>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <a href="#" className="btn btn-primary">Button</a>
                        </div>
                    </div>
                </div>
            </div>

            <div className="item">

                <div className="col-md-4">
                    <div className="card">
                        <img className="img-fluid" src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(108).jpg" alt="Card image cap"/>
                        <div className="card-block">
                            <h4 className="card-title">Card title</h4>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <a href="#" className="btn btn-primary">Button</a>
                        </div>
                    </div>
                </div>

                <div className="col-md-4 hidden-sm-down">
                    <div className="card">
                        <img className="img-fluid" src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(5).jpg" alt="Card image cap"/>
                        <div className="card-block">
                            <h4 className="card-title">Card title</h4>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <a href="#" className="btn btn-primary">Button</a>
                        </div>
                    </div>
                </div>

                <div className="col-md-4 hidden-sm-down">
                    <div className="card">
                        <img className="img-fluid" src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(79).jpg" alt="Card image cap"/>
                        <div className="card-block">
                            <h4 className="card-title">Card title</h4>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <a href="#" className="btn btn-primary">Button</a>
                        </div>
                    </div>
                </div>

            </div>
            <div className="item">

                <div className="col-md-4">
                    <div className="card">
                        <img className="img-fluid" src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(65).jpg" alt="Card image cap"/>
                        <div className="card-block">
                            <h4 className="card-title">Card title</h4>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <a href="#" className="btn btn-primary">Button</a>
                        </div>
                    </div>
                </div>

                <div className="col-md-4 hidden-sm-down">
                    <div className="card">
                        <img className="img-fluid" src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(36).jpg" alt="Card image cap"/>
                        <div className="card-block">
                            <h4 className="card-title">Card title</h4>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <a href="#" className="btn btn-primary">Button</a>
                        </div>
                    </div>
                </div>

                <div className="col-md-4 hidden-sm-down">
                    <div className="card">
                        <img className="img-fluid" src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(52).jpg" alt="Card image cap"/>
                        <div className="card-block">
                            <h4 className="card-title">Card title</h4>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <a href="#" className="btn btn-primary">Button</a>
                        </div>
                    </div>
                </div>

            </div>

        </div>
      <a className="left carousel-control" href="#multi-item-example" role="button" data-slide="prev">
        <span className="glyphicon glyphicon-chevron-left" aria-hidden="true"></span>
        <span className="sr-only">Previous</span>
      </a>
      <a className="right carousel-control" href="#multi-item-example" role="button" data-slide="next">
        <span className="glyphicon glyphicon-chevron-right" aria-hidden="true"></span>
        <span className="sr-only">Next</span>
      </a>
      </div>
    </div>

    );
  }
}

/*
Here after the well for randomAd, we spit out the Articles from the corresponding file.
*/
