import React, {useState} from "react";

const Hooks=(props)=>{
    // const [count, setCount] = useState(10);
    // const [name, setName] = useState('webbrain')
    const [data, setData] = useState({
        count: 10,
        name: 'Web brain'
    });
    console.log(data.count);
    // console.log(props, 'test');
    // const name =()=>{
    //     console.log('test');
    // }
    return(
        // this.name o'rniga name ishlatamiz onclickda onClick={name}
        <div style={{flex: 1}}>
            <h1>Hooks Components</h1>
            <h1>Count: {data.count}</h1>
            <button onClick={()=>setData({...data, count: data.count - 1})}>-</button>
            <button onClick={()=>setData({...data, count: data.count + 1})}>+</button>
            <hr/>
            <h1>Name: {data.name}</h1>
            <input type="text" value={data.name} 
            onChange={({target})=>setData({...data, name: target.value})} />

        </div>
    );
}
// hooks da arrow functionni return siz ham pastdagidek yozsa bo'ladi.
// lekin console ga tekshirlmoqchi bo'lsak, returndan tepada console 
// yozamiz. Returnsiz bo'lmaydi. ============
// const Hooks =()=>(
//     <div>
//         <h1>Hooks Components</h1>
//     </div>
// )

export default Hooks;