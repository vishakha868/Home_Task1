import { Suspense } from "react";
import {BrowserRouter as Router} from "react-router-dom";
import MainRoute from './MainRoute';
import Header from './Header';
const Main=()=>{
    return(
        <Suspense fallback="loading............">
            <Router>
                <Header></Header>
                <MainRoute/>
            </Router>
        </Suspense>
    )
}
export default Main;
