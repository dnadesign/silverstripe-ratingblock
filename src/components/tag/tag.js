import React from 'react';

import './tag.scss';

const Tag = props => {
    const { label, onChange } = props,
        [checked, setChecked] = React.useState(false);

    return (
        <div key={`tag__${label}`} id={`tag__${label}`} value={label} className='tag__item'>
            <input id={`tag__input__${label}`} type='checkbox' defaultChecked={checked} onChange={onChange} onClick={() => setChecked(!checked)} />
            <label htmlFor={`tag__input__${label}`}>
                {label}
            </label>
        </div>
    );
};

export default Tag;
