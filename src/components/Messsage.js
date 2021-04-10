import React from 'react'
import Tag from "./Tag";

// this component displays an individual message
export default function Messsage({ body, tagPayload }) {
    console.log(tagPayload);
    const mssgTags = tagPayload.map(tag => {
        return <Tag key={tag.id} tag={tag.tagID} />
    })

    return (
        <div className="messageWrapper">
            {body}
            <div className="mssgTags">
                {mssgTags}
            </div>
        </div>
    )
}
