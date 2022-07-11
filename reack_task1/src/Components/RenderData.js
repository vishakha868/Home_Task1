import {connect} from 'react-redux';
// import { memo } from 'react';
import Product from './Product';

const RenderData = ({products}) => {
    return (
        <div className='content'>
            {products.map((book) => {
                return(
                       <Product key={book.id} productData={book}/>
                )
                    
                    
                    
                })
            }
        </div>
    )
}
const mapStateToProps=(state)=>{
    return{
        products:state.buy.products,
    }
    
}
export default connect(mapStateToProps)(RenderData);