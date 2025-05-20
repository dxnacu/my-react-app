import Header from '../components/Header';
import Footer from '../components/Footer';
import heroImage from "../assets/images/beach-picture.jpg";
import whyUsImg from "../assets/images/why-us.jpg";
import "../assets/styles/general.css";
import "../assets/styles/main.css";
import "../assets/styles/places.css";
import placesData from "../data/places-to-visit-data";
import React, { useState, useMemo } from "react";
import PlaceCard from "../components/PlaceCard";
import { usePlannedTrips } from '../context/plannedTripsContext';
import { NavLink } from 'react-router-dom';

const HomePage = () => {
    const { plannedTrips, addTrip } = usePlannedTrips();
    const [places, setPlaces] = useState(placesData);

    const topPlaces = useMemo(() => {
        return [...places].sort((a, b) => b.rating - a.rating).slice(0, 4);
    }, [places]);

    return (
        <>
            <Header />
            <main>
                <section className="hero">
                    <div className="hero-container">
                        <img src={heroImage} alt="Hero" className="hero-image" />
                        <div className="hero-text">
                            <h1 id='hero-h1'>Explore Beautiful Places</h1>
                        </div>
                    </div>
                    <div className="search-bar">
                        <input type="text" placeholder="Location"/>
                        <input type="date"/>
                        <input type="text" placeholder="€"/>
                        <button className="search-btn">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" width="30px" height="30px"><path d="M 20.5 6 C 12.509634 6 6 12.50964 6 20.5 C 6 28.49036 12.509634 35 20.5 35 C 23.956359 35 27.133709 33.779044 29.628906 31.75 L 39.439453 41.560547 A 1.50015 1.50015 0 1 0 41.560547 39.439453 L 31.75 29.628906 C 33.779044 27.133709 35 23.956357 35 20.5 C 35 12.50964 28.490366 6 20.5 6 z M 20.5 9 C 26.869047 9 32 14.130957 32 20.5 C 32 23.602612 30.776198 26.405717 28.791016 28.470703 A 1.50015 1.50015 0 0 0 28.470703 28.791016 C 26.405717 30.776199 23.602614 32 20.5 32 C 14.130953 32 9 26.869043 9 20.5 C 9 14.130957 14.130953 9 20.5 9 z"/></svg>
                        </button>
                    </div>
                </section>
                <section id="why-us" class="why-us">
                    <div class="container">
                        <h2>Why Choose Us?</h2>
                        <div class="content">
                            <div class="why-us-img">
                                <img src={whyUsImg} alt="why us"/>
                            </div>
                            <div class="text">
                                <h3>We Deliver Experience</h3>
                                <p>
                                At our company, we prioritize customer satisfaction and innovation. 
                                With a team of dedicated professionals, we ensure high-quality services, 
                                reliable support, and cutting-edge solutions tailored to your needs.
                                </p>
                                <p>
                                Our mission is to create long-lasting relationships with our clients 
                                by providing value-driven services. Choose us for a seamless experience and 
                                results that matter.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>
                <section id="places-to-visit" class="content">
                    <h2>Top Destinations For You</h2>
                    <p>Discover breathtaking locations for your next trip.</p>
                    <div class="places-container">
                        {topPlaces.map((place, index) => (
                            <PlaceCard 
                                key={index}
                                place={place}
                                plannedTrips={plannedTrips}
                                onAdd={addTrip}
                            />
                        ))}
                    </div>
                </section>
                <section id="budget" class="content">
                    <div>
                        <h2>Budget</h2>
                        <p>Plan your expenses and manage your travel costs wisely.</p>
                        <div class="budget-btn-div">
                            <button class="budg-btn">
                                <NavLink to="/budget">Get Started</NavLink>
                            </button>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    );
};

export default HomePage;