import React, {Component} from 'react'
export default class ClassComponent extends Component {
    constructor(props){
        super(props)
        this.state = {idade: props.idade}
        this.handleChange = this.handleChange.bind(this)
    }
    handleChange(event){
        this.setState(
            {idade: event.target.value}
        )
    }
    opera(x){
        this.setState(
            {idade: Number(this.state.idade) + x}
        )
    }
    render() {
        return (
            <div>
                <h1> {this.props.label} </h1>
                <h2> <input onChange={this.handleChange} value={this.state.idade}/></h2>
                <h3> <button onClick={ () => this.opera(+1)}> Incrementa </button></h3>
                <h3> <button onClick={ () => this.opera(-1)}> Decrementa </button></h3>
            </div>
        )
    }
}