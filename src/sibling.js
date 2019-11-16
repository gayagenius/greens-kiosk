import React from 'react';

class Sibling extends React.Component{
    render(){
        return<h1>{this.props.name}  {this.props.age}</h1>
        
    }
}

export default Sibling;