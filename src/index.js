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
        form.comments.value = value;
    },
    setTagsValue = (value) => {
        if (form.tags.includes(value)) {
            form.tags = arrayRemove(form.tags, value);
        } else {
            form.tags.push(value)
        }
        console.log(form.tags.toString());
    },
    arrayRemove = (arr, value) => {
        return arr.filter(function (ele) { return ele != value; });
    },
    onSubmit = (e) => {
        e.preventDefault();
        form.submitted = true;
        return form.submitted;
    },
    form = {
        successMessage: window.RatingBlock.RatingFormSuccessMessage,
        intro: window.RatingBlock.RatingFormIntro,
        title: window.RatingBlock.RatingFormTitle,
        submitted: false,
        comments: {
            id: window.RatingBlock.CommentsID,
            enabled: window.RatingBlock.EnableComments,
            value: '',
            name: window.RatingBlock.CommentsName,
            placeholder: window.RatingBlock.CommentsPlaceholder
        },
        tags: []
    },
    page = {
        id: window.RatingBlock.PageID,
        name: window.RatingBlock.PageName
    },
    stars = {
        Labels: window.RatingBlock.RatingStars.Labels,
        Max: window.RatingBlock.RatingStars ? (window.RatingBlock.RatingStars.Max === 0 ? { 'Max': 5 } : window.RatingBlock.RatingStars) : { 'Max': 5 },
        Tags: window.RatingBlock.RatingStars.Tags
    };


ReactDOM.render(
    window.RatingBlock ?
        <RateComponent
            name='Rating block'
            errors={[]}
            value={rating}
            loading={false}
            stars={stars}
            form={form}
            page={page}
            previouslyRated={false}
            enabled
            setRatingValue={setRatingValue}
            setCommentsValue={setCommentsValue}
            setTagsValue={setTagsValue}
            onSubmit={onSubmit}
        /> : <p>No data provided</p>,
    document.getElementById('rating_block')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
