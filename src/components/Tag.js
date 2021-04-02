import React from 'react'
import { useSmoomsContext } from "../utils/SmoomsState";

// this component displays an individual tag in any given message on the message board
export default function Tag({ tag }) {
  const [{ activeTags }, dispatch] = useSmoomsContext();

  const handleTag = () => {
    if (activeTags.includes(tag)) {
      dispatch({ type: "removeTag", payload: tag });
    } else {
      dispatch({ type: "addTag", payload: tag });
    }
  }


  return (
    <div className={activeTags.includes(tag) ? "tagBox active" : "tagBox"} onClick={() => handleTag()}>{tag}</div>
  )
}
