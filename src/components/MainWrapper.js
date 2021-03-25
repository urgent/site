import MessageBoard from "../components/MessageBoard";
import Sidebar from "../components/Sidebar";
import data from "../data/demo.json";


export default function MainWrapper() {
    return (
        <div className="mainWrapper">
            <Sidebar />
            <MessageBoard />
        </div>
    )
}
