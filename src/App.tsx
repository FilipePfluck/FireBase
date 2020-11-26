import React from 'react';

import { AuthProvider } from './contexts/authContext'

import Routes from './routes'

import SignUp from './Pages/SignUp'

import Global from './styles/global'

function App() {
  return (
    <AuthProvider>
      <Routes/>
      <Global/>
    </AuthProvider>
  );
}

export default App;
