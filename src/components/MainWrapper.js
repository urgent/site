import MessageBoard from "../components/MessageBoard";
import Sidebar from "../components/Sidebar";

import data from "../data/demo.json";


export default function MainWrapper() {
    const {categories, messages} = data;
    return (
        <div className="mainWrapper">
            <Sidebar categories={categories}/>
            <MessageBoard messages={messages}/>
        </div>
    )
}
