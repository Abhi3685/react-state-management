import React, { useState, createContext } from 'react';

const UserContext = createContext(); 

export function UserProvider(props) {
    const [user, setUser] = useState({
        name: '',
        email: '',
        phone: ''
    });

    return (
        <UserContext.Provider value={{ user, setUser }}>
            { props.children }
        </UserContext.Provider>
    )
}

export const UserConsumer = UserContext.Consumer;