import React from "react";
import UserItem from "./UserItem";

function Users(props) {
    //console.log(props.users);
    
    return(
        <div style={userStyle}>
          {props.users.map((user,index)=>
            (
              <UserItem user={user} />//if online then omit { } and return statement
            )
              
            
        )}
          
        </div>
    )
}
const userStyle={
  display:"grid",
  gridTemplateColumns:"repeat(3,1fr)",
  gridGap:"1rem",
  color:"black"
}
export default Users;