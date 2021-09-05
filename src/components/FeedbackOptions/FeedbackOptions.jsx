import React from 'react';
import PropTypes from 'prop-types';
import s from './FeedbackOptions.module.css';

const FeedbackOptions = ({ onClick }) => (
    <div>
        <button className={s.btn} type="button" name="Good" onClick={onClick}>Good</button>
        <button className={s.btn} type="button" name="Neutral" onClick={onClick}>Neutral</button>
        <button className={s.btn} type="button" name="Bad" onClick={onClick}>Bad</button>
    </div>
);

FeedbackOptions.propTypes = {
    onClick: PropTypes.func.isRequired,
};

export default FeedbackOptions;