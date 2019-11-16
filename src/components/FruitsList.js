import React from 'react';

class FruitsList extends React.Component{
    constructor(props){
        super(props)
        this.state={
            fruits:['grapes','apples','ova','maembe']
        }
    }
    render (){
        const FruitsList = this.state.fruits.map(fruit => {
            return<li>{fruit}</li>
        })
        return FruitsList
    }
}

export default FruitsList;