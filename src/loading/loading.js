import React from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';

import './loading.scss';

const Loading = props => {
    const { showImmediately, classes, ...otherProps } = props,
        [show, setShow] = React.useState(false);

    // Only show the spinner after 1s of inactivity
    // https://material-ui.com/components/progress/#delaying-appearance
    React.useEffect(() => {
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
