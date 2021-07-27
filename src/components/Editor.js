import React, { useRef } from 'react'
const ReactQuill = typeof window === 'object' ? require('react-quill') : () => false;
import 'react-quill/dist/quill.snow.css';

export default function Editor({ value, onChange, onSubmit, editorRef }) {

    return (
        <>
            <div data-cy="editor"><ReactQuill ref={editorRef} theme="snow" value={value} onChange={onChange} /></div>
            <br /><br /><br />
            <button data-cy="save" onClick={onSubmit}>Save</button>
        </>
    )
}