import { collection, getDocs, setDoc, doc, getDoc } from "firebase/firestore";
import { db } from "./firebase";

export async function getPlaces() {
    const placesCol = collection(db, "places");
    const placesSnapshot = await getDocs(placesCol);
    console.log("Places: ", placesSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })));
    return placesSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
}

export const getPlaceById = async (id) => {
    const docRef = doc(db, 'places', id);
    const docSnap = await getDoc(docRef);

    if (!docSnap.exists()) {
        throw new Error('Place not found');
    }

    return { ...docSnap.data(), firebaseId: docSnap.id };
};

export async function addUserToDatabase(user, role) {
    try {
        await setDoc(doc(db, "users", user.uid), {
            name: user.displayName || user.email.split('@')[0],
            email: user.email,
            role: role
        });
        console.log("User added to database: ", user);
    } catch (error) {
        alert("Error adding user to database: ", error);
        console.error("Error adding user to database: ", error);
        throw error;
    }
}

// export async function registerToHackathon(userId, hackathonId) {
//     const createdAt = new Date().toISOString();

//     try {
//         const response = await fetch('/api/applications', {
//             method: 'POST',
//             headers: { 'Content-Type': 'application/json' },
//             body: JSON.stringify({ userId, hackathonId, createdAt }),
//         });


//         if (!response.ok) {
//             const errorText = await response.text();
//             throw new Error(`Registration failed: ${errorText}`);
//         }

//         const data = await response.json();
//         console.log('User registered, doc ID:', data.id);
//         return data.id;
//     } catch (error) {
//         console.error('Error registering to hackathon:', error);
//         throw error;
//     }
// }