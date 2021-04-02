import React from 'react'
import Tag from "./Tag";

// this component displays an individual message
export default function Messsage({ body, tagPayload }) {

    const mssgTags = tagPayload.map((tag, index) => {
        return <Tag key={index} tag={tag.detail} />
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
