import React from 'react'
import { UserConsumer } from '../context/UserContext';

export default function ContextApi() {
    return (
        <UserConsumer>
          {( { user, setUser } ) => (
            user.email === '' ? <div>
              {/* Render Login Screen */}
              <button onClick={() => setUser({ name: 'Abhishek', email: 'abhi@gmail.com', phone: '9876543210' }) }>Log me in</button>
            </div> : <div>
              {/* Render User Screen */}
              <button onClick={() => setUser({ name: '', email: '', phone: '' }) }>Log me out</button>
              <p>Name: { user.name }</p>
              <p>Email: { user.email }</p>
              <p>Phone: { user.phone }</p>
            </div>
          )}
        </UserConsumer>
    )
}
