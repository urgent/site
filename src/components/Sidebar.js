import CategoryBox from "./CategoryBox";
import { useSmoomsContext } from "../utils/SmoomsState";

export default function Sidebar({ categories }) {
    const category = categories.map((cat, index) => <CategoryBox key={index} payload={cat} />)
    const [{ value }, dispatch] = useSmoomsContext();

    console.log(value);

    return (
        <section className="sideBarWrapper innerBorder">
            {category}
        </section>
    )
}
