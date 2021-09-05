import React from 'react';
import PropTypes from 'prop-types';
import s from './StatisticsTotal.module.css';

const StatisticsTotal = ({ totalReviews, positiveReviews }) => (
    <div className={s.container}>
        <p className={s.item}>
            <span>Total reviews:</span>
            <span>{totalReviews}</span>
        </p>
        <p className={s.item}>
            <span>Positive feedback(%):</span>
            <span>{positiveReviews}</span>
        </p>
    </div>
);

StatisticsTotal.propTypes = {
    totalReviews: PropTypes.number.isRequired,
    positiveReviews: PropTypes.number.isRequired,
};

export default StatisticsTotal;