import React, { Component } from "react";
import Navebar from "./Component/navbar";
import Counters from "./Component/counters";
import "./App.css";

class App extends Component {
  state = {
    Counters: [
      { id: 1, value: 0 },
      { id: 2, value: 1 },
      { id: 3, value: 0 },
      { id: 4, value: 3 },
      { id: 5, value: 0 }
    ]
  };

  handleDecrement = counter => {
    const counters = [...this.state.Counters];
    const index = counters.indexOf(counter);
    counters[index] = { ...counter };
    counters[index].value <= 0
      ? (counters[index].value = 0)
      : counters[index].value--;
    this.setState({
      Counters: counters
    });
  };

  handleIncrement = counter => {
    const counters = [...this.state.Counters];
    const index = counters.indexOf(counter);
    counters[index] = { ...counter };
    counters[index].value++;
    this.setState({ Counters: counters });
  };

  handleDelete = counterId => {
    const Counters = this.state.Counters.filter(c => c.id !== counterId);
    this.setState({
      Counters
    });
  };

  handleReset = () => {
    console.log("Reset  Button Clicked");

    const counters = this.state.Counters.map(c => {
      c.value = 0;
      return c;
    });
    this.setState({ Counters: counters });
  };

  totalCountValue = () => {
    let val = 0;
    this.state.Counters.forEach(element => {
      val += element.value;
    });
    return val;
  };

  addNewCounter = () => {
    const newId = this.state.Counters.length;
    let counters = [...this.state.Counters];
    counters.push({
      id: newId,
      value: 0
    });

    this.setState({ Counters: counters });
  };

  render() {
    return (
      <React.Fragment>
        <Navebar
          totalCount={this.state.Counters.length}
          totalCountActive={this.state.Counters.filter(c => c.value > 0).length}
          countValue={this.totalCountValue()}
        />

        <main className="container">
          <div className="row ">
            <div className="col-md-2 mt-3">
              <button
                className="btn btn-sm btn-primary"
                onClick={this.addNewCounter}
              >
                Add Counter
              </button>
            </div>
            <div className="col-md-10">
              <Counters
                counters={this.state.Counters}
                onReset={this.handleReset}
                onIncrement={this.handleIncrement}
                onDecrement={this.handleDecrement}
                onDelete={this.handleDelete}
              />
            </div>
          </div>
        </main>
      </React.Fragment>
    );
  }
}

export default App;
