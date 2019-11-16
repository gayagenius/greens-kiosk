import React from 'react';

class Profile extends React.Component{
    constructor(props){
        super(props)
        this.state={
            Name:''
        }
        this.handleChange=this.handleChange.bind(this);
        this.handleSubmit=this.handleSubmit.bind(this);
    }
    handleChange(e){
        this.setState({
            Name:e.target.value.toUpperCase()
        })
    }
    handleSubmit(e){
        alert(this.state.Name);
        e.preventDefault();
    }
    render(){
        return(
            
                <div className = "card">
                    <div className="Card-body">
                    <form onSubmit={this.handleSubmit}>
                    <div className = "form-group">
                    <label>Name:</label>
                    <input className="form-control" value={this.state.Name} onChange={this.handleChange}/>
                </div>
                   <button type = 'submit' className="btn btn-primary">Submit</button>
                   </form>
                        
                    </div>
                </div>
               
               
               
           
        )
    }
}

export default Profile;