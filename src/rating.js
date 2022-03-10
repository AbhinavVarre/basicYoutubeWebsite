import React, { useState } from 'react'
import { Rating } from 'react-simple-star-rating'

export default function RatingsElem(Props) {
  const [rating, setRating] = useState(null) // initial rating value

  // Catch Rating value
  const handleRating = (rate) => {
    setRating(rate)
    // other logic
  }

  return (
    <div className='App'>
        <Rating onClick={handleRating} ratingValue={rating} initialValue={Props.avg_rating} />
        <p>({Props.num_ratings} votes)</p> 
    </div>
  )
}