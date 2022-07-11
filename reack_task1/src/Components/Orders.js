import { connect } from 'react-redux';
import { Card} from 'react-bootstrap';
const Orders = ({ checkout }) => {
    console.log(checkout)
    return (
        <div class="orders">
            {checkout.map((item) => {
                return (
                    <div className="item">
                    <Card style={{height:'15rem'}}>
                        <Card.Header style={{backgroundColor:'#2b0f42',color:'white'}}>
                           <div style={{float:'left'}}> <h5>Order Placed: 14 June, 2022</h5></div>
                            <div style={{float:'right'}}>Status: Delivered</div>
                        </Card.Header>
                        <Card.Body style={{display:'flex'}}>
                            <div>
                            <Card.Img src={item.image} style={{
                                width: '6rem', height: '9rem'}} />
                            </div>
                           
                            <div>
                            <Card.Title>{item.title}</Card.Title>
                            <Card.Text>
                                <b>Author Name: </b>Amrita Pritam.<br></br>
                                <b>Price: </b>{item.price}
                            </Card.Text>
                            </div>
                           
                        </Card.Body>
                    </Card>
                    </div>
                )
            }
            )}

        </div>
    )
}
const mapStateToProps = (state) => {
    return {
        checkout: state.buy.checkout,
    }


}
export default connect(mapStateToProps)(Orders);