import data from "../data/demo.json";
import { useEffect } from "react";
import Message from "./Messsage";
import { useSmoomsContext } from "../utils/SmoomsState";
import { loadGetInitialProps } from "next/dist/next-server/lib/utils";

// this component is the container for displaying all individual messages
export default function Messages({ messages }) {

    const [{ activeTags, activeMssgs }, dispatch] = useSmoomsContext();

    useEffect(() => {
        if (activeTags.length > 0) {
            let newMssgs = [];
            let mssgIDs = {};

            messages.forEach(mssg => {
                let tagsArr = mssg.tags.items
                tagsArr.forEach(obj => {
                    if (activeTags.includes(obj.tagID) && !mssgIDs[mssg.id]) {
                        newMssgs.push(mssg);
                        mssgIDs[mssg.id] = true;
                        return
                    }
                });
                return
            });
            dispatch({ type: "filterMssgs", payload: { messages: newMssgs } });
        }
    }, [activeTags]);

    const displayMessages = activeMssgs.length > 0 ?
        activeMssgs.map(mssg => {
            return (<Message key={mssg.id} body={mssg.body} tagPayload={mssg.tags?.items} />)
        })
        : (<div>No messages</div>);

    console.log(activeMssgs);

    return (
        <section className="mssgBoardWrapper">
            {displayMessages}
        </section>
    )
}
