import React, { useEffect } from 'react';

import './tag.scss';

const Tag = props => {
    const { label, onChange, disabled, active } = props,
        [checked, setChecked] = React.useState(false);

    useEffect(() => {
        if (props.active) {
            setChecked(true);
        }
    }, [active]);

    return (
        <div key={`tag__${label}`} id={`tag__${label}`} value={label} className={`tag__item ${disabled ? 'tag__disabled' : ''}`}>
            <input
                id={`tag__input__${label}`}
                type='checkbox'
                checked={disabled ? active : checked}
                defaultChecked={disabled ? active : checked}
                onChange={onChange}
                onClick={() => setChecked(!checked)}
            />
            <label htmlFor={`tag__input__${label}`}>
                {label}
            </label>
        </div>
    );
};

export default Tag;
