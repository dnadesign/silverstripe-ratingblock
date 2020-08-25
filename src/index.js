import React from 'react';
import ReactDOM from 'react-dom';
import { RateComponent } from './components/rating';
import * as serviceWorker from './serviceWorker';

import './index.scss';

let rating = 0;
const
    setRatingValue = (value) => {
        rating = value;
    },
    setCommentsValue = (value) => {
        console.log(value);
    },
    setTagsValue = (value) => {
        console.log(value);
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
        },
        tags: ''
    },
    page = {
        id: 1,
        name: 'Rating block'
    },
    stars = {
        Labels: { 1: 'nah', 2: 'meh', 3: 'ok', 4: 'woop', 5: 'wow' },
        Max: 5,
        Tags: [
            { 1: 'nah', 2: 'extremely nah', 3: 'very nah' },
            { 1: 'meh', 2: 'very meh', 3: 'extremely meh' },
            { 1: 'ok', 2: 'very ok', 3: 'extremely ok' },
            { 1: 'woop woop', 2: 'very woop woop', 3: 'extremely woop woop' },
            { 1: 'wow', 2: 'very wow', 3: 'extremely wow' }
        ]
    };

ReactDOM.render(
    <RateComponent
        name='Rating block'
        value={rating}
        errors={[]}
        loading={false}
        setRatingValue={setRatingValue}
        setCommentsValue={setCommentsValue}
        setTagsValue={setTagsValue}
        onSubmit={onSubmit}
        form={form}
        page={page}
        stars={stars}
        enabled
    />,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
