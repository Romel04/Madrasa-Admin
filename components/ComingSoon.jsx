import React from 'react';

const ComingSoon = () => {
    return (
        <div style={{
            position: 'relative',
            height: '100vh',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            color: 'white',
            fontFamily: 'Arial, sans-serif',
            backgroundImage: 'url("/assets/comingSoon.avif")', // Replace with your image URL
            backgroundSize: 'cover',
            backgroundPosition: 'center',
        }}>
            <div style={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                background: 'rgba(0, 0, 0, 0.1)', // Dark overlay
            }} />
            <div style={{ position: 'relative', zIndex: 1, textAlign: 'center' }}>
                <h1 style={{ fontSize: '4em', margin: 0 }} className='text-[#794705]'>Coming Soon</h1>
                <p style={{ fontSize: '1.5em' }} className='text-[#794705]'>We&apos;re working hard to bring you something amazing!</p>
            </div>
        </div>
    );
};

export default ComingSoon;
