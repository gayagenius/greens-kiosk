import React from 'react';
import Child from './Child';
import Sibling from './sibling';
import Home from './components/Home';
import SignUp from './components/SignUp';
import FruitsList from './components/FruitsList';
import FriendsList from './components/FriendsList';
import Profile from './components/Profile';
import NavBar from './components/NavBar';
import {BrowserRouter as Router,Link,Route}from 'react-router-dom';
class App extends React.Component{
  render(){
    return(
      
        <Router>
          <NavBar/>
          <div className = "container">
          <Route path='/' exact Component = {Home}/>
          <Route path='/contact' Component={contact}/>
          </div>

        </Router>
      
    )
  }

  // constructor (props){
  //   super(props)
  //   this.state={
  //     isLoggedIn:true,
  //     fruits:['grapes','apples','ova','maembe']
  //   }
  // }   
      // name:"Gaya Gorgeous"
  //   }
  //   this.changeName=this.changeName.bind(this)
  // }
  // changeName(){
  //   this.setState({
  //     name:"Liam myLove"
  //   })
  // }
  // handleClick (e){
  //   e.preventDefault();
  //   console.log('button clicked');
  // }
  // render(){
  //   return(
  //     <div>
  //       {this.state.isLoggedIn ?<Home/>:<SignUp/>}
  //       <button onClick={this.handleClick}>Click me</button>
  //       <FriendsList/>
  //     </div>
  //   )
  // }

  // render(){
  //   return(
  //     <div className="container">
        
        
  //       <hr></hr>
  //       <Profile />
    
  //     </div>
  //   )
  // }
    // if (this.state.isLoggedIn){
    //   return <Home/>
    // }

    // else{
    //   return <SignUp/>
    // }
  }
    // return (
    //   <div>
    //     <Sibling name  = {this.state.name}/>
    //   <Child changeName={this.changeName} age={23}/> 
    //     <h1>{this.props.gender}</h1>
    //  </div>
    
//     )
//   }
// }
// App.defaultProps={
//   gender:"Female"
// }
// App.propTypes = {
  // gender:React.propTypes.string
    
export default App;
