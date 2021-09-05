import React from 'react';
import PropTypes from 'prop-types';
import s from './Section.module.css';

const Section = ({ title, children }) => (
    <div className={s.container}>
        <h1 className={s.title}>{title}</h1>
        {children}
    </div>
);

Section.propTypes = {
    title: PropTypes.string.isRequired,
};

export default Section;