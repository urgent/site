import React from "react";
import Tag from "./Tag";

// this component displays an individual message
export default function Messsage({ body, tagPayload }) {
  const mssgTags = tagPayload?.map((tag) => {
    return <Tag key={tag.tagID} tag={tag.tag} />;
  });

  return (
    <div className="messageWrapper">
      {body}
      <div className="mssgTags">{mssgTags}</div>
    </div>
  );
}
