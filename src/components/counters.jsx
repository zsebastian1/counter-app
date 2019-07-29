import React, { Component } from "react";
import Counter from "./counter";

class Counters extends Component {
  render() {
    return (
      <div>
        <button
          onClick={this.props.onReset}
          className="btn btn-primary btn-sm m-2"
        >
          Reset
        </button>
        {this.props.counters.map(counter => (
          <Counter
            key={counter.id} // this passes and works internally within React
            onDelete={this.props.onDelete}
            value={counter.value}
            id={counter.id} // this passes and is used as a prop for this.prop attributes
            onIncrement={this.props.onIncrement}
            counter={counter}
          />
        ))}
      </div>
    );
  }
}

export default Counters;
