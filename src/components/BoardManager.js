import React, {Component} from "react"
import Board from "./Board"

class BoardManager extends Component {
    constructor(props) {
        super(props)
        this.currentGo="X"
    }
    render() {
        return (<Board currentGo={this.currentGo} />)
    }
} 

export default BoardManager