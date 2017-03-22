import React from "react";

import Article from "../components/Article.jsx";

export default class Archives extends React.Component {
  render() {
    const { query } = this.props.location;
    const { params } = this.props;
    const { article } = params;
    const { date, filter } = query;

    const titles = [
      "Some Article",
      "Some Other Article",
      "Yet Another Article",
      "Still More",
      "Fake Article",
      "Partial Article",
      "American Article",
      "Mexican Article",
    ].map((head, i) => <Article key={i} title={head}/> );

    return (
      <div className="container-fluid">
        <h1>Archives</h1>
        article: {article}, date  : {date}, filter: {filter}
        <div className="row">{titles}</div>
      </div>
    );
  }
}
/*
see console.log(this.props). Check there out there is a params object with article:<article_name> described there. This is what we
are printing here.
/archives/2?date=122as  - here date = 122as and that will be displayed
*/
