import React, {Component} from "react"
import Square from "./Square"

class Board extends Component {
    constructor(props) {
        super(props)
        this.name="joe"
    }
    renderSquare(i) {
        return <Square value={i} currentGo={this.props.currentGo} />
    }
    name = "John"
    names = ["John","James","Steve"]
    person = {
        name: "Joe",
    }
    showName = () => {
        const newNames = [...this.names, "Sarah"]
        const ages = [1,50,4,8,24,65]
        const newPerson = {...this.person,age:48}
        const filter = (...args) => {
            return args.filter(filterEl=>filterEl===24)
        }
        console.log(filter(ages))
        newNames.push("Gerald")
        console.log(newPerson)
        return (<div>{newNames.map(name=>(name))} : { this.names.map(name=>(name))}</div>)
    }
    render() {
        return (
            <div>
                {this.showName()}
            <div>Current Go: {this.props.currentGo}</div>
            <div class="board-wrapper">
        <div className="board-row">
            {this.renderSquare(1)}
            {this.renderSquare(2)}
            {this.renderSquare(3)}
            </div>
            <div class="board-row">
 
            {this.renderSquare(4)}
            {this.renderSquare(5)}
            {this.renderSquare(6)}
        </div>        <div class="board-row">

            {this.renderSquare(7)}
            {this.renderSquare(8)}
            {this.renderSquare(9)}
        </div>
        </div></div>)
    }
}

export default Board