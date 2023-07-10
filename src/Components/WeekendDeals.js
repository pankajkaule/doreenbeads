import React, { useEffect, useState } from 'react'
import '../styles/weekenddeals.css'
import Slide2 from './Slide2'
import Timer from './Timer'

const WeekendDeals = ({ filter }) => {



    return (
        <div>
            <div className="titlehead1">
                {/* <div className='divborder'></div> */}
                <div className="circle"></div>
                <h1 className='cattitle1'> Weekend Deals </h1>
                <div className="circle"></div>

                {/* <div className='divborder'></div> */}
            </div>
            <div className="weekenddeals">
                <div className="weekenddeal">
                    <div className="weekendslider">
                        <Slide2 />
                    </div>
                    <div className="timer">
                        <div className="dealstitle">Weekday Deals</div>
                        <div className="timercomponent">
                            <Timer />
                        </div>
                        <div className="view_btn"><button><a href="#">Viem More</a></button></div>
                    </div>
                </div>
            </div>


        </div>
    )
}

export default WeekendDeals
