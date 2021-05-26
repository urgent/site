const ReactQuill = typeof window === 'object' ? require('react-quill') : () => false;
import 'react-quill/dist/quill.snow.css';

export function Editor({ value, onChange, onSubmit }) {
    return (
        <>
            <div><ReactQuill style={{ height: "70%" }} theme="snow" value={value} onChange={onChange} /></div>
            <br /><br /><br />
            <button onClick={onSubmit}>Save</button>
        </>
    )
}