import React from 'react';

const LeftHand = ({changeCount, count}) => {
    const clickPlus = () => {
        changeCount(count + 1);
    };
    const clickMinus = () => {
        changeCount(count - 1);
    };

    return (
        <div>
            <button onClick={clickPlus}>+</button>
            <button onClick={clickMinus}>-</button>
        </div>
    );
};

export default LeftHand;