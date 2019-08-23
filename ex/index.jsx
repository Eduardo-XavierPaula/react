import React from 'react' 
import ReactDOM from 'react-dom' 
import  Calculadora from './Calculadora'

ReactDOM.render(    
        <Calculadora label="Calculadora" num1={1} num2={1} />
        , document.getElementById('app'))