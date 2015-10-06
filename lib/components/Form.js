import React from "react";

export default React.createClass({
  componentDidMount() {
  },
  render() {
    return (
      <form className="form-horizontal">
        <div className="form-group">
          <label htmlFor="inputTitle" className="col-sm-2 control-label">Title</label>
          <div className="col-sm-10">
            <input type="text" className="form-control" id="inputTitle" placeholder="Title" />
          </div>
        </div>
        <div className="form-group">
          <label htmlFor="inputBody" className="col-sm-2 control-label">Body</label>
          <div className="col-sm-10">
            <textarea className="form-control" id="inputBody" placeholder="Body"></textarea>
          </div>
        </div>
        <div className="form-group">
          <div className="col-sm-offset-2 col-sm-10">
            <button type="submit" className="btn btn-default">Add Post</button>
          </div>
        </div>
      </form>
    );
  }
});
