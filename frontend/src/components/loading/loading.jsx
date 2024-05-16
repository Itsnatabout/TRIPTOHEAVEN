import React, { useState, useEffect } from 'react';
import PacmanLoader from 'react-spinners/PacmanLoader';
import './loading.css'; // Assuming you want to style this component separately

function Loading() {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => {
      setLoading(false);
    }, 8000);

    // Cleanup the timer
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="Loading">
      {loading && <PacmanLoader size={30} color={'#F37A24'} loading={loading} />}
    </div>
  );
}

export default Loading;
