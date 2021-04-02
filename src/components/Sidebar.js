import CategoryBox from "./CategoryBox";

// this is the sidebar component that displays all the categories
export default function Sidebar({ categories }) {
    const category = categories.map((cat, index) => <CategoryBox key={index} payload={cat} />)

    return (
        <section className="sideBarWrapper innerBorder">
            {category}
        </section>
    )
}
