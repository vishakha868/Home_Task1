import { Route,Routes} from "react-router-dom";
import React from "react";
// const BookDetail=React.lazy(()=>import('./BookDetail'))
import SelectedBook from "./SelectedBook";
import OrderConfirmed from "./OrderConfirmed";
import RenderData from "./RenderData";
const Home=React.lazy(()=>import('./Home'))
const Orders=React.lazy(()=>import('./Orders'))
const Cart=React.lazy(()=>import('./Cart'))
function MainRoute() {
    return (
        <Routes>
            <Route path="/" element={<RenderData />}></Route>
            <Route path='/MyOrders' element={<Orders />}></Route>
            <Route path='/Cart' element={<Cart />}></Route>
            <Route path='/OrderConfirmed' element={<OrderConfirmed />}></Route>
            <Route path='/Book/:bookID' element={<SelectedBook />}></Route>
        </Routes>
    );

}
export default MainRoute;