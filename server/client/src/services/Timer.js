import React, { useEffect, useState } from 'react';
import '../components/Header.css';

const CountdownTimer = () => {
  const calculateTimeLeft = () => {
    const difference = +new Date('2020-06-30') - +new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
  });

  const timerComponents = [];

  Object.keys(timeLeft).forEach((interval) => {
    if (!timeLeft[interval]) {
      return;
    }

    timerComponents.push(
      <span>
        {timeLeft[interval]} {interval}{' '}
      </span>
    );
  });

  return (
    <div className="content">
      <h4>
        {' '}
        <font>Time Remaining:</font>
        <br />
        {timerComponents.length ? timerComponents : <span>Time's up!</span>}
      </h4>
    </div>
  );
};

export default CountdownTimer;
