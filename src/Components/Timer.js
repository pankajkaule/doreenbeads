import React from 'react';
import { useState, useEffect } from 'react';
import '../styles/weekenddeals.css'

const Timer = () => {
    const [days, setDays] = useState(0);
    const [hours, setHours] = useState(0);
    const [minutes, setMinutes] = useState(0);
    const [seconds, setSeconds] = useState(0);

    const deadline = "January 14, 2023";

    const getTime = () => {
        const time = Date.parse(deadline) - Date.now();

        setDays(Math.floor(time / (1000 * 60 * 60 * 24)));
        setHours(Math.floor((time / (1000 * 60 * 60)) % 24));
        setMinutes(Math.floor((time / 1000 / 60) % 60));
        setSeconds(Math.floor((time / 1000) % 60));
    };

    useEffect(() => {
        const interval = setInterval(() => getTime(deadline), 1000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="timer">
            <div className=""><span className='time'>{days > 0 ? days : ""}</span>:<span className='time'>{hours > 0 ? hours : ""}</span>:<span className='time'>{minutes > 0 ? minutes : ""}</span>:<span className='time'>{seconds > 0 ? seconds : 0}</span></div>
            <div className="timerintext">{days > 0 ? days : ""} Days & {hours > 0 ? hours : ""} Hours Only</div>
        </div>
    );
};

export default Timer;