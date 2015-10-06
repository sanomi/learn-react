import React from "react";
import PostList from "./PostList"

export default React.createClass({
  getInitialState() {
    return { posts: [] };
  },
  componentDidMount() {
    fetch("/data.json").then(response => {
      response.json().then(data => this.setState(data));
    });
  },
  render() {
    return (
      <div>
        <PostList posts={this.state.posts}>
        </PostList>
      </div>
    );
  }
});
