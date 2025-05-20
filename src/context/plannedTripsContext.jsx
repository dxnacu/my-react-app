import { createContext, useContext, useState, useEffect } from 'react';

const PlannedTripsContext = createContext();

export function PlannedTripsProvider({ children }) {
  const [plannedTrips, setPlannedTrips] = useState(() => {
    return JSON.parse(localStorage.getItem('plannedTrips')) || [];
  });

  useEffect(() => {
    localStorage.setItem('plannedTrips', JSON.stringify(plannedTrips));
  }, [plannedTrips]);

  const addTrip = (place) => {
    if (!plannedTrips.some(trip => trip.name === place.name)) {
      setPlannedTrips([...plannedTrips, { name: place.name, image: place.image, status: 'planned' }]);
    }
  };

  const removeTrip = (name) => {
    const updatedTrips = plannedTrips.filter(trip => trip.name !== name);
    setPlannedTrips(updatedTrips);
  }

  const markTripAsCompleted = (name) => {
    const updatedTrips = plannedTrips.map(trip => 
      trip.name === name ? { ...trip, status: 'completed' } : trip
    );
    setPlannedTrips(updatedTrips);
    localStorage.setItem('plannedTrips', JSON.stringify(updatedTrips));
  }

  return (
    <PlannedTripsContext.Provider value={{ plannedTrips, addTrip, removeTrip, markTripAsCompleted }}>
      {children}
    </PlannedTripsContext.Provider>
  );
}

export function usePlannedTrips() {
  return useContext(PlannedTripsContext);
}
