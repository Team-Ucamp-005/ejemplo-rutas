import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import { Row, Col, Badge, Card } from 'react-bootstrap';


const Detail = () => {
  const { movieId } = useParams()
  const [movieInfo, setMovieInfo] = useState({})

  const getMovie = async (id) => {
    const url = `https://ghibliapi.herokuapp.com/films/${id}`
    const res = await axios.get(url)
    console.log(res)
    setMovieInfo(res.data)
  }

  useEffect(() => {
    getMovie(movieId)
  }, [])

  return (
    <>
      <Row>
        <Col lg={12}>
          <div className="movie__hero">
            <img width="100%" alt={`${movieInfo.title}-img`} src={movieInfo.movie_banner} className="movier__hero-image" />
          </div>
        </Col>
      </Row>
      <Row>
        <Col>
          <Card className="movie__info mt-3" >
            <Card.Title className=" d-inline-flex">
              <h1 className="movie__info-title">
                {movieInfo.title}
                <Badge style={{ marginLeft: '1rem' }} bg={
                  movieInfo.rt_score > 90
                    ? 'success' : 'warning'}>
                  {movieInfo.rt_score}
                </Badge>
              </h1>
            </Card.Title>
          </Card>
          <div className="movie__info">
            <div className="movie__info-director ">
              <h3>Director: <span>{movieInfo.director}</span> </h3>
              <h4>Duracion: <span>{movieInfo.running_time}</span></h4>
            </div>
            <p className="movie__info-description" style={{ fontSize: '1.5rem' }}>
              {movieInfo.description}
            </p>
          </div>
        </Col>
      </Row>
    </>
  )
}

export default Detail