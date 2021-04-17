import { useEffect } from "react";
import Message from "./Messsage";
import { useSmoomsContext } from "../utils/SmoomsState";
import CreateMessageWrapper from './CreateMessageWrapper';

// this component is the container for displaying all individual messages
export default function Messages({ messages }) {
  const [{ activeTags, activeMssgs, altMssgs }, dispatch] = useSmoomsContext();

  useEffect(() => {
    if (activeTags.length > 0) {
      mainMssgs(messages);
    } else {
      dispatch({ type: "clearMssgs" });
    }
  }, [activeTags]);

  // console.log(activeTags, activeMssgs);

  // create matching messages array
  const mainMssgs = (messages) => {
    let newMssgs = [];
    let activeTagIDs = {};

    messages.forEach((mssg) => {
      let count = 0;
      let tagsArr = mssg.messageTags.items;

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

    displayAltMssgs(messages, newMssgs);

    dispatch({ type: "filterMssgs", payload: { messages: newMssgs } });
  };

  // create the alternate messages array
  const displayAltMssgs = (messages, newMssgs) => {
    let newAltMssgs = [];
    let mssgIDs = {};
    let activeMssgIDs = {};

    newMssgs.forEach((mssgObj) => {
      activeMssgIDs[mssgObj.id] = true;
    });

    messages.forEach((mssg) => {
      let tagsArr = mssg.messageTags.items;

      tagsArr.forEach((obj) => {
        if (
          activeTags.includes(obj.tagID) &&
          !mssgIDs[mssg.id] &&
          !activeMssgIDs[mssg.id]
        ) {
          newAltMssgs.push(mssg);
          mssgIDs[mssg.id] = true;
          return;
        }
      });

      return;
    });

    dispatch({ type: "filterAltMssgs", payload: { messages: newAltMssgs } });
  };

  // returns all matching messages
  const displayMessages =
    activeMssgs.length > 0 ? (
      activeMssgs.map((mssg) => {
        return (
          <Message
            key={mssg.id}
            body={mssg.body}
            tagPayload={mssg.messageTags?.items}
          />
        );
      })
    ) : altMssgs.content.length > 1 ? (
      <div className="introText mainFont xl">No Matches 😬</div>
    ) : (
          <div className="introText mainFont xl">
            👋 Hi! Select tags to pull up messages
          </div>
        );

  // returns alternate matches
  const altMessages =
    altMssgs.content.length > 0
      ? altMssgs.content.map((mssg) => {
        return (
          <Message
            key={mssg.id}
            body={mssg.body}
            tagPayload={mssg.messageTags?.items}
          />
        );
      })
      : "";

  const handleAltTrigger = () => {
    if (altMssgs.active) {
      dispatch({ type: "displayAltMssgs", payload: false });
    } else {
      dispatch({ type: "displayAltMssgs", payload: true });
    }
  };

  return (
    <section className="mssgBoardWrapper">
      {displayMessages}
      {activeTags.length > 1 && (
        <>
          <p className="altMssgsTrigger" onClick={() => handleAltTrigger()}>
            Related Searches ▼
          </p>

          <div className={altMssgs.active ? "" : "altHide"}>{altMessages}</div>
        </>
      )}
      <CreateMessageWrapper />
    </section>
  );
}
