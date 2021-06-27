import React, { Component } from "react"

import GameButton from "./GameButton"

class Game extends React.Component {
    constructor(props) {
        super(props)
        this.buttonColors = [
            "red","green","yellow","blue"
        ]
        this.state = {
            gameMessage: "Showing Colors...",
            level: 5,
            selectColors:[],
            currentGo: 0,
            highlightColor:"",
            playersGo:false,
            score:0,
            newGame:false,
            displayNewGameButton:false
        }

 }

 setupColors = () => {
    this.setState({selectColors:[]})
    for (let i=0; i<this.state.level; i++) {
       const randNum = Math.floor(Math.random() * 4);

       this.setState({selectColors:[...this.state.selectColors,this.buttonColors[randNum]]})
    }
    setTimeout(()=>{console.log(this.state.selectColors)},20)
 }

 playSequence = () => {
     let time = 0
     this.state.selectColors.forEach(color=>{
         time+=1000
         setTimeout(()=>{
             this.setState({highlightColor:color})
        },time)
        setTimeout(()=>{
            this.setState({highlightColor:""})
       },time+800)
     })
     setTimeout(()=>{
         this.setState({playersGo:true, gameMessage: "Your go...",})
     }, 1000 + (1000 * this.state.level))
 }

 colorSelect = (el) => {
    if (this.state.playersGo) {
        // get current color
        const currentColor = this.state.selectColors[this.state.currentGo]
        const selectedColor = el.target.getAttribute("colorname")
        // check matches
        // if matches continue
        // else gameover
        if (currentColor === selectedColor) {
            this.setState({score:this.state.score+1})
            if (this.state.currentGo===this.state.level-1) {
                this.setState({gameMessage:"Well Done!", displayNewGameButton:true})
            }
        } else {
            this.setState({playersGo:false,gameMessage: "Game Over!",displayNewGameButton:true})
        }
        this.setState({currentGo: this.state.currentGo+1})
        // check if next go
        
    }
 }

 startGame = () => {
     console.log("start!")
     this.setupColors()
     this.playSequence()
 }

 newGame = () => {
    this.setState({gameMessage: "Showing Colors...",
    level: 5,
    selectColors:[],
    currentGo: 0,
    highlightColor:"",
    playersGo:false,
    score:0,
    newGame:true,
    displayNewGameButton:false})
 }

 componentDidMount() {
     setTimeout(()=>{
        this.startGame();
     }, 1000)
 }

 componentDidUpdate(prevProps, prevState) {
    if
    ((prevState.newGame !== this.state.newGame) && this.state.newGame) {
        this.setState({
        newGame:false})
        setTimeout(()=>{
            this.setupColors()
            this.playSequence()
        },10)
    }
  }

    
 render() {
     return (
         <div>
             <GameButton colorSelect={this.colorSelect} highlight={this.buttonColors[0]===this.state.highlightColor} buttonColor={this.buttonColors[0]} />
             <GameButton colorSelect={this.colorSelect} highlight={this.buttonColors[1]===this.state.highlightColor} buttonColor={this.buttonColors[1]} />
             <GameButton colorSelect={this.colorSelect} highlight={this.buttonColors[2]===this.state.highlightColor} buttonColor={this.buttonColors[2]} />
             <GameButton colorSelect={this.colorSelect} highlight={this.buttonColors[3]===this.state.highlightColor} buttonColor={this.buttonColors[3]} />
             <div className="game-score">Score: {this.state.score}</div>
             <div className="game-message">{this.state.gameMessage}</div>
             {this.state.displayNewGameButton ? <button className="new-game" onClick={this.newGame}>New Game</button> : null}
         </div>
     )
 }
}

export default Game