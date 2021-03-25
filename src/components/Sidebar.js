import React from "react";
import CategoryBox from "./CategoryBox";

export default function Sidebar({categories}) {
  console.log(categories);
  const categoryName = categories.map((category,index) => <CategoryBox key={index} title={Object.keys(category)[0]}/>)

    return (
        <section className="sideBarWrapper innerBorder">
            {categoryName}
        </section>
    )
}
