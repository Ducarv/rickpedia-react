import React, { useState, useEffect } from 'react';
import './App.css'

import api from './services/api';
import { Cards } from './components/Cards/index';

export const App = () => {
  const [data, setData] = useState([])
  const [page, setPage] = useState(1)

  useEffect(() => {
    getCharactersInfos()
  }, [page])

  // passar via props o resultado da API para o componente card
  async function getCharactersInfos(e) {
    try {
      const response = await api.get(`/character/?page=${page}`)
      const { results } = response.data
      setData(results)
    } catch(error) {
      console.error(error)
    }
  }

  return (
    <div>
      <Cards data={data} page={page}/>
    </div>
  )
}

