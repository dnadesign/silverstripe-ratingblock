import React from 'react';
import ReactDOM from 'react-dom';
import { RateComponent } from './rating';
import * as serviceWorker from './serviceWorker';

import './index.scss';

/**
     * Set the rating value on the form
     *
     * @param {Int} value
     */
const
    setRatingValue = (value) => {
        rating = value;
    },
    onSubmit = (e) => {
        e.preventDefault();
        form.submitted = true;
        return form.submitted;
    },
    form = {
        successMessage: 'Thanks for you feedback.',
        intro: '',
        title: 'We appreciate your feedback.',
        submitted: false,
        comments: {
            ID: 1,
            enabled: true,
            expanded: false,
            props: []
        }
    },
    page = {
        id: 1,
        name: 'Rating block'
    };

let rating = 0;

ReactDOM.render(
    <RateComponent
        name='Rating block'
        value={rating}
        errors={[]}
        loading={false}
        setRatingValue={setRatingValue}
        onSubmit={onSubmit}
        form={form}
        page={page}
        enabled
    />,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
