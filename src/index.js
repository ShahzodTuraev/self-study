import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Fruits from './fruits';
const students = [
  {id: 1, name: 'Shahzod'},
  {id: 2, name: 'Shahboz'},
  {id: 3, name: 'Ali'},
  {id: 4, name: 'Nodir'},
  {id: 5, name: 'Xusan'},
  {id: 6, name: 'Bobur'},
  {id: 7, name: 'Kamol'}
]
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Fruits />
    {/* {
      students.map(value =>{
        return (
        <App data={value} />
        )
      })
    } */}
    
  </React.StrictMode>
);
