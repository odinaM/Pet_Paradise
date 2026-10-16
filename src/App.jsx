import { Header } from './components/Header';
import { Service } from './components/Service';
import { Routes, Route } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/"         element={<div>About page</div>} />
        <Route path="/service"  element={<Service />} />
        <Route path="/shop"     element={<div>Shop page</div>} />
        <Route path="/contact"  element={<div>Contact page</div>} />
        <Route path="/register" element={<div>Register / Login</div>} />
      </Routes>
    </>
  );
}

export default App;