import React, { Component } from "react";
import ListItem from "./listItem";

const API = 'https://hn.algolia.com/api/v1/search';

class List extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hits: [],
      isLoading: false,
    };
    this.handleHide = this.handleHide.bind(this);
  }


  componentDidMount() {
    this.setState({ isLoading: true });

    fetch(API)
      .then(response => response.json())
      .then(data => this.setState({ hits: data.hits, isLoading: false }));
  }

  handleHide = (key) => {
    this.setState(prevState => ({
        hits: prevState.hits.filter(el => el.key != key )
    }));
    //const newhits = this.state.hits.filter((item) => item.key != key);
    //this.setState({ hits: newhits });
  };

  styles = {
    margin: 5,
  };

  render() {
    const { hits, isLoading } = this.state;

    if (isLoading) {
      return <p>Loading ...</p>;
    }
 
    return (
      <div>
        <ul style={this.styles}>
          {hits.map((item) => (
            <ListItem handleHide={this.handleHide} item={item} />
          ))}
        </ul>
      </div>
    );
  }
}

export default List;
