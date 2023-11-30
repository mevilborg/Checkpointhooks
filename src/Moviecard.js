import Card from 'react-bootstrap/Card';
import ReactStars from 'react-stars'
const Moviecard =({el})=>{
    return(
        <Card style={{ width: '18rem' }} className="card">
      <Card.Img variant="top" src={el.img} />
      <Card.Body className="card-body">
        <Card.Title className="card-title">{el.title}</Card.Title>
        <ReactStars
  count={5}
 size={24}
 value={el.rating}
color2={'#ffd700'}
edit={false} />
       
        <Card.Text className="card-text">
          {el.desc}
        </Card.Text>
        
      </Card.Body>
    </Card>
    )
}
export default Moviecard