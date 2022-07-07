import axios from 'axios';
import { useEffect, useState } from 'react';
import RenderData from './RenderData';
function Home(){
    const [counter, setCounter] = useState(1);
    const [books, setBooks] = useState([]);
    useEffect(() => {
        if(counter>0){
            async function fetchData(){
                const res = await axios.get(`https://api.itbook.store/1.0/search/mongodb?page=${counter}`);
                setBooks(res.data.books);
            }fetchData();
        }   
    },[counter])
    return (
        <>
           <RenderData books={books}/>
            <button onClick={() => setCounter(counter + 1)}className="show_more">Show More</button>
            
        </>

    )
}
export default Home;