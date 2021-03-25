import React from 'react'
import Tag from "./Tag";

export default function Messsage({ body, tagPayload }) {

    const mssgTags = tagPayload.map((tag, index) => {

        // console.log(tag.detail);
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
