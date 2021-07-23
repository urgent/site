import React, { useRef } from 'react'
const ReactQuill = typeof window === 'object' ? require('react-quill') : () => false;
import 'react-quill/dist/quill.snow.css';

export default function Editor({ value, onChange, onSubmit, editorRef }) {

    return (
        <>
            <div><ReactQuill ref={editorRef} theme="snow" value={value} onChange={onChange} /></div>
            <br /><br /><br />
            <button onClick={onSubmit}>Save</button>
        </>
    )
}