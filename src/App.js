import './App.css';
import Login from './components/Login';
import ChatRoom from './components/ChatRoom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AuthProvider from './components/Context/AuthProvider';

import React from 'react';
import AppProvider from './components/Context/AppProvider';
import AddRoomModal from './components/Modals/AddRoomModal';

export default function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <AppProvider>
          <Routes>
            <Route element={<ChatRoom />} path="/" />
            <Route element={<Login />} path="/login" />
          </Routes>
          <AddRoomModal />
        </AppProvider>
      </AuthProvider>
    </BrowserRouter>
  );
}
