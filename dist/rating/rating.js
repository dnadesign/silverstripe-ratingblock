"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/esm/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/esm/createClass"));

var _createSuper2 = _interopRequireDefault(require("@babel/runtime/helpers/esm/createSuper"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/esm/inherits"));

var _react = _interopRequireWildcard(require("react"));

var _Rating = _interopRequireDefault(require("@material-ui/lab/Rating"));

var _classnames = _interopRequireDefault(require("classnames"));

var _loading = _interopRequireDefault(require("../loading/loading"));

var _core = require("@material-ui/core");

require("./sass/rating.scss");

/* eslint-disable no-unreachable */

/* eslint-disable no-undef */

/* eslint-disable one-var */

/* eslint-disable no-unused-vars */

/**
 * custom star svg as thje m,aterial ones had too thick stroke
 */
var Star = function Star(props) {
  return /*#__PURE__*/_react.default.createElement("svg", {
    width: "100%",
    height: "100%",
    viewBox: "0 0 21 20"
  }, /*#__PURE__*/_react.default.createElement("path", {
    d: "M18.7801293,8.27466498 L12.8268001,7.76130418 L10.5003474,2.28047975 L8.17320044,7.77122151 L2.22308341,8.27602977 L6.74248862,12.1911922 L5.38513229,18.0096159 L10.5,14.922487 L15.6167758,18.0107676 L14.267429,12.1911921 L18.7801293,8.27466498 Z",
    stroke: props.stroke ? props.stroke : '#fff',
    strokeWidth: "0.75px",
    fill: props.fill ? props.fill : 'none'
  }));
};

var Rating = /*#__PURE__*/function (_Component) {
  (0, _inherits2.default)(Rating, _Component);

  var _super = (0, _createSuper2.default)(Rating);

  function Rating(props) {
    var _this;

    (0, _classCallCheck2.default)(this, Rating);
    _this = _super.call(this, props); // Page name allows us to store a reference to the page without relying on a page relation

    _this.page = props.page;
    _this.page['name'] = _this.page.name || 'unknown';
    _this.form = props.form; // check if this page has been previously rated by looking
    // for thje cookie with the pageName

    var rating = props.value || 0,
        previouslyRated = rating > 0;
    _this.state = {
      value: rating,
      submitted: _this.form.submitted,
      expanded: _this.form.comments.expanded,
      previouslyRated: previouslyRated
    };
    return _this;
  }
  /**
   * Expand out the comments area
   */


  (0, _createClass2.default)(Rating, [{
    key: "setExpand",
    value: function setExpand(e) {
      e.preventDefault();
      this.setState({
        expanded: !this.state.expanded
      });
    }
    /**
     * Render title
     */

  }, {
    key: "renderTitle",
    value: function renderTitle() {
      return /*#__PURE__*/_react.default.createElement("h3", {
        className: "rating__title"
      }, this.form.title || 'Rate this page');
    }
    /**
     * Render comments area
     * - only if enabled in bootData
     */

  }, {
    key: "renderComments",
    value: function renderComments(disabled, submitted) {
      var _this2 = this;

      var commentsClasses = (0, _classnames.default)({
        'rating__comments': true,
        'rating__comments--expanded': this.state.expanded
      }),
          errors = this.props.errors;
      return this.form.comments.enabled && /*#__PURE__*/_react.default.createElement("div", {
        className: "rating__comments-outer"
      }, /*#__PURE__*/_react.default.createElement("button", {
        className: "rating__comments-toggle",
        onClick: function onClick(e) {
          return _this2.setExpand(e);
        },
        "aria-controls": "ratingcomments",
        "aria-expanded": this.state.expanded,
        id: "rating_commnets_expand",
        disabled: disabled || submitted
      }, "Add a comment"), /*#__PURE__*/_react.default.createElement("div", {
        className: commentsClasses,
        id: "ratingcomments",
        "aria-hidden": !this.state.expanded,
        "aria-expanded": this.state.expanded
      }, /*#__PURE__*/_react.default.createElement("div", {
        className: "rating__comments-field"
      }, /*#__PURE__*/_react.default.createElement("label", {
        className: "sr-only",
        htmlFor: this.props.CommentsID
      }, "Additional comments"), /*#__PURE__*/_react.default.createElement("textarea", Object.assign({
        rows: 5,
        readOnly: submitted,
        disabled: disabled || submitted
      }, this.form.comments.props)), errors['comments'] && /*#__PURE__*/_react.default.createElement("p", {
        className: "rating__error"
      }, errors['comments']))));
    }
    /**
     * Render stars
     */

  }, {
    key: "renderStars",
    value: function renderStars(disabled) {
      var _this3 = this;

      var _this$props = this.props,
          errors = _this$props.errors,
          value = _this$props.value;
      return /*#__PURE__*/_react.default.createElement("div", {
        className: "rating__stars"
      }, /*#__PURE__*/_react.default.createElement(_Rating.default, {
        name: "rating-".concat(this.props.name),
        emptyIcon: /*#__PURE__*/_react.default.createElement(Star, {
          stroke: "#fff"
        }),
        icon: /*#__PURE__*/_react.default.createElement(Star, {
          stroke: "#fff",
          fill: "#fff"
        }),
        value: parseInt(this.state.value, 10),
        onChange: function onChange(event, newValue) {
          _this3.props.setRatingValue(newValue);

          _this3.setState({
            value: newValue
          });
        },
        disabled: disabled || this.form.submitted
      }), errors['rating'] && /*#__PURE__*/_react.default.createElement("p", {
        className: "rating__error"
      }, "Please select a rating"));
    }
    /**
     * Render Submit button
     */

  }, {
    key: "renderSubmit",
    value: function renderSubmit(disabled) {
      var _this4 = this;

      return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement("input", {
        type: "hidden",
        name: "pageName",
        value: this.page.name
      }), /*#__PURE__*/_react.default.createElement("input", {
        type: "hidden",
        name: "pageID",
        value: this.page.id
      }), /*#__PURE__*/_react.default.createElement("button", {
        id: "rating_submit",
        type: "submit",
        className: "button button--primary button--small button--cta button--rating rating__action",
        "aria-disabled": disabled,
        disabled: disabled,
        onClick: function onClick(e) {
          var submitted = _this4.props.onSubmit(e);

          submitted && _this4.setState({
            submitted: true
          });
        }
      }, "Submit"));
    }
  }, {
    key: "renderIntro",
    value: function renderIntro(loading, submitted) {
      return loading ? /*#__PURE__*/_react.default.createElement("div", {
        className: "rating__loading"
      }, /*#__PURE__*/_react.default.createElement(_loading.default, {
        id: "rating-loading",
        showImmediately: true
      })) : submitted ?
      /*#__PURE__*/
      // has just been submitted - show success message
      _react.default.createElement(_react.default.Fragment, null, this.form.successMessage ? /*#__PURE__*/_react.default.createElement("div", {
        className: "rating__result",
        dangerouslySetInnerHTML: {
          __html: this.form.successMessage
        }
      }) : /*#__PURE__*/_react.default.createElement("div", {
        className: "rating__result"
      }, /*#__PURE__*/_react.default.createElement("p", null, "Thank you for your submission"))) : this.state.previouslyRated ?
      /*#__PURE__*/
      // rated in a previous session - dont show any message
      _react.default.createElement("div", null) : this.form.intro ?
      /*#__PURE__*/
      // intro
      _react.default.createElement("div", {
        className: "rating__into",
        dangerouslySetInnerHTML: {
          __html: this.form.intro
        }
      }) : /*#__PURE__*/_react.default.createElement("div", null);
    }
    /**
     * States:
     * Ratings disabled (via CMS / bootata) - render empty div
     * Previously Submitted (from cookie) - show title and stars only. Dont show comments
     *      as that could be a security concern
     * Loading - show disaabled form with a spinner
     * Submitted - user has just submitted a rating - show success and disabled form
     * Error - Error from the graphql backend. Only show errors message.
     */

  }, {
    key: "render",
    value: function render() {
      var _this$props2 = this.props,
          enabled = _this$props2.enabled,
          onSubmit = _this$props2.onSubmit;

      if (!enabled) {
        return /*#__PURE__*/_react.default.createElement("div", {
          "data-rating-disabled": true
        });
      }

      var _this$props3 = this.props,
          name = _this$props3.name,
          errors = _this$props3.errors,
          loading = _this$props3.loading,
          disabled = this.state.previouslyRated || loading || this.form.submitted,
          classes = (0, _classnames.default)({
        'rating': true,
        'rating--disabled': disabled,
        'rating--expanded': this.state.expanded
      });
      return /*#__PURE__*/_react.default.createElement("div", {
        className: classes,
        "data-rating-enabled": true,
        "data-rating-name": name
      }, errors && errors.response ?
      /*#__PURE__*/
      // errors returned from graphql. dont render anything else
      _react.default.createElement("div", {
        className: "rating__message"
      }, /*#__PURE__*/_react.default.createElement("p", null, "An errors occurred", /*#__PURE__*/_react.default.createElement("br", null), "Please try again later")) : /*#__PURE__*/_react.default.createElement("form", {
        className: "rating__form"
      }, this.renderTitle(), this.renderIntro(loading, this.form.submitted), this.renderStars(disabled), !this.state.previouslyRated && /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, this.renderComments(disabled, this.form.submitted), this.renderSubmit(disabled))));
    }
  }]);
  return Rating;
}(_react.Component);

var _default = Rating;
exports.default = _default;