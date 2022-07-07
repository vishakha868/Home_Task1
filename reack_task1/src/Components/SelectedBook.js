import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Card, Button } from 'react-bootstrap';
import { addToCart } from '../redux/buy/buy-actions';
const SelectedBook = ({ currentItem, addToCart }) => {
    console.log(currentItem)
    return (
        <>
            <div class="selected-item">
                <div class="image">
                    <img src={currentItem.image} alt="selected_image" />
                </div>
                <div class="descrip">

                    <Card style={{ width: '50rem', height: '28rem', margin: '1%', padding: 0 }}>
                        <Card.Body>
                            <Card.Title><h3>{currentItem.title}</h3></Card.Title>
                            <Card.Text>
                                <b>Book Price: </b>{currentItem.price}<br></br>
                                <b>Author Name: </b>Amrita Pritam.<br></br>
                                <b>Page Count: </b>150<br></br>
                                <b>ISBN: </b>{currentItem.id}<br></br>
                                <b>Description</b>
                                <p>
                                    "Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                                    accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
                                    quae ab illo inventore veritatis et quasi architecto beatae vitae
                                    dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
                                    aspernatur aut odit aut fugit, sed quia consequuntur magni dolores
                                    eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est,
                                    qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit,
                                    sed quia non numquam eius modi tempora incidunt ut labore et dolore
                                    magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis
                                    nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut
                                    aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit
                                    qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum
                                    qui dolorem eum fugiat quo voluptas nulla pariatur?"
                                </p>
                            </Card.Text>

                        </Card.Body>
                    </Card>
                    <Button variant="warning" size='lg' className='change' style={{ color: 'white' }} onClick={() => { addToCart(currentItem.id); alert("Successfully added to cart") }}>
                        Add to Cart</Button>
                    <Link to={'/Cart'}>
                        <Button variant="danger" size='lg' className='change' onClick={() => addToCart(currentItem.id)}>
                            Buy Now
                        </Button>
                    </Link>
                </div>
            </div>
        </>
    )
}
const mapStateToProps = (state) => {
    return {
        currentItem: state.buy.currentItem,
    }
}
const mapDispatchToState = (dispatch) => {
    return {
        addToCart: (id) => dispatch(addToCart(id)),
    }
}
export default connect(mapStateToProps, mapDispatchToState)(SelectedBook);
