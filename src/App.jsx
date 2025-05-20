import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import HomePage from './pages/HomePage';
import Budget from './pages/Budget';
import MyTravels from './pages/MyTravels';
import PlacesToVisit from './pages/PlacesToVisit';
import { PlannedTripsProvider } from './context/plannedTripsContext';

function App() {
  return (
    <PlannedTripsProvider>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/budget" element={<Budget />} />
          <Route path="/my-travels" element={<MyTravels />} />
          <Route path="/places-to-visit" element={<PlacesToVisit />} />
        </Routes>
      </Router>
    </PlannedTripsProvider>
  );
}

export default App;