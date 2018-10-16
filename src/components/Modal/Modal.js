import React from 'react';

import './Modal.css';

const modal = (props) => {
    console.log(props.show);
    const cssClasses = [
     'Modal' ,
     props.show === 'entering' 
     ? 'ModalOpened' 
     : props.show === 'exiting' ? 'ModalClosed' : null
    ];
    console.log(cssClasses);
    return (
        <div className={cssClasses.join(' ')}>
            <h1>A Modal</h1>
            <button className="Button" onClick={props.closed}>Dismiss</button>
        </div>
    );
};

export default modal;