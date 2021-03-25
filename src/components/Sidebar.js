import React from "react";
import CategoryBox from "./CategoryBox";

export default function Sidebar({categories}) {
  const category = categories.map((cat,index) => <CategoryBox key={index} payload={cat}/>)

    return (
        <section className="sideBarWrapper innerBorder">
            {category}
        </section>
    )
}
