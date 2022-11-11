import React from "react";

class State extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      grade: 0,
      percentage: 0,
    };
  }


  render() {
    const calculate = ({target:{value}}) =>{
      this.setState({grade: value},() =>{
        
      });

      this.setState({percentage: this.state.grade/ 1.93})

    }
    return (
      <div>
        <h1>Max Grade {193}</h1>
        <h1>Grade {this.state.grade}</h1>
        <h1>Percentage {this.state.percentage} %</h1>
        <input onChange={calculate} type="number" />
      </div>
    )
  }
}
export default State;