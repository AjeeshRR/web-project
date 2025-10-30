import React from 'react'; 
const DisplayTVShows = () => ( 
  <div> 
    <h1>TV Show Catalog</h1> 
    <button>Logout</button> 
    <select defaultValue="Sort by Title (A-Z)"> 
      <option>Sort by Title (A-Z)</option> 
    </select> 
    <table> 
      <thead> 
        <tr> 
          <th>Title</th><th>Genre</th><th>Status</th><th>Progress</th><th>Rating</th><th>Action</
 th> 
        </tr> 
      </thead> 
    </table> 
    <p>No TV shows found</p> 
  </div> 
); 
 
export default DisplayTVShows;
