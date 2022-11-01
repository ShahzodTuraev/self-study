import React from "react";
import Card from "./card"
import './index.css'
const fruits = [
    {
        title: 'peach',
        src: './images/peach.jpg'
    },
    {
        title: 'mango',
        src: './images/mango.jpg'
    },
    {
        title: 'strawberry',
        src: './images/strawberry.jpg'
    },
    {
        title: 'cherry',
        src: './images/cherry.jpg'
    },
    {
        title: 'pear',
        src: './images/pear.jpg'
    },
    {
        title: 'apple',
        src: './images/apple.jpg'
    },
    {
        title: 'banana',
        src: './images/banana.jpg'
    },
    {
        title: 'watermilon',
        src: './images/watermilon.jpg'
    },
    {
        title: 'orange',
        src: './images/orange.jpg'
    },
    {
        title: 'grape',
        src: './images/grape.jpg'
    },
]

class Fruits extends React.Component{
    render() {
        return (
            <div >
                <h1 className="wrapper_head">FRUITS</h1>
                <div className="wrapper">
                {
      fruits.map(value =>{
        return (
        <Card data={value} />
        )
      })
    }
                </div>
       
            </div>

        )
    }
}
export default Fruits