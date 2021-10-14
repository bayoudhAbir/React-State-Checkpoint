import './App.css';
import react from 'react';
import MyImage from './profile.jpg';
import './style.css'
class App extends react.Component {
  state= {
    fullName: "Sara Hamdi",
    bio: "my name is sarra hamdi,I'm 29 years old, from sfax, I work as a full-stack developer",
    imgSrc: <img src={MyImage} alt="profilepic"/>,
    profession: "full-stack developer",
   show:false,
   count:1
  }
 handleClick=()=>this.setState({show:true})
 
 componentDidMount() {
  this.timerID = setInterval(
    () =>{this.setState({count:this.state.count+1});},
    1000);

}
  render() {
      if( (this.state.show)===true){
        return(
          <div className="container">
            <h1>{this.state.fullName}</h1>
              <h1>{this.state.bio}</h1>
              {this.state.imgSrc}<br/> 
                    
            </div>  
          )
        }
      return(
          <div className="container">
            <button className="button" onClick={this.handleClick}> show profile</button>
            <h1>Count: {this.state.count}</h1>
          </div>)
  }
}
export default App;
