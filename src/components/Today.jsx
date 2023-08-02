import React, { useState, useEffect } from "react";

const Today = () => {
  const [currentTime, setCurrentTime] = useState(
    new Date().toLocaleTimeString()
  );

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(new Date().toLocaleTimeString());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="text-3xl font-bold text-indigo-600 flex justify-center">{currentTime}</div>
  );
};

export default Today;
