import { useEffect } from "react";
import Message from "./Messsage";
import { useSmoomsContext } from "../utils/SmoomsState";

// this component is the container for displaying all individual messages
export default function Messages({ messages }) {
    const [{ activeTags, activeMssgs }, dispatch] = useSmoomsContext();

    console.log(activeMssgs);

    useEffect(() => {
        if (activeTags.length > 0) {
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
        } else {
            dispatch({ type: "clearMssgs" })
        }


    }, [activeTags]);

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
                <div>👋 Hi! select tags to pull up messages</div>
            );

    return <section className="mssgBoardWrapper">
        {displayMessages}
    </section>;
}
