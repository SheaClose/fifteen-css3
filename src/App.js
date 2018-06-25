import React, { Component } from "react";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      changeColor: false,
      slide: false
    };
    this.handlColorChange = this.handlColorChange.bind(this);
    this.handleSlide = this.handleSlide.bind(this);
  }
  handlColorChange() {
    this.setState({ changeColor: !this.state.changeColor });
  }
  handleSlide() {
    this.setState({ slide: true });
  }
  render() {
    return (
      <div className="App">
        <nav className="nav">
          <span className="Logo">DevMountain</span>
          <div className="links-container">
            <span onClick={this.handleSlide} className="ham">
              &#9776;
            </span>
            <span className="link">Home</span>
            <span className="link">About</span>
            <span className="link">Details</span>
          </div>
          <div className={this.state.slide ? "menu slide" : "menu"}>
            <span className="links">Home</span>
            <span className="links">About</span>
            <span className="links">Details</span>
          </div>
        </nav>

        <div className="">
          <div
            className={this.state.changeColor ? "box change_color" : "box"}
          />
        </div>
        <button onClick={this.handlColorChange} type="button">
          Change Color
        </button>
      </div>
    );
  }
}

export default App;
