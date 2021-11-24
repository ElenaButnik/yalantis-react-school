import React, { createContext, useEffect, useReducer } from 'react';

export const UserContext = createContext();

const reducer = (state, action) => {
    switch (action.type) {
        case 'selectUser':
            return [...state, action.payload.user];
        case 'unselectUser':
            return state.filter(item => item.id !== action.payload.user.id);
        default:
            return state;
    }
};

export function UserProvider(props) {
    const [users, updateUsers] = useReducer(reducer, [], () => {
        const localData = localStorage.getItem('users');
        return localData ? JSON.parse(localData) : [];
    });

    useEffect(() => {
        localStorage.setItem('users', JSON.stringify(users));
    }, [users]);

    return (
        <UserContext.Provider value={{ updateUsers, users }}>
            {props.children}
        </UserContext.Provider>
    );
}
