import { useEffect } from "react";
import Message from "./Messsage";
import { useSmoomsContext } from "../utils/SmoomsState";

// this component is the container for displaying all individual messages
export default function Messages({ messages }) {
    const [{ activeTags, activeMssgs, altMssgs }, dispatch] = useSmoomsContext();

    console.log(altMssgs);

    useEffect(() => {
        if (activeTags.length > 0) {
            mainMssgs(messages);
            displayAltMssgs(messages);

        } else {
            dispatch({ type: "clearMssgs" })
        }


    }, [activeTags]);

    const mainMssgs = (messages) => {
        let newMssgs = [];
        let activeTagIDs = {};

        messages.forEach((mssg) => {
            let count = 0;
            let tagsArr = mssg.tags.items;

            activeTags.forEach((aTag) => {
                activeTagIDs[aTag] = true;
            });

            tagsArr.forEach((obj) => {
                if (activeTagIDs[obj.tagID]) {
                    count++;
                }
            });

            if (count === activeTags.length) {
                newMssgs.push(mssg);
            }

            count = 0;
            return;
        });

        dispatch({ type: "filterMssgs", payload: { messages: newMssgs } });
    }

    const displayAltMssgs = (messages) => {
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

        dispatch({ type: "filterAltMssgs", payload: { messages: newMssgs } });
    }

    const displayMessages =
        activeMssgs.length > 0 ? (
            activeMssgs.map((mssg) => {
                return (
                    <Message
                        key={mssg.id}
                        body={mssg.body}
                        tagPayload={mssg.tags?.items}
                    />
                );
            })
        ) : (
                <div className="introText mainFont xl">👋 Hi! Select tags to pull up messages</div>
            );

    const altMessages =
        activeMssgs.length > 0 ? (
            activeMssgs.map((mssg) => {
                return (
                    <Message
                        key={mssg.id}
                        body={mssg.body}
                        tagPayload={mssg.tags?.items}
                    />
                );
            })
        ) : (
                ""
            );

    return <section className="mssgBoardWrapper">
        {displayMessages}
        {/* {altMessages} */}
    </section>;
}
