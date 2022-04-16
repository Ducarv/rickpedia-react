import React, { useState, useEffect } from 'react';
import './App.css'

import api from './services/api';

export const App = () => {
  const [data, setData] = useState([])

  useEffect(() => {
    async function getData() {
      const response = await api.get('https://rickandmortyapi.com/api/character')
      setData(response.data.results)
    } 
    getData()
  }, [])

  return (
    <div>
      {data && (
        <h1>{data.name}</h1>
      )}
    </div>
  )
}

