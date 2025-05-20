import baliImg from "../assets/images/bali.jpg";
import capeTownImg from "../assets/images/cape-town.jpg";
import newYorkImg from  "../assets/images/newyork.jpg";
import parisImg from "../assets/images/paris.jpg";
import rioImg from "../assets/images/rio.jpg";
import romeImg from  "../assets/images/rome.jpg";
import sydneyImg from "../assets/images/sydney.jpg";
import tokyoImg from "../assets/images/tokyo.jpg";

const places = [
    {
        name: "Paris, France",
        image: parisImg,
        description: "The city of love, known for its stunning Eiffel Tower and rich history.",
        views: 2334,
        price: "€1000",
        date: "18.02.2025",
        rating: 4.7,
        category: "City"
    },
    {
        name: "Tokyo, Japan",
        image: tokyoImg,
        description: "A vibrant city blending tradition and futuristic innovation.",
        views: 532,
        price: "€950",
        date: "30.",
        rating: 4.2,
        category: "City"
    },
    {
        name: "Bali, Indonesia",
        image: baliImg,
        description: "Famous for its beautiful beaches, lush forests, and cultural heritage.",
        views: 499,
        price: "€1200",
        rating: 5.0,
        category: "Beach"
    },
    {
        name: "Rome, Italy",
        image: romeImg,
        description: "The Eternal City, rich with ancient ruins, art, and vibrant street life.",
        views: 1543,
        price: "€1100",
        rating: 3.6,
        category: "City"
    },
    {
        name: "Sydney, Australia",
        image: sydneyImg,
        description: "Famous for its stunning Opera House, beautiful beaches, and vibrant culture.",
        views: 720,
        price: "€1300",
        rating: 4.0,
        category: "City"
    },
    {
        name: "New York, USA",
        image: newYorkImg,
        description: "The city that never sleeps, filled with skyscrapers, Broadway, and endless energy.",
        views: 2089,
        price: "€1400",
        rating: 4.5,
        category: "City"
    },
    {
        name: "Rio de Janeiro, Brazil",
        image: rioImg,
        description: "Home to breathtaking beaches, Christ the Redeemer, and the famous Carnival.",
        views: 935,
        price: "€1250",
        rating: 4.9,
        category: "City" && "Beach"
    },
    {
        name: "Cape Town, South Africa",
        image: capeTownImg,
        description: "Famous for Table Mountain, diverse culture, and stunning coastline.",
        views: 678,
        price: "€1150",
        rating: 3.1,
        category: "City"
    }
];

export default places;