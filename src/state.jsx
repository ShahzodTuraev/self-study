import React from 'react';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      title: 'Web brain'

    }
  }
  render() {
    console.log('render');
    const plus = () => {
      if (this.state.count < 10) this.setState({ count: this.state.count + 1 });
    };
    const minus = () => {
      if (this.state.count > 1) this.setState({ count: this.state.count - 1 });
    };
    const onChange = (event) => {
      console.log(event.target.value);
      this.setState({title: event.target.value})
    }
    return (
      <div>
        <h1>{this.state.title}</h1>
        <h1>State {this.state.count}</h1>
        <input onChange={onChange} type="text"  placeholder='name'/>
        <button onClick={plus}>+</button>
        <button onClick={minus}>-</button>
      </div>
    )
  }
}
export default App;
