import React from 'react'

export default function CategoryBox({ payload }) {
  return (
    <h2>{Object.keys(payload)[0]}</h2>
  )
}
