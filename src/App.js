import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import CreateProfilePage from './pages/CreateProfilePage';
import DeleteProfilePage from './pages/DeleteProfilePage';
import ColorPage from './pages/ColorPage';
import { ProfileProvider } from './ProfileContext'; 

function App() {
  return (
    <ProfileProvider>
      <Router>
        <div>
          <Header />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/create-profile" element={<CreateProfilePage />} />
            <Route path="/delete-profile" element={<DeleteProfilePage />} />
            <Route path="/color" element={<ColorPage />} />
          </Routes>
          <Footer />
        </div>
      </Router>
    </ProfileProvider>
  );
}

export default App;
