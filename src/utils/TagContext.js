import { createContext } from "react";

const TagContext = createContext({
    activeMssgs: [],
    activeTags: []
});

export default TagContext;