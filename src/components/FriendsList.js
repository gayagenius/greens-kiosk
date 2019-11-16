import React from 'react';
class FriendsList extends React.Component{
    constructor(props){
        super(props)
        this.state={
            friends:['Chesang','Vera','Pauline','Stella']
        }
    }
    render (){
        const FriendsList = this.state.friends.map((friend,index)=> {
            return<li key={index}>{friend}</li>
        })
        return (
            <ol>
                {
                this.state.friends.map((friend,index)=> {
                  return<li key={index}>{friend}</li>
                    })

                }

            </ol>
        )
    }
}

export default FriendsList;