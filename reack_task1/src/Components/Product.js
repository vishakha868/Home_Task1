import { Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import React from 'react';
import {connect} from 'react-redux';
import {loadCurrentItem} from '../redux/buy/buy-actions'
const Product=({productData,loadCurrentItem})=>{
    return (
        <>

            <Card style={{ width: '18rem',height:'28rem',margin:'1%',padding:0}}>
            <Card.Body>
                <Card.Img src={productData.image} style={{
                    width: '10rem', height: '15rem', display: 'block', margin: 'auto',padding:0
                }} />
                    <Card.Title>{productData.title}</Card.Title>
                    <Card.Text>
                        <b>Price: </b>{productData.price}
                    </Card.Text>
                </Card.Body>
                <Card.Footer>
                    <Link to={`/Book/${productData.id}`}>
                    <Button variant="danger" onClick={()=>loadCurrentItem(productData)}
                    size='lg'style={{display:'block',marginLeft:'auto',marginRight:'auto'}}>
                        Buy Now</Button>
                    </Link>
                    
                    
                </Card.Footer>
            </Card>
        </>
    )
}
const DispatchCurrentItem=dispatch=>{
 return{
    loadCurrentItem:(item)=>dispatch(loadCurrentItem(item)),
 }
}
export default connect(null,DispatchCurrentItem)(Product);