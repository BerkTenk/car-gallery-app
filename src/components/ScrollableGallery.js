import React, { useRef, useEffect } from 'react';
import "./heroImg.css";
import { CarData } from './CarData';

function ScrollableGallery() {
    const scrollRef = useRef(null);

    // Mouse scroll ile yatay kaydırma
    useEffect(() => {
        const scrollContainer = scrollRef.current;
        const scrollSpeed = 2; // Scroll hızını artırmak için bu değeri artırabilirsiniz

        const handleMouseScroll = (e) => {
            e.preventDefault();
            scrollContainer.scrollLeft += e.deltaY * scrollSpeed;
        };

        scrollContainer.addEventListener('wheel', handleMouseScroll);

        return () => scrollContainer.removeEventListener('wheel', handleMouseScroll);
    }, []);

    return (
        <div className='container-fluid car-scroll'>
            <div 
                className='row flex-nowrap scroll-container' 
                style={{ overflowX: 'hidden' }} 
                ref={scrollRef}
            >
                {Array.from(CarData).map((data, i) => (
                    <div key={i} className='col-4 d-flex align-items-center justify-content-center'>
                        <img src={data.img} alt='car' className='img-fluid' style={{ maxWidth: '300px', height: 'auto', maxHeight:"300px" }} />
                    </div>
                ))}
            </div>
        </div>
    );
}

export default ScrollableGallery;