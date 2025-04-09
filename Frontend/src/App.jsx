import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import FrontPage from './pages/FrontPage';
import AboutUs from './pages/AboutUs';
import ContactUs from './pages/ContactUs';
import UserRegister from './pages/user/UserRegister';
import AdminRegister from './pages/admin/AdminRegister';
import TermsAndConditions from './pages/TermsAndConditions';

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
        <Route
          path="/adminRegister"
          element={<AdminRegister />}
        />
        <Route
          path="/terms"
          element={<TermsAndConditions />}
        />
        <Route
          path="/about"
          element={<AboutUs />}
        />
        <Route
          path="/contact"
          element={<ContactUs />}
        />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
