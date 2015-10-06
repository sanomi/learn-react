import React from "react";
import PostList from "./PostList";
import Form from "./form";

export default React.createClass({
  getInitialState() {
    return { posts: [] };
  },
  componentDidMount() {
    var PostObject = Parse.Object.extend("PostObject");
    var query = new Parse.Query(PostObject);
    query.find({
      success: (results) => {
        this.setState({
          posts: results.map(po => {
            let post = Object.assign({}, po.attributes);
            post.preview = post.body.slice(0, 140);
           return post;
          })
        });
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
        <Form />
      </div>
    );
  }
});
