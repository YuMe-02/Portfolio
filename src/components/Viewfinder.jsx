import React from 'react';

const Viewfinder = () => {
  return (
    <>
      <div className="rec-indicator">
        <span className="rec-dot"></span>
        <span>REC</span>
      </div>
      <div className="timer">165min</div>
      <div className="quality">HQ 1080/60p</div>
    </>
  );
};

export default Viewfinder;