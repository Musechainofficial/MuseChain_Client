import { createContext, useContext, useReducer } from "react";

export let Context = createContext();

let initialState = {
    isLoggedIn: false
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case "SET_LOGGED_IN":
            return {
                ...state,
                isLoggedIn: action.payload
            };

            break;
        default:
            return state;
    }
};

const Store = ({ children }) => {
    return <Context.Provider>{children}</Context.Provider>;
};
