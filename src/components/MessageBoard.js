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
            messages.forEach(mssg => {
                let tagsArr = mssg.tags.items
                tagsArr.forEach(obj => {
                    if (activeTags.includes(obj.tagID)) {
                        newMssgs.push(mssg);
                        return
                    }
                });
                return
            });
            dispatch({ type: "filterMssgs", payload: { messages: newMssgs } });
        }
    }, [activeTags]);

    // const displayMessages = messages.map(mssg => {
    //     // console.log(mssg);
    //     return <Message key={mssg.id} body={mssg.body} tagPayload={mssg.tags.items} />
    // })

    const displayMessages = activeMssgs?.map(mssg => {
        console.log(mssg.id);

        return <Message key={mssg.id} body={mssg.body} tagPayload={mssg.tags?.items} />
    })
    console.log("_________________________________________");

    return (
        <section className="mssgBoardWrapper">
            {displayMessages}
        </section>
    )
}
