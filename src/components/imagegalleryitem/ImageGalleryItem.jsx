import React from 'react';
import css from '../../styles/styles.module.css';

import PropTypes from 'prop-types';

export default function ImageGalleryItem({ url, tags, onClick }) {
  return (
    <>
      <li className={css.item}>
        <img
          className={css.galleryImg}
          src={url}
          alt={tags}
          onClick={() => onClick(url)}
        />
      </li>
    </>
  );
}

ImageGalleryItem.propTypes = {
  url: PropTypes.string.isRequired,
  tags: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};
