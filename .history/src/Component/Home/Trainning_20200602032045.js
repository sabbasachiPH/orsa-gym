import React from 'react';
import './Tranning.css';

const Trainning = () => {
    return (

        <div className="row">
            <h1 className='text-center'>TRAINNING <span className='program'>PROGRAMS</span></h1>

            <div className='yoga'>
                <a href="/class-description/YOGA-TRAINING">YOGA TRAINNING SESSION</a>
            </div>

            <div className='cardio'>
                <a href="/class-description/CARDIO-TRAINING">CARDIO TRAINNING SESSION</a>
            </div>
        </div>
    );
};

export default Trainning;