import React from "react";
import Hooks from './Hooks';

 export default class Root extends React.Component{
    render(){
        return(
            <div style={{display: 'flex'}}>
                <Hooks />
            </div>
        )
    }
}