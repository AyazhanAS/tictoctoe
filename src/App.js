
import React from 'react';
import './App.css';

export default class App extends React.Component {
  constructor(props){
    super(props);
    this.state={
       squares:Array(9).fill(null),
       count: 0
    }
    this.winnerLine=[
      [0,1,2],
      [3,4,5],
      [6,7,8],
      [0,3,6],
      [1,4,7],
      [2,5,8],
      [0,4,8],
      [2,4,6]
    ]
  }

  isWinner = ()=>{
    let s = (this.state.count%2===0)?"x":"y";
    for(let i=0; i<8;i++){
      let line = this.winnerLine[i];
      if(this.state.squares[line[0]]===s
        &&this.state.squares[line[1]]===s
        &&this.state.squares[line[2]]===s){
          alert(s+" win")
          setTimeout(()=>{
            this.setState({squares:Array(9).fill(null)});
            this.setState({count:0})
          },3000)
        }
    }

  }

  clickHandler = event =>{
    console.log(45);
    let data = event.target.getAttribute("data");
    let currentSquaews = this.state.squares;
    if(currentSquaews[data] === null){
    currentSquaews[data] = (this.state.count%2===0)?"x":"y";
    this.setState({count: this.state.count+1})
    this.setState({squares: currentSquaews})
    } else {
      alert("так нельзя")
    }
    this.isWinner()

  }

  render(){
    return(
      <div className='tic-tac-toe'>
        <div data="0" onClick={this.clickHandler} className='ttt-grid'>{this.state.squares[0]}</div>
        <div data="1" onClick={this.clickHandler} className='ttt-grid'>{this.state.squares[1]}</div>
        <div data="2" onClick={this.clickHandler} className='ttt-grid'>{this.state.squares[2]}</div>
        <div data="3" onClick={this.clickHandler} className='ttt-grid'>{this.state.squares[3]}</div>
        <div data="4" onClick={this.clickHandler} className='ttt-grid'>{this.state.squares[4]}</div>
        <div data="5" onClick={this.clickHandler} className='ttt-grid'>{this.state.squares[5]}</div>
        <div data="6" onClick={this.clickHandler} className='ttt-grid'>{this.state.squares[6]}</div>
        <div data="7" onClick={this.clickHandler} className='ttt-grid'>{this.state.squares[7]}</div>
        <div data="8" onClick={this.clickHandler} className='ttt-grid'>{this.state.squares[8]}</div>

      </div>
    )
  }
}
