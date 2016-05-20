import React from "react";
import { Link } from "react-router";

import Footer from "../components/layout/Footer";
import Nav from "../components/layout/Nav";

export default class Layout extends React.Component {
  navigate() {
    this.props.history.pushState(null, "/");
  }

  render() {
    return (
      <div className="container">
        <h1>KillerNews.net</h1>
        <Link to="archives"><button class="btn btn-danger">archives</button></Link>
        <Link to="settings"><button class="btn btn-success">settings</button></Link>
        <button onClick={this.navigate.bind(this)}>featured</button>
        {this.props.children}
      </div>
    );
  }
}
