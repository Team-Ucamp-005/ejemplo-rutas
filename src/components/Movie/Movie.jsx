import React from 'react'
import { Link } from 'react-router-dom'
import { Card, Button } from 'react-bootstrap'

const Movie = ({ data }) => {
  return (
    <Card style={{ width: '18rem', minHeight: '18rem' }}>
      <Card.Img variant="top" src={data.image} />
      <Card.Body>
        <Card.Title>{data.title}</Card.Title>
        <Card.Text>
          {data.description.substring(0, 85)}...
        </Card.Text>
        <Link to={`/${data.id}`}>
          <Button variant="primary">Go somewhere</Button>
        </Link>
      </Card.Body>
    </Card>
  )
}

export default Movie