import React from 'react'
import { useSmoomsContext } from "../utils/SmoomsState";

export default function Tag({ tag }) {
  const [{ activeTags }, dispatch] = useSmoomsContext();
  console.log(activeTags);

  const addTag = () => {
    if (activeTags.includes(tag)) {
      dispatch({ type: "removeTag", payload: tag })
    } else {
      dispatch({ type: "addTag", payload: tag })
    }

  }
  return (
    <div className="tagBox" onClick={() => addTag()}>{tag}</div>
  )
}
