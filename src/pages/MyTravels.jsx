import Header from "../components/Header";
import Footer from "../components/Footer";
import '../styles/my-travels.css';
import { usePlannedTrips } from '../context/plannedTripsContext';
import { useState } from 'react';
// import { CSSTransition, TransitionGroup } from 'react-transition-group';
// import { useRef } from 'react';
import { toast, ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

export default function MyTravels() {
    const { plannedTrips, removeTrip, markTripAsCompleted } = usePlannedTrips();
    const [hoveredIndex, setHoveredIndex] = useState(null);

    const planned = plannedTrips.filter(trip => trip.status === 'planned');
    const completed = plannedTrips.filter(trip => trip.status === 'completed');

    const handleRemove = (name) => {
        if (window.confirm(`Are you sure you want to remove "${name}"?`)) {
            removeTrip(name);
            toast.error(`Trip "${name}" removed`);
        }
    };

    const handleComplete = (name) => {
        markTripAsCompleted(name);
        toast.success(`Trip "${name}" completed!`);
    };

    // return (
    //     <div>
    //         <Header />
    //         <div className="my-trips">
    //             <div className="planned-trips">
    //                 <h3>Planned Trips</h3>
    //                 <TransitionGroup className="planned-trips-list">
    //                     {planned.length === 0 ? (
    //                         <p style={{ textAlign: 'center', margin: '100px' }}>
    //                             No planned trips yet
    //                         </p>
    //                     ) : (
    //                         planned.map((trip, index) => (
    //                             <CSSTransition
    //                                 key={trip.name}
    //                                 timeout={300}
    //                                 classNames="trip"
    //                                 nodeRef={nodeRef}
    //                             >
    //                                 <div className="trip-card"
    //                                     onMouseEnter={() => setHoveredIndex(index)}
    //                                     onMouseLeave={() => setHoveredIndex(null)}
    //                                 >
    //                                     <img src={trip.image} alt={trip.name} />
    //                                     <div className="trip-info">
    //                                         <h4>{trip.name}</h4>
    //                                         <p>{trip.date}</p>
    //                                     </div>

    //                                     {hoveredIndex === index && (
    //                                         <div className='hover-buttons'>
    //                                             <button
    //                                                 className='remove-btn'
    //                                                 onClick={() => handleRemove(trip.name)}
    //                                             >
    //                                                 Remove
    //                                             </button>
    //                                             <button
    //                                                 className='complete-btn'
    //                                                 onClick={() => handleComplete(trip.name)}
    //                                             >
    //                                                 Complete
    //                                             </button>
    //                                         </div>
    //                                     )}
    //                                 </div>
    //                             </CSSTransition>
    //                         ))
    //                     )}
    //                 </TransitionGroup>
    //             </div>

    //             <div className="completed-trips">
    //                 <h3>Completed Trips</h3>
    //                 <TransitionGroup className="completed-trips-list">
    //                     {completed.length === 0 ? (
    //                         <p style={{ textAlign: 'center', margin: '100px' }}>
    //                             No completed trips yet.
    //                         </p>
    //                     ) : (
    //                         completed.map((trip, index) => (
    //                             <CSSTransition
    //                                 key={trip.name}
    //                                 timeout={300}
    //                                 classNames="trip"
    //                                 nodeRef={nodeRef}
    //                             >
    //                                 <div className="trip-card completed">
    //                                     <img src={trip.image} alt={trip.name} />
    //                                     <div className="trip-info">
    //                                         <h4>{trip.name}</h4>
    //                                         <p>5-10 March 2024</p>
    //                                     </div>
    //                                     <button
    //                                         className="remove-btn"
    //                                         onClick={() => handleRemove(trip.name)}
    //                                     >
    //                                         Remove
    //                                     </button>
    //                                 </div>
    //                             </CSSTransition>
    //                         ))
    //                     )}
    //                 </TransitionGroup>
    //             </div>
    //         </div>
    //         <Footer />
    //         <ToastContainer position="top-right" autoClose={3000} hideProgressBar />
    //     </div>
    // );

    return (
        <div>
            <Header />
            <div className="my-trips">
                <div className="planned-trips">
                    <h3>Planned Trips</h3>
                    <div className="planned-trips-list">
                        {planned.length === 0 ? (
                            <p style={{textAlign: 'center', margin: '100px'}}>
                                No planned trips yet
                            </p>
                        ) : (
                            planned.map((trip, index) => (
                                <div className="trip-card" 
                                    key={index}
                                    onMouseEnter={() => setHoveredIndex(index)}
                                    onMouseLeave={() => setHoveredIndex(null)}
                                >
                                    <img src={trip.image} alt={trip.name} />
                                    <div className="trip-info">
                                        <h4>{trip.name}</h4>
                                        <p>{trip.date}</p>
                                    </div>

                                    {hoveredIndex === index && (
                                        <div className='hover-buttons'>
                                            <button 
                                                className='remove-btn'
                                                onClick={() => handleRemove(trip.name)}
                                            >
                                                Remove
                                            </button>
                                            <button 
                                                className='complete-btn'
                                                onClick={() => handleComplete(trip.name)}
                                            >
                                                Complete
                                            </button>
                                        </div>
                                    )}
                                </div>
                            ))
                        )}
                    </div>
                </div>
            
                <div className="completed-trips">
                    <h3>Completed Trips</h3>
                    <div>
                        {completed.length === 0 ? (
                            <p style={{ textAlign: 'center', margin: '100px' }}>
                                No completed trips yet.
                            </p>
                        ) : (
                            completed.map((trip, index) => (
                                <div className="trip-card completed" key={index}>
                                    <img src={trip.image} alt={trip.name} />
                                    <div className="trip-info">
                                        <h4>{trip.name}</h4>
                                        <p>5-10 March 2024</p>
                                    </div>
                                    <div className='hover-buttons'>
                                        <button className="remove-btn"
                                        onClick={() => removeTrip(trip.name)}>Remove</button>
                                    </div>
                                </div>
                            ))
                        )}
                    </div>
                </div>
            </div>
            <Footer />  
            <ToastContainer position="top-right" autoClose={3000} hideProgressBar /> 
        </div>
    );
}