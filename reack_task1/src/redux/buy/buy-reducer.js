import * as actionTypes from './buy-types';
// import axios from 'axios';
const INITIAL_STATE={
    products:[
        {
            "title": "Retro Gaming with Raspberry Pi, 2nd Edition",
            "subtitle": "",
            "id": 1,
            "price": "24.00",
            "image": "https://itbook.store/img/books/1001656317756.png",
            "url": "https://itbook.store/books/1001656317756"
        },
        {
            "title": "Debugging with GDB",
            "subtitle": "The GNU Source-Level Debugger",
            "id": 2,
            "price": "65.00",
            "image": "https://itbook.store/img/books/9780983159230.png",
            "url": "https://itbook.store/books/9780983159230"
        },
        {
            "title": "Grokking Machine Learning",
            "subtitle": "",
            "id": 3,
            "price": "49.49",
            "image": "https://itbook.store/img/books/9781617295911.png",
            "url": "https://itbook.store/books/9781617295911"
        },
        {
            "title": "Functional Programming in Kotlin",
            "subtitle": "",
            "id": 4,
            "price": "18.63",
            "image": "https://itbook.store/img/books/9781617297168.png",
            "url": "https://itbook.store/books/9781617297168"
        },
        {
            "title": "Kubernetes Native Microservices with Quarkus and MicroProfile",
            "subtitle": "",
            "id": 5,
            "price": "45.30",
            "image": "https://itbook.store/img/books/9781617298653.png",
            "url": "https://itbook.store/books/9781617298653"
        },
        {
            "title": "How to Lead in Data Science",
            "subtitle": "",
            "id": 6,
            "price": "43.49",
            "image": "https://itbook.store/img/books/9781617298899.png",
            "url": "https://itbook.store/books/9781617298899"
        },
        {
            "title": "Functional Programming in C#, 2nd Edition",
            "subtitle": "",
            "id": 7,
            "price": "53.99",
            "image": "https://itbook.store/img/books/9781617299827.png",
            "url": "https://itbook.store/books/9781617299827"
        },
        {
            "title": "Azure Pipelines Succinctly",
            "subtitle": "",
            "id": 8,
            "price": "57.00",
            "image": "https://itbook.store/img/books/9781642002133.png",
            "url": "https://itbook.store/books/9781642002133"
        },
        {
            "title": "Microsoft Excel Inside Out",
            "subtitle": "Office 2021 and Microsoft 365",
            "id": 9,
            "price": "42.16",
            "image": "https://itbook.store/img/books/9780137559534.png",
            "url": "https://itbook.store/books/9780137559534"
        },
        {
            "title": "Windows Internals, Part 2, 7th Edition",
            "subtitle": "",
            "id": 10,
            "price": "53.49",
            "image": "https://itbook.store/img/books/9780135462409.png",
            "url": "https://itbook.store/books/9780135462409"
        },
        {
            "title": "Microsoft Office Inside Out",
            "subtitle": "Office 2021 and Microsoft 365",
            "id": 11,
            "price": "36.93",
            "image": "https://itbook.store/img/books/9780137564095.png",
            "url": "https://itbook.store/books/9780137564095"
        },
        {
            "title": "Microsoft Excel Step by Step",
            "subtitle": "Office 2021 and Microsoft 365",
            "id": 12,
            "price": "30.62",
            "image": "https://itbook.store/img/books/9780137564279.png",
            "url": "https://itbook.store/books/9780137564279"
        },
        {
            "title": "Microsoft Excel Data Analysis and Business Modeling, 7th Edition",
            "subtitle": "Office 2021 and Microsoft 365",
            "id": 13,
            "price": "34.87",
            "image": "https://itbook.store/img/books/9780137613663.png",
            "url": "https://itbook.store/books/9780137613663"
        },
        {
            "title": "Intermediate Statistics with R",
            "subtitle": "",
            "id": 14,
            "price": "34.00",
            "image": "https://itbook.store/img/books/1001651662833.png",
            "url": "https://itbook.store/books/1001651662833"
        },
        {
            "title": "Professional Scrum Development with Azure DevOps",
            "subtitle": "",
            "id": 15,
            "price": "39.99",
            "image": "https://itbook.store/img/books/9780136789239.png",
            "url": "https://itbook.store/books/9780136789239"
        },
        {
            "title": "Developing Microservices Architecture on Microsoft Azure with Open Source Technologies",
            "subtitle": "",
            "id": 16,
            "price": "41.93",
            "image": "https://itbook.store/img/books/9780136819387.png",
            "url": "https://itbook.store/books/9780136819387"
        },
        {
            "title": "Begin to Code with JavaScript",
            "subtitle": "",
            "id": 17,
            "price": "19.11",
            "image": "https://itbook.store/img/books/9780136870722.png",
            "url": "https://itbook.store/books/9780136870722"
        },
        {
            "title": "Microsoft Azure Data Solutions",
            "subtitle": "An Introduction",
            "id": 18,
            "price": "36.23",
            "image": "https://itbook.store/img/books/9780137252503.png",
            "url": "https://itbook.store/books/9780137252503"
        },
        {
            "title": "Ansible Succinctly",
            "subtitle": "",
            "id": 19,
            "price": "56.00",
            "image": "https://itbook.store/img/books/9781642002164.png",
            "url": "https://itbook.store/books/9781642002164"
        },
        {
            "title": "Bash Guide",
            "subtitle": "",
            "id": 20,
            "price": "78.00",
            "image": "https://itbook.store/img/books/1001651514138.png",
            "url": "https://itbook.store/books/1001651514138"
        }
    ],
    cart:[],
    checkout:[],
    currentItem:null,
}
// async function fetchData(){
//     const res = await axios.get(`https://api.itbook.store/1.0/search/mongodb?page=1`);
//      INITIAL_STATE.products.push(res.data.books);
// }
// fetchData();
const buyReducer=(state= INITIAL_STATE, action)=>{
    switch(action.type){
        case actionTypes.ADD_TO_CART:
            const item=state.products.find(prod=>prod.id===action.payload.id)
 
            return {
                ...state,
                cart:[...state.cart,{...item,qty:1}]
        };
        case actionTypes.CHECKOUT_BOOK:
            console.log(action.payload)
            state.cart=[];
           return{
              ...state,
              checkout:action.payload,
           }
        
        case actionTypes.LOAD_CURRENT_ITEM:
            return {
                ...state,
                currentItem:action.payload,
            };  
        default:
            return state;
    }
}
export default buyReducer;