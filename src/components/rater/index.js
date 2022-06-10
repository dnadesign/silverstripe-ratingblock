import React, { useState } from 'react';
import { Rating } from '@material-ui/lab';
import classNames from 'classnames';
import Star from '../star/star';

export const Rater = props => {
    const { stars, ref, name, value, disabled, onChange, onChangeActive, errors } = props,
        descriptionClasses = classNames({
            'rating__description': true,
            'rating__description--disabled': value === 0
        }),
        [hover, setHover] = useState(-1);

    return ((stars && stars.Max > 0) &&
        <div className='rating__stars'>
            <Rating
                ref={ref}
                name={`rating-${name}`}
                emptyIcon={<Star stroke='#fff' />}
                icon={<Star stroke='#fff' fill='#fff' />}
                value={parseInt(value, 10)}
                max={stars.Max}
                onChange={onChange}
                onChangeActive={onChangeActive || ((event, newHover) => {
                    setHover(newHover);
                })}
                disabled={disabled}
            />
            {value !== null && (stars.Labels && Object.keys(stars.Labels).length > 0) && <p className={descriptionClasses}>{stars.Labels[hover !== -1 ? hover : value]}</p>}
            {errors['rating'] && (
                <p className='rating__error'>Please select a rating</p>
            )}
        </div>
    ) || null;
};
