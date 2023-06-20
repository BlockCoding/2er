import React from "react";
import { useState, useEffect } from "react";
import { FaArrowUp } from "react-icons/fa";
import '../Components/scrollButton.css'
const ScrollButton = () => {
    const [isVisible, setIsVisible] = useState(false);
    
    const handleScroll = () => {
        const scrollTop = window.pageYOffset;
        setIsVisible(scrollTop > 100);
    };

    const scrollTop = () => {
        window.scrollTo({
        
            top: 0,
            behavior: 'smooth',
        });
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return() => {
            window.removeEventListener('scroll', handleScroll)
        };
    }, []);
    return (
        <div className={`scroll-up-button ${isVisible ? 'show' : ''}`} onClick={scrollTop}>
            <FaArrowUp/>
        </div>
    );
};

export default ScrollButton;