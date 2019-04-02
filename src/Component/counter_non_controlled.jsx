import React, { Component } from "react";
class Counter extends Component {
  state = {
    value: this.props.counter.value
  };

  handleIncrement = () => {
    this.setState({
      value: this.state.value + 1
    });
  };

  handleDecrement = () => {
    this.setState({
      value: this.state.value - 1
    });
  };
  render() {
    console.log("Counter Prop: ", this.props);
    return (
      <div className="row">
        <div className="col-md-2 float-right">
          <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
        </div>
        <div className="col-md-10">
          <button
            onClick={this.handleIncrement}
            className="btn btn-secondary btn-sm"
          >
            Increment
          </button>

          <button
            onClick={this.handleDecrement}
            className="btn btn-primary btn-sm ml-2"
          >
            Decrement
          </button>

          <button
            className="btn btn-danger btn-sm ml-2"
            onClick={() => this.props.onDelete(this.props.counter.id)}
          >
            del
          </button>
        </div>
      </div>
    );
  }

  getBadgeClasses() {
    let batchClasses = "badge m-2 badge-";
    batchClasses += this.state.value === 0 ? "warning" : "primary";
    return batchClasses;
  }

  formatCount() {
    const { value } = this.state;
    return value === 0 ? "Zero" : value;
  }
}

export default Counter;
