import React from 'react';
import PropTypes from 'prop-types';
import css from '../../styles/styles.module.css';

export default function Button({ onClick }) {
  return (
    <button type="button" className={css.loadMoreBtn} onClick={onClick}>
      Load more
    </button>
  );
}

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
};
