import React, {useState, useEffect} from "react";

const Hooks=(props)=>{
    const [count, setCount] = useState(props.count);
    const [name, setName] = useState('webbrain')

    // case 1
    useEffect(()=>{
        console.log('case 1');
    })

    // case 2 ---call back functiondan keyin bush array ishlatsak bu case
    // dagi useEffectimiz faqatgina 1 marta yuradi. ASOSAN BACKENDDAN MALUMOT
    // OLIB KELISHDA ISHLATILADI.
    useEffect(()=>{console.log('case 2');},[])

    // case 3
    useEffect(()=>{setCount(props.count);},[props.count])

    // case 4
    useEffect(()=>{console.log('case 4');},[name, count])

    // const [data, setData] = useState({
    //     count: 10,
    //     name: 'Web brain'
    // });

    // console.log(props, 'test');
    // const name =()=>{
    //     console.log('test');
    // }
    return(
        // this.name o'rniga name ishlatamiz onclickda onClick={name}
        <div style={{flex: 1}}>
            <h1>Hooks Components</h1>
            <h1>Count: {count}</h1>
            <button onClick={()=>setCount(count - 1)}>-</button>
            <button onClick={()=>setCount(count + 1)}>+</button>
            <h1>Name: {name}</h1>
            <input type="text" value={name} 
            onChange={({target})=>setName( target.value)} />

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