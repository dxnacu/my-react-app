import React, { createContext, useContext, useState, useEffect } from 'react';
import { 
  addTripToFirestore, 
  getTripsFromFirestore,
  deleteTripFromFirestore,
  markTripAsCompletedInFirestore 
} from '../services/databaseService';
import { useUser } from "./userContext";
import { collection, where, getDocs, query } from 'firebase/firestore';
import { db } from '../services/firebase';

const PlannedTripsContext = createContext();

export function PlannedTripsProvider({ children }) {
  const { user } = useUser();
  const [trips, setTrips] = useState([]);

  useEffect(() => {
    const fetchTrips = async () => {
      const tripsFromDb = await getTripsFromFirestore(user.uid);
      setTrips(tripsFromDb);
      console.log("Trips from Firestore:", tripsFromDb);
    }

    if(user) fetchTrips();
  }, [user]);

  const addTrip = async (trip) => {
    if (user) {
      try {
        const tripsRef = collection(db, `users/${user.uid}/trips`);
        const q = query(tripsRef, where("name", "==", trip.name));
        const snapshot = await getDocs(q);

        if (!snapshot.empty) {
          console.log("Trip with this name already exists");
          return;
        }

        const newTrip = await addTripToFirestore(user.uid, trip);
        setTrips(prevTrips => [...prevTrips, newTrip]);
      } catch (error) {
        console.error("Error adding trip:", error);
      }
    }
  }

  const removeTrip = async (tripid) => {
    if (user) {
      await deleteTripFromFirestore(user.uid, tripid);
      setTrips(prevTrips => prevTrips.filter(trip => trip.id !== tripid));
    }
  }

  const markTripAsCompleted = async (tripid) => {
    if (user) {
      await markTripAsCompletedInFirestore(user.uid, tripid);
      setTrips(prevTrips => 
        prevTrips.map(trip => 
          trip.id === tripid ? { ...trip, status: 'completed' } : trip
        )
      );
    }
  }

  return (
    <PlannedTripsContext.Provider value={{ trips, addTrip, removeTrip, markTripAsCompleted }}>
      {children}
    </PlannedTripsContext.Provider>
  );
}

export function usePlannedTrips() {
  return useContext(PlannedTripsContext);
}
