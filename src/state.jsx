import React from 'react';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      title: 'Web brain',
      gender: 'das'

    }
  }
  render() {
    // console.log('render');
    // const plus = () => {
    //   if (this.state.count < 10) this.setState({ count: this.state.count + 1 });
    // };
    // const minus = () => {
    //   if (this.state.count > 1) this.setState({ count: this.state.count - 1 });
    // };
    const onChangef =(event)=> {
      console.log(event.target.value);
      this.setState({title: event.target.value})
    }
    const onChangee =(events)=>{
      console.log(events.target.value);
      this.setState({gender: events.target.value})
    }
    const onCheck =(eventch)=>{
      console.log(eventch.target.checked);
      this.setState()
    }
    return (
      <div>
        <input onChange={onChangef} type="text" placeholder='name' />
         <h1>{this.state.title}</h1>
       {/* <h1>State {this.state.count}</h1>
        <button  >+</button>
        <button onClick={minus}>-</button> */}
        <select onChange={onChangee} name="" id="">
          <option value="male">male</option>
          <option value="female">female</option>
        </select>
        <h2>{this.state.gender}</h2>
        <input onChange={onCheck} type="checkbox" />
      </div>
    )
  }
}
export default App;
