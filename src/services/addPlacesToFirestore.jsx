// components/AddPlacesButton.jsx
import React from "react";
import { addPlacesToFirestore } from "./databaseService";

export default function AddPlacesButton() {
    const handleClick = async () => {
        await addPlacesToFirestore();
        alert("Places added to Firestore!");
    };

    return (
        <button onClick={handleClick}>
            Add Places to Firestore
        </button>
    );
}
