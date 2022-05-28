import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { Col } from 'react-bootstrap'
import axios from 'axios'
import Movie from '../Movie/Movie'

const Movies = () => {

  const [moviesState, setMoviesState] = useState([])
  /***
   * moviesState === []
   * 
   * useEffect => setMoviesState(data)
   * 
   * moviesState === [{},{},{},{}]
   */


  const getMovies = async () => {
    const url = 'https://ghibliapi.herokuapp.com/films'
    const response = await axios.get(url)
    // axios.get(url)
    //   .then((res) => console.log(res))
    console.log(response)
    setMoviesState(response.data)
  }

  useEffect(() => {
    getMovies()
  }, [])


  return (
    <div>
      <Col lg={3} md={4} sm={6} xs={12} className="mt-3" >
        {
          moviesState.map((info, index) => {
            return <Movie data={info} key={index} />
          })
        }
      </Col>
    </div>
  )
}

export default Movies