import React, { Component } from 'react';
class UserList extends Component {
  
  render(){
    const idMovie = this.props.id;
    const profiles = this.props.profiles
    const users = this.props.users;
    
    const movieUsers = profiles.filter(x=>x.favoriteMovieID == idMovie);
    
    console.log(users[1].name, movieUsers);
    
    if(movieUsers.length > 0){
  return(
  	<ul>
    <li><b>User that like the movie:</b></li>
    {movieUsers.map((user)=>(
  	<li key={user.id}>{users[parseInt(user.userID, 10)].name}</li>
  ))}
    </ul>
	  )}
    else{
      
       return(
  	<p>None of the current users liked this movie</p>
	  )
    }
  }
}
export default UserList;