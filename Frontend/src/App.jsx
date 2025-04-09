import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import FrontPage from './pages/FrontPage';
import UserRegister from './pages/user/UserRegister';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route
          path="/"
          element={<FrontPage />}
        />
        <Route
          path="/userRegister"
          element={<UserRegister />}
        />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
