import React from 'react';
import { UserProvider } from './context/UserContext';
import ContextApi from './components/ContextApi';
import ReduxState from './components/ReduxState';

function App() {
  return (
    <div style={{ textAlign: "center" }}>
      {/* Context Api Demo */}

      <UserProvider>
        <h1>React State Management using Context Api</h1>
        <ContextApi />
      </UserProvider>

      <br/><hr/>

      {/* React Redux Demo */}

      <h1>React State Management using Redux</h1>
      <ReduxState />
    </div>
  );
}

export default App;
