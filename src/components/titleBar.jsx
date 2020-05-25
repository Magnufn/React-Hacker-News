import React, { Component } from "react";
import logo from "../img/y18.png";

class TitleBar extends Component {

  
  render() {
    const textStyle = {
      fontSize: 15,
      margin: 5,
      color: 'black'
    };
    const navBarStyle = {
      background: '#ff6600',
      marginTop: '10px',
      display: 'flex',
      alignItems: 'center',
      padding: '2px'
    };
    return (
      <nav style={navBarStyle}>
        <img src={logo} style={{border: "solid 2px white"}} alt="Logo"></img>
        <a style={{color: "black", fontWeight: "bold", marginLeft: 5}} className="navbar-brand" href="#">
          Hacker News
        </a>
        <a style={textStyle} href="http://google.com">Welcome</a> | 
        <a style={textStyle} href="http://google.com">New</a> | 
        <a style={textStyle} href="http://google.com">Threads</a> | 
        <a style={textStyle} href="http://google.com">Past</a> | 
        <a style={textStyle} href="http://google.com">Comments</a> | 
        <a style={textStyle} href="http://google.com">Ask</a> | 
        <a style={textStyle} href="http://google.com">Show</a> | 
        <a style={textStyle} href="http://google.com">Jobs</a> | 
        <a style={textStyle} href="http://google.com">Ask</a>
      </nav>
    );
  }
}

export default TitleBar;
