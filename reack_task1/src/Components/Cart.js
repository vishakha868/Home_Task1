import CartItem from './CartItem';
import { connect } from 'react-redux';
import { Col, Row, Container, Button } from 'react-bootstrap';
import { proceedToCheck } from '../redux/buy/buy-actions';
import{Link} from 'react-router-dom';
// import { useState,useEffect } from 'react';
const Cart = ({ cart, proceedToCheck }) => {
    // console.log(proceedToCheck())
    var count=0;
    var cost=0;
   const calculateCost=(()=>{
       cart.map((item)=>{
        count+=1;
        cost+=parseFloat(item.price)
       })
       cost=parseFloat(cost).toFixed(2);

   })();
    return (
        <div className="cart">
            <div className="address">
                <h5>Shipping Address</h5>
                <br></br>
                <Container>
                    <Row>
                        <Col><h5>Address Line 1</h5></Col>
                        <Col md={6}><input type="text" id="address_line1" /></Col>
                    </Row>
                    <Row>
                        <Col><h5>Address Line 2</h5></Col>
                        <Col md={6}><input type="text" id="address_line2" /></Col>
                    </Row>
                    <Row >
                        <Col><h5>City</h5></Col>
                        <Col md={6}><input type="text" id="city" /></Col>
                    </Row>
                    <Row >
                        <Col><h5>State/Province</h5></Col>
                        <Col md={6}><input type="text" id="state" /></Col>
                    </Row>
                    <Row >
                        <Col><h5>Zip/Postal Code</h5></Col>
                        <Col md={6}><input type="text" id="postal_code" /></Col>
                    </Row>
                    <Row>
                        <Col><h5>Country</h5></Col>
                        <Col md={6}> <input type="text" id="country" /></Col>
                    </Row>
                    <Row >
                        <Col><h5>Phone No.</h5></Col>
                        <Col md={6}> <input type="number" id="phone_no" /></Col>
                    </Row>
                    <br></br>
                    <Row>
                        <Col><Button variant="warning">Save Address</Button></Col>
                        <Col><Button variant="warning">Edit Address</Button></Col>
                    </Row>
                </Container>
            </div>
            <div className="shop_bag">

                <h5>Shopping Bag</h5>
                <br></br>
                <div className='cartItem'>
                    {
                        cart.map(item => {
                            return (
                                <CartItem key={item.id} data={item} />
                            )

                        })
                    }

                </div>
                <div className='cart_summary'>
                    <div className='summary_title'>Cart summary</div>
                    <div className='summary price'>
                        <span >Total({count} items):</span>
                        <span>{cost}$</span>
                    </div>
                    <Link to='/OrderConfirmed'>
                        <Button className='summary_checkout' variant="warning" onClick={() => proceedToCheck(cart)}>
                            Proceed To checkout
                        </Button>
                    </Link>

                </div>
            </div>
        </div>
    )
}
const mapStateToProps = state => {
    return {
        cart: state.buy.cart
    }
}
const DispatchToState = dispatch => {
    return {
        proceedToCheck: (id) => dispatch(proceedToCheck(id)),
    }
}

export default connect(mapStateToProps, DispatchToState)(Cart);