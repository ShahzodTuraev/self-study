import React from 'react';
// import {student} from './mock'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      isTrue: true
      // title: 'Web brain',
      // gender: 'das',
      // data: student,
      // name: 'Shahzod',
      // surname: 'Turaev'
    }
  }
  render() {
    const onChange =({target: {value, name }}) => {
     this.setState({[name] : value});
    //  this.setState({isTrue: this.state.password?.length <= 4})
    this.setState({[name] : value}, () => {
      console.log(this.state.password?.length);
    })
    }
    
    return(
      <div>
        <h1>Number : {this.state.password} - 
        { this.state.isTrue ? "to'g'ri" : "noto'g'ri"}</h1>
        <br />

        <input name='password' type="number" onChange={onChange} />
      </div>
    )



    // const onFilter = (e) => {
    //   console.log(e.target.value);
    //   let res = student.filter(value=> value.status.includes(e.target.value))
    //   this.setState({
    //     data: res
    //   })

    // }

    
    // return (
    //   <div>
         

    //     <input onChange={onFilter} type="text"  placeholder='filter'/>

    //     {
    //       this.state.data.map(({id, name, status})=>{
    //         return(
    //           <h1 key={id}>{id} {name} {status}</h1>
    //         )
    //       })
    //     }
    //   </div>
    // )
  }
}
export default App;
