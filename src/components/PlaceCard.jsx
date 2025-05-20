import { useState, useEffect } from 'react';
import '../assets/styles/places.css';
import '../assets/styles/main.css';

function PlaceCard({ place, onAdd, plannedTrips }){
    const [isHovered, setIsHovered] = useState(false);
    const [isAdded, setIsAdded] = useState(false);

    useEffect(() => {
        const exists = plannedTrips.some(trip => trip.name === place.name);
        setIsAdded(exists);
    }, [plannedTrips, place.name]);

    return (
        <div className="place"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <div className="place-img">
                <img src={place.image} alt={place.name} />
            </div>
            <div className="place-content">
                <div>
                    <h3>{place.name}</h3>
                    <p>{place.description}</p>
                </div>
                <div className="place-info">
                    <div className="rate">
                        <div><p>⋆ {place.rating}</p></div>
                        <p>•</p>
                        <div className="place-views"><p>{place.views} views</p></div>
                    </div>
                    <div className="place-price"><p>{place.price}</p></div>
                </div>
            </div>

            {isHovered && (
                <button
                    className="add-button"
                    onClick={() => {
                    if (!isAdded) onAdd(place);
                    }}
                    disabled={isAdded}
                    style={{
                        position: 'absolute',
                        bottom: '0',
                        left: '0',
                        width: '100%',
                        padding: '12px',
                        backgroundColor: isAdded ? 'rgb(34, 34, 92)' : '#2F2F8F',
                        color: 'white',
                        border: 'none',
                        borderBottomLeftRadius: '11px',
                        borderBottomRightRadius: '11px',
                        fontWeight: 'bold',
                        cursor: isAdded ? 'not-allowed' : 'pointer',
                        fontFamily: 'Arial',
                        transform: 'translateY(50%)',
                        transition: 'transform 0.4s ease'
                    }}
                >
                    {isAdded ? 'Aleady Added' : 'Plan Trip Now'}
                </button>
            )}
        </div>
    );
}

export default PlaceCard;