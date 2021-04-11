import { createContext, useContext, useReducer } from "react";

const SmoomsContext = createContext();
const { Provider } = SmoomsContext;
const initState = ({
    activeTags: [],
    activeMssgs: [],
    altMssgs: {
        active: false,
        content: []
    }
});

const reducer = (state, { type, payload }) => {
    switch (type) {
        case "addTag":
            return {
                ...state,
                activeTags: [...state.activeTags, payload.tag]
            }
        case "removeTag":
            let filteredTags = state.activeTags.filter(tag => tag != payload.tag);
            return {
                ...state,
                activeTags: [...filteredTags]
            }
        case "clearTags":
            return {
                ...state,
                activeTags: []
            }
        case "filterMssgs":
            return {
                ...state,
                activeMssgs: payload.messages,
            }
        case "filterAltMssgs":
            return {
                ...state,
                altMssgs: { ...state.altMssgs, content: payload.messages },
            }
        case "clearMssgs":
            return {
                ...state,
                activeMssgs: [],
                altMssgs: { content: [] }
            }
        case "displayAltMssgs":
            return {
                ...state,
                altMssgs: { ...state.altMssgs, active: payload }
            }
        default:
            throw new Error(`Invalid action type: ${type}`);
    }
};

const SmoomsProvider = ({ value = null, ...props }) => {
    const [state, dispatch] = useReducer(reducer, initState);

    return <Provider value={[state, dispatch]} {...props} />;
};

const useSmoomsContext = () => {
    return useContext(SmoomsContext);
};

export { SmoomsProvider, useSmoomsContext }