import React from 'react'
import categories from "../data/demo.json";

export default function CategorySidebarKTL() {
  return (
    <div>
      Category Sidebar
      {categories.categories.competitors[0]}
    </div>
  )
}
