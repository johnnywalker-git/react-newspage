import React from 'react'
import ReactDOM from 'react-dom'
import { useState, useEffect } from 'react'
import './App.css'



  export default function NewsStory(props) {
    
      const [newsData, setNewsData] = React.useState({})
      
      var url = 'https://newsapi.org/v2/everything?' +
          'q=Apple&' +
          'from=2023-01-29&' +
          'sortBy=popularity&' +
          'apiKey=426a94f11afe46d0b56ad60680b44025';
      
  
      React.useEffect(function() {
          console.log("Effect ran")
          fetch(url)
              .then(res => res.json())
              .then(data => setNewsData(data))
      }, [])


      let articles = newsData.articles

      console.log(articles)


    return (
      <div className="newsContainerBackground">

        <h2></h2>
        <h1>HEllO</h1>
        <button onClick={props.clickHandle()}>Test Button</button>
        <p>Hello again</p>
        <h1>Heading</h1>
      </div>
    )
  }



