import React, { useState, useEffect } from 'react';
import "./Clock.css"
const Clock = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const hTime = time.getHours();
  const mTime = time.getMinutes();
  const sTime = time.getSeconds();

  const hDegre = 30 * hTime + mTime / 2;
  const mDegree = 6 * mTime;
  const sDegree = 6 * sTime;

  const hourStyle = {
    transform: `rotate(${hDegre}deg)`,
  };

  const minuteStyle = {
    transform: `rotate(${mDegree}deg)`,
  };

  const secondStyle = {
    transform: `rotate(${sDegree}deg)`,
  };

  return (
    <div className="container">
      <div id="image">
        <div id="hour" style={hourStyle}></div>
        <div id="minute" style={minuteStyle}></div>
        <div id="second" style={secondStyle}></div>
      </div>
    </div>
  );
};

export default Clock