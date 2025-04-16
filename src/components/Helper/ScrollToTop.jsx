"use client";
import { useEffect, useState } from 'react';
import { FaArrowUp } from 'react-icons/fa';

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    console.log('[DEBUG] Mounting ScrollToTop component');
    
    const handleScroll = () => {
      const shouldShow = window.scrollY > 300;
      console.log(`[DEBUG] Scroll position: ${window.scrollY}, should show: ${shouldShow}`);
      setIsVisible(shouldShow);
    };

    // Set initial state
    handleScroll();

    // Add event listener
    window.addEventListener('scroll', handleScroll);
    console.log('[DEBUG] Scroll listener added');

    return () => {
      window.removeEventListener('scroll', handleScroll);
      console.log('[DEBUG] Scroll listener removed');
    };
  }, []);

  console.log(`[DEBUG] Rendering - isVisible: ${isVisible}`);

  if (!isVisible) return null;

  return (
    <div style={{
      position: 'fixed',
      bottom: '24px',
      right: '24px',
      zIndex: 9999,
      border: '2px solid red', // Debug border
      backgroundColor: 'rgba(0,0,0,0.5)' // Semi-transparent background
    }}>
      <button
        onClick={() => {
          console.log('[DEBUG] ScrollToTop clicked');
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
        style={{
          width: '48px',
          height: '48px',
          borderRadius: '50%',
          background: '#333',
          color: 'white',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          cursor: 'pointer',
          border: 'none',
          outline: 'none'
        }}
      >
        <FaArrowUp />
      </button>
    </div>
  );
};

export default ScrollToTop;