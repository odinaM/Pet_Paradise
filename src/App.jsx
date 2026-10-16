import { Header } from './components/Header';
import { Routes, Route } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/"         element={<div>About page</div>} />
        <Route path="/service"  element={<div>Service page</div>} />
        <Route path="/shop"     element={<div>Shop page</div>} />
        <Route path="/contact"  element={<div>Contact page</div>} />
        <Route path="/register" element={<div>Register / Login</div>} />
      </Routes>
    </>
  );
}

export default App;