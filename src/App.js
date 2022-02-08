import React, { Component } from 'react'
import './App.css';
import imgSrc from './me.png'

export default class App extends Component {
  constructor(){
    super();
    this.state = {
      Person:{

        fullName: "Meriem AYED",
        profession: "FullStack JS Developer",
        bio: "I am a web developer with a vast array of knowledge in many different front end and back end languages, responsive frameworks, databases, and best code practices. My objective is simply to be the best web developer that I can be and to contribute to the technology industry all that I know and can do. While a student, I studied Mathematics, and I believe that my understanding of problem solving and complex algorithms are also skills that have and will continue to contribute to my overall success as a developer",
        imgSrc: <img src={imgSrc} alt="She is Meriem"/>
        
      },     
      show : false,
      counter : 0
    };
  }

  componentDidMount(){
    console.log("Component was mounted");
    this.setState({interval: setInterval(()=>{this.setState({counter: this.state.counter + 1})},1000)});
  }

  handleShow=()=>this.setState({show:!this.state.show});

  render() {
  return(
    <div className='App-container'>
      <div className='App-content'>
        <div className='App-header'>
          <button className='btn' onClick={this.handleShow}> Click Me !!</button>
          <div className='counter'>{this.state.counter}</div>
        </div>
        { this.state.show &&  <div className='App-profile'>
                                    <div className='image'>{this.state.Person.imgSrc}</div> 
                                    <h1 className='fullName'>{this.state.Person.fullName}</h1>
                                    <h2 className='profession'>{this.state.Person.profession}</h2>
                                    <p className='bio'>{this.state.Person.bio}</p>
                                </div> 
                            }                  
      </div>
    </div>
        
  )
  }
}