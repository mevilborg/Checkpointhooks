import ReactStars from 'react-stars'
const Filter=({setInput,setRating})=>{
    return (
        <div>
      
      <input onChange={(event) => setInput(event.target.value)} />

      
      <ReactStars
        count={5}
        size={24}
        color2={'#ffd700'}
        onChange={(newRating) => setRating(newRating)}
      />
    </div>
    )
}
export default Filter