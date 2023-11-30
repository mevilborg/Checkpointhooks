
import { useState } from 'react';
import './App.css';
import Movielist from './Movielist';
import Moviedata from './Moviedata';
import Addmovie from './Addmovie';
import Filter from './Filter';

function App() {
  const [movies,setMovies]=useState(Moviedata)
  const [input,setInput]=useState()
  const [rating, setRating] = useState(0)
  const addM =(newMovie)=>{
    setMovies([...movies,newMovie])

  }
  
  return (
    <div className="App">
      <Filter setInput={setInput}  setRating={setRating}/>
      <Movielist movies={movies} input={input} rating={rating}/>
      <Addmovie addM={addM}/>
    
    </div>
  );
}

export default App;
