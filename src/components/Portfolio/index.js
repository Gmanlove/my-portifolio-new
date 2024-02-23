import React, { useEffect, useState } from "react";
import Loader from "react-loaders";
import AnimatedLetters from "../AnimatedLetters";
import "./index.scss";
import { getDocs, collection } from 'firebase/firestore';
import { db } from '../../firebase';

const Portfolio = () => { 
    const [letterClass, setLetterClass] = useState('text-animate');
    const [portfolio, setPortfolio] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        const timer = setTimeout(() => {
            setLetterClass('text-animate-hover');
        }, 3000);

        return () => {
            clearTimeout(timer);
        };
    }, []);

    useEffect(() => {
        getPortfolio();
    }, []);

    const getPortfolio = async () => {
        try {
            const querySnapshot = await getDocs(collection(db, 'portfolio'));
            const portfolioData = querySnapshot.docs.map((doc) => doc.data());
            setPortfolio(portfolioData);
        } catch (error) {
            console.error("Error fetching portfolio:", error);
            setError("Failed to fetch portfolio data. Please try again later.");
        }
    };

    const renderPortfolio = (portfolio) => {
        return (
            <div className="images-container">
                {portfolio.map((port, idx) => (
                    <div className="image-box" key={idx}>
                        <img 
                            src={port.image}
                            className="portfolio-image"
                            alt="portfolio"
                        />
                        <div className="content">
                            <p className="title">{port.name}</p>
                            <h4 className="description">{port.description}</h4>
                            <button
                                className="btn"
                                onClick={() => window.open(port.url)}
                            >View</button>
                        </div>
                    </div>
                ))}
            </div>
        );
    };

    return (
        <>
            <div className="container portfolio-page">
                <h1 className="page-title">
                    <AnimatedLetters
                        letterClass={letterClass}
                        strArray={"Portfolio".split("")}
                        idx={15}
                    />
                </h1>
                {error ? (
                    <div>Error: {error}</div>
                ) : (
                    <div>{renderPortfolio(portfolio)}</div>
                )}
            </div>
            <Loader type="pacman" />
        </>
    );
};

export default Portfolio;
