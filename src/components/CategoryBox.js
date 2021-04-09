import React from 'react'
import Tag from "./Tag";

// this component displays an individual category in the sidebar
export default function CategoryBox({ payload }) {
  const tagsArr = payload.tags.items.map(tag => <Tag key={tag.id} tag={tag.label} />)
  
  return (

    <div className="catContainer">
      <h2 className="catTitle">{payload.name}</h2>
      <div className="tagsWrapper">
        {tagsArr}
      </div>
    </div>
  )
}
