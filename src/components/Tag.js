import React from 'react'
import { useSmoomsContext } from "../utils/SmoomsState";

// this component displays an individual tag in any given message on the message board
export default function Tag({ tag }) {
  const [{ activeTags }, dispatch] = useSmoomsContext();

  const handleTag = () => {
    if (activeTags.includes(tag.id)) {
      dispatch({ type: "removeTag", payload: { tag: tag.id } });
    } else {
      dispatch({ type: "addTag", payload: { tag: tag.id } });
    }
  }


  return (
    <div className={activeTags.includes(tag.id) ? "tagBox active" : "tagBox"} onClick={() => handleTag()}>{tag.label}</div>
  )
}
