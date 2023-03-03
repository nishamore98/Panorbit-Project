import * as React from 'react';
import './style.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LandingPage from './components/LandingPage';
import Profile from './components/Profile';
import UserInfo from './components/UserInfo';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact index path="/" element={<LandingPage />} />
        <Route index path="/Profile" element={<Profile />} />
        <Route index path="/UserInfo" element={<UserInfo />} />
      </Routes>
    </BrowserRouter>
  );
}
