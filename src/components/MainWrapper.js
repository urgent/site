import MessageBoard from "../components/MessageBoard";
import Sidebar from "../components/Sidebar";


export default function MainWrapper() {
    return (
        <div className="mainWrapper">
            <Sidebar />
            <MessageBoard />
        </div>
    )
}
