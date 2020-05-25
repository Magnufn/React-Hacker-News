import React, { Component } from "react";
import ListItem from "./listItem";

class List extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [
        {
          key: 0,
          url: "http://google.com",
          title: "Google",
          timeStamp: [2007, 0, 29],
          points: 6,
          user: "Chris",
        },
        {
          key: 1,
          url: "http://reddit.com",
          title: "Reddit",
          timeStamp: [2007, 0, 29],
          points: 10,
          user: "Marcus",
        },
      ],
    };
    this.handleHide = this.handleHide.bind(this);
  }

  handleHide = (key) => {
    this.setState(prevState => ({
        items: prevState.items.filter(el => el.key != key )
    }));
    //const newItems = this.state.items.filter((item) => item.key != key);
    //this.setState({ items: newItems });
  };

  styles = {
    margin: 5,
  };

  render() {
    return (
      <div>
        <ul style={this.styles}>
          {this.state.items.map((item) => (
            <ListItem handleHide={this.handleHide} item={item} />
          ))}
        </ul>
      </div>
    );
  }
}

export default List;
