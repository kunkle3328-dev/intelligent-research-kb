import React, { createContext, useContext, useReducer } from 'react';

// Define initial state
const initialState = {
    sources: [],
    categories: [],
    tags: [],
};

// Create a context
const SourceContext = createContext(initialState);

// Create a reducer function to manage state updates
const reducer = (state, action) => {
    switch (action.type) {
        case 'ADD_SOURCE':
            return { ...state, sources: [...state.sources, action.payload] };
        case 'REMOVE_SOURCE':
            return { ...state, sources: state.sources.filter(source => source.id !== action.payload.id) };
        case 'ADD_CATEGORY':
            return { ...state, categories: [...state.categories, action.payload] };
        case 'REMOVE_CATEGORY':
            return { ...state, categories: state.categories.filter(category => category.id !== action.payload.id) };
        case 'ADD_TAG':
            return { ...state, tags: [...state.tags, action.payload] };
        case 'REMOVE_TAG':
            return { ...state, tags: state.tags.filter(tag => tag.id !== action.payload.id) };
        default:
            return state;
    }
};

// Create a provider component
export const SourceProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState);
    return (
        <SourceContext.Provider value={{ state, dispatch }}>
            {children}
        </SourceContext.Provider>
    );
};

// Custom hook to use the SourceContext
export const useSourceContext = () => {
    return useContext(SourceContext);
};
