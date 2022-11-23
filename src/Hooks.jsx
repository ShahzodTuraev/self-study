
import React, {useState, useReducer} from "react";
import {Container, Title, Button, Select} from './styleHooks'
const Hooks=(props)=>{
    const reducer =(state, action)=>{
        console.log(state, action);
        switch(action.type){
            case 'plus':
                return state + action.payload;
            case 'minus':
                return state - action.payload;
            default:
                return state;
        }
    };
    const[counter, dispatch] = useReducer(reducer, 0);
    const [amount, setAmount] = useState(1)
    const onSellect =({target:{value}})=>{
        console.log(value);
        setAmount(Number(value));
    }

    return(
        <Container style={{flex: 1}}>
            <h1>Hooks Components</h1>
            <Title>Counter: {counter}</Title>
            <Button onClick={()=>dispatch({type: 'minus', payload: amount})}>-</Button>
            <Select onChange={onSellect}>
                <option value="1">1</option>
                <option value="5">5</option>
                <option value="10">10</option>
                <option value="50">50</option>
            </Select>
            <Button onClick={()=>dispatch({type: 'plus', payload: amount})}>+</Button>

            

        </Container>
    );
}


export default Hooks;