/* eslint-disable no-unreachable */
/* eslint-disable no-undef */
/* eslint-disable one-var */
/* eslint-disable no-unused-vars */
import React, { Component } from 'react';
import { Rating } from '@material-ui/lab';
import classNames from 'classnames';
import Loading from '../loading/loading';
import Star from '../star/star';
import Tag from '../tag/tag';

import './sass/rating.scss';

class RateComponent extends Component {
    constructor(props) {
        super(props);

        // Page name allows us to store a reference to the page without relying on a page relation
        this.page = props.page;
        this.page['name'] = this.page.name || 'unknown';

        // check if this page has been previously rated by looking
        // for thje cookie with the pageName
        const rating = props.value || 0,
            previouslyRated = rating > 0;

        this.state = {
            value: rating,
            hover: -1,
            tags: [],
            comments: this.props.form.comments.value,
            expanded: this.props.form.comments.expanded,
            previouslyRated: previouslyRated
        };

        // this.renderTags = this.renderTags.bind(this);
        this.handleTagChange = this.handleTagChange.bind(this);
    }

    /**
     * Expand out the comments area
     */
    setExpand(e, prevent) {
        prevent && e.preventDefault();
        this.setState({ expanded: !this.state.expanded });
    }

    /**
     * Render title
     */
    renderTitle() {
        return <h3
            className='rating__title'
        >
            {this.props.form.title || 'Rate this page'}
        </h3>;
    }

    /**
     * Render comments area
     * - only if enabled in bootData
     */
    renderComments(disabled, submitted) {
        const commentsClasses = classNames({
            'rating__comments': true,
            'rating__comments--expanded': this.state.expanded
        }), { errors, stars } = this.props;

        return this.props.form.comments.enabled && (
            <div className='rating__comments-outer'>
                {(stars && (!stars.Tags || stars.Tags.length === 0)) && (
                    <button
                        className='rating__comments-toggle'
                        onClick={e => this.setExpand(e, true)}
                        aria-controls='ratingcomments'
                        aria-expanded={this.state.expanded}
                        id='rating_commnets_expand'
                        disabled={disabled || submitted}
                    > Add a comment </button>
                )}
                <div
                    className={commentsClasses}
                    id='ratingcomments'
                    aria-hidden={!this.state.expanded}
                    aria-expanded={this.state.expanded}
                >
                    <div className='rating__comments-field'>
                        <label
                            className='sr-only'
                            htmlFor={
                                this.props.CommentsID
                            }
                        >
                            Additional comments
                        </label>
                        <textarea
                            rows={5}
                            readOnly={submitted}
                            disabled={disabled || submitted}
                            value={this.state.comments}
                            onChange={(event) => {
                                this.props.setCommentsValue(event.target.value);
                                this.setState({ comments: event.target.value });
                            }}
                            name={this.props.form.comments.name}
                        />
                        {errors['comments'] && (
                            <p className='rating__error'>{errors['comments']}</p>
                        )}
                    </div>
                </div>
            </div>
        );
    }

    /**
     * Render stars
     */
    renderStars(disabled) {
        const { errors, stars } = this.props;

        return ((stars && stars.Max > 0) &&
            <div className='rating__stars'>
                <Rating
                    name={`rating-${this.props.name}`}
                    emptyIcon={<Star stroke='#fff' />}
                    icon={<Star stroke='#fff' fill='#fff' />}
                    value={parseInt(this.state.value, 10)}
                    max={stars.Max}
                    onChange={(event, newValue) => {
                        this.props.setRatingValue(newValue);
                        this.setState({ value: newValue });
                        this.setState({ tags: '' });
                        this.renderTags();
                    }}
                    onChangeActive={(event, newHover) => {
                        this.setState({ hover: newHover });
                    }}
                    disabled={disabled}
                />
                {this.state.value !== null && (stars.Labels && Object.keys(stars.Labels).length > 0) && <p>{stars.Labels[this.state.hover !== -1 ? this.state.hover : this.state.value]}</p>}
                {errors['rating'] && (
                    <p className='rating__error'>Please select a rating</p>
                )}
            </div>
        );
    }

