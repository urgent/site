import data from "../data/demo.json";
import Message from "./Messsage";
import { useSmoomsContext } from "../utils/SmoomsState";


export default function Messages({ messages }) {

    const [{ activeTags }] = useSmoomsContext();

    const filteredMssgs = messages.filter(mssg => {
        let split = false;

        for (let i = 0; i < mssg.tags.length; i++) {

            if (activeTags.includes(mssg.tags[i].detail)) {
                split = true;
            }
        }
        return split
    })

    const displayMessages = filteredMssgs.map((mssg, index) => {
        return <Message key={index} body={mssg.body} tagPayload={mssg.tags} />
    })

    return (
        <section className="mssgBoardWrapper">
            {displayMessages}
        </section>
    )
}
