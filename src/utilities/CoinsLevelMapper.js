import React from 'react';

const Level = (props) => {
    const coins = Number(props.coins);
    let level = 1;
    switch(true) {
        case (coins > 100):
            level = 3;
            break;
        case (coins > 50) :
            level = 2;
            break;
    }

    return (
        <div>
            Level {level}
        </div>
    );
}

export default Level;