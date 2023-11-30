import Moviecard from "./Moviecard"


const Movielist =({movies,input,rating})=>{
    
    return(
<div style ={{
    display : "flex",
    flexDirection : "row",
    justifyContent : "space-evenly",
    flexWrap : "wrap"    
}}>
 {
    movies.filter((el)=>el.title.includes(input) && el.rating >= rating)
    
    
    .map((el)=>(
        <Moviecard el={el}/>
    ))
 }
 </div>
    )
}
export default Movielist