import React, { Component } from "react";
import "./figstyles/fig.css";

export default class Fig extends Component {
  constructor() {
    super();
    this.myAddress = {
      address: "13A Kildare Ave",
    };
  }
  render() {
    return (
      <div className="user--card">
        <figure>
          <img src="" alt="a smiling person" />
        </figure>
        <figcaption>
          <h1>The CEO</h1>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Debitis ex
            rem voluptate, officiis voluptas nobis iusto numquam libero eum ut
            quaerat suscipit explicabo quos aperiam?
          </p>
        </figcaption>
      </div>
    );
  }
}
