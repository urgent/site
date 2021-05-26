const ReactQuill = typeof window === 'object' ? require('react-quill') : () => false;
import 'react-quill/dist/quill.snow.css';

export function Editor({ value, onChange }) {
    return (
        <ReactQuill style={{ height: "70%" }} theme="snow" value={value} onChange={onChange} />
    )
}