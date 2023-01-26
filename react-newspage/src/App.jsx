import React from 'react'
import ReactDOM from 'react-dom'
import { useState, useEffect } from 'react'
import './App.css'

const apiKey = "426a94f11afe46d0b56ad60680b44025"


  export default function YourComponent() {

    const fetchNews = async (apiKey) => {
      const response = await fetch(`https://newsapi.org/v2/top-headlines?country=gb&apiKey=${apiKey}`)
      const data = await response.json()
      console.log(data)
    }

    return (
      <main>
  <div className="mainComponent">
    <p>{data}</p>
  </div>
  </main>
  )
  }



