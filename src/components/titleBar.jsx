import React, { Component } from "react";
import logo from "../img/y18.png";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import ListPage from "./listPage";
import List from "./list";

class TitleBar extends Component {
  render() {
    const textStyle = {
      fontSize: 15,
      margin: 5,
      color: "black",
    };
    const navBarStyle = {
      background: "#ff6600",
      marginTop: "10px",
      display: "flex",
      alignItems: "center",
      padding: "2px",
    };
    return (
      <Router>
        <nav style={navBarStyle}>
          <img
            src={logo}
            style={{ border: "solid 2px white" }}
            alt="Logo"
          ></img>
          <Link
            to="/"
            style={{ color: "black", fontWeight: "bold", marginLeft: 5 }}
            className="navbar-brand"
          >
            Hacker News
          </Link>
          <Link  to="/" style={textStyle}>
            Welcome
          </Link>{" "}
          |<Link to="/newest" style={textStyle}>New</Link> |
          <Link to="/top" style={textStyle}>Top</Link> |
          <a style={textStyle} href="http://google.com">
            Threads
          </a>{" "}
          |
          <a style={textStyle} href="http://google.com">
            Past
          </a>{" "}
          |
          <a style={textStyle} href="http://google.com">
            Comments
          </a>{" "}
          |
          <a style={textStyle} href="http://google.com">
            Ask
          </a>{" "}
          |
          <a style={textStyle} href="http://google.com">
            Show
          </a>{" "}
          |
          <a style={textStyle} href="http://google.com">
            Jobs
          </a>{" "}
          |
          <a style={textStyle} href="http://google.com">
            Submit
          </a>
        </nav>
        <Switch>
        <Route exact path="/">
            <List />
          </Route>
          <Route path="/newest">
            <ListPage apiurl="https://hacker-news.firebaseio.com/v0/newstories.json?print=pretty" />
          </Route>
          <Route path="/top">
            <ListPage apiurl="https://hacker-news.firebaseio.com/v0/topstories.json?print=pretty" />
          </Route>
        </Switch>
      </Router>
    );
  }
}

export default TitleBar;
