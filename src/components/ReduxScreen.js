import React from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { login, logout, increment, decrement } from '../actions'

export default function ReduxScreen() {
    const count = useSelector(state => state.counterReducer);
    const auth = useSelector(state => state.authReducer);
    const dispatch = useDispatch();

    return (
        <>
            { auth ? <div>
                <button onClick={() => dispatch(logout())}>Log me out</button><br/><br/>
                Counter: { count }<br/>
                <button onClick={() => dispatch(increment())}>Increment +</button>
                &nbsp;&nbsp;&nbsp;
                <button onClick={() => dispatch(decrement())}>Decrement -</button>
            </div> : <div>
                <button onClick={() => dispatch(login())}>Log me in</button>
            </div> }
        </>
    )
}
