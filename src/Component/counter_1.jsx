import React, { Component } from "react";

class Counter extends Component {
  state = {
    count: this.props.counter.value
    // imageUrl: "https://picsum.photos/400",
    // tags: ["tags1", "tags2", "tags3", "tags4", "tags5"]
  };

  // constructor() {
  //   super();
  //   this.handleIncrement = this.handleIncrement.bind(this);
  // }

  renderTags() {
    if (this.state.count === 0) return <p>There are no tags!</p>;

    return (
      <ol>
        {this.state.tags.map(tag => (
          <li key={tag}>{tag}</li>
        ))}
      </ol>
    );
  }

  setCountState = isDecrement => {
    if (isDecrement && this.state.count <= 0) {
      this.state.count = 0;
    }

    this.setState({
      Counter: this.state.count
    });
  };

  handleIncrement = () => {
    ++this.state.count;
    // let count = this.state.count + 1;
    // console.log("Increment : ", count);
    this.setCountState(false);
  };

  handleDecrement = () => {
    --this.state.count;
    // let count = this.state.count - 1;
    // console.log("Decrement : ", count);
    this.setCountState(true);
  };

  render() {
    console.log("Counter Prop: ", this.props);
    return (
      <div>
        <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
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

        {/* <div>{this.renderTags()}</div> */}
      </div>
    );
  }

  getBadgeClasses() {
    let batchClasses = "badge m-2 badge-";
    batchClasses += this.state.count === 0 ? "warning" : "primary";
    return batchClasses;
  }

  formatCount() {
    const { count } = this.state;
    return count === 0 ? "Zero" : count;
  }
}

export default Counter;
