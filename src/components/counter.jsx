import React, { Component } from "react";
//import Counters from "./counters";

class Counter extends Component {
  //state = {
  //  value: this.props.value
  //  imageUrl: "https://picsum.photos/200"
  //  tags: ["tag1", "tag2", "tag3"]
  // };

  // handleIncrement = product => {
  // console.log(product);
  // this.state.value++;
  //  console.log(product);
  //this.setState({ value: this.state.value + 1 });
  //};

  render() {
    // console.log(this.props);
    // console.log("props", this.props);
    return (
      <div>
        <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
        <button
          onClick={() => this.props.onIncrement(this.props.counter)}
          className="btn btn-secondary btn-sm"
        >
          Increment
        </button>
        <button
          onClick={() => this.props.onDelete(this.props.id)}
          className="btn btn-danger btn-sm m-2"
        >
          Delete
        </button>
      </div>
    );
  }
  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.props.counter.value === 0 ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    const { value } = this.props.counter;
    return value === 0 ? "Zero" : value;
  }
}

export default Counter;
