import React, { useEffect, useState } from 'react';

const getTimeWithOffset = (offset) => {
  const currentTime = new Date();
  const utcOffset = currentTime.getTimezoneOffset() / 60;

  return new Date(
    currentTime.setHours(currentTime.getHours() + offset + utcOffset)
  );
};

const defaultTools = {
  hour: 'numeric',
  hour12: true,
  minute: 'numeric',
  second: 'numeric',
};

const Clock = ({ location, offset }) => {
  const [time, setTime] = useState(
    getTimeWithOffset(offset).toLocaleTimeString('en-US', defaultTools)
  );

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(
        getTimeWithOffset(offset).toLocaleTimeString('en-US', defaultTools)
      );
    }, 1000);
    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div className="clock">
      <div className="clock__location">{location}</div>
      <div className="clock__time">{time}</div>
    </div>
  );
};

export default Clock;
