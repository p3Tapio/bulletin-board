/* eslint-disable no-undef */
import { useState, useEffect } from 'react';

function useElementWidth(elementId) {
  const [width, setWidth] = useState({});

  useEffect(() => {
    if (Object.keys(width).length === 0) {
      setWidth({ width: document.getElementById(elementId).clientWidth });
    }
    const handleResize = () => setWidth({ width: document.getElementById(elementId).clientWidth });
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [elementId, width]);

  return width;
}
export default useElementWidth;
