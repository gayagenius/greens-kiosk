import React from "react"

class Child extends React.Component{
    render(){
        return (
            <div>
                
                <button onClick={this.props.changeName}>Call Parent</button>
            </div>
        )
    }
}

export default Child;