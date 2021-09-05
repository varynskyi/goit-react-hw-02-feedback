import React from 'react';
import PropTypes from 'prop-types';
import s from './Statistics.module.css';

const Statistics = ({ reviewsGood, reviewsNeutral, reviewsBad }) => (
    <div className={s.container}>
        <p className={s.item}>Good: {reviewsGood}</p>
        <p className={s.item}>Neutral: {reviewsNeutral}</p>
        <p className={s.item}>Bad {reviewsBad}</p>
    </div>
);

Statistics.propTypes = {
    reviewsGood: PropTypes.number.isRequired,
    reviewsNeutral: PropTypes.number.isRequired,
    reviewsBad: PropTypes.number.isRequired,
};

export default Statistics;