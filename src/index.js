import React from 'react';
import ReactDOM from 'react-dom';
import { RateComponent } from './components/rating';
import * as serviceWorker from './serviceWorker';

import './index.scss';

window.RatingBlock = window.RatingBlock || {
    Form: {
        SuccessMessage: 'Thanks for you feedback.',
        Intro: '',
        Title: 'We appreciate your feedback.'
    },
    Comments: {
        Enabled: true,
        ID: 1,
        Expanded: false,
        Name: 'Comments',
        Placeholder: 'Add a comment'
    },
    Page: {
        ID: 1,
        Name: 'Rating block'
    },
    Stars: {
        Labels: null,
        Max: 5,
        Tags: []
    }
};

let rating = 0,
    localTags = [];
const
    setRatingValue = (value) => {
        rating = value;
    },
    setCommentsValue = (value) => {
        console.log(value);
    },
    setTagsValue = (value) => {
<<<<<<< Updated upstream
        console.log(value);
=======
        if (form.tags.includes(value)) {
            localTags = arrayRemove(localTags, value);
        } else {
            localTags.push(value);
        }
        form.tags = localTags.toString();
        console.log(form.tags);
    },
    arrayRemove = (arr, value) => {
        return arr.filter(function (ele) { return ele !== value; });
>>>>>>> Stashed changes
    },
    onSubmit = (e) => {
        e.preventDefault();
        form.submitted = true;
        return form.submitted;
    },
    form = {
<<<<<<< Updated upstream
        successMessage: 'Thanks for you feedback.',
        intro: '',
        title: 'We appreciate your feedback.',
        submitted: false,
        comments: {
            ID: 1,
            enabled: false,
            expanded: false,
            props: []
=======
        successMessage: window.RatingBlock.Form ? window.RatingBlock.Form.SuccessMessage || '' : '',
        intro: window.RatingBlock.Form ? window.RatingBlock.Form.Intro || '' : '',
        title: window.RatingBlock.Form ? window.RatingBlock.Form.Title || '' : '',
        submitted: false,
        comments: {
            id: window.RatingBlock.Comments ? window.RatingBlock.Comments.ID || 0 : 0,
            enabled: window.RatingBlock.Comments ? window.RatingBlock.Comments.Enabled || false : false,
            value: '',
            expanded: window.RatingBlock.Comments ? window.RatingBlock.Comments.Expanded || false : false,
            name: window.RatingBlock.Comments ? window.RatingBlock.Comments.Name || '' : '',
            placeholder: window.RatingBlock.Comments ? window.RatingBlock.Comments.Placeholder || '' : ''
>>>>>>> Stashed changes
        },
        tags: ''
    },
    page = {
<<<<<<< Updated upstream
        id: 1,
        name: 'Rating block'
    },
    stars = {
        // Labels: { 1: 'nah', 2: 'meh', 3: 'ok', 4: 'woop', 5: 'wow' },
        Max: 5
        // Tags: [
        //     { 1: 'nah', 2: 'extremely nah', 3: 'very nah' },
        //     { 1: 'meh', 2: 'very meh', 3: 'extremely meh' },
        //     { 1: 'ok', 2: 'very ok', 3: 'extremely ok' },
        //     { 1: 'woop woop', 2: 'very woop woop', 3: 'extremely woop woop' },
        //     { 1: 'wow', 2: 'very wow', 3: 'extremely wow' }
        // ]
    };

ReactDOM.render(
    <RateComponent
        name='Rating block'
        errors={[]}
        value={rating}
        loading={false}
        setRatingValue={setRatingValue}
        setCommentsValue={setCommentsValue}
        setTagsValue={setTagsValue}
        onSubmit={onSubmit}
        stars={stars}
        form={form}
        page={page}
        previouslyRated={false}
        enabled
    />,
    document.getElementById('root')
=======
        id: window.RatingBlock.Page ? window.RatingBlock.Page.ID || 0 : 0,
        name: window.RatingBlock.Page ? window.RatingBlock.Page.Name || '' : ''
    },
    stars = window.RatingBlock.Stars ? (window.RatingBlock.Stars.Max === 0 ? { 'Max': 5 } : window.RatingBlock.Stars) : { 'Max': 5 };

ReactDOM.render(
    window.RatingBlock
        ? <RateComponent
            name='Rating block'
            errors={[]}
            value={rating}
            loading={false}
            stars={stars}
            form={form}
            page={page}
            previouslyRated={false}
            enabled
            expandCommentOnRate
            setRatingValue={setRatingValue}
            setCommentsValue={setCommentsValue}
            setTagsValue={setTagsValue}
            onSubmit={onSubmit}
        /> : <p>No data provided</p>,
    document.getElementById('rating_block')
>>>>>>> Stashed changes
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
