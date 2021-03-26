import data from "../data/demo.json";
import Message from "./Messsage";
import { useSmoomsContext } from "../utils/SmoomsState";


export default function Messages({ messages }) {

    const [{ activeTags }, dispatch] = useSmoomsContext();

    console.log(activeTags, messages);

    // const filteredMssgs = messages.filter(mssg => {

    // })

    const displayMessages = messages.map((mssg, index) => {
        return <Message key={index} body={mssg.body} tagPayload={mssg.tags} />
    })

    return (
        <section className="mssgBoardWrapper">
            {displayMessages}
        </section>
    )
}
