import React, { useEffect, useState } from 'react';
import { CircularProgress } from '@material-ui/core';

import './loading.scss';

const Loading = props => {
    const { showImmediately, classes, ...otherProps } = props,
        [show, setShow] = useState(false);

    // Only show the spinner after 1s of inactivity
    // https://material-ui.com/components/progress/#delaying-appearance
    useEffect(() => {
        if (props.showImmediately) {
            setShow(true);
            return;
        }
        const timer = setTimeout(() => {
            setShow(true);
        }, 750);
        return () => clearTimeout(timer);
    }, [props.showImmediately]);

    return (
        <div className={`loading ${classes || ''}`}>
            {show && (
                <CircularProgress disableShrink size={40} {...otherProps} />
            )}
            <span className='sr-only'>Please wait</span>
        </div>
    );
};

export default Loading;
