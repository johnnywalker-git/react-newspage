import React from 'react'
import ReactDOM from 'react-dom/client'
import NewsStory from './App'
import '../style.css'

const apiKey = "426a94f11afe46d0b56ad60680b44025"

var url = 'https://newsapi.org/v2/everything?' +
          'q=Apple&' +
          'from=2023-01-29&' +
          'sortBy=popularity&' +
          'apiKey=426a94f11afe46d0b56ad60680b44025';

var req = new Request(url);

let allArticles = [];

fetch(url)
.then(res => res.json())
.then(data => console.log(data))


ReactDOM.createRoot(document.getElementById('root')).render(

    <NewsStory clickHanddle/>

)
