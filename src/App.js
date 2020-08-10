import React, {Component} from 'react'
import axios from 'axios'
import './App.css'
import trivia from '../src/trivia.png'

class App extends Component {

state = {
  quote: ''
}

// componentDidMount =() => {
//   axios.get('http://jservice.io/api/clues')
//     .then(res => {
//       console.log('response', res)
//       console.log(res.data)
//       this.setState({
//         quote: res.data.question
//       })
//     })
// }

getAnswer = () => {
  console.log(this.state.answer)
  document.getElementById("answer").style.display ="block";

}


newQuestion = () => {
  axios.get('http://jservice.io/api/clues')
    .then( 
       res => {
        console.log(res)
        var x = Math.floor(Math.random() * res.data.length);
        console.log(res.data[x].question)
        var  y = res.data.id
        console.log(y, x)
        document.getElementById("answer").style.display = "none";
        this.setState({
          quote: y,
          question: res.data[x].question,
          answer: res.data[x].answer
          })
      }
    )
    }
   
  render () {
    return(
      <div className="App">
      <img src={trivia} width="400px"/>
      <h1>Kay's Trivia</h1>
      <p>{this.state.question}</p>
     <p id="answer">{this.state.answer}</p>
    <button id='1' onClick={this.newQuestion}>New Clue</button>
    <br/>
    <button id='2' onClick={this.getAnswer}>Show Answer</button>
    </div>
    )
  }
}

export default App