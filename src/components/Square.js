import React, {Component} from "react"

class Square extends Component {

    constructor(props) {
        super(props)
        this.state= {
            value:null
        }
    }

    render() {
        return (
            <button className="square" onClick={()=>{
                this.setState({value:this.props.currentGo})
                }}>
                {this.state.value}
            </button>
        )
    }
}

export default Square