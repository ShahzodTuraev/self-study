import React from 'react';
import {student} from './mock'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      // title: 'Web brain',
      // gender: 'das',
      data: student,
      name: 'Shahzod',
      surname: 'Turaev'
    }
  }
  render() {
    const onFilter = (e) => {
      console.log(e.target.value);
      let res = student.filter(value=> value.status.includes(e.target.value))
      this.setState({
        data: res
      })

    }

    // console.log('render');
    // const plus = () => {
    //   if (this.state.count < 10) this.setState({ count: this.state.count + 1 });
    // };
    // const minus = () => {
    //   if (this.state.count > 1) this.setState({ count: this.state.count - 1 });
    // };
    // const onChangef =(event)=> {
    //   console.log(event.target.value);
    //   this.setState({title: event.target.value})
    // }
    // const onChangee =(events)=>{
    //   console.log(events.target.value);
    //   this.setState({gender: events.target.value})
    // }
    // const onCheck =(eventch)=>{
    //   console.log(eventch.target.checked);
    //   this.setState()
    // }

    // const onChangem =(event)=> {
    //   this.setState({[event.target.name]: event.target.value})
    // }
    // const onChangeName =(e)=>{
    //   // console.log(e);
    //   console.log(e.target.value);
    //   this.setState({name: e.target.value})
    // }
    // const onChangeSurname =(e)=>{
    //   console.log(e.target.value);
    //   this.setState({surname: e.target.value})
    // }
    
    return (
      <div>
         {/* <h1>name: {this.state.name}</h1>
         <h1>surname: {this.state.surname}</h1>
        <input name='name' onChange={onChangem} type="text" placeholder='name' />
        <input name='surname' onChange={onChangem} type="text" placeholder='surname' />
       <h1>State {this.state.count}</h1>
        <button  >+</button>
        <button onClick={minus}>-</button>
        <select onChange={onChangee} name="" id="">
          <option value="male">male</option>
          <option value="female">female</option>
        </select>
        <h2>{this.state.gender}</h2>
        <input onChange={onCheck} type="checkbox" /> */}

        <input onChange={onFilter} type="text"  placeholder='filter'/>

        {
          this.state.data.map(({id, name, status})=>{
            return(
              <h1 key={id}>{id} {name} {status}</h1>
            )
          })
        }
      </div>
    )
  }
}
export default App;
