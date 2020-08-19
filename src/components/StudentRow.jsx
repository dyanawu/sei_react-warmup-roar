import React, { Component } from 'react';

export default class StudentRow extends Component {
  constructor(props) {
    super(props);
    this.clickCount = 0;
    this.singleClickTimer = '';
  }

  state = {
    colorClass: "",
    image: "https://cdn0.iconfinder.com/data/icons/characters-2-2-outlined/227/hulk-superhero-marvel-character-avatar-smileface-profile-512.png",
    extraText: ""
  }

  handleClicks = (e, name) => {
    this.clickCount++;
    if (this.clickCount === 1) {
      this.singleClickTimer = setTimeout(function() {
        this.clickCount = 0;
        this.clickHandler(e, name);
      }.bind(this), 300);

    } else if (this.clickCount === 2) {
      clearTimeout(this.singleClickTimer);
      this.clickCount = 0;
      this.doubleClickHandler(e);
    }
  }

  clickHandler = (e, name) => {
    console.log("click");
    this.setState({
      colorClass: "red",
      image: "http://getdrawings.com/free-icon-bw/hulk-icon-21.png",
      extraText: `I am the mighty ${name}, how etc etc etc`
    });
    setTimeout(this.resetState, 1000);
  };

  rightClickHandler = (e) => {
    console.log("rightclick");
    e.preventDefault();
    this.setState({
      colorClass: "blue",
      image: "https://cdn11.bigcommerce.com/s-sq9zkarfah/images/stencil/350x350/products/117228/204948/Hulk-379-Decal-Sticker__73044.1511165171.jpg?c=2",
      extraText: "Stop poking around!"
    });
    setTimeout(this.resetState, 1000);
  };

  doubleClickHandler = (e) => {
    console.log("doubleclick");
    e.preventDefault();
    this.setState({
      colorClass: "green",
      image: "https://cdn11.bigcommerce.com/s-sq9zkarfah/images/stencil/1280x1280/products/85440/182141/Hulk-Fist-Decal-Sticker__21739.1511149680.jpg?c=2?imbypass=on",
      extraText: "STOP ITTTTTT"
    });
    setTimeout(this.resetState, 1000);
  };

  resetState = () => {
    this.setState({
      colorClass: "",
      image: "https://cdn0.iconfinder.com/data/icons/characters-2-2-outlined/227/hulk-superhero-marvel-character-avatar-smileface-profile-512.png",
      extraText: ""
    });
  }

  render() {
    const image = this.state.image;

    let colorClass = this.state.colorClass;

    return (

      <div className="container">
        <div
          className="card"
          onClick = {
            (e) => { this.handleClicks(e, this.props.student) }
          }
          onContextMenu = {
            (e) => { this.rightClickHandler(e); }
          }
        >
          <li className={colorClass}>
            <img src={image} alt="" />
            {this.props.student}<br />
            {this.state.extraText}
          </li>
        </div>
      </div>
    );
  }

}
