import React from 'react';

import { AuthProvider } from './contexts/authContext'

import SignUp from './Pages/SignUp'

import Global from './styles/global'

function App() {
  return (
    <AuthProvider>
      <SignUp/>
      <Global/>
    </AuthProvider>
  );
}

export default App;
