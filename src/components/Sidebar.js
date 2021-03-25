import { useContext } from "react";
import CategoryBox from "./CategoryBox";
import TagContext from "../utils/TagContext"

export default function Sidebar({ categories }) {
    const category = categories.map((cat, index) => <CategoryBox key={index} payload={cat} />)
    const test = useContext(TagContext);

    console.log(test);
    return (
        <section className="sideBarWrapper innerBorder">
            {category}
        </section>
    )
}
