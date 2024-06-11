import * as React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Button from '@mui/material/Button';
import { Breadcrumbs } from '@mui/material';


export function ButtonUsage(){
  return <Button variant = "contained">Hello World</Button>
}

const myElement = (
  
  <table>
    <tr>
      <th><Button variant="contained">Projects</Button></th>
    </tr>
    <tr>
      <td>John</td>
    </tr>
    <tr>
      <td>Elsa</td>
    </tr>
  </table>
);
const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);
root.render(myElement);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
