import { type } from "@testing-library/user-event/dist/type";
import React, {useState, useReducer} from "react";
const Hooks=(props)=>{
    const [count, setCount] = useState(0);
    const [name, setName] = useState('webbrain');

    const reducer =(state, action)=>{
        console.log(state, action);
        switch(action.type){
            case 'plus':
                return state + 1;
            case 'minus':
                return state - 1;
            case 'byamount':
                return state + action.payload;
            default:
                return state;
        }
    };
    const[counter, dispatch] = useReducer(reducer, 0);
    // const [counter, dispatch] = useReducer((state, action)=>{
    //     console.log(state, action);
    //     switch(action.type){
    //         case 'plus':
    //             return state + 1;
    //         case 'minus':
    //             return state - 1;
    //         case 'byamount':
    //             return state + action.payload;
    //         default:
    //             return state;
    //     }
    // }, 0)

    return(
        <div style={{flex: 1}}>
            <h1>Hooks Components</h1>
            <h1>Count: {count}</h1>
            <button onClick={()=>setCount(count - 1)}>-</button>
            <button onClick={()=>setCount(count + 1)}>+</button>
            <h1>Counter: {counter}</h1>
            <button onClick={()=>dispatch({type: 'minus'})}>-</button>
            <button onClick={()=>dispatch({type: 'plus'})}>+</button>
            <button onClick={()=>dispatch({type: 'byamount', payload: 5})}>5</button>
            <button onClick={()=>dispatch({type: 'byamount', payload: 50})}>50</button>
            <input type="text" value={name} 
            onChange={({target})=>setName( target.value)} />

        </div>
    );
}


export default Hooks;