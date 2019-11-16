import React from 'react';
import FruitsList from './FruitsList';
import Profile from './Profile';

class Home extends React.Component {
    render(){
        return ( 
        
        <div className="row">
          <div className="col-8">
          <h1>Welcome back</h1>
          <FruitsList/>
            
        </div>
        <div className="col-4">
            <Profile/>
        </div>
        </div>
        )
    //     {this.state.isLoggedIn ?<Home/>:<SignUp/>}
    //     <button onClick={this.handleClick}>Click me</button>
    // }
}
}

export default Home;