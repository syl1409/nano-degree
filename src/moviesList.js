import React, { Component } from 'react';
import UserList from './userList';


class MovieList extends Component {
  render(){
    const profiles = this.props.profiles;
    const movies = this.props.movies;
    const users = this.props.users;
 
   
    return(
    <div>
      {Object.keys(movies).map((
       id
       )=>(
      <div className="card" key={id}>
    <h2>{movies[id].name}</h2>
	
	
	<UserList profiles={profiles} users={users} id={movies[id].id}/>
</div>
    ))}  
      
    </div>
     
    )
  }



}
export default MovieList;