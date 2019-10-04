import React, { Component } from "react";
import { Header } from "../commons/Navbar";
import { Layout, TablePublications, TableOffers } from "../commons/Layout";
import publications from "../mocks/publications.json";
import offers from "../mocks/offers.json";

export default class Landing extends Component {
  state = {
    page: "Publications"
  };

  changePage = page => this.setState({ page });

  changeTable = () => {
    switch (this.state.page) {
      case "Offers":
        return <TableOffers datas={offers} />;
      case "Publications":
      default:
        return <TablePublications datas={publications} />;
    }
  };

  render() {
    return (
      <React.Fragment>
        <Header changePage={this.changePage} />
        <Layout page={this.state.page}>{this.changeTable()}</Layout>
      </React.Fragment>
    );
  }
}