    handleTagChange(e, tag) {
        if (e.currentTarget.checked) {
            this.setState({ tags: [...this.state.tags, tag] }, () => {
                !this.state.expanded && this.setExpand(e, false);
                this.props.setTagsValue([...this.state.tags].join(','));
            });
        } else {
            const copy = [...this.state.tags];
            const index = copy.indexOf(tag);
            if (index > -1) {
                copy.splice(index, 1);
                this.setState({ tags: copy }, () => {
                    this.state.tags.length === 0 && this.setExpand(e, false);
                    this.props.setTagsValue(copy.join(','));
                });
            }
        }
    }

    renderTags(disabled) {
        const { stars, form } = this.props;
        const tagList = form.tags && form.tags.split(',');

        return (this.state.value > 0 && stars && stars.Tags && stars.Tags.length > 0) && (
            <div className='rating__tags'>
                {
                    Object.values(stars.Tags[this.state.value - 1]).map((tag) => {
                        const checked = tagList.includes(tag);
                        return <Tag
                            key={`tag_${tag}`}
                            label={tag}
                            active={checked}
                            disabled={disabled}
                            onChange={e => this.handleTagChange(e, tag)}
                        />;
                    })
                }
                <input type='hidden' name='input_tags' id='input_tags' value={this.state.tags} />
            </div>
        );
    }

    /**
     * Render Submit button
     */
    renderSubmit(disabled) {
        return <>
            <input
                type='hidden'
                name='pageName'
                value={this.page.name}
            />
            <input
                type='hidden'
                name='pageID'
                value={this.page.id}
            />
            <button
                id='rating_submit'
                type='submit'
                className='button button--primary button--small button--cta button--rating rating__action'
                aria-disabled={disabled}
                disabled={disabled}
                onClick={(e) => {
                    this.props.onSubmit(e);
                }}
            >
                Submit
            </button>
        </>;
    }

    renderIntro(loading, submitted) {
        return (
            loading ? (
                <div className='rating__loading'>
                    <Loading id='rating-loading' showImmediately />
                </div>
            ) : submitted ? (
                // has just been submitted - show success message
                <>
                    {this.props.form.successMessage ? (
                        <div
                            className='rating__result'
                            dangerouslySetInnerHTML={{
                                __html: this.props.form.successMessage
                            }}
                        />
                    ) : (
                            <div className='rating__result'>
                                <p>Thank you for your submission</p>
                            </div>
                        )}
                </>
            ) : this.state.previouslyRated ? (
                // rated in a previous session - dont show any message
                <div />
            ) : this.props.form.intro ? (
                // intro
                <div
                    className='rating__into'
                    dangerouslySetInnerHTML={{
                        __html: this.props.form.intro
                    }}
                />
            ) : <div />
        );
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
    render() {
        const { enabled } = this.props;

        if (!enabled) {
            return <div data-rating-disabled />;
        }

        const { name, errors, loading, form } = this.props,
            disabled = this.state.previouslyRated || loading || form.submitted,
            classes = classNames({
                'rating': true,
                'rating--disabled': disabled,
                'rating--expanded': this.state.expanded
            });

        return (
            <div className={classes} data-rating-enabled data-rating-name={name}>

                {errors && errors.response ? (
                    // errors returned from graphql. dont render anything else
                    <div className='rating__message'>
                        <p>An errors occurred<br />Please try again later</p>
                    </div>
                ) : (
                        <form
                            className='rating__form'
                        >
                            {this.renderTitle()}
                            {this.renderIntro(loading, form.submitted)}
                            {this.renderStars(disabled)}
                            {this.renderTags(disabled)}

                            {!this.state.previouslyRated && (
                                <>
                                    {this.renderComments(disabled, form.submitted)}
                                    {this.renderSubmit(disabled)}
                                </>
                            )}
                        </form>
                    )}
            </div>
        );
    }
}

export default RateComponent;
