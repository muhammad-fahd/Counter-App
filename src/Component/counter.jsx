import React, { Component } from "react";
class Counter extends Component {
  //object destructing is not implemented here
  render() {
    return (
      <div className="row">
        <div className="col-md-2 float-right">
          <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
        </div>
        <div className="col-md-10">
          <button
            onClick={() => this.props.onIncrement(this.props.counter)}
            className="btn btn-secondary btn-sm"
          >
            Increment
          </button>

          <button
            onClick={() => this.props.onDecrement(this.props.counter)}
            className="btn btn-primary btn-sm ml-2"
          >
            Decrement
          </button>

          <button
            className="btn btn-danger btn-sm ml-2"
            onClick={() => this.props.onDelete(this.props.counter.id)}
          >
            delete
          </button>
        </div>
      </div>
    );
  }

  getBadgeClasses() {
    let batchClasses = "badge m-2 badge-";
    batchClasses += this.props.counter.value === 0 ? "warning" : "primary";
    return batchClasses;
  }

  formatCount() {
    const { value } = this.props.counter;
    return value === 0 ? "Zero" : value;
  }
}

export default Counter;
