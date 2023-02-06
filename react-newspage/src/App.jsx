import React from 'react'
import ReactDOM from 'react-dom'
import { useState, useEffect } from 'react'
import './App.css'



  export default function NewsStory(props) {

    return (
      <div className="newsContainerBackground">

 
        <button onClick={props.clickHandle}>Test Button</button>
        <h1>{`${props.articleHeadline} Hi`}</h1>
      </div>
    )
  }



