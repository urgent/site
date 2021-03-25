import { createContext, useContext, useReducer } from "react";

const SmoomsContext = createContext();
const { Provider } = SmoomsContext;
const initState = ({ value: [] });

const reducer = (state, { type, payload }) => {
    switch (type) {
        case "test":
            return { value: [...state.value, payload] }
        default:
            throw new Error(`Invalid action type: ${action.type}`);
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