import data from "../data/demo.json";

export default function Sidebar() {
    return (
        <div>
            Category Sidebar
            {data.messages[0].body}
        </div>
    )
}
