import PlaceCard from './PlaceCard';
import { usePlannedTrips } from '../context/plannedTripsContext';
import places from '../data/places-to-visit-data';
import { useState, useEffect } from 'react';
import '../assets/styles/places-to-visit.css';

export default function PlaceList() {
    const { plannedTrips, addTrip } = usePlannedTrips();

    const [selectedFilters, setSelectedFilters] = useState([]);
    const [filteredPlaces, setFilteredPlaces] = useState(places);
    let filters = ["Beach", "Mountains", "City", "Other"];

    const handleFilterButtonClick = (selectedCategory) => {
        if (selectedFilters.includes(selectedCategory)) {
            let filters = selectedFilters.filter((el) => el !== selectedCategory);
            setSelectedFilters(filters);
        } else {
            setSelectedFilters([...selectedFilters, selectedCategory]);
        }
    };

    const filterPlaces = () => {
        if (selectedFilters.length > 0) {
            let tempPlaces = selectedFilters.map((selectedCategory) => {
                let temp = places.filter((place) => place.category === selectedCategory)
                return temp;
            });
            setFilteredPlaces(tempPlaces.flat());
        } else {
            setFilteredPlaces([...places]);
        }
    };

    useEffect(() => {
        filterPlaces();
    }, [selectedFilters]);

    return (
        <div>
            <div className="filter-buttons-container">
                {filters.map((category, idx) => (
                    <button
                        onClick={() => handleFilterButtonClick(category)}
                        className={`filter-btn ${
                            selectedFilters?.includes(category) ? "filter-active" : ""
                        }`}
                        key={`filters-${idx}`}
                    >
                        {category}
                    </button>
                ))}
            </div>
            <div className="places-container">
                {filteredPlaces.map((place, idx) => (
                    <PlaceCard
                        key={idx}
                        place={place}
                        plannedTrips={plannedTrips}
                        onAdd={addTrip}
                    />
                ))}
            </div>
        </div>
    );
}