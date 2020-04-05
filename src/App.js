import React from 'react';

import { UserProvider, UserConsumer } from './UserContext';

function App() {
  return (
    <UserProvider>
      <div style={{ textAlign: "center" }}>
        <h1>React State Management using Context Api</h1>
        <UserConsumer>
          {( { user, setUser } ) => (
            user.email == '' ? <div>
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
      </div>
    </UserProvider>
  );
}

export default App;
