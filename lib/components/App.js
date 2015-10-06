import React from "react";
import PostList from "./PostList"

export default React.createClass({
  getInitialState() {
    return { posts: [] };
  },
  componentDidMount() {
    var PostObject = Parse.Object.extend("PostObject");
    var query = new Parse.Query(PostObject);
    query.find({
      success: (results) => {
        this.setState({ posts: results.map(po => po.attributes) });
      },
      error: (error) => {
        alert("Error: " + error.code + " " + error.message);
      }
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
