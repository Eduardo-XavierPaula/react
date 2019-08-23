import React, { Component } from 'react'
export default class ClassComponent extends Component {
    constructor(props) {
        super(props)
        this.state = { num1: props.num1,
                    num2: props.num2,
                    operador: props.operador,
                    resultado: props.resultado

        }
        
        this.handleChangeNum1 = this.handleChangeNum1.bind(this)
        this.handleChangeNum2 = this.handleChangeNum2.bind(this)
    }
    handleChangeNum1(event) {
        this.setState(
            { num1: event.target.value },            
        )
    }
    handleChangeNum2(event) {
        this.setState(
            { num2: event.target.value },            
        )
    }
    soma() {
        this.setState(
            { resultado:Number(this.state.num1) + Number(this.state.num2), operador: "+"  }
            
        )
    }
    subtrai() {
        this.setState(
            { resultado:  Number(this.state.num1) - Number(this.state.num2),operador: "-" },
            
        )
    }
    divide() {
        this.setState(
            { resultado:  Number(this.state.num1) / Number(this.state.num2),operador: "/" },
            
        )
    }
    multiplica() {
        this.setState(
            { resultado: Number(this.state.num1) * Number(this.state.num2),operador: "*" },
            
        )
    }
    render() {
        return (
            <div>
                <h1> {this.props.label} </h1>

                <h2> <input onChange={this.handleChangeNum1} value={this.state.num1}/></h2>
                <h2> {this.state.operador}</h2>                
                <h2> <input onChange={this.handleChangeNum2} value={this.state.num2} /></h2>
                <div>
                <h2> resultado: {this.state.resultado} </h2>
                </div>
                
                <h3> <button onClick={() => this.soma()}> + </button></h3>
                <h3> <button onClick={() => this.subtrai()}> - </button></h3>
                <h3> <button onClick={() => this.multiplica()}> * </button></h3>
                <h3> <button onClick={() => this.divide()}> / </button></h3>
            </div>
        )
    }
}