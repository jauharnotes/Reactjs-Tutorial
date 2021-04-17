import React, { Component } from "react";
import "./style.css";

class Drink extends React.Component {
  state = {
    isVisible: false
  };

  handleClick = () => {
    this.setState({ isVisible: !this.state.isVisible });
  };

  render() {
    return (
      <div>
        <button onClick={this.handleClick}>Minum</button>
        {this.state.isVisible ? <Greeting name="Bajigur" /> : <div />}
      </div>
    );
  }
}

class Greeting extends React.Component {
  render() {
    return <h1>Saya Buka Puasa dengan {this.props.name}</h1>;
  }
}

export default Drink;
