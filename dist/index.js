"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _react = _interopRequireDefault(require("react"));

var _reactDom = _interopRequireDefault(require("react-dom"));

require("./index.scss");

var _rating = _interopRequireDefault(require("./rating/rating"));

var serviceWorker = _interopRequireWildcard(require("./serviceWorker"));

/**
     * Set the rating value on the form
     *
     * @param {Int} value
     */
var setRatingValue = function setRatingValue(value) {
  rating = value;
},
    onSubmit = function onSubmit(e) {
  e.preventDefault();
  form.submitted = true;
  return form.submitted;
},
    form = {
  successMessage: 'Thanks for you feedback.',
  intro: '',
  title: 'We appreciate your feedback.',
  submitted: false,
  value: 0,
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

var rating = 0;

_reactDom.default.render( /*#__PURE__*/_react.default.createElement(_react.default.StrictMode, null, /*#__PURE__*/_react.default.createElement(_rating.default, {
  name: "Rating block",
  value: rating,
  errors: [],
  loading: false,
  setRatingValue: setRatingValue,
  onSubmit: onSubmit,
  form: form,
  page: page,
  enabled: true
})), document.getElementById('root')); // If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA


serviceWorker.unregister();