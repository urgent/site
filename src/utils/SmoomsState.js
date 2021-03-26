import { createContext, useContext, useReducer } from "react";

const SmoomsContext = createContext();
const { Provider } = SmoomsContext;
const initState = ({ activeTags: [] });

const reducer = (state, { type, payload }) => {
    switch (type) {
        case "addTag":
            return { activeTags: [...state.activeTags, payload] }
        case "removeTag":
            let filteredTags = state.activeTags.filter(tag => tag != payload);
            return { activeTags: [...filteredTags] }
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