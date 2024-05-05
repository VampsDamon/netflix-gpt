import React from 'react'
import { useParams } from 'react-router-dom'
import Header from './Header'

const MoviePage = () => {
    const {movieID}=useParams()
    console.log(movieID)
  return (
    <div>
      MoviePage
      </div>
  )
}

export default MoviePage