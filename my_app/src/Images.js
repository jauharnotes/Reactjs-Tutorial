import React, { Component } from "react";

class Images extends Component {
  render() {
    return (
      <div>
        <img src={this.props.linkGambar}width="200" />
      </div>
    );
  }
}
export default Images;
