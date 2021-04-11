import { createContext, useContext, useReducer } from "react";

const SmoomsContext = createContext();
const { Provider } = SmoomsContext;
const initState = ({ activeTags: [], activeMssgs: [] });

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
        case "filterMssgs":
            return {
                ...state,
                activeMssgs: payload.messages
            }
        case "clearMssgs":
            return {
                ...state,
                activeMssgs: []
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