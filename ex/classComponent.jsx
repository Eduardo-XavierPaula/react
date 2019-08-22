import React, {Component} from 'react'
export default class ClassComponent extends Component {
    constructor(props){
        super(props)
        this.state = {idade: props.idade}
    }
    opera(x){
        this.setState(
            {idade: this.state.idade + x}
        )
    }
    render() {
        return (
            <div>
                <h1> {this.props.label} </h1>
                <h2> {this.state.idade}</h2>
                <h3> <button onClick={ () => this.opera(+1)}> Incrementa </button></h3>
                <h3> <button onClick={ () => this.opera(-1)}> Decrementa </button></h3>
            </div>
        )
    }
}