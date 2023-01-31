import React from 'react'
import ReactDOM from 'react-dom'
import { useState, useEffect } from 'react'
import './App.css'



  export default function NewsStory(props) {
    
      const [newsData, setNewsData] = React.useState({})
      const [count, setCount] = React.useState(0)

      var url = 'https://newsapi.org/v2/everything?' +
          'q=Apple&' +
          'from=2023-01-29&' +
          'sortBy=popularity&' +
          'apiKey=426a94f11afe46d0b56ad60680b44025';
      
  
      React.useEffect(function() {
          console.log("Effect ran")
          fetch(url)
              .then(res => res.json())
              .then(data => setStarWarsData(data))
      }, [])

    return (
      <div className="newsContainerBackground">

        <h2>{newsData}</h2>
        <h1>HEllO</h1>
        <p>Hello again</p>
      </div>
    )
  }



