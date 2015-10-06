import React from "react";
import PostList from "./PostList"
import data from "../../data"

export default React.createClass({
  getInitialState() {
    return data;
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
