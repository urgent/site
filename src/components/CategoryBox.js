import React from 'react'
import Tag from "./Tag";

// this component displays an individual category in the sidebar
export default function CategoryBox({ payload }) {

  const tagsArr = Object.values(payload)[0].map((tag, index) => <Tag key={index} tag={tag} />)

  // console.log(tagsArr);

  // console.log(payload);

  return (

    <div className="catContainer">
      <h2 className="catTitle">{Object.keys(payload)[0]}</h2>
      <div className="tagsWrapper">
        {tagsArr}
      </div>
    </div>
  )
}
