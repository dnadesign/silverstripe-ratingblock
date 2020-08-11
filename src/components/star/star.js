import React from 'react';

/**
 * custom star svg as thje m,aterial ones had too thick stroke
 */
const Star = (props) => {
    return (
        <svg width='100%' height='100%' viewBox='0 0 21 20' >
            <path
                d='M18.7801293,8.27466498 L12.8268001,7.76130418 L10.5003474,2.28047975 L8.17320044,7.77122151 L2.22308341,8.27602977 L6.74248862,12.1911922 L5.38513229,18.0096159 L10.5,14.922487 L15.6167758,18.0107676 L14.267429,12.1911921 L18.7801293,8.27466498 Z'
                stroke={props.stroke ? props.stroke : '#fff'}
                strokeWidth='0.75px'
                fill={props.fill ? props.fill : 'none'}
            />
        </svg>
    );
};

export default Star;
