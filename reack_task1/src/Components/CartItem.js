import { Card, Button } from 'react-bootstrap';
const CartItem=(item)=>{
    console.log(item)
    return (
        <>

            <Card style={{margin:'1%',padding:0}}>
            <Card.Body style={{display:'flex'}}>
                <div>
                <Card.Img src={item.data.image} style={{
                    width: '10rem', height: '10rem'
                }} alt="pic"/>
                </div>
                <div class="cart_body_data">
                <Card.Title>{item.data.title}</Card.Title>
                    <Card.Text>
                        {item.data.subtitle}<br></br>
                        Price: {item.data.price}
                    </Card.Text>
                </div>
                    
                </Card.Body>
            </Card>
        </>
    )
}
export default CartItem;